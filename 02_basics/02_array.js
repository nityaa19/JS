// inside console => const myArr=[1,2,3,4] => inside myArr we can get alot of arrays 

const marvel_heros=["thor","IronMan","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros) => array can itself store an array 
// console.log(marvel_heros)

// marvel_heros.concat(dc_heros) => performs the same thing as push
// console.log(marvel_heros)

//for getting both array we need to store in diff array 

// const allHeros=marvel_heros.concat(dc_heros) 
// console.log(allHeros)

// const all_new_heros=[... marvel_heros, ...dc_heros] => spread operator
// console.log(all_new_heros)


// const another_array=[1,2,3,4,5,[1,4,3],3,[4,32,[4,6,,7]]]
// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array)


// console.log(Array.isArray("Nityanand")) => checks whether it is arraya or not 
// console.log(Array.from("Nityanand")) => make this an array 
//console.log(Array.from({name: "nityy"})) => will give empty array 

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)) //=> will combine and form a array


