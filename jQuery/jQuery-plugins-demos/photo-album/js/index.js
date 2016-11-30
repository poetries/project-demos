//定义图片列表数据
var images = {
	"风景":[
		"1.jpg",
		"2.jpg",
		"3.jpg",
		"4.jpg"
	]
};

//加载主题分类 jQuery实例扩展

$.fn.gallery = function(){
	
	var self = this;//获取该实例的调用对象
	var setimgs;//保存图片列表
	var data = [];//保存json图像信息数组
	
	//each对galley进行循环
	
	this.each(function(){
		var g = this;
		
		//定义load_sets方法 加载图片分类和缩略图
		g.load_sets = function(el){//el指代传入的ul标签
			//循环images数组
			$.each(images,function(key,value){
				//向ul中加入li
				$(el).append('<li><a id="'+key+'" href="#" title="' +key+'"</a><li>');
			});
			
			//查找每种图片的分类
			var sets = $(el).find("li a");
			
			//统一为每种图片的a增加事件处理代码
			$(sets).click(function(){
				var set = $(this).attr("id");
				g.setimgs = image[set];//根据id属性得到图片集数组
				$(g).find("#thumbs").html('');//清除缩略图子元素
				data = [];//重置图片数组
				g.load_thumbs($(g).find("#thumbs")[0],0);
				
				//加载缩略图 显示缩略图
				$(g).find("#loading").html("正在加载<strong>1</strong>of"+g.setimgs.length + ' 图片');
				
			});
			sets[0].click();//单击第一个相册分类以展开幻灯片播放效果
		}
		g.load_thumbs = function(el,index){
			//加载缩略 图 index 缩略图索引
			//向ul追加缩略图li
			$(el).append('<li><img id="' + index + '" src="img/thumb_"'+g.setimgs[index]+'" /></li>');
			
			//向Data数组添加JSON缩略图信息
			data.push({"src":"img/"+g.setimgs[index],"name":g.setimgs[index],"link":"#"});
			
			//在内存中构建一个img对象
			var tn = new Image();
			
			//调用jQuery的load方法异步加载缩略图
			$(tn).load(function(){
				var a = $($(el).find("li")[index]).find("img")[0];
				
				//获取图像
				$(a).append(this);//加载到image对象中
				
				//为li添加点击事件
				$(a).click(function(){
					var i = $(this).attr("id");//获取图片索引
					slider.slide(i);//调用slider的slide方法播放指定的图片
					return false;
				});
				
				//如果当前的索引值小于图片数组总长度
				if((index +1 ) < g.setimgs.length){
					//递归调用load_thumbs加载图像
					g.load_thumbs(el,(index+1));
					$(g).find("#loading").html('已成功加载<strong>'+g.setimgs.length+' 张图片</strong>');
					
					//此时调用slider的setPhotos播放JSON数组
					slider.setPhotos(data);
					slider.slide(0);//跳到第一张图片位置
				}
				
			});
			tn.src = 'img/thumb_' + g.setimgs[index];//指定图片的src属性
			
		}
		g.load_sets($(g).find("#sets")[0]);//页面初始化时 加载相册分类和缩略图
	});
}
