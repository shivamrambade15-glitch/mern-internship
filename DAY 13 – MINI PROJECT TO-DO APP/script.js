// ---------- Constants ----------
const STORAGE_KEY = "todoTasks";

// ---------- State ----------
let tasks = []; // each task: { id, text, completed }
let currentFilter = "all"; // "all" | "pending" | "completed"

// ---------- DOM Elements ----------
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const clearAllBtn = document.getElementById("clear-all-btn");

const totalCountEl = document.getElementById("total-count");
const completedCountEl = document.getElementById("completed-count");
const pendingCountEl = document.getElementById("pending-count");

const filterButtons = document.querySelectorAll(".filter-btn");

// ---------- Local Storage ----------
function saveTasksToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function loadTasksFromStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    tasks = [];
    return;
  }
  try {
    const parsed = JSON.parse(data);
    tasks = Array.isArray(parsed) ? parsed : [];
  } catch {
    tasks = [];
  }
}

// ---------- Rendering ----------
function renderTasks() {
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === "pending") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true; // "all"
  });

  filteredTasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task-item" + (task.completed ? " completed" : "");
    li.dataset.id = task.id;

    const leftDiv = document.createElement("div");
    leftDiv.className = "task-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    // stopPropagation so clicking checkbox doesn't double-toggle
    checkbox.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleTaskCompletion(task.id);
    });

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task.text;

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);

    // clicking text area toggles completion
    leftDiv.addEventListener("click", () => toggleTaskCompletion(task.id));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTask(task.id));

    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });

  updateCounters();
}

function updateCounters() {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  totalCountEl.textContent = `Total: ${total}`;
  completedCountEl.textContent = `Completed: ${completed}`;
  pendingCountEl.textContent = `Pending: ${pending}`;
}

// ---------- Task Operations ----------
function addTask() {
  const text = taskInput.value.trim();
  if (!text) return; // prevent empty tasks

  const newTask = {
    id: Date.now().toString(),
    text,
    completed: false,
  };

  tasks.push(newTask);
  saveTasksToStorage();
  taskInput.value = "";
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasksToStorage();
  renderTasks();
}

function toggleTaskCompletion(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasksToStorage();
  renderTasks();
}

function clearAllTasks() {
  if (!tasks.length) return;

  const confirmClear = confirm("Are you sure you want to clear all tasks?");
  if (!confirmClear) return;

  tasks = [];
  localStorage.removeItem(STORAGE_KEY);
  renderTasks();
}

// ---------- Filters ----------
function setFilter(filterName) {
  currentFilter = filterName;

  filterButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === filterName);
  });

  renderTasks();
}

// ---------- Event Listeners ----------

// Add button click
addBtn.addEventListener("click", addTask);

// Enter key support
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

// Clear all button
clearAllBtn.addEventListener("click", clearAllTasks);

// Filter buttons
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setFilter(btn.dataset.filter);
  });
});

// ---------- Init ----------
loadTasksFromStorage();
renderTasks();