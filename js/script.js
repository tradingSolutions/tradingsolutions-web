const slider = document.getElementById('slider');
const container = slider.parentElement;
let isMouseDown = false;

function moveSlider(e) {
    if (!isMouseDown) return;
    let rect = container.getBoundingClientRect(),
        x = e.clientX - rect.left;
    x = Math.min(Math.max(0, x), rect.width); // Limitar entre 0 y el ancho del contenedor
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

document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', () => {
        // Cerrar el menú colapsado después de hacer clic en un enlace
        document.querySelector('.navbar-toggler').click(); 
    });
});