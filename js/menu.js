$(document).ready(function(){
    $(".directory").on("click",function(){
        if (($(".content").css("display") == "none") && ($(".directory").hasClass('active') == true)){
            $(".content").toggle('200');
            $(".title-bar").toggle('300');
        }
        else{
            $(this).toggleClass("active");
            $(".content").toggle('200');
            $(".title-bar").toggle('300');
        }
    });
    
    $(".close").on("click",function(){
        $(".directory").toggleClass("active");
        $(".content").toggle('200');
        $(".title-bar").toggle('300');
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
