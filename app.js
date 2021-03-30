// Define and set initial count variable.
var counter = 0;
document.getElementById("display-counter").innerHTML = counter.toString();
var increment = function () {
  console.log("Increment");
  counter++;
  updateDisplay();
};
var updateDisplay = function () {
  document.getElementById("display-counter").innerHTML = counter.toString();
};
