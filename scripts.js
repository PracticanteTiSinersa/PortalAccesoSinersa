document.addEventListener("DOMContentLoaded", function () {
    console.log("Portal de Acceso Sinersa cargado correctamente.");

    // Agregar animaciones a los elementos al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

    // Agregar funcionalidad de modo oscuro
    const toggleThemeBtn = document.getElementById("toggle-theme");
    toggleThemeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
