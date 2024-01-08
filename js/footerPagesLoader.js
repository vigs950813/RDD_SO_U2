document.addEventListener("DOMContentLoaded", function() {
    const footerContainer = document.getElementById('footer-container');

    fetch('../dynamic/footerPages.html') // Ruta al archivo footer.html
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            footerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Hubo un problema al cargar el footer:', error);
        });
});