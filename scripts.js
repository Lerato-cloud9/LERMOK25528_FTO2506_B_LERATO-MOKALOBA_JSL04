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

// Function to open the modal
function openModal() {
  modal.classList.remove("hidden");
}

// Close modal when clicking X
closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Event listeners for opening and closing modal
openModal.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModalBtn);

// Render tasks into columns
function renderTasks() {
  // Get the column containers by their IDs
  const todoCol = document.getElementById("todo-column");
  const doingCol = document.getElementById("doing-column");
  const doneCol = document.getElementById("done-column");

  // Clear existing tasks in each column and add column header
  todoCol.innerHTML = "<h3>Todo</h3>";
  doingCol.innerHTML = "<h3>Doing</h3>";
  doneCol.innerHTML = "<h3>Done</h3>";

  // Add tasks
  initialTasks.forEach(task => {
    // Create a new div element for the task
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.innerHTML = `<strong>${task.title}</strong><p>${task.description}</p>`;

    // Add the task to its correct column
    if (task.status === "todo") todoCol.appendChild(taskDiv);
    else if (task.status === "doing") doingCol.appendChild(taskDiv);
    else doneCol.appendChild(taskDiv);
  });
}

// Save task from modal
saveTaskBtn.addEventListener("click", () => {
  // Get input values from modal
  const title = document.getElementById("task-title").value.trim();
  const desc = document.getElementById("task-desc").value.trim();
  const status = document.getElementById("task-status").value;

  // Validate that title and description are not empty
  if (!title || !desc) {
    alert("Please fill out all fields.");
    return; // Stop execution if inputs are empty
  }

  if (initialTasks.length >= 6) {
    alert("Task board is full. Cannot add more tasks.");
    modal.classList.add("hidden");
    return;
  }

  // Create a new task object and add it to the array
  const newTask = { id: initialTasks.length + 1, title, description: desc, status };
  initialTasks.push(newTask);

  // Reset modal inputs to default values
  document.getElementById("task-title").value = "";
  document.getElementById("task-desc").value = "";
  document.getElementById("task-status").value = "todo";

 // Close the modal
  modal.classList.add("hidden");
  renderTasks();
});

// Initial render
renderTasks();