document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("boton-eventos");

  boton.addEventListener("click", function (e) {
    e.preventDefault();
    const seccionEventos = document.getElementById("eventos");

    seccionEventos.scrollIntoView({
      behavior: "smooth"
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector("form");
  const mensajeConfirmacion = document.getElementById("mensaje-confirmacion");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se recargue la página

    // Aquí podrías enviar los datos por fetch si quieres conectar con un servidor

    formulario.reset(); // Limpia el formulario
    mensajeConfirmacion.style.display = "block"; // Muestra mensaje
  });
});

