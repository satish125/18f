(function () {
   var enforcementCtrl = function($scope, enforcementFactory)
   {
      //retrieve the map data
      $scope.getMap = function(status, classification){
<<<<<<< HEAD
         enforcementFactory.getMapData('status:"' + status + '"+AND+classification:"' + classification + '"').then(function(mapData){
            $scope.mapData = mapData;
            $scope.mapLabel = 'Map - ' + classification + ' Ongoing Drug Recalls';
=======
         enforcementFactory.getMapData($scope.type, 'status:"' + status + '"+AND+classification:"' + classification + '"').then(function(mapData){
            $scope.mapData = mapData;
            $scope.mapLabel = 'Map - ' + classification + ' Ongoing ' + toTitleCase($scope.type) + ' Recalls';
>>>>>>> origin/dashboard
         });
      };

      //retrieve the status
      $scope.getChart = function(classification){
<<<<<<< HEAD
         enforcementFactory.getChartData('classification:"' + classification + '"').then(function(chartData){
            $scope.chartData = chartData;
            $scope.chartLabel = 'Top 3 Cities - ' + classification + ' Drug Recalls';
=======
         enforcementFactory.getChartData($scope.type, 'classification:"' + classification + '"').then(function(chartData){
            $scope.chartData = chartData;
            $scope.chartLabel = 'Top 10 Cities - ' + classification + ' ' + toTitleCase($scope.type) + ' Recalls';
>>>>>>> origin/dashboard
         });
      };

      //retrieve the status
      $scope.getStatus = function(classification){
<<<<<<< HEAD
         enforcementFactory.getStatusData('classification:"' + classification + '"').then(function(statusData){
            $scope.statusData = statusData;
            $scope.statusLabel = 'Status - ' + classification + ' Drug Recalls';
=======
         enforcementFactory.getStatusData($scope.type, 'classification:"' + classification + '"').then(function(statusData){
            $scope.statusData = statusData;
            $scope.statusLabel = 'Status - ' + classification + ' ' + toTitleCase($scope.type) + ' Recalls';
>>>>>>> origin/dashboard
         });
      };

      //function to get the data for each drug classification
      $scope.selectClass = function(classification){
<<<<<<< HEAD
         $scope.getMap('ongoing', classification);
         $scope.getChart(classification);
         $scope.getStatus(classification);
      };

      //initialization function
      function init() {
         $scope.selectClass('Class I');
=======
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
         $scope.selectClass($scope.class);
>>>>>>> origin/dashboard
      }
      init();

      //map options
      $scope.mapOptions = {
         chart: {
<<<<<<< HEAD
            height: 700,
            width: 900,
=======
            height: 485,
            width: 660,
>>>>>>> origin/dashboard
            margin: {
               top: 0,
               right: 35,
               bottom: 0,
               left: 90
            },
            type: 'map',
            colors: ['#00C700', '#21C700', '#42C700', '#64C700', '#85C700', '#A6C700', '#C7C700', '#C7A600', '#C78500', '#C76400', '#C74200', '#C72100', '#C70000']
         },
         tooltip: {
<<<<<<< HEAD
            suffix: ' Drug Recall(s)'
=======
            suffix: ' Recall(s)'
>>>>>>> origin/dashboard
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
<<<<<<< HEAD
            height: 460,
            width: 460,
            type: 'bar',
            colors: ['#A6A6A6']
         },
         tooltip: {
            suffix: ' Drug Recall(s)'
         },
         xAxis: {
            spacing: 0.25
         },
=======
            height: 490,
            width: 310,
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
>>>>>>> origin/dashboard
         types: {
            bar: {
               stacked: true
            }
         }
      };
<<<<<<< HEAD
=======

      function toTitleCase(str)
      {
         return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      }
>>>>>>> origin/dashboard
   };

   angular.module('openFDA.enforcement', ['openFDA.enforcement.factory'])
      .controller('enforcementCtrl', ['$scope', 'enforcementFactory', enforcementCtrl]);
}());