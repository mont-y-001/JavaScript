let str = "123";

console.log(Number(str)); // 123
console.log(+str);        // 123

str = "123px";
let num = parseInt(str);   //Important
console.log(num);

str = "12.456"
let ne = parseFloat(str);   //Important
console.log(ne);