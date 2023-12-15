console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.


// Creating the tags and adding classes
const secondPost = document.createElement('section');
secondPost.classList.add('post');

const postContent = document.createElement('p');
postContent.classList.add('post__content');
postContent.textContent = 'Another post content...';

const postFooter = document.createElement('footer');
postFooter.classList.add('post__footer');

const usernameSpan = document.createElement('span');
usernameSpan.classList.add('post__username');
usernameSpan.textContent = '@anotheruser';

const likeButtonSecondPost = document.createElement('button');
likeButtonSecondPost.classList.add('post__button');
likeButtonSecondPost.setAttribute('type', 'button');
likeButtonSecondPost.setAttribute('data-js', 'like-button');
likeButtonSecondPost.textContent = '♥ Like';

// Adding the functionallity to the 'like button'
likeButtonSecondPost.addEventListener('click', handleLikeButtonClick);

postFooter.appendChild(usernameSpan);
postFooter.appendChild(likeButtonSecondPost);

secondPost.appendChild(postContent);
secondPost.appendChild(postFooter);

document.body.appendChild(secondPost);

