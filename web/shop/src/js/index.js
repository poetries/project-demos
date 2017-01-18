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
