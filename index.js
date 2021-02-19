// //____________________________first section______________________

// document.write('hello world');
// alert('hello people');
// console.log('hello world');
// let name = 'shamim';
// let lastName = 'khan';
// console.log('this is my full name: ' + name + ' ' + lastName);

// //------------backticks------------------------------------------
// const website = 'google';
// const url = 'https://www.' + website + '.com';
// console.log(url);
// // ----------------------------------------------------------

// // loosely Typed = don't declear type
// const number = 34;
// let pants = 2.466;
// pants = 'are great';
// const number2 = 2.456;
// const number3 = '2.456';
// let t = number3 + ' ' + number2;
// //-----------------------------------------------------------
// const randomNumber = 10;
// document.querySelector('.form').addEventListener('submit', function (e) {
//   e.preventDefault();
//   let value = document.getElementById('amount').value;
//   value = parseInt(value);
//   console.log('Input Value Type');
//   console.log(value);
//   console.log('Sum of Two Values');
//   console.log(randomNumber + value);
// });
// //-----------------------------------------------------------
// const slices = 10;
// const children = 4;
// const amount = slices / children;
// const amount1 = slices % children;
// const amount2 = (slices - (slices % children)) / children;

// // console.log(amount);
// // console.log(amount1);
// // console.log(amount2);
// const random = 4 + 6 + 10 * 10;
// const random2 = (4 + 6 + 10) * 10;

// console.log(random);
// console.log(random2);

// //----------------------------------------------------------
// const friends = ['john', 'peter', 'bob', 'susy', 45, undefined, null];

// let bestFriend = friends[2];
// friends[4] = 'anna';
// console.log(friends[4]);
// console.log(bestFriend);

// console.log(friends);

// // -------------------- function -------------------------------
// __________________function by default return undefined.
// function greet(name) {
//   console.log('Hello there ' + name);
// }

// const sum = function (num1, num2) {
//   return num1 + num2;
// };
// const sub = (num1, num2) => num2 - num1;

// const add = (num1, num2) => {
//   console.log(num1 + ' + ' + num2 + ' =');
//   return num2 + num1;
// };
// greet('shamim');
// console.log(sum(5, 4));
// console.log(add(5, 44));
// console.log(sub(5, 44));

// //--------------------- Objects --------------------------------

// const person = {
//   name: 'shamim',
//   lastName: 'khan',
//   age: 23,
//   education: false,
//   married: true,
//   siblings: ['Anna', 'susan', 'petter'],
//   greeting: function () {
//     console.log('hello my name is shamim');
//   },
//   greeting() {
//     console.log('hello my name is Shamim');
//   },
// };

// const age = person.age;
// console.log(age);
// person.name = 'khan';
// console.log(person.name);
// console.log(person.siblings[2]);
// person.greeting();

// // ------------------------if statment-------------------------
// const num1 = 5;
// const num2 = 3;
// const value = num1 > num2;
// console.log(value);
// console.log(typeof value);

// if (num1 < num2) {
//   console.log('second number is bigger than first');
// } else if (num1 > num2) {
//   console.log('first number is bigger than second');
// } else {
//   console.log('numbers are equal');
// }
// //------------------------conditional statement-------------------
// const num1 = 5;
// const num2 = '5';
// const value = num1 == num2;
// const value1 = num1 === num2;
// console.log(value);
// console.log(value1);

// // -----------------------Switch statment--------------------------
// const x = 2;
// switch (x) {
//   case 1:
//     console.log('you got one');
//     break;
//   case 2:
//     console.log('you got two');
//     break;
//   default:
//     console.log("you didn't roll the dice");
// }

// //-------------------------loops------------------------------------

// const array = [7, 5, 6, 7, 8, 4, 8, 4, 3, 4, 5, 6, 8];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
// let i = 0;
// while (i < array.length) {
//   console.log('elements ' + i + ' is: ' + array[i]);
//   i++;
// }
// i = 0;
// do {
//   console.log('Elements ' + i + ' is: ' + array[i]);
//   i++;
// } while (i < array.length);

// //_________________________End of the first section___________________

// //________________________Section 2___________________________________

// //------------------------String Properties And Methods--------------

// let text = ' Shamim Khan  ';
// let result = text.length;
// console.log(result);
// console.log(text.length);
// console.log(text);
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.charAt(text.length - 1));
// console.log(text.indexOf('m'));
// console.log(text.trim());
// console.log(text.startsWith(' Shamim'));
// console.log(text.trim().toLowerCase().startsWith('shamim'));
// console.log(text.includes('mim'));
// console.log(text.slice(0, 7));
// console.log(text.trim().slice(-4));
// console.log(text.trim().slice(0, 6));
// console.log(text.trim().length);

// //--------------------------Template literals-------------------------

