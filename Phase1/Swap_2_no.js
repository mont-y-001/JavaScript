let a = 5;
let b = 3;

a = a+b; //8
b = a-b;  //5
a = a-b;  //3
// console.log("a: "+ a + " b :" + b);

//Destructing Modern JS
a = 15;
b = 10;

[a,b] = [b,a];
console.log("a: "+ a + " b :" + b);


//XOR
a = 10;
 b = 20;

a = a ^ b; // 30
b = a ^ b; // 10
a = a ^ b; // 20

console.log(a, b); // 20 10
