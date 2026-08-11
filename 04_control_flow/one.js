// if

/*
if(condition=> must be true){ 

 }
 */

// <, >, <=, >=, ==, !=, ===(if data Type is also important in comparision)

let temp=61

// if(temp=== 41){
//   console.log("less than 50")
// }
// else{
//   console.log("temprature is greater than 50")
// }





// let score=200

// if(score>100){
//   const power="fly"
//   console.log(`user power: ${power}`)
// }

// console.log(`user power: ${power}`)



const balance=1000
// if(balance>500) console.log("test"), console.log("test2")



// if(balance<500){
//   console.log("less than")
// }
// else if(balance<750){
//   console.log("less than 750")
// }
// else {
//   console.log("less than 1200")
// }



const userLoggedIn=true
const debitCard=true
const loggedInFromGoggle=false
const loggedInFromEmail=true
if(userLoggedIn && debitCard){
  console.log("allow to buy courses")
}
if(loggedInFromEmail || loggedInFromGoggle ){
  console.log("user logged in")
}
