const searchInput = document.getElementById("searchInput");
const list = document.querySelectorAll("#listFruits li");

searchInput.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();

  list.forEach((li) => {
    const word = li.textContent.toLowerCase();
    word.includes(value)
      ? (li.style.display = "list-item")
      : (li.style.display = "none");
  });
});
