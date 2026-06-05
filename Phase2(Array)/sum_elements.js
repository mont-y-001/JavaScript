let arr = [1,2,3,4,5,6];
let sum = 0;
for(let i = 0;i<arr.length;i++){
    sum += arr[i];
}
console.log(sum);

//Reduce method
let sum2 = arr.reduce((acc,curr) =>acc + curr,0);  //0 is initial value
console.log(sum2);