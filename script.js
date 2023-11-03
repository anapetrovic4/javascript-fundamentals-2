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

const ana = {
    firstName: 'Ana',
    lastName: 'Petrovic',
    age: 2023 - 2000,
    job: 'multimillioner',
    friends: ['pera', 'zika', 'mika']
};

console.log(ana);

// dot notation
console.log(ana.lastName);

// bracket notation
console.log(ana['lastName']);

const nameKey = 'Name';
console.log(ana['first' + nameKey]);
console.log(ana['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

// if (ana[interestedIn]) {
//     console.log(ana[interestedIn]);
// } else {
//     console.log('Wrong input');
// }

ana.location = 'New York';
ana['instagram'] = '@anabanana';
console.log(ana);

// Challenge
//jonas, 3, michael
console.log(`${ana.firstName} has ${ana.friends.length} friends, and her best friend is called ${ana.friends[0]}`);


