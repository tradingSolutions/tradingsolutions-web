document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider-id');
    const container = document.getElementById('container-slider');
    let isMouseDown = false;

    function moveSlider(e) {
        if (!isMouseDown) return;
        let rect = container.getBoundingClientRect(),
            x = e.clientX - rect.left;
        x = Math.min(Math.max(0, x), rect.width);
        slider.style.width = x + 'px';
    }

    document.addEventListener('mousedown', function(e) {
        if (e.target === slider || e.target.parentNode === slider) {
            isMouseDown = true;
        }
    });

    document.addEventListener('mouseup', function() {
        isMouseDown = false;
    });

    document.addEventListener('mousemove', moveSlider);

        // Obtén una referencia al botón del menú desplegable (toggler)
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Obtén una referencia a todos los enlaces de navegación
    const navLinks = document.querySelectorAll('.navbar-nav a');

    // Agrega un evento de clic a cada enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Cierra el menú desplegable
            navbarToggler.click();
        });
    });
});
