/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

// button.addEventListener("click", () => {
//   let firstValue = firstInput.value;
//   secondInput.value = firstValue;
// });

// button.addEventListener("click", () => {
//   let firstValue = firstInput.value.toUpperCase();
//   secondInput.value = firstValue;
// });

button.addEventListener("click", () => {
  let firstValue = firstInput.value;
  let secondValue = secondInput.value;
  secondInput.value = firstValue;
  firstInput.value = secondValue;
});
