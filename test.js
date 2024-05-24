// Espera a que el documento se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Obtén la URL de la página actual
    var currentPage = window.location.href.split('/').pop();

    // Verifica si la página actual es Test.html
    if (currentPage !== 'Test.html') {
        // En todas las demás páginas, el header aparece en el segundo estado
        var header = document.getElementById('header');
        var navLinks = document.getElementById('nav-links');

        header.classList.add('scrolled');
        navLinks.style.transition = 'right 0.5s cubic-bezier(0.4, 0, 0.2, 1)'; // Transición suave con cubic-bezier
        navLinks.style.right = '120px'; // Ajustar la posición del nav bar
    }

    // Espera 5 segundos antes de mostrar el recuadro de WhatsApp
    setTimeout(function() {
        var whatsappBurbuja = document.querySelector('.whatsapp-burbuja');
        whatsappBurbuja.style.opacity = '1'; // Cambia la opacidad para activar la transición
    }, 5000); // 5000 milisegundos = 5 segundos
});

window.addEventListener('scroll', function() {
    // Obtén la URL de la página actual
    var currentPage = window.location.href.split('/').pop();

    // Verifica si la página actual es Test.html
    if (currentPage === 'Test.html') {
        var header = document.getElementById('header');
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


//Animacion de Contacto
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Aquí es donde enviarías el formulario y verificarías si fue exitoso o no.
    // Por ahora, solo simularé un envío exitoso.
    var success = Math.random() > 0.5;

    var statusElement = document.getElementById('status');
    statusElement.style.display = 'block';

    if (success) {
        statusElement.textContent = '¡Formulario enviado con éxito!';
        statusElement.style.animation = 'success 2s';
    } else {
        statusElement.textContent = 'Hubo un error al enviar el formulario.';
        statusElement.style.animation = 'error 2s';
    }

    // Oculta el elemento de estado después de la animación.
    setTimeout(function() {
        statusElement.style.display = 'none';
    }, 2000);
});


window.addEventListener('load', adjustMargin);
window.addEventListener('resize', adjustMargin);

function adjustMargin() {
    var headerHeight = document.querySelector('#header').offsetHeight;
    document.querySelector('#quienes-somos').style.marginTop = headerHeight + 'px';
}

/*Boton de WhatsApp*/
const svg = document.getElementById('Logo-extendido, LogoWsp');
        svg.onclick = (e) => {
            const specificColor = '#007bff';
            document.documentElement.style.setProperty('--dark-color', specificColor);
            svg.style.backgroundColor = specificColor;
        }
/*Boton de WhatsApp*/


