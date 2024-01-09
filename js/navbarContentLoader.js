document.addEventListener("DOMContentLoaded", function() {
    const navbarIndexContainer = document.getElementById('navbarContent-container');

    fetch('dynamic/navbarContent.html') // Ruta al archivo header.html
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
            console.error('Hubo un problema al cargar el navbar del index:', error);
        });
});