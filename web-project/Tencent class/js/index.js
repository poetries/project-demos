$(function(){
	//weixinICON
	var $button = $("#banner div.content div.nav-right-board div.button");
	$button.mouseover(function(){
		$(this).find("img",$(this)).show();
	});
	$button.mouseout(function(){
		$(this).find("img",$(this)).hide();
	});

	//hot-course-tab
	$("div.content div.course-nav ul.course-type li").mouseover(function(){
		$(this).addClass("curr").siblings().removeClass("curr");
		$($("a",$(this)).attr("for")).addClass("on").siblings().removeClass("on");
	});
});