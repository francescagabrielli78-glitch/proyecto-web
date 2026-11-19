
function abrirMenu() {
    const menu = document.getElementById("menu-desplegable");
    menu.classList.toggle("activo");
}

const botonArriba = document.getElementById("volver-arriba");

if (botonArriba) {
    function actualizarBotonArriba() {
        botonArriba.classList.toggle("visible", window.scrollY > 300);
    }

    window.addEventListener("scroll", actualizarBotonArriba, {
        passive: true
    });

    botonArriba.addEventListener("click", function () {
        const reducirMovimiento = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        window.scrollTo({
            top: 0,
            behavior: reducirMovimiento ? "instant" : "smooth"
        });
    });

    actualizarBotonArriba();
}
