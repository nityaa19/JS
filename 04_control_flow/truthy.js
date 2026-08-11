const userEmail="nk1706@gmail.com"

if(userEmail){
  console.log("Got user Email")
}
else{
  console.log("Don't have user email")
  
}

/*
falsy values

1. false
2. 0, -0
3. BigInt
4. ""
5. null, undefined
6. NaN
*/ 


/*
truthy values

1. true
2. "0"
3. 'false' , "false" => inside string everything is truthy
4. [], {}
5. function(){}
*/


//Nullish coalescing Operator(??): null undefined

let val1;
// val1=5 ?? 10 => sets 5 if no value exist
// console.log(val1)
// val1=null ?? 10 = set 10 because null can cause error
// console.log(val1)
val1=undefined ?? 15
console.log(val1)


//Terniary Operator
// condition ? true : false

const iceTeaPrice=100
iceTeaPrice <= 80 ? console.log("less tahn 80") : console.log("price is more than 80")