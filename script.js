// Reveal elements on scroll
const animatedItems = document.querySelectorAll('.animate-fade, .animate-slide, .animate-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

animatedItems.forEach(item => observer.observe(item));

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Button animations or alerts
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('active-click');
    setTimeout(() => btn.classList.remove('active-click'), 300);
  });
});
