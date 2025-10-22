const userEmail = "my266620@gmail.com";

// if(userEmail){
//     console.log("Got user Email");
// }
// else{
//     console.log("Don't have user email")
// }

//falsy values => false,0,-0,BigInt 0n,""(no gap b/w string),null,,undefined,NaN
//Truthy Values => True, [], "0", "False", " "(string ke andar 1 gap),{},function(){}


//******Nullish Coalescing Operator(??): null undefined
//let val1 = 5 ?? 10;
// let val1 = null ?? 15;
// let val1 = undefined ?? 20;
//console.log(val1);




//****Terniary Operator
//Condition ? True : False

const iceTeaPrice = 1000;
iceTeaPrice >= 800 ? console.log("Less than 800") : console.log("More than 800")