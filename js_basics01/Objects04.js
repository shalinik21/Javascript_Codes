const tinderUser=new Object()//singleton object

//const tinderUser={}//object literals
tinderUser.id="123abc"
tinderUser.name="Pookie"
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }

    }
}

//console.log(regularUser.fullname?.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e"}

//const obj3={obj1,obj2};

//const obj3=Object.assign({},obj1,obj2,obj4);

const obj3={...obj1,...obj2}
//console.log(obj3);

const users=[
    {
        id:123,
        email:"abc@gmail.com"
    },
    {
        id:123,
        email:"abcd@gmail.com"
    },
    {
        id:123,
        email:"abcde@gmail.com"
    }
]

users[1].email
//console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged"));

const course={
    coursename:"js in hindi",
    price:1000,
    courseInstructor:"hitesh"
}
 
//traditional way
//course.courseInstructor

const  {courseInstructor}=course
const  {courseInstructor:instructor}=course
//de-structuring the object

console.log(courseInstructor);
console.log(instructor);

//React

// const navbar=({company})=>{

//     {}=destructuring
// }

// navbar(company="shalini")


//------------------------------------
//------API---------------

// {}=json

// {
//     name:"Shalini",
//     coursename:"js in hindi ",
//     price:999
// }

//API in form of arrays

// [
//     {},
//     {},
//     {}
// ]