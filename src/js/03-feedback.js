import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onTextInput, 500));
formEl.addEventListener('submit', onFormSubmit);

getStorageData();

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function onTextInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (formEl.elements.email.value === '' || formEl.elements.message.value === '') {
    alert('Enter something in field');
  } else {
    console.log(formData);

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

    formData = {};
  }
}

function getStorageData() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    formEl.elements.email.value = savedData.email || '';
    formEl.elements.message.value = savedData.message || '';
  }
}
