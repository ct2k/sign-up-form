'use strict';

// Selecting Elements

const formEle = document.querySelector('.gridcontainer');
formEle.noValidate = true;
const userPassEle = document.querySelector('input[id="user-password"]');
const confirmPassEle = document.querySelector(
  'input[id="user-confirm-password"]'
);
const errorEle = document.querySelector('.error');
const errorEle2 = document.querySelector('.error2');

// Event Listeners

userPassEle.addEventListener('input', function () {
  if (userPassEle.validity.valid) {
    errorEle.textContent = '';
    errorEle.className = 'error';
  } else {
    showError();
  }
});

confirmPassEle.addEventListener('input', function () {
  if (confirmPassEle.validity.valid) {
    errorEle2.textContent = '';
    errorEle2.className = 'error2';
  } else {
    showError2();
  }
});

formEle.addEventListener('submit', function (event) {
  if (
    !userPassEle.validity.valid ||
    userPassEle.value !== confirmPassEle.value
  ) {
    showError();
    event.preventDefault();
  } else if (
    !confirmPassEle.validity.valid ||
    confirmPassEle.value !== userPassEle.value
  ) {
    showError2();
    event.preventDefault();
  }
});

function showError() {
  if (userPassEle.validity.valueMissing) {
    errorEle.textContent = 'You need to enter a password.';
  } else if (userPassEle.validity.tooShort) {
    errorEle.textContent = `Password should be at least ${userPassEle.minLength} characters; you entered ${userPassEle.value.length}.`;
  } else if (userPassEle.value !== confirmPassEle.value) {
    errorEle.textContent = 'Passwords do not match';
  }

  errorEle.className = 'error active';
}

function showError2() {
  if (confirmPassEle.validity.valueMissing) {
    errorEle2.textContent = 'You need to enter a password.';
  } else if (confirmPassEle.validity.tooShort) {
    errorEle2.textContent = `Password should be at least ${confirmPassEle.minLength} characters; you entered ${confirmPassEle.value.length}.`;
  } else if (confirmPassEle.value !== userPassEle.value) {
    errorEle2.textContent = 'Passwords do not match';
  }

  errorEle2.className = 'error2 active';
}
