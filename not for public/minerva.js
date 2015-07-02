/*
   version 150102.1133
*/
(function () {

var mvConfig = function()
{
   //------      Section 1: Internal variables      ------//
         
   //The DEFAULT mode (dev or prod) of the URL 
   var defaultPathConfig = {
      basePath: "../../minerva",
      mode: "dev"
   };
   
   //The DEFAULT full path to the minerva templates folder
   var fullPath = "";
   
   /*------      Section 2: Configuration Methods   ------// 
         Methods set on the "this" object will be exposed
         to be configured by the app.config function
   */
   
   this.setPath = function(userPathConfig){
      var pathConfig = {};
      //Override the default config with any user defined config
      angular.extend(pathConfig, defaultPathConfig, userPathConfig)
      //construct new path to point to correct minerva on the server
      fullPath = pathConfig.basePath + "/" + pathConfig.mode + "/";  
   };  
         
   /*------      Section 3: Service Definition      ------// 
         Defines a simple service object that will be
         passed to the minerva directive exposing the
         path to the minerva templates.
   */
   var service = {
      templatesPath: function(){
         return fullPath + 'templates/';
      },
      mapsPath: function(){
         return fullPath + 'maps/';
      }
   }
   
   //Return the service
   this.$get = function(){
      return service;
   };
}
/*
   Title: Minerva Header
   Description: Defines a generic header for the Minerva body container
   Parameters: 
      mv-Title: The title of the header
*/
var mvHeader = function()
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      scope: {
         mvTitle:    '@'
      },
      template:      templateHeader
   };
};

/*
   Title: Minerva Body
   Description: Defines the body of the grid container
   Parameters:
      mv-Cols: The number of columns needed in the body grid 
*/
var mvBody = function()
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      scope: {
         mvCols:     '@'
      },
      template:      templateBody
   };
};

/*
   Title: Minerva Footer
   Description: Defines a container for a footer to the body
   Parameters: N/A
*/
var mvFooter = function()
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      template:      templateFooter
   };
};

/*
   Title: Minerva Row
   Description: Defines a container for a row of content
   Parameters: N/A
*/
var mvRow = function()
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      template:      templateRow
   };
};

/*
   Title: Minerva Group
   Description: Defines a container for grouping grid element. This is mostly
               used to group elements on the same row. It can also be used to
               define empty sections of the grid as place holders.
   Parameters:
          mv-Size: The size of the group with height and width dimensions as a string
          mv-Style: Any custom style for the table
*/
var mvGroup = function()
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      scope: {
         mvSize:     '@',
         mvStyle:    '@'
      },
      template:      templateGroup
   };
};

/*
   Title: Minerva Any Num
   Description: Define a dynamic table displaying a series of numbers
   Parameters:
         mv-Data: Data needed for the table
         mv-Id: The ID of the inner container
         mv-ID-Head: The ID of the container header
         mv-Title: The title of the container
         mv-Size: The size of the container passed as a string representing the height x width. Ex. "1x3"
         mv-Style: Any custom style for the table
*/
var mvAnyNum = function(errMsg) 
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      scope: {
         mvData:     '=',
         mvId:       '@',
         mvIdHead:   '@',
         mvTitle:    '@',
         mvSize:     '@',
         mvStyle:    '@'
      },
      template:      '<div class="widget g-{{mvSize}}" id="{{mvId}}">' +
                        '<div class="w-head lightbox-head">{{mvTitle}}</div>' +
                        '<div class="w-body lightbox-body w-mediumtext"> ' +
                           '<div class="w-any-num" ng-style="{{mvStyle}}"> ' +
                              '<table> ' +
                                 '<tr> ' +
                                    '<th ng-repeat="stat in mvData.data" class="{{stat.titleColor}}"> ' +
                                       '{{stat.title}} ' +
                                    '</th> ' +
                                 '</tr> ' +
                                 '<tr> ' +
                                    '<td ng-repeat="stat in mvData.data" class="{{stat.numberColor}}"> ' +
                                       '{{stat.number}} ' +
                                    '</td> ' +
                                 '</tr> ' +
                              '</table> ' +
                           '</div> ' +
                           '<ng-transclude></ng-transclude> ' +
                           '<div class="w-nodata-anynum" ng-show="mvData == null">' + errMsg + '</div> ' +
                        '</div> ' +
                        '<div class="w-any-num-title">{{mvData.title}}</div> ' +
                     '</div>'
   };
};

/*
   Title: Minerva Any Num Link
   Description: Define a dynamic table displaying a series of numbers
   Parameters:
         mv-Data: Data needed for the table
         mv-Id: The ID of the inner container
         mv-ID-Head: The ID of the container header
         mv-Title: The title of the container
         mv-Size: The size of the container passed as a string representing the height x width. Ex. "1x3"
         mv-Style: Any custom style for the table
         mv-Modal: $modal variable defined in the $scope ($scope.modal = $modal;)
*/
var mvAnyNumLink =  function(errMsg)
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      scope: {
         mvData:     '=',
         mvId:       '@',
         mvIdHead:   '@',
         mvTitle:    '@',
         mvSize:     '@',
         mvStyle:    '@',
         mvModal:    '='
      },
      template:      '<div class="widget g-{{mvSize}}" id="{{mvId}}"> ' +
                     '   <div class="w-head lightbox-head">{{mvTitle}}</div> ' +
                     '   <div class="w-body lightbox-body w-mediumtext"> ' +
                     '      <div class="w-any-num" ng-style="{{mvStyle}}"> ' +
                     '         <table> ' +
                     '            <tr> ' +
                     '               <th ng-repeat="stat in mvData.data" class="{{stat.titleColor}}"> ' +
                     '                  {{stat.title}} ' +
                     '               </th> ' +
                     '            </tr> ' +
                     '            <tr> ' +
                     '               <td ng-repeat="stat in mvData.data" class="{{stat.numberColor}}"> ' +
                     '                  <a ng-click="openModal(stat, mvModal)" style="cursor: pointer;">{{stat.number}}</a> ' +
                     '               </td> ' +
                     '            </tr> ' +
                     '         </table> ' +
                     '      </div> ' +
                     '      <ng-transclude></ng-transclude> ' +
                     '      <div class="w-nodata-anynum" ng-show="mvData == null">' + errMsg + '</div> ' +
                     '   </div> ' +
                     '   <div class="w-any-num-title">{{mvData.title}}</div> ' +
                     '</div>',
      link: function(scope, elem, attrs) {
         scope.openModal = function(d, modal) {
            var modalInstance = modal.open({
               template: '<div class="modal-body"> ' +
                         '     <div class="modalContent"> ' +
                         '        <div class="modalTitle">' + d.title + '</div> ' +
                         '        <div class="modalInfo"><pre>' + d.content + '</pre></div> ' +
                         '     </div> ' +
                         ' </div>',
               windowClass: 'middleWindow'
            });
         };
      }
   };
};

/*
   Title: Minerva Any Num Link Vertical
   Description: Define a dynamic table displaying a series of numbers
   Parameters:
         mv-Data: Data needed for the table
         mv-Id: The ID of the inner container
         mv-ID-Head: The ID of the container header
         mv-Title: The title of the container
         mv-Size: The size of the container passed as a string representing the height x width. Ex. "1x3"
         mv-Style: Any custom style for the table
         mv-Modal: $modal variable defined in the $scope ($scope.modal = $modal;)
*/
var mvAnyNumLinkVertical =  function(errMsg)
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      scope: {
         mvData:     '=',
         mvId:       '@',
         mvIdHead:   '@',
         mvTitle:    '@',
         mvSize:     '@',
         mvStyle:    '@',
         mvModal:    '='
      },
      template:      '<div class="widget g-{{mvSize}}" id="{{mvId}}"> ' +
                     '   <div class="w-head lightbox-head">{{mvTitle}}</div> ' +
                     '   <div class="w-body lightbox-body w-mediumtext"> ' +
                     '      <div class="w-any-num" ng-style="{{mvStyle}}"> ' +
                     '         <table> ' +
                     '            <tr ng-repeat="stat in mvData.data"> ' +
                     '               <td> ' +
                     '                  <table style="font-size:1em;"> ' +
                     '                     <tr> ' +
                     '                        <th class="{{stat.titleColor}}"> ' +
                     '                           {{stat.title}} ' +
                     '                        </th> ' +
                     '                     </tr> ' +
                     '                     <tr> ' +
                     '                        <td class="{{stat.numberColor}}"> ' +
                     '                           <a ng-click="openModal(stat, mvModal)" style="cursor: pointer;">{{stat.number}}</a> ' +
                     '                        </td> ' +
                     '                     </tr> ' +
                     '                  </table> ' +
                     '               </td> ' +
                     '            </tr> ' +
                     '         </table> ' +
                     '      </div> ' +
                     '      <ng-transclude></ng-transclude> ' +
                     '      <div class="w-nodata-anynum" ng-show="mvData == null">' + errMsg + '</div> ' +
                     '   </div> ' +
                     '   <div class="w-any-num-title">{{mvData.title}}</div> ' +
                     '</div>',
      link: function(scope, elem, attrs) {
         scope.openModal = function(d, modal) {
            var modalInstance = modal.open({
               template: '<div class="modal-body"> ' +
                         '     <div class="modalContent"> ' +
                         '        <div class="modalTitle">' + d.title + '</div> ' +
                         '        <div class="modalInfo"><pre>' + d.content + '</pre></div> ' +
                         '     </div> ' +
                         ' </div>',
               windowClass: 'middleWindow'
            });
         };
      }
   };
};

/*
   Title: Minerva Any Num Hover
   Description: Define a dynamic table displaying a series of numbers
   Parameters:
         mv-Data: Data needed for the table
         mv-Id: The ID of the inner container
         mv-ID-Head: The ID of the container header
         mv-Title: The title of the container
         mv-Size: The size of the container passed as a string representing the height x width. Ex. "1x3"
         mv-Style: Any custom style for the table
         mv-Popover: defines the popover settings
*/
var mvAnyNumHover =  function(errMsg)
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      scope: {
         mvData:     '=',
         mvId:       '@',
         mvIdHead:   '@',
         mvTitle:    '@',
         mvSize:     '@',
         mvStyle:    '@',
         mvPopover:  '='
      },
      template:      '<div class="widget g-{{mvSize}}" id="{{mvId}}"> ' +
                     '   <div class="w-head lightbox-head">{{mvTitle}}</div> ' +
                     '   <div class="w-body lightbox-body w-mediumtext"> ' +
                     '      <div class="w-any-num" ng-style="{{mvStyle}}"> ' +
                     '         <table> ' +
                     '            <tr> ' +
                     '               <th ng-repeat="stat in mvData.data" class="{{stat.titleColor}}"> ' +
                     '                  {{stat.title}} ' +
                     '               </th> ' +
                     '            </tr> ' +
                     '            <tr> ' +
                     '               <td ng-repeat="stat in mvData.data" class="{{stat.numberColor}}"> ' +
                     '                  <span ng-hide="stat.link" popover="{{stat.content}}" popover-trigger="mouseenter" popover-placement="{{mvPopover.placement}}">{{stat.number}}</span> ' +
                     '                  <a ng-show="stat.link" href="{{stat.link}}" style="cursor: pointer;" popover="{{stat.content}}" popover-trigger="mouseenter" popover-placement="{{mvPopover.placement}}">{{stat.number}}</a> ' +
                     '               </td> ' +
                     '            </tr> ' +
                     '         </table> ' +
                     '      </div> ' +
                     '      <ng-transclude></ng-transclude> ' +
                     '      <div class="w-nodata-anynum" ng-show="mvData == null">' + errMsg + '</div> ' +
                     '   </div> ' +
                     '   <div class="w-any-num-title">{{mvData.title}}</div> ' +
                     '</div>'
   };
};

/*
   Title: Minerva Any Num Hover
   Description: Define a dynamic table displaying a series of numbers
   Parameters:
         mv-Data: Data needed for the table
         mv-Id: The ID of the inner container
         mv-ID-Head: The ID of the container header
         mv-Title: The title of the container
         mv-Size: The size of the container passed as a string representing the height x width. Ex. "1x3"
         mv-Style: Any custom style for the table
         mv-Popover: defines the popover settings
*/
var mvAnyNumHoverVertical =  function(errMsg)
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      scope: {
         mvData:     '=',
         mvId:       '@',
         mvIdHead:   '@',
         mvTitle:    '@',
         mvSize:     '@',
         mvStyle:    '@',
         mvPopover:  '='
      },
      template:      '<div class="widget g-{{mvSize}}" id="{{mvId}}"> ' +
                     '   <div class="w-head lightbox-head">{{mvTitle}}</div> ' +
                     '   <div class="w-body lightbox-body w-mediumtext"> ' +
                     '      <div class="w-any-num" ng-style="{{mvStyle}}"> ' +
                     '         <table> ' +
                     '            <tr ng-repeat="stat in mvData.data"> ' +
                     '               <td> ' +
                     '                  <table style="font-size:1em;"> ' +
                     '                     <tr> ' +
                     '                        <th class="{{stat.titleColor}}"> ' +
                     '                           {{stat.title}} ' +
                     '                        </th> ' +
                     '                     </tr> ' +
                     '                     <tr> ' +
                     '                        <td class="{{stat.numberColor}}"> ' +
                     '                           <span ng-hide="stat.link" popover="{{stat.content}}" popover-trigger="mouseenter" popover-placement="{{mvPopover.placement}}">{{stat.number}}</span> ' +
                     '                           <a ng-show="stat.link" href="{{stat.link}}" style="cursor: pointer;" popover="{{stat.content}}" popover-trigger="mouseenter" popover-placement="{{mvPopover.placement}}">{{stat.number}}</a> ' +
                     '                        </td> ' +
                     '                     </tr> ' +
                     '                  </table> ' +
                     '               </td> ' +
                     '            </tr> ' +
                     '         </table> ' +
                     '      </div> ' +
                     '      <ng-transclude></ng-transclude> ' +
                     '      <div class="w-nodata-anynum" ng-show="mvData == null">' + errMsg + '</div> ' +
                     '   </div> ' +
                     '   <div class="w-any-num-title">{{mvData.title}}</div> ' +
                     '</div>'
   };
};

/*
   Title: Minerva ID Box
   Description: Defines an empty grid container of a specified size
   Parameters: 
         mv-Id: The ID of the outer container
         mv-Body-Id: The ID of the inner container
         mv-Title: The title of the container
         mv-Size: The size of the container passed as a string representing the height x width. Ex. "3x3"
*/
var mvIdBox = function()
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      scope: {
         mvId:       '@',
         mvBodyId:   '@',
         mvTitle:    '@',
         mvSize:     '@',
         mvClick:    '&'
      },
      template:      templateIdBox
   };
};

