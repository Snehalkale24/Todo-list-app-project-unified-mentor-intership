
  const tasks = [];

  function renderTasks() {
    const list = document.getElementById("todo-list");
    list.innerHTML = "";

    if (tasks.length === 0) {
      list.innerHTML = "<p>No tasks available</p>";
    } else {
      tasks.forEach((task, index) => {
        list.innerHTML += `
          <div class="todo-item">
            ${task}
            <span class="delete-btn" onclick="deleteTask(${index})">X</span>
          </div>
        `;
      });
    }
  }

  function addTask() {
    const input = document.getElementById("task");
    if (input.value.trim() !== "") {
      tasks.push(input.value.trim());
      input.value = "";
      renderTasks();
    }
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
  }

  renderTasks();

