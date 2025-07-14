const firstCat = document.getElementById("cat1");

const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  const cat1 =
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg";
  const cat2 =
    "https://static.vecteezy.com/system/resources/previews/002/098/203/non_2x/silver-tabby-cat-sitting-on-green-background-free-photo.jpg";
  if (firstCat.src === cat1 || firstCat.src.endsWith("45201.jpeg")) {
    firstCat.src = cat2;
  } else {
    firstCat.src = cat1;
  }
});
