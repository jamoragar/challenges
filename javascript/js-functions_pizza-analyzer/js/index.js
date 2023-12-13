console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = (pizzaInput1.value);
  const pizzaSize2 = (pizzaInput2.value);

  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2)

});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = (pizzaInput1.value);
  const pizzaSize2 = (pizzaInput2.value);

  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2)



});

// Task 1
function calculatePizzaGain(pizzaDiameter1, pizzaDiameter2){
  const pizzaArea1 = Math.PI * Math.pow(pizzaDiameter1 / 2, 2);
  const pizzaArea2 = Math.PI * Math.pow(pizzaDiameter2 / 2, 2);

  const pizzaGain = ((pizzaArea2 - pizzaArea1) / pizzaArea1) * 100;

  output.textContent = Math.round(pizzaGain)

}

// Task 2
function updatePizzaDisplay(pizzaElement, newSize){
  const displaySize = (newSize / 24) * 100;
  pizzaElement.style.width = `${displaySize}px`;
}

// Task 3
function updateOutputColor(pizzaSize1, pizzaSize2){
  if(pizzaSize2 < pizzaSize1)
    outputSection.style.backgroundColor = `var(--red)`;
  else
  outputSection.style.backgroundColor = `var(--green)`;
}