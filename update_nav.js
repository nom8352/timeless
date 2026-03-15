const fs = require('fs');
const files = ['pricing.html', 'contact.html', 'thankyou.html'];

const newNav = `            <nav class="main-nav">
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="about.html">ABOUT</a></li>
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
                    <li><a href="contact.html">CONTACT</a></li>
                </ul>
            </nav>`;

files.forEach(file => {
    let content = fs.readFileSync('f:\\Antigravity\\timeless\\' + file, 'utf8');
    content = content.replace(/<nav class="main-nav">[\s\S]*?<\/nav>/, newNav);
    fs.writeFileSync('f:\\Antigravity\\timeless\\' + file, content, 'utf8');
    console.log('Updated nav in ' + file);
});
