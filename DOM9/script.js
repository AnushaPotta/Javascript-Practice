const input = document.getElementById("inputText");
input.addEventListener("input", (event) => {
  const value = event.target.value;
  document.body.style.backgroundColor = value;
});