/*
   Title: Minerva Table
   Description: Defines a generic table
   Parameters: 
         mv-Data: Data needed for the table
         mv-Id: A unique is given for the table widget
         mv-Title: The title of the table container
         mv-Size: The size of the container passed as a string representing the height x width. Ex. "3x3"
         mv-Style: Any custom style for the table
*/
var mvTable = function()
{
   return {
      restrict:         'E',
      replace:          true,
      transclude:       true, 
      scope: {
         mvData:        '=',
         mvId:          '@',
         mvTitle:       '@',
         mvSize:        '@',
         mvStyle:       '@',
         mvShowFilter:  '@'
      },
      template:         templateTable
   };
};

/*
   Title: Minerva Table with Links
   Description: Defines a generic table
   Parameters: 
         mv-Data: Data needed for the table
         mv-Id: A unique is given for the table widget
         mv-Title: The title of the table container
         mv-Size: The size of the container passed as a string representing the height x width. Ex. "3x3"
         mv-Style: Any custom style for the table
*/
var mvTableLink = function()
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      scope: {
         mvData:     '=',
         mvId:       '@',
         mvTitle:    '@',
         mvSize:     '@',
         mvStyle:    '@'
      },
      template:      templateTableLink
   };
};

/*
   Title: Minerva Table with Click function
   Description: Defines a generic table
   Parameters: 
         mv-Data: Data needed for the table
         mv-Id: A unique is given for the table widget
         mv-Title: The title of the table container
         mv-Size: The size of the container passed as a string representing the height x width. Ex. "3x3"
         mv-Style: Any custom style for the table
         mv-Click: Function that runs on click
*/
var mvTableFunction = function()
{
   return {
      restrict:         'E',
      replace:          true,
      transclude:       true, 
      scope: {
         mvData:        '=',
         mvId:          '@',
         mvTitle:       '@',
         mvSize:        '@',
         mvStyle:       '@',
         mvShowFilter:  '@',
         mvClickItem:   '&'
      },
      template:         templateTableFunction,
      link: function(scope, elem, attrs) {
         scope.mvClick = function(item) {
            scope.mvClickItem({ item: item });
         };
      }
   };
};

/*
   Title: Minerva Table with Select filter
   Description: Defines a generic table
   Parameters: 
         mv-Data: Data needed for the table
         mv-Id: A unique is given for the table widget
         mv-Title: The title of the table container
         mv-Size: The size of the container passed as a string representing the height x width. Ex. "3x3"
         mv-Style: Any custom style for the table
*/
var mvTableSelect = function()
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      scope: {
         mvData:     '=',
         mvId:       '@',
         mvTitle:    '@',
         mvSize:     '@',
         mvStyle:    '@',
         mvFilter:   '=',
         mvFiltered: '='
      },
      template:      templateTableSelect
   };
};

/*
   Title: Minerva Table with Select filter and function on click
   Description: Defines a generic table
   Parameters: 
         mv-Data: Data needed for the table
         mv-Id: A unique is given for the table widget
         mv-Title: The title of the table container
         mv-Size: The size of the container passed as a string representing the height x width. Ex. "3x3"
         mv-Style: Any custom style for the table
*/
var mvTableSelectFunction = function()
{
   return {
      restrict:      'E',
      transclude:    true,
      replace:       true,
      scope: {
         mvData:     '=',
         mvId:       '@',
         mvTitle:    '@',
         mvSize:     '@',
         mvStyle:    '@',
         mvFilter:   '=',
         mvFiltered: '=',
         mvClick:    '&' 
      },
      template:      templateTableSelectFunction
   };
};

/*
   Title: Minerva Table List 
   Description: Defines container which contain a series of small tables
   Parameters:
         mv-Data: Data needed for the table(s)
         mv-Id: A unique is given for the table widget
         mv-Title: The title of the table container
         mv-Size: The size of the container passed as a string representing the height x width. Ex. "3x3"
         mv-Style: Any custom style for the table 
*/
var mvTableList = function()
{
   return {
      restrict:      'E',
      replace:       true,
      scope: {
         mvData:     '=',
         mvId:       '@',
         mvTitle:    '@',
         mvSize:     '@',
         mvStyle:    '@'
      },
      template:      templateTableList
   };
};

