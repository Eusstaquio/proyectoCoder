document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('nav__toggle');
    const navMenu = document.getElementById('nav__ul');

    toggleButton.addEventListener('click', function () {
        navMenu.classList.toggle('nav__menu--active');
    });
});
