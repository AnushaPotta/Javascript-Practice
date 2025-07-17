const textInput = document.getElementById("textInput");
const saveBtn = document.getElementById("saveBtn");
const msg = document.getElementById("status");

const savedNote = localStorage.getItem("note");
if (savedNote) {
  textInput.value = savedNote;
}

saveBtn.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (text) {
    localStorage.setItem("note", text);

    msg.textContent = "Note is saved";
  } else {
    msg.textContent = "pls enter something first before saving...";
  }
});
