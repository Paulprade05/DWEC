function arrayDiff(a, b) {
    return a.filter(valor => !b.includes(valor));
}

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const aArray = document.getElementById("listaA").value.split(",").map(n => Number(n.trim()));
    const bArray = document.getElementById("listaB").value.split(",").map(n => Number(n.trim()));

    const resultado = arrayDiff(aArray, bArray);
    alert("resultado: [" + resultado.join(", ") + "]");
});
