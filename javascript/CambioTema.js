document.getElementById("CambioTema").addEventListener("click", function () {
    document.body.classList.toggle("TemaOscuro") // Cambia el ícono del botón // 
    if (document.body.classList.contains("TemaOscuro")) {
        this.textContent = "🌙"; // Luna 
    } else {
        this.textContent = "☀️"; // Sol
    }
});
