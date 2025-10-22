//************7 Datatypes are primitive:*********************

let Name = "Mohit Yadav"; //1.string
console.log(typeof "Mohit Yadav");
console.log(Name);

let age = 21; //2.number
console.log(typeof age)

let isLoggedIn = false; //3.boolean
console.log(typeof isLoggedIn);
//4.bigint
//5.symbol

let cityName; //6.undefined
console.log(typeof cityName)

let WeatherData = null;
console.log(typeof WeatherData)


//********3 types of Non Primitve DataTypes **************
 //1.Array(typesof Object)
 const Marvel = ["IronMan","Captain america", "Thor","Loki"];  
 console.log(Marvel)
 console.log(typeof Marvel)

//2.Object
let myObj = {
    Name : "Mohit",
    Age : 20,
    CollegeId : 21/482, 
}
console.log(typeof myObj)
console.log(myObj)

//3.Function
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction)
console.log(myFunction)