/*
   Title: mvChart
   Description: create a variety of charts using D3.js
   Parameters: mvData - dataset for the chart to read
               mvOptions - chart options to pass in, you only need to pass in values to override defaults
               mvBubbleAction - function that occurs when a bubble chart bubble is clicked
*/
var mvChart = function(minerva, errMsg)
{  
   return { 
      restrict:            'E', 
      scope: { 
         mvData:           '=', 
         mvOptions:        '=' 
      },
      template: '<div class="w-nodata" ng-show="mvData == null">' + errMsg + '</div>',
      link: function(scope, element, attrs, ctrl, transclude)
      {
         //set defaults
         var defaultOptions = {
            chart: {
               height: 0,
               width: 0,
               margin: {
                  top: 40, 
                  right: -20, 
                  bottom: 60, 
                  left: 40
               },
               colors: ["#427A82", "#51BF96", "#FBD163", "#F29A3F", "#DB5957"],
               backgroundColor: '#FFFFFF',
               sort: '',
               inverse: false,
               type: 'bar'
            },
            legend: {
               enabled: false,
               color: '#A6A6A6',
               title: '',
               position: {
                  x: 0,
                  y: 0
               }
            },
            tooltip: {
               color: '#888888',
               format: '',
               size: '1em',
               suffix: '',
               prefix: '',
               undefinedAsZero: false
            },
            xAxis: {
               title: {
                  color: '#A6A6A6',
                  size: '1em',
                  text: 'X Axis'
               },
               labels: {
                  format: '',
                  color: '#A6A6A6',
                  links: false,
                  linkTarget: ''
               },
               gridlines: false,
               orient: 'bottom',
               spacing: null,
               ticks: null,
               tickSize: 6,
               tickPadding: 3
            },
            yAxis: {
               title: {
                  color: '#A6A6A6',
                  size: '1em',
                  text: 'Y Axis'
               },
               labels: {
                  format: '0',
                  color: '#A6A6A6',
                  enabled: false
               },
               gridlines: false,
               orient: 'left',
               ticks: null,
               tickSize: 6,
               tickPadding: 3,
               min: 0
            },
            types: {
               bar: {
                  stacked: false,
                  grouped: false,
                  stacking: 'normal', //'normal' or 'percent'
                  labels: {
                     enabled: false,
                     prefix: 'Total: ',
                     suffix: '',
                     color: '#A6A6A6'
                  },
                  xdomain: null,
                  heirarchy: false,
                  draggable: false
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
                  evenslice: false,
                  scale: 100,
                  innerRadius: 0,
                  labelRadius: 0
               },
               bubble: {
                  scale: 60,
                  control: {
                     enabled: true,
                     x: 0,
                     y: 0,
                     color: '#A6A6A6',
                     openText: '[+]',
                     openText: '[-]'
                  }
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
         
         //chart variables
         var svg = null;
         var o = null;
         var margin = null;
         var xOrient = null;
         var yOrient = null;
         var height = null;
         var width = null;
         var x = null;
         var y = null;
         var color = null;
         var xAxis = null;
         var yAxis = null;
         var active = d3.select(null);
         var tip = null;
         var data = [0];
         var duration = 750;
         var delay = 25;
         var barHeight = 20;
         
         //map chart variables
         var m0, o0; //variables for mouse up and down rotation
         var projection = null;
         var path = null;
         
         //bubble chart constants and variable force
         var layoutGravity = -0.01,
             damper = 0.1,
             force,
             bubbleView = 'all'; //bubble chart state
             
         function updateChart()
         {
            //check if 
            if (scope.mvData != undefined)
            {
               data = scope.mvData;
            }
            else
            {
               return;
            }
            
            o = extendDeep(defaultOptions, scope.mvOptions);
            
            //set the attributes of the chart
         
            //margin and height/width         
            margin = o.chart.margin;
            
            //if user doesn't enter a height and width, calculate one based off the container
            if (o.chart.height == 0)
            {
               height = parseInt(d3.select(element[0].parentElement.parentElement.parentElement).style('height'), 10) - margin.top - margin.bottom;
            }
            else
            {
               height = o.chart.height - margin.top - margin.bottom;
            }
            
            if (o.chart.width == 0)
            {
               width = parseInt(d3.select(element[0].parentElement.parentElement.parentElement).style('width'), 10) - margin.left - margin.right;
            } 
            else
            {
               width = o.chart.width - margin.left - margin.right;
            }

            //chart orientation
            xOrient = o.xAxis.orient;
            yOrient = o.yAxis.orient;
            /*if (o.chart.inverse == true)
            {
               //flip chart orientation
            }*/
            
            //scale
            var xPadding = 1; //padding between x values
            var xSpacing = 0; //padding between y axis and start of x
            
            var yPadding = 1; //padding between y values
            var ySpacing = 0; //padding between x axis and start of y
            
            switch (o.chart.type)
            {
               case 'bar':
                  xPadding = .1; //axis label centered on bar
                  if (o.xAxis.spacing == null)
                  {
                     xSpacing = 1;
                  }
                  break;
               case 'line':
                  xPadding = 1; //axis label aligned with value
                  if (o.xAxis.spacing == null)
                  {
                     xSpacing = 1;
                  }
                  break;
            }
            //if spacing for x axis is defined
            if (o.xAxis.spacing != null)
            {
               xSpacing = o.xAxis.spacing;
            }
            
            if (o.chart.type != 'hbar')
            {
               x = d3.scale.ordinal()
                  .rangeRoundBands([0, width], xPadding, xSpacing);
               
               y = d3.scale.linear()
                  .range([height, 0]);
            }
            else
            {
               x = d3.scale.linear()
                  .range([0, width]);
               
               y = d3.scale.ordinal()
                  .rangeRoundBands([height, 0], yPadding, ySpacing);
            }
            
            //colors
            color = d3.scale.ordinal()
               .range(o.chart.colors);
            
            //x axis formatting
            xAxis = d3.svg.axis()
               .scale(x)
               .orient(xOrient)
               .ticks(o.yAxis.ticks)
               .tickSize([o.xAxis.tickSize])
               .tickPadding([o.xAxis.tickPadding]);
            if (o.xAxis.labels.format != '')
            {
               xAxis.tickFormat(d3.format(o.xAxis.labels.format));
            }            
            
            //y axis formatting
            yAxis = d3.svg.axis()
               .scale(y)
               .orient(yOrient)
               .ticks(o.yAxis.ticks)
               .tickSize([o.yAxis.tickSize])
               .tickPadding([o.yAxis.tickPadding]);
            if (o.yAxis.labels.format != '')
            {
               yAxis.tickFormat(d3.format(o.yAxis.labels.format));
            }
            
            //end setting chart attributes
            
            element.empty(); //make sure the element is empty so you don't duplicate
            
            svgMain = d3.select(element[0]).append('svg')
                        .attr('width', width + margin.left + margin.right)
                        .attr('height', height + margin.top + margin.bottom)
                        .attr('role', 'img')
                        .attr('aria-labelledby', 'title desc')
                        .style('background', o.chart.backgroundColor)
                        .style('fill', o.chart.backgroundColor); //for globe background

            svg = svgMain.append('g')
                     .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            
            //accessibility
            svgMain.append('svg:title')
               .attr('text', o.chart.type + ' chart');
            svgMain.append('svg:desc')
               .attr('text', o.chart.type + ' chart');           

            if (o.chart.type != 'map' && o.chart.type != 'hbar' && o.chart.type != 'treebar' && o.chart.type != 'dragbar') //don't create for maps
            {   
               if (o.chart.type != 'bar')
               {
                  //create map of keys
                  color.domain(d3.keys(data[0]).filter(function(key) { return key !== 'x'; }));
               }
               
               data.forEach(function(d) {
                  d.y = +d.y;
               });
            }
            
            if (o.chart.type == 'hbar')
            {
               data.forEach(function(d) {
                  d.x = +d.x;
               });
            }
            
            //tooltip format
            var tipformat = d3.format(o.tooltip.format);

            //tooltip
            tip = d3.tip()
               .attr('class', 'mvTip')
               .offset([-20, 0])
               .html(function(d) {
                  var title = d.x;
                  var tipData = tipformat(d.y);
                  
                  //tooltip for points
                  if (d.pointName != undefined)
                  {
                     return '<strong>' + d.pointName + '</strong>';
                  }
                  
                  //tooltip for charts
                  switch (o.chart.type)
                  {
                     case 'bar':
                        if (o.types.bar.stacked == true)
                        {
                           var tipData = tipformat(d.y1 - d.y0); //calculate difference between two y values
                        }
                        break;
                     case 'hbar':
                        title = d.label;
                        break;
                     case 'treebar':
                        title = d.name;
                        tipData = d.nochildren ? tipformat(d.value) : tipformat(d.number);
                        break;
                     case 'dragbar':
                        title = d.title;
                        tipData = d.time.end - d.time.start;
                        break;
                     case 'bubble':
                        title = d.id + '<br/>' + d.label;
                        tipData = tipformat(d.value);
                        break;
                     case 'pie':
                        title = d.data.x;
                        tipData = tipformat(d.data.y);
                        break;
                     case 'scatter':
                        title = d.z;
                        tipData = d.x + ', ' + d.y;
                        break;
                     case 'map': //TODO: fix names
                        switch (o.types.map.mapfile)
                        {
                           case 'afg':
                              title = d.properties.name;
                              tipData = tipformat(map.get(d.id));
                              if (map.get(d.id) == undefined) {
                                 if (o.tooltip.undefinedAsZero == false)
                                 {
                                    return '<strong>' + title + '</strong>';
                                 }
                                 else
                                 {
                                    tipData = tipformat(0);
                                 }
                              }
                              break;
                           case 'us-states':
                              title = idToName(d.id, 'states') || 'Name';
                              tipData = tipformat(map.get(d.id));
                              if (map.get(d.id) == undefined) {
                                 if (o.tooltip.undefinedAsZero == false)
                                 {
                                    return '<strong>' + title + '</strong>';
                                 }
                                 else
                                 {
                                    tipData = tipformat(0);
                                 }
                              }
                              break;
                           default:
                              title = idToName(d.id, 'countries') || 'Name';
                              tipData = tipformat(map.get(d.id));
                              if (map.get(d.id) == undefined) {
                                 if (o.tooltip.undefinedAsZero == false)
                                 {
                                    return '<strong>' + title + '</strong>';
                                 }
                                 else
                                 {
                                    tipData = tipformat(0);
                                 }
                              }
                              break;
                        }
                  }               
                  return '<div style="font-size:' + o.tooltip.size + '"><strong>' + title + ':</strong> <span style="color:' + o.tooltip.color + '">' + o.tooltip.prefix + tipData + o.tooltip.suffix + '</span></div>'; 
               });
            
            svg.call(tip);
            
            switch (o.chart.type)
            {
               case 'pie':
                  var radius = Math.min(width, height) / 2;
                  var labelr = radius + o.types.pie.labelRadius;
                  //define pie
                  var pie = d3.layout.pie()
                     .sort(null)
                     .value(function(d) { return d.y; });
                  
                  //define arc
                  if (o.types.pie.burst == false)
                  {
                     var arc = d3.svg.arc()
                        .outerRadius(radius - 10)
                        .innerRadius(o.types.pie.innerRadius); //increase inner radius to create donut chart
                  }
                  else //burst chart arc
                  {
                     var arc = d3.svg.arc()
                       .outerRadius(function(d) { 
                         return (radius - o.types.pie.innerRadius) * (d.data.y / o.types.pie.scale) + o.types.pie.innerRadius; 
                       })
                       .innerRadius(o.types.pie.innerRadius);
                  }
                  
                  //redo color domain for pie data
                  color.domain(d3.keys(data[0].data).filter(function(key) { return key !== 'x'; }));
                  

                  var g = svg.selectAll(".arc")
                     .data(pie(data))
                   .enter().append("g")
                     .attr("class", "arc")
                     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
                  
                  g.append("path")
                     .attr("d", arc)
                     .style("fill", function(d) { return color(d.data.x); }) //colors of pie slices
                     .style('cursor', 'pointer')
                     .on('click', function(d) { 
                        tip.hide();
                        scope.$emit('pieChart:click', d);
                     })
                     .on('mouseover', tip.show)
                     .on('mouseout', tip.hide);
   
                  if (o.types.pie.labels.enabled == true)
                  {
                     var labelText = function(d) { return d.data.x; };
                     if (o.types.pie.labels.percent == true)
                     {
                        labelText = function(d) { return Math.round((d.data.y / data.reduce(function(a, v){ return a + v.y; }, 0)) * 100) + '%'; };
                     }
                     g.append("text")
                        .attr("transform", function(d) {
                           var c = arc.centroid(d),
                              x = c[0],
                              y = c[1],
                              //pythagorean theorem for hypotenuse
                              h = Math.sqrt(x*x + y*y);
                           return "translate(" + (x/h * labelr) +  ',' + (y/h * labelr) +  ")"; 
                        })
                        .attr("dy", ".35em")
                        .style("text-anchor", function(d) {
                            //check if past the center
                            return (d.endAngle + d.startAngle)/2 > Math.PI ? "end" : "start";
                        })
                        .text(labelText)
                        .style('fill', o.types.pie.labels.color)
                        .style('font-weight', o.types.pie.labels.fontWeight)
                        .style('font-size', o.types.pie.labels.fontSize);
                  }
                  break;
                  
               case 'map':
                  var map = d3.map();
                  
                  var g = svg.append("g");
                  
                  var quantize = d3.scale.quantize()
                     .domain(o.types.map.quantizeScale)
                     .range(o.chart.colors);
                                 
                  if (data.choropleth != undefined)
                  {
                     data.choropleth.forEach(function(d) {
                        map.set(d.x, +d.y);
                     });
                  }
                  
                  //define the map file
                  var mapFile = '';
                  switch (o.types.map.mapfile)
                  {
                     case 'world':
                        mapFile = minerva.mapsPath() + 'world-110m.txt';
                        if (o.types.map.globe == true)
                        {
                           projection = d3.geo.orthographic()
                              .scale(width * 0.5) //size of map
                              .translate([width / 2, height / 2]) //move map to center
                              .clipAngle(90);
                        }
                        else //map projection
                        {
                           projection = d3.geo.ginzburg8()
                              .center([0, 20])
                              .scale(width / 1.4 / Math.PI) //size of map
                              .translate([width / 2, height / 2]); //move map to center
                        }
                        break;
                     case 'afg':
                        mapFile = minerva.mapsPath() + 'afg.txt';
                        projection = d3.geo.mercator()
                           .center([67.5, 34])
                           .scale((width * height) / 100) //size of map
                           .translate([width / 2, height / 2]); //move map to center
                        break;
                     default:
                        mapFile = minerva.mapsPath() + 'us.txt';
                        projection = d3.geo.albersUsa()
                           .scale(width * 1.5) //size of map
                           .translate([width / 2, height / 2]); //move map to center
                        break;
                  }
                  
                  //set world map to detailed
                  if (o.types.map.detailed == true && o.types.map.mapfile == 'world')
                  {
                     mapFile = minerva.mapsPath() + 'world-50m.txt';
                  }

                  if (o.types.map.satellite.enabled == true)
                  {
                     projection = clippedSatellite()
                        .distance(o.types.map.satellite.distance)
                        .scale(o.types.map.satellite.scale)
                        .rotate(o.types.map.satellite.rotate)
                        .center(o.types.map.satellite.center)
                        .tilt(o.types.map.satellite.tilt)
                        .clipExtent([[0, 0], [width, height]])
                        .precision(.1);
                  }
                                    
                  path = d3.geo.path()
                     .projection(projection);
                  
                  d3.json(mapFile, function(error, json)
                  {
                     var topoFeature = null;
                     var outlineFeature = null;
                     
                     if (o.types.map.simplify == true)
                     {
                        json = topojson.presimplify(json)
                     }
                     
                     //determine what part of the json object will be used for the shapes and outlines
                     switch (o.types.map.mapfile)
                     {
                        case 'afg':
                           topoFeature = json.objects.afghan;
                           outlineFeature = json.objects.afghan;
                           break;
                        case 'us-counties':
                           topoFeature = json.objects.counties;
                           outlineFeature = json.objects.states;
                           break;
                        case 'us-states':
                           topoFeature = json.objects.states;
                           outlineFeature = json.objects.states;
                           break;
                        case 'world':
                           topoFeature = json.objects.countries;
                           outlineFeature = json.objects.countries;
                           break;
                        default:
                           topoFeature = json.objects.states;
                           outlineFeature = json.objects.states;
                           break;
                     }
                     if (o.types.map.globe == false)
                     { 
                        g.append("g")
                           .attr("class", o.types.map.mapfile)
                         .selectAll("path")
                           .data(topojson.feature(json, topoFeature).features)
                         .enter().append("path")
                           .style('fill', function(d) { return quantize(map.get(d.id)); })
                           .attr("d", path)
                           .on('click', function(d) {
                              clickedzoom(d);
                              var type = '';
                              switch(o.types.map.mapfile)
                              {
                                 case 'us-counties':
                                    type = 'states';
                                    break;
                                 case 'us-states':
                                    type = 'states';
                                    break;
                                 case 'world':
                                    type = 'countries';
                                    break;
                              }
                              
                              d.name = idToName(d.id, type); //add the name to the data object
                              d.di = idToDi(d.id, type); //add the digraph to the data object
                              scope.$emit('mapChart:click', d);
                           })
                           .on('mouseover', tip.show)
                           .on('mouseout', tip.hide);
                        
                        g.append("path")
                           .datum(topojson.mesh(json, outlineFeature, function(a, b) { return a !== b; }))
                           .attr('class', 'mapborders')
                           .style('fill', 'none')
                           .attr("class", 'mapstroke')
                           .style('stroke-linejoin', 'round')
                           .attr("d", path);
                     }
                     else //globe specific code
                     {
                        var time = Date.now();
                        
                        d3.select(element[0])
                           .on("mousemove", mousemove)
                           .on("mouseup", mouseup);
                        
                        svg.on("mousedown", mousedown);
                        
                        var globe_shading = svg.append("defs").append("radialGradient")
                           .attr("id", "globe_shading")
                           .attr("cx", "55%")
                           .attr("cy", "45%");
                        globe_shading.append("stop")
                           .attr("offset","60%").attr("stop-color", "#fff")
                           .attr("stop-opacity","0")
                        globe_shading.append("stop")
                           .attr("offset","100%").attr("stop-color", "#7B8996")
                           .attr("stop-opacity","0.2")
                        
                        //display globe                
                        g.append("circle")
                           .attr("cx", width / 2).attr("cy", height / 2)
                           .attr("r", projection.scale());
                           
                        //display grid
                        if (o.types.map.grid == true)
                        {
                           var graticule = d3.geo.graticule();
                           
                           g.append("path")
                              .datum(graticule)
                              .attr("class", "graticule")
                              .attr("d", path);
                        }
                           
                        //display the countries
                        g.append('g')
                         .selectAll('path')
                           .data(topojson.feature(json, topoFeature).features)
                         .enter().append('path')
                           .attr('class', 'world')
                           .style('fill', function(d) { return quantize(map.get(d.id)); })                     
                           .attr('d', path)
                           .on('click', clickedzoom)
                           .on('mouseover', tip.show)
                           .on('mouseout', tip.hide);
                        
                        //display map shading                      
                        g.append("circle")
                           .attr("cx", width / 2).attr("cy", height / 2)
                           .attr("r", projection.scale())
                           .style("fill", "url(#globe_shading)");
                           
                        if (o.types.map.rotate == true)
                        {
                           d3.timer(function() {
                              var dt = Date.now() - time;
                              projection.rotate([10 + 0.003 * dt, 0]);
                              svg.selectAll("path").attr("d", path);
                           });
                        }
                     }
                     
                     //points on map
                     if (data.points != undefined && o.types.map.showPoints == true)
                     {
                        path.pointRadius(function(d) { return d.radius; });
                        
                        g.append('g')
                         .selectAll('path')
                           .data(data.points)
                         .enter().append('path')
                           .datum(function(d) {
                              return {type: 'Point', coordinates: [d.Lon, d.Lat], radius: d.Magnitude, color: d.Color, pointName: d.pointName, image: d.image};
                           })
                           .attr('fill', function(d) { return d.color })
                           .attr('class', 'point')
                           .attr('d', path)
                           .on('click', function(d) { scope.$parent.openModal(d) })
                           .on('mouseover', tip.show)
                           .on('mouseout', tip.hide);
                     }
                  });
                  break;
                  
               case 'bubble':
                  var center = {x: width / 2, y: height / 2};
                  
                  //get the unique key for each group and deduplicate them
                  var uniqueKeys = [];
                  var dedupulicator = {};
                  var sublabels = [];
                  data.forEach(function(d, i) {
                     //if it's a new key, add it, otherwise skip it
                     if (dedupulicator[d.x] == undefined)
                     {
                        dedupulicator[d.x] = '';
                        uniqueKeys.push(d.x);
                        sublabels[d.x] = d.sublabel
                     }
                  });
                  
                  var groupCenters = []; //center of each group
                  uniqueKeys.forEach(function(d, i) {
                     groupCenters[d] = {x: ((width / uniqueKeys.length + 1) * (i + 0.5)), y: height / 2};
                  });
                  
                  var groupsX = []; //label position for each group
                  uniqueKeys.forEach(function(d, i) {
                     groupsX[d] = ((width / uniqueKeys.length + 1) * (i + 0.5));
                     
                  });
                  
                  var nodes = [];
                  
                  var maxAmount = d3.max(data, function(d) { return parseInt(d.y, 10); } );
                  var radiusScale = d3.scale.pow().exponent(0.5).domain([0, maxAmount]).range([2, o.types.bubble.scale]);
                  
                  data.forEach(function(d) {
                     var node = {
                        id: d.x,
                        label: d.label,
                        radius: radiusScale(parseInt(d.y, 10)),
                        value: d.y,
                        data: d.data,
                        x: Math.random() * 900,
                        y: Math.random() * 800
                     };
                     nodes.push(node);
                  });
                  
                  nodes.sort(function(a, b) { return b.id - a.id; });
                  
                  //redo color for nodes
                  color.domain(uniqueKeys);
                  
                  var circles = svg.selectAll('circle')
                     .data(nodes, function(d) { return d.x; });
                     
                  circles.enter().append('circle')
                     .attr('r', 0)
                     .attr('fill', function(d) { return color(d.id); })
                     .attr('stroke-width', 1)
                     .attr('stroke', function(d) { return d3.rgb(color(d.id)).darker(); })
                     .attr('class', 'circle')
                     .attr('id', function(d) { return 'bubble_' + d.id; })
                     .on('click', function(d) { 
                        tip.hide();
                        scope.$emit('bubbleChart:click', d); 
                     })
                     .on('mouseover', tip.show)
                     .on('mouseout', tip.hide);
                     
                  circles.transition().duration(2000).attr('r', function(d) { return d.radius; });
                  
                  start(nodes);
                  displayStart(circles, groupCenters, center);
                  
                  if (o.types.bubble.control.enabled == true)
                  {
                        
                     svg.append('text')
                        .attr('x', o.types.bubble.control.x)
                        .attr('y', o.types.bubble.control.y)
                        .attr('dy', '.35em')
                        .attr('id', 'bubbleControl')
                        .attr('font-family', '"Courier New", Courier, monospace')
                        .style('fill', o.types.bubble.control.color)
                        .style('text-anchor', 'start')
                        .style('cursor', 'pointer')
                        .text(o.types.bubble.control.opentext)
                        .on('click', function() { toggleBubbleControl(o.types.bubble.control.opentext, o.types.bubble.control.closetext); toogleBubble(circles, groupCenters, center, groupsX, sublabels); });
                        
                  }
                  break;
               default:
                  if (o.chart.type != 'hbar' && o.chart.type != 'treebar' && o.chart.type != 'dragbar')
                  {
                     x.domain(data.map(function(d) { return d.x; })); //x axis range
                     y.domain([0, d3.max(data, function(d) { return d.y; })]); //y axis range
                  }
                  switch (o.chart.type)
                  {
                     case 'bar':
                        if (o.types.bar.stacked == true || o.types.bar.grouped == true) //stacked or grouped bar chart
                        {
                           if (o.types.bar.grouped == true) //grouped bar chart
                           {  
                              //redo color domain to filter out added information
                              color.domain(d3.keys(data[0]).filter(function(key) { return (key !== 'x' && key !== 'y' && key !== 'total' && key !== 'data'); }));
                              var names = d3.keys(data[0]).filter(function(key) { return (key !== 'x' && key !== 'y' && key !== 'total' && key !== 'data'); });;
   
                              data.forEach(function(d) {
                                 d.data = color.domain().map(function(dn) { return {x: dn, y: +d[dn]}; });
                              });
                              
                              //add new x1 and domain
                              var x1 = d3.scale.ordinal();
                              x1.domain(names).rangeRoundBands([0, x.rangeBand()]);
                              y.domain([0, d3.max(data, function(d) { return d3.max(d.data, function(d) { return d.y; }); })]);
                           }
                           else //stacked bar chart
                           {
                              //redo color domain to filter out added information
                              color.domain(d3.keys(data[0]).filter(function(key) { return (key !== 'x' && key !== 'y' && key !== 'total' && key !== 'data'); }));
                              
                              data.forEach(function(d) {
                                 var y0 = 0;
                                 d.data = color.domain().map(function(dn) { return {x: dn, y0: y0, y1: y0 += +d[dn]}; });
                                 switch(o.types.bar.stacking)
                                 {
                                    case 'normal':
                                       break;
                                    case 'percent':
                                       d.data.forEach(function(d) { d.y0 /= y0; d.y1 /= y0; });
                                       //change formatting to percentage
                                       yAxis.tickFormat(d3.format('0%'));
                                       o.tooltip.format = '0%';
                                       break;
                                 }
                                 d.total = d.data[d.data.length - 1].y1;
                              });
                              
                              y.domain([0, d3.max(data, function(d) { return d.total; })]);
                           }
                           
                           //create object for legend
                           var multibar = color.domain().map(function(dn) {
                              return {
                                 x: dn,
                                 values: data.map(function(d) {
                                    return {x: d.x, y: +d[dn]};
                                 })
                              };
                           });
                           
                           if (o.yAxis.gridlines == true)
                           {
                              // Draw the y Grid lines
                              svg.append("g")            
                                 .attr("class", "grid")
                                 .call(makeYGrid(y, yOrient, o.yAxis.ticks)
                                    .tickSize(-width - margin.right, 0, 0)
                                    .tickFormat("")
                                 );
                           }
                           
                           if (o.xAxis.gridlines == true)
                           {
                              // Draw the x Grid lines
                              svg.append("g")            
                                 .attr("class", "grid")
                                 .call(makeXGrid(x, xOrient, o.xAxis.ticks)
                                    .tickSize(height, 0, 0)
                                    .tickFormat("")
                                 );
                           }

                           //create each grouping for stacked or grouped bars
                           var bars = svg.selectAll('.bars')
                              .data(data)
                            .enter().append('g')
                              .attr("class", "g")
                              .attr("transform", function(d) { return "translate(" + x(d.x) + ",0)"; });
                           
                           bars.selectAll(".bar")
                              .data(function(d) { return d.data })
                            .enter().append("rect")
                              .attr("class", "bar")
                              .style("fill", function(d) { return color(d.x); })
                              .on('mouseover', tip.show)
                              .on('mouseout', tip.hide);
   
                           if (o.types.bar.grouped == true) //grouped bar chart
                           {
                              bars.selectAll('.bar')
                                 .attr("x", function(d) { return x1(d.x); })
                                 .attr("y", function(d) { return y(d.y); })
                                 .attr("height", function(d) { return height - y(d.y); })
                                 .attr("width", x1.rangeBand());
                           }
                           else //stacked bar chart
                           {
                              bars.selectAll('.bar')
                                 .attr("y", function(d) { return y(d.y1); })
                                 .attr("height", function(d) { return y(d.y0) - y(d.y1); })
                                 .attr("width", x.rangeBand())
                           }
                           
                           if (o.types.bar.labels.enabled == true)
                           {
                              if (o.types.bar.stacked == true)
                              {
                                 var labelflip = [];
                                 bars.selectAll('text')
                                    .data(data)
                                       .enter().append('text')
                                    .attr('x', function(d) { //center the label on the bar
                                       if (o.xAxis.spacing <= 0.45)
                                       {
                                          return x(d.x) + ((0.45 - o.xAxis.spacing) * (width / data.length)); 
                                       }
                                       else if (o.xAxis.spacing >= 1)
                                       {
                                          return x(d.x) + ((0.6 - o.xAxis.spacing) * (width / data.length));
                                       }
                                       else if (o.xAxis.spacing >= 0.8)
                                       {
                                          return x(d.x) + ((0.55 - o.xAxis.spacing) * (width / data.length));
                                       }
                                       else
                                       {
                                          return x(d.x) + ((0.50 - o.xAxis.spacing) * (width / data.length));
                                       }
                                    })
                                    .attr('y', function(d) { return y(d.total);}) //set to the height of the bar
                                    .attr('dy', -5)
                                    .attr('text-anchor', 'middle')
                                    .attr('fill', '#A6A6A6')
                                    .attr('font-size', '0.9em')
                                    .text(function(d, i) {
                                       if (labelflip[i] == undefined)
                                       {
                                          labelflip[i] = '';
                                          return o.types.bar.labels.prefix + tipformat(d.total) + o.types.bar.labels.suffix;
                                       }
                                    });
                              }
                           }
                        }
                        else
                        {
                           if (o.yAxis.gridlines == true)
                           {
                              // Draw the y Grid lines
                              svg.append("g")            
                                 .attr("class", "grid")
                                 .call(makeYGrid(y, yOrient, o.yAxis.ticks)
                                    .tickSize(-width - margin.right, 0, 0)
                                    .tickFormat("")
                                 );
                           }
                           
                           if (o.xAxis.gridlines == true)
                           {
                              // Draw the x Grid lines
                              svg.append("g")            
                                 .attr("class", "grid")
                                 .call(makeXGrid(x, xOrient, o.xAxis.ticks)
                                    .tickSize(height, 0, 0)
                                    .tickFormat("")
                                 );
                           }
                           
                           svg.selectAll(".bar")
                              .data(data)
                            .enter().append("rect")
                              .attr("class", "bar")
                              .attr("x", function(d) { return x(d.x); })
                              .attr("width", x.rangeBand())
                              .attr("y", function(d) { return y(d.y); })
                              .attr("height", function(d) { return height - y(d.y); })
                              .style("fill", function(d) { return color(d.x); })
                              .on('mouseover', tip.show)
                              .on('mouseout', tip.hide);
                        }
                        break;
                     
                     case 'hbar':
                        var n = 100; //maximum number of value/color pairs
                        var m = data.length;
                        var stack = d3.layout.stack();
                        var labels = data.map(function(d) { return d.key; });
                        var layers = stack(d3.range(n).map(function(d) { 
                           var a = [];
                           for (var i = 0; i < m; ++i) {
                              a[i] = {x: labels[i], y: data[i]['value' + (d+1)] | 0, color: data[i]['color' + (d+1)], label: data[i]['label' + (d+1)], children: data[i].children};  
                           }
                           return a;
                        }));
                        
                        //the largest stack
                        var yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); });

                        y = d3.scale.ordinal()
                           .domain(labels)
                           .rangeRoundBands([2, height], .08);
                        
                        barHeight = y.rangeBand();
                        
                        if (o.types.bar.xdomain == null)
                        {
                           x.domain([0, yStackMax]);
                        }
                        else
                        {
                           x.domain(o.types.bar.xdomain);
                        }
                        
                        var layer = svg.selectAll(".layer")
                           .data(layers)
                         .enter().append("g")
                           .attr('class', 'layer');

                        layer.selectAll("rect")
                           .data(function(d) { return d; })
                              .enter().append('rect')
                           .attr('y', function(d) { return y(d.x); })
                           .attr('x', function(d) { return x(d.y0); })
                           .attr("height", y.rangeBand())
                           .attr("width", function(d) { return x(d.y); })
                           .style('stroke', '#000000')
                           .style('fill', function(d, i) { return d.color; })
                           .on('click', function(d) { 
                              scope.$emit('hbarChart:click', d); 
                           })
                           .on('mouseover', tip.show)
                           .on('mouseout', tip.hide)

                           if (o.types.bar.labels.enabled == true)
                           {
                              layer.selectAll("text")
                                 .data(function(d) { return d; })
                                    .enter().append('text')
                                 .attr('y', function(d) { return y(d.x) + (y.rangeBand() / 1.65); })
                                 .attr('x', function(d) { return x(d.y) + 2; })
                                 .text(function(d){ 
                                    if (d.y > 0)
                                    {
                                       return d.y;
                                    }
                                    else
                                    {
                                       return '';
                                    }
                                 })
                                 .style('fill', o.types.bar.labels.color);
                           }

                        yAxis = d3.svg.axis()
                           .scale(y)
                           .tickSize(1)
                           .tickPadding(6)
                           .tickValues(labels)
                           .orient("left");
                        
                        if (o.yAxis.labels.enabled == false)
                        {
                           yAxis.tickValues('');
                        }
                        
                        svg.append("g")
                           .attr("class", "y axis")
                           .attr('fill', '#A6A6A6')
                           .call(yAxis);
                        
                        break;
                     case 'treebar':
                        var duration = 750;
                        var delay = 25;
                        var partition = d3.layout.partition()
                                                .value(function(d) { return d.size; })
                                                .sort(function(a, b) {
                                                   return a.order - b.order;
                                                });
                        
                        barHeight = 20;
                        
                        x = d3.scale.linear()
                           .range([0, width]);
                                 
                        xAxis = d3.svg.axis()
                           .scale(x)
                           .orient("bottom");
                        
                        svg.append("rect")
                           .attr("class", "background")
                           .attr("width", width)
                           .attr("height", height)
                           .attr("cursor", "pointer")
                           .on("click", up);

                        svg.append("g")
                           .attr("class", "y axis")
                         .append("line")
                           .attr("y1", "86%");
                           
                        partition.nodes(data);
                        x.domain([0, data.value]).nice();
                        down(data, 0);
                        
                        break;
                     case 'dragbar':   
                        var team = data.team;

                        var time = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25',
                                    '26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49',
                                    '50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73',
                                    '74','75','76','77','78','79','80'];
                        
                        var timeScaleRangeBand = width / time.length;
                         
                        var isColliding = function(course, trans, otherCourses) {
                           return _.chain(otherCourses).map(function(otherCourse)
                           {
                              if (course.id != otherCourse.id) {
                                 if (_.intersection(course.assigned, otherCourse.assigned).length > 0)
                                 {
                                    var otherStart = timeScale(format.parse(otherCourse.time.start));
                                    var otherEnd = timeScale(format.parse(otherCourse.time.end));
                                    var thisStart = trans[0];
                                    var thisEnd = trans[0] + (timeScale(format.parse(course.time.end)) - timeScale(format.parse(course.time.start)));
                                    return ((thisStart < otherStart && thisEnd > otherStart) || (thisStart > otherStart && thisStart < otherEnd));
                                 }
                                 else if (course.assigned != otherCourse.assigned)
                                 {
                                    var otherAssigned = teamScale(otherCourse.assigned);
                                    var thisAssigned = teamScale(course.assigned);
                                    return false;
                                 }
                                 else
                                 {
                                    return false;
                                 }
                              }
                              else 
                              {
                                 return false;
                              }
                           }).contains(true).value();
                        }
                        
                        var week = [];
                        var format = d3.time.format("%I");
                        var drag = d3.behavior.drag()
                           .origin(Object)
                           .on('drag', function (d, i) {
                              var t = d3.select(this);
                              var trans = d3.transform(t.attr('transform')).translate;
                              if (isColliding(d, trans, data.tasks)) {
                                 t.style('fill','red'); // warn the user about the impending collision
                              } else {
                                 t.style('fill', d.color);
                              }
                              // update the position of the course group
                              t.attr('transform', 'translate(' + Math.min(width - t[0][0].firstChild.firstChild.attributes[t[0][0].firstChild.firstChild.attributes.length - 2].value, Math.max(0, +d3.event.dx + trans[0])) + ',' + Math.min(height - t[0][0].firstChild.firstChild.attributes[t[0][0].firstChild.firstChild.attributes.length - 1].value, Math.max(0, +d3.event.dy + trans[1])) + ')');
                           })
                           .on('dragend', function (d, i) {
                              var t = d3.select(this);
                              var trans = d3.transform(t.attr('transform')).translate;
                              // round to the nearest half hour
                              var hrs = time[Math.floor(trans[0] / timeScaleRangeBand)];
                              var assigned = team[Math.floor(trans[1] / teamScale.rangeBand())];
                              
                              if (isColliding(d, trans, data.tasks)) {
                                 // user lets go in an invalid place -> return the course group to original location
                                 t.attr('transform', function(d) { return 'translate(' + timeScale(format.parse(d.time.start)) + ',0)';});
                                 t.style('fill', d.color); // I see a red course and I want it painted black
                              } else {
                                 // user selected a valid time for the course -> snap to nearest half hour slot
                                 t.attr('transform', function() { return 'translate(' + timeScale(format.parse(hrs)) + ',' + teamScale(assigned) + ')';});
                                 // calculate the duration of the course section
                                 var sectionDuration = (format.parse(data.tasks[d.id].time.end) - format.parse(data.tasks[d.id].time.start)) / 60000;
                                 data.tasks[d.id].time.start = hrs;
                                 // find the section end time by add the duration of the section to the start time
                                 data.tasks[d.id].time.end = format(d3.time.minute.offset(format.parse(hrs), sectionDuration));
                                 data.tasks[d.id].assigned[0] = assigned;
                                 // redraw
                                 updateCourseGroups();
                              };
                           });
                        
                        var d3datetime = time.map(format.parse);

                        team.forEach(function(assigned){
                           var timeObj = {};
                           time.forEach(function(time){
                              timeObj[time] = {
                                 occupied: false,
                                 course: ''
                              };
                           });
                           week.push(timeObj.assigned = assigned);
                        });

                        var teamScale = d3.scale.ordinal()
                           .domain(team)
                           .rangeRoundBands([0, height], 0.01);

                        var timeScale = d3.time.scale()
                           .domain([d3datetime[0],d3datetime[d3datetime.length - 1]])
                           .rangeRound([0, width]);

                        var makeTimeAxis = function() {
                           return d3.svg.axis()
                              .scale(timeScale)
                              .orient('top')
                        }

                        var makeTeamAxis = function() {
                           return d3.svg.axis()
                              .scale(teamScale)
                              .orient('left')
                        }

                        svg.append('g')
                           .attr('class', 'time axis')
                           .attr('transform', 'translate(0,' + height + ')')
                           .call(makeTimeAxis().ticks(time.length).tickSize(height + 5, 0, 0).tickFormat(''));

                        svg.append('g')
                           .attr('class', 'team axis')
                           .attr('transform','translate(' + width + ',' + ((teamScale.rangeBand() / 2) + 2) + ')')
                           .call(makeTeamAxis().tickSize(width, 0, 0));

                        svg.append('g')
                           .attr('class', 'team axis')
                           .style('fill', o.yAxis.title.color)
                           .call(makeTeamAxis().tickSize(0).tickPadding(8));

                        var courseGroups = svg.selectAll('g.course')
                           .data(data.tasks)
                           .enter().append('g')
                           .attr('class', 'course')
                           .style('fill', function(d) { return d.color; })
                           .attr('transform', function(d) {
                              return 'translate(' + timeScale(format.parse(d.time.start)) + ',' + 0 + ')';
                           })
                           .on('mouseover', tip.show)
                           .on('mouseout', tip.hide)
                           .call(drag);

                        var sections = courseGroups.selectAll('g.section')
                           .data(function(d) {
                              return d.assigned.map(function(e){
                                 return {assigned: e, time: d.time, title: d.title};
                              });
                           })
                           .enter().append('g')
                           .attr('class','section');

                        sections.append('rect')
                           .attr('class','section')
                           .attr('x', 0)
                           .attr('y', function(d){ return teamScale(d.assigned); })
                           .attr('height', teamScale.rangeBand())
                           .attr('width', function(d) {
                              return timeScale(format.parse(d.time.end)) - timeScale(format.parse(d.time.start));
                           });

                        sections.append('text')
                           .style('fill', 'white')
                           .attr('x', 2)
                           .attr('y', function(d){ return teamScale(d.assigned) + (teamScale.rangeBand() / 2) + 6; })
                           .text(function(d){ return d.title; });
                           /*
                        svg.append("text")
                           .attr("class", "x label")
                           .attr("text-anchor", "end")
                           .attr("x", width / 1.8)
                           .attr("y", -50)
                           .style('fill', o.xAxis.title.color)
                           .text(o.xAxis.title.text);
*/
                        var updateCourseGroups = function() {
                           svg.selectAll('g.course')
                              .data(data.tasks)
                              .attr('transform', function(d) {
                                 return 'translate(' + timeScale(format.parse(d.time.start)) + ',' + teamScale(d.assigned) + ')';
                              });
                        }
                        break;
                     case 'line':
                        //redo color domain to filter out added information
                        color.domain(d3.keys(data[0]).filter(function(key) { return (key !== 'x' && key !== 'y' && key !== 'total' && key !== 'data'); }));
                              
                        //define lines
                        var lines = color.domain().map(function(dn) {
                           return {
                              x: dn,
                              values: data.map(function(d) {
                                 return {x: d.x, y: d[dn]};
                              })
                           };
                        });
                        
                        //set minimum for y axis
                        var yDomainMin = 0;
                        if (o.yAxis.min == 'min')
                        {
                           yDomainMin = d3.min(lines, function(c) { return d3.min(c.values, function(v) { return v.y; }); });
                        }
                        else
                        {
                           yDomainMin = parseInt(o.yAxis.min);
                        }
                        //define y axis again to account for multiple lines
                        y.domain([
                           yDomainMin,
                           d3.max(lines, function(c) { return d3.max(c.values, function(v) { return v.y; }); })
                        ]);
                        
                        if (o.yAxis.gridlines == true)
                        {
                           // Draw the y Grid lines
                           svg.append("g")            
                              .attr("class", "grid")
                              .call(makeYGrid(y, yOrient, o.yAxis.ticks)
                                 .tickSize(-width - margin.right, 0, 0)
                                 .tickFormat("")
                              );
                        }
                        
                        if (o.xAxis.gridlines == true)
                        {
                           // Draw the x Grid lines
                           svg.append("g")            
                              .attr("class", "grid")
                              .call(makeXGrid(x, xOrient, o.xAxis.ticks)
                                 .tickSize(height, 0, 0)
                                 .tickFormat("")
                              );
                        }
                        
                        //define line
                        var line = d3.svg.line()
                           .x(function(d) { return x(d.x); })
                           .y(function(d) { return y(d.y); })
                           .defined(function(d) { return d.y != null; });
                           
                        var zn = svg.selectAll(".zn")
                            .data(lines)
                          .enter().append("g")
                            .attr("class", "zn");
            
                        zn.append('path')
                           .attr('class', 'line')
                           .attr('d', function(d) { return line(d.values); })
                           .style('stroke', function(d) { return color(d.x); });
                                             
                        break;
                        
                     case 'scatter': //scatter plot chart
                        x = d3.scale.linear()
                           .range([0, width]);
                        
                        xAxis.scale(x); //reset x scale for linear axis
                        
                        //get the maximum values of x and y
                        var xMax = d3.max(data, function(d) { return d.x; });
                        var yMax = d3.max(data, function(d) { return d.y; });
                        
                        //set the extent of the the x and y axis starting with 0
                        x.domain([0, xMax]);
                        y.domain([0, yMax]);
                        
                        //create order
                        var order = {};
                        data.forEach(function(d) {
                           order[d.z] = '';
                        });
                        //redo color domain for z
                        color.domain(d3.keys(order));
                        
                        if (o.yAxis.gridlines == true)
                        {
                           // Draw the y Grid lines
                           svg.append("g")            
                              .attr("class", "grid")
                              .call(makeYGrid(y, yOrient, o.yAxis.ticks)
                                 .tickSize(-width - margin.right, 0, 0)
                                 .tickFormat("")
                              );
                        }
                        
                        if (o.xAxis.gridlines == true)
                        {
                           // Draw the x Grid lines
                           svg.append("g")            
                              .attr("class", "grid")
                              .call(makeXGrid(x, xOrient, o.xAxis.ticks)
                                 .tickSize(height, 0, 0)
                                 .tickFormat("")
                              );
                        }
                           
                        svg.selectAll(".dot")
                           .data(data)
                         .enter().append("circle")
                           .attr("class", "dot")
                           .attr("r", 3.5)
                           .attr("cx", function(d) { return x(d.x); })
                           .attr("cy", function(d) { return y(d.y); })
                           .style("fill", function(d) { return color(d.z); })
                           .on('mouseover', tip.show)
                           .on('mouseout', tip.hide);
                        break;
                  }
                  
                  //add x axis
                  if (o.chart.type != 'dragbar')
                  {
                     svg.append("g")
                        .attr("class", "x axis") //class for x axis
                        .attr("id", "xAxis")
                        .style("fill", o.xAxis.labels.color) //label color for x axis
                        .attr("transform", "translate(0," + height + ")") //height for x axis
                        .call(xAxis)
                      .append("text") //x axis title
                        .attr("x", width / 2 )
                        .attr("y", margin.bottom * 0.75)
                        .style("text-anchor", "middle")
                        .style("fill", o.xAxis.title.color)
                        .style("font-size", o.xAxis.title.size)
                        .text(o.xAxis.title.text);

                     if (o.xAxis.labels.links == true)
                     {
                        svg.select('#xAxis')
                           .selectAll('.tick')
                           .attr('cursor', 'pointer')
                           .on('click', function(d) {
                              document.location.href = o.xAxis.labels.linkTarget;
                           });
                     }
                  }
                  
                  if (o.chart.type != 'hbar' && o.chart.type != 'treebar' && o.chart.type != 'dragbar')
                  {
                     //add y axis
                     svg.append("g")
                        .attr("class", "y axis")
                        .style("fill", o.yAxis.labels.color)
                        .call(yAxis)
                      .append("text") //y axis title
                        .attr("transform", "rotate(-90)")
                        .attr("y", 6)
                        .attr("dy", "0.7em")
                        .style("text-anchor", "end")
                        .style("fill", o.yAxis.title.color)
                        .style("font-size", o.yAxis.title.size)
                        .text(o.yAxis.title.text);
                  }
                  
                  break;
            }

            //chart legend
            if (o.legend.enabled == true)
            {
               var legendData = data;
               var legendFill = function(d) { return color(d.x) };
               var legendText = function(d) { return d.x; };
               var legendSize = 18;
               switch (o.chart.type)
               {
                  case 'line':
                     legendData = lines; //change so that legend uses the line categories instead
                     break;
                  case 'map':
                     legendData = o.types.map.quantizeScale; //change so that legend uses the color gradient
                     legendFill = function(d) { 
                        return quantize(d);
                     };
                     legendText = function(d) { return d; };
                     legendSize = 20;
                     break;
               }

               var legend = svg.selectAll(".legend")
                  .data(legendData)
                .enter().append("g")
                  .attr("class", "legend")
                  .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; }); //space between legend items
               
               //legend title
               svg.append('text')
                  .attr('x', o.legend.position.x)
                  .attr('y', o.legend.position.y - 15)
                  .attr('dy', '.35em')
                  .style('fill', o.legend.color)
                  .style('text-anchor', 'start')
                  .text(o.legend.title);
               
               //legend item colors
               legend.append("rect")
                  .attr("x", o.legend.position.x)
                  .attr("y", o.legend.position.y)
                  .attr("width", legendSize)
                  .attr("height", legendSize)
                  .style("fill", legendFill);
               
               //legend items
               legend.append('text')
                  .attr('x', o.legend.position.x + 22)
                  .attr('y', o.legend.position.y + 8)
                  .attr('dy', '.35em')
                  .style('fill', o.legend.color)
                  .style('text-anchor', 'start')
                  .text(legendText);
            }
              
            //sort chart   
            if (o.chart.sort != '')
            {
               sortChart();
            }
         } //end updateChart
         
         updateChart();
         
         //watch mvData and mvOptions for changes and update the chart
         scope.$watch('mvData', updateChart, true);
         scope.$watch('mvOptions', updateChart, true);
         
         //update chart on window resize
         scope.$on('event:windowResize', function(event, data) {
            updateChart();
         });

         /******************IMPORTANT******************
         //put this in the main application controller to make the charts responsive

         angular.element($window).on('resize', function(){
            $rootScope.$broadcast("event:windowResize")
         });

         **********************************************/
         //navigate down on tree view
         function down(d, i) {
            if (!d.children || this.__transition__ || d.nochildren) return;
            var end = duration + d.children.length * delay;
            
            // Mark any currently-displayed bars as exiting.
            var exit = svg.selectAll(".enter")
               .attr("class", "exit");

            // Entering nodes immediately obscure the clicked-on bar, so hide it.
            exit.selectAll("rect").filter(function(p) { return p === d; })
               .style("fill-opacity", 1e-6);

            // Enter the new bars for the clicked-on data.
            // Per above, entering bars are immediately visible.
            var enter = bar(d)
               .attr("transform", stacker(i))
               .style("opacity", 1);
               
            // Have the text fade-in, even though the bars are visible.
            // Color the bars as parents; they will fade to children if appropriate.
            enter.select("text").style("fill-opacity", 1e-6);
            //enter.select("rect").style("fill", color(true));
           
            // Update the x-scale domain.
            x.domain([0, d3.max(d.children, function(d) { return d.nochildren ? d.value : d.number; })]).nice();
           
            // Update the x-axis.
            svg.selectAll(".x.axis").transition()
               .duration(duration)
               .call(xAxis);
               
            // Transition entering bars to their new position.
            var enterTransition = enter.transition()
               .duration(duration)
               .delay(function(d, i) { return i * delay; })
               .attr("transform", function(d, i) { return "translate(0," + barHeight * i * 1.2 + ")"; });
               
            // Transition entering text.
            enterTransition.select("text")
               .style("fill-opacity", 1);
               
            // Transition entering rects to the new x-scale.
            enterTransition.select("rect")
               .attr("width", function(d) { return d.nochildren ? x(d.value) : x(d.number); });
               //.style("fill", function(d) { return color(!!d.children); });
               
            // Transition exiting bars to fade out.
            var exitTransition = exit.transition()
               .duration(duration)
               .style("opacity", 1e-6)
               .remove();
               
            // Transition exiting bars to the new x-scale.
            exitTransition.selectAll("rect")
               .attr("width", function(d) { return d.nochildren ? x(d.value) : x(d.number); });
                     
            // Rebind the current node to the background.
            svg.select(".background")
               .datum(d)
             .transition()
               .duration(end);
               
            d.index = i;
         }
         
         function up(d) {
            if (!d.parent || this.__transition__) return;
            var end = duration + d.children.length * delay;
            
            // Mark any currently-displayed bars as exiting.
            var exit = svg.selectAll(".enter")
               .attr("class", "exit");

            // Enter the new bars for the clicked-on data's parent.
            var enter = bar(d.parent)
               .attr("transform", function(d, i) { return "translate(0," + barHeight * i * 1.2 + ")"; })
               .style("opacity", 1e-6);

            // Color the bars as appropriate.
            // Exiting nodes will obscure the parent bar, so hide it.
            enter.select("rect")
               .style("fill", function(d) { return d.color; })
             .filter(function(p) { return p === d; })
               .style("fill-opacity", 1e-6);

            // Update the x-scale domain.
            x.domain([0, d3.max(d.parent.children, function(d) { return d.nochildren ? d.value : d.number; })]).nice();

            // Update the x-axis.
            svg.selectAll(".x.axis").transition()
               .duration(duration)
               .call(xAxis);

            // Transition entering bars to fade in over the full duration.
            var enterTransition = enter.transition()
               .duration(end)
               .style("opacity", 1);

            // Transition entering rects to the new x-scale.
            // When the entering parent rect is done, make it visible!
            enterTransition.select("rect")
               .attr("width", function(d) { return d.nochildren ? x(d.value) : x(d.number); })
               .each("end", function(p) { if (p === d) d3.select(this).style("fill-opacity", null); });

            // Transition exiting bars to the parent's position.
            var exitTransition = exit.selectAll("g").transition()
               .duration(duration)
               .delay(function(d, i) { return i * delay; })
               .attr("transform", stacker(d.index));

            // Transition exiting text to fade out.
            exitTransition.select("text")
               .style("fill-opacity", 1e-6);

            // Transition exiting rects to the new scale and fade to parent color.
            exitTransition.select("rect")
               .attr("width", function(d) { return d.nochildren ? x(d.value) : x(d.number); })
               .style("fill", color(true));
               
            // Remove exiting nodes when the last child has finished transitioning.
            exit.transition()
               .duration(end)
               .remove();

            // Rebind the current parent to the background.
            svg.select(".background")
               .datum(d.parent)
             .transition()
               .duration(end);
         }

         // Creates a set of bars for the given data node, at the specified index.
         function bar(d) {
            var bar = svg.insert("g", ".y.axis")
               .attr("class", "enter")
               .attr("transform", "translate(0,5)")
             .selectAll("g")
               .data(d.children)
             .enter().append("g")
               .style("cursor", function(d) { return (!d.children || d.nochildren) ? null : "pointer"; })
               .style('fill', '#A6A6A6')
               .on("click", down);

            bar.append("text")
               .attr("x", -6)
               .attr("y", barHeight / 2)
               .attr("dy", ".35em")
               .style("text-anchor", "end")
               .text(function(d) { return d.name.length > 20 ? d.name.substring(0, 20) + '...' : d.name; });

            bar.append("rect")
               .attr("width", function(d) { return x(d.value); })
               .attr("height", barHeight)
               .style('fill', function(d, i) { return d.color; })
               .on('mouseover', tip.show)
               .on('mouseout', tip.hide);
            return bar;
         }

         // A stateful closure for stacking bars horizontally.
         function stacker(i) {
            var x0 = 0;
            return function(d) {
               var tx = "translate(" + x0 + "," + barHeight * i * 1.2 + ")";
               x0 += x(d.value);
               return tx;
            };
         }

         //make y grid lines
         function makeYGrid(y, yOrient, ticks) {
           return d3.svg.axis()
               .scale(y)
               .orient(yOrient)
               .ticks(ticks)
         }
         
         //make x grid lines
         function makeXGrid(x, xOrient, ticks) {
           return d3.svg.axis()
               .scale(x)
               .orient(xOrient)
               .ticks(ticks)
         }
         
         //bubble chart functions
         function charge(d) {
            return -Math.pow(d.radius, 2.0) / 8;
         }
         
         function start(nodes) {
            force = d3.layout.force()
               .nodes(nodes)
               .size([width,height]);
         }
         
         function displayStart(circles, groupCenters, center) {
            force.gravity(layoutGravity) //start by moving away
               .charge(charge)
               .friction(0.9)
             .on('tick', function(e) {
               circles.each(moveTowardsGroup(e.alpha, groupCenters))
                  .attr('cx', function(d) { return d.x; })
                  .attr('cy', function(d) { return d.y; });
            });
            setTimeout(function() { //delay and then move back towards center
               force.gravity(layoutGravity)
                  .charge(charge)
                  .friction(0.9)
                .on('tick', function(e) {
                  circles.each(moveTowardsCenter(e.alpha, center))
                     .attr('cx', function(d) { return d.x; })
                     .attr('cy', function(d) { return d.y; });
               });
            }, 1000);
            force.start();
         }
         
         function displayGroupAll(circles, center) {
            force.gravity(layoutGravity)
               .charge(charge)
               .friction(0.9)
             .on('tick', function(e) {
               circles.each(moveTowardsCenter(e.alpha, center))
                  .attr('cx', function(d) { return d.x; })
                  .attr('cy', function(d) { return d.y; });
            });
            force.start();
            hideGroups();
         }
         
         function moveTowardsCenter(alpha, center) {
            return function(d) {
               d.x = d.x + (center.x - d.x) * (damper + 0.02) * alpha;
               d.y = d.y + (center.y - d.y) * (damper + 0.02) * alpha;
            }
         }
         
         function displayByGroup(circles, groupCenters, groupsX, sublabels) {
            force.gravity(layoutGravity)
               .charge(charge)
               .friction(0.9)
             .on('tick', function(e) {
               circles.each(moveTowardsGroup(e.alpha, groupCenters))
                  .attr('cx', function(d) { return d.x; })
                  .attr('cy', function(d) { return d.y; });
            });
            force.start();
            displayGroups(groupsX, sublabels);
         }
         
         function moveTowardsGroup(alpha, groupCenters) {
            return function(d) {
               var target = groupCenters[d.id];
               d.x = d.x + (target.x - d.x) * (damper + 0.02) * alpha;
               d.y = d.y + (target.y - d.y) * (damper + 0.02) * alpha;
            }
         }
         
         function displayGroups(groupsX, sublabels) {                  
            var groupsData = d3.keys(groupsX);
            var groups = svg.selectAll('.groups')
               .data(groupsData);
       
            groups.enter().append('text')
               .attr('class', 'groups')
               .style('font-size', '24px')
               .attr('fill', '#A6A6A6')
               .attr('x', function(d) { return groupsX[d]; })
               .attr('y', 10)
               .attr('text-anchor', 'middle')
               .text(function(d) { return d;});
               
            groups.enter().append('text')
               .attr('class', 'groups')
               .attr('fill', '#A6A6A6')
               .attr('x', function(d) { return groupsX[d]; })
               .attr('y', 32)
               .attr('text-anchor', 'middle')
               .text(function(d) { return sublabels[d];} );
         }
       
         function hideGroups() {
            var groups = svg.selectAll('.groups').remove();
         }
         
         //toggle the view
         function toogleBubble(circles, groupCenters, center, groupsX, sublabels) {
            if (bubbleView == 'all')
            {
               displayByGroup(circles, groupCenters, groupsX, sublabels);
               bubbleView = 'group'
            } 
            else
            {
               displayGroupAll(circles, center);
               bubbleView = 'all'
            }
         }
         
         //toggle control
         function toggleBubbleControl(openText, closeText) {
            var bubbleControl = document.getElementById('bubbleControl');
            if (bubbleView == 'all')
            {
               bubbleControl.textContent = closeText;
            }
            else
            {
               bubbleControl.textContent = openText;
            }
         }
         
         //end bubble chart functions
         
         //map rotation functions
         function refresh() {
            svg.selectAll("path").attr("d", path);
         }
         function mousedown() {
            m0 = [d3.event.pageX, d3.event.pageY];
            o0 = projection.rotate();
            d3.event.preventDefault();
         }
         function mousemove() {
            if (m0) {
               var m1 = [d3.event.pageX, d3.event.pageY]
                  , o1 = [o0[0] + (m1[0] - m0[0]) / 6, o0[1] + (m0[1] - m1[1]) / 6];
               o1[1] = o1[1] > 30  ? 30  :
                       o1[1] < -30 ? -30 :
                       o1[1];
               projection.rotate(o1);
               refresh();
            }
         }
         function mouseup() {
            if (m0) {
               mousemove();
               m0 = null;
            }
         }
         
         //zoom map function                   
         function clickedzoom(d) {
            if (o.types.map.zoom == true)
            {
               if (active.node() === this) return resetzoom(d3.select(this.parentNode.parentNode));
               active.classed("active", false);
               active = d3.select(this).classed("active", true);
            
               var bounds = path.bounds(d),
                  dx = bounds[1][0] - bounds[0][0],
                  dy = bounds[1][1] - bounds[0][1],
                  x = (bounds[0][0] + bounds[1][0]) / 2,
                  y = (bounds[0][1] + bounds[1][1]) / 2,
                  scale = 0.9 / Math.max(dx / width, dy / height),
                  translate = [width / 2 - scale * x, height / 2 - scale * y];
            
               d3.select(this.parentNode.parentNode).transition()
                  .duration(750)
                  .attr("transform", "translate(" + translate + ")scale(" + scale + ")");
                  
               scope.$parent.setCountry(d);
            }
         }
         
         function resetzoom(g) {
            active.classed("active", false);
            active = d3.select(null);
         
            g.transition()
               .duration(750)
               .attr("transform", "");
         }
                 
         //map id to country or state name
         function idToName(id, type) {
            switch(type)
            {
               case 'countries':
                  for (i = 0; i < countriesList.length; i++) {
                     if (countriesList[i].id == id)
                     {
                        return countriesList[i].name;
                     }
                  }
                  break;
               case 'states':
                  for (i = 0; i < statesList.length; i++) {
                     if (statesList[i].id == id)
                     {
                        return statesList[i].name;
                     }
                  }
                  break;
            }
         }

         //map id to country or state digraph
         function idToDi(id, type) {
            switch(type)
            {
               case 'countries':
                  for (i = 0; i < countriesList.length; i++) {
                     if (countriesList[i].id == id)
                     {
                        return countriesList[i].di;
                     }
                  }
                  break;
               case 'states':
                  for (i = 0; i < statesList.length; i++) {
                     if (statesList[i].id == id)
                     {
                        return statesList[i].di;
                     }
                  }
                  break;
            }
         }
         
         //sort the chart based on different cases
         function sortChart() {    
            // Copy-on-write since tweens are evaluated after a delay.
            var x0 = null;
            switch (o.chart.sort)
            {
               case 'y-descending':
                  x0 = x.domain(data.sort(function(a, b) {
                        return d3.descending(a.y, b.y);
                     })
                     .map(function(d) { return d.x; }))
                     .copy();
                  break;
               case 'y-ascending':
                  x0 = x.domain(data.sort(function(a, b) {
                        return d3.ascending(a.y, b.y);
                     })
                     .map(function(d) { return d.x; }))
                     .copy();
                  break;
               case 'x-descending':
                  x0 = x.domain(data.sort(function(a, b) {
                        return d3.descending(a.x, b.x);
                     })
                     .map(function(d) { return d.x; }))
                     .copy();
                  break;
               case 'x-ascending':
                  x0 = x.domain(data.sort(function(a, b) {
                        return d3.ascending(a.x, b.x);
                     })
                     .map(function(d) { return d.x; }))
                     .copy();
                  break;            
            }
         
            var transition = svg.transition().duration(750),
                delay = function(d, i) { return i * 50; };
         
            transition.selectAll(".bar")
               .delay(delay)
               .attr("x", function(d) { return x0(d.x); });
         
            transition.select(".x.axis")
               .call(xAxis)
             .selectAll("g")
               .delay(delay);
         }
         
         //perform deep extend which merges objects and any sub objects together
         function extendDeep(dst) { 
            angular.forEach(arguments, function(obj) { 
               if (obj !== dst) { 
                  angular.forEach(obj, function(value, key) { 
                     if (dst[key] && dst[key].constructor && dst[key].constructor === Object) { 
                        extendDeep(dst[key], value); 
                     } else { 
                        dst[key] = value; 
                     } 
                  }); 
               } 
            }); 
            return dst; 
         }
         
         //function for satellite projection
         function clippedSatellite() {
            var projection = d3.geo.satellite();
         
            var clipAngle = projection.clipAngle,
               distance = projection.distance,
               degrees = 180 / Math.PI,
               radians = Math.PI / 180,
               tilt = projection.tilt,
               projectionStream = projection.stream,
               rotate = [0, 0, 0],
               rotation = d3.geo.rotation(rotate),
               tiltRotate,
               alpha;
         
            // Special projection instance for additional clipping.
            var clip = d3.geo.projection(function(l, p) {
               return [l, -p];
            }).scale(degrees).translate([0, 0]);
         
            delete projection.clipAngle;
         
            projection.distance = function(_) {
               if (!arguments.length) return distance.call(projection);
               distance.call(projection, _);
               clipAngle.call(projection, Math.acos(1 / +_) * degrees - 1e-6);
               return projection;
            };
         
            projection.rotate = function(_) {
               if (!arguments.length) return rotate;
               rotation = d3.geo.rotation(rotate = [+_[0], +_[1], _.length > 2 && +_[2]]);
               return projection;
            };
         
            projection.tilt = function(angle) {
               if (!arguments.length) return tilt.call(projection);
               tilt.call(projection, angle);
               alpha = Math.acos(projection.distance() * Math.cos(angle * radians) * .99) * degrees;
               clip.clipAngle(180 - alpha).rotate([0, 180 + angle]);
               tiltRotate = d3.geo.rotation([0, 180 + projection.tilt()]);
               return projection;
            };
         
           projection.stream =  function(stream) {
               var pstream = projectionStream.call(projection, stream),
                  circle = d3.geo.circle().angle(clipAngle.call(projection) - 1e-6),
                  clipStream = alpha ? clip.stream({
                     point: function(l, p) {
                        var point = tiltRotate.invert([l, p]);
                        pstream.point(point[0], point[1]);
                     },
                     lineStart: function() { pstream.lineStart(); },
                     lineEnd: function() { pstream.lineEnd(); },
                     polygonStart: function() { pstream.polygonStart(); },
                     polygonEnd: function() { pstream.polygonEnd(); }
                  }) : pstream;
               return {
                  point: function(l, p) {
                  var point = rotation([l, p]);
                     clipStream.point(point[0], point[1]);
                  },
                  lineStart: function() { clipStream.lineStart(); },
                  lineEnd: function() { clipStream.lineEnd(); },
                  polygonStart: function() { clipStream.polygonStart(); },
                  polygonEnd: function() { clipStream.polygonEnd(); },
                  sphere: function() {
                     d3.geo.stream(circle(), clipStream);
                  }
               };
            };
         
            return projection.distance(projection.distance());
         }
      }
   }
};

