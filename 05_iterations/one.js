// for

// for (let i = 0; i <= 10; i++) {
//   console.log(i)
  
// }

// for(let i=0;i<=10;i++){
//   console.log(`Outer loop va;ue: ${i}`)
//   for(let j=0;j<5;j++){
//     console.log(`Inner loop value ${j} and inner loop ${i}`)
//   }
// }

let myArr=["flash","batman","Superman"]

// for (let index = 0; index < myArr.length; index++) {
//   const element = myArr[index];
//   console.log(element)
  
// }

for(let index=1;index<=20;index++){
  if(index==5){
    console.log(`Detected 5`)
    break//stops the loop immediately
  }
  console.log(`value of i is ${index}`)
}

for(let index=1;index<=20;index++){
  if(index==5){
    console.log(`Detected 5`)
    continue // skip for one time
  }
  console.log(`value of i is ${index}`)
}