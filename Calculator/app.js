let currentInput = '';
let operator = '';
let firstNumber = '';

function appendNumber(num) {
  currentInput += num;
  updateDisplay(currentInput);
}

function setOperation(op) {
  if (currentInput === '') return;
  operator = op;
  firstNumber = currentInput;
  currentInput = '';
}

function calculateResult() {
  if (currentInput === '' || firstNumber === '' || operator === '') return;

  const a = parseFloat(firstNumber);
  const b = parseFloat(currentInput);
  let result = 0;

  switch (operator) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    default: return;
  }

  updateDisplay(result);
  currentInput = result.toString();
  firstNumber = '';
  operator = '';
}

function updateDisplay(value) {
  document.getElementById('display').value = value;
}
