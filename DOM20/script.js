const itemList = document.getElementById("itemList");

itemList.addEventListener("click", (event) => {
  if (event.target.className === "deleteBtn") {
    event.target.parentElement.remove();
  }
});
