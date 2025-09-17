const saibaMaisModal = document.getElementById("saibaMaisModal");
const portifolioModal = document.getElementById("portifolioModal");
const abrirSaibaMais = document.getElementById("abrirSaibaMais");
const abrirPortifolio = document.getElementById("abrirPortifolio");
const closeButtons = document.querySelectorAll(".close");
const back = document.getElementById("back-to-top");

back.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

abrirSaibaMais.addEventListener("click", () => {
    saibaMaisModal.style.display = "flex";
});

abrirPortifolio.addEventListener("click", () => {
    portifolioModal.style.display = "flex";
});

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        saibaMaisModal.style.display = "none";
        portifolioModal.style.display = "none";
    });
});

window.addEventListener("click", (event) => {
    if (event.target === saibaMaisModal) {
        saibaMaisModal.style.display = "none";
    }
    if (event.target === portifolioModal) {
        portifolioModal.style.display = "none";
    }
});