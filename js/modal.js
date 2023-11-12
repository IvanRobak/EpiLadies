const modal = document.querySelector('[data-modal]');
const openModalBtn = document.querySelectorAll('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');

openModalBtn.forEach(btn => btn.addEventListener('click', toggleModal));
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-hidden');
}
