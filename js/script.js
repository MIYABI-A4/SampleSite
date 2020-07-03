$(function(){

  $(".main-nav").hide();

  $(".navButton").click( function(){
    $(".navButton").toggleClass('isOpen');
    $(".main-nav").slideToggle();
  });

});
