const formulario = document.getElementById("formContacto");
const respuesta = document.getElementById("respuesta");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('nombre')) {
    nombre.value = localStorage.getItem('nombre');
  }
  if (localStorage.getItem('email')) {
    email.value = localStorage.getItem('email');
  }
  if (localStorage.getItem('mensaje')) {
    mensaje.value = localStorage.getItem('mensaje');
  }
});

nombre.addEventListener('input', () => {
  localStorage.setItem('nombre', nombre.value);
});

email.addEventListener('input', () => {
  localStorage.setItem('email', email.value);
});

mensaje.addEventListener('input', () => {
  localStorage.setItem('mensaje', mensaje.value);
});

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    nombre.value.trim();
    email.value.trim();
    mensaje.value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
        respuesta.innerHTML =
            '<div class="alert alert-danger">Todos los campos son obligatorios.</div>';
        return;
    }

    localStorage.removeItem('nombre');
    localStorage.removeItem('email');
    localStorage.removeItem('mensaje');
    
    respuesta.innerHTML =
        '<div class="alert alert-success">Mensaje enviado correctamente. ¡Gracias por contactarnos!</div>';

    formulario.reset();
});