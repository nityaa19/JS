const myObject={
  js:'javascript',
  cpp: 'C++',
  rb: "ruby",
  swift: "swift by app"
}

for(const key in myObject){
  // console.log(`${key}is  file name  for ${myObject[key]}`)
}

const programming=["js", "rb","py","java","cpp"]

for(const i in programming){ //=> in  will give the key values(indexes)
  // console.log(i)
}

const map=new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")
map.set('BH',"India")

for(const key in map){// => in will not work for map 
  console.log(key)
}