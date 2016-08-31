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
	
}).blur(function(event) {
	/* Act on the event */
	$(this).parents("form").find(".show-list").fadeOut(400);
	$(this).parents("form").find(".on").removeClass("on").addClass("border");
	
});

//隐藏的菜单

// $("#header").find("ul li").hover(function() {
// 	$(this).parents("#header").find(".header-details ol li dl").show();

// },function(){
// 	$(this).parents("#header").find(".header-details ol li dl").hide();
// });