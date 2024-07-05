const name="shalini Kashyap"
const repoCount= 50

// console.log(name + repoCount+" Value");

console.log(`Hello my name is ${name} and my repo Count is${repoCount}`);

const gameName = new String('shalusi-shalu-shili')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(-6,4);
console.log(newString);

const anotherString=gameName.slice(-6,4);
console.log(anotherString);

const newStringOne ="   shalini   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://shalini.com/shalini kashyap";

console.log(url.replace('%20','-'));

console.log(url.includes('shalini'))

console.log(gameName.split('-'))