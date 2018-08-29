$(document).ready(function(){
    $(".desktop > div").on("click",function(){
       click_desktop($(this));
   });
    $(".tree > p").on("click",function(){
        click_leftmenu($(this));
    });
//   $($(".desktop > div:nth-child(1)")[0]).on("click",function(){
//       click_Project();
//   });
});

function click_desktop(item){
    console.log(item.index());
    $(".directory").toggleClass("active");
    $(".content").fadeToggle('fast');
    $(".title-bar").fadeToggle('fast');
    $(".title-bar > div > p").text(item.children('p').text());
    var icon = ".tree > p:nth-child(" + Number(item.index() +1) + ") > i";
    var p = ".tree > p:nth-child(" + Number(item.index() +1) + ")";
    $(icon).css({"color" : "#FFFFFF"});
    $(icon).addClass("fa-folder-open");
    $(p).addClass("active");
}

function click_leftmenu(item){
    $(item.parent().children()).each(function(){
        $(this).removeClass("active");
        $(this).children().css({"color" : "#858c97;"});
        $(this).children().removeClass("fa-folder-open");
    });
    $(".title-bar > div > p").text(item.text());
    var icon = ".tree > p:nth-child(" + Number(item.index() +1) + ") > i";
    var p = ".tree > p:nth-child(" + Number(item.index() +1) + ")";
    $(icon).css({"color" : "#FFFFFF"});
    $(icon).addClass("fa-folder-open");
    $(p).addClass("active");
}