const coding=["js","ruby","java","python","cpp"]

// 1.
// coding.forEach( function (item){
//   console.log(item)
// })

// 2.
// coding.forEach( (val) =>{
//   console.log(val)
// } )


// 3.
//  function printMe(val){
//   console.log(val)
// }
// coding.forEach(printMe)


// coding.forEach((ClipboardItem, index, arr)=> {
//   console.log(ClipboardItem,index,arr)
// })

const myCoding=[
  {
    languageName: "javaScript",
    languageFileName: "js"
  },
  {
    languageName: "java",
    languageFileName: "java"
  },
  {
    languageName: "python",
    languageFileName: "py"
  }
]

myCoding.forEach((item)=>{

  console.log(item.languageFileName);
})