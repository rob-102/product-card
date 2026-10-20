//8.3 Создайте объект на основе ваших данных.
const userData = {
  name: "Robert",
  surName: "Sagitov",
  mail: "Robertfanzilevich@gmail.com",
  job: "Truck driver",
  age: "36",
  country: "Republic of Bashkortostan",
  city: "Ufa",
}

//8.4 Создайте объект, который будет хранить данные об автомобиле (марка, модель, год выпуска, цвет, вид коробки).
const carData = {
  brand: "Mitsubishi",
  model: "Rvr",
  releaseYear: 1993,
  color: "green",
  transmission: "Automatic"
}

carData.owner = userData;
console.log(carData)

//8.5 Функция проверяет, есть ли в объекте свойство "максимальная скорость"
function checkMaxSpeed() {
  if (!('maxSpeed' in carData)) {
    carData.maxSpeed = 120;
  }
}

checkMaxSpeed(carData);

//8.6 Написать функцию, которая получает первым аргументом — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.
function showProperty(obj, key ) {
  console.log(obj[key]) ///?????
}
showProperty(carData, 'brand')
showProperty(carData, 'model')
showProperty(userData, 'city')

//8.7 Создать массив, который содержит названия продуктов (просто строки)
const productNames = ['Увлажняющий мусс','Увлажняющая маска','Гель для умывания','Подарочный набор','Подарочный набор №5']

//8.8 
const SpiderManDataMovie = [
  { name:'Человек-паук', releaseYear: 2002, director: 'Сэм Рэйми', genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук 2', releaseYear: 2004, director: 'Сэм Рэйми', genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук 3: Враг в отражении', releaseYear: 2007, director: 'Сэм Рэйми', genre: 'фантастика, боевик, приключения'},
  { name:'Новый Человек-паук', releaseYear: 2012, director: 'Марк Уэбб', genre: 'фантастика, боевик, приключения'},
  { name:'Новый Человек-паук: Высокое напряжение»', releaseYear: 2014, director: 'Марк Уэбб', genre: 'фантастика, боевик, приключения'},
]
SpiderManDataMovie.push (
  { name:'Первый мститель: Противостояние ', releaseYear: 2016, director: 'Энтони Руссо, Джо Руссо', genre: 'фантастика, боевик'},
  { name:'Человек-паук: Возвращение домой', releaseYear: 2017, director: 'Джон Уоттс', genre: 'фантастика, боевик, приключения'},
  { name:'Мстители: Война бесконечности', releaseYear: 2018, director: 'Энтони Руссо, Джо Руссо', genre: 'фантастика, боевик, приключения'},
  { name:'Мстители: Финал', releaseYear: 2019, director: 'Энтони Руссо, Джо Руссо', genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук: Вдали от дома', releaseYear: 2019, director: 'Джон Уоттс', genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук: Нет пути домой', releaseYear: 2021, director: 'Джон Уоттс', genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук: Новый день', releaseYear: 2026, director: 'Дестин Дэниел Креттон', genre: 'фантастика, боевик, приключения'}
)
//console.log(SpiderManDataMovie)

//8.9
const TobeyMaguireSpiderManDataMovie = [
  { name:'Человек-паук', releaseYear: 2002, director: 'Сэм Рэйми', genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук 2', releaseYear: 2004, director: 'Сэм Рэйми', genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук 3: Враг в отражении', releaseYear: 2007, director: 'Сэм Рэйми', genre: 'фантастика, боевик, приключения'},
]
const GarfieldSpiderManDataMovie = [
  { name:'Новый Человек-паук', releaseYear: 2012, director: 'Марк Уэбб', genre: 'фантастика, боевик, приключения'},
  { name:'Новый Человек-паук: Высокое напряжение»', releaseYear: 2014, director: 'Марк Уэбб', genre: 'фантастика, боевик, приключения'},
]
const TomHollandSpiderManDataMovie = [
  { name:'Первый мститель: Противостояние', releaseYear: 2016, director: 'Энтони Руссо, Джо Руссо', genre: 'фантастика, боевик'},
  { name:'Человек-паук: Возвращение домой', releaseYear: 2017, director: 'Джон Уоттс', genre: 'фантастика, боевик, приключения'},
  { name:'Мстители: Война бесконечности', releaseYear: 2018, director: 'Энтони Руссо, Джо Руссо', genre: 'фантастика, боевик, приключения'},
  { name:'Мстители: Финал', releaseYear: 2019, director: 'Энтони Руссо, Джо Руссо', genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук: Вдали от дома', releaseYear: 2019, director: 'Джон Уоттс', genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук: Нет пути домой', releaseYear: 2021, director: 'Джон Уоттс', genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук: Новый день', releaseYear: 2026, director: 'Дестин Дэниел Креттон', genre: 'фантастика, боевик, приключения'},
]
const allSpiderManDataMovie = [ ...TobeyMaguireSpiderManDataMovie, ...GarfieldSpiderManDataMovie, ...TomHollandSpiderManDataMovie]
//console.log(allSpiderManDataMovie)

//8.10
const updateRealSpider = allSpiderManDataMovie.map(function(obj) {
  obj.realSpider = obj.director === 'Сэм Рэйми';
  return(obj);
})
console.log(updateRealSpider)