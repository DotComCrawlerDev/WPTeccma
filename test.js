window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var logo = document.getElementById('logo');
    var navLinks = document.getElementById('nav-links');
    var scrollTop = window.scrollY;

    if (scrollTop > 0) {
        header.classList.add('scrolled');
        navLinks.style.transition = 'right 0.5s cubic-bezier(0.4, 0, 0.2, 1)'; // Transición suave con cubic-bezier
        navLinks.style.right = '120px'; // Ajustar la posición del nav bar cuando se hace scroll
    } else {
        header.classList.remove('scrolled');
        navLinks.style.transition = 'none'; // Eliminar transición cuando el usuario está en la parte superior
        navLinks.style.right = '20px'; // Restaurar la posición original del nav bar
    }
});


// Espera a que el documento se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Espera 5 segundos antes de mostrar el recuadro de WhatsApp
    setTimeout(function() {
        var whatsappBurbuja = document.querySelector('.whatsapp-burbuja');
        whatsappBurbuja.style.opacity = '1'; // Cambia la opacidad para activar la transición
    }, 5000); // 5000 milisegundos = 5 segundos
});

window.addEventListener('load', function() {
    var headerHeight = document.querySelector('.header').offsetHeight;
    document.querySelector('.hero').style.marginTop = headerHeight + 'px';
});
