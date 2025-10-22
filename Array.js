const myArr = ["Thor","Iron Man","Captain America","Loki"]
//console.log(myArr[1])

const myArr2 =  new Array(0,3,7,8,2);
//console.log(myArr2[2]) 

//Array Method

//myArr2.push(9);
//myArr2.unshift(98) //add at starting position but not convient for large data
//myArr2.shift()

//console.log(myArr2.includes(6))  //check value exist or not(data type boolean)

//console.log(myArr2.indexOf(19)) //same as include but not boolean

//const newArr = myArr2.join()  //data convert into string form

console.log("A",myArr2)

const spl1 = myArr2.slice(1,3) //pick element from domain to range(<range) and no change in original array
console.log("B",spl1)
console.log(myArr2)

const spl2 = myArr2.splice(1,3) //manipulate original array and <=range
console.log("C",spl2)

console.log(myArr2)