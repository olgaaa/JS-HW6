//HOMEWORK 6
// Task 1
//Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром.

// version 1

const arr = ['Vasya', 'Petya', 'Alexey'];
let removeUser = prompt(`Which user of ${arr} you wish to be removed?`);
const index = arr.indexOf(removeUser);
if (index !== -1) {
  arr.splice(index, 1);
}

console.log(arr);

//version 2
// const arr = ['Vasya', 'Petya', 'Alexey'];
// let removeUser = prompt(
//   `Enter the number of user from  ${arr} you wish to be removed?`
// );
// const index = removeUser - 1;
// arr.splice(index, 1);
// console.log(arr);

//Task 2
//Создать функцию которая вернет все ключи обьекта переданного параметром
const obj = { name: 'Vasya', age: 1 };
console.log(Object.keys(obj));

//Task 3
//Создать функцию которая вернет все значения объекта переданного параметром

const obj = { name: 'Vasya', age: 1 };
console.log(Object.values(obj));

//Task 4
//Содать функцию,где мы первым параметром передадим объект с новым кандидатом, а вторым параметром - id любого кондидата в массиве condidateArr. Функция должна будет вставить кандидата переданного через первый параметр в массив перед кондидатом у которого id равно тому что передали во-втором параметре
const obj = {
  id: 3,
  name: 'Vasya',
};

const secondObj = {
  id: 4,
  name: 'Katya',
};

let x;

function insertIntoarr(newCand, id) {
  for (i = 0; i < condidateArr.length; i++) {
    if (condidateArr[i]._id === id) {
      x = condidateArr[i].index;
    }
  }
  return condidateArr.splice(x, 0, newCand);
}
console.log(condidateArr);

insertIntoarr(obj, '5e216bc9f51c08c39c3ed006');
console.log(condidateArr);
// // [ {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]

insertIntoarr(secondObj, '5e216bc95983a76c8461f88f');
console.log(condidateArr);
// [ {id: 4,name: 'Katya'}, {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]

// Task 5
//Создайте класс Condidate который будет принимать параметром объект из массива condidateArr. Добавить метод с именем state который вернет шатат в котором живает наш кондидат. Информация о штате находится в свойстве address и это третья запись после запятой.
class Condidate {
  constructor(person) {
    Object.assign(this, person);
  }
  state() {
    return this.address.split(', ')[2];
  }
}

const condidate = new Condidate(condidateArr[0]);
console.log(condidate.address);
console.log(condidate.state()); /// Colorado

const condidate2 = new Condidate(condidateArr[6]);
console.log(condidate2.address);
console.log(condidate2.state());

//Task 6
//Создать функцию которая выведет массив с названиями фирм взятыми из св-ва company. Если фирмы повторяются в массиве, то удалить дубликаты. Все так же используем массив candidateArr
const arr = [];

function getCompanyNames() {
  for (i = 0; i < condidateArr.length; i++) {
    arr.push(condidateArr[i].company);
  }
  let arrCleaned = new Set(arr);
  return arrCleaned;
}
console.log(arr);
console.log(getCompanyNames()); /// [""EZENT, "JASPER" ... ]

//Task 7
//Создать функцию которая выведет мне массив id всех кондидатов, которые были зарагестрированны в том же году что и год указанный в параметре.

let arr = [];

function getUsersByYear(year) {
  for (i = 0; i < condidateArr.length; i++)
    if (condidateArr[i].registered.split('-')[0] - year === 0) {
      arr.push(condidateArr[i]._id);
    }
  return arr;
}

console.log(getUsersByYear(2017)); /// ["e216bc9cab1bd9dbae25637", "5e216bc9e51667c70ee19f4f" ...]

//Task 8
//Создать функцию которая вернет массив с экземплярами - кандидатами, отфильтрованных по кол-ву непрочитанных сообщений. Смотрим св-во greeting, там указанно это количество в строке, Вам надо достать это число из строки и сверять с тем что в параметер вашей функции.

let arr = [];
let msg;

function getCondidatesByUnreadMsg(msg) {
  for (i = 0; i < condidateArr.length; i++)
    if (condidateArr[i].greeting.split(' ')[5] - msg === 0) {
      arr.push(condidateArr[i]);
    }
  return arr;
}
console.log(getCondidatesByUnreadMsg(8)); /// [Condidate, Condidate ...]

//Task 9
//Создать функцию которая вернет массив по свойству gender.

let arr = [];
function getCondidatesByGender(genderChoice) {
  for (i = 0; i < condidateArr.length; i++)
    if (condidateArr[i].gender === genderChoice) {
      arr.push(condidateArr[i]);
    }

  return arr;
}

console.log(getCondidatesByGender('male')); /// [Condidate, Condidate ...]

//Task 10
//Создать функцию reduce, join самому как на занятии создавали forEach, map, find, filter и т.д.

// не зроблено
