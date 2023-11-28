// Отримання посилання на кнопку
const sendButton = document.getElementById('sendButton');

// Додавання слухача подій
sendButton.addEventListener('click', sendEmail);

// Функція для відправки електронної пошти
function sendEmail() {
  const form = document.getElementById('emailForm');
  const formData = new FormData(form);

  fetch('http://localhost:3000/send-email', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Додайте код для обробки відповіді від сервера, якщо потрібно
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
