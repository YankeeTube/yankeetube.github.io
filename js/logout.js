$(document).ready(function(){
   $("#reboot").submit(function(){
      if ($(".restart").val() == 'startx'){
          window.location.href='index.html'
      }
      else if($(".restart").val() == 'clear'){
          $(".init").remove();
          $(".userCommand").remove();
          $(".warning").remove();
          $(".restart").val('');
      }
      else{
           $("#notify").before("<p class='userCommand'>root@yankee~ $: " + $(".restart").val() + "</p>");
           $("#notify").before("<p class='warning'>bash: '" + $(".restart").val() + "' command not found.");
           $(".restart").val('');
       }
       return false;
   });
});