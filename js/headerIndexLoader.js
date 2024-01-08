document.addEventListener("DOMContentLoaded", function() {
    const headerContainer = document.getElementById('header-container');

    fetch('dynamic/headerIndex.html') // Ruta al archivo header.html
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            headerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Hubo un problema al cargar el header:', error);
        });
});