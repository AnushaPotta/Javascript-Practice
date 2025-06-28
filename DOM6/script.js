const input = document.getElementById("charInput");
const charCount = document.getElementById("charCount");

input.addEventListener("input", (event) => {
  console.log(event.target);
  const value = event.target.value;
  charCount.textContent = `Charcters typed: ${value.length}`;
});
