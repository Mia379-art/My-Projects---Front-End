const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");


getNotes().forEach((note) => {
  const noteEl = createNoteEl(note.id, note.content);
  appEl.insertBefore(noteEl, btnEl);
});


function createNoteEl(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty Note";
  element.value = content;


  element.addEventListener("dblclick", () => {
    const warning = confirm("Do you want to delete this note?");
    if (warning) {
      deleteNote(id, element);
    }
  });


  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });

  return element;
}

function addNote() {
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };

  const noteEl = createNoteEl(noteObj.id, noteObj.content);
  appEl.insertBefore(noteEl, btnEl);

  saveNote(noteObj);
}


function saveNote(note) {
  const notes = getNotes();
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
}


function updateNote(id, content) {
  const notes = getNotes();
  const target = notes.find((note) => note.id === id);
  target.content = content;
  localStorage.setItem("notes", JSON.stringify(notes));
}


function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id !== id);
  localStorage.setItem("notes", JSON.stringify(notes));
  element.remove();
}


function getNotes() {
  return JSON.parse(localStorage.getItem("notes") || "[]");
}

btnEl.addEventListener("click", addNote);
