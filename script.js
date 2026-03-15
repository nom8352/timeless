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

    // Lightbox for Gallery
    const galleryLinks = document.querySelectorAll('a.fancy-gallery');
    if (galleryLinks.length > 0) {
        // Create lightbox elements
        const overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';
        overlay.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <span class="lightbox-nav lightbox-prev">&#8249;</span>
            <span class="lightbox-nav lightbox-next">&#8250;</span>
            <img src="" alt="Gallery Image" />
        `;
        document.body.appendChild(overlay);

        const lbImg = overlay.querySelector('img');
        const lbClose = overlay.querySelector('.lightbox-close');
        const lbPrev = overlay.querySelector('.lightbox-prev');
        const lbNext = overlay.querySelector('.lightbox-next');
        let currentIndex = 0;

        // Collect all full-size image URLs
        const images = Array.from(galleryLinks).map(link => link.getAttribute('href'));

        function openLightbox(index) {
            currentIndex = index;
            lbImg.src = images[currentIndex];
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        function showPrev() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            lbImg.src = images[currentIndex];
        }

        function showNext() {
            currentIndex = (currentIndex + 1) % images.length;
            lbImg.src = images[currentIndex];
        }

        // Click gallery image to open
        galleryLinks.forEach((link, i) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                openLightbox(i);
            });
        });

        // Close on X button or overlay background click
        lbClose.addEventListener('click', closeLightbox);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeLightbox();
        });

        // Prev / Next
        lbPrev.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
        lbNext.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!overlay.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        });
    }
});
