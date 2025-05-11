document.addEventListener('DOMContentLoaded', () => {
    // Logic for the first "Ver más" button
    const verMasBtn = document.getElementById("ver-mas-btn");
    const parrafosOcultos = document.querySelectorAll(".parrafo-oculto");

    if (verMasBtn && parrafosOcultos.length > 0) {
        verMasBtn.addEventListener("click", () => {
            parrafosOcultos.forEach((parrafo) => {
                parrafo.classList.toggle("parrafo-oculto");
            });

            if (verMasBtn.innerText.trim() == "Ver más") {
                verMasBtn.innerText = "Ver menos";
            } else {
                verMasBtn.innerText = "Ver más";
            }
        });
    }

    // Logic for the second "Ver más" button
    const verMasBtn2 = document.getElementById("ver-mas-btn2");
    const parrafosOcultos2 = document.querySelectorAll(".parrafo-oculto2");

    if (verMasBtn2 && parrafosOcultos2.length > 0) {
        verMasBtn2.addEventListener("click", () => {
            parrafosOcultos2.forEach((parrafo) => {
                parrafo.classList.toggle("parrafo-oculto2");
            });

            if (verMasBtn2.innerText.trim() == "Ver más") {
                verMasBtn2.innerText = "Ver menos";
            } else {
                verMasBtn2.innerText = "Ver más";
            }
        });
    }
});
