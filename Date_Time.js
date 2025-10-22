//Dates
let myDate = new Date();
//console.log(myDate);

// console.log(myDate.toString());         //convert in ist date and time
// console.log(myDate.toDateString());    //show only date and day
// console.log(myDate.toLocaleString());  //used normal in school

let myCreatedDate = new Date(2025,5,16);  //***year/month/date
//console.log(myCreatedDate.toString());  //tolocalestring also used

let myTimeStamp = Date.now();
//console.log(myTimeStamp)
//console.log(Math.floor(Date.now()/1000))   //seconds

let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getMonth() + 1)

newDate.toLocaleString('default',{
    weekday: "long"
})

