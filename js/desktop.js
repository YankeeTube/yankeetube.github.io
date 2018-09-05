$(document).ready(function(){
    $(".desktop > div").on("click",function(){
       click_desktop($(this));
   });
    $(".tree > p").on("click",function(){
        click_leftmenu($(this));
    });
    $(".current-folder-content > div >div").on("click",function(){
        click_folder($(this));
    });
});

function disable_leftmenu(){
    $(".tree").each(function(){
       $(this).children().removeClass('active');
       $(this).children().children().css({"color" : "#858c97;"});
       $(this).children().children().removeClass("fa-folder-open");
    });
}

function click_desktop(item){
    disable_leftmenu();
    if (($(".content").css("display") == "none") && ($(".directory").hasClass('active') == false)){
        $(".content").fadeToggle('fast');
        $(".title-bar").fadeToggle('fast');
        $(".directory").addClass('active');
    }
    else if (($(".content").css("display") == "none") && ($(".directory").hasClass('active') == true)){
        $(".content").fadeToggle('fast');
        $(".title-bar").fadeToggle('fast');
    }
        
    
    $(".title-bar > div > p").text(item.children('p').text());
    var icon = ".tree > p:nth-child(" + Number(item.index() +1) + ") > i";
    var p = ".tree > p:nth-child(" + Number(item.index() +1) + ")";
    $(icon).css({"color" : "#FFFFFF"});
    $(icon).addClass("fa-folder-open");
    $(p).addClass("active");
    $(".current-folder-content").children().each(function(){
    if (item.index() == $(this).index()){
        $(this).show();
    }
    else{
        $(this).hide();
    }
  });
}

function click_leftmenu(item){
    $(item.parent().children()).each(function(){
        $(this).removeClass("active");
        $(this).children().css({"color" : "#858c97;"});
        $(this).children().removeClass("fa-folder-open");
    });
    
   click_same(item);
}

function click_folder(item){
    var flag = click_same(item);
    if (flag == true){
        $(".tree > p").each(function(){
            if ($(this).index() != item.index()){
                $(this).removeClass("active");
                $(this).children().css({"color" : "#858c97;"});
                $(this).children().removeClass("fa-folder-open");
            }
        });
    }
}

function click_same(item){
    var flag;
    var array = $('.tree > p').map(function(){return $.trim($(this).text())});
    if (array.get().indexOf(item.text().trim()) != -1){
        var title = $(".title-bar > div > p").text(item.text().trim());
        var icon = ".tree > p:nth-child(" + Number(item.index() +1) + ") > i";
        var p = ".tree > p:nth-child(" + Number(item.index() +1) + ")";
        $(icon).css({"color" : "#FFFFFF"});
        $(icon).addClass("fa-folder-open");
        $(p).addClass("active");
         $(".current-folder-content").children().each(function(){
            if (item.index() == $(this).index()){
                $(this).show();
            }
            else{
                $(this).hide();
            }
        });
    flag = true;
    }
    else{
        flag = false;
    }
    return flag;
    
}