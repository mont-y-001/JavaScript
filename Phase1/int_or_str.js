function checkType(value){
    if(typeof value === "number"){
       return "Number";
    }else if(typeof value === "string"){
       return "String"
    }else{
      return "Other";
    }
}
console.log(checkType(100));
console.log(checkType("Mohit Yadav"));
console.log(checkType(true));
console.log(checkType(NaN));
console.log(number == NaN);