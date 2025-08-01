const taskName = document.getElementById("taskName");
const dueDate = document.getElementById("dueDate");

const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const taskForm = document.getElementById("taskForm");

window.addEventListener("DOMContentLoaded", displayTasks());

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
  taskList.textContent = "";

  parsedTasks.forEach((t) => {
    const task = `${t.task} - due by ${t.due}`;
    const li = document.createElement("li");
    li.textContent = task;
    const btn = document.createElement("button");
    btn.style.marginLeft = "10px";
    btn.textContent = "Done";
    btn.addEventListener("click", () => {
      li.style.textDecoration = "line-through";
      li.style.color = "green";
    });
    li.appendChild(btn);
    taskList.appendChild(li);
  });
}
