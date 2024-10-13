const btnNo = document.querySelector("#btn-random")
const btnSi = document.querySelector("#btn-au")
let scaleFactorSi = 1;


function moverAleatoriamente(btn) {
    btn.style.position = "absolute";
    btn.style.fontWeight = "bolder";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%"
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%"
}

btnNo.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target)
    scaleFactorSi += 0.5; // Aumenta el factor de escala del botón "Sí"
    btnSi.style.transform = `scale(${scaleFactorSi})`;
})