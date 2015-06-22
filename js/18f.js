
/* **************************************************************** */
/* Document Ready ************************************************* */
/* **************************************************************** */
jQuery(document).ready(function($){
	
});



/* **************************************************************** */
/* Window Load **************************************************** */
/* **************************************************************** */
window.onload = function(){
	ajaxFdaLoad();
}



/* **************************************************************** */
/* Window Scroll ************************************************** */
/* **************************************************************** */
jQuery(window).scroll(function($){
	
});



/* **************************************************************** */
/* JavaScript Functions ******************************************* */
/* **************************************************************** */

// AJAX FDA Load
function ajaxFdaLoad(){
	var ajaxhttp = '';
	
	if(window.XMLHttpRequest){
		ajaxhttp = new XMLHttpRequest();
	} else {
		ajaxhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	// onreadystatechange
	ajaxhttp.onreadystatechange = function(){
		if(ajaxhttp.readyState == 4 && ajaxhttp.status == 200) {
			jsonFdaProcessing(ajaxhttp.responseText);
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
function jsonFdaProcessing(jsonString){
	var obj = JSON.parse(jsonString);
	
	//console.log(obj);
	console.log(obj);
	
	var dataDisplay = '';
	
	// Graph Data Output
	dataDisplay += '<div class="fdareactiongraph">';
		
		dataDisplay += '<div class="fdareactiongraph_inner">';
			
			dataDisplay += '<h3>Top 5 most frequently reported patient reactions for nonsteroidal anti-inflammatory drugs</h3>';
			
			// Loop Through Data
			// for(var i=0;i<obj.results.length;i++){ /* Grab all 100 records from API */
			for(var i=0;i<5;i++){ /* Grab top 5 results from API */
				dataDisplay += 
					'<div class="patientdrugrow patientdrug_' + i + '">' + 
						'<div class="patientdrug_lbl">' + 
							toCapitalCase(obj.results[i].term) + 
							
							'<div class="clear"></div>' + 
						'</div>' + 
						
						'<div class="patientdrug_data" style="width: ' + ((obj.results[i].count)/350) + '%">' + 
							'<div class="patientdrug_counter">' + obj.results[i].count + '</div>' + 
							
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


