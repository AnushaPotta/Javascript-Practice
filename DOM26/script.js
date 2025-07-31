const taskName = document.getElementById("taskName");
const dueDate = document.getElementById("dueDate");

const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const task = taskName.value.trim();
  const due = dueDate.value.trim();
  const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const dataArr = [];
  const data = {
    task: task,
    due: due,
  };
  dataArr.push(data);
  const newArr = existingTasks.concat(dataArr);
  localStorage.setItem("tasks", JSON.stringify(newArr));
  console.log(newArr);
  //displayTasks();
});

/*function displayTasks() {
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
}*/