//minerva templates
var templateHeader =   '<div class="mv-header"> ' +
                       '    <div class="mv-title">{{mvTitle}}</div> ' +
                       '    <div class="mv-title-right"><ng-transclude></ng-transclude></div> ' +
                       ' </div>';

var templateBody =     '<div class="mv-body"> ' +
                       '    <div class="mv-widget-container g{{mvCols}}r"> ' +
                       '       <ng-transclude></ng-transclude> ' +
                       '    </div> ' +
                       ' </div>';

var templateFooter =   '<div class="mv-footer"> ' +
                       '    <ng-transclude></ng-transclude> ' +
                       ' </div>';

var templateRow =      '<div> ' +
                       '    <ng-transclude></ng-transclude> ' +
                       ' </div>';

var templateGroup =    '<div class="gr-{{mvSize}} break" ng-style="{{mvStyle}}"> ' +
                       '    <ng-transclude></ng-transclude> ' +
                       ' </div>';

var templateIdBox =    '<div class="widget g-{{mvSize}}" id="{{mvId}}"> ' +
                       '    <div class="w-head lightbox-head" ng-click="mvClick()">{{mvTitle}}</div> ' +
                       '    <div class="w-body lightbox-body" id="{{mvBodyId}}"> ' +
                       '       <ng-transclude></ng-transclude> ' +
                       '    </div> ' +
                       ' </div>';

