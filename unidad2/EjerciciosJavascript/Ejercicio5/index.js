function eliminarDuplicados(elementos) {
    const unicos = [...new Set(elementos)];

    alert("Array sin repetidos: [" + unicos.map(e => typeof e === "string" ? `"${e}"` : e).join(", ") + "]");
    return unicos;
}

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const texto = document.getElementById("elementos").value.trim();

    const arrayElementos = texto.split(",").map(item => {
        item = item.trim();
        if (item !== "" && !isNaN(Number(item))) {
            return Number(item);
        }
        return item;
    });

    eliminarDuplicados(arrayElementos);
});