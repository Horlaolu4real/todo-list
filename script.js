document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("inputBox");
  const taskList = document.getElementById("taskList");

  function createTaskItem(taskContent) {
    let li = document.createElement("li");
    li.textContent = taskContent;

    let editButton = document.createElement("span");
    editButton.textContent = "EDIT";  
    editButton.className = "edit-btn";
    editButton.addEventListener("click", function () {
      const newTaskContent = prompt("Edit task:", taskContent);
      if (newTaskContent !== null && newTaskContent.trim() !== "") {
        li.textContent = newTaskContent;
      }
    });
    li.appendChild(editButton);

    let deleteButton = document.createElement("span");
    deleteButton.textContent = "❌";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", function () {
      li.remove();
    });
    li.appendChild(deleteButton);

    let completeButton = document.createElement("span");
    completeButton.textContent = "✔";
    completeButton.className = "complete-btn";
    completeButton.addEventListener("click", function () {
      li.classList.toggle("complete");
    });
    li.appendChild(completeButton);

    return li;
  }

  function addTask() {
    let taskContent = taskInput.value.trim();
    if (taskContent !== "") {
      let taskItem = createTaskItem(taskContent);
      taskList.appendChild(taskItem);
      taskInput.value = "";
    } else {
      alert("Please fill out the field!");
    }
  }

  document.getElementById("addTaskBtn").addEventListener("click", addTask);
});

