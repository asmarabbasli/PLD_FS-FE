//helper
const $ = (s, p = document) => p.querySelector(s);
// Nav toggle
const navToggle = $('.nav__toggle');
const navMenu = $('.nav__menu');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('open');
  });
}
// Hero form
const heroForm = $('.hero__form');
if (heroForm) {
  heroForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = heroForm.querySelector('input');
    const error = heroForm.querySelector('.form__error');
    if (!input.value.trim()) {
      error.textContent = 'Şəhər adı daxil edin!';
    } else {
      error.textContent = `Əla seçim! ${input.value} üçün plan hazırlanır...`;
      input.value = '';
    }
  });
}
// Contact form
const contactForm = $('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const msg = contactForm.message.value.trim();
    const error = contactForm.querySelector('.form__error');
    if (!name || !email.includes('@') || !msg) {
      error.textContent = 'Xanaları düzgün doldurun!';
    } else {
      error.textContent = 'Mesaj göndərildi!';
      localStorage.setItem('travelerName', name);
      contactForm.reset();
    }
  });
}
// Footer year
$('#year').textContent = new Date().getFullYear();