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
	var y=e.clientY+$(window).scrollTop();//鼠标与浏览器窗口上面距离
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
	var maxH = $(this).height()-h*2-2;
	var maxW = $(this).width()-w*2;
	if(_top<0){
		_top = 0;
	}else if(_top > maxH){
		_top = maxH;
	}

	if(_left<0){
		_left = 0;
	}else if(_left > maxW){
		_left = maxW;
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
