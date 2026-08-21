function SetUsername(username){
  //complex DB calls
  this.username=username
  console.log("called")
}

function createUser(username, email, passowrd){
  SetUsername.call(this,username) //-> call is used to pass the current execution context to other function and this is used to take to reference of the other function

  this.email=email
  this.passowrd=passowrd
}

const chai= new createUser("chai","chai@fb.com","123")
console.log(chai)