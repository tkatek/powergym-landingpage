const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

const burger = document.getElementById('burger');
const header = document.querySelector('.site-header');

burger.addEventListener('click', () => {
  header.classList.toggle('main-menu-open');
});

// Close mobile menu when a nav link is clicked
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('main-menu-open');
  });
});

// Smooth scroll for internal links (already in CSS, fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Optional booking interaction
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks! Your inquiry has been sent.');
    contactForm.reset();
  });
}