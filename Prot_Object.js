function multipleBy5(num){
    return num*5;
}

multipleBy5.power = 2;

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);


// An Object is a unique entity that contains properties and methods. For example “a car” is a real-life Object, which has some characteristics like color, type, model, and horsepower and performs certain actions like driving. The characteristics of an Object are called Properties in Object-Oriented Programming and the actions are called methods


//Object Literals
let person ={
    first_name : "Mohit",
    last_name: "Yadav",
    //method
    getfunction: function(){
        return (`The name of the Person is ${person.first_name} ${person.last_name}`)
    },

    phone_number: {
        mobile: 8676873664,
        landline:74674636733
    }
}
// console.log(person.phone_number.landline)
// console.log(person.getfunction());


// Using an Object Constructor.
function user(first_Name,last_Name){
    this.first_Name = first_Name;
    this.last_Name = last_Name;
}
// Creating new instances of person object
let user1 = new user("Mohit",21);
let user2 = new user("Zoyaa",20);
// console.log(user1.first_Name);
// console.log(`${user2.first_Name} ${user2.last_Name}`)

 