$(document).ready(function(){
    setInterval(hideOverclass,100);
    $('.carousel').carousel({interval: 2000});
    
    $(".moreBtn").on("click",function(event){
        var title = $(".viewer-title-bar > div > p").text().replace(/ /gi, "").toLowerCase();
        var now_index = title_list.indexOf($(".viewer-title-bar > div > p").text().replace(/ /gi, "").toLowerCase());
        
       $(".overClass").css({"display":"block"});
//       $(".overClass").each(function(index,item){
//          if ( index == now_index){
//              $(item).css({"display":"block"});
//          }
//           else{
//               $(item).css({"display":"none"});
//           }
//       });
        event.preventDefault();
        $('.viewer-sub-content').animate({scrollTop:$(this).offset().top}, 1000);
    });
    $(".viewer, .viewer-title-bar").on("click",function(){
        viewerClick();
    });
    $(".content, .title-bar, .title-bar > div").on("click",function(){
        contentClick();
    });
    
    
    $("div.current-folder-content > div > div").on("click",function(){
        if ($(".viewer").css("display") == "none"){
            $(".viewer").addClass('opend');
            $(".viewer").fadeToggle("fast");
            $(".viewer-title-bar").children('div').children('i').attr('class',$(this).children('i').attr('class'));
            $(".viewer-title-bar").children('div').children('p').text($(this).children('p').text());
            var content = Number($(".content").css("z-index"));
            $(".viewer").css({"z-index":Number(content+1)});
        }
        
    });
});
function viewerClick(){
    var viewer = Number($(".viewer").css("z-index"));
    var content = Number($(".content").css("z-index"));
    if ($(".viewer").hasClass('opend') == true){
        $(".viewer").removeClass('opend');
    }
    if (viewer < content){
        $(".viewer").css({"z-index":Number(viewer)+Number(content - viewer)+1});
    }
    else if (viewer == content){
        $(".viewer").css({"z-index":Number(viewer)+1});
    }
}

function contentClick(){
    var viewer = Number($(".viewer").css("z-index"));
    var content = Number($(".content").css("z-index"));
    if ($(".viewer").hasClass('opend') == false){
        if (content < viewer){
            $(".content").css({"z-index":Number(content)+Number(viewer - content)+1});
        }
        else if (content == viewer){
            $(".content").css({"z-index":Number(content)+1});
        }
    }
}

function hideOverclass(){
    if ($(".viewer").css("display") == "none"){
        $(".overClass").css({"display":"none"});
    }
}