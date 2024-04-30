window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollTop = window.scrollY;

    if (scrollTop > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
