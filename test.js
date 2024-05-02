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
