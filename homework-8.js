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
  yearRelease: 1993,
  color: "green",
  transmission: "Automatic",
  //maxSpeed: 119
}

carData.owner = userData.name;
console.log(carData)

//8.5 Функция проверяет, есть ли в объекте свойство "максимальная скорость"
function chackMaxSpeed() {
  if (!('maxSpeed' in carData)) {
    carData.maxSpeed = 120;
  }
}

chackMaxSpeed(carData);

//8.6 Написать функцию, которая получает первым аргументом — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.
function showProperty(obj, key ) {
  console.log(obj[key]) ///?????
}
showProperty(carData, 'brand')
showProperty(carData, 'model')
showProperty(userData, 'city')

//8.7 Создать массив, который содержит названия продуктов (просто строки)
const productName = ['Увлажняющий мусс','Увлажняющая маска','Гель для умывания','Подарочный набор','Подарочный набор №5']

//8.8 
const movieDataSpiderMan = [
  { name:'Человек-паук', yearRelease: 2002, Director: 'Сэм Рэйми', Genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук 2', yearRelease: 2004, Director: 'Сэм Рэйми', Genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук 3: Враг в отражении', yearRelease: 2007, Director: 'Сэм Рэйми', Genre: 'фантастика, боевик, приключения'},
  { name:'Новый Человек-паук', yearRelease: 2012, Director: 'Марк Уэбб', Genre: 'фантастика, боевик, приключения'},
  { name:'Новый Человек-паук: Высокое напряжение»', yearRelease: 2014, Director: 'Марк Уэбб', Genre: 'фантастика, боевик, приключения'},
]
movieDataSpiderMan.push (
  { name:'Первый мститель: Противостояние ', yearRelease: 2016, Director: 'Энтони Руссо, Джо Руссо', Genre: 'фантастика, боевик'},
  { name:'Человек-паук: Возвращение домой', yearRelease: 2017, Director: 'Джон Уоттс', Genre: 'фантастика, боевик, приключения'},
  { name:'Мстители: Война бесконечности', yearRelease: 2018, Director: 'Энтони Руссо, Джо Руссо', Genre: 'фантастика, боевик, приключения'},
  { name:'Мстители: Финал', yearRelease: 2019, Director: 'Энтони Руссо, Джо Руссо', Genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук: Вдали от дома', yearRelease: 2019, Director: 'Джон Уоттс', Genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук: Нет пути домой', yearRelease: 2021, Director: 'Джон Уоттс', Genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук: Новый день', yearRelease: 2026, Director: 'Дестин Дэниел Креттон', Genre: 'фантастика, боевик, приключения'}
)
//console.log(movieDataSpiderMan)

//8.9
const movieDataSpiderManTobeyMaguire = [
  { name:'Человек-паук', yearRelease: 2002, Director: 'Сэм Рэйми', Genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук 2', yearRelease: 2004, Director: 'Сэм Рэйми', Genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук 3: Враг в отражении', yearRelease: 2007, Director: 'Сэм Рэйми', Genre: 'фантастика, боевик, приключения'},
]
const movieDataSpiderManAndrewGarfield = [
  { name:'Новый Человек-паук', yearRelease: 2012, Director: 'Марк Уэбб', Genre: 'фантастика, боевик, приключения'},
  { name:'Новый Человек-паук: Высокое напряжение»', yearRelease: 2014, Director: 'Марк Уэбб', Genre: 'фантастика, боевик, приключения'},
]
const movieDataSpiderManTomHolland = [
  { name:'Первый мститель: Противостояние', yearRelease: 2016, Director: 'Энтони Руссо, Джо Руссо', Genre: 'фантастика, боевик'},
  { name:'Человек-паук: Возвращение домой', yearRelease: 2017, Director: 'Джон Уоттс', Genre: 'фантастика, боевик, приключения'},
  { name:'Мстители: Война бесконечности', yearRelease: 2018, Director: 'Энтони Руссо, Джо Руссо', Genre: 'фантастика, боевик, приключения'},
  { name:'Мстители: Финал', yearRelease: 2019, Director: 'Энтони Руссо, Джо Руссо', Genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук: Вдали от дома', yearRelease: 2019, Director: 'Джон Уоттс', Genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук: Нет пути домой', yearRelease: 2021, Director: 'Джон Уоттс', Genre: 'фантастика, боевик, приключения'},
  { name:'Человек-паук: Новый день', yearRelease: 2026, Director: 'Дестин Дэниел Креттон', Genre: 'фантастика, боевик, приключения'},
]
const movieDataAllSpiderMan = [ ...movieDataSpiderManTobeyMaguire, ...movieDataSpiderManAndrewGarfield, ...movieDataSpiderManTomHolland]
//console.log(movieDataAllSpiderMan)

//8.10
//function realspider() movieDataAllSpiderMan.map.has('Сэм Рэйми') => Array.push(feature: realspider)

const PushRealSpider = movieDataAllSpiderMan.map(function(obj) {
  obj.realSpider = obj.Director === 'Сэм Рэйми';
  return(obj);
})
console.log(PushRealSpider)