var templateTable =    '<div class="widget g-{{mvSize}}" id="{{mvId}}"> ' +
                       '    <div class="w-head lightbox-head">{{mvTitle}} <span ng-hide="mvShowFilter==' + "'" + 'false' + "'" + '" class="w-table-input">Filter: <input type="text" ng-model="searchText" /></span></div> ' +
                       '    <div class="w-body lightbox-body"> ' +
                       '       <div class="w-table" ng-style="{{mvStyle}}"> ' +
                       '          <table> ' +
                       '             <tr> ' +
                       '                <th ng-repeat="header in mvData.mapping">{{header.title}}</th> ' +
                       '             </tr> ' +
                       '             <tr ng-repeat="row in mvData.rows | filter:searchText"> ' +
                       '                <td ng-repeat="header in mvData.mapping" class="{{row[' + "'" + 'mv-color' + "'" + ']}}">{{row[header.value]}}</td> ' +
                       '             </tr> ' +
                       '          </table> ' +
                       '       </div> ' +
                       '       <ng-transclude></ng-transclude> ' +
                       '    </div> ' +
                       ' </div>';

var templateTableLink = '<div class="widget g-{{mvSize}}" id="{{mvId}}"> ' +
                        '   <div class="w-head lightbox-head">{{mvTitle}} <span class="w-table-input">Filter: <input type="text" ng-model="searchText" /></span></div> ' +
                        '   <div class="w-body lightbox-body"> ' +
                        '      <div class="w-table" ng-style="{{mvStyle}}"> ' +
                        '         <table> ' +
                        '            <tr> ' +
                        '               <th ng-repeat="header in mvData.mapping">{{header.title}}</th> ' +
                        '            </tr> ' +
                        '            <tr ng-repeat="row in mvData.rows | filter:searchText"> ' +
                        '               <td ng-repeat="header in mvData.mapping" class="{{row[' + "'" + 'mv-color' + "'" + ']}}" title="{{row[header.value]}}"> ' +
                        '                  <a href=' + "'" + '{{mvData.links[row[header.value]][header.value]}}' + "'" + ' ng-if="mvData.links[row[header.value]][header.value]!=undefined">{{row[header.value]}}</a> ' +
                        '                  <span ng-if="mvData.links[row[header.value]][header.value]==undefined">{{row[header.value]}}</span> ' +
                        '               </td> ' +
                        '            </tr> ' +
                        '         </table> ' +
                        '      </div> ' +
                        '      <ng-transclude></ng-transclude> ' +
                        '   </div> ' +
                        '</div>';

