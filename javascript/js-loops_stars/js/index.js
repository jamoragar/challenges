console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('img');
    star.setAttribute('src', i <= filledStars ?
      'assets/star-filled.svg'
      :
      'assets/star-empty.svg');
    star.addEventListener('click', function () {
      renderStars(i);
    });
    starContainer.appendChild(star);
  }
};
  //--^-- your code here --^--


renderStars(5);
