const priceList = document.querySelector('[data-modal-price]');
const backdrop = document.getElementById('backdrop');
const openPriceListBtn = document.querySelector('[data-modal-open-price-list]');
const openPriceListBtn2 = document.querySelector('[data-modal-open-price-list2]');
const closeModalBtnPrice = document.querySelector('[data-modal-close-price]');

openPriceListBtn.addEventListener('click', openPriceList);
openPriceListBtn2.addEventListener('click', openPriceList);
closeModalBtnPrice.addEventListener('click', closePriceList);
backdrop.addEventListener('click', closePriceList);

function openPriceList() {
  priceList.classList.remove('is-hidden');
  backdrop.classList.remove('is-hidden');
  document.body.classList.add('is-modal-open');
}

function closePriceList() {
  priceList.classList.add('is-hidden');
  backdrop.classList.add('is-hidden');
  document.body.classList.remove('is-modal-open');
}
