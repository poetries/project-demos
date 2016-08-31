//购物车

$("#mi-topbar .topbar-cart").hover(function(){
	$(this).find(".cart-menu").fadeIn(500);
},function(){
	$(this).find(".cart-menu").fadeOut(500);
});

//搜索框

$("#header .header-search form").find(".txt").focus(function(event) {
	$(this).parents("form").find(".show-list").fadeIn(400);
	$(this).parents("form").find(".border").removeClass("border").addClass('on');
	$(this).parents("form").find("p").hide();
	
}).blur(function(event) {
	/* Act on the event */
	$(this).parents("form").find(".show-list").fadeOut(400);
	$(this).parents("form").find(".on").removeClass("on").addClass("border");
	$(this).parents("form").find("p").show();
});

//隐藏的菜单

$("#header").find("ul li").hover(function() {
	$(this).parents("#header").find(".header-details ol li").eq($(this).index()).fadeIn(200).siblings().hide();
	$(this).parents("#header").addClass('on');
	$(this).parents("#header").find(".detail-bg").show();

},function(){
	$(this).parents("#header").find(".header-details ol li").fadeOut(200);
	$(this).parents("#header").removeClass('on');
	$(this).parents("#header").find(".detail-bg").hide();
});