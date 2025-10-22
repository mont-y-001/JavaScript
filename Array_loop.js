//##For Of Loop######

// const arr = [2,43,76,12,34];
// for (const val of arr) {    //no increament direct print values
//     console.log(val)
    
// }

// let greeting = "Welcome To The World";
// for(const char of greeting){
//     console.log(`Each character is ${char}`)  //##Important
// }




//##Use of Map() => print a object in key value pair and delete copy kay alue pair#####
// let val = new Map()
// val.set("In","India")
// val.set("In","Indonesia")
// val.set("Fr","France")
// val.set("Us","United States Of America")
// //console.log(val);

// for(const key of val){   //for of loop objects pr work nhi krta
//     console.log(key)
// }




//##For in Loop =>used to access object values####

// const myObj = {
//     js : "Javascript",
//     rb: "Ruby",
//     swift: "Swift by apple",
//     cpp: "C++"
// }

// for(const key in myObj){
//     console.log(`${key} : ${myObj[key]}`);
// }


 const prog = ["js","swift","java","Python"];
 //for(const val in prog){
//     console.log(prog[val]);
//}





//#####For Each Loop  => used in array object
const coding = ["js","Python","Swift","go","Java"]
// coding.forEach(function(item){
//     console.log(item);
// }
//)
//coding.forEach((item,index,arr) => {
    //console.log(item,index,arr);
//})



//###ARRAY OBJECT EXAMPLE
const Desktop = [
    {
        Model:2017,
        Name:"Hp Pavillion"
    },
    {
        Distributor:"Elon Musk",
        Year:2020
    },
    {
        ModifiedVersion:"Hp Macbook",

    },
];
Desktop.forEach((item) =>{
    if(item.Distributor){
    console.log(item.Distributor);
    }
})





