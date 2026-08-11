let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate)

let myCreatedDate= new Date("2023-1-23")//months starts with 0 in js
// console.log(myCreatedDate.toDateString())

let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate= new Date()
// console.log(newDate.getDay());

let obj=newDate.toLocaleString('default',{
  weekday:"long"//staurday
})
console.log(obj)
