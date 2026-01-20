//data in JS are devided into 2 types 
//JS is dynamicall Typed lang 

// 1. primitive 22. non-primitive(or reference type )

//primitive : 7 categories => (String, Number, Bollean , null, undefined, Symbol, BigInt)



//Reference (non primitive) =>(Array, Objects, Functions)

const score= 100
const scoreValue=100.3

const isLoggedIn= true

const outsideTemp=null
let userEmail

const id=Symbol('123')
const anotherId=Symbol('123')

// console.log(id==anotherId)

const bigNumber= 652264654215474516n
// console.log(typeof bigNumber);


const heros=["shaktiman", "nagRaj" , "doga"]

let myObj={
  name: "nitya",
  age: 22,
}

const myFun=function(){
  // console.log("HEllow World")
}

// console.log(typeof id);



//++++++++++++++++++++++++++++++++++_____MEMORY_____++++++++++++++++++++++++++++++++++++++++

//stack memory(primitive) and heap memory(Non-primitive)
//stack(primitive)
let myCollege="SRM"
let yourCollege=myCollege
console.log(myCollege)// =>SRM
console.log(yourCollege)// =>SRM

yourCollege="VIT"
console.log(myCollege)// =>SRM
console.log(yourCollege)// =>VIT

//heap (non-primitive/reference )
let userOne={
  name:"nitya",
  email:"nitysanad1909@gmail.com"
}

let userTwo=userOne;
console.log(userOne.email)// =>nitysanad1909@gmail.com
console.log(userTwo.email)// =>nitysanad1909@gmail.com

userTwo.email="nk1706@srmist.edu.in"

console.log(userOne.email)// =>nk1706@srmist.edu.in
console.log(userTwo.email)// =>nk1706@srmist.edu.in








