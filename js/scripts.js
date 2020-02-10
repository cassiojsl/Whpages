$(window).scroll(function() {
    var scroll = $(window).scrollTop();
   $("#container-orc").css("background-position", "0%" + (scroll / -1.4) + "px");
   $(".inicio-bg").css("background-position", "0%" + (scroll / -2.3) + "px");
   if (scroll >= 1){
    $('nav').css('box-shadow','0px 1px 5px rgba(0, 0, 0, 0.658)');
   }
   else{
    $('nav').css('box-shadow','none');
   }
   
  });



