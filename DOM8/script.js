const text = document.getElementById("text");
const wordCount = document.getElementById("wordCount");

text.addEventListener("input", (event) => {
  const value = event.target.value;
  const words = value.trim().split(/\s+/);
  wordCount.textContent =
    words.length === 0 ? `word count: 0` : `word count: ${words.length}`;
});
