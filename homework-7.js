//вывод погоды в городе
function showTemperatureInCity (city,temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`)
};
showTemperatureInCity ('Лондоне', 18);

//скорость света
const LIGHT_SPEED = 299792458;
function whatIsSpeed(speed) {
if (speed > LIGHT_SPEED) {
  console.log('Сверхсветовая скорость')
} else if (speed < LIGHT_SPEED) {
  console.log('Субсветовая скорость')
} else if (speed === LIGHT_SPEED) {
  console.log('Скорость света')
}};
whatIsSpeed(7856736785);

//покупка
const product = "Увлажняющий мусс";
const productPrice = 2750;

function buyProductOnUserMoney(userMoney) {
if (userMoney >= productPrice) { 
  console.log(`${product} приобретён. Спасибо за покупку`)
} else if (userMoney < productPrice) { 
  console.log(`Вам не хватает ${productPrice-userMoney} рублей, пополните баланс`)
}};
buyProductOnUserMoney(2200);
buyProductOnUserMoney(5000);

//придумать функцию
const password = 1234;
function checkPassword(enterPassword) {
  if (enterPassword === password) {
    console.log("Пароль введен верно")
  }
  else {
    console.log("Пароль введен не верно!")
  }};
checkPassword(1234);
checkPassword(6464);

//three variables
const SOUND_SPEED=343;
const FREEZE_POINT_WATER=0;
let maneyInDeposit = 999999999999999999999n;
