;
// 锚点滑动
  $(function(){
    $("#LSZperson").click(function(){
      $("html,body").animate(
        {scrollTop:$("#person").offset().top},500);
        return false;
    }); 
    $("#LSZstory").click(function(){
      $("html,body").animate(
        {scrollTop:$("#story").offset().top},700);
        return false;
    });
    $("#LSZmaterial").click(function(){
      $("html,body").animate(
        {scrollTop:$("#material").offset().top},900);
        return false;
    }); 
    $("#backtop").click(function(){
      $("html,body").animate(
        {scrollTop:0},500);
    });
    $('#backtop').fadeOut(1);


    // 滑动事件

    $(window).scroll(function(){
      //注意下面几个变量不能写在此函数外，因为要求是读取每次滚动事件触发时的值，若写在函数外，则是页面加载（刷新）时的静态值。
      var heightP=$('#person').offset().top;
      var heightS=$('#story').offset().top;
      var heightM=$('#material').offset().top;
      var scrollTop=$(window).scrollTop();
      var clientH=$(window).height();
      var scrollTop=$(window).scrollTop();
      if (scrollTop>heightP-clientH&&scrollTop<heightP+160) {
        $(".person_box_top").fadeIn();
      }
      else{
        $(".person_box_top").fadeOut();
      };
      if (scrollTop>heightS-clientH&&scrollTop<heightS+160) {
        $(".story_box_top").fadeIn();
      }
      else{
        $(".story_box_top").fadeOut();
      };
      if (scrollTop>heightM-clientH&&scrollTop<heightM+160) {
        $(".material_box_top").fadeIn();
      }
      else{
        $(".material_box_top").fadeOut();
      };
      
      if (scrollTop==0) {
        $(".person_box_top").fadeOut(1);
        $(".story_box_top").fadeOut(1);
        $(".material_box_top").fadeOut(1);
      };
      
      if (scrollTop>clientH) {
        $('#backtop').fadeIn();
      }else{
        $('#backtop').fadeOut();
      };
    })
  });

  // tab切换
window.onload=function(){
  function tabFun(obj){
    var contents=document.getElementsByClassName('article_tab')[obj].getElementsByClassName('tab');
    var subtabs=document.getElementsByClassName('subtab')[obj].getElementsByTagName('li');
    // if (contents.length!=subtabs.length) {return};
    for (var i = 0; i < subtabs.length-1; i++) {
      subtabs[i].id=i+5*obj;
      subtabs[i].onclick=function(){
        for (var j = 1; j < subtabs.length; j++) {
          subtabs[j-1].className='';
          contents[j-1].style.display='none';
          subtabs[j-1].innerHTML='<a href="javascript:;">'+j+'</a>';
        };
        this.className='select';
        this.innerHTML='<a href="javascript:;">&ensp;</a>';
        contents[this.id-5*obj].style.display='block';
      }
    }    
  }
  tabFun(0);
  tabFun(1);
  tabFun(2);
// 总感觉这样封装函数不好
}
