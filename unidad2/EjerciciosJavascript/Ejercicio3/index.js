function numRepeticiones(numeros) {
    const frecuencias = {};

    for (const num of numeros) {
        frecuencias[num] = (frecuencias[num] || 0) + 1;
    }

    let numeroMenosRepetido = null;
    let menorCantidad = Infinity;
    for (const propiedad in frecuencias) {
        const numActual = Number(propiedad);
        const cantidadActual = frecuencias[propiedad];

        if (cantidadActual < menorCantidad) {
            menorCantidad = cantidadActual;
            numeroMenosRepetido = numActual;
        } else if (cantidadActual === menorCantidad && numActual < numeroMenosRepetido) {
            numeroMenosRepetido = numActual;
        }
    }

    alert("El número menos repetido es: " + numeroMenosRepetido);
    return numeroMenosRepetido;
}

// Evento del formulario para probarlo fácilmente
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const texto = document.getElementById("numeros").value;
    const arrayNumeros = texto.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
    numRepeticiones(arrayNumeros);
});