const form = document.querySelector("form");
const input = document.querySelector("#todoL");
const taskContainer = document.querySelector("#added-tasks");

let todos = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const task = input.value.trim();

    if (task === "") {
        return;
    }

    const todo = {
        id: Date.now(),
        task: task,
        completed: false
    };

    todos.push(todo);

    displayTodos();

    input.value = "";
});

function displayTodos() {
    taskContainer.innerHTML = "Today's list";

    todos.forEach(function (todo) {
        const task = document.createElement("div");

        task.innerHTML = `
            <div>
                <span>${todo.task}</span>
                <button class="deleteBtn" data-id="${todo.id}">
                    Delete
                </button>
                <button class="doneBtn" data-id="${todo.id}">
                    ${todo.completed ? "Undo" : "Mark as Done"}
                </button>
            </div>
        `;

        taskContainer.appendChild(task);
    });

    // Delete buttons
    const deleteButtons = document.querySelectorAll(".deleteBtn");

    deleteButtons.forEach(function (button) {
        button.addEventListener("click", function () {

            const id = Number(button.dataset.id);

            todos = todos.filter(function (todo) {
                return todo.id !== id;
            });

            displayTodos();
        });
    });

    // Done buttons
    const doneButtons = document.querySelectorAll(".doneBtn");

    doneButtons.forEach(function (button) {
        button.addEventListener("click", function () {

            const id = Number(button.dataset.id);

            const todo = todos.find(function (todo) {
                return todo.id === id;
            });

            todo.completed = !todo.completed;

            displayTodos();
        });
    });
}