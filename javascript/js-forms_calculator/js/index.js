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

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const numberA = Number(data.numberA);
  const numberB = Number(data.numberB);
  let result;

  switch(data.operator){
    case "addition":
      result = add(numberA, numberB);
      break;
    case "subtraction":
      result = subtract(numberA, numberB); 
      break;       
    case "multiplication":
      result = multiply(numberA, numberB);  
      break;  
    case "division":
      result = divide(numberA, numberB);     
      break;   
    default: return;
  }

  resultOutput.textContent = result;
});
