$(function(){
	var $button = $("#banner div.content div.nav-right-board div.button");
	$button.mouseover(function(){
		$(this).find("img",$(this)).show();
	});
	$button.mouseout(function(){
		$(this).find("img",$(this)).hide();
	});
});