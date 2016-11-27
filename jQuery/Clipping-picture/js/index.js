//调用切割方法
$("#cropbox").cropper({
    aspectRatio:1,
    onChange:showPreview,
    onSelect:showPreview
});
//自定义提交切割数据时的检测函数
function checkCoords(){
  if (parseInt($("#w").val())) {
    return true;
  }
  alert("请选择一个区域后，点击确定按钮");
  return false;
}
//根据预览图片的大小调用预览函数

function showPreview(){
  if (parseInt(coords.w)>0) {
      imgPrev(coords,"#img100",100);
      imgPrev(coords,"#img80",80);
      imgPrev(coords,"#img60",60);
  }
  //获取所选择区域的坐标与宽高
  $("#x").val(coords.x);
  $("#y").val(coords.y);
  $("#w").val(coords.w);
  $("#h").val(coords.h);
}

//自定义所选择区域的图片预览函数
function imgPrev(coords,obj,w){
    var rx = w/coords.w;
    var ry = w/coords.h;
    $(obj).css({
      width:Math.round(rx * 504) + "px",
      height:Math.round(ry * 504) + "px",
      marginLeft:"-"+Math.round(rx * coords.x) + "px",
      marginTop:"-"+Math.round(ry * coords.y) + "px"
    });
}
