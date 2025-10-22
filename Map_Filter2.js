//##Map###
let myNum = [1,2,3,4,5,6,7,8,9]
//let newNum = myNum.map((item) => item+10)
//console.log(newNum)


//We can do Chaining means map ke map or uske andar filter
let newNum = myNum
                  .map((item) => item*10)  //[10,20,30,40,50....]
                  .map((item) => item+1)   //[11,21,31,41,51....]
                  .filter((item) => item >=40)   //output [41,51,61....]
//console.log(newNum)



//##REDUCE Method=>Used in shopping cart to add products
const NewNum = [1,2,3,4]
//const myTotal    = NewNum.reduce((acc,currval) => acc+currval, 0)      //without using return
const myTotal = NewNum.reduce(function(acc,currval){
    //console.log(`Accumalator: ${acc} and current value: ${currval}`)
    return acc + currval;
} , 0      //0 is accumalator initial value
)
//console.log(myTotal);





const ShoppingCart = [
    {
        Cloth : "Pant",
        Price : 750
    },
    {
        Cloth : "Shirt",
        Price : 450
    },
    {
        Shoes : "RedTape",
        Price : 1700
    },
    {
        Cloth : "Lower",
        Price : 350
    },
]

const BillToPay = ShoppingCart.reduce((acc,item) => item.Price+acc, 0)
console.log(`Total Bill To Pay : ${BillToPay}`);

