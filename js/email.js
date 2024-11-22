// Inizializza EmailJS
emailjs.init("gY3ePzo5aizViUSwz"); // ID utente dalla dashboard di EmailJS

// Gestisci l'invio del modulo
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previeni il refresh della pagina

    // Invia il modulo con EmailJS
    emailjs.sendForm("service_fc1hdrp", "template_cziybgs", this)
        .then(function() {
            document.getElementById("contact-form").reset();
        }, function(error) {
            alert("Errore nell'invio: " + error.text);
        });
});
