document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".quote-container");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Aggiunge la classe visibile
                observer.unobserve(entry.target); // Smette di osservare dopo l'apparizione
            }
        });
    }, { threshold: 0.1 }); // Attiva quando il 10% è visibile

    sections.forEach(section => observer.observe(section));
});