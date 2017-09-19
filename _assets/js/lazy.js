var lazyinstance;

$('document').ready(function() {
  // set picture fills
  var $lazyconts = $('.lazycont');
  $lazyconts.attr('data-picture', '');
  window.picturefill();

  // set filled images as .lazy
  var $lazyimages = $('.lazycont img');
  $lazyimages.addClass("lazy")

  // run lazyload
  lazyinstance = $(".lazy").lazy({
    visibleOnly: true,
    chainable: false,
    afterLoad: function(element) {
      element.addClass("loaded")
    }
  });

  var resizeTimeout;
  $(window).bind("resize",function(event){
    resizeTimeout = setTimeout(function () {
      $(".lazy").each(function() {
        if ($(this).attr("src") != $(this).attr("data-src")) {
          $(this).attr("src", $(this).attr("data-src"))
          lazyinstance.addItems($(this));
          lazyinstance.loadAll();
        }
      });
    }, 100);
  });

});