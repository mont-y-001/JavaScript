const user = {
    Username : "Mohit Yadav",
    CoursePrice: 1999,

    welcomeBuyyers: function(){
        console.log(`${this.Username},welcome to the Website`)
        console.log(this)  //this define current context(in this case this define both objects one by one )
    }

}
// user.welcomeBuyyers();
// user.Username = "Sachin";
// user.welcomeBuyyers();
//console.log(this)   //this console gives us empty curly brackets as it refers to browser window



//#Example for calling function using this and this gives us undefined
// function chai(){
//     let username = "Mohit"
//     console.log(this.username)
// }
//chai()


//#Another example in this we store a function inside a variable
// const chai = function(){
//     let username = "Mohit"
//     console.log(this.username)
// }
// chai()


//#Arrow function also gives undefined if we call this function
// const chai = () => {
  
//     let username = "Mohit"
//     console.log(this.username)
// }
// chai()


//************ARROW FUNCTIONS*********//

//1st method to pass arrow function
 const sum = (num1,num2) => {
     return num1+num2;     //this is called explicit function(return is using)
 }
//console.log(sum(3,8))

//2nd Method to pass arrow Functions
const addTwo = (num1,num2) => num1+num2     //this is called implicit function(return is not using)
//console.log(addTwo(3,16))


//3rd Method to pass arroe functions
const addition = (num1,num2) => ({username1:"Sonty"})
console.log(addition())





