
/* **************************************************************** */
/* Document Ready ************************************************* */
/* **************************************************************** */
jQuery(document).ready(function($){
	
	// Viewport Width
	viewportWidthHeight(true);
	
	// Sidebar Expand/Collapse
	$('.mobilehandle').click(function(){
		var animTiming = 250;
		
		if(!$('body').hasClass('collapsed')){
			
			// Add Class to body Tag
			$('body').addClass('collapsed');
			
			// Sidebar
			$('.sidebarnavigation').animate({ width: '75px' }, animTiming);
			
			// Content Region
			$('.contentregionwrapper').animate({ paddingLeft: '75px' }, animTiming);
			
			// Add Caret to Each Nav Item
			setTimeout(function(){
				$('li.navitem a').append('<i class="fa fa-caret-right sidebarcarets"></i>');
			}, 150);
			
		} else {
			
			// Remove Class from body Tag
			$('body').removeClass('collapsed');
			
			// Sidebar
			$('.sidebarnavigation').animate({ width: '225px' }, animTiming);
			
			// Content Region
			$('.contentregionwrapper').animate({ paddingLeft: '225px' }, animTiming);
			
			// Remove Caret from Each Nav Item
			$('li.navitem i.sidebarcarets').remove();
			
		}
	});
	
	// Sidebar Click Event
	$('.navitem.navfdd').on('click', function(e){
		e.preventDefault();
		$('.navitem').removeClass('active');
		
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
		}
	});
	
	// Class Click Event
	$('.classitem').on('click', function(e){
		e.preventDefault();
		$('.classitem').removeClass('active');
		
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
		}
	});
	
	// Latest Recalls and Twitter Region
	$('.topinforegion').append(
		'<div class="expandhandle">' + 
			'<div class="expandhandlelbl">MORE</div>' + 
			'<div class="expandhandlearrow"></div>' + 
		'</div>');
	
	// Last Recalls and Twitter Region Click Event
	$('.expandhandle,.recallheader,.twitterheader').on('click', function(){
		
		var feedsHeightRecallTable 	= $('.top5info').innerHeight();
		var feedsHeightTwitter  	= $('.twitterfeed').innerHeight();
		
		console.log('RecallTable: ' + feedsHeightRecallTable + ' Twitter: ' + feedsHeightTwitter);
		
		if(!$('.topinforegion').hasClass('expanded')){
			
			// Add 'expanded' class
			$(this).closest('.topinforegion').addClass('expanded');
			
			// Add text LESS
			$(this).find('.expandhandlelbl').html('LESS');
			
			// Animate to Y height
			// $('.dataregion_top').animate({ height: '275px' }, 250);
			// Animate to Y height
			if(feedsHeightRecallTable >= feedsHeightTwitter){
				$('.dataregion_top').animate({ height: feedsHeightRecallTable + 125 }, 250);
			} else if(feedsHeightTwitter >= feedsHeightRecallTable) {
				$('.dataregion_top').animate({ height: feedsHeightTwitter + 125 }, 250);
			}
			
		}else{
			
			// Remove 'expanded' class
			$(this).closest('.topinforegion').removeClass('expanded');
			
			// Add text MORE
			$(this).find('.expandhandlelbl').html('MORE');
			
			// Animate back to resting state (135px) set in CSS
			$('.dataregion_top').animate({ height: '135px' }, 250);
		}
	});
	
	//  Get URL Query String Vars
	getUrlVars();
	
	// Field Icons
	var $fldIconsExist = $('div.formfld.icon');
	if ($fldIconsExist.length > 0){
		fieldIcons();
	}
	
	// Switch Sidebar based on Viewport
	switchSidebar();
	
	$(window).on('resize', function(){
		switchSidebar();
	});
	
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
  * Switch Sidebar Function
  * Description: This function switches the sidebar to an expanded or
  * collapsed state based on the viewport width.
  */
function switchSidebar(){
	var vWidth = window.innerWidth;
	var animTiming = 0;
	
	if(vWidth <= 800){
		if(!$('body').hasClass('collapsed')){
			
			// Add Class to body Tag
			$('body').addClass('collapsed');
			
			// Expand/Collapse Handle
			$('.mobilehandle').animate({ left: '50%', marginLeft: '-15px' }, animTiming);
			
			// Sidebar
			$('.sidebarnavigation').animate({ width: '75px' }, animTiming);
			$('.navsidebar').animate({ paddingLeft: '0', paddingRight: '0' }, animTiming);
			$('.navsidebar ul.prinavlist li img').animate({ paddingLeft: '7px' }, animTiming);
			
			// Content Region
			$('.contentregionwrapper').animate({ paddingLeft: '75px' }, animTiming);
			
			// Add Caret to Each Nav Item
			setTimeout(function(){
				$('li.navitem a').append('<i class="fa fa-caret-right sidebarcarets"></i>');
			}, 150);
			
		}
	} else {
		if($('body').hasClass('collapsed')){
			
			// Remove Class from body Tag
			$('body').removeClass('collapsed');
			
			// Expand/Collapse Handle
			$('.mobilehandle').animate({ left: '85%', marginLeft: '0' }, animTiming);
			
			// Sidebar
			$('.sidebarnavigation').animate({ width: '225px' }, animTiming);
			$('.navsidebar').animate({ paddingLeft: '15px', paddingRight: '15px' }, animTiming);
			$('.navsidebar ul.prinavlist li img').animate({ paddingLeft: '0' }, animTiming);
			
			// Content Region
			$('.contentregionwrapper').animate({ paddingLeft: '225px' }, animTiming);
			
			// Remove Caret from Each Nav Item
			$('li.navitem i.sidebarcarets').remove();
			
		}
	}
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
	
	// If Username is Present in <li> List
	var $usernameExists = $('ul.' + finalListSel + ' li.husername');
	if ($usernameExists.length > 0) {
		var usernameValue = $usernameExists.find('span').html();
		//console.log(usernameValue);
		$('div.' + mobileNavClassSel).append('<div class="mobileheaderusername">' + usernameValue + '</div>');
	}
}


/**
  * Get URL Query Strings
  * Description: Function used to grab all query string vars
  */
function getUrlVars(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
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









