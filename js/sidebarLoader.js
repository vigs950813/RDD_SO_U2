document.addEventListener("DOMContentLoaded", function() {
    const sidebarContainer = document.getElementById('sidebar-container');

    fetch('dynamic/sidebar.html') // Ruta al archivo header.html
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            sidebarContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Hubo un problema al cargar el sidebar:', error);
        });
});