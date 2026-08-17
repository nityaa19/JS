const promiseOne=new Promise(function(resolve,reject){
  //do an async task
  //DB calls, Cryptography, network
  setTimeout(function(){
    console.log('Async task is complete')
    resolve()
  },1000)
})

promiseOne.then(function(){
  console.log("Promise Consume")
})

new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Async task 2");
    resolve()
  },1000)
}).then(function(){
  console.log("Async 2 resolved");
})


const promiseThree= new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({username: "chai =",email: "chai@example.com"})
  },1000)
})

promiseThree.then(function(user){
  console.log(user)
})


const promiseFour=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=true;
    if(!error){
      resolve({username:"Nityanad", password:"12345"})
    }else{
      reject('ERROR: Somthing went wrong')
    }
  },1000)
})

promiseFour
.then((user)=>{
  console.log(user)
  return user.username
})
.then((myUsername)=>{  // chaining 
  console.log(myUsername)
})
.catch((errorMessage)=>{
  console.log(errorMessage)
}).finally(()=>{
  console.log("The promise is either resolved or rejected")
})

//other approch 
const promiseFive= new Promise(function(resolve,reject){
  setTimeout(()=>{
    let error=true;
    if(!error){
      resolve({username:"Nityanand Kumar", password:"hitesh@123"})
    }else{
      reject('Error: JS went wrong')
    }
  },1000)
})

async function consumePromiseFive() {
  try {const response = await promiseFive
  console.log(response);
}catch(error){
  console.log(error)
}
}

consumePromiseFive()

fetch('https://api.github.com/users/nityaa19')
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data)
})
.catch((error)=>console.log(error))