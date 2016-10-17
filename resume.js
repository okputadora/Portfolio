//Wait till page is loaded so it can listen for click events
$(document).ready(function() {
  //scroll to home when home is clicked
  $("#btn1").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 500);
  });
  //scroll to projects
  $("#btn2").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 500);
  });
  //scroll to contact
  $("#btn3").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 500);
  });
});
