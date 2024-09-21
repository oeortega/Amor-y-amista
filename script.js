function revealMessage() {
    const message = document.getElementById('hidden-message');
    
    if (message.style.display === 'none' || message.style.display === '') {
        message.style.display = 'block'; // Mostrar el mensaje
    } else {
        message.style.display = 'none';  // Ocultar el mensaje
    }
}

