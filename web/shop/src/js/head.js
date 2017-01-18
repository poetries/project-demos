//头部广告效果
$("#topbar img.close").click(function(){
	$("#topbar").slideUp();
});

//导航滑动效果
$("#nav ul li.item").not(".first,.last").hover(function(){
	var _left = $(this).position().left;//获取 li与他相对定位元素 ul左边的距离
	var _width = $(this).width();//获取li的宽度
	//document.title = _left+"--"+_width;

	$("#nav ul li.last").css("width",_width).show().stop().animate({left:_left},200);
},function(){
	$("#nav ul li.last").hide();
});

//吸顶盒导航
/*浏览器窗品的滚动事件 scroll*/
// $(window).scroll(function(){
// 	var _top = $(window).scrollTop();//获取浏览器窗口滚动高度
// 	var _height = $(".topMain").height();
// 	//document.title=_top;
// 	_top>_height?$("#nav").addClass("gd"):$("#nav").removeClass("gd");
// });
