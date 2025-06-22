let tareas = [];

function agregarTarea() {
  const tareaInput = document.getElementById("tarea");
  const texto = tareaInput.value.trim();

  if (texto === "") {
    alert("Por favor, escribe una tarea.");
    return;
  }

  tareas.push(texto);
  tareaInput.value = "";
  mostrarTareas();
}

function mostrarTareas() {
  const lista = document.getElementById("listaTareas");
  lista.innerHTML = ""; 

  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    li.textContent = tarea;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = () => eliminarTarea(index);

    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

function eliminarTarea(indice) {
  tareas.splice(indice, 1);
  mostrarTareas();
}