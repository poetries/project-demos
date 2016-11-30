/**
 * 类级别的插件实际上就是在jQuery命名空间内部添加函数，一般用于功能性的函数而非UI级别的函数
 * 比如：$.trim() $.ajax() 都属于功能性函数
 * 他们是对应jQuery类本身的扩充，类似于在jQuery中添加全局函数，因此也称全局函数插件
 * 
 * 全局函数使用 $.extend()
 * 调用时只需 $.modalWindow()调用
 */

;(function($){
	$.extend({
		"modalwindow":function(options){
			//设置属性
			options = $.extend({
				url:"http:blog.poetries.top",
				dialogHeight: "300px",
				dialogWidth: "500px",
				dialogLeft: "100px",
				dialogTop: "50px",
				help: "no",
				resizable: "no",
				scroll: "no"
			},options);
	//弹出窗口
	
	var retVal = window.showModalDialog(options.url,"dialogHeight:"+options.dialogHeight+";dialogWidth:"+options.dialogWidth+";dialogLeft:"+options.dialogLeft+";dialogTop:"+options.dialogTop+";help:"+options.help+";resizable:"+options.resizable+";scroll:"+options.scroll+";");
	
	return retVal;//返回窗口的引用值
	}
});
})(jQuery);
