const addTaskBtn = document.getElementById("addTaskBtn");
const foundList = document.getElementById("found");
const progressList = document.getElementById("progress");
const fixedList = document.getElementById("fixed");

const modal = document.getElementById("modal");
const viewModal = document.getElementById("viewModal");
const noteInput = document.getElementById("noteInput");
const noteView = document.getElementById("noteView");
const saveNoteBtn = document.getElementById("saveNoteBtn");
let currentTask = null;

addTaskBtn.addEventListener("click", () => {
  let bugName = prompt("Masukkan nama bug:");

  if (!bugName || bugName.trim() === "") {
    bugName = "Bug baru ditemukan";
  }

  const task = document.createElement("div");
  task.classList.add("task");
  task.draggable = true;
  task.textContent = bugName;

  const del = document.createElement("button");
  del.textContent = "✕";
  del.classList.add("delete");
  del.addEventListener("click", () => task.remove());
  task.appendChild(del);

  foundList.appendChild(task);

  enableDrag(task);
});

function enableDrag(task) {
  task.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", null);
    currentTask = task;
  });
}

[foundList, progressList, fixedList].forEach(list => {
  list.addEventListener("dragover", e => e.preventDefault());

  list.addEventListener("drop", e => {
    if (!currentTask) return;

    if (list === progressList && currentTask.parentElement === foundList) {
      progressList.appendChild(currentTask);
    } 
    else if (list === fixedList && currentTask.parentElement === progressList) {
      if (currentTask.dataset.note) {
        fixedList.appendChild(currentTask);
      } else {
        alert("Isi catatan perbaikan dulu sebelum pindah ke Fixed!");
      }
    }
    currentTask = null;
  });
});

document.addEventListener("click", e => {
  if (e.target.classList.contains("task")) {
    const task = e.target;

    if (task.parentElement === progressList) {
      currentTask = task;
      noteInput.value = task.dataset.note || "";
      modal.style.display = "block";
    }

    if (task.parentElement === fixedList) {
      noteView.textContent = task.dataset.note || "(Tidak ada catatan)";
      viewModal.style.display = "block";
    }
  }
});

saveNoteBtn.addEventListener("click", () => {
  if (currentTask) {
    currentTask.dataset.note = noteInput.value.trim();
    if (noteInput.value.trim() !== "") {
      currentTask.classList.add("green");
    }
  }
  modal.style.display = "none";
});

document.querySelectorAll(".modal .close").forEach(closeBtn => {
  closeBtn.addEventListener("click", e => {
    e.target.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
  if (e.target === viewModal) viewModal.style.display = "none";
});


