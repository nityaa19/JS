// "reduce" functionality

const myNums=[1,2,3,4,5]

// const myTotal = myNums.reduce(function(acc,currVal){
//   console.log(`acc: ${acc} and currVal: ${currVal}`)
//   return acc+currVal
// },0)

const myTotal=myNums.reduce((acc,curr) => acc+curr,0)

console.log(myTotal);

