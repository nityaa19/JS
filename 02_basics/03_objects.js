//singleton  => if we declear like literals then singleton will not be formed

//object literals

//Object.create => constructor way to creat a object  and singleTon will be formed into this 

const mySym=Symbol("key1")

const jsUser={
  name:"Nityanand",
  "full name": "Nityanand Kumar",
  [mySym]:"myKey1",  // this is the correct way to acess the symbol
  age: 19,
  location:"Chennai",
  email:"nityanand1909@gmail.com",
  isLoggedIn: true,
  lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email) => first way to access the object 
// console.log(jsUser["email"]) => another way of accessing the objects 
// console.log(jsUser["full name"])
// console.log( jsUser[mySym]) => way to access the symbols 


// jsUser.email="hitesh@chatgpt.com"
// //Object.freeze(jsUser)
// jsUser.name="nitsjkhj"
// console.log(jsUser.name)
// console.log(jsUser.email)
// console.log(jsUser)


jsUser.greeting=function(){
  console.log("Heloo JS user")
}

jsUser.greetingTwo=function(){
  console.log(`Hello JS user, ${this.name}`)
}
jsUser.greeting()
jsUser.greetingTwo()
