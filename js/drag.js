$(document).ready(function(){
//    $(".title-bar").draggable({
//        containment : 'parent' // 부모요소 안에 종속
//    });
    $(".content").draggable({
          containment: 'parent', 
          scroll: false, 
          handle: '.title-bar',
    });
    $(".maximize").on("click",function(){
       $(this).parents("div.content").toggleClass("active");
       $(this).parents("div.title-bar").toggleClass("active");
    });
    $(".minimize").on("click",function(){
        $(".content").toggle('200');
        $(".title-bar").toggle('300');
    });
    $(".title-bar").on("dblclick",function(){
        $(this).parents("div.content").toggleClass("active");
        $(this).toggleClass("active");
    });
});