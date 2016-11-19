/**
 * Created by poetries on 2016/11/18.
 */

$(window).bind("scroll",function () {
    var navH = $(window).height()-400;
    var scrollTop = $(window).scrollTop();
    scrollTop > navH ? $("#g-topbar").addClass("on"):$("#g-topbar").removeClass("on");

});

$("#g-topbar .navbar-nav li").click(function(){
});
$(".team-member").owlCarousel({
    slideSpeed:200,
    paginationSpeed:400,
    items : 4,
    lazyLoad : true
});
var $container = $("#lightBox");
$container.isotope({
    filter:"*",
    animationOptions:{
        duration:750,
        easing:"linear"
    }
});
$("#cat a").click(function(){
    $("#cat a").removeClass("active");
    $(this).addClass("active");
    var selector = $(this).attr("data-filter");
    $container.isotope({
        filter:selector,
        animationOptions:{
            duration:750,
            easing:"linear"
        }
    });
    return false;
});