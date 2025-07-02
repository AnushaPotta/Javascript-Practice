const toggleBtn = document.getElementById("toggleBtn");
const box = document.getElementById("box");
toggleBtn.addEventListener("click", () => {
  if (box.style.display === "block") {
    box.style.display = "none";
    toggleBtn.textContent = "Show";
  } else {
    box.style.display = "block";
    toggleBtn.textContent = "Hide";
  }
});
