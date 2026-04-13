let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const totalEl = document.getElementById("total");
const activeEl = document.getElementById("active");
const completedEl = document.getElementById("completed");
const emptyMsg = document.getElementById("emptyMsg");

// ✅ SAVE TO LOCAL STORAGE
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ✅ RENDER FUNCTION (CORE)
function render() {
  taskList.innerHTML = "";

  let filteredTasks = tasks.filter(task => {
    if (currentFilter === "active") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true;
  });

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");

    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <span onclick="toggleTask(${index})">${task.text}</span>
      <button class="delete-btn" onclick="deleteTask(${index})">X</button>
    `;

    taskList.appendChild(li);
  });

  // Stats
  totalEl.textContent = tasks.length;
  activeEl.textContent = tasks.filter(t => !t.completed).length;
  completedEl.textContent = tasks.filter(t => t.completed).length;

  emptyMsg.style.display = tasks.length === 0 ? "block" : "none";

  saveTasks();
}

// ➕ ADD TASK
document.getElementById("addBtn").addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (!text) return;

  tasks.push({ text, completed: false });
  taskInput.value = "";
  render();
});

// ✅ TOGGLE TASK
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  render();
}

// ❌ DELETE TASK
function deleteTask(index) {
  tasks.splice(index, 1);
  render();
}

// 🧹 CLEAR COMPLETED
document.getElementById("clearCompleted").addEventListener("click", () => {
  tasks = tasks.filter(task => !task.completed);
  render();
});

// 🔍 FILTERS
document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentFilter = btn.dataset.filter;
    render();
  });
});

// Initial render
render();

body {
  font-family: Arial, sans-serif;
  background: linear-gradient(to right, #4facfe, #00f2fe);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
}

.subtitle {
  font-size: 12px;
  color: gray;
}

.stats {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.input-section {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 8px;
}

button {
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
}

/* 🔥 Hover effects */
button:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

#addBtn {
  background: #007bff;
  color: white;
}

.filters {
  margin: 10px 0;
}

.filter {
  margin: 2px;
  background: #eee;
}

.filter.active {
  background: #007bff;
  color: white;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

li.completed span {
  text-decoration: line-through;
  color: gray;
}

.delete-btn {
  background: red;
  color: white;
}

/* Hover for delete */
.delete-btn:hover {
  background: darkred;
}

#clearCompleted {
  margin-top: 10px;
  background: orange;
  color: white;
}

#emptyMsg {
  font-size: 14px;
  color: gray;
}


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>To-Do List</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <div class="container">
    <h1>My To-Do List</h1>
    <p class="subtitle">Built with DOM manipulation & event listeners</p>

    <div class="stats">
      <span>Total: <b id="total">0</b></span>
      <span>Active: <b id="active">0</b></span>
      <span>Completed: <b id="completed">0</b></span>
    </div>

    <div class="input-section">
      <input type="text" id="taskInput" placeholder="Add a new task..." />
      <button id="addBtn">Add Task</button>
    </div>

    <div class="filters">
      <button class="filter active" data-filter="all">All</button>
      <button class="filter" data-filter="active">Active</button>
      <button class="filter" data-filter="completed">Completed</button>
    </div>

    <ul id="taskList"></ul>

    <p id="emptyMsg">No tasks yet. Add one to get started!</p>

    <button id="clearCompleted">Clear Completed</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
