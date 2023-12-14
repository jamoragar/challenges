console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const tosSuccess = document.querySelector('[data-js="success"]');

hideTosSuccess();
hideTosError();


function hideTosError() {
  tosError.setAttribute("hidden", "");
}


function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideTosSuccess(){
  tosSuccess.setAttribute("hidden", "");
}
function showTosSuccess() {
  tosSuccess.removeAttribute("hidden");
}

tosCheckbox.addEventListener("change", function(e) {
  e.preventDefault();

  const isChecked = e.target.checked;
  isChecked ? hideTosError() : showTosError();
})

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { tos } = event.target.elements

  if(tos.checked) {
    showTosSuccess();
    // eslint-disable-next-line no-alert
    alert("Form submitted");
  }else {
    hideTosSuccess();
    return;
  }
});

