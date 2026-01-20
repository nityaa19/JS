const name="hitesh"
const repoCount=50

// console.log(name+repoCount+" value")

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName=new String('nityaNk')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length)//gives the length of the string
// console.log(gameName.toUpperCase());//make the string in upper case
// console.log(gameName.charAt(2));//tells which char at pos 2
const newString=gameName.substring(0,3)// 0 1 2 will be included


const anotherString =gameName.slice(-2,3)


const newStrin="    Nitya    "
// console.log(newStrin)
// console.log(newStrin.trim())//remove spaces

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))//replacee 
console.log(url.includes('nitya'))//checks is present 
console.log(url.includes('hitesh'))

console.log(gameName.split('-'));


