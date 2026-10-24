// Mobile navigation and demo contact form behaviour.
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const message = document.getElementById('form-message');
    if (message) message.hidden = false;
  });
}
