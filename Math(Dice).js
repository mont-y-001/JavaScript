const Score = 400
console.log(Score)

const newScore = new Number(400)
console.log(newScore)

//************//
const sco =  newScore.toString();
console.log(typeof sco)

//toFixed = give  zero after decimal
//toPrecision

const AnyNumber = 23.876
console.log(AnyNumber.toPrecision(3));


//***********Maths functions***********/
const hundred = 1000
console.log(Math)
console.log(Math.abs(-4)) //-ive value +ive ho jayegi
console.log(Math.round(8.5)) //round of but 8.5 gives 9
console.log(Math.ceil(8.1))  //next integer
console.log(Math.floor(8.1)) //previous integer value

console.log(Math.min(2,6,15,1,0))  //max and min used for array
 
const min = 10;
const max = 20;
//console.log(Math.floor(Math.random() * (max - min + 1)) + 10);


//####################Dice Game################################
const mini = 1;
const maxi = 7;
console.log(Math.floor(Math.random() * (maxi -mini + 1)) + mini)



