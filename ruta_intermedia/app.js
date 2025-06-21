document.getElementById("btnSaludar").addEventListener("click", function() {
  const nombre = document.getElementById("nombre").value;
  const contenedor = document.getElementById("saludo");

  if (nombre.trim() === "") {
    contenedor.textContent = "Por favor, escribe tu nombre.";
  } else {
    contenedor.textContent = `Hola, ${nombre}!`;
  }
});