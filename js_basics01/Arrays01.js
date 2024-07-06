//Arrays

//Arrays in js can have values of different datatypes
//Memory allocated is expandable
//It makes a shallow copy of code that is 
//the changes made are referential thus it will get reflected on the original one

//Array creation in js

const myArr=[1,2,3,4,5];
// const myArr1=new Array(1,"Shalini");

// console.log(myArr);
// console.log(myArr1);

//---Array methods---

// myArr.push(123);//add element at the end of array
// myArr.pop();//deletes the last element from the array
// myArr.unshift(23);//adds the given element at the beginning of the array
// console.log(myArr);
// myArr.shift();//removes the first element of the given array
// console.log(myArr);


console.log(myArr.includes(2));//returns a boolean value
console.log(myArr.indexOf(3));//returns the index of the given element if exist otherwise return -1

// myArr2=myArr.slice(2,4);//slices the array from index 2 to 4(excluding 4)
// console.log(myArr2);
// console.log(myArr);//Does not manipulates the original array
// myArr3=a=myArr.splice(2,4);//slices the array from index 2 to 4(including 4)
// console.log(myArr3);
// console.log(myArr);//it also manipulates the original array by taking of the sliced element

myArr4=myArr.join();//converts the array to string
console.log(myArr4);