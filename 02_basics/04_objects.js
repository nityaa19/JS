const tinderUser={}

 tinderUser.id="123abc"
 tinderUser.name="Sammy"
 tinderUser.isLoggedIn=false
//  console.log(tinderUser)

 const regularUser={
  email:"sonam@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Nityanand",
      lastName: "Kumar"
    }
  }
 }

//  console.log(regularUser.fullName.userFullName.firstName)

const obj1={1:"a", 2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1, obj2}
// const obj3=Object.assign({},obj1,obj2) => {} is a optional parameter
const obj3={...obj1,...obj2} // spread operator
// console.log(obj3)

const user=[
  {
    id:1,
    emailID:"hi@gmail.com"
  },
  {
    id: 2,
    emailID: "nk1706@gmail.com"
  }
]

user[1].emailID
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //=> for getting all the key values
console.log(Object.values(tinderUser)); //=> for getting values

console.log(Object.entries(tinderUser)) //=>make array of  keys and values

console.log(tinderUser.hasOwnProperty('isLoggedId')) //=>checks whether this property is available or not




