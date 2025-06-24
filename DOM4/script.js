const list = document.getElementById("todoList");
const input = document.getElementById("todoInput");
const button = document.getElementById("addBtn");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);
  input.value = "";
});
