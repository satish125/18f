(function () {
	angular.module('demo.charts', [])
		.factory('chartsDemo', ['$q', function($q){
		var self = this;
		
		//---------- INTERNAL VARIABLES ----------//		
		var colorSpectrum = ["#0F408A", "#3C82ED", "#C5CCB1", "#A13E30", "#631105"];
		var barData = [
	   	{ x: 'Jul 14', 'CMD IED': 15, 'IR IED': 21, 'Cell IED': 42, 'VBIED': 34, 'SVBIED': 21 },
			{ x: 'Aug 14', 'CMD IED': 27, 'IR IED': 24, 'Cell IED': 30, 'VBIED': 21, 'SVBIED': 13 },
			{ x: 'Sep 14', 'CMD IED': 36, 'IR IED': 21, 'Cell IED': 19, 'VBIED': 16, 'SVBIED': 10 },
			{ x: 'Oct 14', 'CMD IED': 12, 'IR IED': 14, 'Cell IED': 18, 'VBIED': 10, 'SVBIED': 11 }
		];
		
		var bubbleData = [
				{ x: 'CMD IED',   y: 81,   label: '14 Oct 2014' },
				{ x: 'CMD IED',   y: 7,    label: '07 Oct 2014' },
				{ x: 'CMD IED',   y: 9,    label: '30 Sep 2014' },
				{ x: 'CMD IED',   y: 14,   label: '24 Sep 2014' },
				{ x: 'CMD IED',   y: 7,    label: '16 Sep 2014' },
				{ x: 'CMD IED',   y: 81,   label: '14 Oct 2014' },
				{ x: 'CMD IED',   y: 7,    label: '07 Oct 2014' },
				{ x: 'CMD IED',   y: 9,    label: '30 Sep 2014' },
				{ x: 'CMD IED',   y: 14,   label: '24 Sep 2014' },
				{ x: 'CMD IED',   y: 7,    label: '16 Sep 2014' },
				{ x: 'IR IED',    y: 75,   label: '14 Oct 2014' },
				{ x: 'IR IED',    y: 12,   label: '07 Oct 2014' },
				{ x: 'IR IED',    y: 287,  label: '30 Sep 2014' },
				{ x: 'IR IED',    y: 318,  label: '24 Sep 2014' },
				{ x: 'IR IED',    y: 10,   label: '16 Sep 2014' },
				{ x: 'IR IED',    y: 2,    label: '14 Oct 2014' },
				{ x: 'IR IED',    y: 6,    label: '07 Oct 2014' },
				{ x: 'IR IED',    y: 4,    label: '30 Sep 2014' },
				{ x: 'IR IED',    y: 1,    label: '24 Sep 2014' },
				{ x: 'IR IED',    y: 2,    label: '14 Oct 2014' },
				{ x: 'IR IED',    y: 6,    label: '07 Oct 2014' },
				{ x: 'IR IED',    y: 4,    label: '30 Sep 2014' },
				{ x: 'IR IED',    y: 1,    label: '24 Sep 2014' },
				{ x: 'IR IED',    y: 1,    label: '16 Sep 2014' },
				{ x: 'Cell IED',  y: 30,   label: '14 Oct 2014' },
				{ x: 'Cell IED',  y: 107,  label: '07 Oct 2014' },
				{ x: 'Cell IED',  y: 57,   label: '30 Sep 2014' },
				{ x: 'Cell IED',  y: 2,    label: '24 Sep 2014' },
				{ x: 'Cell IED',  y: 54,   label: '16 Sep 2014' },
				{ x: 'Cell IED',  y: 6,    label: '14 Oct 2014' },
				{ x: 'Cell IED',  y: 54,   label: '16 Sep 2014' },
				{ x: 'Cell IED',  y: 6,    label: '14 Oct 2014' },
				{ x: 'Cell IED',  y: 29,   label: '07 Oct 2014' },
				{ x: 'Cell IED',  y: 42,   label: '30 Sep 2014' },
				{ x: 'Cell IED',  y: 12,   label: '24 Sep 2014' },
				{ x: 'Cell IED',  y: 5,    label: '16 Sep 2014' },
				{ x: 'VBIED',     y: 158,  label: '14 Oct 2014' },
				{ x: 'VBIED',     y: 23,   label: '07 Oct 2014' },
				{ x: 'VBIED',     y: 16,   label: '30 Sep 2014' },
				{ x: 'VBIED',     y: 69,   label: '24 Sep 2014' },
				{ x: 'VBIED',     y: 127,  label: '16 Sep 2014' },
				{ x: 'VBIED',     y: 28,   label: '14 Oct 2014' },
				{ x: 'VBIED',     y: 13,   label: '07 Oct 2014' },
				{ x: 'VBIED',     y: 69,   label: '24 Sep 2014' },
				{ x: 'VBIED',     y: 127,  label: '16 Sep 2014' },
				{ x: 'VBIED',     y: 28,   label: '14 Oct 2014' },
				{ x: 'VBIED',     y: 13,   label: '07 Oct 2014' },
				{ x: 'VBIED',     y: 6,    label: '30 Sep 2014' },
				{ x: 'VBIED',     y: 10,   label: '24 Sep 2014' },
				{ x: 'VBIED',     y: 17,   label: '16 Sep 2014' },
				{ x: 'SVBIED',    y: 95,   label: '14 Oct 2014' },
				{ x: 'SVBIED',    y: 13,   label: '14 Oct 2014' },
				{ x: 'SVBIED',    y: 4,    label: '07 Oct 2014' },
				{ x: 'SVBIED',    y: 9,    label: '30 Sep 2014' },
				{ x: 'SVBIED',    y: 3,    label: '07 Oct 2014' },
				{ x: 'SVBIED',    y: 1,    label: '30 Sep 2014' },
				{ x: 'SVBIED',    y: 10,   label: '24 Sep 2014' },
				{ x: 'SVBIED',    y: 6,    label: '16 Sep 2014' }              
			];
			
		var pieData = [
	   		{ x: 'CMD IED',   y: 12 },
	   		{ x: 'IR IED',    y: 14 },
	   		{ x: 'Cell IED',  y: 18 },
	   		{ x: 'VBIED',     y: 10 },
	   		{ x: 'SVBIED',    y: 11 }               
			];
		
      var scatterData = [
         {x: 10, y: 2, z: 'CMD IED'},
         {x: 3, y: 5, z: 'IR IED'},
         {x: 5, y: 2, z: 'CMD IED'},
         {x: 11, y: 1, z: 'IR IED'},
         {x: 8, y: 5, z: 'CMD IED'},
         {x: 5, y: 6, z: 'CMD IED'},
         {x: 2, y: 7, z: 'Cell IED'},
         {x: 7, y: 2, z: 'Cell IED'},
         {x: 8, y: 3, z: 'VBIED'},
         {x: 2, y: 9, z: 'IR IED'},
         {x: 3, y: 2, z: 'Cell IED'},
         {x: 5, y: 1, z: 'VBIED'},
         {x: 3, y: 7, z: 'SVBIED'},
         {x: 6, y: 2, z: 'SVBIED'}
      ];
      
		var bubbleOptions = {
         chart: {
            height: 400,
            width: 550,
            margin: {
               top: 50,
               left: 20,
               bottom: 40
            },
            colors: colorSpectrum,
            type: 'bubble'
         },
         types: {
            bubble: {
               scale: 50
            }
         }
      };
	      
      var barGroupedOptions = {
		   chart: {
		      height: 401,
		      width: 401,
		      colors: colorSpectrum
		   },
		   types: {
		      bar: {
		         grouped: true
		      }
		   }
		};
	    
		//Configuration Options Stacked Bar Chart
		var barStackedOptions = {
			chart: {
				height: 401,
				width: 401,
				colors: colorSpectrum
			},
			types: {
				bar: {
			   		stacked: true
				}
			}
		};
      
		//Configuration Options Percent Stacked Bar Chart
		var barStackedPercentOptions = {
			chart: {
			   height: 401,
			   width: 401,
			   colors: colorSpectrum
			},
			types: {
			   bar: {
			      stacked: true,
			      stacking: 'percent'
			   }
			}
		};
      
		//Configuration Options Line Chart
		var lineOptions = {
			chart: {
			   height: 401,
			   width: 401,
			   colors: colorSpectrum,
			   type: 'line'
			}
		};
      
      //Configuration Options Scatter Chart
		var scatterOptions = {
			chart: {
			   height: 401,
			   width: 350,
			   colors: colorSpectrum,
			   type: 'scatter'
			}
		};

		//Configuration Options for the Pie Chart
		var pieOptions = {
			chart: {
			   height: 190,
			   width: 190,
			   margin: {
               top: 40,
               right: 10,
               bottom: 20,
			      left: 10
			   },
			   colors: colorSpectrum,
			   type: 'pie'
			},
			types: {
			   pie: {
			      labels: {
			         enabled: true,
			         color: '#828282',
			         percent: true
			      }
			   }
			}
		};

      //Configuration Options for the Burst Chart
		var burstOptions = {
			chart: {
			   height: 190,
			   width: 190,
			   margin: {
			      top: 40,
               right: 10,
               bottom: 20,
			      left: 10
			   },
			   colors: colorSpectrum,
			   type: 'pie'
			},
			types: {
			   pie: {
			      burst: true,
			      scale: 20,
			      labels: {
			         enabled: true,
			         color: '#828282'
			      }
			   }
			}
		};
  
		//---------- INTERNAL FUNCTIONS ----------//
		
		//---------- PUBLIC VARIABLES ----------//
	
		//---------- PUBLIC FUNCTIONS ----------//
		self.getChart = function(chartType){
			var deferred = $q.defer();
			
			//Return object
			var chartObj = {};
			
			//Assign the data property and options property to the return object
			switch(chartType){
				case 'bubble':
					chartObj.data = bubbleData;
					chartObj.options = bubbleOptions;
					break;
			   case 'barGrouped':
					chartObj.data = barData;
					chartObj.options = barGroupedOptions;
					break;
            case 'barStacked':
					chartObj.data = barData;
					chartObj.options = barStackedOptions;
					break;
            case 'barStackedPercent':
					chartObj.data = barData;
					chartObj.options = barStackedPercentOptions;
					break;
            case 'line':
					chartObj.data = barData;
					chartObj.options = lineOptions;
					break;
            case 'pie':
					chartObj.data = pieData;
					chartObj.options = pieOptions;
					break;
			   case 'burst':
					chartObj.data = pieData;
					chartObj.options = burstOptions;
					break;
            case 'scatter':
					chartObj.data = scatterData;
					chartObj.options = scatterOptions;
					break;
				default:
					//Default to bar grouped
					chartObj.data = barData;
					chartObj.options = barGroupedOptions;
			}
						
			//Resolve and return the promise	
			deferred.resolve(chartObj);
			return deferred.promise;
		};

		return self;
	}])
	
	.factory('docsDemo', ['$q', function($q){
		var self = this;
		
		//put information about all of the directives here. make sure to include them in the switch statement in self.getDocs below
		var minervaTemplate = {
         language: 'html',
		   title: 'Minerva Starter Template',
		   about: 'This is an example of a Minerva dashboard template using a few common layout features including rows, groups, and ID boxes. This template also includes the three main components which are the header, body, and footer. Refer to the "Code - HTML" tab to see an example of how to write the index.html file and the "Code - JavaScript" tab to see an example of the bare minimum amount of code required in the app.js file.',
		   attributes: [],
		   results: '<mv-header mv-title="Minerva Dashboard">Home&emsp;Charts&emsp;Tables&emsp;Geo&emsp;Case Study</mv-header><mv-body mv-cols="5"><mv-row><mv-group mv-size="2x1"><mv-id-box mv-title="Grouped ID Box" mv-size="1x1"></mv-id-box><mv-id-box mv-title="Grouped ID Box" mv-size="1x1"></mv-id-box></mv-group><mv-id-box mv-title="ID Box" mv-size="2x3"></mv-id-box></mv-row></mv-body><mv-footer><div class="foot-right">Portal Team</div></mv-footer>',
         example: '<!DOCTYPE html>\n<head>\n   <title>Minerva Dashboard</title>\n   <meta http-equiv="X-UA-Compatible" content="IE=edge"/>\n\n   <!--styles-->\n   <link type="text/css" rel="stylesheet" href="../../Minerva/dev/minerva.css"/>\n   <link type="text/css" rel="stylesheet" href="../../Projects/Test/app.css"/>\n</head>\n<body>\n   <div ng-app="minervaDemoApp" ng-controller="mainCtrl" class="mv-container">\n      <mv-header mv-title="Minerva Dashboard">Home   Charts   Tables   Geo   Case Study</mv-header>\n      <mv-body mv-cols="5">\n         <mv-row>\n            <mv-group mv-size="2x1">\n               <mv-id-box mv-title="Grouped ID Box" mv-size="1x1"></mv-id-box>\n               <mv-id-box mv-title="Grouped ID Box" mv-size="1x1"></mv-id-box>\n            </mv-group>\n            <mv-id-box mv-title="ID Box" mv-size="2x3"></mv-id-box>\n         </mv-row>\n      </mv-body>\n      <mv-footer>\n         <div class="foot-right">Portal Team</div>\n      </mv-footer>\n   </div>\n\n   <!--libraries-->\n   <script type="text/javascript" src="../../Minerva/dev/lib/d3.min.js"></script>\n   <script type="text/javascript" src="../../Minerva/dev/lib/d3.tip.v0.6.3.js"></script>\n   <script type="text/javascript" src="../../Minerva/dev/lib/jquery-1.10.2.min.js"></script>\n   <script type="text/javascript" src="../../Minerva/dev/lib/jquery.SPServices-2014.01.js"></script>\n   <script type="text/javascript" src="../../Minerva/dev/lib/angular.min.js"></script>\n   <script type="text/javascript" src="../../Minerva/dev/minerva.js"></script>\n\n   <!--view specific-->\n   <script type="text/javascript" src="../../Projects/Test/app.js"></script>\n</body>'   
      };
      
      var mvHeader = {
         language: 'html',
		   title: 'mv-header',
		   about: 'This tag creates the black header bar at the top of the page. Content that is put between <mv-header> and </mv-header> (Example: <mv-header>Home, Charts, Tables, Geo, Case Study</mv-header>) will show up on the right side of the header as seen on this page.',
		   attributes: [
		      'mv-title - Text that will be displayed as the title of the page on the left side of the header as seen on the top of this page. (Example: mv-title="Minerva Dashboard") ' 
		   ],
		   results: '<div style="border:1px #CCCCCC solid"><mv-header style="border:2px red solid" mv-title="Minerva Dashboard">Home&emsp;Charts&emsp;Tables&emsp;Geo&emsp;Case Study</mv-header><mv-body mv-cols="5"><mv-group mv-size="2x1"></mv-group></mv-body><mv-footer><div class="foot-left">About</div><div class="foot-right">Portal Team</div></mv-footer></div>',
		   example: '<body>\n   <div ng-app="minervaDemoApp" ng-controller="mainCtrl" class="mv-container">\n      <mv-header mv-title="Minerva Dashboard">Home   Charts   Tables   Geo   Case Study</mv-header>\n   </div>\n</body>'
      };
		
		var mvBody = {
         language: 'html',
		   title: 'mv-body',
		   about: 'The body of the dashboard for adding data and charts.',
		   attributes: [
		      'mv-cols - The number of columns for the entire dashboard which can only equal 4, 5 or 6. The larger the column number, the wider the dashboard.'
		   ],
		   results: '<div style="border:1px #CCCCCC solid"><mv-header mv-title="Minerva Dashboard">Home&emsp;Charts&emsp;Tables&emsp;Geo&emsp;Case Study</mv-header><mv-body style="border:2px red solid" mv-cols="5"><mv-group mv-size="2x1"></mv-group></mv-body><mv-footer><div class="foot-left">About</div><div class="foot-right">Portal Team</div></mv-footer></div>',
		   example: '<body>\n   <div ng-app="minervaDemoApp" ng-controller="mainCtrl" class="mv-container">\n      <mv-body mv-cols="5"></mv-body>\n   </div>\n</body>'	   
		};
		
		var mvRow = {
         language: 'html',
		   title: 'mv-row',
		   about: 'Organizes the boxes within the dashboard. The width of the boxes (second number in mv-size) in a row cannot be more than the columns defined in mv-body (mv-col="5").',
		   attributes: [
		      'None'
		   ],
		   results: '<mv-body mv-cols="4"><mv-row><mv-id-box mv-title="ID Box" mv-size="1x3"></mv-id-box><mv-id-box mv-title="ID Box" mv-size="1x1"></mv-id-box></mv-row><mv-row><mv-id-box mv-title="ID Box" mv-size="1x4"></mv-id-box></mv-row></mv-body>',
		   example: '<body>\n   <div ng-app="minervaDemoApp" ng-controller="mainCtrl" class="mv-container">\n      <mv-body mv-cols="4">\n         <mv-row>\n            <mv-id-box mv-size="1x3"></mv-id-box>\n            <mv-id-box mv-size="1x1"></mv-id-box>\n         </mv-row>\n         <mv-row>\n            <mv-id-box mv-size="1x4"></mv-id-box>\n         </mv-row>\n      </mv-body>\n   </div>\n</body>'	   
		};
		
		var mvGroup = {
         language: 'html',
		   title: 'mv-group',
		   about: 'Allows the stacking of multiple boxes in one row (example outlined in red). It also allows the ability to create a blank space within the dashboard (example outlined in blue).',
		   attributes: [
		      'mv-size - The height and width of the box based on rows and columns. (Example: mv-size="2x4")',
		      'mv-style - Custom style for the group which can include most style sheet options (see W3Schools CSS Reference guide) (optional - preferred method is to change the CSS file).'
		   ],
         results: '<mv-body mv-cols="5"><mv-row><mv-group mv-size="2x1" style="border:1px red solid;" mv-style="{\'font-weight\':\'bold\'}"><mv-id-box mv-title="Grouped ID Box" mv-size="1x1"></mv-id-box><mv-id-box mv-title="Grouped ID Box" mv-size="1x1"></mv-id-box></mv-group><mv-group style="border:1px blue solid;" mv-size="2x1"></mv-group><mv-id-box mv-title="ID Box" mv-size="2x2"></mv-id-box></mv-row></mv-body>',
		   example: '<body>\n   <div ng-app="minervaDemoApp" ng-controller="mainCtrl" class="mv-container">\n      <mv-body mv-cols="5">\n         <mv-row>\n            <mv-group mv-size="2x1" mv-style="{\'font-weight\':\'bold\'}">\n               <mv-id-box mv-id="exampleIDBox" mv-title="Grouped ID Box" mv-size="1x1"></mv-id-box>\n               <mv-id-box mv-id="exampleIDBox" mv-title="Grouped ID Box" mv-size="1x1"></mv-id-box>\n            </mv-group>\n            <mv-group mv-size="2x1"></mv-group>\n            <mv-id-box mv-id="exampleIDBox" mv-title="ID Box" mv-size="2x3"></mv-id-box>\n         </mv-row>\n      </mv-body>\n   </div>\n</body>'
		};
		
		var mvIdBox = {
         language: 'html',
		   title: 'mv-id-box',
		   about: 'Creates boxes. Each box has a Header (with a title) and a Body. Content that is put between <mv-id-box> and </mv-id-box> will show up inside the body.',
		   attributes: [
		      'mv-id - The name of the box which should be unique and not contain spaces. This is used to identify the box in order to make changes to the style or code (optional).',
		      'mv-id-body - The name of the body of the box which should be unique and not contain spaces (optional).',
		      'mv-title - The display title of the box which will appear in the header (optional).',
		      'mv-size - The height and width of the box based on rows and columns. (Example: mv-size="2x4")',
		      'mv-click - Code/function that is run when you click on the header (optional).'
		   ],
		   results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-id="exampleIDBox" mv-id-body="exampleIDBody" mv-title="ID Box" mv-size="1x3" mv-click="runFunction()"></mv-id-box></mv-row></mv-body>',
		   example: '<body>\n   <div ng-app="minervaDemoApp" ng-controller="mainCtrl" class="mv-container">\n      <mv-body mv-cols="5">\n         <mv-row>\n            <mv-id-box mv-id="exampleIDBox" mv-id-body="exampleIDBody" mv-title="ID Box" mv-size="1x3"\n             mv-click="runFunction()"></mv-id-box>\n         </mv-row>\n      </mv-body>\n   </div>\n</body>'	   
		};
		
		var mvAnyNum = {
         language: 'html',
		   title: 'mv-any-num',
		   about: 'Allows for a series of labeled numbers not in a chart or table',
		   attributes: [
		      'mv-data - Data needed for the box.',
		      'mv-id - The name of the box which should be unique and not contain spaces. This is used to identify the table in order to make changes to the style or code (optional).',
		      'mv-id-head - The name of the body of the box which should be unique and not contain spaces (optional).',
		      'mv-title - The display title of the box which will appear in the header (optional).',
		      'mv-size - The height and width of the box based on rows and columns. (Example: mv-size="2x4")',
		      'mv-style - Custom style for the table which can include font, color and most style sheet options (see W3Schools CSS Reference guide) (optional).'
		   ],
		   results: '<mv-body mv-cols="5"><mv-row><mv-any-num mv-data="{title: \'Today\',data: [{title: \'CMD IED\',   number: \'4\'},{title: \'IR IED\',    number: \'2\'},{title: \'VBIED\',  number: \'2\'},]}" mv-id="exampleAnyNum" mv-id-head="exampleIDHead" mv-title="Any Num" mv-size="1x4"></mv-any-num></mv-row></mv-body>',
		   example: '<body>\n   <div ng-app="minervaDemoApp" ng-controller="mainCtrl" class="mv-container">\n      <mv-body mv-cols="5">\n         <mv-row>\n            <mv-any-num mv-data="data" mv-id="exampleAnyNum" mv-id-head="exampleIDHead" mv-title="Any Num"\n             mv-size="1x4" mv-style="{\'font-size\':\'0.75em\', \'padding\':\'2em\'}"></mv-any-num>\n         </mv-row>\n      </mv-body>\n   </div>\n</body>'	   
		};
		
		var mvTable = {
         language: 'html',
		   title: 'mv-table',
		   about: 'Makes a table that can be filtered.',
		   attributes: [
		      'mv-data - Data needed for the box',
		      'mv-id - The name of the box which should be unique and not contain spaces. This is used to identify the table in order to make changes to the style or code (optional).',
		      'mv-title - The display title of the box which will appear in the header (optional).',
		      'mv-size - The height and width of the box based on rows and columns. (Example: mv-size="2x4")',
		      'mv-style - Custom style for the table which can include font, color and most style sheet options (see W3Schools CSS Reference guide) (optional).'
		   ],
		   results: '<mv-body mv-cols="5"><mv-row><mv-table mv-style="{\'color\':\'#424242\'}" mv-data="{mapping: [{ title:\'Date/Time\',value: \'one\' },{ title:\'Type\',value: \'two\' },{ title:\'Killed/Wounded\',value: \'thr\' },{ title:\'Cleared\',value: \'fou\' } ],rows: [{ \'one\': \'30 Oct 2014 11:45\',\'two\': \'CMD IED\',\'thr\': \'0/0\',\'fou\': \'Yes\',\'mv-color\': \'w-c0\' },{ \'one\': \'30 Oct 2014 08:23\',\'two\': \'VBIED\',\'thr\': \'0/1\',\'fou\': \'No\',\'mv-color\': \'w-c1\' }]}" mv-id="exampleTable" mv-title="Table" mv-size="1x4"></mv-table></mv-row></mv-body>',
		   example: '<body>\n   <div ng-app="minervaDemoApp" ng-controller="mainCtrl" class="mv-container">\n      <mv-body mv-cols="5">\n         <mv-row>\n            <mv-table mv-data="data" mv-id="exampleTable" mv-title="Table" mv-size="1x4"\n             mv-style="{\'color\':\'#424242\'}"></mv-table>\n         </mv-row>\n      </mv-body>\n   </div>\n</body>'   
		};
		
		var mvTableList = {
         language: 'html',
		   title: 'mv-table-list',
		   about: 'Makes a list of grouped data which can be organized by colors and is displayed in two columns.',
		   attributes: [
		      'mv-data - Data needed for the box',
		      'mv-id - The name of the box, which should be unique and not contain spaces. This is used to identify the table in order to make changes to the style or code (optional).',
		      'mv-title - The display title of the box which will appear in the header (optional).',
		      'mv-size - The height and width of the box based on rows and columns. (Example: mv-size="2x4")',
		      'mv-style - Custom style for the table which can include font, color and most style sheet options (see W3Schools CSS Reference guide) (optional).'
		   ],
		   results: '<mv-body mv-cols="5"><mv-row><mv-table-list mv-data="[{title: \'29 Oct 2014\',data: [{title: \'CMD IED\',number: \'3\'},{title: \'IR IED\',number: \'1\'},{title: \'Cell IED\',  number: \'0\'},{title: \'VBIED\',number: \'2\'},{title: \'SVBIED\',number: \'0\'}]},{title: \'28 Oct 2014\',data: [{title: \'CMD IED\',number: \'1\'},{title: \'IR IED\',number: \'1\'},{title: \'Cell IED\',number: \'1\'},{title: \'VBIED\',number: \'2\'},{title: \'SVBIED\',number: \'1\'}]}]" mv-id="exampleTableList" mv-title="IED Events" mv-size="2x2" mv-style="{\'font-size\':\'0.8em\', \'padding\':\'2em\'}"></mv-table-list><mv-table-list mv-data="[{title: \'29 Oct 2014\',data: [{title: \'CMD IED\',number: \'3\'},{title: \'IR IED\',number: \'1\'},{title: \'Cell IED\',  number: \'0\'},{title: \'VBIED\',number: \'2\'},{title: \'SVBIED\',number: \'0\'}]},{title: \'28 Oct 2014\',data: [{title: \'CMD IED\',number: \'1\'},{title: \'IR IED\',number: \'1\'},{title: \'Cell IED\',number: \'1\'},{title: \'VBIED\',number: \'2\'},{title: \'SVBIED\',number: \'1\'}]}]" mv-id="exampleTableList" mv-title="Table List" mv-size="2x2" mv-style="{\'font-size\':\'1em\', \'padding\':\'3em\'}"></mv-table-list></mv-row></mv-body>',
		   example: '<body>\n   <div ng-app="minervaDemoApp" ng-controller="mainCtrl" class="mv-container">\n      <mv-body mv-cols="5">\n         <mv-row>\n            <mv-table-list mv-data="data" mv-id="exampleTableList" mv-title="IED Events" mv-size="2x2"\n             mv-style="{\'font-size\':\'0.8em\', \'padding\':\'2em\'}"></mv-table-list>\n         </mv-row>\n      </mv-body>\n   </div>\n</body>'   
		};
		
		var mvChart = {
         language: 'html',
		   title: 'mv-chart',
		   about: 'Makes a variety of different charts. The chart has to be put inside of an ID Box.',
		   attributes: [
		      'mv-data - Data needed for the chart which is pulled from SharePoint or another previously entered data source (see "Getting Chart Data" for more information).',
		      'mv-options - Chart options, which can include height; width; labels; colors and more (see mv-chart menu options for more information), can be added should modifications to the default options be required.'
		   ],
		   results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-size="2x2"><mv-chart mv-data="chartData" mv-options="chartGrouped"></mv-id-box></mv-chart></mv-row></mv-body>',
		   example: '<body>\n   <div ng-app="minervaDemoApp" ng-controller="mainCtrl" class="mv-container">\n      <mv-body mv-cols="5">\n         <mv-row>\n            <mv-id-box mv-size="2x2">\n               <mv-chart mv-data="chartData" mv-options="chartOptions"></mv-chart>\n            </mv-id-box>\n         </mv-row>\n      </mv-body>\n   </div>\n</body>'
		};
		
		var mvFooter = {
         language: 'html',
		   title: 'mv-footer',
		   about: 'Allows for the input of a footer to be placed at the bottom of the dashboard. Two classes ("foot-left" and "foot-right") are available to include information on the left or right of the footer (see example).',
		   attributes: [
		      'None'
		   ],
		   results: '<div style="border:1px #CCCCCC solid"><mv-header mv-title="Minerva Dashboard">Home&emsp;Charts&emsp;Tables&emsp;Geo&emsp;Case Study</mv-header><mv-body mv-cols="5"><mv-group mv-size="2x1"></mv-group></mv-body><mv-footer style="border:2px red solid"><div class="foot-left">About</div><div class="foot-right">Portal Team</div></mv-footer></div>',
		   example: '<body>\n   <div ng-app="minervaDemoApp" ng-controller="mainCtrl" class="mv-container">\n      <mv-footer>\n         <div class="foot-left">About</div>\n         <div class="foot-right">Portal Team</div>\n      </mv-footer>\n   </div>\n</body>'
		};
      
      //mvChart example objects with default values
      
      var objChart = {
         chart: {
            height: 401,
            width: 401,
            margin: {
               top: 40, 
               right: -20, 
               bottom: 60, 
               left: 40
            },
            colors: ["#427A82", "#51BF96", "#FBD163", "#F29A3F", "#DB5957"],
            backgroundColor: '#F3F3F3',
            sort: '',
            type: 'bar'
         }
      };
      
      var objLegend = {
         legend: {
            enabled: false,
            color: '#A6A6A6',
            title: '',
            position: {
               x: 425,
               y: 0
            }
         }
      };
      
      var objTooltip = {
         tooltip: {
            color: '#888888',
            format: '',
            prefix: '',
            suffix: ''
         }
      };
      
      var objXAxis = {
         xAxis: {
            title: {
               color: '#A6A6A6',
               size: '0.7em',
               text: 'X Axis'
            },
            labels: {
               format: '',
               color: '#A6A6A6'
            },
            gridlines: false,
            orient: 'bottom',
            spacing: null,
            ticks: null,
            tickSize: 6,
            tickPadding: 3
         }
      };
      
      var objYAxis = {
         yAxis: {
            title: {
               color: '#A6A6A6',
               size: '0.7em',
               text: 'Y Axis'
            },
            labels: {
               format: '0',
               color: '#A6A6A6'
            },
            gridlines: false,
            orient: 'left',
            ticks: null,
            tickSize: 6,
            tickPadding: 3,
            min: 0
         }
      };
      
      var objTypes = {
         types: {
            bar: {
               stacked: false,
               grouped: false,
               stacking: 'normal', //'normal' or 'percent'
               labels: {
                  enabled: false
               }
            },
            pie: {
               labels: {
                  enabled: false,
                  color: '#FFFFFF',
                  fontWeight: 'normal',
                  fontSize: '1em',
                  percent: false
               },
               burst: false,
               scale: 100,
               innerRadius: 0,
               labelRadius: 0
            },
            bubble: {
               scale: 60
            },
            map: {
               mapfile: 'us-states',
               quantizeScale: [0, 100],
               showPoints: false,
               detailed: false,
               simplify: false,
               globe: false,
               grid: false,
               zoom: false,
               rotate: false,
               satellite: {
                  enabled: false,
                  center: [-2, 5],
                  rotate: [76.00, -34.50, 32.12],
                  distance: 1.1,
                  tilt: 25,
                  scale: 5500
               }
            }
         }
      };
      
      //mvChart attributes
      
      var chart = {
         language: 'javascript',
         title: 'chartOptions - chart',
         about: 'Allows for the customization of how specified data is displayed in a chart. Customization options are listed in the attributes as defined below. All attributes as defined below are optional.',
         attributes: [
            'height - Height of the chart measured in number of pixels.',
            'width - Width of the chart measured in number of pixels.',
            'margin - The amount of space around the chart measured in number of pixels.',
            'colors - Allows for the input of desired color(s) used in the chart. Can be listed by name ("red", "pink") or by hex number ("#222222", "#B32D00"). Colors are assigned to categories in the order the data was entered (example: color 1 = category 1).',
            'backgroundColor - Changes the backgroud color of the chart (defaults to white). Can be listed by name ("red", "pink") or by hex number ("#222222", "#B32D00").',
            'sort - Sorts the X or Y data values of the chart in "x-ascending", "y-ascending", "x-descending" or "y-descending" order.',
            'type - Allows for the selection of the chart type (example: "bar", "line", "bubble").'
         ],
		   results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 401, width: 401, margin: {right: -10} }, xAxis: {spacing:0.5}}"></mv-chart></mv-row></mv-body>',
         example: '$scope.chartOptions = ' + JSON.stringify(objChart, undefined, 3)
      };
		
         //chart attributes
         
         var chartHeight = {
            language: 'javascript',
            title: 'chartOptions - chart - height',
            about: 'Specifies the chart height measured in pixels (example: height: 140).',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 140, width: 401}, xAxis: {spacing:0.5}, yAxis: { ticks: 5 } }"></mv-chart><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 220, width: 401}, xAxis: {spacing:0.5} }"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({chart: {height: 200}}, undefined, 3)
         };
         
         var chartWidth = {
            language: 'javascript',
            title: 'chartOptions - chart - width',
            about: 'Specifies the chart width measured in pixels (example: width: 350)',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x4"><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 198, width: 401}, xAxis: {spacing:0.5}}"></mv-chart><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 198, width: 819}, xAxis: {spacing:0.5}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({chart: {width: 200}}, undefined, 3)
         };
         
         var chartMargin = {
            language: 'javascript',
            title: 'chartOptions - chart - margin',
            about: 'The amount of space around the chart measured in number of pixels.',
            attributes: [
               'top - Specify the distance between the top of the box and the top of the chart, measured in pixels (example: top: 80)',
               'right - Specify the distance between the right side of the box and the right side of the chart, measured in pixels (example: right: 60)',
               'bottom - Specify the distance between the bottom of the box and the bottom of the chart, measured in pixels (example: bottom: 60)',
               'left - Specify the distance between the left side of the box and the left side of the chart, measured in pixels (example: left: 80)'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x4"><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 401, width: 418, margin: { top: 100, right: 80, bottom: 80, left: 100} }, xAxis: {spacing:0.25}}"></mv-chart><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 401, width: 401, margin: {right: 0} }, xAxis: {spacing:0.25}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({chart: {margin: { top: 80, right: 60, bottom: 60, left: 80}}}, undefined, 3)
         };
         
         var chartColors = {
            language: 'javascript',
            title: 'chartOptions - chart - colors',
            about: 'Allows for the input of desired color(s) used in the chart. Can be listed by name ("red", "pink") or by hex number ("#222222", "#B32D00"). Colors are assigned to categories in the order the data was entered (example: color: [\'#222222\', \'#B32D00\', \'#FFBF00\', \'#B9B9C8\']).',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 401, width: 401, colors: [ \'#0F408A\', \'#3C82ED\', \'#C5CCB1\', \'#A13E30\', \'#631105\'] }, xAxis: {spacing:0.5}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({chart: {colors: ['#0F408A', '#3C82ED', '#C5CCB1', '#A13E30', '#631105']}}, undefined, 3)
         };
         
         var chartBackgroundColor = {
            language: 'javascript',
            title: 'chartOptions - chart - backgroundColor',
            about: 'Changes the backgroud color of the chart (defaults to white). Can be listed by name ("red", "pink") or by hex number ("#222222", "#B32D00").',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 401, width: 401, backgroundColor: \'#000000\' }, xAxis: {spacing:0.5}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({chart: {backgroundColor: '#000000'}}, undefined, 3)
         };
         
         var chartSort = {
            language: 'javascript',
            title: 'chartOptions - chart - sort',
            about: 'Sorts the X or Y data values of a bar chart in "x-ascending", "y-ascending", "x-descending" or "y-descending" order.',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x2"><mv-chart mv-data="[{ x: \'CMD IED\',y: 12 },{ x: \'IR IED\',y: 14 },{ x: \'Cell IED\',y: 18 },{ x: \'VBIED\',y: 10 },{ x: \'SVBIED\',y: 11 }]" mv-options="{chart: {height: 401, width: 401, sort: \'y-descending\'}, xAxis: {spacing:0.5}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({chart: {sort: 'y-descending'}}, undefined, 3)
         };
         
         var chartType = {
            language: 'javascript',
            title: 'chartOptions - chart - type',
            about: 'Allows for the selection of the chart type (possible values: "bar", "line", "pie", "bubble", "map", "scatter").',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Pie Chart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 401, width: 401, margin: {top: 60, right: 40, bottom: 40, left: 40}, type: \'pie\'}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({chart: {type: 'pie'}}, undefined, 3)
         };
         
      var legend = {
         language: 'javascript',
         title: 'chartOptions - legend',
         about: 'A tool that defines what the colors used in the associated chart represent. All attributes as defined below are optional.',
         attributes: [
            'enabled - Allows for the option to show (true) or hide (false) a chart.',
		    'color - Allows for the input of desired font color used in the legend. Can be listed by name ("red", "pink") or by hex number ("#222222", "#B32D00").',
		    'title - The display title of the legend which will appear above it.',
		    'position - Sets the location of the legend within the chart area defined as x and y coordinates.'
         ],
		   results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x3"><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 401, width: 401}, legend: { enabled: true, position: {x: 425} }, xAxis: {spacing:0.5}}"></mv-chart></mv-id-box></mv-row></mv-body>',
         example: '$scope.chartOptions = ' + JSON.stringify(objLegend, undefined, 3)
      };
         
         //legend attributes
         
         var legendEnabled = {
            language: 'javascript',
            title: 'chartOptions - legend - enabled',
            about: 'Allows for the option to show (true) or hide (false) a chart.',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x3"><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 401, width: 401}, legend: { enabled: true, position: {x: 425} }, xAxis: {spacing:0.5}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({legend: {enabled: false}}, undefined, 3)
         };
         
         var legendColor = {
            language: 'javascript',
            title: 'chartOptions - legend - color',
            about: 'Allows for the input of desired font color used in the legend. Can be listed by name ("red", "pink") or by hex number ("#222222", "#B32D00").',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x3"><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 401, width: 401}, legend: { enabled: true, position: {x: 425}, color: \'#FF3881\' }, xAxis: {spacing:0.5}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({legend: {color: '#FF3881'}}, undefined, 3)
         };
         
         var legendTitle = {
            language: 'javascript',
            title: 'chartOptions - legend - title',
            about: 'The display title of the legend which will appear above it.',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x3"><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 401, width: 401}, legend: { enabled: true, title: \'Legend Title\', position: {x: 425, y: 20} }, xAxis: {spacing:0.5}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({legend: {title: 'Legend Title'}}, undefined, 3)
         };
         
         var legendPosition = {
            language: 'javascript',
            title: 'chartOptions - legend - position',
            about: 'Sets the location of the legend within the chart area defined as x and y coordinates.',
            attributes: [
               'x - Sets the horizontal position of the legend.',
               'y - Sets the vertical position of the legend.'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x3"><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 401, width: 401}, legend: { enabled: true, position: {x: 425, y: 200} }, xAxis: {spacing:0.5}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({legend: {position: { x: 425, y: 200}}}, undefined, 3)
         };
      
      var tooltip = {
         language: 'javascript',
         title: 'chartOptions - tooltip',
         about: 'Hover over individual data points to view additional details about the data provided in the chart.',
         attributes: [
            'color - Allows for the input of desired font color used in the tooltip\'s value. Can be listed by name ("red", "pink") or by hex number ("#222222", "#B32D00").',
            'format - Changes the formatting of the numbers displayed in the tooltip such as decimal, percentage etc.',
            'prefix - Text that goes before the numbers (example: "$" to display "$4" instead of "4").',
            'suffix - Text that goes after the numbers (example: " people" to display "4 people" instead of "4").'
         ],
		   results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 401, width: 401}, tooltip: { }, xAxis: {spacing:0.5}}"></mv-chart></mv-id-box></mv-row></mv-body>',
         example: '$scope.chartOptions = ' + JSON.stringify(objTooltip, undefined, 3)
      };
         
         //tooltip attributes
         
         var tooltipColor = {
            language: 'javascript',
            title: 'chartOptions - tooltip - color',
            about: 'Allows for the input of desired font color used in the tooltip\'s value. Can be listed by name ("red", "pink") or by hex number ("#222222", "#B32D00").',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 401, width: 401}, tooltip: { color: \'#FF3881\' }, xAxis: {spacing:0.5}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({tooltip: {color: '#FF3881'}}, undefined, 3)
         };
         
         var tooltipFormat = {
            language: 'javascript',
            title: 'chartOptions - tooltip - format',
            about: 'Changes the formatting of the numbers displayed in the tooltip such as the decimal or percentage. See the D3 Number Formatting reference for more information.',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 401, width: 401}, tooltip: { format: \'.1f\' }, xAxis: {spacing:0.5}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({tooltip: {format: '.1f'}}, undefined, 3)
         };
         
         var tooltipPrefix = {
            language: 'javascript',
            title: 'chartOptions - tooltip - prefix',
            about: 'Text that goes before the numbers (example: "$" to display "$4" instead of "4").',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 401, width: 401}, tooltip: { prefix: \'Events - \' }, xAxis: {spacing:0.5}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({tooltip: {prefix: 'Events - '}}, undefined, 3)
         };
         
         var tooltipSuffix = {
            language: 'javascript',
            title: 'chartOptions - tooltip - suffix',
            about: 'Text that goes after the numbers (example: " people" to display "4 people" instead of "4").',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{chart: {height: 401, width: 401}, tooltip: { suffix: \' events\' }, xAxis: {spacing:0.5}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({tooltip: {suffix: ' events'}}, undefined, 3)
         };   
      
      var xAxis = {
         language: 'javascript',
         title: 'chartOptions - xAxis',
         about: 'The horizontal axis of the associated chart.',
         attributes: [
            'title - The title is a description of the data displayed on the horizontal axis. The color, size and text of the title is defined here.',
            'labels - Defines the measurement of the data on the horizontal axis. The format and color of the labels are defined here; however, only numbers can be formatted.',
            'gridlines - The option to include (true) gridlines on the associated chart.',
            'spacing - Defines the space between the vertical axis and the first data point on the horizontal axis.',
            'ticks - Defines the number of tick marks on the horizontal axis. Can only be customized if the axis is measured numerically, otherwise it defaults to the number of data points. A value of "null" will auto calculate the number of X axis ticks based off of the data provided.',
            'tickSize - Defines the length of the tick marks, measured in pixels (example: tickSize=6). Set to zero to hide the tick marks.',
            'tickPadding - Defines the spacing between the labels and the tick marks, measured in pixels (example: tickPadding=3).'
         ],
		   results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{}"></mv-id-box></mv-chart></mv-row></mv-body>',
         example: '$scope.chartOptions = ' + JSON.stringify(objXAxis, undefined, 3)
      };
      
         //xAxis attributes
         
         var xAxisTitle = {
            language: 'javascript',
            title: 'chartOptions - xAxis - title',
            about: 'The title is a description of the data displayed on the horizontal axis. The color, size and text of the title is defined here.',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{xAxis: {spacing:0.5, title: {color:\'green\', size:\'1.5em\', text:\'IED Types\'}}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({xAxis: {stitle: {color:'green', size:'1.5em', text:'IED Types'}}}, undefined, 3)
         };
         
         var xAxisLabels = {
            language: 'javascript',
            title: 'chartOptions - xAxis - labels',
            about: 'Defines the measurement of the data on the horizontal axis. The format and color of the labels are defined here; however, only numbers can be formatted.',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{xAxis: {spacing:0.5, labels: {format: \'\', color: \'blue\'}}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({xAxis: {labels: {format: '', color: 'blue'}}}, undefined, 3)
         };
         
         var xAxisGridlines = {
            language: 'javascript',
            title: 'chartOptions - xAxis - gridlines',
            about: 'The option to include (true) gridlines on the associated chart.',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{xAxis: {spacing:0.5, gridlines: true}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({xAxis: {gridlines: true}}, undefined, 3)
         };
         
         var xAxisSpacing = {
            language: 'javascript',
            title: 'chartOptions - xAxis - spacing',
            about: 'Defines the space between the vertical axis and the first data point on the horizontal axis.',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x4"><mv-chart mv-data="chartDataSingle" mv-options="{chart: {width: 390}, xAxis: {spacing:1}}"></mv-chart><mv-chart mv-data="chartDataSingle" mv-options="{chart: {width: 390}, xAxis: {spacing:0.25}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({xAxis: {spacing:0.25}}, undefined, 3)
         };
         
         var xAxisTicks = {
            language: 'javascript',
            title: 'chartOptions - xAxis - ticks',
            about: 'Defines the number of tick marks on the horizontal axis. Can only be customized if the axis is measured numerically, otherwise it defaults to the number of data points. A value of "null" will auto calculate the number of X axis ticks based off of the data provided.',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="BarChart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{xAxis: {ticks:5}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({xAxis: {ticks:5}}, undefined, 3)
         };
         
         var xAxisTickSize = {
            language: 'javascript',
            title: 'chartOptions - xAxis - tickSize',
            about: 'Defines the length of the tick marks, measured in pixels (example: tickSize=6). Set to zero to hide the tick marks.',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="BarChart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{xAxis: {tickSize:12}, yAxis: {tickSize:3}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({xAxis: {tickSize:12}}, undefined, 3)
         };
         
         var xAxisTickPadding = {
            language: 'javascript',
            title: 'chartOptions - xAxis - tickPadding',
            about: 'Defines the spacing between the labels and the tick marks, measured in pixels (example: tickPadding=3).',
            attributes: [
               'None'
            ],
                results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x4"><mv-chart mv-data="chartDataSingle" mv-options="{xAxis: {tickPadding:10, spacing:0.5}}"></mv-chart><mv-chart mv-data="chartDataSingle" mv-options="{chart: {width: 370}, xAxis: {tickPadding:1, spacing:0.5}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({xAxis: {tickPadding:10}}, undefined, 3)
         };
         
      var yAxis = {
         language: 'javascript',
         title: 'chartOptions - yAxis',
         about: 'The vertical axis of the associated chart.',
         attributes: [
            'title - The title is a description of the data displayed on the vertical axis. The color, size and text of the title is defined here.',
            'labels - Defines the measurement of the data on the vertical axis. The format and color of the labels are defined here; however, only numbers can be formatted.',
            'gridlines - The option to include (true) gridlines on the associated chart.',
            'spacing - Defines the space between the horizontal axis and the first data point on the vertical axis.',
            'ticks - Defines the number of tick marks on the vertical axis. Can only be customized if the axis is measured numerically, otherwise it defaults to the number of data points. A value of "null" will auto calculate the number of Y axis ticks based off of the data provided.',
            'tickSize - Defines the length of the tick marks, measured in pixels (example: tickSize=6). Set to zero to hide the tick marks.',
            'tickPadding - Defines the spacing between the labels and the tick marks, measured in pixels (example: tickPadding=3).'
         ],
		 results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{}"></mv-id-box></mv-chart></mv-row></mv-body>',
         example: '$scope.chartOptions = ' + JSON.stringify(objYAxis, undefined, 3)
      };
      
         //yAxis attributes
         
         var yAxisTitle = {
            language: 'javascript',
            title: 'chartOptions - yAxis - title',
            about: 'The title is a description of the data displayed on the vertical axis. The color, size and text of the title is defined here.',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{xAxis: {spacing:0.5}, yAxis: {title: {color:\'green\', size:\'1.5em\', text:\'Events\'}}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({yAxis: {title: {color:'green', size:'1.5em', text:'Events'}}}, undefined, 3)

         };
         
         var yAxisLabels = {
            language: 'javascript',
            title: 'chartOptions - yAxis - labels',
            about: 'Defines the measurement of the data on the vertical axis. The format and color of the labels are defined here; however, only numbers can be formatted.',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{xAxis: {spacing:0.5}, yAxis: {labels: {format: \'\', color: \'blue\'}}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({yAxis: {labels: {format: '', color: 'blue'}}}, undefined, 3)
         };
         
         var yAxisGridlines = {
            language: 'javascript',
            title: 'chartOptions - yAxis - gridlines',
            about: 'The option to include (true) gridlines on the associated chart.',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{xAxis: {spacing:0.5}, yAxis: {gridlines: true}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({yAxis: {gridlines: true}}, undefined, 3)
         };
         
         var yAxisSpacing = {
            language: 'javascript',
            title: 'chartOptions - yAxis - spacing',
            about: 'Defines the space between the horizontal axis and the first data point on the vertical axis.',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x4"><mv-chart mv-data="chartDataSingle" mv-options="{chart: {width: 390}, yAxis: {spacing:1}}"></mv-chart><mv-chart mv-data="chartDataSingle" mv-options="{chart: {width: 390}, yAxis: {spacing:0.25}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({yAxis: {spacing:0.5}}, undefined, 3)
         };
         
         var yAxisTicks = {
            language: 'javascript',
            title: 'chartOptions - yAxis - ticks',
            about: 'Defines the number of tick marks on the vertical axis. Can only be customized if the axis is measured numerically, otherwise it defaults to the number of data points. A value of "null" will auto calculate the number of Y axis ticks based off of the data provided.',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="BarChart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{yAxis: {ticks:5}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({yAxis: {ticks:5}}, undefined, 3)
         };
         
         var yAxisTickSize = {
            language: 'javascript',
            title: 'chartOptions - yAxis - tickSize',
            about: 'Defines the length of the tick marks, measured in pixels (example: tickSize=6). Set to zero to hide the tick marks.',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="BarChart" mv-size="2x2"><mv-chart mv-data="chartDataSingle" mv-options="{yAxis: {tickSize:12}, xAxis: {tickSize:3}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({yAxis: {tickSize:12}}, undefined, 3)         };
         
         var yAxisTickPadding = {
            language: 'javascript',
            title: 'chartOptions - yAxis - tickPadding',
            about: 'Defines the spacing between the labels and the tick marks, measured in pixels (example: tickPadding=10).',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x4"><mv-chart mv-data="chartDataSingle" mv-options="{yAxis: {tickPadding:15}, xAxis: {spacing:0.5}}"></mv-chart><mv-chart mv-data="chartDataSingle" mv-options="{chart: {width: 370}, yAxis: {tickPadding:1}, xAxis: {spacing:0.5}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({yAxis: {tickPadding:10}}, undefined, 3)
         };
         
      var types = {
         language: 'javascript',
         title: 'chartOptions - types',
         about: 'Allows for the customization of the chart type within the specified box.',
         attributes: [
            'bar - Creates a bar graph which can be customized as a grouped bar or stacked bar.',
            'line - Creates a line graph with no additional options.',
		      'pie - Creates a pie chart which can also be customized as a burst chart.',
		      'bubble - Creates a three dimensional display of data. Bubbles are organized by color and size.',
		      'map - Creates a map of the specified geographical area which can be customized to display data points or colors.',
            'scatter - Creates a scatter graph with no additional options.'
         ],
		 results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bar Chart" mv-size="2x2"><mv-chart mv-data="[{ x: \'Jul 14\', \'CMD IED\': 15 },{ x: \'Aug 14\', \'CMD IED\': 27 },{ x: \'Sep 14\', \'CMD IED\': 36 },{ x: \'Oct 14\', \'CMD IED\': 12 }]" mv-options="chartStacked"></mv-chart></mv-id-box><mv-id-box mv-title="Pie Chart" mv-size="1x2"><mv-chart ng-style="{\'margin-left\':\'7em\'}" mv-data="chartDataSingle" mv-options="chartPie"></mv-chart></mv-id-box><mv-id-box mv-title="Map" mv-size="1x2"><mv-chart ng-style="{\'margin-left\':\'3.5em\'}" mv-data="{choropleth: []}" mv-options="{chart: {height: 150, width: 250, margin: {top: 120}, type:\'map\'},types: {map: {mapfile: \'us-states\'}}}"></mv-chart></mv-id-box></mv-row></mv-body>',
         example: '$scope.chartOptions = ' + JSON.stringify(objTypes, undefined, 3)
      };
         
         //types attributes
         
         var typesBar = {
            language: 'javascript',
            title: 'chartOptions - types - bar',
            about: 'Creates a bar graph which can be customized as a grouped bar or stacked bar.',
            attributes: [
               'stacked - Allows for the option to stack data with a common x value on the same bar (true/false).',
               'grouped - Allows for the option to group data with a common x value (true/false).',
               'stacking - The type of stacking to display if stacked is equal to true ("number"/"percent").',
               'labels - Provides the option to label the total of the stacked bars if stacked is equal to true (true/false).'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Stacked Bar" mv-size="2x2"><mv-chart mv-data="chartData" mv-options="chartStacked"></mv-chart></mv-id-box><mv-id-box mv-title="Grouped Bar" mv-size="2x2"><mv-chart mv-data="chartData" mv-options="chartGrouped"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({ types: {
               bar: {
                  stacked: false,
                  grouped: false,
                  stacking: "normal",
                  labels: {
                     enabled: false
                  }
               }}}, 
            undefined, 3)
         };
         
         var typesLine = {
            language: 'javascript',
            title: 'chartOptions - types - line',
            about: 'Creates a line graph with no additional options.',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Line Chart" mv-size="2x2"><mv-chart mv-data="chartData" mv-options="chartLine"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify('None', undefined, 3)
         };
         
         var typesPie = {
            language: 'javascript',
            title: 'chartOptions - types - pie',
            about: 'Creates a pie chart which can also be customized as a burst chart.',
            attributes: [
               'labels - The label is the title of each pie slice. Can be customized by color, size, or font weight and can be displayed in percentage or number format. Set enabled to true to show the labels.',
               'burst - Provides the option to display the pie chart data as a burst chart (true/false).',
               'scale - Adjust the size of the burst chart. Larger numbers make the burst chart smaller.',
               'innerRadius - Allows for the option to create a donut chart by increasing the inner radius.',
               'labelRadius - Specifies the distance between the outer border of the chart and the label.'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Pie Chart" mv-size="1x1"><mv-chart mv-data="chartDataSingle" mv-options="chartPie"></mv-chart></mv-id-box><mv-id-box mv-title="Burst Chart" mv-size="1x1"><mv-chart mv-data="chartDataSingle" mv-options="chartBurst"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({types: { 
               pie: { 
                  labels: {
                     enabled: false,
                     color: "#FFFFFF",
                     fontWeight: "normal",
                     fontSize: "1em",
                     percent: false
                  },
                  burst: false,
                  scale: 100,
                  innerRadius: 0,
                  labelRadius: 0
               }
            }}, 
            undefined, 3)
         };
         
         var typesBubble = {
            language: 'javascript',
            title: 'chartOptions - types - bubble',
            about: 'Creates a three dimensional display of data. Bubbles are organized by color and size.',
            attributes: [
               'scale - Specify the size of the bubble chart (example: scale: 60).'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Bubble Chart" mv-size="2x4"><mv-chart mv-data="dataBubble" mv-options="{chart: {height: 400,width: 780,margin: {top: 50,left: 60},colors: [\'#00FA9A\',\'#48D1CC\',\'#EE82EE\',\'#C71585\',\'#191970\'],type: \'bubble\'},types: {bubble: {scale: 50}}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({types: { 
               bubble: { 
                  scale: 60 
               }
            }},
            undefined, 3)
         };
         
         var typesMap = {
            language: 'javascript',
            title: 'chartOptions - types - map',
            about: 'Creates a map of the specified geographical area which can be customized to display data points or colors.',
            attributes: [
               'mapfile - Specifies which map to display (possible values: "us-states", "us-counties", "world", "afg").',
               'quantizeScale - Assigns the specified chart colors (chart -> colors) based on the number scale provided. The first color entered is linked to the first number on the scale. The remaining colors are evenly distributed across the scale until the last color entered is linked to the last number on the scale (example: quantizeScale: [0, 100]).',
               'showPoints - Allows for the option to view data points on the map (showPoints: true).',
               'detailed - Allows for the option to view a detailed world map (detailed: true)',
               'simplify - If activated, this option simplifies the map file by reducing the border detail for faster loading times (simplify: true).',
               'globe - Allows for the option to view a world map as a globe rather than a flat map (globe: true).',
               'grid - Allows for the option to add latitude and longitude grid lines to the map (grid:true).',
               'zoom - Allows for the option to zoom in on the map using the scroll button on the mouse (zoom: true).',
               'rotate - When activated, the globe will automatically rotate (rotate: true).'               
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Globe and Afghanistan" mv-size="2x4"><mv-chart mv-data="{choropleth:[]}" mv-options="{chart: {height: 360, width: 360, margin: {top: 50, left: 40, right: 10} , type: \'map\'}, types: {map: {mapfile: \'world\', quantizeScale: [0, 0], globe: true, simplify: true}}}"></mv-chart><mv-chart ng-style="{\'margin-left\':\'2em\'}" mv-data="{choropleth:[]}" mv-options="{chart: {height: 400, width: 400, margin: {top: 50, left: 30, right: -30} , type: \'map\'}, types: {map: {mapfile: \'afg\'}}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({types: { 
               map: {
                  mapfile: "world",
                  quantizeScale: [
                     0,
                     100
                  ],
                  showPoints: false,
                  detailed: false,
                  simplify: true,
                  globe: true,
                  grid: false,
                  zoom: false,
                  rotate: false,
                  satellite: {
                     enabled: false,
                     center: [
                        -2,
                        5
                     ],
                     rotate: [
                        -45,
                        -28,
                        0
                     ],
                     distance: 1.1,
                     tilt: 25,
                     scale: 5500
                  }
               }
            }}, 
            undefined, 3)
         };
         
         var typesSatellite = {
            language: 'javascript',
            title: 'chartOptions - types - map - satellite',
            about: 'Creates a map of the specified geographical area which can be customized to display data points or colors.',
            attributes: [
               'enabled - Enables a close satellite view of the globe (enabled: true).',
               'center - Provides the option to specify the angle of the view where the first number adjusts the horizontal angle and the second number adjusts the vertical angle (center: [-2, 5]).',
               'rotate - This option, when activated, shifts the entire map to a specified view where the first number rotates the map horizontally, the second number rotates the map vertically, and the third number spins the map on the z axis (rotate: [-45, -28, 0]).',
               'distance - How far away the satellite view displays (distance: 1.1).',
               'tilt - Provides the option to specify vertical tilt from a different angle than the vertical angle from "satellite - center" (tilt: 25).',
               'scale - Allows the option to adjust the field of view (scale: 5500).'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Satellite" mv-size="2x4"><mv-chart mv-data="{choropleth:[]}" mv-options="{chart: {height: 400, width: 400, margin: {top: 40, left: 20, bottom: 20, right: 20} , type: \'map\'}, types: {map: {mapfile: \'world\', detailed: true, satellite: {enabled: true, center: [10, 2], rotate: [-25, -28, 0], distance: 1.05, tilt: 25, scale: 5500}}}}"></mv-chart><mv-chart mv-data="{choropleth:[]}" mv-options="{chart: {height: 400, width: 400, margin: {top: 40, left: 20, bottom: 20, right: 20} , type: \'map\'}, types: {map: {mapfile: \'world\', detailed: true, satellite: {enabled: true, center: [5, 2], rotate: [-45, -28, 0], distance: 1.1, tilt: 50, scale: 2500}}}}"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify({types: { 
               map: {
                  satellite: {
                     enabled: false,
                     center: [
                        10,
                        2
                     ],
                     rotate: [
                        -25,
                        -28,
                        0
                     ],
                     distance: 1.05,
                     tilt: 25,
                     scale: 5500
                  }
               }
            }}, 
            undefined, 3)
         };

         var typesScatter = {
            language: 'javascript',
            title: 'chartOptions - types - scatter',
            about: 'Creates a scatter graph with no additional options.',
            attributes: [
               'None'
            ],
            results: '<mv-body mv-cols="5"><mv-row><mv-id-box mv-title="Scatter Chart" mv-size="2x2"><mv-chart mv-data="chartDataScatter" mv-options="chartScatter"></mv-chart></mv-id-box></mv-row></mv-body>',
            example: JSON.stringify('None', undefined, 3)
         };
      
      //steps
      
      var processImage = {
         language: '',
         title: 'Chart Data Gathering Process',
         about: '',
         attributes: [],
         results: '',
         example: 'https://teams.jieddo.mil/org/DDIEM/kmt/images/Minerva-Gathering Dashboard Data.svg'
      };
      
      var stepOne = {
         language: '',
         title: 'Step 1: Creating the Module',
         about: 'The module serves as a place to collect and organize specified components for the dashboard by linking together different parts of the application. The title of the application is also specified here (example: \'minervaDemoApp\') and is used to create the dashboard (as seen in the Code section in "Starter Template" on line two: ng-app="minervaDemoApp")',
         attributes: [],
         results: '(\n   function () {\n      var app = angular.module(\'minervaDemoApp\', [\'mvMinerva\'])\n   }()\n);',
         example: '(\n   function () {\n      var app = angular.module(\'minervaDemoApp\', [\'mvMinerva\'])\n   }()\n);'
      };
      
      var stepTwo = {
         language: '',
         title: 'Step 2: Making the Factory',
         about: 'Where the controller gets the data from the data source. The factory is necessary because it contains the request for information from a database (query) to the data source (step 3) and formats the data (step 4).',
         attributes: [],
         results: '.factory(\'DemoApp\', [\'$q\', function($q){\n   return {\n      getDemoData: function(){	\n         var defer = $q.defer();\n         var promises = {};\n         var def = []; //defers to convert spservices promise to angular promise\n         \n         def[0] = $q.defer();\n         promises.demoData = def[0].promise;\n           \n         $().SPServices.SPGetListItemsJson(\n           //This will be added in Step 3: Querying SharePoint\n         )\n         .then(function() {\n            def[0].resolve(this.data);\n         }, function() {\n            def[0].resolve(\'\');\n         });\n         \n         $q.all(promises) \n            .then(function(results){\n               //This will be added in Step 4: Formatting the Data\n            });\n         //return the promise which will return chartData as results\n         return defer.promise;\n       } //end getDemoData\n   }//end return object\n}]);//end demo factory',
         example: '(\n   function () {\n      var app = angular.module(\'minervaDemoApp\', [\'mvMinerva\'])\n      .factory(\'DemoApp\', [\'$q\', function($q){\n         return {\n            getDemoData: function(){	\n               var defer = $q.defer();\n               var promises = {};\n               var def = []; //defers to convert spservices promise to angular promise\n               \n               def[0] = $q.defer();\n               promises.demoData = def[0].promise;\n                 \n               $().SPServices.SPGetListItemsJson(\n                 //This will be added in Step 3: Querying SharePoint\n               )\n               .then(function() {\n                  def[0].resolve(this.data);\n               }, function() {\n                  def[0].resolve(\'\');\n               });\n               \n               $q.all(promises) \n                  .then(function(results){\n                     //This will be added in Step 4: Formatting the Data\n                  });\n               //return the promise which will return chartData as results\n               return defer.promise;\n            } //end getDemoData\n         }//end return object\n      }]);//end demo factory\n   }()\n);'
      };
      
      var stepThree = {
         language: '',
         title: 'Step 3: Querying SharePoint',
         about: 'A query is the request for information from a database and is used in this case to gather the data used in the dashboard from a specified SharePoint list. See the SPServices Guide reference link for more information.',
         attributes: [],
         results: '{\n   listName: \'Demo\',\n   CAMLQuery: \'<Query> \\\n                  <OrderBy> \\\n                     <FieldRef Name="Year" Ascending="False"/> \\\n                     <FieldRef Name="Month" Ascending="False"/> \\\n                  </OrderBy> \\\n               </Query>\',\n   CAMLViewFields: \'<ViewFields> \\\n                       <FieldRef Name="Month" /> \\\n                       <FieldRef Name="Year" /> \\\n                       <FieldRef Name="CMDIED" /> \\\n                       <FieldRef Name="IRIED" /> \\\n                       <FieldRef Name="CellIED" /> \\\n                       <FieldRef Name="VBIED" /> \\\n                       <FieldRef Name="SVBIED" /> \\\n                    </ViewFields>\',\n   mapping: {\n      ows_Month: { mappedName: "Month", objectType: "Choice" },\n      ows_Year: { mappedName: "Year", objectType: "Number" },\n      ows_CMDIED: { mappedName: "CMD IED", objectType: "Number" },\n      ows_IRIED: { mappedName: "IR IED", objectType: "Number" },\n      ows_CellIED: { mappedName: "Cell IED", objectType: "Number" },\n      ows_VBIED: { mappedName: "VBIED", objectType: "Number" },\n      ows_SVBIED: { mappedName: "SVBIED", objectType: "Number" }\n   }\n}',
         example: '(\n   function () {\n      var app = angular.module(\'minervaDemoApp\', [\'mvMinerva\'])\n      .factory(\'DemoApp\', [\'$q\', function($q){\n         return {\n            getDemoData: function(){	\n               var defer = $q.defer();\n               var promises = {};\n               var def = []; //defers to convert spservices promise to angular promise\n               \n               def[0] = $q.defer();\n               promises.demoData = def[0].promise;\n                 \n               $().SPServices.SPGetListItemsJson(\n               {\n                  listName: \'Demo\',\n                  CAMLQuery: \'<Query> \\\n                                 <OrderBy> \\\n                                    <FieldRef Name="Year" Ascending="False"/> \\\n                                    <FieldRef Name="Month" Ascending="False"/> \\\n                                 </OrderBy> \\\n                              </Query>\',\n                  CAMLViewFields: \'<ViewFields> \\\n                                      <FieldRef Name="Month" /> \\\n                                      <FieldRef Name="Year" /> \\\n                                      <FieldRef Name="CMDIED" /> \\\n                                      <FieldRef Name="IRIED" /> \\\n                                      <FieldRef Name="CellIED" /> \\\n                                      <FieldRef Name="VBIED" /> \\\n                                      <FieldRef Name="SVBIED" /> \\\n                                   </ViewFields>\',\n                  mapping: {\n                     ows_Month: { mappedName: "Month", objectType: "Choice" },\n                     ows_Year: { mappedName: "Year", objectType: "Number" },\n                     ows_CMDIED: { mappedName: "CMD IED", objectType: "Number" },\n                     ows_IRIED: { mappedName: "IR IED", objectType: "Number" },\n                     ows_CellIED: { mappedName: "Cell IED", objectType: "Number" },\n                     ows_VBIED: { mappedName: "VBIED", objectType: "Number" },\n                     ows_SVBIED: { mappedName: "SVBIED", objectType: "Number" }\n                  }\n               })\n               .then(function() {\n                  def[0].resolve(this.data);\n               }, function() {\n                  def[0].resolve(\'\');\n               });\n               \n               $q.all(promises) \n                  .then(function(results){\n                     //This will be added in Step 4: Formatting the Data\n                  });\n               //return the promise which will return chartData as results\n               return defer.promise;\n            } //end getDemoData\n         }//end return object\n      }]);//end demo factory\n   }()\n);'
      };
      
      var stepFour = {
         language: '',
         title: 'Step 4: Formatting the Data',
         about: 'This step is the process of reconfiguring the data from the SharePoint format to the desired format required for the dashboard. This is done by using the "angular.forEach" function to loop through the SharePoint data (as shown below) and then using the ".push" function to add the formatted data to the chartData list.',
         attributes: [],
         results: 'var chartData = [];\n\nangular.forEach(results.demoData, function(record, idx)\n{\n   var recKeys = Object.keys(record);\n   var monthYear = record.Month + \' \' + record.Year;\n   chartData.push(\n      {\n         title: monthYear,\n         data: \n         [\n            { title: recKeys[4], number: record[recKeys[4]] }, //CMD IED\n            { title: recKeys[3], number: record[recKeys[3]] }, //IR IED\n            { title: recKeys[2], number: record[recKeys[2]] }, //Cell IED\n            { title: recKeys[1], number: record[recKeys[1]] }, //VBIED\n            { title: recKeys[0], number: record[recKeys[0]] }  //SVBIED\n         ]\n      }\n   );\n});\n\n//add chartData to the defer\ndefer.resolve({ data: chartData });',
         example: '(\n   function () {\n      var app = angular.module(\'minervaDemoApp\', [\'mvMinerva\'])\n      .factory(\'DemoApp\', [\'$q\', function($q){\n         return {\n            getDemoData: function(){	\n               var defer = $q.defer();\n               var promises = {};\n               var def = []; //defers to convert spservices promise to angular promise\n               \n               def[0] = $q.defer();\n               promises.demoData = def[0].promise;\n                 \n               $().SPServices.SPGetListItemsJson(\n               {\n                  listName: \'Demo\',\n                  CAMLQuery: \'<Query> \\\n                                 <OrderBy> \\\n                                    <FieldRef Name="Year" Ascending="False"/> \\\n                                    <FieldRef Name="Month" Ascending="False"/> \\\n                                 </OrderBy> \\\n                              </Query>\',\n                  CAMLViewFields: \'<ViewFields> \\\n                                      <FieldRef Name="Month" /> \\\n                                      <FieldRef Name="Year" /> \\\n                                      <FieldRef Name="CMDIED" /> \\\n                                      <FieldRef Name="IRIED" /> \\\n                                      <FieldRef Name="CellIED" /> \\\n                                      <FieldRef Name="VBIED" /> \\\n                                      <FieldRef Name="SVBIED" /> \\\n                                   </ViewFields>\',\n                  mapping: {\n                     ows_Month: { mappedName: "Month", objectType: "Choice" },\n                     ows_Year: { mappedName: "Year", objectType: "Number" },\n                     ows_CMDIED: { mappedName: "CMD IED", objectType: "Number" },\n                     ows_IRIED: { mappedName: "IR IED", objectType: "Number" },\n                     ows_CellIED: { mappedName: "Cell IED", objectType: "Number" },\n                     ows_VBIED: { mappedName: "VBIED", objectType: "Number" },\n                     ows_SVBIED: { mappedName: "SVBIED", objectType: "Number" }\n                  }\n               })\n               .then(function() {\n                  def[0].resolve(this.data);\n               }, function() {\n                  def[0].resolve(\'\');\n               });\n               \n               $q.all(promises) \n                  .then(function(results){\n                     var chartData = [];\n\n                     angular.forEach(results.demoData, function(record, idx)\n                     {\n                        var recKeys = Object.keys(record);\n                        var monthYear = record.Month + \' \' + record.Year;\n                        chartData.push(\n                           {\n                              title: monthYear,\n                              data: \n                              [\n                                 { title: recKeys[4], number: record[recKeys[4]] }, //CMD IED\n                                 { title: recKeys[3], number: record[recKeys[3]] }, //IR IED\n                                 { title: recKeys[2], number: record[recKeys[2]] }, //Cell IED\n                                 { title: recKeys[1], number: record[recKeys[1]] }, //VBIED\n                                 { title: recKeys[0], number: record[recKeys[0]] }  //SVBIED\n                              ]\n                           }\n                        );\n                     });\n\n                     //add chartData to the defer\n                     defer.resolve({ data: chartData });\n                  });\n               //return the promise which will return chartData as results\n               return defer.promise;\n            } //end getDemoData\n         }//end return object\n      }]);//end demo factory\n   }()\n);'
      };
      
      var stepFourB = {
         language: '',
         title: 'Dashboard Data Formats',
         about: 'The charts and tables each require data to be in a specific format. Some charts share the same format. All of the formats are shown below.',
         attributes: [],
         results: '//Line and Bar Chart (stacked and grouped)\nvar chartData = [\n   { x: \'Jul 14\', \'CMD IED\': 15, \'IR IED\': 21, \'Cell IED\': 42, \'VBIED\': 34, \'SVBIED\': 21 }\n];\n\n//Pie and Bar Chart\nvar chartData = [\n   { x: \'CMD IED\', y: 12 }\n];\n\n//Bubble Chart\nvar chartData = [\n   { x: \'CMD IED\', y: 81, label: \'14 Oct 2014\' }\n];\n\n//Scatter Chart\nvar chartData = [\n   { x: 10, y: 2, z: \'CMD IED\' }\n];\n\n//Map\nvar chartData = {\n   choropleth: [\n      { x: \'760\', y: 3 },   //Syria\n      { x: \'368\', y: 13 },  //Iraq\n   ],\n   points: [\n      { Lat: 33.30, Lon: 36.17, Magnitude: 5, Color: \'#F9F9F9\', pointName: \'Damascus\' },\n      { Lat: 33.20, Lon: 44.26, Magnitude: 5, Color: \'#F9F9F9\', pointName: \'Baghdad\' }\n   ]\n};\n\n//Any Num\nvar tableData = {\n   title: \'30 Oct 2014\',\n   data: [\n      { title: \'CMD IED\',  number: \'4\' },\n      { title: \'IR IED\',   number: \'2\' },\n      { title: \'Cell IED\', number: \'2\' },\n      { title: \'VBIED\',    number: \'1\' },\n      { title: \'SVBIED\',   number: \'0\' }\n   ]\n};\n\n//Table List\nvar tableData = [\n   {\n      title: \'30 Oct 2014\',\n      data: [\n         { title: \'CMD IED\',  number: \'4\' },\n         { title: \'IR IED\',   number: \'2\' },\n         { title: \'Cell IED\', number: \'2\' },\n         { title: \'VBIED\',    number: \'1\' },\n         { title: \'SVBIED\',   number: \'0\' }\n      ]\n   }\n];\n\n//Table\nvar tableData = {\n   mapping: [\n      { title:\'Date/Time\',       value: \'one\' },\n      { title:\'Type\',            value: \'two\' },\n      { title:\'Killed/Wounded\',  value: \'thr\' },\n      { title:\'Cleared\',         value: \'fou\' } \n   ],\n   rows: [\n      { \n         \'one\': \'30 Oct 2014 16:43\',\n         \'two\': \'CMD IED\',\n         \'thr\': \'0/0\',\n         \'fou\': \'No\',\n         \'mv-color\': \'w-c0\'\n      }\n   ]\n};',
         example: '(\n   function () {\n      var app = angular.module(\'minervaDemoApp\', [\'mvMinerva\'])\n      .factory(\'DemoApp\', [\'$q\', function($q){\n         return {\n            getDemoData: function(){	\n               var defer = $q.defer();\n               var promises = {};\n               var def = []; //defers to convert spservices promise to angular promise\n               \n               def[0] = $q.defer();\n               promises.demoData = def[0].promise;\n                 \n               $().SPServices.SPGetListItemsJson(\n               {\n                  listName: \'Demo\',\n                  CAMLQuery: \'<Query> \\\n                                 <OrderBy> \\\n                                    <FieldRef Name="Year" Ascending="False"/> \\\n                                    <FieldRef Name="Month" Ascending="False"/> \\\n                                 </OrderBy> \\\n                              </Query>\',\n                  CAMLViewFields: \'<ViewFields> \\\n                                      <FieldRef Name="Month" /> \\\n                                      <FieldRef Name="Year" /> \\\n                                      <FieldRef Name="CMDIED" /> \\\n                                      <FieldRef Name="IRIED" /> \\\n                                      <FieldRef Name="CellIED" /> \\\n                                      <FieldRef Name="VBIED" /> \\\n                                      <FieldRef Name="SVBIED" /> \\\n                                   </ViewFields>\',\n                  mapping: {\n                     ows_Month: { mappedName: "Month", objectType: "Choice" },\n                     ows_Year: { mappedName: "Year", objectType: "Number" },\n                     ows_CMDIED: { mappedName: "CMD IED", objectType: "Number" },\n                     ows_IRIED: { mappedName: "IR IED", objectType: "Number" },\n                     ows_CellIED: { mappedName: "Cell IED", objectType: "Number" },\n                     ows_VBIED: { mappedName: "VBIED", objectType: "Number" },\n                     ows_SVBIED: { mappedName: "SVBIED", objectType: "Number" }\n                  }\n               })\n               .then(function() {\n                  def[0].resolve(this.data);\n               }, function() {\n                  def[0].resolve(\'\');\n               });\n               \n               $q.all(promises) \n                  .then(function(results){\n                     var chartData = [];\n\n                     angular.forEach(results.demoData, function(record, idx)\n                     {\n                        var recKeys = Object.keys(record);\n                        var monthYear = record.Month + \' \' + record.Year;\n                        chartData.push(\n                           {\n                              title: monthYear,\n                              data: \n                              [\n                                 { title: recKeys[4], number: record[recKeys[4]] }, //CMD IED\n                                 { title: recKeys[3], number: record[recKeys[3]] }, //IR IED\n                                 { title: recKeys[2], number: record[recKeys[2]] }, //Cell IED\n                                 { title: recKeys[1], number: record[recKeys[1]] }, //VBIED\n                                 { title: recKeys[0], number: record[recKeys[0]] }  //SVBIED\n                              ]\n                           }\n                        );\n                     });\n\n                     //add chartData to the defer\n                     defer.resolve({ data: chartData });\n                  });\n               //return the promise which will return chartData as results\n               return defer.promise;\n            } //end getDemoData\n         }//end return object\n      }]);//end demo factory\n   }()\n);'
      };
      
      var stepFive = {
         language: '',
         title: 'Step 5: Setting up the Controller',
         about: 'Communicates the data to the dashboard by calling the function created in the factory.',
         attributes: [],
         results: '.controller(\'dashControl\', [\'$scope\', \'$timeout\', \'DemoApp\', function($scope, $timeout, DemoApp)\n{\n   DemoApp.getDemoData().then(function(results){\n      $scope.demoChartData = results.data;\n   });\n   \n   //chartOptions for the demo chart\n   $scope.demoChartOptions = {\n      chart: {\n         width: 700\n      }\n   }\n}])',
         example: '(\n   function () {\n      var app = angular.module(\'minervaDemoApp\', [\'mvMinerva\'])\n      .factory(\'DemoApp\', [\'$q\', function($q){\n         return {\n            getDemoData: function(){	\n               var defer = $q.defer();\n               var promises = {};\n               var def = []; //defers to convert spservices promise to angular promise\n               \n               def[0] = $q.defer();\n               promises.demoData = def[0].promise;\n                 \n               $().SPServices.SPGetListItemsJson(\n               {\n                  listName: \'Demo\',\n                  CAMLQuery: \'<Query> \\\n                                 <OrderBy> \\\n                                    <FieldRef Name="Year" Ascending="False"/> \\\n                                    <FieldRef Name="Month" Ascending="False"/> \\\n                                 </OrderBy> \\\n                              </Query>\',\n                  CAMLViewFields: \'<ViewFields> \\\n                                      <FieldRef Name="Month" /> \\\n                                      <FieldRef Name="Year" /> \\\n                                      <FieldRef Name="CMDIED" /> \\\n                                      <FieldRef Name="IRIED" /> \\\n                                      <FieldRef Name="CellIED" /> \\\n                                      <FieldRef Name="VBIED" /> \\\n                                      <FieldRef Name="SVBIED" /> \\\n                                   </ViewFields>\',\n                  mapping: {\n                     ows_Month: { mappedName: "Month", objectType: "Choice" },\n                     ows_Year: { mappedName: "Year", objectType: "Number" },\n                     ows_CMDIED: { mappedName: "CMD IED", objectType: "Number" },\n                     ows_IRIED: { mappedName: "IR IED", objectType: "Number" },\n                     ows_CellIED: { mappedName: "Cell IED", objectType: "Number" },\n                     ows_VBIED: { mappedName: "VBIED", objectType: "Number" },\n                     ows_SVBIED: { mappedName: "SVBIED", objectType: "Number" }\n                  }\n               })\n               .then(function() {\n                  def[0].resolve(this.data);\n               }, function() {\n                  def[0].resolve(\'\');\n               });\n               \n               $q.all(promises) \n                  .then(function(results){\n                     var chartData = [];\n\n                     angular.forEach(results.demoData, function(record, idx)\n                     {\n                        var recKeys = Object.keys(record);\n                        var monthYear = record.Month + \' \' + record.Year;\n                        chartData.push(\n                           {\n                              title: monthYear,\n                              data: \n                              [\n                                 { title: recKeys[4], number: record[recKeys[4]] }, //CMD IED\n                                 { title: recKeys[3], number: record[recKeys[3]] }, //IR IED\n                                 { title: recKeys[2], number: record[recKeys[2]] }, //Cell IED\n                                 { title: recKeys[1], number: record[recKeys[1]] }, //VBIED\n                                 { title: recKeys[0], number: record[recKeys[0]] }  //SVBIED\n                              ]\n                           }\n                        );\n                     });\n\n                     //add chartData to the defer\n                     defer.resolve({ data: chartData });\n                  });\n               //return the promise which will return chartData as results\n               return defer.promise;\n            } //end getDemoData\n         }//end return object\n      }])//end demo factory\n\n      .controller(\'dashControl\', [\'$scope\', \'$timeout\', \'DemoApp\', function($scope, $timeout, DemoApp)\n      {         \n         DemoApp.getDemoData().then(function(results){\n            $scope.demoChartData = results.data;\n         });\n         \n         //chartOptions for the demo chart\n         $scope.demoChartOptions = {\n            chart: {\n               width: 700,\n            }\n         }\n      }]);\n   }()\n);'
      };
      
		self.getDocs = function(docType){
			var deferred = $q.defer();
			
			//Return object
			var docObj = {};
			
			//assign the corresponding object to docObj
			switch(docType){
            //template case
            case 'minervaTemplate':
               docObj = minervaTemplate;
               break;
            //directives cases
			   case 'mvHeader':
			      docObj = mvHeader;
			      break;
			   case 'mvBody':
			      docObj = mvBody;
			      break;
			   case 'mvRow':
			      docObj = mvRow;
			      break;
			   case 'mvGroup':
			      docObj = mvGroup;
			      break;
			   case 'mvIdBox':
			      docObj = mvIdBox;
			      break;
			   case 'mvAnyNum':
			      docObj = mvAnyNum;
			      break;
			   case 'mvTable':
			      docObj = mvTable;
			      break;
			   case 'mvTableList':
			      docObj = mvTableList;
			      break;
			   case 'mvChart':
			      docObj = mvChart;
			      break;
			   case 'mvFooter':
			      docObj = mvFooter;
			      break
            //mvChart attribute cases
            case 'chart':
			      docObj = chart;
			      break;
            case 'legend':
			      docObj = legend;
			      break;
            case 'tooltip':
			      docObj = tooltip;
			      break;
            case 'xAxis':
			      docObj = xAxis;
			      break;
            case 'yAxis':
			      docObj = yAxis;
			      break;
            case 'types':
			      docObj = types;
			      break;
            //chart attribute cases
            case 'chartHeight':
			      docObj = chartHeight;
			      break;
            case 'chartWidth':
			      docObj = chartWidth;
			      break;
            case 'chartMargin':
			      docObj = chartMargin;
			      break;
            case 'chartColors':
			      docObj = chartColors;
			      break;
            case 'chartBackgroundColor':
			      docObj = chartBackgroundColor;
			      break;
            case 'chartSort':
			      docObj = chartSort;
			      break;
            case 'chartType':
			      docObj = chartType;
			      break;
            //legend attribute cases
            case 'legendEnabled':
			      docObj = legendEnabled;
			      break;
            case 'legendColor':
			      docObj = legendColor;
			      break;
            case 'legendTitle':
			      docObj = legendTitle;
			      break;
            case 'legendPosition':
			      docObj = legendPosition;
			      break;
            //tooltip attribute cases
            case 'tooltipColor':
			      docObj = tooltipColor;
			      break;
            case 'tooltipFormat':
			      docObj = tooltipFormat;
			      break;
            case 'tooltipSuffix':
			      docObj = tooltipSuffix;
			      break;
            case 'tooltipPrefix':
			      docObj = tooltipPrefix;
			      break;
            //xAxis attribute cases
            case 'xAxisTitle':
			      docObj = xAxisTitle;
			      break;
            case 'xAxisLabels':
			      docObj = xAxisLabels;
			      break;
            case 'xAxisGridlines':
			      docObj = xAxisGridlines;
			      break;
            case 'xAxisSpacing':
			      docObj = xAxisSpacing;
			      break;
            case 'xAxisTicks':
			      docObj = xAxisTicks;
			      break;
            case 'xAxisTickSize':
			      docObj = xAxisTickSize;
			      break;
            case 'xAxisTickPadding':
			      docObj = xAxisTickPadding;
			      break;
            //yAxis attribute cases
            case 'yAxisTitle':
			      docObj = yAxisTitle;
			      break;
            case 'yAxisLabels':
			      docObj = yAxisLabels;
			      break;
            case 'yAxisGridlines':
			      docObj = yAxisGridlines;
			      break;
            case 'yAxisSpacing':
			      docObj = yAxisSpacing;
			      break;
            case 'yAxisTicks':
			      docObj = yAxisTicks;
			      break;
            case 'yAxisTickSize':
			      docObj = yAxisTickSize;
			      break;
            case 'yAxisTickPadding':
			      docObj = yAxisTickPadding;
			      break;
            //types attribute cases
            case 'typesBar':
			      docObj = typesBar;
			      break;
            case 'typesLine':
			      docObj = typesLine;
			      break;
            case 'typesPie':
			      docObj = typesPie;
			      break;
            case 'typesBubble':
			      docObj = typesBubble;
			      break;
            case 'typesMap':
			      docObj = typesMap;
			      break;
			   case 'typesSatellite':
			      docObj = typesSatellite;
			      break;
            case 'typesScatter':
			      docObj = typesScatter;
			      break;
			   case 'processImage':
               docObj = processImage;
               break;
            case 'stepOne':
               docObj = stepOne;
               break;
            case 'stepTwo':
               docObj = stepTwo;
               break;
            case 'stepThree':
               docObj = stepThree;
               break;
            case 'stepFour':
               docObj = stepFour;
               break;
            case 'stepFourB':
               docObj = stepFourB;
               break;
            case 'stepFive':
               docObj = stepFive;
               break;
            default:
               //default to minervaTemplate
               docObj = minervaTemplate;
			}
			
		   //Resolve and return the promise	
			deferred.resolve(docObj);
			return deferred.promise;
		};

		return self;
	}])
	
	.factory('subDemo', ['$q', function($q){
		var self = this;
		
		//put information about all of the chart options here. make sure to include them in the switch statement in self.getSub below
		var chart = {
         title: 'chart',
		   attributes: [
		      { name: 'height', state: 'chartHeight' },
		      { name: 'width', state: 'chartWidth' },
		      { name: 'margin', state: 'chartMargin' },
		      { name: 'colors', state: 'chartColors' },
		      { name: 'backgroundColor', state: 'chartBackgroundColor' },
		      { name: 'sort', state: 'chartSort' },
		      { name: 'type', state: 'chartType' }
		   ]   
		};
		
		var legend = {
         title: 'legend',
		   attributes: [
		      { name: 'enabled', state: 'legendEnabled' },
		      { name: 'color', state: 'legendColor' },
		      { name: 'title', state: 'legendTitle' },
		      { name: 'position', state: 'legendPosition' }
		   ]   
		};

		var tooltip = {
         title: 'tooltip',
		   attributes: [
		      { name: 'color', state: 'tooltipColor' },
		      { name: 'format', state: 'tooltipFormat' },
		      { name: 'prefix', state: 'tooltipPrefix' },
		      { name: 'suffix', state: 'tooltipSuffix' }
		   ]   
		};

		var xAxis = {
         title: 'xAxis',
		   attributes: [
		      { name: 'title', state: 'xAxisTitle' },
		      { name: 'labels', state: 'xAxisLabels' },
		      { name: 'gridlines', state: 'xAxisGridlines' },
		      { name: 'spacing', state: 'xAxisSpacing' },
		      { name: 'ticks', state: 'xAxisTicks' },
		      { name: 'tickSize', state: 'xAxisTickSize' },
		      { name: 'tickPadding', state: 'xAxisTickPadding' }
		   ]   
		};

		var yAxis = {
         title: 'yAxis',
		   attributes: [
		      { name: 'title', state: 'yAxisTitle' },
		      { name: 'labels', state: 'yAxisLabels' },
		      { name: 'gridlines', state: 'yAxisGridlines' },
		      //{ name: 'spacing', state: 'yAxisSpacing' },
		      { name: 'ticks', state: 'yAxisTicks' },
		      { name: 'tickSize', state: 'yAxisTickSize' },
		      { name: 'tickPadding', state: 'yAxisTickPadding' }
		   ]   
		};

		var types = {
         title: 'types',
		   attributes: [
		      { name: 'bar', state: 'typesBar' },
		      { name: 'line', state: 'typesLine' },
            { name: 'pie', state: 'typesPie' },
		      { name: 'bubble', state: 'typesBubble' },
		      { name: 'map', state: 'typesMap' },
            { name: 'map - satellite', state: 'typesSatellite' },
            { name: 'scatter', state: 'typesScatter' }
		   ]   
		};
				
		self.getSub = function(subType){
			var deferred = $q.defer();
			
			//Return object
			var subObj = {};
			
			//assign the corresponding object to docObj
			switch(subType){
			   case 'chart':
			      subObj = chart;
			      break;
			   case 'legend':
			      subObj = legend;
			      break;
			   case 'tooltip':
			      subObj = tooltip;
			      break;
			   case 'xAxis':
			      subObj = xAxis;
			      break;
			   case 'yAxis':
			      subObj = yAxis;
			      break;
			   case 'types':
			      subObj = types;
			      break;
            default:
               //default to chart
               subObj = chart;
			}
			
		   //Resolve and return the promise	
			deferred.resolve(subObj);
			return deferred.promise;
		};

		return self;
	}]);

	
}()); //End File