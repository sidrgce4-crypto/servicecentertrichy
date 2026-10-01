// Main vanilla JavaScript for mobile navigation and interactive elements
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      const isExpanded = mainNav.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });
  }
});
