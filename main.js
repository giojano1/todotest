const taskInput = document.getElementById("taskInput");
const taskBtn = document.getElementById("addTask");
taskBtn.addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  let inputValue = taskInput.value.trim();
  if (inputValue !== "") {
    let listItem = document.createElement("li");
    listItem.textContent = inputValue;
    taskList.appendChild(listItem);

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "remove";
    removeBtn.addEventListener("click", function () {
      taskList.removeChild(listItem);
    });
    listItem.appendChild(removeBtn);
  }
  taskInput.value = "";
});
