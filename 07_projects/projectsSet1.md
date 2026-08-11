Solution code

Project 1

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## project 2 solution

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category = "";
    if (bmi < 18.16) {
      category = "Eat more!";
    } else if (bmi >= 18.16 && bmi <= 24.9) {
      category = "Keep it up!";
    } else {
      category = "bas kar bhai!!";
    }
    //show the result
    results.innerHTML = `<span>${bmi} ${category} </span>`;
  }
});
```


## project 3

```javascript
const clock =document.querySelector('#clock')




setInterval(function(){
  let date=new Date();
  clock.innerHTML=`<span>${date.toLocaleTimeString()}</span>`
},1000)
```
