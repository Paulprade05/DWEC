/**
 * Gestor de modales para reemplazar prompt() y confirm() usando <dialog>.
 * Permite interactuar con el usuario sin bloquear el hilo principal de la UI.
 */

async function pedirConfirmacion(mensaje) {
    // Crear el elemento dialog si no existe
    let dialog = document.getElementById('custom-confirm-dialog');
    if (!dialog) {
        dialog = document.createElement('dialog');
        dialog.id = 'custom-confirm-dialog';
        
        // Estilos básicos incorporados
        dialog.style.padding = '20px';
        dialog.style.borderRadius = '8px';
        dialog.style.border = '1px solid #ccc';
        dialog.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        dialog.style.maxWidth = '400px';

        const content = document.createElement('div');
        content.innerHTML = `
            <p id="dialog-message" style="margin-bottom: 20px;"></p>
            <div style="text-align: right;">
                <button id="btn-cancel" style="margin-right: 10px; padding: 8px 16px;">Cancelar</button>
                <button id="btn-confirm" style="padding: 8px 16px;">Aceptar</button>
            </div>
        `;
        dialog.appendChild(content);
        document.body.appendChild(dialog);
    }

    const messageElem = dialog.querySelector('#dialog-message');
    const btnConfirm = dialog.querySelector('#btn-confirm');
    const btnCancel = dialog.querySelector('#btn-cancel');

    messageElem.textContent = mensaje;

    // Mostrar el modal (bloquea interacción con el resto de la página pero no el hilo principal)
    dialog.showModal();

    return new Promise((resolve) => {
        const handleConfirm = () => {
            dialog.close();
            resolve(true);
            // Limpiar listeners para evitar ejecuciones múltiples si se reabre
            btnConfirm.onclick = null;
            btnCancel.onclick = null;
        };

        const handleCancel = () => {
            dialog.close();
            resolve(false);
            btnConfirm.onclick = null;
            btnCancel.onclick = null;
        };

        btnConfirm.onclick = handleConfirm;
        btnCancel.onclick = handleCancel;
    });
}


