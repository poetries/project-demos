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
/*$(window).scroll(function(){
	var _top = $(window).scrollTop();//获取浏览器窗口滚动高度
	var _height = $(".topMain").height();
	//document.title=_top;
	_top>_height?$("#nav").addClass("gd"):$("#nav").removeClass("gd");
});*/

//显示二级菜单内容
$("#banner ol li").hover(function(){
	$(this).addClass("hover");
	//当前 li与Menu上面的距离
	var _top=$(this).position().top; //获取li与他相对定位元素上面的距离 top值
	var _height=$(this).find(".moreNav").height()/3;
	if(_top>_height){
		if($(this).index()==4 || $(this).index()==5){
			$(this).find(".moreNav").css("top",-(_height*3-68));
		}else{
			$(this).find(".moreNav").css("top",-_height); //重新给.moreNav赋值
		}
	}
},function(){
	$(this).removeClass("hover");
});


//轮播图特效

var _index = 0;
var oTimer = null;
var oLi = $("#banner .flash ul.scroll li").size();

function oBtnNext(){
	_index++;

	if (_index==oLi)
	{
		_index=0;
	}
	oBtnDo();
}
function oBtnDo(){
	$("#banner .flash ul.scroll li").css("left","0px").eq(_index).fadeIn(50).siblings().fadeOut(50);
	$("#banner ul.smallDot li").eq(_index).addClass("active").siblings().removeClass("active");
}

$("#banner .PartCon a.prev").click(function(){//prev
	_index--;

	if (_index<0)
	{
		_index=oLi-1;
	}
	oBtnDo();

});

$("#banner .PartCon a.next").click(function(){//next
	oBtnNext();
	oBtnDo();
});

$("#banner ul.smallDot li").mouseover(function(){
		
		if (_index!=$(this).index())
		{
			if (_index<$(this).index())
			{
				var oWidth=$("#banner .flash ul.scroll li").width();
				$("#banner .flash ul.scroll li").eq(_index).animate({left:-oWidth},function(){
					$(this).hide();
				}).end().eq($(this).index()).show().css("left",oWidth).animate({left:0});
				_index=$(this).index();
				$(this).addClass("active").siblings().removeClass("active");
			}
			else{
				var oWidth=$("#banner .flash ul.scroll li").width();
				$("#banner .flash ul.scroll li").eq(_index).animate({left:oWidth},function(){
					$(this).hide();
				}).end().eq($(this).index()).show().css("left",-oWidth).animate({left:0});
				_index=$(this).index();
				$(this).addClass("active").siblings().removeClass("active");
			}
		}
	});

//banner Timer

$("#banner .flash").hover(function(){
	clearInterval(oTimer);
},function(){
	oTimer = setInterval(oBtnNext,2000);
});

oTimer = setInterval(oBtnNext,2000);

//按扭显示隐藏
$("#banner").hover(function(){
	$(this).find("a.btn").fadeIn(200);
},function(){
	$(this).find("a.btn").fadeOut(200);
});


// 推荐 天天低价
$("#topEvent .topList .topList-l ").find("p a").click(function(){
	var _index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$("#topEvent .topList .topList-l .con").eq(_index).fadeIn(300).siblings().fadeOut(300);
});

$("#topEvent .topList .topList-r p.ti a ").click(function(){
	var _index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$("#topEvent .topList .topList-r-recommend .con").eq(_index).fadeIn(300).siblings().fadeOut(300);
});

// 鲜花布局

$("#flower .flower ul.flowerNav li").not(".first").mouseover(function(){

	var _index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$("#flower .flower .flowerCon .flowerR ul.flowerList").eq(_index).fadeIn(400).siblings().fadeOut(400);
});

//手风琴效果

$("#flower .flower .flowerCon .flowerL li").mouseover(function(){

	var _index = $(this).index();
	$(this).addClass('active').siblings().removeClass('active');
	$(this).find("h3,p").addClass("active").end().siblings().find("h3,p").removeClass("active");
	
});


//个性定制
/*var _index = 0;
var oTimer = null;
var oLi = $("#specific .parCon .parL .imgList ul li").size();

function oBtnNext(){
	_index++;

	if (_index==oLi)
	{
		_index=0;
	}
	oBtnDo();
}
function oBtnDo(){
	$("#specific .parCon .parL .imgList ul li").css("left","0px").eq(_index).fadeIn(200).siblings().fadeOut(200);
}

$("#specific .parCon .parL a.prev").click(function(){//prev
	_index--;

	if (_index<0)
	{
		_index=oLi-1;
	}
	oBtnDo();

});

$("#specific .parCon .parL a.next").click(function(){//next
	oBtnNext();
	oBtnDo();
});


$("#specific .parCon .parL").hover(function(){
	clearInterval(oTimer);
},function(){
	oTimer = setInterval(oBtnNext,4000);
});*/

// 个性定制 右
$("#specific .parCon .parM ul li ").not(".last").mouseover(function(){
	var _index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$("#specific .parCon .parR ul.con").eq(_index).fadeIn(300).siblings().fadeOut(300);
});
$("#gift .parCon .parM ul li ").not(".last").mouseover(function(){
	var _index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$("#gift .parCon .parR ul.con").eq(_index).fadeIn(300).siblings().fadeOut(300);
});

