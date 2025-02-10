document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.header__menu');
    const mobileNav = document.getElementById('mobile-nav');

    const body = document.body;

    menuButton.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });
});