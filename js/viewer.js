$(document).ready(function(){
    $(".viewer").on("click",function(){
        var viewer = $(".viewer").css("z-index");
        var content = $(".content").css("z-index");
        if (viewer < content){
            $(".viewer").css({"z-index":Number(viewer)+1});
        }
        else if (viewer == content){
            $(".viewer").css({"z-index":Number(viewer)+1});
        }
        else{
            $(".viewer").css({"z-index":Number(viewer)-1});
        }
    });
    $(".content").on("click",function(){
        var viewer = $(".viewer").css("z-index");
        var content = $(".content").css("z-index");
        if (content < viewer){
            $(".content").css({"z-index":Number(content)+1});
        }
        else if (content == viewer){
            $(".content").css({"z-index":Number(content)+1});
        }
        else{
            $(".content").css({"z-index":Number(content)-1});
        }
    });
    
    
    $("div.current-folder-content > div > div").on("click",function(){
        if ($(".viewer").css("display") == "none"){
            $(".viewer").fadeToggle("fast");
            $(".viewer-title-bar").children('div').children('i').attr('class',$(this).children('i').attr('class'));
            $(".viewer-title-bar").children('div').children('p').text($(this).children('p').text());
        }
        
    });
});