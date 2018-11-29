$(document).ready(function(){
    $(document).on("click",".plan_view",function(){
        console.log("TEST");
        $(".contentviewer").attr("src", "https://drive.google.com/file/d/1VFII8DD7Mo4h0zN8PKWxABIKHK5YNTo2/preview");
        $(".contentviewer").fadeToggle('fast');
        $(".pdfview").fadeToggle('fast');
    });
    $(document).on("click",".report_view", function(){
        $(".contentviewer").attr("src","https://drive.google.com/file/d/15qcp8XkKluaL-Dq15t07v6ll6owSDlsI/preview");
        $(".pdfview").fadeToggle('slow');
        $(".contentviewer").fadeToggle('slow');
    });
    $(document).on("click",".video_view", function(){
        $(".pdfview").fadeToggle('slow');
        $(".videoviewer").fadeToggle('slow');
    });
    $(document).on("click",".pdf-close",function(){
        $(".pdfview").hide('fast');
        $(".videoviewer").hide('fast');
        $(".contentviewer").hide('fast');
    });
});