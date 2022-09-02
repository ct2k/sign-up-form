'use strict';

// Selecting Elements

const formEle = document.querySelector('.gridcontainer');
formEle.noValidate = true;
const userPassEle = document.querySelector('input[id="user-password"]');
const confirmPassEle = document.querySelector(
  'input[id="user-confirm-password"]'
);
const errorEle = document.querySelector('.error');

// Event Listeners

userPassEle.addEventListener('input', function () {
  if (userPassEle.validity.valid) {
    errorEle.textContent = '';
    errorEle.className = 'error';
  } else {
    showError();
  }
});

formEle.addEventListener('submit', function (event) {
  if (!userPassEle.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (userPassEle.validity.valueMissing) {
    errorEle.textContent = 'You need to enter a password.';
  } else if (userPassEle.validity.tooShort) {
    errorEle.textContent = `Password should be at least ${userPassEle.minLength} characters; you entered ${userPassEle.value.length}.`;
  }

  errorEle.className = 'error active';
}
