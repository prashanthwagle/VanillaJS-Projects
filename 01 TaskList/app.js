const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

filter.value = "";

function loadEventListeners() {
  loadTasksfromLocalStorage();
  form.addEventListener("submit", addTask);
  taskList.addEventListener("click", removeTask);
  clearBtn.addEventListener("click", clearTasks);
  filter.addEventListener("keyup", filterTasks);
}

function addTask(e) {
  e.preventDefault();
  if (taskInput.value.trim() == "") {
    alert("Kindly fill in the input");
    return;
  }
  const li = document.createElement("li");
  li.classList.add("collection-item");
  li.appendChild(document.createTextNode(taskInput.value.trim()));
  li.style.cursor = "pointer";

  const link = document.createElement("a");
  link.className = "secondary-content delete-item";
  link.innerHTML = "<i class='fa fa-remove'></i>";

  li.appendChild(link);
  storeTaskInLocalStorage(taskInput.value.trim());

  taskInput.value = "";

  taskList.appendChild(li);
}

function removeTask(e) {
  let taskToBeRemoved;
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure?")) {
      //console.log(e.target.parentElement.parentElement)
      removeTaskFromLocalStorage(
        e.target.parentElement.parentElement.firstChild
      );
      e.target.parentElement.parentElement.remove();
    }
  }
}

function removeTaskFromLocalStorage(curTask) {
  //console.log(task)
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) {
    tasks.forEach(function (task, index) {
      if (task === curTask.textContent) {
        tasks.splice(index, 1);
      }
    });
  }
  console.log(tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearTasks(e) {
  //taskList.innerHTML='';
  //Refer this article on why the below is faster
  while (taskList.firstChild) {
    taskList.firstChild.remove();
  }
  localStorage.clear();
}

function filterTasks(e) {
  if (e.target.value) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll(".collection-item").forEach((item) => {
      console.log(item);
      if (item.firstChild.data.toLowerCase().indexOf(text) !== -1)
        item.style.display = "block";
      else item.style.display = "none";
    });
  }
}

function storeTaskInLocalStorage(task) {
  let tasks;
  if (!localStorage.getItem("tasks")) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  console.log(tasks);
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksfromLocalStorage() {
  let tasks = localStorage.getItem("tasks");
  if (tasks) {
    tasks = JSON.parse(tasks);
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.classList.add("collection-item");
      li.appendChild(document.createTextNode(task));
      li.style.cursor = "pointer";
      const link = document.createElement("a");
      link.className = "secondary-content delete-item";
      link.innerHTML = "<i class='fa fa-remove'></i>";
      li.appendChild(link);
      taskList.appendChild(li);
    });
  }
}

loadEventListeners();