var templateTableFunction = '<div class="widget g-{{mvSize}}" id="{{mvId}}"> ' +
                            '     <div class="w-head lightbox-head">{{mvTitle}} <span ng-hide="mvShowFilter==' + "'" + 'false' + "'" + '" class="w-table-input">Filter: <input type="text" ng-model="searchText" /></span></div> ' +
                            '     <div class="w-body lightbox-body"> ' +
                            '        <div class="w-table" ng-style="{{mvStyle}}"> ' +
                            '           <table> ' +
                            '              <tr> ' +
                            '                 <th ng-repeat="header in mvData.mapping">{{header.title}}</th> ' +
                            '              </tr> ' +
                            '              <tr ng-repeat="row in mvData.rows | filter:searchText"> ' +
                            '                 <td ng-repeat="header in mvData.mapping" class="{{row[' + "'" + 'mv-color' + "'" + ']}}"> ' +
                            '                    <a class="click" ng-click="mvClick(row)" ng-if="mvData.parameters[row[header.value]][header.value]!=undefined">{{row[header.value]}}</a> ' +
                            '                    <span ng-if="mvData.parameters[row[header.value]][header.value]==undefined">{{row[header.value]}}</span> ' +
                            '                 </td> ' +
                            '              </tr> ' +
                            '           </table> ' +
                            '        </div> ' +
                            '        <ng-transclude></ng-transclude> ' +
                            '     </div> ' +
                            '  </div>';