// const name = 'shamim';
// const age = 23;
// const sentence = "Hey it's " + name + ' and he is ' + age + ' years old';
// const value = `Hey it's ${name} and he is ${age} years old. And here is some math ${
//   4 + 7
// }`;
// console.log(value);
// console.log(sentence);

// //-------------------------Array Properties And Methords--------------

// let names = ['shamim', 'bob', 'borry', 'tamim', 'barry'];
// console.log(names.length);
// console.log(names[names.length - 1]);
// console.log(names);

// const lastNames = ['pepper', 'onion', 'banana'];
// console.log(lastNames);
// const allNames = names.concat(lastNames);
// console.log(allNames);
// console.log(allNames.reverse());

// allNames.unshift('khan');
// allNames.unshift('Rimon');
// console.log(allNames);

// allNames.shift();
// allNames.shift();
// allNames.shift();
// allNames.shift();
// allNames.shift();
// console.log(allNames);

// allNames.push('susy');
// allNames.push('anna');
// allNames.push('priti');
// allNames.push('shorna');
// console.log(allNames);

// allNames.pop();
// allNames.pop();
// allNames.pop();
// allNames.pop();
// console.log(allNames);

// const specificNames = allNames.splice(3, 2);
// console.log(specificNames);
// console.log(allNames);

// //--------------------Exercise-Calculate Total-----------------------

// const gas = [20, 40, 100];
// const food = [10, 40, 50];

// function calculateTotal(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }
// const gasTotal = calculateTotal(gas);
// const foodTotal = calculateTotal(food);
// const randomTotal = calculateTotal([200, 4000, 500, 1]);

// console.log({
//   name: 'shamim',
//   gas: gasTotal,
//   food: foodTotal,
//   random: randomTotal,
// });

// // ----------------------Value Vs Reference------------------------------

// const number = 1;
// let number2 = number;
// number2 = 7;
// console.log(`the first value is ${number}`);
// console.log(`the second value is ${number2}`);

// let person = { name: 'bob' };
// let person2 = { ...person };
// person2.name = 'susy';
// console.log(`the name of the first person is ${person.name}`);
// console.log(`the name of the second person is ${person2.name}`);

// //----------------------Callback Functions-------------------------------

// function morning(name) {
//   return `Good morning ${name.toUpperCase()}`;
// }

// function afternoon(name) {
//   return `Good afternoon ${name.repeat(3)}`;
// }

// function greet(name, cb) {
//   // Higher Order Functions
//   const Myname = 'shamim';
//   console.log(`${cb(name)}my name is ${Myname}`);
// }

// greet('bob ', morning);
// greet('susy ', afternoon);

// // -----------------------Array Iterators---------------------------------

// const numbers = [0, 1, 2, 3, 4];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

//                     // *forEach
//                     // *find
//                     // *Map
//                     // *Filter
//                     // *Reduce

// //                  --------------forEach------------
// // _________________forEach dose not return new array.

// const numbers = [0, 1, 2, 3, 4];

// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'the boss' },
// ];

// function showPeson(person) {
//   console.log(person.position.toUpperCase());
// }

// // people.forEach(showPeson);

// people.forEach(function (item) {
//   console.log(item.position.toUpperCase());
// });

// numbers.forEach(function (item) {
//   console.log(item);
// });
// console.log('');

// // -------------------------self developed ForEach function----------------

// function ForEach(fun, array) {
//   for (let index = 0; index < array.length; index++) {
//     fun(array[index]);
//   }
// }
// // -----------------------self developed function test--------------------
// ForEach(function showPeson(person) {
//   console.log(person.position.toUpperCase());
// }, people);

// ForEach(function (item) {
//   console.log(item);
// }, numbers);

// // ------------------------------------------------------------------------

// //                   ------------map--------------
// // __________________dose return new array.
// // __________________does not change size of original array.

// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'the boss' },
//   { name: 'anna', age: 35, position: 'the boss' },
// ];

// const age = people.map(function (person) {
//   return person.age + 20;
// });

// const newPeople = people.map(function (person) {
//   return { firstName: person.name.toUpperCase(), oldAge: person.age + 20 };
// });
// const names = people.map(function (person) {
//   return `<h1>${person.name}</h1>`;
// });

// // document.body.innerHTML = names.join('');

// console.log(age);
// // console.log(newPeople);
// // console.log(names);
// // --------------------------self developed Map function----------------

// function Map(fun1, array) {
//   const arr = [];
//   for (let index = 0; index < array.length; index++) {
//     arr[index] = fun1(array[index]);
//   }
//   return arr;
// }

// // -----------------------self developed function test------------------

// const age2 = Map(function (person) {
//   return { age: person.age + 10, name: person.name };
// }, people);

// const age3 = Map(function (person) {
//   return person.age + 20;
// }, people);

// console.log(age2);
// console.log(age3);
// console.log(age2[1].age);

// // -------------------------------------------------------------------

