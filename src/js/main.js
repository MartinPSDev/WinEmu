
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



// Create a new window when clicking a button
document.getElementById('openWindowButton').addEventListener('click', () => {
    createWindow('Nueva Ventana');
});