// destructuring 
const course={
  courseName: "JS in Hindi",
  price:"999",
  courseInstructor:"hitesh "
}

const{courseInstructor: instructor}=course

console.log(instructor);

/*
const navBar=({company})=>{
}
navBar(company ="hitesh")
-------------thhis will be used in react-----------------------
*/

// {
//   "name": "hitesh",
//   "coursename": "js in hindi"
//   "price": "free"
// }