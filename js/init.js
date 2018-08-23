$(document).ready(function(){
   d = 500;
   $.each($(".init"),function(index,item){
       d += 150;
       $(item).delay(d).fadeIn(100);
}); 
    if (location.pathname == '/index.html'){
        setTimeout(function(){
            window.location.href='login.html';
        },7000);
    }
});