let arr = [1,4,2,-67,85,23,23];
let max = Number.MIN_SAFE_INTEGER;
for(let i = 0;i<arr.length;i++){
  if(max<arr[i]){
    max = arr[i];
  }
}
console.log(max);

//Using Method
let max2 = Math.max(...arr);
console.log(max2);

let min = Math.min(...arr);
console.log(min);