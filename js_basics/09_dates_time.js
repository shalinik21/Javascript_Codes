// january 1 ,1970(utc)

//Dates

//let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof (myDate));

// let myCreatedDate=new Date(2023,0,23);
// let myCreatedDate0=new Date(2023,0,23,5,3);
// let myCreatedDate1=new Date("2023-01-14");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate0.toDateString());
// console.log(myCreatedDate1.toLocaleString());

// let myTimeStamp =Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));//conversion to second

let newDate=new Date()

console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));
