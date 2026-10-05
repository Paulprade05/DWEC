function contarVocales(cadena) {
    let contador = 0;
    const vocales = "aeiouáéíóú";

    for (const letra of cadena.toLowerCase()) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    console.log(contador)

    return contador;
}

contarVocales("alieeurtjyufbfweblaweuf")
