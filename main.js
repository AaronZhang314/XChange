
/*
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

*/
var budget;
var remainder;
var budgetCur;
var paymentCur;
function submitBudget() {
	var money = document.getElementById("userInput").value.split(" ");
	budget = money[0];
	budgetCur = money[1];
	remainder = budget;
	document.getElementById("budget").innerHTML = budget + " "+ budgetCur;
	document.getElementById("remainder").innerHTML = remainder + " "+ budgetCur;
	document.getElementById("pay").style.display = "flex";
	document.getElementById("descriptionInput").style.display = "flex";
	document.getElementById("setBudget").style.display = "none";
}

function payment() {
	var payMoney = document.getElementById("transaction").value.split(" ");
	remainder = remainder - payMoney[0];
	var description = document.getElementById("description");
	document.getElementById("remainder").innerHTML = remainder + " "+ budgetCur;
}

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}