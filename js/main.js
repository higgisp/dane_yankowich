$(document).ready(function() {
  var winHeight = $(window).height();
  $('.banner').css({
    'min-height': winHeight,
  });

  $(window).bind("load resize", function() {
    $('.banner').css({
      'min-height': winHeight,
    });
  });

  $("#nav-toggle").on('click', function() {
    $("#nav-toggle").toggleClass("active");
    $("#menu").slideToggle();
  });
});