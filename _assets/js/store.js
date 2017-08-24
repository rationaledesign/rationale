// archive and store gallery

$(document).ready(function() {
  $(".gallery-thumbnail").click(function(){
    $(".active").removeClass("active");
    $(this).find(".thumb-wrap").addClass("active");
    $(".gallery-img .lazy" ).replaceWith($(".lazy", this).clone());
  });
});
