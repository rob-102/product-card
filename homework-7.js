//вывод погоды в городе
function message (city,temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`)
}
message('Лондоне', 18);

//скорость света
const LIGHT_SPEED = 299792458;
let speed = 55024;
if (speed > LIGHT_SPEED) {
  console.log('Сверхсветовая скорость')
} else if (speed < LIGHT_SPEED) {
  console.log('Субсветовая скорость')
} else if (speed === LIGHT_SPEED) {
  console.log('Скорость света')
}


//покупка
const product = "Увлажняющий мусс"
const productPrice = 2750;

let userMoney = 200;
if (userMoney >= productPrice) { 
  console.log(`${product} приобретён. Спасибо за покупку`)
} else if (userMoney < productPrice) { 
  console.log(`Вам не хватает ${productPrice-userMoney}, пополните баланс`)
}

//придумать функцию
let messageTakeUmbrella = 'rain'
console.log(messageTakeUmbrella==='rain' ? 'Возьмите с собой зонт':'зонт не понадобится');

//three variables
const SOUND_SPEED=343
const FREEZE_POINT_WATER=0
let maneyInDeposit = 999999999999999999999n
