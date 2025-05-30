function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
