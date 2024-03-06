// Simple form validation
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // You can add code here to handle form submission, e.g., send data to a server

  alert('Thank you for your message!');
  form.reset();
});


const themeToggleInput = document.querySelector('.theme-toggle-input');
const body = document.body;

themeToggleInput.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});


