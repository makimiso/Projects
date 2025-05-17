let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstOperand = "";

function appendNumber(number) {
  if (display.innerText === "0" || currentInput === "") {
    currentInput = number;
  } else {
    currentInput += number;
  }
  display.innerText = currentInput;
}

function appendOperator(op) {
  if (currentInput === "") return;
  firstOperand = currentInput;
  operator = op;
  currentInput = "";
}

function calculate() {
  let secondOperand = currentInput;
  let result = 0;
  switch (operator) {
    case "+":
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case "-":
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case "*":
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case "/":
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
  }
  display.innerText = result;
  currentInput = result.toString();
}

function clearDisplay() {
  currentInput = "";
  firstOperand = "";
  operator = "";
  display.innerText = "0";
}

function plusMinus() {
  if (currentInput) {
    currentInput = (parseFloat(currentInput) * -1).toString();
    display.innerText = currentInput;
  }
}

function percent() {
  if (currentInput) {
    currentInput = (parseFloat(currentInput) / 100).toString();
    display.innerText = currentInput;
  }
}
