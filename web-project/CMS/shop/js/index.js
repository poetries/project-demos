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
$(window).scroll(function(){
	var _top = $(window).scrollTop();//获取浏览器窗口滚动高度
	var _height = $(".topMain").height();
	//document.title=_top;
	_top>_height?$("#nav").addClass("gd"):$("#nav").removeClass("gd");
});

//显示二级菜单内容
$("#nav ul li.first ol li").hover(function(){
	$(this).find(".moreMenu").fadeIn(300).parent().siblings().find(".moreMenu").hide();
},function(){
	$(this).find(".moreMenu").hide();
});

//banner HTML结构有问题 待改善

/*var _index = 0;
var oTimer = null;
var oLi = $("#banner .scroll a").size();

function oBtnNext(){
	_index++;

	if (_index==oLi)
	{
		_index=0;
	}
	oBtnDo();
}
function oBtnDo(){
	$("#banner .scroll a").css("left","0px").eq(_index).fadeIn(50).siblings().fadeOut(50);
	$("#banner ul.smallDot li").eq(_index).addClass("active").siblings().removeClass("active");
}

$("#banner a.prev").click(function(){//prev
	_index--;

	if (_index<0)
	{
		_index=oLi-1;
	}
	oBtnDo();

});

$("#banner a.next").click(function(){//next
	oBtnNext();
	oBtnDo();
});

$("#banner ul.smallDot li").mouseover(function(){
		
		if (_index!=$(this).index())
		{
			if (_index<$(this).index())
			{
				var oWidth=$("#banner .scroll a").width();
				$("#banner .scroll a").eq(_index).animate({left:-oWidth},function(){
					$(this).hide();
				}).end().eq($(this).index()).show().css("left",oWidth).animate({left:0});
				_index=$(this).index();
				$(this).addClass("active").siblings().removeClass("active");
			}
			else{
				var oWidth=$("#banner .scroll a").width();
				$("#banner .scroll a").eq(_index).animate({left:oWidth},function(){
					$(this).hide();
				}).end().eq($(this).index()).show().css("left",-oWidth).animate({left:0});
				_index=$(this).index();
				$(this).addClass("active").siblings().removeClass("active");
			}
		}
	});

//banner Timer

$("#banner .scroll").hover(function(){
	clearInterval(oTimer);
},function(){
	oTimer = setInterval(oBtnNext,3000);
});

oTimer = setInterval(oBtnNext,3000);
*/
