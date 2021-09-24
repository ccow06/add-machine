var sum = 0;
var clicked = 0;
var sumTotal = 0;
var clickedTotal = 0;
// var cleared = false;

function add(x) {
  sum += x;
  sumTotal += x;
  clicked++;
  clickedTotal++;
  document.getElementById("line").style.visibility = "visible";
  // document.getElementById("doubleOutput").innerHTML = "Total times clicked: " + clickedTotal + "<br><br>Total sum: " + sumTotal + "<br><br>";
  document.getElementById("output").innerHTML = "Times clicked (this iteration): " + clicked + "<br><br>Sum: " + sum;
}

function clearN() {
  sum = 0;
  clicked = 0;
  // cleared = true;
  document.getElementById("output").innerHTML = "";
}
