// archive and store gallery

$(document).ready(function() {
  $(".product-thumbnail").click(function(){
    $(".active").removeClass("active");
    $(this).find(".thumb-wrap").addClass("active");
    $(".product-img .lazy" ).replaceWith($(".lazy", this).clone());
  });
});