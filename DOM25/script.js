const titleInput = document.getElementById("titleInput");

const notes = document.getElementById("notes");

const saveBtn = document.getElementById("saveBtn");
const notesList = document.getElementById("notesList");
const noteForm = document.getElementById("noteForm");

window.addEventListener("DOMContentLoaded", displayNotes);

saveBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const note = notes.value.trim();

  if (title && note) {
    try {
      const existingNotes = JSON.parse(localStorage.getItem("note")) || [];

      const newNote = {
        title: title,
        note: note,
      };
      existingNotes.push(newNote);

      localStorage.setItem("note", JSON.stringify(existingNotes));
      noteForm.reset();
      displayNotes();
    } catch (error) {
      console.error("Error saving note", error);
      alert("Something went wrong while saving your notes");
    }
  }
});

function displayNotes() {
  try {
    const savedNote = localStorage.getItem("note");
    const parsedNote = JSON.parse(savedNote);
    if (parsedNote && parsedNote.length > 0) {
      notesList.innerHTML = "";
      parsedNote.forEach((n) => {
        const li = document.createElement("li");
        li.textContent = `${n.title} - ${n.note}`;
        notesList.appendChild(li);
        const btn = document.createElement("button");
        btn.textContent = "delete";
        btn.style.marginLeft = "1rem";

        btn.addEventListener("click", () => {
          const updatedNotes = parsedNote.filter((deletedNote) => {
            return !(
              deletedNote.title === n.title && deletedNote.note === n.note
            );
          });

          localStorage.setItem("note", JSON.stringify(updatedNotes));
          displayNotes();
        });
        li.appendChild(btn);
        notesList.appendChild(li);
      });
    } else {
      notesList.innerHTML = "<div>No saved notes</div>";
    }
  } catch (error) {
    console.error("Error loading notes:", error);
    alert("couldn't load notes. Data may be corrupted");
  }
}
