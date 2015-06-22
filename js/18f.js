
/* **************************************************************** */
/* Document Ready ************************************************* */
/* **************************************************************** */
jQuery(document).ready(function($){
	
	// Viewport Width
	viewportWidthHeight(false);
	
	// Main Navigation Mobile
	mobilePriNav('div.sectionwrapper.pageheader div.sectioninside','ul.headerlinkslist','ul.mobileheaderlinkslist','headerlinksnav','mobileheaderlinkslist');
});



/* **************************************************************** */
/* Window Load **************************************************** */
/* **************************************************************** */
window.onload = function(){
	ajaxFdaLoad(10);
}



/* **************************************************************** */
/* Window Scroll ************************************************** */
/* **************************************************************** */
jQuery(window).scroll(function($){
	
});



/* **************************************************************** */
/* JavaScript Functions ******************************************* */
/* **************************************************************** */

// Viewport Width Function
function viewportWidthHeight(val){
	if(val == true){
		var vWidthHeightStyling = "\
			position: fixed;\
			top: 0;\
			left: 0;\
			z-index: 99999999;\
			padding: 5px 15px;\
			float: left;\
			color: #999;\
			font-size: 12px;\
			background-color: #000;";
		
		// Initial Append and Display
		var vWidth = window.innerWidth;
		var vHeight = window.innerHeight;
		$('body').append('<div id="viewportwidth" style="' + vWidthHeightStyling + '">Width: ' + vWidth + 'px &nbsp;&nbsp;&nbsp; Height: ' + vHeight + 'px</div>');
		
		// Update on Resize
		window.addEventListener('resize', function(){
			$('#viewportwidth').remove(); // Stops overloading the DOM
			
			var vWidth = window.innerWidth;
			var vHeight = window.innerHeight;
			$('body').append('<div id="viewportwidth" style="' + vWidthHeightStyling + '">Width: ' + vWidth + 'px &nbsp;&nbsp;&nbsp; Height: ' + vHeight + 'px</div>');
		});
	}
}

// AJAX FDA Load
function ajaxFdaLoad(infoCounter){
	var ajaxhttp = '';
	
	if(window.XMLHttpRequest){
		ajaxhttp = new XMLHttpRequest();
	} else {
		ajaxhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	// onreadystatechange
	ajaxhttp.onreadystatechange = function(){
		if(ajaxhttp.readyState == 4 && ajaxhttp.status == 200) {
			jsonFdaProcessing(ajaxhttp.responseText,infoCounter);
		}
		if(ajaxhttp.status == 400){ console.log('Status: Bad Request') }
		if(ajaxhttp.status == 403){ console.log('Status: Forbidden') }
		if(ajaxhttp.status == 404){ console.log('Status: Not Found') }
		if(ajaxhttp.status == 500){ console.log('Status: Internal Error') }
	}
	
	ajaxhttp.open('get','https://api.fda.gov/drug/event.json?api_key=Q3VHEzlFWJ5eYIkLMtxLhNfpC775FyKR4HU5fFs4&search=patient.drug.openfda.pharm_class_epc:"nonsteroidal+anti-inflammatory+drug"&count=patient.reaction.reactionmeddrapt.exact',true);
	ajaxhttp.send();
}

// JSON Data Processing
function jsonFdaProcessing(jsonString,dataCounter){
	var obj = JSON.parse(jsonString);
	
	// console.log(obj);
	
	var dataDisplay = '';
	
	// Graph Data Output
	dataDisplay += '<div class="fdareactiongraph">';
		
		dataDisplay += '<div class="fdareactiongraph_inner">';
			
			dataDisplay += '<h3>Top ' + dataCounter + ' most frequently reported patient reactions for nonsteroidal anti-inflammatory drugs</h3>';
			
			// Loop Through Data
			// for(var i=0;i<obj.results.length;i++){ /* Grab all 100 records from API */
			for(var i=0;i<dataCounter;i++){ /* Grab top X results from API */
				dataDisplay += 
					'<div class="patientdrugrow patientdrug_' + i + '">' + 
						'<div class="patientdrug_lbl">' + 
							toCapitalCase(obj.results[i].term) + 
							
							'<div class="clear"></div>' + 
						'</div>' + 
						
						'<div class="patientdrug_data" style="width: ' + ((obj.results[i].count)/350) + '%">' + 
							'<div class="patientdrug_counter">' + 
								obj.results[i].count + 
							'</div>' + 
							
							'<div class="clear"></div>' + 
						'</div>' + 
						
						'<div class="clear"></div>' + 
					'</div>';
			}
			dataDisplay += '<div class="clear"></div>';
		dataDisplay += '</div>';
		
		dataDisplay += '<div class="clear"></div>';
	dataDisplay += '</div>';
	
	document.getElementById('fdabarchart').innerHTML = dataDisplay;
}

// To Capital Case
function toCapitalCase(str){
	return str.replace(/\w\S*/g, function(text){
		return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
	});
}

/**
  * Mobile Navigation Function
  * appendSelector: selector to append mobile nav structure to
  * itemClone: ul navigation to clone
  * appendCloneTo: selector to append the cloned structure to
  * mobileNavClassSel: what you want to nav wrapper class to be (name only - no dot for selector)
  * finalListSel: what you want the class or id of the final list to be
  */
function mobilePriNav(appendSelector,itemClone,appendCloneTo,mobileNavClassSel,finalListSel){
	
	// Append Mobile Nav Structure to Header
	$('<div class="mnavwrapper ' + mobileNavClassSel + '"><div class="mnavhandle"><div class="mhandleinner"><span /><span /><span /></div></div><ul class="' + finalListSel + '"></ul></div>')
		.appendTo(appendSelector);
	
	// Clone Primary Nav to Mobile Nav
	$(itemClone).children().clone().appendTo(appendCloneTo);
	
	// Click Event
	$('div.' + mobileNavClassSel + ' div.mnavhandle').on('click', function(){
		if(!$(this).parent().hasClass('active')){
			$(this).parent().addClass('active');
			$(this).parent().find('ul.' + finalListSel).slideDown();
		} else if($(this).parent().hasClass('active')){
			$(this).parent().removeClass('active');
			$(this).parent().find('ul.' + finalListSel).stop(true, true).slideUp();
		}
	});
}

