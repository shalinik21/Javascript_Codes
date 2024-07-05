const accountId= 234534
var accountEmail ="shalini@yahoo.com"
let password ="23415"
accountCity="Jaipur"
accountState=undefined;


//accountId=2345
// TypeError: Assignment to constant variable
console.table([accountId,accountEmail,password,accountCity,accountState])

//var is not prefered because of issue of
// block scope and functional scope