const progress = document.querySelector('.scroll-progress');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
}

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('is-open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
  });
});

document.querySelectorAll('.info-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.character-card');
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    card.classList.toggle('is-open', !isOpen);
  });
});
