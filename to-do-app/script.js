const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

const totalEl = document.getElementById("total");
const activeEl = document.getElementById("active");
const completedEl = document.getElementById("completed");

let tasks = [];
let currentFilter = "all";

// ADD TASK
addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  tasks.push({ text, completed: false });
  input.value = "";

  render();
});

// RENDER TASKS
function render() {
  list.innerHTML = "";

  let filtered = tasks;

  if (currentFilter === "active") {
    filtered = tasks.filter(t => !t.completed);
  }
  if (currentFilter === "completed") {
    filtered = tasks.filter(t => t.completed);
  }

  filtered.forEach((task, index) => {
    const li = document.createElement("li");

    const left = document.createElement("div");
    left.className = "left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    checkbox.addEventListener("change", () => {
      task.completed = !task.completed;
      render();
    });

    const text = document.createElement("span");
    text.textContent = task.text;

    if (task.completed) text.classList.add("completed");

    left.appendChild(checkbox);
    left.appendChild(text);

    const del = document.createElement("span");
    del.textContent = "X";
    del.className = "delete";

    del.addEventListener("click", () => {
      tasks.splice(index, 1);
      render();
    });

    li.appendChild(left);
    li.appendChild(del);

    list.appendChild(li);
  });

  updateStats();
}

// UPDATE STATS
function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const active = total - completed;

  totalEl.textContent = total;
  activeEl.textContent = active;
  completedEl.textContent = completed;
}

// FILTERS
document.getElementById("allBtn").onclick = () => {
  currentFilter = "all";
  setActive("allBtn");
  render();
};

document.getElementById("activeBtn").onclick = () => {
  currentFilter = "active";
  setActive("activeBtn");
  render();
};

document.getElementById("completedBtn").onclick = () => {
  currentFilter = "completed";
  setActive("completedBtn");
  render();
};

function setActive(id) {
  document.querySelectorAll(".filters button").forEach(btn => {
    btn.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// CLEAR COMPLETED
document.getElementById("clearCompleted").addEventListener("click", () => {
  tasks = tasks.filter(t => !t.completed);
  render();
});
