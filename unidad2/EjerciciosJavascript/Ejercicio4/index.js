function numImpar(numeros) {
    const unicos = [...new Set(numeros)];
    const impares = unicos.filter(num => {
        const total = numeros.filter(n => n === num).length;
        return total % 2 !== 0;
    });

    alert("Números que se repiten un número impar de veces: " + (impares.length > 0 ? impares.join(", ") : "Ninguno"));
    return impares;
}

// Evento del formulario para probarlo fácilmente
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const texto = document.getElementById("numeros").value;
    const arrayNumeros = texto.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
    numImpar(arrayNumeros);
});