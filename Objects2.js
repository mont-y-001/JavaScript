//constructor se bnega Singleton
const tinderUser2 = {}  //Non-Singleton Object


//we can also create object like this
 const tinderUser = new Object()    //Singleton Object
 tinderUser.Name = "Mohit Yadav";
 tinderUser.email = "my266620@gmail.com";
 tinderUser.Location ="Ghaziabad";

 //console.log(tinderUser)

const regularUser = {
    username:{
        fullName:{
            FirstName:"Mohit",
            LatName:"Yadav"
        }
    }
}
//console.log(regularUser.username.fullName)

const obj1 = {a:1,b:2,c:3}
const obj2 = {d:4,e:5,f:6}

//const obj3 = {obj1,obj2}  //same problem as array gives(do alag obj dega na ki ek sigle object)


//**1st method **/
//const obj3 = Object.assign({},obj1,obj2) //{} islie di kyunki nhi denge too obje3 will be stored in obj1(but humko pta nhi chlega)
//console.log(obj3)

//*****2nd Method(spread Method) *****/
const obj3 = {...obj1,...obj2}
console.log(obj3)