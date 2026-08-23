const next_btn = document.querySelector('#next');
const question_area = document.querySelector('#question');
const score_area = document.querySelector('#score');

function createQuestions(ques, a, b, c, d, ans) {
    this.ques = ques;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.ans = ans;
}

const q1 = new createQuestions(
    "Capital of AP",
    "Hyderabad",
    "Amaravati",
    "Chennai",
    "Bangalore",
    "O2"
);

const q2 = new createQuestions(
    "Which is the largest planet in our solar system?",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "O3"
);

const q3 = new createQuestions(
    "Which language is used to style web pages?",
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "O2"
);

const q4 = new createQuestions(
    "Which data structure follows FIFO?",
    "Stack",
    "Queue",
    "Tree",
    "Graph",
    "O2"
);

const q5 = new createQuestions(
    "What is the capital of India?",
    "Mumbai",
    "New Delhi",
    "Kolkata",
    "Chennai",
    "O2"
);

const arr = [q1, q2, q3, q4, q5];

let cnt = 0;
let score = 0;
let selectedAnswer = false;


// START
next_btn.addEventListener("click", function () {

    // First click = Start
    if (cnt === 0 && !selectedAnswer) {
        next_btn.innerText = "Next";
        display_question();
        selectedAnswer = null;
        return;
    }

    // Don't move without selecting an answer
    if (selectedAnswer === null) {
        return;
    }

    cnt++;

    // More questions available
    if (cnt < arr.length) {
        selectedAnswer = null;
        display_question();
    }
    else {
        display_score();
        next_btn.style.display = "none";
    }
});


function display_question() {

    question_area.innerHTML = `
        <h3>Q. ${arr[cnt].ques}</h3>

        <button class="option" id="O1">${arr[cnt].a}</button>
        <button class="option" id="O2">${arr[cnt].b}</button>
        <button class="option" id="O3">${arr[cnt].c}</button>
        <button class="option" id="O4">${arr[cnt].d}</button>
    `;

    const options = document.querySelectorAll(".option");

    options.forEach(function (option) {

        option.addEventListener("click", function (e) {

            if (selectedAnswer !== null) {
                return;
            }

            selectedAnswer = e.target.id;

            if (selectedAnswer === arr[cnt].ans) {
                score++;
            }

            console.log("Current score:", score);

            e.target.style.backgroundColor = "green";
        });
    });
}


function display_score() {

    question_area.innerHTML = `<h2>Quiz Completed!</h2>`;

    score_area.innerHTML = `
        Your score is ${score}/${arr.length}
    `;
}