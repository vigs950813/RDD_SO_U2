document.addEventListener("DOMContentLoaded", function() {
    const headerContainer = document.getElementById('navbarIndex-container');

    fetch('dynamic/navbarIndex.html') // Ruta al archivo header.html
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
            console.error('Hubo un problema al cargar el navbar del index:', error);
        });
});