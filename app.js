// Función para agregar una nueva tarea a la lista
function agregarTarea() {
  const nuevaTareaInput = document.getElementById("nuevaTarea");
  const nuevaTareaTexto = nuevaTareaInput,value;

  if (nuevaTareaTexto !== "") {
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaElemento = CreateElement(!li");
   
    nuevaTareaElemento.textContent = nuevaTareaTexto;

    const completarBoton = document.createElement(button");
    completarBoton.textContent = "Completar";
    completarBoton.classList.add("btn-completar");
    completarBoton.onclick = function () {
      nuevaTareaElemento.classList.toggle("completada");
    };

    const eliminarBoton = document.createElement("button");
    eliminarBoton.textContent = "Eliminar";
    eliminarBoton.classList.add("btn-eliminar");
    eliminarBoton.onclick = function () {
      listaTareas.removeChild(nuevaTareaElemento);
    };

    // nuevaTareaElemento agregar elementos completarBoton y eliminarBoton a la nueva tarea
    nuevaTareaElemento.appendChild(completarBoton);
    nuevaTareaElemento.appendChild(eliminarBoton);
    listaTareas.appendChild(nuevaTareaElemento);
    nuevaTareaInput.value = "";
  }
}
