$(document).ready(function() {
  $(".js-more").click(function(){
    var parent = $(this).parent().parent();
    parent.css('display', 'none');
    parent.next('.project-content').css('display', 'block');
  });
});
