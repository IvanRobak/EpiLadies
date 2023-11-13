const priceList = document.querySelector('[data-modal-price]');
const openPriceListBtn = document.querySelector('[data-modal-open-price-list]');
const closeModalBtnPrice = document.querySelector('[data-modal-close-price]');

openPriceListBtn.addEventListener('click', openPriceList);
closeModalBtnPrice.addEventListener('click', closePriceList);

function openPriceList() {
  priceList.classList.remove('is-hidden');
  document.body.classList.add('is-modal-open');
}
function closePriceList() {
  priceList.classList.add('is-hidden');
  document.body.classList.remove('is-modal-open');
}
