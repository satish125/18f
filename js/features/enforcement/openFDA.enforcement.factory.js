(function () {
   var enforcementFactory = function($q, enforcementData) {
      var self = this;
      
      self.getMapData = function(type, query) {
         var deferred = $q.defer();

         enforcementData.getEnforcementCount(type, query, 'state').then(function(data){
            var results = data.results;

            var mapData = {
               choropleth: []
            };

            angular.forEach(results, function(state) {
               var id = acronymToID(state.term.toUpperCase());
               mapData.choropleth.push({ x: id, y: state.count });
            });

            deferred.resolve(mapData);
         });
         
         return deferred.promise;
      }

      self.getChartData = function(type, query) {
         var deferred = $q.defer();

         enforcementData.getEnforcementCount(type, 'status:"ongoing"+AND+' + query, 'city.exact').then(function(data){
            var results = data.results;
            var chartData = [];
            var color = '#A6A6A6';

            angular.forEach(results, function(result) {
               //chartData.push({ x: result.term, Ongoing: result.count });

               switch (true)
               {
                  case result.count <= 7:
                     color = '#00C700';
                     break;
                  case result.count <= 15:
                     color = '#21C700';
                     break;
                  case result.count <= 23:
                     color = '#42C700';
                     break;
                  case result.count <= 30:
                     color = '#64C700';
                     break;
                  case result.count <= 38:
                     color = '#85C700';
                     break;
                  case result.count <= 46:
                     color = '#A6C700';
                     break;
                  case result.count <= 53:
                     color = '#C7C700';
                     break;
                  case result.count <= 61:
                     color = '#C7A600';
                     break;
                  case result.count <= 69:
                     color = '#C78500';
                     break;
                  case result.count <= 76:
                     color = '#C76400';
                     break;
                  case result.count <= 84:
                     color = '#C74200';
                     break;
                  case result.count <= 92:
                     color = '#C72100';
                     break;
                  case result.count > 92:
                     color = '#C70000';
                     break;
               }

               chartData.push({
                  key: result.term,
                  keyID: result.term,
                  label1: 'Ongoing', 
                  value1: result.count, 
                  color1: color
               });
            });

            chartData = chartData.slice(0, 10); //slice to top 10

            deferred.resolve(chartData);
         });
         
         return deferred.promise;
      }

      self.getStatusData = function(type, query) {
         var deferred = $q.defer();

         enforcementData.getEnforcementCount(type, query, 'status').then(function(data){
            var results = data.results;

            var anynumData = {
               title: '',
               data: []
            };

            angular.forEach(results, function(result) {
               anynumData.data.push({ title: toTitleCase(result.term), number: result.count });
            });

            deferred.resolve(anynumData);
         });
         
         return deferred.promise;
      }

      self.getAllEnforcementData = function(type, query){
        return enforcementData.getEnforcementData(type, query, '100'); 
      }

      //map the acronym to the id
      function acronymToID(acronym) {
         var statesList = [
            { id: 1, name: 'Alabama', di: 'AL' },
            { id: 2, name: 'Alaska', di: 'AK' },
            { id: 4, name: 'Arizona', di: 'AZ' },
            { id: 5, name: 'Arkansas', di: 'AR' },
            { id: 6, name: 'California', di: 'CA' },
            { id: 8, name: 'Colorado', di: 'CO' },
            { id: 9, name: 'Connecticut', di: 'CT' },
            { id: 10, name: 'Delaware', di: 'DE' },
            { id: 12, name: 'Florida', di: 'FL' },
            { id: 13, name: 'Georgia', di: 'GA' },
            { id: 15, name: 'Hawaii', di: 'HI' },
            { id: 16, name: 'Idaho', di: 'ID' },
            { id: 17, name: 'Illinois', di: 'IL' },
            { id: 18, name: 'Indiana', di: 'IN' },
            { id: 19, name: 'Iowa', di: 'IA' },
            { id: 20, name: 'Kansas', di: 'KS' },
            { id: 21, name: 'Kentucky', di: 'KY' },
            { id: 22, name: 'Louisiana', di: 'LA' },
            { id: 23, name: 'Maine', di: 'ME' },
            { id: 24, name: 'Maryland', di: 'MD' },
            { id: 25, name: 'Massachusetts', di: 'MA' },
            { id: 26, name: 'Michigan', di: 'MI' },
            { id: 27, name: 'Minnesota', di: 'MN' },
            { id: 28, name: 'Mississippi', di: 'MS' },
            { id: 29, name: 'Missouri', di: 'MO' },
            { id: 30, name: 'Montana', di: 'MT' },
            { id: 31, name: 'Nebraska', di: 'ME' },
            { id: 32, name: 'Nevada', di: 'MV' },
            { id: 33, name: 'New Hampshire', di: 'NH' },
            { id: 34, name: 'New Jersey', di: 'NJ' },
            { id: 35, name: 'New Mexico', di: 'NM' },
            { id: 36, name: 'New York', di: 'NY' },
            { id: 37, name: 'North Carolina', di: 'NC' },
            { id: 38, name: 'North Dakota', di: 'ND' },
            { id: 39, name: 'Ohio', di: 'OH' },
            { id: 40, name: 'Oklahoma', di: 'OK' },
            { id: 41, name: 'Oregon', di: 'OR' },
            { id: 42, name: 'Pennsylvania', di: 'PA' },
            { id: 44, name: 'Rhode Island', di: 'RI' },
            { id: 45, name: 'South Carolina', di: 'SC' },
            { id: 46, name: 'South Dakota', di: 'SD' },
            { id: 47, name: 'Tennessee', di: 'TN' },
            { id: 48, name: 'Texas', di: 'TX' },
            { id: 49, name: 'Utah', di: 'UT' },
            { id: 50, name: 'Vermont', di: 'VT' },
            { id: 51, name: 'Virginia', di: 'VA' },
            { id: 53, name: 'Washington', di: 'WA' },
            { id: 54, name: 'West Virginia', di: 'WV' },
            { id: 55, name: 'Wisconsin', di: 'WI' },
            { id: 56, name: 'Wyoming', di: 'WY' }
         ];

         for (i = 0; i < statesList.length; i++) {
            if (statesList[i].di == acronym)
            {
               return statesList[i].id;
            }
         }
      }

      function toTitleCase(str)
      {
         return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      }
      
      return self;
   }
   
   angular.module('openFDA.enforcement.factory', [])
      .factory('enforcementFactory', ['$q', 'enforcementData', enforcementFactory]);
}());