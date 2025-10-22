// A Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.




// 🔹 Analogy: Ordering Pizza 🍕
// Imagine you're ordering a pizza using an app. The app is a Promise:
const pizzaPromise = new Promise((resolve,reject) => {
     const PizzaAvailable = false;
     if(PizzaAvailable){
        resolve("Pizza is Ready!!")
     }
     else{
        reject("Pizza is not available")
     }
})
// Now, you, the customer, wait for the result:
pizzaPromise.then(message => {
    console.log('success:',message);   //pizza is ready
})
.catch(error => {
    console.log('Failure:',error);
})
//ABOVE EXAMPLE IS BEST TO UNDERSTAND PROMISE 





const promiseOne = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Async task is completed');
        resolve()
    }, 1000)
})
promiseOne.then(() => {
    console.log("promise consumed");
}) ;

const promiseTwo = new Promise((resolve,reject) => {
    setTimeout(() => {
    resolve({username: "Chai",email:"Chai@example.com"})
    },1000)
})

promiseTwo.then((username) => {
    console.log(username)
})