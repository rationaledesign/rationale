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
  $(".owl-carousel").click(function(e){
    var pWidth = $(this).innerWidth();
    var pOffset = $(this).offset(); 
    var x = e.pageX - pOffset.left;

    if(pWidth/2 > x) owl.trigger('prev.owl.carousel', [300]);
    else owl.trigger('next.owl.carousel', [300]);
  });

  // updates active item after movement
  owl.on('changed.owl.carousel', function(event) {
    $(".active").removeClass("active");
    thumbs.eq(event.item.index).addClass("active");
  });
});
