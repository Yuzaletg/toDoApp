const btn = document.querySelector("[data-form-btn]");

const creareTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const list = document.querySelector(`[data-list]`);
  const task = document.createElement("li");
  task.classList.add("card");
  input.value = ""; //limpiamos el input
  const content = `<div>
  <i class="far fa-check-square icon"></i>
  <span class="task">${value}</span>
</div>
<i class="fas fa-trash-alt trashIcon icon"></i>`;
  console.log(content);
  task.innerHTML = content;
  list.appendChild(task);
};
console.log(btn);

// Arrow function o funciones anònimas

btn.addEventListener("click", creareTask);
