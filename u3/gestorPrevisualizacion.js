class GestorVentanaEmergente {
  constructor(ancho = 600, alto = 450) {
    this.ancho = ancho;
    this.alto = alto;
    this.referencia = null;
  }

  abrirCentrada(url = "https://google.com") {
    // Cálculo de posición centrada en el monitor del usuario
    const left = Math.max(0, Math.floor((window.screen.width - this.ancho) / 2));
    const top = Math.max(0, Math.floor((window.screen.height - this.alto) / 2));
    const specs = `width=${this.ancho},height=${this.alto},left=${left},top=${top},resizable=yes,scrollbars=yes`;

    this.referencia = window.open(url, "VentanaCentrada", specs);

    if (!this.referencia) {
      console.error("❌ Ventana bloqueada. Por favor, habilite los popups en la barra de direcciones.");
      return false;
    }

    console.log("✅ Ventana abierta con éxito en posición:", { left, top });
    return true;
  }

  cerrar() {
    if (this.referencia && !this.referencia.closed) {
      this.referencia.close();
      console.log("Ventana auxiliar cerrada programáticamente.");
      this.referencia = null;
    } else {
      console.warn("La ventana ya estaba cerrada o nunca fue abierta.");
    }
  }
}

// Uso del gestor
const gestor = new GestorVentanaEmergente(640, 480);
// gestor.abrirCentrada(); // Requiere evento de usuario en navegador