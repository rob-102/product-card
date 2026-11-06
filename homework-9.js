import {dataComments} from "./comments.js";

//9.2 Создать массив чисел от 1 до 10. Отфильтровать
const numbers = [1,2,3,4,5,6,7,8,9,10]
const filterNambers = numbers.filter(namber => namber >= 5)
console.log(filterNambers)

//9.3
const tools = ['screwdriver', 'chainsaw', 'axe', 'hammer']
console.log(tools.includes('axe'))

//9.4
function reversed (arrow) {
  console.log(arrow.reverse())
}
reversed(numbers);
reversed(tools);

//9.7
const comFilter = dataComments.filter(comment => comment.email.includes('.com'))
console.log(comFilter)

//9.8 Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1
dataComments.map(function(arr) {
  if (arr.id <= 5) {
    arr.postId = 2
  } else {
    arr.postId = 1
  };
})

//9.9 Перебрать массив, что бы объекты состояли только из айди и имени
const clearArr = dataComments.map(dataComments => {
  return {
    id: dataComments.id,
    name: dataComments.name
  };
});
console.log(clearArr);

//9.10 
 const checkLengthBody = dataComments.map(comment => {
    return {
        ...comment,
        isInvalid: comment.body.length > 180
    };
});
console.log(checkLengthBody);

//9.11 Используя reduce, вывести массив почт и провернуть тоже самое с помощью метода map
const emailArrayWithReduce = dataComments.reduce((acc,email) => {
  acc.push(email.email);
  return acc;
},[]);
console.log(emailArrayWithReduce)

const emailArrayWithMap = dataComments.map(comment => comment.email);
console.log(emailArrayWithMap)

//9.12   привестb массив с задания №11 к строке.
const toStringEmailArr = emailArrayWithReduce.toString()
console.log(toStringEmailArr)

