function contarVocales(cadena) {
    let contador = 0;
    const vocales = "aeiouáéíóú";

    for (const letra of cadena.toLowerCase()) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    
    alert("Número de vocales: " + contador);
    return contador;
}

// Evento del formulario para probarlo fácilmente
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const texto = document.getElementById("texto").value;
    contarVocales(texto);
});
