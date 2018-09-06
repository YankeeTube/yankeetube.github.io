$(document).ready(function(){
    $(".directory").on("click",function(){
        if (($(".content").css("display") == "none") && ($(".directory").hasClass('active') == true)){
            $(".title-bar").fadeToggle('fast');
            $(".content").fadeToggle('fast');
        }
        else if ($(".tree > p").hasClass('active') == true){
            $(".content").fadeToggle('fast');
            $(".title-bar").fadeToggle('fast');
        }
        else{
            $(this).addClass("active");
            $(".content").fadeToggle('fast');
            $(".title-bar").fadeToggle('fast');
            $(".tree > p:nth-child(1)").addClass('active');
            $(".tree > p:nth-child(1) > i").css({"color":"#FFFFFF"});
        }
    });
    $(".viewer-close").on("click",function(){
//        $(".directory").toggleClass("active");
        $(".viewer").toggle('200');
//        $(".viewer-title-bar").toggle('300');
    });
    $(".close").on("click",function(){
        $(".directory").toggleClass("active");
        $(".content").toggle('200');
        $(".title-bar").toggle('300');
        $(".tree > p ").each(function(){
            $(this).removeClass("active");
            $(this).children().css({"color" : "#858c97;"});
            $(this).children().removeClass("fa-folder-open");
        });
    });
    
    $(".github-icon").on("click",function(){
       window.open("https://github.com/yankeetube", "_blank");
    });
    $(".tistory-icon").on("click",function(){
       window.open("https://gmyankee.tistory.com", "_blank");
    });
    $(".youtube-icon").on("click",function(){
       window.open("https://www.youtube.com/channel/UC9RsPwY9QfPDGD-IMEwLn3Q?view_as=subscriber", "_blank");
    });
    $(".gmail-icon").on("click",function(){
       window.open('mailto:subyankee@gmail.com');
    });
});
