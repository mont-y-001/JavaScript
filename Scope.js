
//global function is accessible in local scope but local function is not accessible in global scope
function BadeBhaiya(){
    const username = "Sachin";

    function ChoteBhaiya(){
        const IceCream = "Choclate";
        console.log(username)
    }
    //console.log(IceCream)   //can't access outside the function
    ChoteBhaiya();
}
//BadeBhaiya();



//***Another Example*****//
if(true){
    const username = "Mohit"
    if(true){
        const website = " Youtube"
        //console.log(username+website)
    }
   // console.log(website)
}




//#We can pass arguement after/before parameter or function
console.log(One(34));   //this is arguement and no error
function One(num1){
    return num1;
}



//But in this this if we store function in any variable then it can't be decalared before parameter or function
const anotherFunc = function Two(num2){
    return num2;
    
}
console.log(anotherFunc(65));
//console.log(anotherFunc(Two(65)))