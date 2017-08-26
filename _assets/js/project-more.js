$(document).ready(function() {
  $(".js-more").click(function(){
    $(this).parent().css('display', 'none');
    $(this).parent().next('.project-content').css('display', 'block');
  });
});
