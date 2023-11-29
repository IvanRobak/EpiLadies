const modal = document.querySelector('[data-modal]');
const openModalBtn = document.querySelectorAll('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const appointmentForm = document.getElementById('appointmentForm');
const successMessage = document.getElementById('successMessage');
const modalTitle = document.querySelector('.modal__title'); // Додано новий елемент

openModalBtn.forEach(btn => btn.addEventListener('click', toggleModal));
closeModalBtn.addEventListener('click', toggleModal);
appointmentForm.addEventListener('submit', handleSubmit);

function toggleModal() {
  modal.classList.toggle('is-hidden');
  successMessage.classList.add('is-hidden');
  showFormElements(); // Show form elements when toggling modal
}

function handleSubmit(event) {
  event.preventDefault();

  // Simulate form submission (replace this with your actual form submission logic)

  // Hide form elements
  hideFormElements();

  // Show success message
  successMessage.classList.remove('is-hidden');

  // Clear the form
  appointmentForm.reset();
}

function hideFormElements() {
  const formElements = appointmentForm.querySelectorAll('input, button, h3');
  formElements.forEach(element => {
    element.classList.add('is-hidden');
  });

  // Hide the modal title
  modalTitle.classList.add('is-hidden');
}

function showFormElements() {
  const formElements = appointmentForm.querySelectorAll('input, button, h3');
  formElements.forEach(element => {
    element.classList.remove('is-hidden');
  });

  // Show the modal title
  modalTitle.classList.remove('is-hidden');
}
