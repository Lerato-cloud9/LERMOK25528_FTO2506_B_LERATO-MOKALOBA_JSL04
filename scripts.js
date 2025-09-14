const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

// Modal elements
const modal = document.getElementById("task-modal");
const closeModalBtn = document.getElementById("close-modal");
const saveTaskBtn = document.getElementById("save-task-btn");

// Open modal function
function openModal() {
  modal.classList.remove("hidden");
}

// Close modal when clicking X
closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Close modal when clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

// Render tasks into columns
function renderTasks() {
  const todoCol = document.getElementById("todo-column");
  const doingCol = document.getElementById("doing-column");
  const doneCol = document.getElementById("done-column");

  // Clear columns
  todoCol.innerHTML = "<h3>Todo</h3>";
  doingCol.innerHTML = "<h3>Doing</h3>";
  doneCol.innerHTML = "<h3>Done</h3>";

  // Add tasks
  initialTasks.forEach(task => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.innerHTML = `<strong>${task.title}</strong><p>${task.description}</p>`;

    if (task.status === "todo") todoCol.appendChild(taskDiv);
    else if (task.status === "doing") doingCol.appendChild(taskDiv);
    else doneCol.appendChild(taskDiv);
  });
}

// Save task from modal
saveTaskBtn.addEventListener("click", () => {
  const title = document.getElementById("task-title").value.trim();
  const desc = document.getElementById("task-desc").value.trim();
  const status = document.getElementById("task-status").value;

  if (!title || !desc) {
    alert("Please fill out all fields.");
    return;
  }

  if (initialTasks.length >= 6) {
    alert("Task board is full. Cannot add more tasks.");
    modal.classList.add("hidden");
    return;
  }

  const newTask = { id: initialTasks.length + 1, title, description: desc, status };
  initialTasks.push(newTask);

  // Reset modal
  document.getElementById("task-title").value = "";
  document.getElementById("task-desc").value = "";
  document.getElementById("task-status").value = "todo";

  modal.classList.add("hidden");
  renderTasks();
});

// Initial render
renderTasks();