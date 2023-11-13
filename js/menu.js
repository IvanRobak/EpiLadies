const mobileMenu = document.querySelector('[data-menu]');
const menuBtn = document.querySelector('[data-menu-button]');

menuBtn.addEventListener('click', onMenuClick);

function onMenuClick() {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;

  menuBtn.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', !expanded);

  mobileMenu.classList.toggle('is-open');
}

// document.addEventListener('DOMContentLoaded', function () {
//   // Отримання посилань у меню
//   var menuLinks = document.querySelectorAll('#mobile-menu .nav-link');

//   // Додавання обробників подій для кожного посилання
//   menuLinks.forEach(function (link) {
//     link.addEventListener('click', function () {
//       // Закриття мобільного меню після кліку
//       var mobileMenu = document.getElementById('mobile-menu');
//       // mobileMenu.removeAttribute('data-menu-open');
//       // console.log(mobileMenu);
//       mobileMenu.classList.toggle('is-open');
//     });
//   });
// });
