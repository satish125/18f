(function () {

   //--------------------------------------------------
   // Drug Data
   //--------------------------------------------------
   var enforcementData = function($q, $http){
      var self = this;

      //------------------------------------------------
      // Retrieves the Drug Data
      //------------------------------------------------
      self.getEnforcementData = function(type, query, limit){ 
         var deferred = $q.defer();
         
         $http.get('https://api.fda.gov/' + type + '/enforcement.json?search=' + query + '&limit=' + limit + '&api_key=mHWQoZTaPhujOVrDtzs8rCEvToN1n6xCDSIVdZbw').
         success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            deferred.resolve(data);
         }).
         error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(status);
         });
      
         return deferred.promise;
      };

      //------------------------------------------------
      // Retrieves the Drug Counts
      //------------------------------------------------
      self.getEnforcementCount = function(type, query, countField){ 
         var deferred = $q.defer();
         
         $http.get('https://api.fda.gov/' + type + '/enforcement.json?search=' + query + '&count=' + countField + '&api_key=mHWQoZTaPhujOVrDtzs8rCEvToN1n6xCDSIVdZbw').
         success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            deferred.resolve(data);
         }).
         error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(status);
         });
      
         return deferred.promise;
      };

      return self;
   };

   angular.module('openFDA.factory', [])
      .factory('enforcementData', ['$q', '$http', enforcementData]);

}());