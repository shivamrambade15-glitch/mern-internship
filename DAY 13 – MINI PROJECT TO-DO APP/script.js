// ----- Constants & State -----
const STORAGE_KEY = "todoTasks";

let tasks = []; // { id, text, completed }
let currentFilter = "all"; // "all" | "pending" | "completed"

// ----- DOM Elements -----
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const counterEl = document.getElementById("counter");
const clearAllBtn = document.getElementById("clear-all-btn");
const filterButtons = document.querySelectorAll(".filter-btn");

// ----- Local Storage Helpers -----
function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function loadTasks() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return;
  try {
    tasks = JSON.parse(data) || [];
  } catch {
    tasks = [];
  }
}

// ----- Rendering -----
function render() {
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === "pending") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true; // all
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
    checkbox.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleTask(task.id);
    });

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task.text;

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);

    // Toggle completed when clicking left side (text area)
    leftDiv.addEventListener("click", () => toggleTask(task.id));

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => deleteTask(task.id));

    li.appendChild(leftDiv);
    li.appendChild(delBtn);

    taskList.appendChild(li);
  });

  updateCounter();
}

function updateCounter() {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  counterEl.textContent = `Total: ${total} | Completed: ${completed}`;
}

// ----- Task Operations -----
function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  const newTask = {
    id: Date.now().toString(),
    text,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
  taskInput.value = "";
  render();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  render();
}

function toggleTask(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks();
  render();
}

function clearAll() {
  if (!tasks.length) return;
  if (!confirm("Clear all tasks?")) return;
  tasks = [];
  saveTasks();
  render();
}

// ----- Filters -----
function setFilter(filter) {
  currentFilter = filter;
  filterButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === filter);
  });
  render();
}

// ----- Event Listeners -----
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

clearAllBtn.addEventListener("click", clearAll);

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setFilter(btn.dataset.filter);
  });
});

// ----- Init -----
loadTasks();
render();