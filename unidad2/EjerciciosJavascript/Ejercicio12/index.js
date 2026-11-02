function colorFinal(fila) {
    const colores = ["R", "G", "B"];
    let actual = fila.split('');

    while (actual.length > 1) {
        const siguiente = [];

        for (let i = 0; i < actual.length - 1; i++) {
            if (actual[i] === actual[i + 1]) {
                siguiente.push(actual[i]);
            } else {
                siguiente.push(colores.find(c => c !== actual[i] && c !== actual[i + 1]));
            }
        }

        actual = siguiente;
    }

    return actual[0];
}

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const fila = document.getElementById("fila").value.trim().toUpperCase();

    if (!/^[RGB]+$/.test(fila)) {
        alert("Usa solo las letras R, G y B");
        return;
    }

    alert(`El color final es: ${colorFinal(fila)}`);
});
