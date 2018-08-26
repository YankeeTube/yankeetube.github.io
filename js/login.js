function today(){
    var week = new Array("월", "화", "수", "목", "금", "토", "일");
    var today = new Date();
    return week[today.getDay()];
}

function time(){
    var today = new Date();
    return today.getHours() +":"+ today.getMinutes() +":"+ today.getSeconds();
}
function headerChange(){
    $(".timeSequence").text(today() + " " + time());
}

function volume_Control(){
    $(".sound").toggleClass('active');
    if ($(".sound").hasClass("active") == true){
        $(".overVolume").addClass("active");
        $(".volume-control-access").fadeIn(400).delay(400);
        $(".volume-control-access").fadeOut(400);
    }
    else{
        $(".overVolume").removeClass("active");
        $(".volume-control-access").fadeIn(400).delay(400);
        $(".volume-control-access").fadeOut(400);
    }
}

$(document).ready(function(){
    setInterval(headerChange, 1000);
    $(".sound").click(function(){
       volume_Control(); 
    });
    $(".power").click(function(){
        $(".power-control").fadeToggle();
    });
    $(".power-img").click(function(){
       alert("Shudown now ...");
        window.location.href='/logoff.html';
    });
    $(".login-form").click(function(){
        location.href="/home.html";
    })
});