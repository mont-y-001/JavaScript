let name = "Mohit";
let age = 23;
let isStudent = true;
let data = null;
let x;
let arr = [1, 2, 3];

console.log(typeof name);      // string
console.log(typeof age);       // number
console.log(typeof isStudent); // boolean
console.log(typeof data);      // object
console.log(typeof x);         // undefined
console.log(typeof arr);       // object

//Interview Perspective
console.log(typeof "Hello");     // string
console.log(typeof 100);         // number
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object (JavaScript bug)
console.log(typeof NaN);         // number
console.log(typeof {});          // object
console.log(typeof []);          // object
console.log(typeof function(){});// function