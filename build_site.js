const fs = require('fs');

const pagesFile = 'f:\\Antigravity\\timeless\\extracted_full_pages.json';
const pagesData = JSON.parse(fs.readFileSync(pagesFile, 'utf8'));

// The header and footer from the initial build, to keep navigation working beautifully
// but we wrap the content so the WordPress CSS applies correctly.
const headerHTML = `
    <header class="site-header">
        <div class="header-inner">
            <div class="logo">
                <a href="index.html">
                    <img src="Assets/Logos/logo-main-black-brisbane-photography.png" alt="Timeless Photography Brisbane">
                </a>
            </div>
            <nav class="main-nav">
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="about.html">ABOUT</a></li>
                    <li><a href="services.html">SERVICES</a></li>
                    <li><a href="gallery.html">GALLERY</a></li>
                    <li><a href="pricing.html">PRICING</a></li>
                    <li><a href="contact.html">CONTACT</a></li>
                </ul>
            </nav>
            <div class="mobile-menu-toggle">
                <span></span><span></span><span></span>
            </div>
        </div>
    </header>
`;

const footerHTML = `
    <footer class="site-footer">
        <div class="footer-inner">
            <div class="footer-logo">
                <img src="Assets/Logos/logo-main-black-brisbane-photography.png" alt="Timeless Photography Brisbane">
            </div>
            <div class="footer-social">
                <!-- Social Icons -->
            </div>
            <p class="copyright">&copy; 2026 Timeless Photography Brisbane. All rights reserved.</p>
        </div>
    </footer>
`;

function getTemplate(title, content) {
    return `<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <title>${title} - Timeless Photography Brisbane</title>
    
    <!-- Link Original Theme CSS per user instructions -->
    <link rel="stylesheet" href="public_html/wp-content/themes/photography/css/reset.css" type="text/css" media="all" />
    <link rel="stylesheet" href="public_html/wp-content/themes/photography/css/wordpress.css" type="text/css" media="all" />
    <link rel="stylesheet" href="public_html/wp-content/themes/photography/css/screen.css" type="text/css" media="all" />
    <link rel="stylesheet" href="public_html/wp-content/themes/photography/css/grid.css" type="text/css" media="all" />
    
    <!-- Link our custom style to handle header/footer -->
    <link rel="stylesheet" href="style.css" type="text/css" media="all" />
</head>
<body class="page-template-default page ${title.toLowerCase().replace(' ', '-')}">
    ${headerHTML}
    
    <div id="wrapper">
        <div id="page_content_wrapper">
            ${content}
        </div>
    </div>
    
    ${footerHTML}
    <script src="script.js"></script>
</body>
</html>`;
}

const pagesToBuild = {
    'Home': 'index.html',
    'About Us': 'about.html',
    'Gallery': 'gallery.html',
    'Pricing': 'pricing.html',
    'Contact Us': 'contact.html'
};

const servicePages = [
    'Baby Photography Brisbane',
    'Newborn Photography Brisbane',
    'Photography Brisbane',
    'Family Photography Brisbane',
    'Kids,Cake Smash Photography Brisbane',
    'Hand and Feet Sculptures'
];

let servicesContent = '';

for (const data of pagesData) {
    let content = data.content;
    
    content = content.replace(/https?:\/\/www\.timeless-photography\.com\.au\/wp-content\/uploads\//g, 'public_html/wp-content/uploads/');
    content = content.replace(/http:\/\/themes\.themegoods\.com\/photography\/demo1\/wp-content\/uploads\//g, 'public_html/wp-content/uploads/');
    content = content.replace(/Sydney/g, 'Brisbane');
    content = content.replace(/sydney/g, 'brisbane');
    content = content.replace(/href="[^"]*newborn-photography[^"]*"/g, 'href="https://sweetlifephotography.com.au/"');
    content = content.replace(/href="[^"]*newborn[^"]*"/gi, 'href="https://sweetlifephotography.com.au/"');
        
    if (pagesToBuild[data.title]) {
        const fileName = pagesToBuild[data.title];
        fs.writeFileSync('f:\\Antigravity\\timeless\\' + fileName, getTemplate(data.title, content), 'utf8');
        console.log('Built ' + fileName + ' from SQL (' + data.title + ')');
    } else if (servicePages.includes(data.title)) {
        servicesContent += content + '<hr/>';
    }
}

// Write the combined Services page
fs.writeFileSync('f:\\Antigravity\\timeless\\services.html', getTemplate('Services', servicesContent), 'utf8');
console.log('Built services.html from combined SQL Service pages');
