//速度版本
function animateSpeed(obj,json,callback){
    console.log("速度版");
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var mark = true;
        for(var attr in json){
            var cur = null;
            if(attr == "opacity"){
                cur = getStyle(obj,attr)*100;
            }else{
                //如果没写 默认填充成0
                cur = parseInt(getStyle(obj,attr))||0;
            }
            var target = json[attr];
            var speed = (target - cur)*0.2;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
            if(cur != target){
                if(attr == "opacity"){
                    //IE opacity兼容问题
                    obj.style.filter = "alpha(opacity="+(cur+speed)+")";
                    obj.style[attr] = (cur + speed)/100;
                }else{
                    obj.style[attr] = cur + speed + "px";
                }
                mark = false;

            };
        }
        if(mark){
            clearInterval(obj.timer);
            callback && callback.call(obj);
        }
    },1000/30);

}
function getStyle(obj,attr){
    return getComputedStyle(obj)[attr]?getComputedStyle(obj)[attr]:obj.currentStyle[attr];
}
