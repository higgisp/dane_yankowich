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
});
