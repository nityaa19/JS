function multipleBy5(num){
  return num*5
}

multipleBy5.eg=2//we can take function as the object (eg is the user defined property)

console.log(multipleBy5(5))
console.log(multipleBy5.eg)//referencing the value of objects
console.log(multipleBy5.prototype)

function createUser(username, score){
  this.username=username
  this.score=score
} 

createUser.prototype.increment= function(){// prototype is used to create a method outside the object decleration
  this.score++
}
createUser.prototype.printMe=function(){
  console.log(`price is ${this.score}`)
}

const chai = new createUser("chai",25)
const tea= new createUser("tea",250)

chai.printMe()
chai.increment()
chai.printMe()