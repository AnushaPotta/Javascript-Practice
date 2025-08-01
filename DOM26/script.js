const taskName = document.getElementById("taskName");
const dueDate = document.getElementById("dueDate");

const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const taskForm = document.getElementById("taskForm");

addBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const task = taskName.value.trim();
  const due = dueDate.value.trim();
  const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const data = {
    task: task,
    due: due,
  };
  existingTasks.push(data);
  localStorage.setItem("tasks", JSON.stringify(existingTasks));
  console.log(existingTasks);
  taskForm.reset();
  displayTasks();
});

function displayTasks() {
  const savedTasks = localStorage.getItem("tasks");
  console.log(savedTasks);
  const parsedTasks = JSON.parse(savedTasks);
  console.log(parsedTasks);
  parsedTasks.forEach((t) => {
    const task = `${t.task} - due by ${t.due}`;
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });
}
