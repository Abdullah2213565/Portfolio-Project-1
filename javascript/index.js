const toggleMenu = document.querySelector('.menu');
const closeBtn = document.querySelector('#close-btn');
const menuItems = document.querySelectorAll('.menu-item');
const body = document.querySelector('body');
function openNav() {
  document.querySelector('.mobile-menu').classList.add('active');
  toggleMenu.classList.add('invisible');
  document.querySelector('.menu-item').classList.add('open-menu');
  body.style.position = 'fixed';
}

toggleMenu.addEventListener('click', openNav);

function closeNav() {
  document.querySelector('.mobile-menu').classList.remove('active');
  toggleMenu.classList.remove('invisible');
  document.body.style.overflow = 'auto';
  body.style.position = 'absolute';
  document.querySelector('.menu-item').classList.remove('open-menu');
}

closeBtn.addEventListener('click', closeNav);

menuItems.forEach((item) => {
  item.addEventListener('click', closeNav);
});

function isLowerCase(input) {
  const str = input.value.trim();
  return str === str.toLowerCase();
}
function showMessage(form, invalidMsg) {
  const target = form.querySelector('span');
  target.innerText = invalidMsg;
}
function validateEmail(form, input, invalidMsg) {
  if (isLowerCase(input)) {
    return true;
  }
  showMessage(form, invalidMsg);
  return false;
}
const form = document.querySelector('form');
const msg = 'The form was not sent, the email text should be in lower case.';
form.addEventListener('submit', (event) => {
  const mail = form.elements.email;
  const emailValid = validateEmail(form, mail, msg);

  if (!emailValid) {
    event.preventDefault();
  }
});

const userName = form.elements.name;
const userEmail = form.elements.email;
const userMessage = form.elements.message;
function populateStorage() {
  const userInput = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem('userInput', JSON.stringify(userInput));
}
function setForm() {
  const storedInput = JSON.parse(localStorage.getItem('userInput'));
  const currentUserName = storedInput.name;
  const currentUserEmail = storedInput.email;
  const currentMessage = storedInput.message;
  form.elements.name.value = currentUserName;
  form.elements.email.value = currentUserEmail;
  form.elements.message.value = currentMessage;
}
if (!localStorage.getItem('userInput')) {
  populateStorage();
} else {
  setForm();
}
userName.onchange = populateStorage;
userEmail.onchange = populateStorage;
userMessage.onchange = populateStorage;