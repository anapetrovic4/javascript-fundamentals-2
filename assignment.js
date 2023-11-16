// 1 Lecture: Functions

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// description1 = describeCountry('Serbia', '6', 'Belgrade');
// console.log(description1);

// description2 = describeCountry('Russia', '180', 'Moscow');
// console.log(description2);

// description3 = describeCountry('Germany', '80', 'Berlin');
// console.log(description3);

// 2 Lecture: Function Declarations vs Expressions

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

// // const serbia = percentageOfWorld1(6);
// // console.log(serbia);

// // const germany = percentageOfWorld1(80);
// // console.log(germany);

// // const china = percentageOfWorld1(1441);
// // console.log(china);

// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
// }

// const serbia = percentageOfWorld2(6);
// console.log(serbia);

// const germany = percentageOfWorld2(80);
// console.log(germany);

// const china = percentageOfWorld2(1441);
// console.log(china);

// 3 Lecture: Arrow Functions

// const percentageOfWorld3 = population => (population / 7900) * 100;
// const serbia = percentageOfWorld3(6);
// console.log(serbia);

// const germany = percentageOfWorld3(80);
// console.log(germany);

// const china = percentageOfWorld3(1441);
// console.log(china);

// 4 Lecture: Functions calling other functions

// function describePopulation(country, population) {
//     const percentage = percentageOfWorld3(population);
//     return `${country} has ${population} million people, which is about ${percentage} of the world.`;
// }

// console.log(describePopulation('serbia', 6));

// 5 Lecture: Introduction to Arrays

// const populations = [6, 10, 80, 1441];

// if (populations.length === 4) {
//     console.log('Array has 4 elements');
// } else {
//     console.log('Array does not have 4 elements');
// }

// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

// console.log(percentages);

// 6 Lecture: Basic Array Operations (Methods)

const neighbours = ['Macedonia', 'Albania', 'Montenegro', 'Bosnia', 'Croatia', 'Hungary', 'Romania', 'Bulgaria'];

// neighbours.push('Utopia');
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('Germany')) {
//     console.log('Probably not a central European country');
// } else {
//     console.log('Probably a central European country');
// }

// 7 Lecture: Introduction to Objects

// const myCountry = {
//     country: 'Serbia',
//     capital: 'Belgrade',
//     language: 'Serbian',
//     population: 6,
//     neighbours: neighbours
// };

// // console.log(myCountry);

// // 8 Lecture: Dot vs. Bracket Notation

// console.log(`Serbia has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// 9 Lecture: Object Methods

// const myCountry = {
//     country: 'Serbia',
//     capital: 'Belgrade',
//     language: 'Serbian',
//     population: 6,
//     neighbours: neighbours,

//     describe: function () {
//         console.log(`Serbia has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
//     },

//     checkIsland: function () {
//         this.neighbours.length === 0 ? this.isisland = true : this.isIsland = false;

//         return this.isIsland;
//     }

// };

// myCountry.describe();
// console.log(myCountry.checkIsland());

// 10 Lecture: Iteration the for loop

// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting!`);
// }

// 11 Lecture: Looping arrays, breaking and continuing

// const populations = [6, 10, 80, 1441];
// const percentages2 = [];

// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

// for (let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld1(populations[i]));
// }

// console.log(percentages2);
// console.log(percentages);

// 12 Lecture: Looping backwards and loops in loops

// const listOfNeighbours = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Russia']
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     for (let j = 0; j < listOfNeighbours[i].length; j++) {
//         console.log(`Neighbour: ${listOfNeighbours[i][j]}`)
//     }
// }

// 13 Lecture: The while loop

// const populations = [6, 10, 80, 1441];
// const percentages3 = [];

// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

// let i = 0;

// while (i < populations.length) {
//     percentages3.push(percentageOfWorld1(populations[i]));
//     i++;
// }

// console.log([percentages3]);