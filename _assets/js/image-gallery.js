// Image gallery js

$(document).ready(function() {
  var owl = $(".owl-carousel");
  var thumbs = $(".gallery-thumbnail");

  owl.owlCarousel({
    items: 1,
    dots: false
  });

  $(".gallery-thumbnail").click(function(){
    var target = $(this).data("target") - 1;
    owl.trigger('to.owl.carousel', [target, 300]);
  });

  // updates active item after movement
  owl.on('changed.owl.carousel', function(event) {
    $(".active").removeClass("active");
    thumbs.eq(event.item.index).addClass("active");
  });
});
