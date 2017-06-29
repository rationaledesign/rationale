function checkvisible( elm ) {
  // console.log($(elm).offset());
    var vpH = $(window).height() + 300, // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top;
    // console.log(vpH, st, y);
    return (y < (vpH + st));
}

var scrollTimeout;

$(window).scroll(function () {
  if (scrollTimeout) {
      // clear the timeout, if one is pending
      clearTimeout(scrollTimeout);
      scrollTimeout = null;
  }
  scrollTimeout = setTimeout(scrollHandler, 15);
});

scrollHandler = function () {
  activateVisiblePicturefills();
  // console.log('active')
};

$('document').ready(function() {
  activateVisiblePicturefills();
});

// $window.on('resize scroll touchmove', activateVisiblePicturefills);

function activateVisiblePicturefills() {

  var redraw = false;

  $('.lazy').each(function(i, elm) {
    var needsToDisplay = checkvisible(elm) && !$(elm).attr('data-picture');
    if (needsToDisplay) {
      $(elm).attr('data-picture', '');
      $(elm).delay(500).queue(function(){
        $(this).addClass('loaded').clearQueue();
      });
      redraw = true;
    }
  });

  window.picturefill();
}

