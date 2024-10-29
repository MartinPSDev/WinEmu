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
    searchButton.innerHTML = '<img src="path/to/white-magnifying-glass.png" alt="Buscar" class="search-icon">'; // Asegúrate de que esta ruta sea correcta
    taskbar.appendChild(searchButton);

    // Crear la consola de PowerShell
    const powershellWindow = document.createElement('div');
    powershellWindow.className = 'powershell-window';
    powershellWindow.style.display = 'none'; 
    document.body.appendChild(powershellWindow);

    // Función para mostrar la consola
    function openPowerShell() {
        powershellWindow.style.display = 'block';
        powershellWindow.innerHTML = `
            <h2>
                PowerShell
                <button class="close-button" id="closeButton">X</button>
            </h2>
            <textarea class="powershell-prompt" placeholder="PS C:\\User>"></textarea>
        `;
        // Enfocar el textarea para que el usuario pueda escribir inmediatamente
        const textarea = powershellWindow.querySelector('.powershell-prompt');
        textarea.focus();

        // Añadir el evento de clic al botón de cerrar
        const closeButton = document.getElementById('closeButton');
        closeButton.addEventListener('click', closePowerShell);
    }

    // Función para cerrar la consola de PowerShell
    function closePowerShell() {
        powershellWindow.style.display = 'none'; 
    }

    // Hacer que la ventana sea arrastrable
    let isDragging = false;
    let offsetX, offsetY;

    powershellWindow.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - powershellWindow.getBoundingClientRect().left;
        offsetY = e.clientY - powershellWindow.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            powershellWindow.style.left = `${e.clientX - offsetX}px`;
            powershellWindow.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Autocompletar y abrir PowerShell
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        if (['powershell', 'po', 'pow', 'powe'].some(term => query.startsWith(term))) {
            searchButton.style.display = 'inline'; 
        } else {
            searchButton.style.display = 'none'; 
        }
    });

    // Evento para abrir PowerShell al hacer clic en el botón
    searchButton.addEventListener('click', openPowerShell);
});