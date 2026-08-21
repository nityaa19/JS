class User{
  constructor(username){
    this.username=username
  }

  logMe(){
    console.log(`USERNAME is ${this.username}`)
  }
}

class Teacher extends User{
  constructor(username,email,passowrd){
    super(username)//super key word is used to refer the parent class previously it was call and this 
    this.email=email
    this.passowrd=passowrd
  }

  addCourse(){
    console.log(`New course was addes by ${this.username}`);
    
  }
}

const chai=new Teacher("chai","email@teacher.com","1234")
chai.addCourse()

const masalaChai= new User("masalaChai")
masalaChai.logMe()
chai.logMe()
//masalaChai.addCourse()-> can't access
 
// console.log(chai===masalaChai)  -> false
// console.log(chai===Teacher) -> false

// console.log(chai instanceof User); -> true
