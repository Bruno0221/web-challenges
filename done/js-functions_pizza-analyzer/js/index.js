console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');
const pizzaSize1 = pizzaInput1.value;
const pizzaSize2 = pizzaInput2.value;

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1
function calculatePizzaGain(diameter1, diameter2) {
  const areaPizzaOne = Math.PI * (diameter1 / 2) ** 2;
  const areaPizzaTwo = Math.PI * (diameter2 / 2) ** 2;
  const relativePizzaGain =
    ((areaPizzaTwo - areaPizzaOne) / areaPizzaOne) * 100;
  output.textContent = Math.round(relativePizzaGain);
}
// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
  const newWidth = (newSize / 24) * 100;
  pizzaElement.style.width = newWidth + "px";
}
// Task 3
function updateOutputColor(size1, size2) {
  if (size2 < size1) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
