const fs = require('fs');
const files = ['pricing.html', 'contact.html', 'thankyou.html'];

const newHeader = `    <header class="site-header">
        <div class="header-top-bar">
            <a href="https://www.instagram.com/timeless_photography_brisbane/" target="_blank" class="social-icon-link" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <div class="mobile-menu-toggle" id="mobileMenuToggle">
                <span></span><span></span><span></span>
            </div>
        </div>
        <div class="header-center">
            <div class="logo">
                <a href="index.html">
                    <img src="Assets/Logos/logo-main-black-brisbane-photography.png" alt="Timeless Photography Brisbane">
                </a>
            </div>
        </div>
        <hr class="header-divider" />
        <nav class="main-nav" id="mainNav">
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="about.html">ABOUT US</a></li>
                <li><a href="gallery.html">GALLERY</a></li>
                <li class="menu-item menu-item-has-children"><a href="javascript:void(0);">SERVICES</a>
                    <ul class="sub-menu">
                        <li><a href="newborn-maternity.html">NEWBORN & MATERNITY</a></li>
                        <li><a href="family-photography.html">FAMILY PHOTOGRAPHY</a></li>
                        <li><a href="baby-photography.html">BABY PHOTOGRAPHY</a></li>
                        <li><a href="hand-and-feet-sculptures.html">HAND AND FEET SCULPTURES</a></li>
                        <li><a href="kids-cake-smash-photography.html">KIDS,CAKE SMASH PHOTOGRAPHY</a></li>
                    </ul>
                </li>
                <li><a href="pricing.html">PRICING</a></li>
                <li><a href="contact.html">CONTACT US</a></li>
            </ul>
        </nav>
    </header>`;

files.forEach(file => {
    let content = fs.readFileSync('f:\\Antigravity\\timeless\\' + file, 'utf8');
    content = content.replace(/<header class="site-header">[\s\S]*?<\/header>/, newHeader);
    fs.writeFileSync('f:\\Antigravity\\timeless\\' + file, content, 'utf8');
    console.log('Updated header in ' + file);
});
