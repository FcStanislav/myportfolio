$(document).ready(function(){

	$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.tabs_block').find('div.box').hide().eq($(this).index()).fadeIn(150);
	})
	
	$('ul.operations_tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.operations').find('div.operations_table').hide().eq($(this).index()).fadeIn(150);
	})
	
	$('.head_nav').on('click', function(){ 
		$('div.nav ul').toggleClass("active"); 
		return false;  
	});	
		
});


$(function(){
	$('input[placeholder], textarea[placeholder]').placeholder();
});