const noteForm = document.getElementById("note-form");
const noteList = document.getElementById("note-list");

noteForm.addEventListener("submit", addNote);

function addNote(event) {
  event.preventDefault();

  const titleInput = document.getElementById("note-title");
  const contentInput = document.getElementById("note-content");

  const title = titleInput.value;
  const content = contentInput.value;

  // create note element with custom class
  const note = document.createElement("li");
  note.classList.add("note");

  // create and append title element
  const titleElement = document.createElement("h3");
  titleElement.classList.add("note-title");
  titleElement.innerText = title;
  note.appendChild(titleElement);

  // create and append content element
  const contentElement = document.createElement("p");
  contentElement.classList.add("note-content");
  contentElement.innerText = content;
  note.appendChild(contentElement);

  // create delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerText = "Delete";
  note.appendChild(deleteButton);

  // add note to note list
  noteList.appendChild(note);

  // add event listener to delete button
  deleteButton.addEventListener("click", deleteNote);

  // clear form inputs
  titleInput.value = "";
  contentInput.value = "";
}

function deleteNote() {
  const note = this.parentNode;
  noteList.removeChild(note);
}