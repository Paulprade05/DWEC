function numImpar(numeros) {
    const unicos = [...new Set(numeros)];
    const impares = unicos.filter(num => {
        const total = numeros.filter(n => n === num).length;
        return total % 2 !== 0;
    });

    console.table(impares);
    return impares;
}

numImpar([1, 3, 1, 2, 2, 4, 5, 3, 2, 6, 4, 5, 78, 5, 4, 3, 4, 5, 6, 567, 65, 86, 786, 7])