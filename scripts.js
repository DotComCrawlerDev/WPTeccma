document.addEventListener("DOMContentLoaded", function() {
    var navDropdown = document.querySelector('.nav-dropdown');
    var dropdownContent = document.querySelector('.dropdown-content');

    navDropdown.addEventListener('mouseover', function() {
        dropdownContent.style.display = 'block';
    });

    navDropdown.addEventListener('mouseout', function() {
        dropdownContent.style.display = 'none';
    });
});
