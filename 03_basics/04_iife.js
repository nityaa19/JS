//immediately invoked function
//this will be be called immediately (to remove the pollution  of global declearation)


//named iffe
(function chai(){
  console.log(`DB CONNECTED`);
})(); // to end this iife we need paranthesis


//simple iffe 
(()=>{
  console.log(`DB CONNECTED TWO`)
})();

((name)=>{
  console.log(`DB CONNECTED TWO ${name}`)
})("Nityanad")



