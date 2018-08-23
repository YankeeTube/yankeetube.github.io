$(document).ready(function(){
//    $(".title-bar").draggable({
//        containment : 'parent' // 부모요소 안에 종속
//    });
    $(".content").draggable({
          containment: 'window', 
          scroll: false, 
          handle: '.title-bar' 
    });
});