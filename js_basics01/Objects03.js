//singleton
// Object.create .//declaration using constructor

//object literals

const mySym=Symbol("key1")

const jsUser={
    name:"Pookie",
    "full name" :"Pookie Kohli",
    //Syntax of symbol []
    [mySym] :"mykey1",
    age:18,
    location:"Kolkata",
    email:"pookie@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]


}

//Accesing the object

// console.log(jsUser.name);

// //Another way of accesing the value
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser.mySym);

jsUser.email="pookie@chatgpt.com"
//Object.freeze(jsUser);
//value will not change anymore
jsUser.email="pookie@micro.com"
//console.log(jsUser);

//functions are treated as variables
jsUser.greeting=function(){
    console.log("Hello JS user");
}

//`   ` -->String interpolation
jsUser.greetingtwo=function(){
    console.log(`Hello JS user, ${this.name}`);
}

//console.log(jsUser.greeting);//undefined~
//console.log(jsUser.greeting());
//if object is freezed
//TypeError: jsUser.greeting is not a function
//console.log(jsUser.greeting);//[Function (anonymous)]
//console.log(jsUser.greeting());//run successfully
console.log(jsUser.greetingtwo());//run successfully
console.log(jsUser.greetingtwo);//[Function (anonymous)]