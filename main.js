
window.onscroll = function() {navStick()};

var map = document.getElementById("map");
var body = document.getElementById("mainBody");
var balance = document.getElementById("balance");
var filler = document.getElementById("filler");
var sticky = body.offsetTop;

function navStick() {
  if (window.pageYOffset >= sticky) {
    map.classList.add("sticky");
    balance.classList.add("widthChange");
    filler.classList.add("column");
    filler.classList.add("is-three-quarters");
    filler.classList.add("showFiller");
  } 
  else {
    map.classList.remove("sticky");
    balance.classList.remove("widthChange");
    filler.classList.remove("column");
    filler.classList.remove("is-three-quarters");
    filler.classList.remove("showFiller");
  }
}