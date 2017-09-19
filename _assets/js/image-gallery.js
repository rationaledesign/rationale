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
    owl.trigger('next.owl.carousel', [300]);
  });

  // updates active item during movement
  owl.on('changed.owl.carousel', function(event) {
    $(".active").removeClass("active");
    thumbs.eq(event.item.index).addClass("active");
  });
  // forces lazy images after movement
  owl.on('translated.owl.carousel', function(event) {
    lazyinstance.update();
  });
  owl.on('dragged.owl.carousel', function(event) {
    lazyinstance.update();
  });
});
