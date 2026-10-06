function pinValido(pin) {
    if (pin.toString().length === 4) {
        alert(true);
        return true;
    } else {
        alert(false);
        return false;
    }
}

// Evento del formulario para probarlo fácilmente
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const pin = document.getElementById("pin").value;
    pinValido(pin);
});