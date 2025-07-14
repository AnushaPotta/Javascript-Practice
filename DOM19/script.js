const parent = document.getElementById("parent");

const childList = document.getElementById("childList");

parent.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});
