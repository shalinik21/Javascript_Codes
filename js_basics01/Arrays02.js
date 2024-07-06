const marvel_heroes = ["Ironman", "Thor", "Captain America"];
const dc_heroes = ["Batman", "Superman", "Flash"];

//marvel_heroes.push(dc_heroes);
//console.log(marvel_heroes);

// const all_heroes = marvel_heroes.concat(dc_heroes)
// //Concatinates the values
// console.log(all_heroes);

//Spreading concept

//Another way of concatination
// const allHeroes=[...marvel_heroes,...dc_heroes]
// console.log(allHeroes);

//Other functions

console.log(Array.isArray("Shalini"))
console.log(Array.from("Shalini"))
console.log(Array.of([1,2,3,[4,5,[6,7]]]))
console.log(Array.from({name:"Shalini"}));//returns empty array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
