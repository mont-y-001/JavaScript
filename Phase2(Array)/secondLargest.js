// let arr = [1,32,4,56,5433,22,12,34,3,1,4];
// arr.sort((a,b)=>a-b);
// console.log(arr[2]);

//using loop
let arr = [1, 4, 2, 67, 85, 23, 23];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);