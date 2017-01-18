//登录注册
$("#login .content p.ti span").mouseover(function(){
	var _index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$("#login .content .LgRegCon .con").eq(_index).show().siblings().hide();
});
