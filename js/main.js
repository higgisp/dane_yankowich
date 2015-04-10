$(document).ready(function() {
  var winHeight = $(window).height();
  $('.home-banner').css({
    'min-height': winHeight,
  });

  $(window).bind("load resize", function() {
    $('.home-banner').css({
      'min-height': winHeight,
    });
  });

  $("#nav-toggle").on('click', function() {
    $("#nav-toggle").toggleClass("active");
    $("#menu").slideToggle();
  });

  $('#hello').click(function(event) {
    event.preventDefault();
    $.scrollTo($('.resume'), 500);
  });

  $('#work').click(function(event) {
    event.preventDefault();
    $.scrollTo($('.work'), 500);
  });

  $('#contact').click(function(event) {
    event.preventDefault();
    $.scrollTo($('footer'), 500);
  });

});

$(document).foundation({
  orbit: {
      animation: 'fade', // Sets the type of animation used for transitioning between slides, can also be 'fade'
      timer_speed: 9999999, // Sets the amount of time in milliseconds before transitioning a slide
      pause_on_hover: true, // Pauses on the current slide while hovering
      resume_on_mouseout: true, // If pause on hover is set to true, this setting resumes playback after mousing out of slide
      next_on_click: true, // Advance to next slide on click
      animation_speed: 1000, // Sets the amount of time in milliseconds the transition between slides will last
      stack_on_small: false,
      navigation_arrows: true,
      slide_number: false,
      bullets: true, // Does the slider have bullets visible?
      timer: false, // Does the slider have a timer visible?
      swipe: true,
    }
});