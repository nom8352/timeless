document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('nav-open');
            mobileToggle.classList.toggle('active');
        });
    }

    // Services dropdown toggle for mobile (touch devices)
    const serviceItems = document.querySelectorAll('.menu-item-has-children > a');
    serviceItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                item.parentElement.classList.toggle('sub-open');
            }
        });
    });
});
