class User{
  constructor(username){
    this.username=username
  }

  logMe(){
    console.log(`User name : ${this.username}`)
  }

  createId(){ 
    return `123`
  }
}

const hitesh=new User("hitesh")
hitesh.logMe()
// console.log(hitesh.createId()); -> static will not allow to access 

class Teacher extends User{
  constructor(username,email){
    super(username)
    this.email=email
  }
}

const iphone= new Teacher("iphone","i@Phone.com")
iphone.logMe()
// console.log(iphone.createId()); 

