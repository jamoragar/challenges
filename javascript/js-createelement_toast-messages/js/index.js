console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const newToast = document.createElement('ol');
  newToast.classList.add('toast-container__message');
  newToast.textContent = 'This is a new toast message';

  toastContainer.appendChild(newToast);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = '' 
});
