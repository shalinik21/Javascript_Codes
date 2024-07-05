//#Primitive

//7 types : String ,Number ,Boolean ,null(empty),Undefined,symbol,BigInt
//JS is dynamically typed or statically typed????

 const score=100
// const score:number=100(typescript)
const scoreValue=100.3;
const isLoggedIn =false;
const outsideTemp=null;

let userEmail;

const id=Symbol('123')
const another_id=Symbol('123')


// console.log(id==another_id)

// const bigNumber =334354656577677n

// console.log(bigNumber)


//#Reference type(Non-primitive)

//Array,Objects,Functions

const heroes =["IronMan","Spiderman"];//arrays

let myObj={
    name:"Tony Stark",
    age:45
}//object between {}

const myFunction =function(){
    console.log("Hello World");
}

console.log(typeof myObj);//object
console.log(typeof myFunction);//object function





