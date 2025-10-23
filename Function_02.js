function calculateCartPrice(val1,val2, ...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,500,2000))  //num1 return kiya h means val1 = 200 and val2 = 400 and rest num1 forms a array




//***************functions using objects*************//
let user = {
    username:"Mohit Yadav",
    CoursePrice:999
}
function handleObject(anyObject){
    console.log(`My Name is ${anyObject.username} and i bought a course in ${anyObject.CoursePrice}`)

}
// handleObject(user)




//********function using Array************//
let myNewArray = [200,"Montyy","Rickyy",95];
function returnSecondValue(anyArray){
    return anyArray[1];
}
console.log(returnSecondValue(myNewArray))
//console.log(returnSecondValue([200,"Montyy","Rickyy",95]))
