// Mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', isOpen);
});

// Close nav on link click (mobile)
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Smooth scroll offset for sticky header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
