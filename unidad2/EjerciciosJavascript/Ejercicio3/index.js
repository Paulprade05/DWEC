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

    console.log(numeroMenosRepetido);
}

numRepeticiones([1, 2, 3, 4, 2, 4, 3, 3, 1, 5, 6, 7,])