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

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('show');
});

// Animation trigger
window.addEventListener('load', () => {
  const animateElements = document.querySelectorAll('.animate-text');

  animateElements.forEach((element, index) => {
    setTimeout(() => {
      element.style.animation = `fadeInUp 1s ease-in-out forwards ${index * 0.2}s`;
    }, 100);
  });
});
