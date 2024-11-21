function simulateAsyncTask() {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000); // Simula un caricamento di 3 secondi
    });
}

window.onload = function () {
    simulateAsyncTask().then(() => {
        document.body.classList.add('loaded');
    });
};
