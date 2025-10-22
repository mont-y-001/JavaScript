//object Literals
const mySym = Symbol("Key1")

const JsUser = {
    Name:"Mohit",
    "Full Name": "Mohit Yadav",   //key is stored in braces but didn't shoew but in this case we are showing it(also check how to accesss)
    Age : 21,
    Location:"Ghaziabad",
    email:"my266620@gmai.com",
    isLoggedIn: false,
    WhenLoggedIn:["Monday","Tuesday"],
    [mySym]: "myKey1"  //syntax to declare a symbol

}
//1st method of access
//console.log(JsUser.Name)
//2nd Method
//console.log(JsUser["email"])
//3rd Method
//console.log(JsUser["Full Name"])   //****Full Name can't be accessed by (. Method) so this method of accesss is very important 

//console.log(typeof JsUser[mySym]) //type is string but declares as a symbol

//JsUser.Name = "Montyyyyy";
//Object.freeze(JsUser)   //freeze ke bd kisi value me change nhi kr sakte
//console.log(JsUser)


JsUser.greeting = function()  //use small f(Capital Function is a constructor)
{
    console.log(`${this.Name}`);  //(it is called string interpelation )
}
JsUser.greetingTwo = function()
{
    console.log(`Hello Js User, ${this.email}`);
}
JsUser.greeting()   //don't give console.log as it gives undefine as it loggs return value
JsUser.greetingTwo()