// for of

const arr=[1,2,3,4,5]

for(const num of arr){
  // console.log(num)
}

const greeting="Hello world"
for(const ch of greeting){
  if(ch==" ") continue
  console.log(ch)
}

const map=new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")
map.set('BH',"India")

// console.log(map)


// for(const i of map){
//   console.log(i)
// }

//we can also seperate the map value and key
for(const [key,value] of map){
  //console.log(key, ':-', value)
}

const myObject={
  'game1': 'NFS',
  'game2' : 'spiderman'
}

// for(const [key,value] of myObject){ => will not work directly
//   console.log(key, ':-', value)
// }