//32. Strict Mode
// 'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriverLicence = true;
// if (hasDriversLicence) console.log('I can drive');

// const interface = 'Audio';

//33. Functions

// function logger() {
//     console.log('My name is Jonas');
// }

// logger(); //invoking/running/calling the function

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

//34. Function declarations and expressions

// Declaration
// const age1 = calcAge1(2000);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// console.log(age1);

// // Expression/anonimna funkcija
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age2);

//35. Arrow Function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirements = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirements(2000, 'Ana'));
// console.log(yearsUntilRetirements(1974, 'Boban'));

//36. Functions calling other functions

// function cutFruitPieces(fruit) {
//     return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// 37. Reviewing Functions

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirements = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return retirement;
//     } else {
//         console.log(`${firstName} is already in retirement`);
//         return -1;
//     }

//     //return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirements(1991, 'Jonas'));
// console.log(yearsUntilRetirements(1970, 'Mike'));

//39. Arrays

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'ana';
// const ana = ['ana', 'petrovic', 2023 - 2000, 'teacher', friends];
// console.log(ana);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [age1, calcAge(years[1]), age3];
// console.log(ages);

// 40. Basic Array Operations 

// const friends = ['michael', 'steven', 'peter'];
// const newLength = friends.push('jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('john');
// console.log(friends);

// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('steven'));
// console.log(friends.includes('steven'));
// console.log(friends.push(23));
// console.log(friends.includes('23'));

// if (friends.includes('ana')) {
//     console.log('you have a friend ana');
// } else {
//     console.log('you do not have a friend ana');
// }

// const ana = {
//     firstName: 'Ana',
//     lastName: 'Petrovic',
//     age: 2023 - 2000,
//     job: 'multimillioner',
//     friends: ['pera', 'zika', 'mika']
// };

// console.log(ana);

// // dot notation
// console.log(ana.lastName);

// // bracket notation
// console.log(ana['lastName']);

// const nameKey = 'Name';
// console.log(ana['first' + nameKey]);
// console.log(ana['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

// if (ana[interestedIn]) {
//     console.log(ana[interestedIn]);
// } else {
//     console.log('Wrong input');
// }

// ana.location = 'New York';
// ana['instagram'] = '@anabanana';
// console.log(ana);

// // Challenge
// //jonas, 3, michael
// console.log(`${ana.firstName} has ${ana.friends.length} friends, and her best friend is called ${ana.friends[0]}`);


//44. Object methods 
// const ana = {
//     firstName: 'Ana',
//     lastName: 'Petrovic',
//     birthYear: 2000,
//     job: 'multimillioner',
//     friends: ['pera', 'zika', 'mika'],
//     hasDriverslicence: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function () {
//     //     //console.log(this);
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         if (this.hasDriverslicence === true) {
//             this.message = `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and she has a driver's licence`;
//         } else {
//             this.message = `${this.firstName} is a ${ana.age}-year old ${this.job} and she has no driver's licence`;
//         }
//         return this.message;
//     }
// };

// console.log(ana.calcAge());
// // console.log(ana.['calcAge'](1991));

// console.log(ana.calcAge());
// console.log(ana.age);
// console.log(ana.age);
// console.log(ana.age);

// // Challenge
// // Jonas is a 46-year old teacher, and he has a driver's licence

// console.log(ana.getSummary());

//46. For loop

// for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting weights repetition ${rep}`);
// }

// const anaArray = [
//     'Ana',
//     'Petrovic',
//     2037 - 2000,
//     'multimillioner',
//     ['seba', 'joca']
// ];

//47. Looping arrays, breaking and continuing

// const types = [];

// for (let i = 0; i < anaArray.length; i++) {
//     console.log(anaArray[i], typeof anaArray[i]);

//     //types[i] = typeof anaArray[i];
//     types.push(typeof anaArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];

// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2023 - years[i]);
// }

// console.log(ages);

// for (let i = 0; i < anaArray.length; i++) {
//     if (typeof anaArray[i] !== 'string') continue;

//     console.log(anaArray[i], typeof anaArray[i]);
// }

// for (let i = 0; i < anaArray.length; i++) {
//     if (typeof anaArray[i] === 'number') break;

//     console.log(anaArray[i], typeof anaArray[i]);
// }

// 48. 

// const anaArray = [
//     'Ana',
//     'Petrovic',
//     2037 - 2000,
//     'multimillioner',
//     ['seba', 'joca']
// ];

// for (let i = anaArray.length - 1; i >= 0; i--) {
//     console.log(anaArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`starting exercise ${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`lifting weight repetition ${rep}`);
//     }
// }

//49. the while loop
// let rep = 1;
// while (rep <= 10) {
//     console.log(`lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('loop is about to end...');
// }

