function sayMyName(){     
    console.log("M")
    console.log("O")
    console.log("N")
    console.log("T")
    console.log("Y")
}
//sayMyName //It is reference
//sayMyName()  //bracket give execution to function,here we can give values inside brackets to execute calculation or anything



function AddTwoNumber(Number1,Number2){    //Parameter   
    let result = Number1 + Number2; 
    return result
    //console.log(Number1+Number2) //if we don't want to sstore parameter then we can use console.log directly
}
const result = AddTwoNumber(27,3)    //arguement
//console.log(result);






function loginUserMessage(username){
    if(username == undefined){    //(!username)
        console.log("Please Enter a Username")
        return   //return ke bd kuch bhi input/output work nhi krta
    }
    return `${username} just logged in`


}
console.log(loginUserMessage())  //if we don't give value in argument then it will give us UNDEFINED



//******(We can give parameter as default value but if value is pssed in arguement then it will overwrite parameter value)******/