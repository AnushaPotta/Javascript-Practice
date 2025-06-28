const changeColor = document.getElementById("colorPicker");
const text = document.getElementById("text");
changeColor.addEventListener("change", (event) => {
  text.style.color = event.target.value;
});
