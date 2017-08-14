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
