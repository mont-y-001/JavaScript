// const User = {
//     username : "Mohit Yadav",
//     LoginCount : 4,
//     SignedIn : true,

//    getUserDetails:  ()=> {
//     console.log("Got user details  from database");
//    }
// }

// console.log(User.username);
// console.log(User.getUserDetails)
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this;
}
const userOne = new User("Mohit",4,true);  //new keyword role check using without new
console.log(userOne)