$(document).ready(function(){
    $(".directory").on("click",function(){
        if (($(".content").css("display") == "none") && ($(".directory").hasClass('active') == true)){
            $(".content").fadeToggle('fast');
            $(".title-bar").fadeToggle('fast');
            $(".title-bar > div > p").text("Desktop");
        }
        else{
            $(this).toggleClass("active");
            $(".content").fadeToggle('fast');
            $(".title-bar").fadeToggle('fast');
            $(".title-bar > div > p").text("Desktop");
        }
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
