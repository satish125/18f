(function () {
   var enforcementCtrl = function($scope, enforcementFactory)
   {
      //retrieve the map data
      $scope.getMap = function(status, classification){
         enforcementFactory.getMapData($scope.type, 'status:"' + status + '"+AND+classification:"' + classification + '"').then(function(mapData){
            $scope.mapData = mapData;
            $scope.mapLabel = 'Map - ' + classification + ' Ongoing ' + toTitleCase($scope.type) + ' Recalls';
         });
      };

      //retrieve the status
      $scope.getChart = function(classification){
         enforcementFactory.getChartData($scope.type, 'classification:"' + classification + '"').then(function(chartData){
            $scope.chartData = chartData;
            $scope.chartLabel = 'Top 10 Cities - ' + classification + ' ' + toTitleCase($scope.type) + ' Recalls';
         });
      };

      //retrieve the status
      $scope.getStatus = function(classification){
         enforcementFactory.getStatusData($scope.type, 'classification:"' + classification + '"').then(function(statusData){
            $scope.statusData = statusData;
            $scope.statusLabel = 'Status - ' + classification + ' ' + toTitleCase($scope.type) + ' Recalls';
         });
      };

      //REPLACE with real data
      $scope.recallInfo = 'Drug 1 \nDrug 2 \nDrug 3 \nDrug 4 \nDrug 5';

      //function to get the data for each drug classification
      $scope.selectClass = function(classification){
         $scope.class = classification;
         $scope.getMap('ongoing', classification);
         $scope.getChart(classification);
         $scope.getStatus(classification);
         $scope.classInfo = changeDescription(classification);
      };

      //sets the type to use for the queries
      $scope.selectType = function(type){
         $scope.type = type;
         $scope.selectClass($scope.class);
         $scope.titleLabel = type.toUpperCase() + ' RECALLS';
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

      //initialization function
      function init() {
         $scope.type = 'drug';
         $scope.class = 'Class I';
         $scope.selectType($scope.type);
      }
      init();

      //map options
      $scope.mapOptions = {
         chart: {
            margin: {
               top: 0,
               right: 35,
               bottom: 0,
               left: 90
            },
            type: 'map',
            colors: ['#2C82C0', '#4C89A7', '#6D918F', '#8D9976', '#AEA15E', '#CEA945', '#EFB12D', '#EA9D28', '#E58923', '#E0751E', '#DB6119', '#D64D14', '#D23A0F']
         },
         tooltip: {
            suffix: ' Recall(s)'
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
               right: 10,
               bottom: 50
            },
            type: 'hbar',
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
               stacked: true
            }
         }
      };

      function toTitleCase(str)
      {
         return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      }
   };

   angular.module('openFDA.enforcement', ['openFDA.enforcement.factory'])
      .controller('enforcementCtrl', ['$scope', 'enforcementFactory', enforcementCtrl]);
}());