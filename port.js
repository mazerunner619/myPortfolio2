
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


window.onscroll = function() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    $(".nav-item").css('color', 'rgba(0, 0, 0, 0.7)');
    $(".navbar-brand").css('color', 'black');
    document.getElementById("navbar").style.background = "rgba(0,255,255,0.837)";
  } else {
    $(".nav-item").css('color', 'rgba(255,255,255,0.6)');
    $(".navbar-brand").css('color', 'white');
    document.getElementById("navbar").style.background = "none";
  }
}

var i=0;

$("#tbtn").click(function(){
  if(i == 0){
    $(".navbar").css('margin-bottom', '-1%');
    i=1;
  }
  else{
    $(".navbar").css('margin-bottom', '-12%');
    i=0;
  }
  
});

$(document).ready(function(){

    setTimeout(() => {
      $(".cover h1").slideDown();
    }, 1200);

    setTimeout(() => {
      $(".cover p").slideDown();
    }, 1000);

  });

