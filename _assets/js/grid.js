var map = {};
onkeydown = onkeyup = function(e){
    map[e.keyCode] = e.type == 'keydown';
}

document.body.addEventListener("keyup", function(e){
  if(map[16] && map[71]) {
    document.getElementsByTagName("HTML")[0].classList.toggle('gridShown');
  }
  map = {};
})

// masonry layout
if (window.innerWidth > 559) {

  var posts = document.querySelectorAll('.feed-posts');

  [].forEach.call(posts, function(container, i) {
    var msnry = new Masonry( container, {
      itemSelector: '.feed-post',
      columnWidth: '.grid-sizer',
      percentPosition: true,
      transitionDuration: 0,
      horizontalOrder: true
    });
  })
}

(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
             requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();

// handle event
window.addEventListener("optimizedResize", function() {
    if(!posts && window.innerWidth > 559) {
      window.posts = document.querySelectorAll('.feed-posts');

      [].forEach.call(posts, function(container, i) {
        var msnry = new Masonry( container, {
          itemSelector: '.feed-post',
          columnWidth: '.grid-sizer',
          percentPosition: true,
          transitionDuration: 0,
          horizontalOrder: true
        });
      })
    } else if (posts && window.innerWidth < 559) {
      [].forEach.call(posts, function(container, i) {
        var msnry = new Masonry( container, {
          itemSelector: '.feed-post',
          columnWidth: '.grid-sizer',
          percentPosition: true,
          transitionDuration: 0,
          horizontalOrder: true
        });
        msnry.destroy();
      })
      window.posts = null;
    }
});
