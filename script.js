
const $ = (s, p = document) => p.querySelector(s);

const navToggle = $('.nav__toggle');
const navMenu = $('.nav__menu');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('open');
  });
}
const heroForm = $('.hero__form');
if (heroForm) {
  heroForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = heroForm.querySelector('input');
    const error = heroForm.querySelector('.form__error');
    if (!input.value.trim()) {
      error.textContent = 'Enter the city name!';
    } else {
      error.textContent = `good choice! ${input.value} ready plan for city..`;
      input.value = '';
    }
  });
}
const contactForm = $('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const msg = contactForm.message.value.trim();
    const error = contactForm.querySelector('.form__error');
    if (!name || !email.includes('@') || !msg) {
      error.textContent = 'Error!';
    } else {
      error.textContent = 'Message sent!';
      localStorage.setItem('travelerName', name);
      contactForm.reset();
    }
  });
}
$('#year').textContent = new Date().getFullYear();
