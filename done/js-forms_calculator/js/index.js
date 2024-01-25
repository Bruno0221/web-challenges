console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  if (data.operator === "addition") {
    result = add(Number(data.numberA), Number(data.numberB));
  }
  if (data.operator === "subtraction") {
    result = subtract(data.numberA, data.numberB);
  }
  if (data.operator === "multiplication") {
    result = multiply(data.numberA, data.numberB);
  }
  if (data.operator === "division") {
    result = divide(data.numberA, data.numberB);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
