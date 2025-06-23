//Create a button that toggles the visibility of a paragraph.
//When you click the button:

//If the paragraph is visible → it should hide.

//If the paragraph is hidden → it should show.

const button = document.getElementById("showhidebtn");
const content = document.getElementById("content");
button.addEventListener("click", () => {
  if (content.style.display === "none") {
    content.style.display = "block";
    button.textContent = "Hide";
  } else {
    content.style.display = "none";
    button.textContent = "Show";
  }
});