var templateTableSelect = '<div class="widget g-{{mvSize}}" id="{{mvId}}"> ' +
                          '    <div class="w-head lightbox-head"> ' +
                          '       {{mvTitle}}  ' +
                          '       <span class="w-table-input"> ' +
                          '          <select ng-model="mvFiltered" ng-options="filter as filter.name for filter in mvFilter"></select> ' +
                          '       </span> ' +
                          '    </div> ' +
                          '    <div class="w-body lightbox-body"> ' +
                          '       <div class="w-table" ng-style="{{mvStyle}}"> ' +
                          '          <table> ' +
                          '             <tr> ' +
                          '                <th ng-repeat="header in mvData.mapping">{{header.title}}</th> ' +
                          '             </tr> ' +
                          '             <tr ng-repeat="row in mvData.rows | filter: { mvselect: mvFiltered.key }"> ' +
                          '                <td ng-repeat="header in mvData.mapping" class="{{row[' + "'" + 'mv-color' + "'" + ']}}">{{row[header.value]}}</td> ' +
                          '             </tr> ' +
                          '          </table> ' +
                          '       </div> ' +
                          '    </div> ' +
                          ' </div>';

var templateTableSelectFunction = '<div class="widget g-{{mvSize}}" id="{{mvId}}"> ' +
                                  '     <div class="w-head lightbox-head"> ' +
                                  '        {{mvTitle}}  ' +
                                  '        <span class="w-table-input"> ' +
                                  '           <select ng-model="mvFiltered" ng-options="filter as filter.name for filter in mvFilter"></select> ' +
                                  '        </span> ' +
                                  '     </div> ' +
                                  '     <div class="w-body lightbox-body"> ' +
                                  '        <div class="w-table" ng-style="{{mvStyle}}"> ' +
                                  '           <table> ' +
                                  '              <tr> ' +
                                  '                 <th ng-repeat="header in mvData.mapping">{{header.title}}</th> ' +
                                  '              </tr> ' +
                                  '              <tr ng-repeat="row in mvData.rows | filter: { mvselect: mvFiltered.key }"> ' +
                                  '                 <td ng-repeat="header in mvData.mapping" class="{{row[' + "'" + 'mv-color' + "'" + ']}}"> ' +
                                  '                    <a class="click" ng-click="mvClick(mvData.parameters[row[header.value]][header.value])" ng-if="mvData.parameters[row[header.value]][header.value]!=undefined">{{row[header.value]}}</a> ' +
                                  '                    <span ng-if="mvData.parameters[row[header.value]][header.value]==undefined">{{row[header.value]}}</span> ' +
                                  '                 </td> ' +
                                  '              </tr> ' +
                                  '           </table> ' +
                                  '        </div> ' +
                                  '     </div> ' +
                                  '  </div>';

var templateTableList = '<div class="widget g-{{mvSize}}" id="{{mvId}}"> ' +
                        '   <div class="w-head lightbox-head">{{mvTitle}}</div> ' +
                        '   <div class="w-body lightbox-body"> ' +
                        '      <div class="w-table-list" ng-style="{{mvStyle}}"> ' +
                        '         <table ng-repeat="stats in mvData"> ' +
                        '            <tr><th class="mv-table-list-title" colspan="2">{{stats.title}}</th></tr> ' +
                        '            <tr ng-repeat="stat in stats.data"> ' +
                        '               <th>&emsp;<span class="{{stat.color}} || w-c{{$index}}">&emsp;</span> {{stat.title}}</th> ' +
                        '               <td>{{stat.number}}</td> ' +
                        '            </tr> ' +
                        '            <tr><td>&nbsp;</td></tr> ' +
                        '         </table> ' +
                        '      </div> ' +
                        '   </div> ' +
                        '</div>';

