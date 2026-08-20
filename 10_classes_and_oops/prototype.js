// let myName= "nitya   "

// console.log(myName.length);
// console.log(myName.truelength);
// console.log(myName.trim().length);


let myHeros=["thor","spiderman"]

let heroPower={
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function(){
    console.log(`spidy power is ${this.spiderman}`);
    
  }
}

Object.prototype.hitesh=function(){
  console.log(`hitesh is present in all object`);
  
}

Array.prototype.heyHitesh= function(){
  console.log(`hitesh says hello!`);
  
}
// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh() -> object can't take the user defindes object for the the array but array will access all the user defined objects of object 


//Traditional syntax
const user={
  name:"Chai",
  email: "chai@google.com"
}
const Teacher={
  makeVideo: true
}

const TeachingSupport={
  isAvailable: false
}

const TASupport={
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport
}

Teacher.__proto__=user



//Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher) //-> TeachingSupport can access the object Teacher

let anotherUsername="ChaiAurCode    "
String.prototype.trueLength= function(){
  console.log(`${this}`)
  console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"iceTea".trueLength()

