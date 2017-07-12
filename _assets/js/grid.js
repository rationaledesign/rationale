(function() {
  window.onload = function() {
    var body = document.body
    body.onkeypress = function(e) {
      if (e.keyCode == 103 || e.charCode == 103) {
        if( "show" == $("[data-development-grid]").attr("data-development-grid")){
          $("[data-development-grid]").attr("data-development-grid", "hide")
        }else{
          $("[data-development-grid]").attr("data-development-grid", "show")
        }
      }
      if (e.keyCode == 111 || e.charCode == 111) {
        $("body").toggleClass('outline');
      }
    }
  }
})();
