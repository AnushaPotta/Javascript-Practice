const inputText = document.getElementById("inputText");
const charCount = document.getElementById("charCount");
inputText.addEventListener("input", (event) => {
  const value = event.target.value;
  const inputCount = value.length;
  const charLeft = 100 - inputCount;
  if (inputCount <= 100) {
    charCount.style.color = "black";

    charCount.textContent = `${charLeft} Characters left`;
  } else {
    charCount.style.color = "red";
    charCount.textContent = "Too many characters";
  }
});
