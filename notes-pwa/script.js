const noteInput = document.getElementById('note-input');
const addBtn = document.getElementById('add-btn');
const notesList = document.getElementById('notes-list');
const status = document.getElementById('status');

function loadNotes() {
  notesList.innerHTML = '';
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.forEach((note, index) => {
    const li = document.createElement('li');
    li.textContent = note;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.onclick = () => {
      notes.splice(index, 1);
      localStorage.setItem('notes', JSON.stringify(notes));
      loadNotes();
    };
    li.appendChild(deleteBtn);
    notesList.appendChild(li);
  });
}

addBtn.addEventListener('click', () => {
  const text = noteInput.value.trim();
  if (text) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(text);
    localStorage.setItem('notes', JSON.stringify(notes));
    noteInput.value = '';
    loadNotes();
  }
});

window.addEventListener('load', () => {
  loadNotes();
  updateOnlineStatus();
});

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

function updateOnlineStatus() {
  status.style.display = navigator.onLine ? 'none' : 'block';
}