//For Loop

//  for(index = 0;index<10;index++){
//     const element = index;
//     if(element == 4){
//         console.log("4 is best Number")
//     }
//     console.log(element);
//  }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer Loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         //console.log(`Ineer Loop: ${j} & inner Loop ${i}`)
//         console.log(i + "*" + j + "=" + i*j);

//         }    
//}

//***Break and Continue
let arr = [5,6,89,21,2,3,23];
for(i = 0;i<7;i++){
    const element = arr[i]
    if(element == 2 ){
        console.log("Element is detected")
        //break;
        continue;
    }
    console.log(element)
}