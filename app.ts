// Define and set initial count variable.
let counter: number = 0;
document.getElementById("display-counter").innerHTML = counter.toString();

const increment = (): void => {
    console.log("Increment");
    counter++;
    updateDisplay();
}

const decrement = (): void => {
    console.log("Decrement");
    counter--;
    updateDisplay();
}

const reset = (): void => {
    console.log("Reset");
    counter = 0;
    updateDisplay();
}

const updateDisplay = (): void => {
    document.getElementById("display-counter").innerHTML = counter.toString();
}