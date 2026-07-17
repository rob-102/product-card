const Card = document.querySelector('.card');
const addToBasketButton = document.querySelector('#add-to-basket');
const backgroundColorInBasket = '#bbc5ba';
const Cards = document.querySelectorAll('.card');
const addToBasketAllButton = document.querySelector('#add-to-basket-all');


//6.2 красим одну карточку из корзины
addToBasketButton.addEventListener('click',  () => {
  Card.style.backgroundColor = backgroundColorInBasket;
})

//6.3 красим все карточки 
addToBasketAllButton.addEventListener('click',  () => {
  Cards.forEach((card) => card.style.backgroundColor = backgroundColorInBasket)
})

//6.4 переход на сайт "Google.com" кнопка "перейти к оплате"
const selectToPaymentButton = document.querySelector('#select-to-payment');
selectToPaymentButton.addEventListener('click', OpenPaymentPage)

//предупреждение перед переходом на сайт
function OpenPaymentPage() {
  const answer = confirm('ВНИМАНИЕ! перед переходом к оплате СЛОЖИТЕ суммы выбранных товаров вручную и запомните итог')
  if (answer === true) {
    window.open('https://www.google.com')
  } else {
     return;
  }
}

//6.5 вывод в консоль лог, сломалось оповещение alrt перестал работать после добавления 6.6
const OutputLogButton = document.querySelector('#output-console-log');

OutputLogButton.addEventListener('click', () => OutputConsoleLog('заканчиается зд 6.5'))
function OutputConsoleLog(message) {
  alert('дз 6.5 выполнен без ошибок')
  console.log(message)
}

//6.6 вывод консоль лог по наведению мыши.

const OutputLogMouseOver = document.querySelector('.title');

OutputLogMouseOver.addEventListener('mouseover', () => OutputConsoleLog(OutputLogMouseOver.textContent))
function OutputConsoleLog(message) {
  console.log(message);
}

//6.7 изменение цвета кнопки "добавить в корзину" по нажатию и обратно
addToBasketButton.addEventListener('click', () => addToBasketButton.classList.toggle('background-button-in-basket'))
