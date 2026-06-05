//Using Set Method
let arr = [1,2,2,23,21,4,5,4,5,6,7];
let newArr = [...new Set(arr)];
console.log(newArr);

//using loop
let unique = [];
for(let i = 0;i<arr.length;i++){
    if(!unique.includes(arr[i])){
        unique.push(arr[i]);
    }
}
console.log(unique);
