(function () {
   
	//Define our angular application
	var app = angular.module('minervaDemoApp', ['mvMinerva', 'ui.router', 'ui.bootstrap', 'demo.charts', 'ngSanitize']);
   
	//Configure the routes within the application
	app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/home');
		
		var directiveTemplate = {
               		            templateUrl: 'views/docs.directive.txt',
               		            controller: 'directiveCtrl'
               		         };
      
		var chartTemplate = {
            		           templateUrl: 'views/docs-chartOptions.txt',
            		           controller: 'chartOptionsCtrl'
            		        };
		
      var chartSubTemplate = {
                                templateUrl: 'views/docs-chartSub.txt',
                                controller: 'chartSubCtrl'
                             };
                             
		$stateProvider
		   .state('home', {
		      url: '/home',
		      templateUrl: 'views/home.txt',
		      controller: 'mainCtrl'
		   })
		   .state('charts', {
		      url: '/charts',
		      templateUrl: 'views/charts.txt',
		      controller: 'chartCtrl'
		   })
	      .state('code', {
		      url: '/code?type',
		      templateUrl: 'views/code.txt',
		      controller: 'codeCtrl'
		   })
         .state('tables', {
		      url: '/tables',
		      templateUrl: 'views/tables.txt',
		      controller: 'tablesCtrl'
		   })
		   .state('geo', {
		      url: '/geo',
		      templateUrl: 'views/geo.txt',
		      controller: 'geoCtrl'
		   })
		   .state('case', {
		      url: '/case',
		      templateUrl: 'views/case.txt',
		      controller: 'caseCtrl'
		   })
		   .state('docs', {
		      url: '/docs',
		      templateUrl: 'views/docs.txt',
		      controller: 'docsCtrl'
		   })
		      .state('docs.start', { //getting started
   		      url: '/start?type',
               templateUrl: 'views/docs.start.txt',
   		      controller: 'directiveCtrl'
		      })
		      .state('docs.directive', {
   		      url: '/directive?type',
   		      templateUrl: 'views/docs.directive.txt',
   		      controller: 'directiveCtrl'
   		   })
            .state('docs.step', {
               url: '/step?type',
               templateUrl: 'views/docs.step.txt',
               controller: 'directiveCtrl'
            })
            .state('docs.image', {
               url: '/image?type',
               templateUrl: 'views/docs.image.txt',
               controller: 'directiveCtrl'
            })
            .state('docs.template', { //template route
   		      url: '/template?type',
               templateUrl: 'views/docs.template.txt',
   		      controller: 'directiveCtrl'
		      })
   		   .state('docs.chart', { //mvChart sub menu route
   		      url: '/directive/chart?type',
   		      views: {
   		         '': directiveTemplate,
   		         'chartOptions': chartTemplate
   		      }
		      }) 
               //routes for mvChart sub menus
		         .state('docs.chartSub', {
		            url: '/directive/chart/chart?type',
      		      views: {
      		         '': directiveTemplate,
      		         'chartOptions': chartTemplate,
      		         'chartSub@docs.chartSub': chartSubTemplate
      		      }
		         })
                  //route for chart attributes
                  .state('docs.chartAttr', {
                     url: '/directive/chart/chart/attr?parentType&type',
                     views: {
                        '': directiveTemplate,
                        'chartOptions': chartTemplate,
                        'chartSub@docs.chartAttr': chartSubTemplate
                     }
                  })
               //route for legend sub
		         .state('docs.legendSub', {
		            url: '/directive/chart/legend?type',
      		      views: {
      		         '': directiveTemplate,
      		         'chartOptions': chartTemplate,
      		         'legendSub@docs.legendSub': chartSubTemplate
      		      }
		         })
                  //route for legend attributes
                  .state('docs.legendAttr', {
                     url: '/directive/chart/legend/attr?parentType&type',
                     views: {
                        '': directiveTemplate,
                        'chartOptions': chartTemplate,
                        'legendSub@docs.legendAttr': chartSubTemplate
                     }
                  })
               //route for tooltip sub
		         .state('docs.tooltipSub', {
		            url: '/directive/chart/tooltip?type',
      		      views: {
      		         '': directiveTemplate,
      		         'chartOptions': chartTemplate,
      		         'tooltipSub@docs.tooltipSub': chartSubTemplate
      		      }
		         })
                  //route for tooltip attributes
                  .state('docs.tooltipAttr', {
                     url: '/directive/chart/tooltip/attr?parentType&type',
                     views: {
                        '': directiveTemplate,
                        'chartOptions': chartTemplate,
                        'tooltipSub@docs.tooltipAttr': chartSubTemplate
                     }
                  })
               //route for xAxis sub
		         .state('docs.xAxisSub', {
		            url: '/directive/chart/xAxis?type',
      		      views: {
      		         '': directiveTemplate,
      		         'chartOptions': chartTemplate,
      		         'xAxisSub@docs.xAxisSub': chartSubTemplate
      		      }
		         })
                  //route for xAxis attributes
                  .state('docs.xAxisAttr', {
                     url: '/directive/chart/xAxis/attr?parentType&type',
                     views: {
                        '': directiveTemplate,
                        'chartOptions': chartTemplate,
                        'xAxisSub@docs.xAxisAttr': chartSubTemplate
                     }
                  })
               //route for yAxis sub
		         .state('docs.yAxisSub', {
		            url: '/directive/chart/yAxis?type',
      		      views: {
      		         '': directiveTemplate,
      		         'chartOptions': chartTemplate,
      		         'yAxisSub@docs.yAxisSub': chartSubTemplate
      		      }
		         })
                  //route for yAxis attributes
                  .state('docs.yAxisAttr', {
                     url: '/directive/chart/yAxis/attr?parentType&type',
                     views: {
                        '': directiveTemplate,
                        'chartOptions': chartTemplate,
                        'yAxisSub@docs.yAxisAttr': chartSubTemplate
                     }
                  })
               //route for types sub
		         .state('docs.typesSub', {
		            url: '/directive/types/types?type',
      		      views: {
      		         '': directiveTemplate,
      		         'chartOptions': chartTemplate,
      		         'typesSub@docs.typesSub': chartSubTemplate
      		      }
		         })
                  //route for types attributes
                  .state('docs.typesAttr', {
                     url: '/directive/chart/types/attr?parentType&type',
                     views: {
                        '': directiveTemplate,
                        'chartOptions': chartTemplate,
                        'typesSub@docs.typesAttr': chartSubTemplate
                     }
                  });
	}]);
   
   //compiles the minerva directives into html after being dynamically added in the doc.directive template
   app.directive('demoCompile', ['$compile', function($compile) {
      return function(scope, element, attrs) {
         scope.$watch(
            function(scope) {
               // watch the 'compile' expression for changes
               return scope.$eval(attrs.demoCompile);
            },
            function(value) {
               // when the 'compile' expression changes, assign it into the current DOM element
               element.html(value);

               // compile the new DOM and link it to the current
               $compile(element.contents())(scope);
            }
         );
      };
   }]);
  
	//The Main Application Controller
	app.controller('mainCtrl', ['$scope', '$location', function($scope, $location) {
		$scope.title = 'Minerva Dashboard';
		
		$scope.$on('$locationChangeSuccess', function(){
   		$scope.location = $location.path();
   	});
	}]);
	
	//the code controller
	app.controller('codeCtrl', ['$scope', '$timeout', '$stateParams', 'chartsDemo', function($scope, $timeout, $stateParams, chartsDemo) {
	   
	   console.log($stateParams.type);
	   
	   chartsDemo.getChart($stateParams.type).then(function(chartObject){
	 		$scope.data = chartObject.data;
	 		$scope.options = chartObject.options;
	 	});
   	
   	$scope.strHTML = '<mv-id-box mv-size="2x2" mv-title="Results">\n   <mv-chart mv-options="options" mv-data="data"></mv-chart>\n</mv-id-box>';
   
   	$timeout(function() {
   	   Rainbow.color();
   	}, 0);
	}]);
	
	//The Charts Controller
	app.controller('chartCtrl', ['$scope', '$state', 'chartsDemo', function($scope, $state, chartsDemo) {

		//functions to go to chart help on click
		$scope.clickChart = function(id){
		   $state.go('code', {type: id});
		};
	 	
	 	//Loads the "Grouped Bar Chart"
	 	chartsDemo.getChart('barGrouped').then(function(chartObject){
	 		$scope.dataMV = chartObject.data;
	 		$scope.grouped = chartObject.options;
	 	});
	 	
	 	//Loads the "Stacked Bar Chart"
	 	chartsDemo.getChart('barStacked').then(function(chartObject){
	 		$scope.stacked = chartObject.options;
	 	});

      //Loads the "Stacked Percent Bar Chart"
	 	chartsDemo.getChart('barStackedPercent').then(function(chartObject){
	 		$scope.stackedpercent = chartObject.options;
	 	});
	 	
	 	//Loads the bubble Chart
	 	chartsDemo.getChart('bubble').then(function(chartObject){
	 		$scope.dataBubble = chartObject.data;
	 		$scope.bubble = chartObject.options;
	 	});
		
      //Loads the line Chart
	 	chartsDemo.getChart('line').then(function(chartObject){
	 		$scope.line = chartObject.options;
	 	});

      //Loads the pie Chart
	 	chartsDemo.getChart('pie').then(function(chartObject){
	 		$scope.data = chartObject.data;
	 		$scope.pie = chartObject.options;
	 	});

      //Loads the burst Chart
	 	chartsDemo.getChart('burst').then(function(chartObject){
	 		$scope.burst = chartObject.options;
	 	});
		      
   }]); //close the chartCtrl

   app.controller('docsCtrl', ['$scope', '$state', 'docsDemo', function($scope, $state, docsDemo) {
      
      //function to go to the getting started page
      $scope.clickStart = function(id){
		   $state.go('docs.start', {type: id});
		};
      
      //functions to go to directive documentation on click
		$scope.clickDocs = function(id){
		   $state.go('docs.directive', {type: id});
		};
      
      //function to go to the chart state
      $scope.clickChart = function(id){
         $state.go('docs.chart', {type: id});
      };
      
      //function to go to the template state
      $scope.clickTemplate = function(id){
		   $state.go('docs.template', {type: id});
		};
      
      //function to go to the step state
      $scope.clickStep = function(id){
		   $state.go('docs.step', {type: id});
		};
      //function to go to the step state
      $scope.clickImage = function(id){
		   $state.go('docs.image', {type: id});
		};

   }]); //close docsCtrl
   
   app.controller('directiveCtrl', ['$scope', '$timeout', '$stateParams', '$sce', 'docsDemo', 'chartsDemo', function($scope, $timeout, $stateParams, $sce, docsDemo, chartsDemo) {
      		
      //Load the documentation data
      docsDemo.getDocs($stateParams.type).then(function(docsObject){
         $scope.language = docsObject.language;
         $scope.title = docsObject.title;
         $scope.about = docsObject.about;
         $scope.attributes = docsObject.attributes;
         $scope.results = $sce.trustAsHtml(docsObject.results);
         $scope.example = docsObject.example;
      });
      
      //Loads the "Grouped Bar Chart"
	 	chartsDemo.getChart('barGrouped').then(function(chartObject){
	 		$scope.chartData = chartObject.data;
	 		$scope.chartGrouped = chartObject.options;
	 	});
      
      //Loads the "Stacked Bar Chart"
      chartsDemo.getChart('barStacked').then(function(chartObject){
	 		$scope.chartStacked = chartObject.options;
	 	});
      
      //Loads the "Stacked Percent Bar Chart"
	 	chartsDemo.getChart('barStackedPercent').then(function(chartObject){
	 		$scope.chartStackedPercent = chartObject.options;
	 	});
	 	
	 	//Loads the bubble Chart
	 	chartsDemo.getChart('bubble').then(function(chartObject){
	 		$scope.dataBubble = chartObject.data;
	 		$scope.chartBubble = chartObject.options;
	 	});
		
      //Loads the line Chart
	 	chartsDemo.getChart('line').then(function(chartObject){
	 		$scope.chartLine = chartObject.options;
	 	});
      
      //Loads the scatter Chart
	 	chartsDemo.getChart('scatter').then(function(chartObject){
	 		$scope.chartDataScatter = chartObject.data;
         $scope.chartScatter = chartObject.options;
	 	});

      //Loads the pie Chart
	 	chartsDemo.getChart('pie').then(function(chartObject){
	 		$scope.chartDataSingle = chartObject.data;
	 		$scope.chartPie = chartObject.options;
	 	});

      //Loads the burst Chart
	 	chartsDemo.getChart('burst').then(function(chartObject){
	 		$scope.chartBurst = chartObject.options;
	 	});
      
      $timeout(function() {
   	   Rainbow.color();
   	}, 0);   
      
   }]); //close directiveCtrl
   
   app.controller('chartOptionsCtrl', ['$scope', '$state', 'subDemo', function($scope, $state, subDemo) {
      
      //functions to go to chart help on click
		$scope.clickChartOptions = function(id){
		   $state.go('docs.' + id + 'Sub', {type: id});
		};

   }]); //close chartOptionsCtrl
   
   app.controller('chartSubCtrl', ['$scope', '$timeout', '$state', '$stateParams', 'subDemo', function($scope, $timeout, $state, $stateParams, subDemo) {
      		
      //functions to go to chart sub help on click
		$scope.clickSubOptions = function(id, subid){
		   $state.go('docs.' + id + 'Attr', {parentType: id, type: subid});
		};
      
      var subType = $stateParams.type;
      
      if ($stateParams.parentType != undefined)
      {
         subType = $stateParams.parentType;
      }
      //Load the documentation data
      subDemo.getSub(subType).then(function(subObject){
         $scope.parentTitle = subObject.title;
         $scope.attributes = subObject.attributes;
      });   
      
   }]); //close chartSubCtrl
   
   //The Tables Controller
   app.controller('tablesCtrl', ['$scope', function($scope) {
	   		
		$scope.datalist = [
			{
			   title: '30 Oct 2014',
			   data: [
   		      {title: 'CMD IED',   number: '4'},
   		      {title: 'IR IED',    number: '2'},
   		      {title: 'Cell IED',  number: '2'},
   		      {title: 'VBIED',     number: '1'},
   		      {title: 'SVBIED',    number: '0'}
   		   ]
		   },
		   {
			   title: '29 Oct 2014',
			   data: [
   		      {title: 'CMD IED',   number: '3'},
   		      {title: 'IR IED',    number: '1'},
   		      {title: 'Cell IED',  number: '0'},
   		      {title: 'VBIED',     number: '2'},
   		      {title: 'SVBIED',    number: '0'}
   		   ]
		   },
		   {
			   title: '28 Oct 2014',
			   data: [
   		      {title: 'CMD IED',   number: '1'},
   		      {title: 'IR IED',    number: '1'},
   		      {title: 'Cell IED',  number: '1'},
   		      {title: 'VBIED',     number: '2'},
   		      {title: 'SVBIED',    number: '1'}
   		   ]
		   },
		   {
			   title: '27 Oct 2014',
			   data: [
   		      {title: 'CMD IED',   number: '1'},
   		      {title: 'IR IED',    number: '0'},
   		      {title: 'Cell IED',  number: '1'},
   		      {title: 'VBIED',     number: '2'},
   		      {title: 'SVBIED',    number: '1'}
   		   ]
		   },
		   {
			   title: '26 Oct 2014',
			   data: [
   		      {title: 'CMD IED',   number: '5'},
   		      {title: 'IR IED',    number: '4'},
   		      {title: 'Cell IED',  number: '1'},
   		      {title: 'VBIED',     number: '0'},
   		      {title: 'SVBIED',    number: '2'}
   		   ]
		   },
		   {
			   title: '25 Oct 2014',
			   data: [
   		      {title: 'CMD IED',   number: '2'},
   		      {title: 'IR IED',    number: '3'},
   		      {title: 'Cell IED',  number: '1'},
   		      {title: 'VBIED',     number: '0'},
   		      {title: 'SVBIED',    number: '0'}
   		   ]
		   }
		];
		
		$scope.datatable = {
         mapping: [
            { title:'Date/Time',       value: 'one' },
            { title:'Type',            value: 'two' },
            { title:'Killed/Wounded',  value: 'thr' },
            { title:'Cleared',         value: 'fou' } 
         ],
         rows: [
            { 
               'one': '30 Oct 2014 16:43',
               'two': 'CMD IED',
               'thr': '0/0',
               'fou': 'No',
               'mv-color': 'w-c0'
            },
            { 
               'one': '30 Oct 2014 13:10',
               'two': 'IR IED',
               'thr': '1/2',
               'fou': 'No',
               'mv-color': 'w-c1' 
            },
            { 
               'one': '30 Oct 2014 11:45',
               'two': 'CMD IED',
               'thr': '0/0',
               'fou': 'Yes',
               'mv-color': 'w-c0' 
            },
            { 
               'one': '30 Oct 2014 08:23',
               'two': 'CMD IED',
               'thr': '0/1',
               'fou': 'No',
               'mv-color': 'w-c0' 
            },
            { 
               'one': '30 Oct 2014 06:05',
               'two': 'Cell IED',
               'thr': '0/2',
               'fou': 'No',
               'mv-color': 'w-c2' 
            },
            { 
               'one': '30 Oct 2014 05:55',
               'two': 'Cell IED',
               'thr': '0/1',
               'fou': 'No',
               'mv-color': 'w-c2' 
            },
            { 
               'one': '30 Oct 2014 05:34',
               'two': 'CMD IED',
               'thr': '0/0',
               'fou': 'Yes',
               'mv-color': 'w-c0' 
            },
            { 
               'one': '29 Oct 2014 21:30',
               'two': 'IR IED',
               'thr': '0/3',
               'fou': 'No',
               'mv-color': 'w-c1' 
            },
            { 
               'one': '29 Oct 2014 20:51',
               'two': 'VBIED',
               'thr': '2/0',
               'fou': 'No',
               'mv-color': 'w-c3' 
            },
            { 
               'one': '29 Oct 2014 20:15',
               'two': 'CMD IED',
               'thr': '1/0',
               'fou': 'No',
               'mv-color': 'w-c0' 
            },
            { 
               'one': '29 Oct 2014 19:30',
               'two': 'CMD IED',
               'thr': '0/0',
               'fou': 'Yes',
               'mv-color': 'w-c0' 
            },
            { 
               'one': '29 Oct 2014 17:52',
               'two': 'IR IED',
               'thr': '3/0',
               'fou': 'No',
               'mv-color': 'w-c1' 
            },
            { 
               'one': '29 Oct 2014 17:50',
               'two': 'Cell IED',
               'thr': '1/2',
               'fou': 'No',
               'mv-color': 'w-c2' 
            },
            { 
               'one': '29 Oct 2014 17:27',
               'two': 'SVBIED',
               'thr': '0/0',
               'fou': 'Yes',
               'mv-color': 'w-c4' 
            },
            { 
               'one': '29 Oct 2014 12:37',
               'two': 'VBIED',
               'thr': '2/0',
               'fou': 'No',
               'mv-color': 'w-c3' 
            },
            { 
               'one': '29 Oct 2014 08:05',
               'two': 'SVBIED',
               'thr': '2/1',
               'fou': 'No',
               'mv-color': 'w-c4' 
            },
            { 
               'one': '29 Oct 2014 07:40',
               'two': 'IR IED',
               'thr': '0/1',
               'fou': 'No',
               'mv-color': 'w-c1' 
            },
            { 
               'one': '28 Oct 2014 21:00',
               'two': 'CMD IED',
               'thr': '0/0',
               'fou': 'Yes',
               'mv-color': 'w-c0' 
            },
            { 
               'one': '28 Oct 2014 15:31',
               'two': 'Cell IED',
               'thr': '0/4',
               'fou': 'No',
               'mv-color': 'w-c2' 
            }
         ]
      };
      
      $scope.datanumber = 
      {
         title: '',
         data: [
            {title: 'Today', number: '9'}
         ]
      };
               
      $scope.datanumbers =
      {
         title: 'Today',
         data: [
            {title: 'CMD IED',   number: '4'},
            {title: 'IR IED',    number: '2'},
            {title: 'Cell IED',  number: '2'},
            {title: 'VBIED',     number: '1'},
            {title: 'SVBIED',    number: '0'}
         ]
      };
      
   }]);  //end the tableCtrl
   
   //The Geo Controller
   app.controller('geoCtrl', ['$scope', function($scope) {
      
      $scope.afgsecurity = {
         choropleth: [
            { x: 'AFG-1741', y: 3 },   //Badghis
            { x: 'AFG-1742', y: 13 },  //Herat
            { x: 'AFG-1743', y: 0 },   //Bamyan
            { x: 'AFG-1744', y: 4 },   //Balkh
            { x: 'AFG-1745', y: 2 },   //Faryab
            { x: 'AFG-1746', y: 1 },   //Jawzjan
            { x: 'AFG-1747', y: 2 },   //Ghor
            { x: 'AFG-1748', y: 4 },   //Sari Pul
            { x: 'AFG-1749', y: 7 },   //Farah
            { x: 'AFG-1750', y: 20 },  //Helmand
            { x: 'AFG-1751', y: 3 },   //Nimroz
            { x: 'AFG-1752', y: 15 },  //Uruzgan
            { x: 'AFG-1753', y: 0 },   //Daykundi
            { x: 'AFG-1754', y: 16 },  //Kandahar
            { x: 'AFG-1755', y: 17 },  //Zabul
            { x: 'AFG-1757', y: 14 },  //Ghazni
            { x: 'AFG-1758', y: 2 },   //Khost
            { x: 'AFG-1759', y: 16 },  //Paktika
            { x: 'AFG-1760', y: 1 },   //Badakhshan
            { x: 'AFG-1761', y: 4 },   //Nuristan
            { x: 'AFG-1762', y: 20 },  //Kunar
            { x: 'AFG-1763', y: 7 },   //Kunduz
            { x: 'AFG-1764', y: 20 },  //Nangarhar
            { x: 'AFG-1765', y: 2 },   //Takhar
            { x: 'AFG-1766', y: 8 },   //Baghlan
            { x: 'AFG-1767', y: 7 },   //Kabul
            { x: 'AFG-1768', y: 3 },   //Kapisa
            { x: 'AFG-1769', y: 0 },   //Panjshir
            { x: 'AFG-1770', y: 9 },   //Laghman
            { x: 'AFG-1771', y: 15 },  //Logar
            { x: 'AFG-1772', y: 6 },   //Parwan
            { x: 'AFG-1773', y: 0 },   //Samangan
            { x: 'AFG-1774', y: 13 },  //Wardak
            { x: 'AFG-3413', y: 7 }    //Paktya
         ]
      };
      
      $scope.dataISIS = {
         points: [
            { Lat: 33.30, Lon: 36.17, Magnitude: 5, Color: '#F9F9F9', pointName: 'Damascus' },
            { Lat: 33.20, Lon: 44.26, Magnitude: 5, Color: '#F9F9F9', pointName: 'Baghdad' },
            { Lat: 36.13, Lon: 37.10, Magnitude: 5, Color: '#F9F9F9', pointName: 'Aleppo' },
            { Lat: 34.36, Lon: 43.30, Magnitude: 5, Color: '#BF1700', pointName: 'Tikrit' },
            { Lat: 34.55, Lon: 43.29, Magnitude: 5, Color: '#BF1700', pointName: 'Baiji' },
            { Lat: 33.21, Lon: 43.46, Magnitude: 5, Color: '#BF1700', pointName: 'Falluja' },
            { Lat: 33.39, Lon: 43.90, Magnitude: 5, Color: '#BF1700', pointName: 'Karma' },
            { Lat: 33.38, Lon: 42.49, Magnitude: 5, Color: '#BF1700', pointName: 'Heet' },
            { Lat: 34.22, Lon: 41.59, Magnitude: 5, Color: '#BF1700', pointName: 'Anah' },
            { Lat: 34.48, Lon: 41.92, Magnitude: 5, Color: '#BF1700', pointName: 'Rawa' },
            { Lat: 34.22, Lon: 41.80, Magnitude: 5, Color: '#BF1700', pointName: 'Qaim' },
            { Lat: 34.27, Lon: 40.56, Magnitude: 5, Color: '#BF1700', pointName: 'Abu Kamal' },
            { Lat: 33.20, Lon: 40.17, Magnitude: 5, Color: '#BF1700', pointName: 'Ar Rutbah' },
            { Lat: 36.34, Lon: 43.13, Magnitude: 5, Color: '#BF1700', pointName: 'Mosul' },
            { Lat: 36.22, Lon: 42.26, Magnitude: 5, Color: '#BF1700', pointName: 'Telafer' },
            { Lat: 34.44, Lon: 44.43, Magnitude: 3, Color: '#BF1700', pointName: 'Abyar' },
            { Lat: 33.43, Lon: 38.93, Magnitude: 5, Color: '#FFAB18', pointName: 'Al Waleed' },
            { Lat: 35.28, Lon: 44.19, Magnitude: 5, Color: '#FFAB18', pointName: 'Kirkuk' },
            { Lat: 34.19, Lon: 43.88, Magnitude: 5, Color: '#FFAB18', pointName: 'Samarra' },
            { Lat: 34.02, Lon: 44.14, Magnitude: 5, Color: '#FFAB18', pointName: 'Balad' },
            { Lat: 34.06, Lon: 44.25, Magnitude: 5, Color: '#FFAB18', pointName: 'Duloaiya' },
            { Lat: 33.85, Lon: 44.23, Magnitude: 5, Color: '#FFAB18', pointName: 'Dejail' },
            { Lat: 33.75, Lon: 44.63, Magnitude: 5, Color: '#FFAB18', pointName: 'Baqubah' },
            { Lat: 33.97, Lon: 44.93, Magnitude: 5, Color: '#FFAB18', pointName: 'Miqdadiyah' },
            { Lat: 34.27, Lon: 45.16, Magnitude: 5, Color: '#FFAB18', pointName: 'Jalawla' },
            { Lat: 34.33, Lon: 45.38, Magnitude: 5, Color: '#FFAB18', pointName: 'Khanaqin' },
            { Lat: 33.25, Lon: 43.18, Magnitude: 5, Color: '#FFAB18', pointName: 'Ramadi' },
            { Lat: 33.38, Lon: 43.58, Magnitude: 5, Color: '#FFAB18', pointName: 'Habbaniyah' },
            { Lat: 33.39, Lon: 43.68, Magnitude: 5, Color: '#FFAB18', pointName: 'Saqlawia' },
            { Lat: 33.29, Lon: 44.06, Magnitude: 5, Color: '#FFAB18', pointName: 'Abu Ghraib' },
            { Lat: 32.61, Lon: 44.03, Magnitude: 5, Color: '#FFAB18', pointName: 'Karbala' },
            { Lat: 32.48, Lon: 44.43, Magnitude: 5, Color: '#FFAB18', pointName: 'Hillah' },
            { Lat: 34.12, Lon: 42.21, Magnitude: 5, Color: '#FFAB18', pointName: 'Haditha Dam' },
            { Lat: 32.44, Lon: 39.00, Magnitude: 5, Color: '#FFAB18', pointName: 'Turaibil' }
         ],
         choropleth: []
      };
      
      $scope.dataGDPPC = {
         choropleth: [
            { x: "634", y: 102100 },
            { x: "438", y: 89400 },
            { x: "446", y: 88700 },
            { x: "60", y: 86000 },
            { x: "492", y: 85500 },
            { x: "442", y: 77900 },
            { x: "702", y: 62400 },
            { x: "832", y: 57000 },
            { x: "578", y: 55400 },
            { x: "238", y: 55400 },
            { x: "756", y: 54800 },
            { x: "96", y: 54800 },
            { x: "833", y: 53800 },
            { x: "840", y: 52800 },
            { x: "344", y: 52700 },
            { x: "831", y: 44600 },
            { x: "136", y: 43800 },
            { x: "528", y: 43300 },
            { x: "124", y: 43100 },
            { x: "292", y: 43000 },
            { x: "36", y: 43000 },
            { x: "40", y: 42600 },
            { x: "92", y: 42300 },
            { x: "414", y: 42100 },
            { x: "372", y: 41300 },
            { x: "752", y: 40900 },
            { x: "352", y: 40700 },
            { x: "158", y: 39600 },
            { x: "276", y: 39500 },
            { x: "304", y: 38400 },
            { x: "56", y: 37800 },
            { x: "208", y: 37800 },
            { x: "540", y: 37700 },
            { x: "826", y: 37300 },
            { x: "20", y: 37200 },
            { x: "392", y: 37100 },
            { x: "376", y: 36200 },
            { x: "246", y: 35900 },
            { x: "250", y: 35700 },
            { x: "666", y: 34900 },
            { x: "410", y: 33200 },
            { x: "44", y: 32000 },
            { x: "682", y: 31300 },
            { x: "234", y: 30500 },
            { x: "554", y: 30400 },
            { x: "724", y: 30100 },
            { x: "784", y: 29900 },
            { x: "48", y: 29800 },
            { x: "512", y: 29800 },
            { x: "380", y: 29600 },
            { x: "470", y: 29200 },
            { x: "796", y: 29100 },
            { x: "316", y: 28700 },
            { x: "705", y: 27400 },
            { x: "203", y: 26300 },
            { x: "690", y: 25900 },
            { x: "226", y: 25700 },
            { x: "533", y: 25300 },
            { x: "52", y: 25100 },
            { x: "703", y: 24700 },
            { x: "196", y: 24500 },
            { x: "300", y: 23600 },
            { x: "620", y: 22900 },
            { x: "440", y: 22600 },
            { x: "233", y: 22400 },
            { x: "258", y: 22000 },
            { x: "626", y: 21400 },
            { x: "616", y: 21100 },
            { x: "780", y: 20300 },
            { x: "348", y: 19800 },
            { x: "266", y: 19200 },
            { x: "152", y: 19100 },
            { x: "428", y: 19100 },
            { x: "32", y: 18600 },
            { x: "28", y: 18400 },
            { x: "643", y: 18100 },
            { x: "191", y: 17800 },
            { x: "458", y: 17500 },
            { x: "858", y: 16600 },
            { x: "591", y: 16500 },
            { x: "72", y: 16400 },
            { x: "659", y: 16300 },
            { x: "630", y: 16300 },
            { x: "112", y: 16100 },
            { x: "480", y: 16100 },
            { x: "422", y: 15800 },
            { x: "484", y: 15600 },
            { x: "534", y: 15400 },
            { x: "792", y: 15300 },
            { x: "531", y: 15000 },
            { x: "850", y: 14500 },
            { x: "100", y: 14400 },
            { x: "642", y: 14400 },
            { x: "212", y: 14300 },
            { x: "398", y: 14100 },
            { x: "308", y: 13800 },
            { x: "580", y: 13600 },
            { x: "862", y: 13600 },
            { x: "662", y: 13100 },
            { x: "740", y: 12900 },
            { x: "188", y: 12900 },
            { x: "364", y: 12800 },
            { x: "660", y: 12200 },
            { x: "76", y: 12100 },
            { x: "670", y: 12100 },
            { x: "499", y: 11900 },
            { x: "710", y: 11500 },
            { x: "434", y: 11300 },
            { x: "170", y: 11100 },
            { x: "688", y: 11100 },
            { x: "604", y: 11100 },
            { x: "807", y: 10800 },
            { x: "31", y: 10800 },
            { x: "8", y: 10700 },
            { x: "218", y: 10600 },
            { x: "585", y: 10500 },
            { x: "192", y: 10200 },
            { x: "788", y: 9900 },
            { x: "764", y: 9900 },
            { x: "156", y: 9800 },
            { x: "795", y: 9700 },
            { x: "214", y: 9700 },
            { x: "184", y: 9100 },
            { x: "462", y: 9100 },
            { x: "388", y: 9000 },
            { x: "84", y: 8800 },
            { x: "584", y: 8700 },
            { x: "328", y: 8500 },
            { x: "500", y: 8500 },
            { x: "70", y: 8300 },
            { x: "516", y: 8200 },
            { x: "776", y: 8200 },
            { x: "16", y: 8000 },
            { x: "654", y: 7800 },
            { x: "222", y: 7500 },
            { x: "12", y: 7500 },
            { x: "804", y: 7400 },
            { x: "583", y: 7300 },
            { x: "368", y: 7100 },
            { x: "64", y: 7000 },
            { x: "600", y: 6800 },
            { x: "818", y: 6600 },
            { x: "144", y: 6500 },
            { x: "296", y: 6400 },
            { x: "24", y: 6300 },
            { x: "51", y: 6300 },
            { x: "882", y: 6200 },
            { x: "268", y: 6100 },
            { x: "400", y: 6100 },
            { x: "496", y: 5900 },
            { x: "570", y: 5800 },
            { x: "748", y: 5700 },
            { x: "68", y: 5500 },
            { x: "504", y: 5500 },
            { x: "320", y: 5300 },
            { x: "360", y: 5200 },
            { x: "760", y: 5100 },
            { x: "520", y: 5000 },
            { x: "242", y: 4900 },
            { x: "548", y: 4800 },
            { x: "178", y: 4800 },
            { x: "340", y: 4800 },
            { x: "608", y: 4700 },
            { x: "558", y: 4500 },
            { x: "132", y: 4400 },
            { x: "704", y: 4000 },
            { x: "356", y: 4000 },
            { x: "876", y: 3800 },
            { x: "860", y: 3800 },
            { x: "498", y: 3800 },
            { x: "288", y: 3500 },
            { x: "798", y: 3500 },
            { x: "90", y: 3400 },
            { x: "418", y: 3100 },
            { x: "586", y: 3100 },
            { x: "275", y: 2900 },
            { x: "598", y: 2900 },
            { x: "566", y: 2800 },
            { x: "262", y: 2700 },
            { x: "729", y: 2600 },
            { x: "116", y: 2600 },
            { x: "732", y: 2500 },
            { x: "417", y: 2500 },
            { x: "148", y: 2500 },
            { x: "887", y: 2500 },
            { x: "120", y: 2400 },
            { x: "762", y: 2300 },
            { x: "478", y: 2200 },
            { x: "678", y: 2200 },
            { x: "426", y: 2200 },
            { x: "686", y: 2100 },
            { x: "50", y: 2100 },
            { x: "270", y: 2000 },
            { x: "894", y: 1800 },
            { x: "404", y: 1800 },
            { x: "408", y: 1800 },
            { x: "384", y: 1800 },
            { x: "834", y: 1700 },
            { x: "104", y: 1700 },
            { x: "204", y: 1600 },
            { x: "854", y: 1500 },
            { x: "800", y: 1500 },
            { x: "524", y: 1500 },
            { x: "646", y: 1500 },
            { x: "728", y: 1400 },
            { x: "694", y: 1400 },
            { x: "332", y: 1300 },
            { x: "174", y: 1300 },
            { x: "231", y: 1300 },
            { x: "232", y: 1200 },
            { x: "508", y: 1200 },
            { x: "624", y: 1200 },
            { x: "4", y: 1100 },
            { x: "466", y: 1100 },
            { x: "768", y: 1100 },
            { x: "324", y: 1100 },
            { x: "772", y: 1000 },
            { x: "450", y: 1000 },
            { x: "454", y: 900 },
            { x: "562", y: 800 },
            { x: "430", y: 700 },
            { x: "140", y: 700 },
            { x: "108", y: 600 },
            { x: "706", y: 600 },
            { x: "716", y: 600 },
            { x: "180", y: 400 }
         ]
      };
      
      $scope.datalegend = [
         {
            title: '',
            data: [
               {title: 'Richest', number: ''},
               {title: '', number: ''},
               {title: '', number: ''},
               {title: '', number: ''},
               {title: 'Poorest', number: ''}
            ]
         }   
      ];

      //map
      $scope.map = {
         chart: {
            height: 600,
            width: 780,
            margin: {
               left: 20,
               bottom: 15
            },
            type: 'map',
            colors: ['#E40004', '#E92D03', '#EE5B02', '#F38901', '#F8B700', '#FDE500', '#CFD103', '#A1BD06', '#73AA09', '#45960C', '#18830F']
         },
         tooltip: {
            format: '$,'
         },
         types: {
            map: {
               mapfile: 'world',
               showPoints: true,
               detailed: true,
               quantizeScale: [0, 75000],
               satellite: {
                  enabled: true,
                  rotate: [-45, -28, 0]
               }
            }
         }
      };
      
      //globe
      $scope.globe = {
         chart: {
            height: 400,
            width: 400,
            margin: {
               top: 80,
               left: 30,
               right: 30
            },
            type: 'map',
            colors: ['#E40004', '#E92D03', '#EE5B02', '#F38901', '#F8B700', '#FDE500', '#CFD103', '#A1BD06', '#73AA09', '#45960C', '#18830F']
         },
         types: {
            map: {
               mapfile: 'world',
               quantizeScale: [0, 75000],
               globe: true,
               simplify: true
            }
         }
      };
      
      //map
      $scope.afgmap = {
         chart: {
            height: 400,
            width: 400,
            margin: {
               top: 10,
               left: 10,
               right: 30
            },
            colors: ['#E40004', '#E92D03', '#EE5B02', '#F38901', '#F8B700', '#FDE500', '#CFD103', '#A1BD06', '#73AA09', '#45960C', '#18830F'],
            type: 'map'
         },
         legend: {
            enabled: true,
            position: {
               x: 330,
               y: 250
            }
         },
         types: {
            map: {
               mapfile: 'afg',
               quantizeScale: [20, 15, 10, 5, 0]
            }
         }
      };
   }]);  //end the geoCtrl

   //The Case Study Controller
   app.controller('caseCtrl', ['$scope', function($scope) {
      
      $scope.iedChange = 
      {
         title: '',
         data: [
            {title: 'Change From Previous', number: '-18%'}
         ]
      };
      
      $scope.iedData = [
         { x: 'Cleared',                     y: 96 },
         { x: 'Detonated - No Fatalities',   y: 43 },
         { x: 'Detonated - Fatalities',      y: 3  }               
      ];
      
      $scope.violentDistricts =
      {
         title: 'Most Violent Districts',
         data: [
            {title: 'Sangin (Helmand)', number: '86'},
            {title: 'Nahr-e Saraj (Helmand)', number: '72'},
            {title: "Nad 'Ali (Helmand)", number: '57'},
            {title: 'Darah-ye Pech (Kunar)', number: '28'},
            {title: 'Shindand (Herat)', number: '23'}
         ]
      };
      
      $scope.deployed =
      {
         title: '',
         data: [
            {title: 'United States', number: '24,050'},
            {title: 'Other Coalition', number: '10,462'}
         ]
      };
      
      $scope.iedCompareData = [
         { x: 'Sep', 'IED Attacks': 167 },
         { x: 'Oct', 'IED Attacks': 142 }
      ];

      $scope.opiumData = [
         { x: '2011', 'Eradicated': 4, 'Cultivated': 131 },
         { x: '2012', 'Eradicated': 9, 'Cultivated': 154 },
         { x: '2013', 'Eradicated': 7, 'Cultivated': 209 }
      ];
      
      $scope.fatalitiesData = [
         { x: 'Jan', 'United States': 7,    'Other Coalition': 0 },
         { x: 'Feb', 'United States': 7,    'Other Coalition': 3 },
         { x: 'Mar', 'United States': 0,    'Other Coalition': 3 },
         { x: 'Apr', 'United States': 4,    'Other Coalition': 5 },
         { x: 'May', 'United States': 4,    'Other Coalition': 0 },
         { x: 'Jun', 'United States': 12,   'Other Coalition': 0 },
         { x: 'Jul', 'United States': 3,    'Other Coalition': 6 },
         { x: 'Aug', 'United States': 5,    'Other Coalition': 0 },
         { x: 'Sep', 'United States': 5,    'Other Coalition': 1 },
         { x: 'Oct', 'United States': 2,    'Other Coalition': 0 }
      ];
      
      $scope.dataRecentFatalities = {
         mapping: [
            { title:'Date',      value: 'ocrDate'     },
            { title:'Country',   value: 'ocrCountry'  },
            { title:'Name',      value: 'ocrName'     },
            { title:'Rank',      value: 'ocrRank'     },
            { title:'Cause',     value: 'ocrCause'    } 
         ],
         rows: [
            { 
               'ocrDate': '10-24-2014',
               'ocrCountry': 'US',
               'ocrName': 'Kalafut, Christopher',
               'ocrRank': 'Commander',
               'ocrCause': 'Non-hostile' 
            },
            { 
               'ocrDate': '10-01-2014',
               'ocrCountry': 'US',
               'ocrName': 'Walker, Jonathan',
               'ocrRank': 'Major',
               'ocrCause': 'Non-hostile' 
            },
            { 
               'ocrDate': '09-30-2014',
               'ocrCountry': 'US',
               'ocrName': 'Weathers, Andrew',
               'ocrRank': 'Sergeant 1st Class',
               'ocrCause': 'Hostile - Small Arms Fire' 
            },
            { 
               'ocrDate': '09-16-2014',
               'ocrCountry': 'Poland',
               'ocrName': 'Celebudzki, Rafal',
               'ocrRank': 'Sergeant',
               'ocrCause': 'Hostile - VBIED' 
            },
            { 
               'ocrDate': '09-16-2014',
               'ocrCountry': 'US',
               'ocrName': 'Byus, Stephen',
               'ocrRank': '',
               'ocrCause': 'Hostile - VBIED' 
            },
            { 
               'ocrDate': '09-16-2014',
               'ocrCountry': 'US',
               'ocrName': 'Donahue, Michael',
               'ocrRank': 'Major',
               'ocrCause': 'Hostile - VBIED' 
            },
            { 
               'ocrDate': '09-15-2014',
               'ocrCountry': 'US',
               'ocrName': 'Strong, Charles',
               'ocrRank': 'Sergeant',
               'ocrCause': 'Hostile - Green on Blue' 
            },
            { 
               'ocrDate': '09-04-2014',
               'ocrCountry': 'US',
               'ocrName': 'Arsenault, Brian',
               'ocrRank': 'Specialist',
               'ocrCause': 'Hostile - Small Arms Fire' 
            },
            { 
               'ocrDate': '08-22-2014',
               'ocrCountry': 'US',
               'ocrName': 'Mulalley, Christopher',
               'ocrRank': 'Sergeant',
               'ocrCause': 'Non-hostile' 
            }
         ]
      };
      //9-15-2014 US Strong, Charles C. Sergeant
      //9-04-2014 US Arsenault, Brian K. Specialist 
      //8-22-2014 US Mulalley, Christopher W.  Sergeant 26 
      $scope.afgsecurity = {
         choropleth: [
            { x: 'AFG-1741', y: 3 },   //Badghis
            { x: 'AFG-1742', y: 13 },  //Herat
            { x: 'AFG-1743', y: 0 },   //Bamyan
            { x: 'AFG-1744', y: 4 },   //Balkh
            { x: 'AFG-1745', y: 2 },   //Faryab
            { x: 'AFG-1746', y: 1 },   //Jawzjan
            { x: 'AFG-1747', y: 2 },   //Ghor
            { x: 'AFG-1748', y: 4 },   //Sari Pul
            { x: 'AFG-1749', y: 7 },   //Farah
            { x: 'AFG-1750', y: 20 },  //Helmand
            { x: 'AFG-1751', y: 3 },   //Nimroz
            { x: 'AFG-1752', y: 15 },  //Uruzgan
            { x: 'AFG-1753', y: 0 },   //Daykundi
            { x: 'AFG-1754', y: 16 },  //Kandahar
            { x: 'AFG-1755', y: 17 },  //Zabul
            { x: 'AFG-1757', y: 14 },  //Ghazni
            { x: 'AFG-1758', y: 2 },   //Khost
            { x: 'AFG-1759', y: 16 },  //Paktika
            { x: 'AFG-1760', y: 1 },   //Badakhshan
            { x: 'AFG-1761', y: 4 },   //Nuristan
            { x: 'AFG-1762', y: 20 },  //Kunar
            { x: 'AFG-1763', y: 7 },   //Kunduz
            { x: 'AFG-1764', y: 20 },  //Nangarhar
            { x: 'AFG-1765', y: 2 },   //Takhar
            { x: 'AFG-1766', y: 8 },   //Baghlan
            { x: 'AFG-1767', y: 7 },   //Kabul
            { x: 'AFG-1768', y: 3 },   //Kapisa
            { x: 'AFG-1769', y: 0 },   //Panjshir
            { x: 'AFG-1770', y: 9 },   //Laghman
            { x: 'AFG-1771', y: 15 },  //Logar
            { x: 'AFG-1772', y: 6 },   //Parwan
            { x: 'AFG-1773', y: 0 },   //Samangan
            { x: 'AFG-1774', y: 13 },  //Wardak
            { x: 'AFG-3413', y: 7 }    //Paktya
         ]
      };
      
      //pie chart
      $scope.afgattacks = {
         chart: {
            height: 190,
            width: 190,
            margin: {
               left: 10,
               right: 10,
               bottom: 10
            },
            colors: ["#73AA09", "#FDE500", "#E40004"],
            type: 'pie'
         },
         types: {
            pie: {
               labels: {
                  enabled: true,
                  color: '#A6A6A6',
                  percent: true
               }
            }
         }
      };
      
      //stacked bar
      $scope.afgopium = {
         chart: {
            height: 180,
            margin: {
               bottom: 20
            },
            colors: ["#E40004", "#73AA09"]
         },
         yAxis: {
            title: {
               text: 'Hectares (thousands)'
            }
         },
         xAxis: {
            title: {
               text: ''
            },
            spacing: 0.5
         },
         types: {
            bar: {
               stacked: true
            }
         }
      };
      
      //stacked bar
      $scope.afgiedcomp = {
         chart: {
            height: 180,
            width: 180,
            margin: {
               right: 15,
               left: 25,
               bottom: 8
            },
            colors: ["#EDEDED"]
         },
         xAxis: {
            title: {
               text: ''
            },
            spacing: 0,
            tickSize: 0,
            tickPadding: 6
         },
         yAxis: {
            title: {
               text: ''
            },
            labels: {
               color: '#FFFFFF'
            },
            tickSize: 0,
            tickPadding: 6,
            min: 0
         },
         types: {
            bar: {
               stacked: true
            }
         }
      };

      //stacked bar
      $scope.afgfatalities = {
         chart: {
            colors: ["#4C99C2", "#D4BBB2"]
         },
         yAxis: {
            title: {
               text: 'Fatalities'
            }
         },
         xAxis: {
            title: {
               text: 'Month'
            }
         },
         types: {
            bar: {
               stacked: true
            }
         }
      };
      
      //map
      $scope.afgmap = {
         chart: {
            margin: {
               top: 10,
               left: 10,
               right: 30
            },
            colors: ['#E40004', '#E92D03', '#EE5B02', '#F38901', '#F8B700', '#FDE500', '#CFD103', '#A1BD06', '#73AA09', '#45960C', '#18830F'],
            type: 'map'
         },
         legend: {
            enabled: true,
            position: {
               x: 330,
               y: 250
            }
         },
         types: {
            map: {
               mapfile: 'afg',
               quantizeScale: [20, 15, 10, 5, 0]
            }
         }
      };
  }]);  //end the caseCtrl

}());