// //                 --------------filter---------------
// //_________________does return a new array
// //_________________can manipulate the size of new array
// //_________________returns based on condition

// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'the boss' },
//   { name: 'anna', age: 35, position: 'the boss' },
// ];

// const youngPeople = people.filter(function (person) {
//   return person.age <= 25;
// });

// const developer = people.filter(function (person) {
//   return person.position === 'developer';
// });

// console.log(youngPeople);
// console.log(developer);
// console.log(developer[0].name);

// // --------------------------self developed Filter function----------------

// function Filter(fun3, array) {
//   const arr = [];
//   let C = 0;
//   for (let index = 0; index < array.length; index++) {
//     if (fun3(array[index])) {
//       arr[C++] = array[index];
//     }
//   }
//   return arr;
// }

// // -----------------------self developed function test--------------------

// const youngPeople2 = Filter(function (person) {
//   return person.age <= 25;
// }, people);
// console.log(youngPeople2[1].name);
// console.log(youngPeople2);

// // -------------------------------------------------------------------

// //                 ------------------Find-------------------
// //_________________does return object
// //_________________return first match, if no match undefined
// //_________________great for getting unique value

// const people = [
//   { name: 'bob', age: 20, position: 'developer', id: 1 },
//   { name: 'peter', age: 25, position: 'designer', id: 2 },
//   { name: 'susy', age: 30, position: 'the boss', id: 3 },
//   { name: 'anna', age: 35, position: 'the boss', id: 4 },
// ];

// const names = ['bob', 'peter', 'susy'];

// console.log(
//   names.find(function (person) {
//     return person === 'bob';
//   })
// );

// // -------------------------filter vs find------------------------------

// const person = people.find(function (person) {
//   return person.id == 3;
// });
// // ___________________________filter return array.
// const person2 = people.filter(function (person) {
//   return person.id == 3;
// });

// console.log(person);
// // console.log(person.name);

// // console.log(person2[0].name);
// console.log(person2);
// // ---------------------------self developed find function---------------
// function Find(fun4, array) {
//   for (let index = 0; index < array.length; index++) {
//     if (fun4(array[index])) {
//       return array[index];
//     }
//   }
// }
// // ----------------------------self developed function test-----------------
// const person3 = Find(function (person) {
//   return person.id === 3;
// }, people);
// console.log(person3);
// // -----------------------------------------------------------------------

// //              --------------------------reduce--------------------------
// //______________iterates, callback function
// //______________reduces to a single values - number, array, object
// //______________1 parameter ('acc(accumulator)') - total of all caluclations
// //______________2 parameter ('curr') - current iteration/value

// const people = [
//   { name: 'bob', age: 20, position: 'developer', id: 1, salary: 300 },
//   { name: 'peter', age: 25, position: 'designer', id: 2, salary: 500 },
//   { name: 'susy', age: 30, position: 'the boss', id: 3, salary: 200 },
//   { name: 'anna', age: 35, position: 'the boss', id: 4, salary: 500 },
// ];

// const total = people.reduce(function (acc, currItem) {
//   console.log(`total ${acc}`);
//   console.log(`current money: ${currItem.salary}`);
//   acc += currItem.salary;
//   return acc;
// }, 500);

// console.log(total);
// console.log(' ');

// const total1 = people.reduce(function (acc, currItem) {
//   console.log(acc);
//   console.log(currItem);
//   return (acc += currItem.salary);
// }, 500);

// console.log(total1);
// console.log(' ');

// //-------------------self developed Reduce function------------------------
// const Reduce = function (fun5, init, array) {
//   for (let index = 0; index < array.length; index++) {
//     init = fun5(init, array[index]);
//   }
//   return init;
// };

// // -------------------self developed function test-------------------------

// const total3 = Reduce(
//   function acc(acc, currItem) {
//     console.log(acc);
//     console.log(currItem);
//     return (acc += currItem.salary);
//   },
//   500,
//   people
// );

// console.log(total3);
// console.log(' ');

// const total2 = Reduce(
//   function acc(acc, currItem) {
//     console.log(`total ${acc}`);
//     console.log(`current money: ${currItem.salary}`);
//     return (acc += currItem.salary);
//   },
//   500,
//   people
// );

// console.log(total2);
// // ----------------------------------------------------------------------
// ----------------------------Dare Object----------------------------------
// const months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

// const days = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ];

// const date = new Date();
// // const date = new Date('1 / 12 / 2004');
// const month = date.getMonth();
// console.log(months[month]);

// const day = date.getDay();
// console.log(days[day]);
// console.log(date.getDate());
// console.log(date.getFullYear());

// const sentence = `${days[date.getDay()]}, ${date.getDate()} ${
//   months[date.getMonth()]
// } ${date.getFullYear()}`;

// console.log(sentence);
// document.body.innerHTML = sentence;
