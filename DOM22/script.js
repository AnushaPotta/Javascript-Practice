const cat = document.getElementById("cat");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  const currentWidth = cat.getAttribute("width");

  if (currentWidth === "300") {
    cat.setAttribute("width", "500");
    cat.setAttribute("alt", "Zoomed in cat");
  } else {
    cat.setAttribute("width", "300");
    cat.setAttribute("alt", "A cute cat picture");
  }
});
