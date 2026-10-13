document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(
        ".topic-card, .intro-preview, .formula-section, .team-member, .content-card"
    );

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("show");
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.15 });

    elementos.forEach((elemento) => observador.observe(elemento));

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
        link.addEventListener("click", (evento) => {
            const destino = document.querySelector(link.getAttribute("href"));

            if (destino) {
                evento.preventDefault();
                destino.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    const titulo = document.querySelector(".hero h1");

    if (titulo) {
        titulo.addEventListener("mouseenter", () => {
            titulo.style.transform = "scale(1.03)";
        });

        titulo.addEventListener("mouseleave", () => {
            titulo.style.transform = "scale(1)";
        });
    }
});