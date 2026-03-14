document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navUl = document.querySelector('nav ul');

    if (mobileBtn && navUl) {
        mobileBtn.addEventListener('click', () => {
            navUl.classList.toggle('active');
            mobileBtn.textContent = navUl.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Contact Form Handling (if present on the page)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation simulation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                // Show success message
                const formResult = document.getElementById('formResult');
                formResult.innerHTML = `<div style="color: green; margin-top: 15px; font-weight: bold;">Thank you, ${name}! Your message has been sent successfully. We will get back to you soon.</div>`;
                contactForm.reset();
            } else {
                alert('Please fill out all required fields.');
            }
        });
    }
});
