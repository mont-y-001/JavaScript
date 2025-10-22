function greet(greeting){
    console.log(greeting + "," + this.name);
}
const person = {name:"Mohit Yadav"};
greet.call(person,"Hello");


// At a high level, the .call() method temporarily assigns the function to the object you provide as thisArg, invokes it, and then removes it.