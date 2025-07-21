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
