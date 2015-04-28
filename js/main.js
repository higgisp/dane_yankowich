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

  $('.tile')
    .on("touchstart", function (e) {
      this.hover();
    }).on("touchend", function (e) {
      this.unbind();
  });

  $(document).foundation({
    orbit: {
      animation: 'slide', // Sets the type of animation used for transitioning between slides, can also be 'fade'
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


  //slideshow style interval
  var autoSwap = setInterval( swap,999999999);

  //pause slideshow and reinstantiate on mouseout
  $('ul, span').hover(
    function () {
      clearInterval(autoSwap);
  },
    function () {
     autoSwap = setInterval( swap,3500);
  });

  //global variables
  var items = [];
  var startItem = 1;
  var position = 0;
  var itemCount = $('.carousel li.items').length;
  var leftpos = itemCount;
  var resetCount = itemCount;

  //unused: gather text inside items class
  $('li.items').each(function(index) {
      items[index] = $(this).text();
  });

  //swap images function
  function swap(action) {
    var direction = action;

    //moving carousel backwards
    if(direction == 'counter-clockwise') {
      var leftitem = $('.left-pos').attr('id') - 1;
      if(leftitem == 0) {
        leftitem = itemCount;
      }

      $('.right-pos').removeClass('right-pos').addClass('back-pos');
      $('.main-pos').removeClass('main-pos').addClass('right-pos');
      $('.left-pos').removeClass('left-pos').addClass('main-pos');
      $('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');

      startItem--;
      if(startItem < 1) {
        startItem = itemCount;
      }
    }

    //moving carousel forward
    if(direction == 'clockwise' || direction == '' || direction == null ) {
      function pos(positionvalue) {
        if(positionvalue != 'leftposition') {
          //increment image list id
          position++;

          //if final result is greater than image count, reset position.
          if((startItem+position) > resetCount) {
            position = 1-startItem;
          }
        }

        //setting the left positioned item
        if(positionvalue == 'leftposition') {
          //left positioned image should always be one left than main positioned image.
          position = startItem - 1;

          //reset last image in list to left position if first image is in main position
          if(position < 1) {
            position = itemCount;
          }
        }

        return position;
      }

     $('#'+ startItem +'').removeClass('main-pos').addClass('left-pos');
     $('#'+ (startItem+pos()) +'').removeClass('right-pos').addClass('main-pos');
     $('#'+ (startItem+pos()) +'').removeClass('back-pos').addClass('right-pos');
     $('#'+ pos('leftposition') +'').removeClass('left-pos').addClass('back-pos');

      startItem++;
      position=0;
      if(startItem > itemCount) {
        startItem = 1;
      }
    }
  }

  //next button click function
  $('#next').click(function() {
    swap('clockwise');
  });

  //prev button click function
  $('#prev').click(function() {
    swap('counter-clockwise');
  });

  //if any visible items are clicked
  $('li').click(function() {
    if($(this).attr('class') == 'items left-pos') {
       swap('counter-clockwise');
    }
    else {
      swap('clockwise');
    }
  });


});

