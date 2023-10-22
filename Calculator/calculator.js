let inputResult = document.getElementById("input");
let outputResult = document.getElementById("output");
let lastEntered = "";

function appendToResult(value) {
  lastEntered += value;
  inputResult.innerText = lastEntered;
}

function clearLastEntered() {
  lastEntered = lastEntered.slice(0, -1);
  inputResult.innerText = lastEntered;
}

function clearResult() {
  lastEntered = "";
  inputResult.innerText = "0";
  outputResult.innerText = "0";
}

function toggleSign() {
  if (lastEntered.startsWith("-")) {
    lastEntered = lastEntered.slice(1);
  } else {
    lastEntered = "-" + lastEntered;
  }
  inputResult.innerText = lastEntered;
}

function calculate() {
  try {
    let result = eval(lastEntered);
    outputResult.innerText = result;
  } catch (error) {
    outputResult.innerText = "Error";
  }
}
