const user =  {
  username: "Nityanand",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){
    // console.log(`username: ${this.username}`);
    console.log(this);
    
    
  }
}

// console.log(user.username);
// console.log(user.getUserDetails())
// console.log(this);// -> {}



function User(username, loginCount, isLoggedIn){
  this.username= username
  this.loginCount=loginCount
  this.isLoggedIn=isLoggedIn

  this.greeting=function(){
    console.log(`Welcome ${this.username}`);
  }

  return this
}

const userOne= new User("hitesh",9,true)
/*
by using new keyword new object is created everytime in step 1
step 2: constructor function is called (pack all the arguments and give)
step 3: all the arguments are injected into this keyword
step 4: return in the function 
*/
const userTwo= new User("Nitya",10,false)
console.log(userOne)//will print the object created with userOne
console.log(userOne.constructor)
// console.log(userTwo)

