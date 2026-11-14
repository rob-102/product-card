import { productsData } from "./productcards.js";


// 10.4 Используя метод .reduce(), получить массив объектов, 
//где ключем является название продукта, а значением - его описание

const arrProductsNameDescription = productsData.reduce((acc, product) => {
  acc.push({ [product.name]: product.description });
  return acc;
}, []);

console.log(arrProductsNameDescription)

//10.5 Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить введенное количество. Должна быть защита от ввода других значений (проверка if)
const getCardAmound = () => {
  const inputUser = prompt ("Сколько карточек отобразить? От 1 до 5");
  const inputNumber = Number(inputUser);
  if (Number.isNaN(inputNumber) ||  inputNumber <= 0 || inputNumber >= 6) {
    alert('Ошибка, введите заново');
    return getCardAmound()
  } else { 
    return inputNumber
}}

//10.4 По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.

const templateProductCard = document.querySelector('.template_product_cart')
const productList = document.querySelector('.products-list');


function showCard(arr) {arr.forEach( card => {

console.log(templateProductCard.content)
const cardClone = templateProductCard.content.cloneNode(true);

const image = cardClone.querySelector('.card__image');
image.src = card.image;
image.alt = card.alt;
cardClone.querySelector('.card__skin-type').textContent = card.skinType;
cardClone.querySelector('.card__product-name').textContent = card.name;
cardClone.querySelector('.card__product-description').textContent = card.description;
cardClone.querySelector('.card__structure').innerHTML = `
  <ul>
    ${card.structure.map(item => `<li>${item}</li>`).join('')}
  </ul>
`;
cardClone.querySelector('.price').textContent = card.price;
productList.appendChild(cardClone)
})}

showCard(productsData.slice(0, getCardAmound()));
