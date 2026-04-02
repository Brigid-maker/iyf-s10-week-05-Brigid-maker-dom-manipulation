document.addEventListener("DOMContentLoaded", () => {

// ===============================
// TASK 10.1: EVENT LISTENERS
// ===============================

const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

button.addEventListener("click", () => {
    console.log("Button clicked!");
});

function handleClick() {
    console.log("Handled!");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);


// ===============================
// CLICK COUNTER
// ===============================

let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

if (countDisplay && increaseBtn && decreaseBtn && resetBtn) {

    increaseBtn.addEventListener("click", () => {
        count++;
        countDisplay.textContent = count;
    });

    decreaseBtn.addEventListener("click", () => {
        if (count > 0) {
            count--;
            countDisplay.textContent = count;
        }
    });

    resetBtn.addEventListener("click", () => {
        count = 0;
        countDisplay.textContent = count;
    });
}


// ===============================
// TASK 10.2: EVENT OBJECT
// ===============================

document.addEventListener("click", (event) => {
    console.log("Target:", event.target);
    console.log("Type:", event.type);
});

document.addEventListener("keydown", (event) => {

    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        alert("Saved!");
    }

    const form = document.getElementById("contact-form");

    if (event.key === "Escape" && form) {
        form.reset();
    }

    if (event.ctrlKey && event.key === "Enter" && form) {
        form.requestSubmit();
    }
});


// ===============================
// TASK 10.3: EVENT DELEGATION
// ===============================

const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");

if (taskList && taskInput && addTaskBtn) {

    addTaskBtn.addEventListener("click", () => {
        const text = taskInput.value.trim();
        if (!text) return;

        const li = document.createElement("li");
        li.innerHTML = `
            <span class="task-text">${text}</span>
            <button class="delete">X</button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";
    });

    taskList.addEventListener("click", (event) => {

        if (event.target.classList.contains("task-text")) {
            event.target.classList.toggle("completed");
        }

        if (event.target.classList.contains("delete")) {
            event.target.parentElement.remove();
        }
    });
}


// ===============================
// TASK 10.4: FORM HANDLING
// ===============================

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

if (form && nameInput && emailInput) {

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

    function clearError(input) {
        input.style.border = "";

        const error = input.nextElementSibling;
        if (error && error.classList.contains("error-message")) {
            error.remove();
        }
    }

    nameInput.addEventListener("input", (e) => {
        if (e.target.value.length < 2) {
            showError(nameInput, "Name must be at least 2 characters");
        } else {
            clearError(nameInput);
        }
    });

    emailInput.addEventListener("input", (e) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(e.target.value)) {
            showError(emailInput, "Enter a valid email");
        } else {
            clearError(emailInput);
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const data = Object.fromEntries(new FormData(form));
        console.log("Form Data:", data);

        if (data.name.length >= 2 && data.email.includes("@")) {
            alert("Form submitted successfully!");
            form.reset();
        }
    });
}

});
