
/* **************************************************************** */
/* Document Ready ************************************************* */
/* **************************************************************** */
jQuery(document).ready(function($){
	
	// Viewport Width
	viewportWidthHeight(true);
	
	// Main Navigation Mobile
	mobilePriNav('div.sectionwrapper.pageheader div.sectioninside','ul.headerlinkslist','ul.mobileheaderlinkslist','headerlinksnav','mobileheaderlinkslist');
	
	// Field Icons
	var $fldIconsExist = $('div.formfld.icon');
	if ($fldIconsExist.length > 0){
		fieldIcons();
	}
	
	// Load Data into Table
	gridFdaData('drug','Class I','100');
	
	// Data Grid
	setTimeout(function(){
		$('#datagridinfo').DataTable({
			responsive: true
		});
	}, 500);
	
	// Mobile Login Click Event
	$('ul.mobileheaderlinkslist span.loginparent').on('click', function(){
		if(!$(this).closest('li.loginlogout').hasClass('active')) {
			$(this).closest('li.loginlogout').addClass('active');
			$(this).closest('li.loginlogout').find('div.logindropdown').slideDown();
		} else {
			$(this).closest('li.loginlogout').removeClass('active');
			$(this).closest('li.loginlogout').find('div.logindropdown').slideUp();
		}
	});
});



/* **************************************************************** */
/* Window Load **************************************************** */
/* **************************************************************** */
window.onload = function(){
	// ajaxFdaLoad(10);
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

/*
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
			// for(var i=0;i<obj.results.length;i++){ / * Grab all 100 records from API * /
			for(var i=0;i<dataCounter;i++){ / * Grab top X results from API * /
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
*/


/**
  * Open FDA API Data Function
  */
function gridFdaData(type,query,limit){
	var request = $.ajax({
		url: 'https://api.fda.gov/' + type + '/enforcement.json?search=' + query + '&limit=' + limit + '&api_key=mHWQoZTaPhujOVrDtzs8rCEvToN1n6xCDSIVdZbw',
		method: 'GET',
		dataType: 'json',
		success: function(data){
			gridFdaDataProcess(data);
		}
	});
	
	request.done(function(msg){
		$('#log').html(msg);
	});
	
	request.fail(function(jqXHR, textStatus) {
		$('#log').html("Request failed: " + textStatus);
	});
}

function gridFdaDataProcess(dataString){
	var obj = dataString;
	console.log(obj);
	
	var dataOutputBody = '';
	
	for(var i=0;i<100;i++){
		
		dataOutputBody += 
			
			'<tr>' + 
				'<td>' + obj.results[i].state + '</td>' + 
				'<td>' + obj.results[i].city + '</td>' + 
				'<td>' + addDashes(obj.results[i].recall_initiation_date) + '</td>' + 
				'<td>' + obj.results[i].product_type + '</td>' + 
				'<td>' + obj.results[i].recalling_firm + '</td>' + 
				'<td>' + obj.results[i].product_description + '</td>' + 
			'</tr>';
		
	}
	
	$('table.datagrid.drugs.state tbody').html(dataOutputBody);
}



/**
  * To Capital Case
  */
function toCapitalCase(str){
	return str.replace(/\w\S*/g, function(text){
		return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
	});
}



/**
  * Add dashes to date with format yyyy-mm-dd
  */
function addDashes(num){
	var numArr = num.toString().split('');
	
    var len = numArr.length;
    var final = [];
    for (var i = 0; i < len; i++){
        final.push(numArr[i]);
		if (i == 3) {
			final.push("-")
		} else if(i == 5) {
			final.push("-")
		}
    }  
	return final.join("");
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


/**
  * Field Icons Function
  */
function fieldIcons(){
	$('div.formfld.icon').append('<div class="fldicon"></div>');
	
	// On Focus
	$('input.text,select.select').on('focus', function(){
		$(this).closest('div.formfld').addClass('focused');
	});
	
	// On Blur
	$('input.text,select.select').on('blur', function(){
		$(this).closest('div.formfld').removeClass('focused');
	});
}


/**
  * Notice Popup Function
  */
function noticePopup(messagetype,message){
	
	// Append Backdrop to Body
	$('body').append('<div class="noticepopupbackdrop"></div>');
	
	// Append Popup to Body
	$('body').append(
		'<div class="noticepopup ' + messagetype + '">' + 
			'<div class="noticepopup_outer">' + 
				'<div class="noticepopup_inner">' + 
					'<div class="noticepopup_header">' + 
						'<span>Attention</span>' + 
						'<div class="noticeclosebttn"></div>' + 
					'</div>' + 
					'<div class="noticepopup_content">' + 
						'<div class="noticepopupcontent_inner">' + 
							
							message + 
							
							'<div class="clear"></div>' + 
						'</div>' + 
						
						'<div class="clear"></div>' + 
					'</div>' + 
					
					'<div class="clear"></div>' + 
				'</div>' + 
				
				'<div class="clear"></div>' + 
			'</div>' + 
			
			'<div class="clear"></div>' + 
		'</div>'
	);
	
	// Initial Open
	$('div.noticepopupbackdrop').fadeIn(150);
	$('div.noticepopup').css({display: 'block'}).animate({top: '50%', opacity: '1.00'}, 300);
	
	// Grab Width and Height and Center Popup on Page Load
	popupWidthHeight();
	
	// On Resize
	$(window).on('resize', function(){
		
		// Grab Width and Height and Center Popup on Resize
		popupWidthHeight();
	});
	
	// On Click Close
	$('div.noticepopupbackdrop,div.noticeclosebttn').on('click', function(){
		$('div.noticepopup').fadeOut(150);
		$('div.noticepopupbackdrop').fadeOut(175);
		
		setTimeout(function(){
			$('div.noticepopupbackdrop,div.noticepopup').remove();
		}, 350);
	});
}


/**
  * Get Notice Popup Width and Height Function
  */
function popupWidthHeight(){
	
	var noticeWidth = $('div.noticepopup').width();
	var noticeHeight = $('div.noticepopup').height();
	
	$('div.noticepopup').css({marginTop: -(noticeHeight / 2), marginLeft: -(noticeWidth / 2) });
}









