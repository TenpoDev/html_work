// Simuliamo il caricamento per 3 secondi e poi nascondiamo la schermata di caricamento
window.onload = function() {
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 3000); // Il caricamento dura 3 secondi
};
