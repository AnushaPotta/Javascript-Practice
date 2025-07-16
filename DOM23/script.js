const box = document.getElementById("box");
const widthInput = document.getElementById("widthInput");
const heightInput = document.getElementById("heightInput");
const bgColor = document.getElementById("bgColor");
const color = document.getElementById("color");
const radius = document.getElementById("radius");
const styleBtn = document.getElementById("styleBtn");

styleBtn.addEventListener("click", () => {
  const newwidth = widthInput.value.trim();
  const newheight = heightInput.value.trim();
  const newbgColor = bgColor.value.trim();
  const newColor = color.value.trim();
  const newRadius = radius.value.trim();

  if (newwidth) {
    box.style.width = newwidth + "px";
  }
  if (newheight) {
    box.style.height = newheight + "px";
  }
  if (newbgColor) {
    box.style.backgroundColor = newbgColor;
  }
  if (newColor) {
    box.style.color = newColor;
  }
  if (newRadius) {
    box.style.borderRadius = newRadius + "px";
  }
});
