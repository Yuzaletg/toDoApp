const btn = document.querySelector("[data-form-btn]");

const creareTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  console.log(input.value);
};
console.log(btn);

// Arrow function o funciones anònimas

btn.addEventListener("click", creareTask);
