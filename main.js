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


// main.js

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
