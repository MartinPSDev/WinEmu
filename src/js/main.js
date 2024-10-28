let windows = [];

function createWindow(title) {
    const newWindow = document.createElement('div');
    newWindow.className = 'window';
    newWindow.innerHTML = `<h2>${title}</h2><button onclick="closeWindow(this)">Cerrar</button>`;
    document.body.appendChild(newWindow);
    windows.push(newWindow);
}

function closeWindow(button) {
    const windowToClose = button.parentElement;
    document.body.removeChild(windowToClose);
    windows = windows.filter(win => win !== windowToClose);
}

function playSound() {
    const audio = new Audio('path/to/sound.mp3');
    audio.play(); // Call playSound() on specific events, such as opening a window
}

// Asegúrate de que el código se ejecute después de que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    // Crear la barra de tareas
    const taskbar = document.createElement('div');
    taskbar.className = 'taskbar';
    document.body.appendChild(taskbar);

    // Crear el input de búsqueda
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Buscar aplicaciones...';
    taskbar.appendChild(searchInput);

    // Crear el botón de búsqueda
    const searchButton = document.createElement('button');
    searchButton.innerHTML = '🔍';
    taskbar.appendChild(searchButton);

    // Crear la consola de PowerShell
    const powershellWindow = document.createElement('div');
    powershellWindow.className = 'powershell-window';
    powershellWindow.style.display = 'none'; // Ocultar inicialmente
    document.body.appendChild(powershellWindow);

    // Función para mostrar la consola
    function openPowerShell() {
        powershellWindow.style.display = 'block';
        powershellWindow.innerHTML = `
            <h2>
                PowerShell
                <button class="close-button" onclick="closePowerShell()">X</button>
            </h2>
            <textarea></textarea>
        `;
    }

    // Función para cerrar la consola de PowerShell
    function closePowerShell() {
        powershellWindow.style.display = 'none'; // Ocultar la ventana
    }

    // Autocompletar y abrir PowerShell
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        if (['powershell', 'po', 'pow', 'powe'].some(term => query.startsWith(term))) {
            searchButton.style.display = 'inline'; // Mostrar botón
        } else {
            searchButton.style.display = 'none'; // Ocultar botón
        }
    });

    // Evento para abrir PowerShell al hacer clic en el botón
    searchButton.addEventListener('click', openPowerShell);
});