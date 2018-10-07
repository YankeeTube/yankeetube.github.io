buffer = false;
$(document).ready(function(){
    setInterval(pdf,1000);
    if (buffer == true){
        clearInterval(pdf);
    }
    
});

function pdf(){
    buffer = true;
    $(".plan_view").on("click",function(){
        $(".contentviewer").attr("src", "https://drive.google.com/file/d/1VFII8DD7Mo4h0zN8PKWxABIKHK5YNTo2/preview");
        $(".contentviewer").fadeToggle('slow');
        $(".pdfview").fadeToggle('slow');
    });
    $(".report_view").on("click", function(){ 
        $(".contentviewer").attr("src","https://drive.google.com/file/d/15qcp8XkKluaL-Dq15t07v6ll6owSDlsI/preview");
        $(".pdfview").fadeToggle('slow');
        $(".contentviewer").fadeToggle('slow');
    });
    $(".video_view").on("click", function(){
        $(".pdfview").fadeToggle('slow');
        $(".videoviewer").fadeToggle('slow');
    });
    $(".pdf-close").on("click",function(){
        $(".pdfview").hide('fast');
        $(".videoviewer").hide('fast');
        $(".contentviewer").hide('fast');
        buffer = false;
    });
}