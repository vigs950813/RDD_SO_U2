document.addEventListener("DOMContentLoaded", function() {
    const navbarIndexContainer = document.getElementById('offcanvas-container');

    fetch('../dynamic/offcanvas.html') // Ruta al archivo header.html
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            navbarIndexContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Hubo un problema al cargar el offcanvas:', error);
        });
});