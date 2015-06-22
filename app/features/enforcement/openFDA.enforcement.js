(function () {
   var enforcementCtrl = function($scope, enforcementFactory)
   {
      //retrieve the map data
      $scope.getMap = function(status, classification){
         enforcementFactory.getMapData('status:"' + status + '"+AND+classification:"' + classification + '"').then(function(mapData){
            $scope.mapData = mapData;
            $scope.mapLabel = 'Map - ' + classification + ' Ongoing Drug Recalls';
         });
      };

      //retrieve the status
      $scope.getChart = function(classification){
         enforcementFactory.getChartData('classification:"' + classification + '"').then(function(chartData){
            $scope.chartData = chartData;
            $scope.chartLabel = 'Top 3 Cities - ' + classification + ' Drug Recalls';
         });
      };

      //retrieve the status
      $scope.getStatus = function(classification){
         enforcementFactory.getStatusData('classification:"' + classification + '"').then(function(statusData){
            $scope.statusData = statusData;
            $scope.statusLabel = 'Status - ' + classification + ' Drug Recalls';
         });
      };

      //function to get the data for each drug classification
      $scope.selectClass = function(classification){
         $scope.getMap('ongoing', classification);
         $scope.getChart(classification);
         $scope.getStatus(classification);
      };

      //initialization function
      function init() {
         $scope.selectClass('Class I');
      }
      init();

      //map options
      $scope.mapOptions = {
         chart: {
            height: 700,
            width: 900,
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
            suffix: ' Drug Recall(s)'
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
         types: {
            bar: {
               stacked: true
            }
         }
      };
   };

   angular.module('openFDA.enforcement', ['openFDA.enforcement.factory'])
      .controller('enforcementCtrl', ['$scope', 'enforcementFactory', enforcementCtrl]);
}());