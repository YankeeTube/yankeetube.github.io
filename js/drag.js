$(document).ready(function(){
//    $(".title-bar").draggable({
//        containment : 'parent' // 부모요소 안에 종속
//    });
    $(".viewer").draggable({
          containment: 'parent', 
          scroll: false, 
          handle: '.viewer-title-bar',
    });
    $(".content").draggable({
          containment: 'parent', 
          scroll: false, 
          handle: '.title-bar',
    });
    $(".viewer-maximize").on("click",function(){
        $(this).parents("div.viewer").toggleClass("active");
        $(this).parents("div.viewer-title-bar").toggleClass("active");
        $("div.sub-content").toggleClass("active");
        $("div.tree").toggleClass("active");
    });
    $(".viewer-minimize").on("click",function(){
        $(".viewer").toggle('200');
//        $(".viewer-title-bar").toggle('300');
    });
    $(".viewer-title-bar").on("dblclick",function(){
        $(this).parents("div.viewer").toggleClass("active");
        $("div.sub-content").toggleClass("active");
        $("div.tree").toggleClass("active");
        $(this).toggleClass("active");
    });

    $(".maximize").on("click",function(){
        $(this).parents("div.content").toggleClass("active");
        $(this).parents("div.title-bar").toggleClass("active");
        $("div.sub-content").toggleClass("active");
        $("div.tree").toggleClass("active");
    });
    $(".minimize").on("click",function(){
        $(".content").toggle('200');
        $(".title-bar").toggle('300');
    });
    $(".title-bar").on("dblclick",function(){
        $(this).parents("div.content").toggleClass("active");
        $("div.sub-content").toggleClass("active");
        $("div.tree").toggleClass("active");
        $(this).toggleClass("active");
    });
    $(".tree > p").on("mouseenter", function(){
        $(this).children().css({"color" : "#FFFFFF"});
        $(this).children().addClass("fa-folder-open");
    }).on("mouseleave", function(){
        if ($(this).hasClass('active') == false){
            $(this).children().css({"color" : "#858c97;"});
            $(this).children().removeClass("fa-folder-open");
        }
    });
    $(".current-folder-content > div > div").on("mouseenter", function(){
        $(this).children('i').css({"color" : "#FFFFFF"});
        if ($(this).children('i').hasClass('fa-folder') == true){
            $(this).children('i').addClass("fa-folder-open");    
        }
        
    }).on("mouseleave", function(){
        if ($(this).hasClass('active') == false){
            $(this).children('i').css({"color" : "#5294e2;"});
            $(this).children('i').removeClass("fa-folder-open");
        }    
    });
});