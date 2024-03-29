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

               //create the color gradient
               switch (true)
               {
                  case result.count <= 7:
                     color = '#2C82C0';
                     break;
                  case result.count <= 15:
                     color = '#4C89A7';
                     break;
                  case result.count <= 23:
                     color = '#6D918F';
                     break;
                  case result.count <= 30:
                     color = '#8D9976';
                     break;
                  case result.count <= 38:
                     color = '#AEA15E';
                     break;
                  case result.count <= 46:
                     color = '#CEA945';
                     break;
                  case result.count <= 53:
                     color = '#EFB12D';
                     break;
                  case result.count <= 61:
                     color = '#EA9D28';
                     break;
                  case result.count <= 69:
                     color = '#E58923';
                     break;
                  case result.count <= 76:
                     color = '#E0751E';
                     break;
                  case result.count <= 84:
                     color = '#DB6119';
                     break;
                  case result.count <= 92:
                     color = '#D64D14';
                     break;
                  case result.count > 92:
                     color = '#D23A0F';
                     break;
               }

               var city = result.term;
               var count = result.count;

               chartData.push({
                  key: city,
                  keyID: city,
                  label1: 'Ongoing', 
                  value1: count, 
                  color1: color
               });
            });

            chartData = chartData.slice(0, 10); //slice to top 10
/*
            //loop through to add state to cities
            angular.forEach(chartData, function(chartItem){
               //query the resulting city to get the state
               enforcementData.getEnforcementData(type, 'city:"' + chartItem.key + '"', 1).then(function(data){
                  var cityData = data.results;
                  var label = chartItem.key;

                  if(cityData.length > 0)
                  {
                     var state = ', ' + cityData[0].state;
                     if(state == null)
                     {
                        state = '';
                     }

                     label += state;
                  }
                  chartItem.key = label;
               });
            });
*/
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

      self.getFiveLatestRecalls = function(){
         var deferred = $q.defer();

         var typeQueries = [];
         var allTypeData = [];
         var queryLimit = '100';

         //Query all types
         typeQueries.push(enforcementData.getEnforcementData('food','country:"US"',queryLimit));
         typeQueries.push(enforcementData.getEnforcementData('drug','country:"US"',queryLimit));
         typeQueries.push(enforcementData.getEnforcementData('device','country:"US"',queryLimit));

         //Aggregate the types
         $q.all(typeQueries).then(function(typesData){
            
            allTypeData = typesData[0].results.concat(typesData[1].results, typesData[2].results);
            allTypeData = _.sortBy(allTypeData, function(recall){ return recall.recall_initiation_date });
            allTypeData = _.last(allTypeData, 5);
            allTypeData.reverse();

            deferred.resolve(allTypeData);
         });

         return deferred.promise;
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