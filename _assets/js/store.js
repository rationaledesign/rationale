// archive and store gallery

$(document).ready(function() {
  $(".gallery-thumbnail").click(function(){
    $(".active").removeClass("active");
    $(this).addClass("active");
    $(".gallery-img .lazy" ).replaceWith($(".lazy", this).clone());
  });
});
