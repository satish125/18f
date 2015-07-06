(function () {
   var enforcementCtrl = function($scope, $timeout, $q, $window, enforcementFactory)
   {
      //retrieve the map data
      $scope.getMap = function(status, classification){
         return enforcementFactory.getMapData($scope.type, 'status:"' + status + '"+AND+classification:"' + classification + '"').then(function(mapData){
            $scope.mapData = mapData;
            $scope.mapLabel = 'Map - ' + classification + ' Ongoing ' + toTitleCase($scope.type) + ' Recalls';
         });
      };

      //retrieve the status
      $scope.getChart = function(classification){
         return enforcementFactory.getChartData($scope.type, 'classification:"' + classification + '"').then(function(chartData){
            $scope.chartData = chartData;
            $scope.chartLabel = 'Top 10 Cities - ' + classification + ' ' + toTitleCase($scope.type) + ' Recalls';
         });
      };

      //retrieve the status
      $scope.getStatus = function(classification){
         return enforcementFactory.getStatusData($scope.type, 'classification:"' + classification + '"').then(function(statusData){
            $scope.statusData = statusData;
            $scope.statusLabel = 'Status - ' + classification + ' ' + toTitleCase($scope.type) + ' Recalls';
         });
      };

      $scope.setDataTable = function(classification, stateQuery){
         var stateQueryString = stateQuery || '';
         return enforcementFactory.getAllEnforcementData($scope.type, 'classification:"' + classification + '"' + stateQueryString)
            .then(function(data){
               if(!$scope.pageState.isLoading){
                  buildTable(data);
               }
               return data;
            });
      };

      //sets the type to use for the queries
      $scope.selectType = function(type){
         $scope.type = type;
         $scope.titleLabel = toTitleCase(type) + ' Recalls';
         
         return $scope.selectClass($scope.class);
      };

      //function to get the data for each drug classification
      $scope.selectClass = function(classification){
         $scope.class = classification;
         $scope.classInfo = changeDescription(classification);
         
         //Return a promise when all of these operations are complete
         return $q.all([
            $scope.getMap('ongoing', classification),
            $scope.getChart(classification),
            $scope.getStatus(classification),
            $scope.setDataTable(classification)
         ]);
      };

      //function to change the description of the 
      function changeDescription(classification) {
         var info = '';

         switch(classification)
         {
            case 'Class I':
               info = 'CLASS I - Dangerous or defective products that predictably could cause serious health problems or death. Examples include: food found to contain botulinum toxin, food with undeclared allergens, a label mix-up on a lifesaving drug, or a defective artificial heart valve.';
               break;
            case 'Class II':
               info = 'CLASS II - Products that might cause a temporary health problem, or pose only a slight threat of a serious nature. Example: a drug that is under-strength but that is not used to treat life-threatening situations.';
               break;
            case 'Class III':
               info = 'CLASS III - Products that are unlikely to cause any adverse health reaction, but that violate FDA labeling or manufacturing laws. Examples include: a minor container defect and lack of English labeling in a retail food.';
               break;
         }

         return info;
      }

      //Issues a new query for the data table based on a state being clicked on the map
      $scope.$on("mapChart:click", function(event, data){
         $scope.setDataTable($scope.class, '+AND+state:"'+ data.di +'"');
      });

      //Issues a new query for the data table based on a state being clicked on the map
      $scope.$on("hbarChart:click", function(event, data){
         $scope.setDataTable($scope.class, '+AND+city:"'+ data.x +'"');
      });

      //resize event for responsive chart design
      angular.element($window).on('resize', function(){
         $scope.$broadcast("event:windowResize");
         resizeTable();
      });

      //Global variables for the data table on the page
      var myTable = undefined;

      //initialization function
      function init() {
         $scope.pageState = { isLoading: true};
         $scope.type = 'food';
         $scope.class = 'Class I';

         //Store the promise result for the 5 latest recalls
         var recentRecallsPromise = enforcementFactory.getFiveLatestRecalls().then(function(lastestRecalls){
            $scope.lastestRecalls = lastestRecalls;
         });

         $q.all([
            $scope.selectType($scope.type),
            recentRecallsPromise
         ])
         .then(function(results){
            //Show content when all the data is done loading
            $timeout(function(){ $scope.pageState.isLoading = false; }, 0)
            return results[0][3]; 
         })
         .then(function(tableData){
            $timeout(function(){

               //Initialize the Data Table
               myTable = $('#datagridinfo').DataTable({
                  order: [[ 0, "desc" ]],
                  columns: [
                     { data: 'recall_initiation_date' },
                     { data: 'city' },
                     { data: 'state' },
                     { data: 'recalling_firm'},
					      { 
                        data: 'product_quantity',
                        defaultContent: 'Unknown'
                     },
                     { data: 'status' },
                     { data: 'product_description'},
                     { data: 'reason_for_recall'}
                  ],
                  pagingType: "simple",
                  responsive: true
               });

               //Set the data in the table
               buildTable(tableData);
            }, 300);
         });        
      }

      init();

      //map options
      $scope.mapOptions = {
         chart: {
            margin: {
               top: 0,
               right: 35,
               bottom: 0,
               left: 35
            },
            type: 'map',
            backgroundColor: 'transparent',
            colors: ['#2C82C0', '#4C89A7', '#6D918F', '#8D9976', '#AEA15E', '#CEA945', '#EFB12D', '#EA9D28', '#E58923', '#E0751E', '#DB6119', '#D64D14', '#D23A0F']
         },
         tooltip: {
            suffix: ' Recall(s)',
            undefinedAsZero: true
         },
         types: {
            map: {
               mapfile: 'us-states',
               quantizeScale: [0, 100],
               showPoints: false
            }
         }
      };

      //bar chart options
      $scope.chartOptions = {
         chart: {
            margin: {
               left: 110,
               right: 30,
               bottom: 50
            },
            type: 'hbar',
            backgroundColor: 'transparent',
            colors: ['#A6A6A6']
         },
         tooltip: {
            suffix: ' Recall(s)'
         },
         xAxis: {
            title: {
               text: 'Recalls'
            },
            spacing: 0.25
         },
         yAxis: {
            title: {
               text: 'City'
            },
            labels: {
               enabled: true
            },
            ticks: 5
         },
         types: {
            bar: {
               labels: {
                  enabled: true
               },
               stacked: true
            }
         }
      };

      /*
         Builds the data table rows based on some data that was passed in
      */
      function buildTable(data){
         var tableData = data.results;

         //Clear the table if it has any records
         if( myTable.data().any() )
         {
            myTable.clear(); 
         } 

         //add dashes to the dates
         angular.forEach(tableData, function(obj, inx){
            if(obj.recall_initiation_date){
               obj.recall_initiation_date = $scope.addDashes(obj.recall_initiation_date);
            }
         });

         //Add rows to the table then redraw the table
         myTable.rows.add(tableData).draw();
         resizeTable();
      }

      //Ensures that the Data Table does not overflow it's parent container
      function resizeTable(){
         var containingWidth = $('.datagridcol').width();
         $('.datagrid').width(containingWidth);
         myTable.responsive.rebuild();
         myTable.responsive.recalc();
      }

      function toTitleCase(str)
      {
         return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      }

      /**
        * Add dashes to date with format yyyy-mm-dd
        */
      $scope.addDashes = function(num){
         var numArr = num.toString().split('');
         
          var len = numArr.length;
          var final = [];
          for (var i = 0; i < len; i++){
              final.push(numArr[i]);
            if (i == 3) {
               final.push("-")
            } else if(i == 5) {
               final.push("-")
            }
          }  
         return final.join("");
      }
   };

   angular.module('openFDA.enforcement', ['openFDA.enforcement.factory'])
      .controller('enforcementCtrl', ['$scope', '$timeout', '$q', '$window', 'enforcementFactory', enforcementCtrl]);
}());