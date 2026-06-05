//##MAP
// let arr = [10,20,30];
//  arr.map((number,index)=>{
//     console.log(number+1);
//     console.log("Index value is: "+ index);

// })

//##FILTER
let arr = [2,1,5,4,"Mohit",10];
let evenarr = arr.filter((number)=>{
    if(number%2 == 0){
        return true;
    }else{
        return false;
    }
});
console.log(evenarr)

//##shift(left se) = pop(right se)
//##Slice => print value
//##splice => replace or insert new item on certain index
//##Reduce => accumalotor(default val is arr 0 index & can give external val) & current(default val is 1 index & if acave external val then current will assign on 0index )