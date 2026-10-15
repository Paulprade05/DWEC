class Tarea {
    constructor(nombre, estado, id) {
        this.id = number;
        this.nombre = String;
        this.estado = String
    }

}
let contador = 0;
function contruirTarea() {
    const listado = [];
    if (document.getElementById("nombreTarea") != "") {
        nombreTarea = document.getElementById("nombreTarea");
        id = contador;
        contador++;
        listado.push(new Tarea(nombreTarea, "pendiente", id));
    } else {
        return -1
    }

}

function filtrarTareas(lista) {
    criterio = document.getElementById("tipoFiltrado")
    return lista.filter(tarea => {
        if (criterio === "completadas") {
            return tarea.estado === "completada";
        }
        if (criterio === "pendientes") {
            return tarea.estado === "pendiente";
        }
        return true;
    });
}