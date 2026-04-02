// ===============================
// TASK 10.1: EVENT LISTENERS
// ===============================

// Create a button dynamically
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

// Different ways to handle click
button.addEventListener("click", function () {
    console.log("Button clicked!");
});

button.addEventListener("click", () => {
    console.log("Clicked again!");
});

function handleClick() {
    console.log("Handled!");
}
button.addEventListener("click", handleClick);

// Remove one listener
button.removeEventListener("click", handleClick);


// ===============================
// CLICK COUNTER (BUILD TASK)
// ===============================

let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// Increase
increaseBtn.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

// Decrease (cannot go below 0)
decreaseBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        countDisplay.textContent = count;
    }
});

// Reset
resetBtn.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
});


// ===============================
// TASK 10.2: EVENT OBJECT
// ===============================

document.addEventListener("click", function (event) {
    console.log("Target:", event.target);
    console.log("Type:", event.type);
    console.log("Position:", event.clientX, event.clientY);
});

// Keyboard shortcuts
document.addEventListener("keydown", function (event) {
    // Ctrl + S
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        alert("Saved!");
    }

    // Escape → clear form
    if (event.key === "Escape") {
        document.getElementById("contact-form").reset();
    }

    // Ctrl + Enter → submit form
    if (event.ctrlKey && event.key === "Enter") {
        document.getElementById("contact-form").requestSubmit();
    }
});


// ===============================
// TASK 10.3: EVENT DELEGATION
// ===============================

const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");

// Add new task
addTaskBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${text}</span>
        <button class="delete">X</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
});

// ONE event listener for all tasks
taskList.addEventListener("click", function (event) {
    // Toggle completed
    if (event.target.classList.contains("task-text")) {
        event.target.classList.toggle("completed");
    }

    // Delete task
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
});


// ===============================
// TASK 10.4: FORM HANDLING
// ===============================

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// Show error
function showError(input, message) {
    input.style.border = "2px solid red";

    let error = input.nextElementSibling;

    if (!error || !error.classList.contains("error-message")) {
        error = document.createElement("small");
        error.className = "error-message";
        input.after(error);
    }

    error.textContent = message;
}

// Clear error
function clearError(input) {
    input.style.border = "";

    const error = input.nextElementSibling;
    if (error && error.classList.contains("error-message")) {
        error.remove();
    }
}

// Validate name
nameInput.addEventListener("input", function (event) {
    const value = event.target.value;

    if (value.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }
});

// Validate email
emailInput.addEventListener("input", function (event) {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
        showError(emailInput, "Enter a valid email");
    } else {
        clearError(emailInput);
    }
});

// Submit form
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log("Form Data:", data);

    if (data.name.length >= 2 && data.email.includes("@")) {
        alert("Form submitted successfully!");
        form.reset();
    }
});
