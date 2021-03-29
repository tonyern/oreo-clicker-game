// Define and set initial count variable.
var counter = 0;
document.getElementById("display-counter").innerHTML = counter.toString();
var increment = function () {
    console.log("Increment");
    counter++;
    updateDisplay();
};
var decrement = function () {
    console.log("Decrement");
    counter--;
    updateDisplay();
};
var reset = function () {
    console.log("Reset");
    counter = 0;
    updateDisplay();
};
var updateDisplay = function () {
    document.getElementById("display-counter").innerHTML = counter.toString();
};
