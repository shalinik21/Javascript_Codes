//Stack(primitive):Copy
//Heap(Non-primitive):Reference

//let myname="Shalini"

let anotherName=myname
anotherName="Shashwat"

console.log(myname);
console.log(anotherName);

let userOne={
    email:"usera@google.com",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="shalu@google.com"

console.log(userOne.email);
console.log(userTwo.email);
