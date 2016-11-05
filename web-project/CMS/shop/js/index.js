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

//登录注册

$("#login .content p.ti span").mouseover(function(){
	var _index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$("#login .content .LgRegCon .con").eq(_index).show().siblings().hide();
});

//宝贝详情页

$("#goods .goodsDetails ").find("ul.ti li").mouseover(function(){
	var _index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(this).parents(".goodsDetails").find(".goodsDetailsCon .com").eq(_index).show().siblings().hide();
});

//商城放大镜效果

$("#goods .goodsCon .goodsL .simg span.shade").hover(function(){
	$("#goods .goodsCon .goodsL .simg span.move,.bimg").show();
},function(){
	$("#goods .goodsCon .goodsL .simg span.move,.bimg").hide();
});

//当鼠标在遮罩层上滑动时 动态获取小滑块的位置
$("#goods .goodsCon .goodsL .simg span.shade").mousemove(function(e){
	//获取鼠标与浏览器的坐标
	var x = e.clientX; //鼠标与浏览器窗口左边的距离
	var y = e.clientY;
	//document.title = x+"|"+y;
	
	//遮罩层与浏览器窗口的距离
	var l = $(this).offset().left;
	var t = $(this).offset().top;
	//document.title = l+"|"+t;
	
	//小方块与simg盒子的距离=鼠标与浏览器的距离 - 遮罩层与浏览器窗口的距离-小方块宽度的一半
	var w = $("#goods .goodsCon .goodsL .simg span.move").width()/2;
	var h = $("#goods .goodsCon .goodsL .simg span.move").height()/2;
	var _left = x - l - w;
	var _top = y - t - h;
	
	//边缘检测 
	//小滑块能滑动的最大高度与最大宽度
	var maxW = $(this).height()-h*2-2;
	var maxH = $(this).width()-w*2;
	if(_top<0){
		_top = 0;
	}else if(_top > maxW){
		_top = maxW;
	}
	
	if(_left<3){
		_left = 3;
	}else if(_left > maxH){
		_left = maxH;
	}
	
	//document.title = _left+"|"+_top;
	$("#goods .goodsCon .goodsL .simg span.move").css({
		"left":_left,
		"top":_top
	});
	
	
	//滑块 滑动宽度和高度的比例
	
	var wb1 = _left/maxW;//滑动的宽度和总的能滑动的宽度的比例
	var wh1 = _top/maxH;//滑动的高度和总的能滑动的高度的比例
	
	
	//大图的宽度和高度
	var bigW = $("#goods .goodsCon .goodsL .bimg img").width();
	var bigH = $("#goods .goodsCon .goodsL .bimg img").height();
	
	//盒子的宽度和高度
	var boxW = $("#goods .goodsCon .goodsL .bimg").width();
	var boxH = $("#goods .goodsCon .goodsL .bimg").height();
	
	//大图要移动的距离=（大图的宽度-盒子的宽度）*滑动的比例 
	var bigLeft = (bigW -boxW)* wb1; //大图往左边移动的距离
	var bigTop = (bigH-boxH) * wh1; 
	
	$("#goods .goodsCon .goodsL .bimg img").css({
		"left":-bigLeft,
		"top":-bigTop
	});
});

//放大镜按钮

$("#goods .goodsCon .goodsL .btn img").mouseover(function(){
	$(this).addClass("active").siblings().removeClass("active");
	
	//获取小图片对应的大图地址
	var bimg = $(this).attr("dataSrc");
	$("#goods .goodsCon .goodsL .simg img,.goodsL .bimg img").attr("src",bimg);

});
