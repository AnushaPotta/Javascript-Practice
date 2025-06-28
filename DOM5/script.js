const input = document.getElementById("listInput");
const btn = document.getElementById("addBtn");
const list = document.getElementById("list");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  const removeBtn = document.createElement("button");
  removeBtn.addEventListener("click", () => {
    li.remove();
  });
  removeBtn.textContent = "remove";
  li.textContent = input.value + "  ";
  li.appendChild(removeBtn);
  list.appendChild(li);
  input.value = "";
});
