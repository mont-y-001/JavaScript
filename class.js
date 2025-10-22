class User{
    constructor(username,password,email){
        this.username = username;
        this.password = password;
        this.email = email;
    }

    encryptPassword(){
    return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("chaiVAALa",8373,"my266620")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());