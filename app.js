(function () {    

   //Application Main Controller
<<<<<<< HEAD
   var mainCtrl = function($scope, enforcementData)
=======
   var mainCtrl = function($scope, drugData)
>>>>>>> origin/dashboard
   {
      $scope.version = 'Version 0.1.0 - 06.19.2015';
      $scope.title = 'Open FDA Dashboard';
   }

   angular.module('openFDAApp', ['ui.bootstrap', 'mvMinerva', 'openFDA.enforcement', 'openFDA.factory'])
      .controller('mainCtrl', ['$scope', 'enforcementData', mainCtrl])

}());