;(function($){
	$.fn.extend({
		"border":function(options){
			//设置属性
			options = $.extend({//对传入的options与现有的属性进行合并
				//默认定义的参数
				width:"1px",
				line:"solid",
				color:"#f00"
			},options);
			this.css("border",options.width+' '+options.line+' '+options.color);
			return this;//返回当前选择器选中的对象列表
	
		}
	});
})(jQuery);
