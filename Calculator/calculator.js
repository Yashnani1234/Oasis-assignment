// Get references to the input and output elements
const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");

let currentExpression = "";

function appendToDisplay(value) {
    // If the last entered character is not a number, append the percentage value before the operator
    const lastChar = currentExpression.slice(-1);
    if (!isNaN(lastChar) && value === '%') {
        currentExpression = `${currentExpression} * 0.01 *`;
    } else {
        currentExpression += value;
    }
    inputElement.textContent = currentExpression;
}

function calculate() {
    try {
        const result = eval(currentExpression);
        outputElement.textContent = result;
    } catch (error) {
        outputElement.textContent = "Error";
    }
}

function clearLastEntered() {
    currentExpression = currentExpression.slice(0, -1);
    inputElement.textContent = currentExpression;
}

function clearResult() {
    currentExpression = "";
    inputElement.textContent = "0";
    outputElement.textContent = "0";
}

function appendSqrt() {
    currentExpression += "Math.sqrt(";
    inputElement.textContent = currentExpression;
}

function toggleSign() {
    // Implement functionality to toggle the sign of the current number if applicable
    // For example, if the current expression is "5", it can be changed to "-5" and vice versa.
}

// Add any additional functions you need for the calculator's functionality

// Handle 'ENTER' button press
const enterButton = document.querySelector(".last-button");
enterButton.addEventListener("click", calculate);