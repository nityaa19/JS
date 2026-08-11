// function sayMyName(){
//   console.log("N")
//   console.log("I")
//   console.log("T")
//   console.log("Y")
//   console.log("A")
// }

// sayMyName()

// function addTwoNumbers(number1, number2){// paremeters are the variables which are passed inside the function
//   console.log(number1+number2);
  
// }

function addTwoNumbers(number1, number2){
  // let result =number1+number2
  return number1+number2
  
}
const result =addTwoNumbers(3,6) // when the data is passed during calling then it is called as arguments

// console.log(result)

function loginUserMessage(userName="Sam"){
  if(!userName){
    console.log("Please enter user Name")
    return 
  }
 
    return `${userName} just logged in`
  
  
}

// console.log(loginUserMessage("hitesh" ))

function calculateCartPrice(...num){ //=> ... is both rest and spred operator
  return num
}

console.log(calculateCartPrice(2,8,9,9))

const user={
  userName:"hitesh",
  price: 199
}

function handleObject(anyObject){
  console.log(`userName is ${anyObject.userName} and price is ${anyObject.price}`)
}

// handleObject(user)

let myNewArray=[200,400,500,5000]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,500,5000]))