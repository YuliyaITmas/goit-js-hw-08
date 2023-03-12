import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const LOCAL_STORAGE_KEY = 'feedback-form-state';

let formData = {};

const { email, message } = form.elements;

const savedMessage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

saveMessage();
reloadPage();

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);

function onInput(event) {
  formData = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    return;
  }

  console.log(formData);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  event.target.reset();
}

function saveMessage() {
  if (savedMessage) {
    email.value = savedMessage.email;
    message.value = savedMessage.message;
  }
}
function reloadPage() {
  if (savedMessage) {
    email.value = savedMessage.email;
    message.value = savedMessage.message;
    formData = { email: email.value, message: message.value };
  }
}
