const marvel_heroes = ["Natasha","Spiderman","Groot"]
const dc_heroes = ["Superman","Batman","Flash"]

//const All_heroes = marvel_heroes.concat(dc_heroes)
//console.log(All_heroes)

const All_heroes2 = [...dc_heroes,...marvel_heroes]   //*** IMPORTANT CONCAT METHOD****//
console.log(All_heroes2)

//.Flat(1,2,3...infinity) is used to spread out array(array ke andar array)
//.isArray used to ask wheater that is array or not

console.log(Array.isArray("Monty"))
console.log(Array.from("Monty"))  //.from used to convert into array 
console.log(Array.from({name: "Mohit"})) //interesting give [] ,we have to define key value pair

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1,score2,score3)) //convert all variables number or string into one array 
 

