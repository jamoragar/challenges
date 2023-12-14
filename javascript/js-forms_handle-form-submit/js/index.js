console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data);
})