document.getElementById("CambioTemaPurpura").addEventListener("click", function () {
    document.body.classList.toggle("TemaOscuro");

    // Cambia el ícono del botón
    if (document.body.classList.contains("TemaOscuro")) {
        this.textContent = "🌙"; // Luna
        document.body.style.backgroundColor = "rgba(128, 0, 128, 0.5)"; // Púrpura con opacidad
        document.querySelector("header").style.backgroundColor = "rgba(128, 0, 128, 0.5)";// Púrpura con opacidad
        document.querySelector("nav").style.backgroundColor = "rgba(128, 0, 128, 0.5)"; 
        document.querySelector("footer").style.backgroundColor = "rgba(128, 0, 128, 0.5)";
        document.querySelector("div").style.backgroundColor = "rgba(128, 0, 128, 0.5)";  // Púrpura con opacidad
    } else {
        this.textContent = "☀️"; // Sol
        document.body.style.backgroundColor = " "; // Color lavanda
        document.querySelector("header").style.backgroundColor = "#b57edc";// Color lavanda
        document.querySelector("nav").style.backgroundColor = "#b57edc"; 
        document.querySelector("div").style.backgroundColor = "#b57edc"; 
        document.querySelector("footer").style.backgroundColor = "#b57edc"; // Color lavanda
    }
});
