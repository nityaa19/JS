//value outside the scope is called as Global scope 

//Global scope value can be used inside the scope also but scope value cant be used outside the scope 

let a=300
if(true){
  let a=10
  const b=20
  // console.log("INNER: ",a)
  //var c=30 => var allocates the memory forever
  // c=30
}

// console.log(a)
// console.log(b)
// console.log(a)

function one(){
  const userName="hitesh"
  function two(){
    const website="Youtube"
    console.log(userName)
  }
  console.log(userName)
  two()
}

one()

//#######################  INTRESTING #################################

//we can access the function before decleartion 
console.log(addone(5))
function addone(num){
  return num+1
}

console.log(addTwo(5)) // =>this will give error because we cant call before the decleartion
const addTwo=function(num){
  return num+2;
}




