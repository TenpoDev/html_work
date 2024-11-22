let slideIndex = 1;


//TODO: rivedere logia del content
function resetSlideAnimations(slide) {
    const content = slide.querySelector(".content");
    const title = slide.querySelector(".title");
    const description = slide.querySelector(".description");
    const button = slide.querySelector(".content .button");

    // Rimuovere animazioni precedenti
    content.style.animation = 'none';
    title.style.animation = 'none';
    description.style.animation = 'none';

    // Forzare il ricalcolo delle dimensioni per riavviare l'animazione
    content.offsetHeight;
    title.offsetHeight;
    description.offsetHeight;
    button.offsetHeight;
}

function applySlideAnimations(slide) {
    // const content = slide.querySelector(".content");
    const title = slide.querySelector(".title");
    const description = slide.querySelector(".description");

    // content.style.animation = 'fadeIn 1s forwards';
    title.style.animation = 'fadeIn 3s forwards';
    description.style.animation = 'fadeIn 5s forwards';
}

function showSlides(n) {
    const slides = Array.from(document.getElementsByClassName("slide"));
    const totalSlides = slides.length;

    // Ciclo degli indici
    slideIndex = n > totalSlides ? 1 : (n < 1 ? totalSlides : n);

    // Rimuovere classe 'active' da tutte le slide
    slides.forEach(slide => slide.classList.remove("active"));
    // Resetta e applica le animazioni alla slide attiva
    resetSlideAnimations(slides[slideIndex - 1]);
    slides[slideIndex - 1].classList.add("active");
    applySlideAnimations(slides[slideIndex - 1]);
}

function cycleBackgrounds(direction) {
    const columns = Array.from(document.querySelectorAll(".slide-gallery .column"));
    const totalColumns = columns.length;

    // Gestire il ciclo degli sfondi
    const backgrounds = columns.map(column => column.style.backgroundImage);
    if (direction === -1) {
        backgrounds.unshift(backgrounds.pop());  // Spostare l'ultimo all'inizio
    } else if (direction === 1) {
        backgrounds.push(backgrounds.shift()); // Spostare il primo alla fine
    }

    // Aggiornare gli sfondi
    columns.forEach((column, index) => {
        column.style.backgroundImage = backgrounds[index];
    });
}

function changeSlide(direction) {
    cycleBackgrounds(direction);
    showSlides(slideIndex += direction);
}

// Inizializzazione al caricamento del DOM
document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
});
