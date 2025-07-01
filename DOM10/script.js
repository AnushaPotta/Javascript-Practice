const fontInput = document.getElementById("fontInput");
const text = document.getElementById("text");

fontInput.addEventListener("input", (event) => {
  const value = event.target.value;
  if (value > 0) text.style.fontSize = value + "px";
});
