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
