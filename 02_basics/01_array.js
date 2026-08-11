//array

const myArr=[0,1,2,3,4,5,6,7,true, "nitya"]
const myArr2=new Array(1, 2, "nirtya")
// console.log(myArr2)

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(10)//push in the starting of the array and shift all the remaining by one place
// myArr.shift()//remove the 1st element 
// (myArr.includes(9))//   true or false

// (myArr.indexOf(9))//if that ele is not exist then we will retun -1

// (myArr.indexOf(3)) //=> gives index of 3

const newArr=myArr.join()//make a whole string of array elements
// console.log(newArr)
// console.log(myArr)


///slice and splice

console.log("A",myArr);

const myn1=myArr.slice(1,3)//it gives 1 2 not 3 and dont change the original arr
console.log(myn1)
console.log("B",myArr)

const myn2=myArr.splice(1,3)//it takes out the ele 1 2 3 from the original arr and gives o/p as 1 2 3 
console.log(myn2)
console.log("C",myArr)

