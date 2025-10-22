//Imediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`Database Connected`)
})
();    //(;)semicolon is must if on't give then next fxn either normal function or arrow function will not execute and show error due to this semicolon

//()()   1st bracket=>definition of function and 2nd barcket=>execution call

( (name)=> {
    console.log(`Database Connected Again ${name}`)
})
("Mohit Yadav")

