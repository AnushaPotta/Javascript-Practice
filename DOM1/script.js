const button = document.getElementById("changeTextBtn");
const heading = document.getElementById("heading");

button.addEventListener("click", () => {
  heading.textContent = "You clicked the button!";
});
