const mobileMenu = document.querySelector('[data-menu]');
const menuBtn = document.querySelector('[data-menu-button]');

menuBtn.addEventListener('click', onMenuClick);

function onMenuClick() {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;

  menuBtn.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', !expanded);

  mobileMenu.classList.toggle('is-open');
}
