//arrow function doest not have "this"
//"this" will print the correct context
const user={
  username: "nitya",
  price:999,

  welcomeMessage: function(){
    console.log(`${this.username} , Welcome to website`)
    // console.log(this) => this will print the complete user 
  }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//   let username="hitesh"
//   console.log(this.username); => here this will give undefine cuz this can't give output in function 
// }
// chai()

// const chai =function(){
//   let username="nitya"
//   console.log(this.username)
// }
// chai()

// const chai=()=>{
//   let username="nitya"
//   console.log(this.username) => here also it will not give op
// }
// chai()


//if we are using curly braces then we have to use retuen keyword(called explicit return)
//implicit return is that in which we dont use return keyword

const addTwoNo=(num1,num2)=> num1+num2 // this can run in this way also 

console.log(addTwoNo(3,4))

const myArr=[2,3,5,6,5]
myArr.forEach(()=>)