//countries and states lists
var countriesList = [
   { id: 4, tri: 'AFG', di:' AF', name: 'Afghanistan' },
   { id: 8, tri: 'ALB', di:' AL', name: 'Albania' },
   { id: 12, tri: 'DZA', di:' DZ', name: 'Algeria' },
   { id: 16, tri: 'ASM', di:' AS', name: 'American Samoa' },
   { id: 20, tri: 'AND', di:' AD', name: 'Andorra' },
   { id: 24, tri: 'AGO', di:' AO', name: 'Angola' },
   { id: 660, tri: 'AIA', di:' AI', name: 'Anguilla' },
   { id: 10, tri: 'ATA', di:' AQ', name: 'Antarctica' },
   { id: 28, tri: 'ATG', di:' AG', name: 'Antigua and Barbuda' },
   { id: 32, tri: 'ARG', di:' AR', name: 'Argentina' },
   { id: 51, tri: 'ARM', di:' AM', name: 'Armenia' },
   { id: 533, tri: 'ABW', di:' AW', name: 'Aruba' },
   { id: 36, tri: 'AUS', di:' AU', name: 'Australia' },
   { id: 40, tri: 'AUT', di:' AT', name: 'Austria' },
   { id: 31, tri: 'AZE', di:' AZ', name: 'Azerbaijan' },
   { id: 44, tri: 'BHS', di:' BS', name: 'Bahamas, The' },
   { id: 48, tri: 'BHR', di:' BH', name: 'Bahrain' },
   { id: 50, tri: 'BGD', di:' BD', name: 'Bangladesh' },
   { id: 52, tri: 'BRB', di:' BB', name: 'Barbados' },
   { id: 112, tri: 'BLR', di:' BY', name: 'Belarus' },
   { id: 56, tri: 'BEL', di:' BE', name: 'Belgium' },
   { id: 84, tri: 'BLZ', di:' BZ', name: 'Belize' },
   { id: 204, tri: 'BEN', di:' BJ', name: 'Benin' },
   { id: 60, tri: 'BMU', di:' BM', name: 'Bermuda' },
   { id: 64, tri: 'BTN', di:' BT', name: 'Bhutan' },
   { id: 68, tri: 'BOL', di:' BO', name: 'Bolivia' },
   { id: 70, tri: 'BIH', di:' BA', name: 'Bosnia and Herzegovina' },
   { id: 72, tri: 'BWA', di:' BW', name: 'Botswana' },
   { id: 74, tri: 'BVT', di:' BV', name: 'Bouvet Island' },
   { id: 76, tri: 'BRA', di:' BR', name: 'Brazil' },
   { id: 86, tri: 'IOT', di:' IO', name: 'British Indian Ocean Territory' },
   { id: 92, tri: 'VGB', di:' VG', name: 'British Virgin Islands' },
   { id: 96, tri: 'BRN', di:' BN', name: 'Brunei' },
   { id: 100, tri: 'BGR', di:' BG', name: 'Bulgaria' },
   { id: 854, tri: 'BFA', di:' BF', name: 'Burkina Faso' },
   { id: 104, tri: 'MMR', di:' MM', name: 'Burma' },
   { id: 108, tri: 'BDI', di:' BI', name: 'Burundi' },
   { id: 132, tri: 'CPV', di:' CV', name: 'Cabo Verde' },
   { id: 116, tri: 'KHM', di:' KH', name: 'Cambodia' },
   { id: 120, tri: 'CMR', di:' CM', name: 'Cameroon' },
   { id: 124, tri: 'CAN', di:' CA', name: 'Canada' },
   { id: 136, tri: 'CYM', di:' KY', name: 'Cayman Islands' },
   { id: 140, tri: 'CAF', di:' CF', name: 'Central African Republic' },
   { id: 148, tri: 'TCD', di:' TD', name: 'Chad' },
   { id: 152, tri: 'CHL', di:' CL', name: 'Chile' },
   { id: 156, tri: 'CHN', di:' CN', name: 'China' },
   { id: 162, tri: 'CXR', di:' CX', name: 'Christmas Island' },
   { id: 166, tri: 'CCK', di:' CC', name: 'Cocos (Keeling) Islands' },
   { id: 170, tri: 'COL', di:' CO', name: 'Colombia' },
   { id: 174, tri: 'COM', di:' KM', name: 'Comoros' },
   { id: 180, tri: 'COD', di:' CD', name: 'Congo, Democratic Republic of the' },
   { id: 178, tri: 'COG', di:' CG', name: 'Congo, Republic of the' },
   { id: 184, tri: 'COK', di:' CK', name: 'Cook Islands' },
   { id: 188, tri: 'CRI', di:' CR', name: 'Costa Rica' },
   { id: 384, tri: 'CIV', di:' CI', name: 'Cote d&apos;Ivoire' },
   { id: 191, tri: 'HRV', di:' HR', name: 'Croatia' },
   { id: 192, tri: 'CUB', di:' CU', name: 'Cuba' },
   { id: 531, tri: 'CUW', di:' CW', name: 'Curacao' },
   { id: 196, tri: 'CYP', di:' CY', name: 'Cyprus' },
   { id: 203, tri: 'CZE', di:' CZ', name: 'Czech Republic' },
   { id: 208, tri: 'DNK', di:' DK', name: 'Denmark' },
   { id: 262, tri: 'DJI', di:' DJ', name: 'Djibouti' },
   { id: 212, tri: 'DMA', di:' DM', name: 'Dominica' },
   { id: 214, tri: 'DOM', di:' DO', name: 'Dominican Republic' },
   { id: 218, tri: 'ECU', di:' EC', name: 'Ecuador' },
   { id: 818, tri: 'EGY', di:' EG', name: 'Egypt' },
   { id: 222, tri: 'SLV', di:' SV', name: 'El Salvador' },
   { id: 226, tri: 'GNQ', di:' GQ', name: 'Equatorial Guinea' },
   { id: 232, tri: 'ERI', di:' ER', name: 'Eritrea' },
   { id: 233, tri: 'EST', di:' EE', name: 'Estonia' },
   { id: 231, tri: 'ETH', di:' ET', name: 'Ethiopia' },
   { id: 238, tri: 'FLK', di:' FK', name: 'Falkland Islands (Islas Malvinas)' },
   { id: 234, tri: 'FRO', di:' FO', name: 'Faroe Islands' },
   { id: 242, tri: 'FJI', di:' FJ', name: 'Fiji' },
   { id: 246, tri: 'FIN', di:' FI', name: 'Finland' },
   { id: 250, tri: 'FRA', di:' FR', name: 'France' },
   { id: 249, tri: 'FXX', di:' FX', name: 'France, Metropolitan' },
   { id: 254, tri: 'GUF', di:' GF', name: 'French Guiana' },
   { id: 258, tri: 'PYF', di:' PF', name: 'French Polynesia' },
   { id: 260, tri: 'ATF', di:' TF', name: 'French Southern and Antarctic Lands' },
   { id: 266, tri: 'GAB', di:' GA', name: 'Gabon' },
   { id: 270, tri: 'GMB', di:' GM', name: 'Gambia, The' },
   { id: 275, tri: 'PSE', di:' PS', name: 'Palestinian Territories' },
   { id: 268, tri: 'GEO', di:' GE', name: 'Georgia' },
   { id: 276, tri: 'DEU', di:' DE', name: 'Germany' },
   { id: 288, tri: 'GHA', di:' GH', name: 'Ghana' },
   { id: 292, tri: 'GIB', di:' GI', name: 'Gibraltar' },
   { id: 300, tri: 'GRC', di:' GR', name: 'Greece' },
   { id: 304, tri: 'GRL', di:' GL', name: 'Greenland' },
   { id: 308, tri: 'GRD', di:' GD', name: 'Grenada' },
   { id: 312, tri: 'GLP', di:' GP', name: 'Guadeloupe' },
   { id: 316, tri: 'GUM', di:' GU', name: 'Guam' },
   { id: 320, tri: 'GTM', di:' GT', name: 'Guatemala' },
   { id: 831, tri: 'GGY', di:' GG', name: 'Guernsey' },
   { id: 324, tri: 'GIN', di:' GN', name: 'Guinea' },
   { id: 624, tri: 'GNB', di:' GW', name: 'Guinea-Bissau' },
   { id: 328, tri: 'GUY', di:' GY', name: 'Guyana' },
   { id: 332, tri: 'HTI', di:' HT', name: 'Haiti' },
   { id: 334, tri: 'HMD', di:' HM', name: 'Heard Island and McDonald Islands' },
   { id: 336, tri: 'VAT', di:' VA', name: 'Holy See (Vatican City)' },
   { id: 340, tri: 'HND', di:' HN', name: 'Honduras' },
   { id: 344, tri: 'HKG', di:' HK', name: 'Hong Kong' },
   { id: 348, tri: 'HUN', di:' HU', name: 'Hungary' },
   { id: 352, tri: 'ISL', di:' IS', name: 'Iceland' },
   { id: 356, tri: 'IND', di:' IN', name: 'India' },
   { id: 360, tri: 'IDN', di:' ID', name: 'Indonesia' },
   { id: 364, tri: 'IRN', di:' IR', name: 'Iran' },
   { id: 368, tri: 'IRQ', di:' IQ', name: 'Iraq' },
   { id: 372, tri: 'IRL', di:' IE', name: 'Ireland' },
   { id: 833, tri: 'IMN', di:' IM', name: 'Isle of Man' },
   { id: 376, tri: 'ISR', di:' IL', name: 'Israel' },
   { id: 380, tri: 'ITA', di:' IT', name: 'Italy' },
   { id: 388, tri: 'JAM', di:' JM', name: 'Jamaica' },
   { id: 392, tri: 'JPN', di:' JP', name: 'Japan' },
   { id: 832, tri: 'JEY', di:' JE', name: 'Jersey' },
   { id: 400, tri: 'JOR', di:' JO', name: 'Jordan' },
   { id: 398, tri: 'KAZ', di:' KZ', name: 'Kazakhstan' },
   { id: 404, tri: 'KEN', di:' KE', name: 'Kenya' },
   { id: 296, tri: 'KIR', di:' KI', name: 'Kiribati' },
   { id: 408, tri: 'PRK', di:' KP', name: 'Korea, North' },
   { id: 410, tri: 'KOR', di:' KR', name: 'Korea, South' },
   { id: -2 , tri: 'XKS', di:' XK', name: 'Kosovo' },
   { id: 414, tri: 'KWT', di:' KW', name: 'Kuwait' },
   { id: 417, tri: 'KGZ', di:' KG', name: 'Kyrgyzstan' },
   { id: 418, tri: 'LAO', di:' LA', name: 'Laos' },
   { id: 428, tri: 'LVA', di:' LV', name: 'Latvia' },
   { id: 422, tri: 'LBN', di:' LB', name: 'Lebanon' },
   { id: 426, tri: 'LSO', di:' LS', name: 'Lesotho' },
   { id: 430, tri: 'LBR', di:' LR', name: 'Liberia' },
   { id: 434, tri: 'LBY', di:' LY', name: 'Libya' },
   { id: 438, tri: 'LIE', di:' LI', name: 'Liechtenstein' },
   { id: 440, tri: 'LTU', di:' LT', name: 'Lithuania' },
   { id: 442, tri: 'LUX', di:' LU', name: 'Luxembourg' },
   { id: 446, tri: 'MAC', di:' MO', name: 'Macau' },
   { id: 807, tri: 'MKD', di:' MK', name: 'Macedonia' },
   { id: 450, tri: 'MDG', di:' MG', name: 'Madagascar' },
   { id: 454, tri: 'MWI', di:' MW', name: 'Malawi' },
   { id: 458, tri: 'MYS', di:' MY', name: 'Malaysia' },
   { id: 462, tri: 'MDV', di:' MV', name: 'Maldives' },
   { id: 466, tri: 'MLI', di:' ML', name: 'Mali' },
   { id: 470, tri: 'MLT', di:' MT', name: 'Malta' },
   { id: 584, tri: 'MHL', di:' MH', name: 'Marshall Islands' },
   { id: 474, tri: 'MTQ', di:' MQ', name: 'Martinique' },
   { id: 478, tri: 'MRT', di:' MR', name: 'Mauritania' },
   { id: 480, tri: 'MUS', di:' MU', name: 'Mauritius' },
   { id: 175, tri: 'MYT', di:' YT', name: 'Mayotte' },
   { id: 484, tri: 'MEX', di:' MX', name: 'Mexico' },
   { id: 583, tri: 'FSM', di:' FM', name: 'Micronesia, Federated States of' },
   { id: 498, tri: 'MDA', di:' MD', name: 'Moldova' },
   { id: 492, tri: 'MCO', di:' MC', name: 'Monaco' },
   { id: 496, tri: 'MNG', di:' MN', name: 'Mongolia' },
   { id: 499, tri: 'MNE', di:' ME', name: 'Montenegro' },
   { id: 500, tri: 'MSR', di:' MS', name: 'Montserrat' },
   { id: 504, tri: 'MAR', di:' MA', name: 'Morocco' },
   { id: 508, tri: 'MOZ', di:' MZ', name: 'Mozambique' },
   { id: 516, tri: 'NAM', di:' NA', name: 'Namibia' },
   { id: 520, tri: 'NRU', di:' NR', name: 'Nauru' },
   { id: 524, tri: 'NPL', di:' NP', name: 'Nepal' },
   { id: 528, tri: 'NLD', di:' NL', name: 'Netherlands' },
   { id: 540, tri: 'NCL', di:' NC', name: 'New Caledonia' },
   { id: 554, tri: 'NZL', di:' NZ', name: 'New Zealand' },
   { id: 558, tri: 'NIC', di:' NI', name: 'Nicaragua' },
   { id: 562, tri: 'NER', di:' NE', name: 'Niger' },
   { id: 566, tri: 'NGA', di:' NG', name: 'Nigeria' },
   { id: 570, tri: 'NIU', di:' NU', name: 'Niue' },
   { id: 574, tri: 'NFK', di:' NF', name: 'Norfolk Island' },
   { id: 580, tri: 'MNP', di:' MP', name: 'Northern Mariana Islands' },
   { id: -1,  tri: '',    di:'',    name: 'Northern Cyprus' },
   { id: 578, tri: 'NOR', di:' NO', name: 'Norway' },
   { id: 512, tri: 'OMN', di:' OM', name: 'Oman' },
   { id: 586, tri: 'PAK', di:' PK', name: 'Pakistan' },
   { id: 585, tri: 'PLW', di:' PW', name: 'Palau' },
   { id: 591, tri: 'PAN', di:' PA', name: 'Panama' },
   { id: 598, tri: 'PNG', di:' PG', name: 'Papua New Guinea' },
   { id: 600, tri: 'PRY', di:' PY', name: 'Paraguay' },
   { id: 604, tri: 'PER', di:' PE', name: 'Peru' },
   { id: 608, tri: 'PHL', di:' PH', name: 'Philippines' },
   { id: 612, tri: 'PCN', di:' PN', name: 'Pitcairn Islands' },
   { id: 616, tri: 'POL', di:' PL', name: 'Poland' },
   { id: 620, tri: 'PRT', di:' PT', name: 'Portugal' },
   { id: 630, tri: 'PRI', di:' PR', name: 'Puerto Rico' },
   { id: 634, tri: 'QAT', di:' QA', name: 'Qatar' },
   { id: 638, tri: 'REU', di:' RE', name: 'Reunion' },
   { id: 642, tri: 'ROU', di:' RO', name: 'Romania' },
   { id: 643, tri: 'RUS', di:' RU', name: 'Russia' },
   { id: 646, tri: 'RWA', di:' RW', name: 'Rwanda' },
   { id: 652, tri: 'BLM', di:' BL', name: 'Saint Barthelemy' },
   { id: 654, tri: 'SHN', di:' SH', name: 'Saint Helena, Ascension, and Tristan da Cunha' },
   { id: 659, tri: 'KNA', di:' KN', name: 'Saint Kitts and Nevis' },
   { id: 662, tri: 'LCA', di:' LC', name: 'Saint Lucia' },
   { id: 663, tri: 'MAF', di:' MF', name: 'Saint Martin' },
   { id: 666, tri: 'SPM', di:' PM', name: 'Saint Pierre and Miquelon' },
   { id: 670, tri: 'VCT', di:' VC', name: 'Saint Vincent and the Grenadines' },
   { id: 882, tri: 'WSM', di:' WS', name: 'Samoa' },
   { id: 674, tri: 'SMR', di:' SM', name: 'San Marino' },
   { id: 678, tri: 'STP', di:' ST', name: 'Sao Tome and Principe' },
   { id: 682, tri: 'SAU', di:' SA', name: 'Saudi Arabia' },
   { id: 686, tri: 'SEN', di:' SN', name: 'Senegal' },
   { id: 688, tri: 'SRB', di:' RS', name: 'Serbia' },
   { id: 690, tri: 'SYC', di:' SC', name: 'Seychelles' },
   { id: 694, tri: 'SLE', di:' SL', name: 'Sierra Leone' },
   { id: 702, tri: 'SGP', di:' SG', name: 'Singapore' },
   { id: 534, tri: 'SXM', di:' SX', name: 'Sint Maarten' },
   { id: 703, tri: 'SVK', di:' SK', name: 'Slovakia' },
   { id: 705, tri: 'SVN', di:' SI', name: 'Slovenia' },
   { id: 90 , tri: 'SLB', di:' SB', name: 'Solomon Islands' },
   { id: 706, tri: 'SOM', di:' SO', name: 'Somalia' },
   { id: -3 , tri: 'SOM', di:' SO', name: 'Somaliland' },
   { id: 710, tri: 'ZAF', di:' ZA', name: 'South Africa' },
   { id: 239, tri: 'SGS', di:' GS', name: 'South Georgia and the Islands' },
   { id: 728, tri: 'SSD', di:' SS', name: 'South Sudan' },
   { id: 724, tri: 'ESP', di:' ES', name: 'Spain' },
   { id: 144, tri: 'LKA', di:' LK', name: 'Sri Lanka' },
   { id: 729, tri: 'SDN', di:' SD', name: 'Sudan' },
   { id: 740, tri: 'SUR', di:' SR', name: 'Suriname' },
   { id: 744, tri: 'SJM', di:' SJ', name: 'Svalbard' },
   { id: 748, tri: 'SWZ', di:' SZ', name: 'Swaziland' },
   { id: 752, tri: 'SWE', di:' SE', name: 'Sweden' },
   { id: 756, tri: 'CHE', di:' CH', name: 'Switzerland' },
   { id: 760, tri: 'SYR', di:' SY', name: 'Syria' },
   { id: 158, tri: 'TWN', di:' TW', name: 'Taiwan' },
   { id: 762, tri: 'TJK', di:' TJ', name: 'Tajikistan' },
   { id: 834, tri: 'TZA', di:' TZ', name: 'Tanzania' },
   { id: 764, tri: 'THA', di:' TH', name: 'Thailand' },
   { id: 626, tri: 'TLS', di:' TL', name: 'Timor-Leste' },
   { id: 768, tri: 'TGO', di:' TG', name: 'Togo' },
   { id: 772, tri: 'TKL', di:' TK', name: 'Tokelau' },
   { id: 776, tri: 'TON', di:' TO', name: 'Tonga' },
   { id: 780, tri: 'TTO', di:' TT', name: 'Trinidad and Tobago' },
   { id: 788, tri: 'TUN', di:' TN', name: 'Tunisia' },
   { id: 792, tri: 'TUR', di:' TR', name: 'Turkey' },
   { id: 795, tri: 'TKM', di:' TM', name: 'Turkmenistan' },
   { id: 796, tri: 'TCA', di:' TC', name: 'Turks and Caicos Islands' },
   { id: 798, tri: 'TUV', di:' TV', name: 'Tuvalu' },
   { id: 800, tri: 'UGA', di:' UG', name: 'Uganda' },
   { id: 804, tri: 'UKR', di:' UA', name: 'Ukraine' },
   { id: 784, tri: 'ARE', di:' AE', name: 'United Arab Emirates' },
   { id: 826, tri: 'GBR', di:' GB', name: 'United Kingdom' },
   { id: 840, tri: 'USA', di:' US', name: 'United States' },
   { id: 581, tri: 'UMI', di:' UM', name: 'United States Minor Outlying Islands' },
   { id: 858, tri: 'URY', di:' UY', name: 'Uruguay' },
   { id: 860, tri: 'UZB', di:' UZ', name: 'Uzbekistan' },
   { id: 548, tri: 'VUT', di:' VU', name: 'Vanuatu' },
   { id: 862, tri: 'VEN', di:' VE', name: 'Venezuela' },
   { id: 704, tri: 'VNM', di:' VN', name: 'Vietnam' },
   { id: 850, tri: 'VIR', di:' VI', name: 'Virgin Islands' },
   { id: 876, tri: 'WLF', di:' WF', name: 'Wallis and Futuna' },
   { id: 275, tri: 'PSE', di:' PS', name: 'West Bank' },
   { id: 732, tri: 'ESH', di:' EH', name: 'Western Sahara' },
   { id: 887, tri: 'YEM', di:' YE', name: 'Yemen' },
   { id: 894, tri: 'ZMB', di:' ZM', name: 'Zambia' },
   { id: 716, tri: 'ZWE', di:' ZW', name: 'Zimbabwe' }
];

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

//define the minerva angular module and associate all directives
angular.module('mvMinerva', [])
   //The minvera directives
   .constant('errMsg', 'No Data to Display')
   .provider('minerva', mvConfig)
   .directive('mvHeader', mvHeader)
   .directive('mvBody', mvBody)
   .directive('mvFooter', mvFooter)
   .directive('mvRow', mvRow)
   .directive('mvGroup', mvGroup)
   .directive('mvAnyNum', ['errMsg', mvAnyNum])
   .directive('mvAnyNumLink', ['errMsg', mvAnyNumLink])
   .directive('mvAnyNumLinkVertical', ['errMsg', mvAnyNumLinkVertical])
   .directive('mvAnyNumHover', ['errMsg', mvAnyNumHover])
   .directive('mvAnyNumHoverVertical',['errMsg',  mvAnyNumHoverVertical])
   .directive('mvIdBox', mvIdBox)
   .directive('mvTableList', mvTableList)
   .directive('mvTable', mvTable)
   .directive('mvTableLink', mvTableLink)
   .directive('mvTableFunction', mvTableFunction)
   .directive('mvTableSelect', mvTableSelect)
   .directive('mvTableSelectFunction', mvTableSelectFunction)
   .directive('mvChart', ['minerva', 'errMsg', mvChart]);
   
}());