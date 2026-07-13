const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SQL_FILE = path.join(ROOT, 'public_html', 'sql', 'petrinat_wp266.sql');
const SITE_NAME = 'Timeless Photography Brisbane';
const SITE_URL = 'https://timeless-photography.com.au';
const INSTAGRAM_URL = 'https://www.instagram.com/timeless_photography_brisbane/';
const BUSINESS_EMAIL = 'timeless.info01@gmail.com';
const BUSINESS_PHONE_DISPLAY = '0434 920 114';
const BUSINESS_PHONE_SCHEMA = '+61434920114';
const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/Assets/Photography/images/2019/08/Amelia_0006_Web.jpg`;

const pageSeo = {
    'Home': {
        path: '/',
        title: 'Newborn & Family Photography Brisbane | Timeless',
        description: 'Timeless Photography creates newborn, maternity, baby, family and cake smash portraits for families across Brisbane, Queensland.'
    },
    'About Us': {
        path: '/about',
        title: 'About Timeless Photography Brisbane',
        description: 'Meet Timeless Photography Brisbane and discover our approach to relaxed newborn, baby, maternity and family portrait sessions.'
    },
    'Gallery': {
        path: '/gallery',
        title: 'Brisbane Newborn & Family Photography Gallery',
        description: 'View newborn, maternity, baby, family and cake smash photography created by Timeless Photography Brisbane.'
    },
    'Photography Brisbane': {
        path: '/photography-brisbane',
        title: 'Professional Photography Brisbane | Timeless',
        description: 'Explore professional newborn, maternity, baby, family, cake smash and keepsake photography services in Brisbane.'
    },
    'Baby Photography Brisbane': {
        path: '/baby-photography',
        title: 'Baby Photography Brisbane | Timeless Photography',
        description: 'Capture your baby\'s milestones with a relaxed, professionally styled baby photography session in Brisbane.'
    },
    'Newborn Photography Brisbane': {
        path: '/newborn-maternity',
        title: 'Newborn & Maternity Photography Brisbane | Timeless',
        description: 'Timeless newborn and maternity photography sessions in Brisbane, planned around your family and your baby\'s comfort.'
    },
    'Family Photography Brisbane': {
        path: '/family-photography',
        title: 'Family Photography Brisbane | Timeless Photography',
        description: 'Natural family photography in Brisbane that preserves genuine connection, personality and the moments you share together.'
    },
    'Hand and Feet Sculptures': {
        path: '/hand-and-feet-sculptures',
        title: 'Baby Hand & Feet Sculptures Brisbane | Timeless',
        description: 'Preserve the tiny details of your baby with handcrafted hand and feet sculpture keepsakes in Brisbane.'
    },
    'Kids,Cake Smash Photography Brisbane': {
        path: '/kids-cake-smash-photography',
        title: 'Cake Smash Photography Brisbane | Timeless',
        description: 'Celebrate a first birthday with a fun, professionally photographed cake smash session in Brisbane.'
    },
    'Pricing': {
        path: '/pricing',
        title: 'Photography Packages & Pricing Brisbane | Timeless',
        description: 'View Brisbane newborn, baby, family and cake smash photography packages and pricing from Timeless Photography.'
    },
    'Contact Us': {
        path: '/contact',
        title: 'Contact Timeless Photography Brisbane',
        description: 'Contact Timeless Photography to enquire about newborn, maternity, baby, family or cake smash photography in Brisbane.'
    },
    'Blog': {
        path: '/blog',
        title: 'Photography Tips & Stories | Timeless Brisbane',
        description: 'Read practical newborn, baby, family and portrait photography tips from Timeless Photography Brisbane.'
    },
    'Privacy Policy': {
        path: '/privacy-policy',
        title: 'Privacy Policy | Timeless Photography Brisbane',
        description: 'Privacy information for Timeless Photography Brisbane.',
        robots: 'noindex, follow'
    },
    'Terms and Conditions': {
        path: '/terms-and-conditions',
        title: 'Terms and Conditions | Timeless Photography Brisbane',
        description: 'Terms and conditions for Timeless Photography Brisbane.',
        robots: 'noindex, follow'
    },
    'Shop': {
        path: '/shop',
        title: 'Shop | Timeless Photography Brisbane',
        description: 'Timeless Photography Brisbane shop.',
        robots: 'noindex, follow'
    },
    'Cart': {
        path: '/cart',
        title: 'Cart | Timeless Photography Brisbane',
        description: 'Timeless Photography Brisbane shopping cart.',
        robots: 'noindex, follow'
    },
    'Checkout': {
        path: '/checkout',
        title: 'Checkout | Timeless Photography Brisbane',
        description: 'Timeless Photography Brisbane checkout.',
        robots: 'noindex, follow'
    },
    'My Account': {
        path: '/my-account',
        title: 'My Account | Timeless Photography Brisbane',
        description: 'Timeless Photography Brisbane account page.',
        robots: 'noindex, follow'
    }
};

const pageFiles = {
    'Home': 'index.html',
    'About Us': 'about.html',
    'Gallery': 'gallery.html',
    'Photography Brisbane': 'photography-brisbane.html',
    'Baby Photography Brisbane': 'baby-photography.html',
    'Newborn Photography Brisbane': 'newborn-maternity.html',
    'Family Photography Brisbane': 'family-photography.html',
    'Hand and Feet Sculptures': 'hand-and-feet-sculptures.html',
    'Kids,Cake Smash Photography Brisbane': 'kids-cake-smash-photography.html',
    'Pricing': 'pricing.html',
    'Contact Us': 'contact.html',
    'Blog': 'blog.html',
    'Privacy Policy': 'privacy-policy.html',
    'Terms and Conditions': 'terms-and-conditions.html',
    'Shop': 'shop.html',
    'Cart': 'cart.html',
    'Checkout': 'checkout.html',
    'My Account': 'my-account.html'
};

const originalUrls = {
    '': '/',
    'about-us': '/about',
    'gallery-timeless-photography': '/gallery',
    'photography-brisbane': '/photography-brisbane',
    'photography-brisbane/baby-photography-brisbane': '/baby-photography',
    'photography-brisbane/newborn-photography-brisbane': '/newborn-maternity',
    'photography-brisbane/family-photography-brisbane': '/family-photography',
    'photography-brisbane/hand-and-feet-sculptures': '/hand-and-feet-sculptures',
    'photography-brisbane/kidscake-smash-photography-brisbane': '/kids-cake-smash-photography',
    'baby-photography-brisbane': '/baby-photography',
    'newborn-photography-brisbane': '/newborn-maternity',
    'family-photography-brisbane': '/family-photography',
    'hand-and-feet-sculptures': '/hand-and-feet-sculptures',
    'kidscake-smash-photography-brisbane': '/kids-cake-smash-photography',
    'pricing': '/pricing',
    'contact': '/contact',
    'blog-timeless-photography': '/blog',
    'privacy-policy': '/privacy-policy',
    'terms-and-conditions': '/terms-and-conditions',
    'shop': '/shop',
    'cart': '/cart',
    'checkout': '/checkout',
    'my-account': '/my-account'
};

function parseInsert(sql, tableName) {
    const marker = new RegExp('INSERT INTO `' + tableName + '` \\((.*?)\\) VALUES ', 's');
    const match = sql.match(marker);
    if (!match) throw new Error(`Could not find INSERT statement for ${tableName}`);

    const columns = match[1].split(',').map((column) => column.trim().replaceAll('`', ''));
    const start = match.index + match[0].length;
    const end = sql.indexOf(';\n', start);
    const values = sql.slice(start, end);
    const rows = [];
    let index = 0;

    while (index < values.length) {
        while (index < values.length && /[\s,]/.test(values[index])) index += 1;
        if (index >= values.length) break;
        if (values[index] !== '(') throw new Error(`Unexpected SQL at offset ${index}`);
        index += 1;

        const fields = [];
        let buffer = '';
        let quoted = false;

        while (index < values.length) {
            const character = values[index];
            if (quoted) {
                if (character === '\\' && index + 1 < values.length) {
                    index += 1;
                    const escaped = values[index];
                    buffer += { n: '\n', r: '\r', t: '\t', 0: '\0', b: '\b', Z: '\x1a' }[escaped] ?? escaped;
                } else if (character === "'") {
                    if (values[index + 1] === "'") {
                        buffer += "'";
                        index += 1;
                    } else {
                        quoted = false;
                    }
                } else {
                    buffer += character;
                }
            } else if (character === "'") {
                quoted = true;
            } else if (character === ',') {
                fields.push(buffer.trim());
                buffer = '';
            } else if (character === ')') {
                fields.push(buffer.trim());
                index += 1;
                break;
            } else {
                buffer += character;
            }
            index += 1;
        }

        if (fields.length !== columns.length) {
            throw new Error(`Expected ${columns.length} fields in ${tableName}, found ${fields.length}`);
        }
        rows.push(Object.fromEntries(columns.map((column, fieldIndex) => [column, fields[fieldIndex]])));
    }

    return rows;
}

function localizeUrl(url) {
    if (!url) return url;
    const cleanUrl = url.replace(/^https?:/, '');
    const uploadsPrefix = '//www.timeless-photography.com.au/wp-content/uploads/';
    const demoPrefix = '//themes.themegoods.com/photography/demo1/wp-content/uploads/';
    if (cleanUrl.startsWith(uploadsPrefix)) return `Assets/Photography/images/${cleanUrl.slice(uploadsPrefix.length)}`;
    if (cleanUrl.startsWith(demoPrefix)) return `Assets/Photography/images/${cleanUrl.slice(demoPrefix.length)}`;

    const siteMatch = cleanUrl.match(/^\/\/www\.timeless-photography\.com\.au\/?(.*)$/i);
    if (!siteMatch) return url;
    const slug = siteMatch[1].replace(/[?#].*$/, '').replace(/^\/+|\/+$/g, '');
    return originalUrls[slug] || url;
}

function localizeContent(source, title) {
    let content = source;

    content = content.replace(
        /((?:src|href|data-image|data-lazyload|data-thumb|poster)=["'])([^"']+)(["'])/gi,
        (whole, prefix, url, suffix) => `${prefix}${localizeUrl(url)}${suffix}`
    );
    content = content.replace(
        /url\((["']?)(https?:)?\/\/www\.timeless-photography\.com\.au\/wp-content\/uploads\/([^)'"\s]+)\1\)/gi,
        'url($1Assets/Photography/images/$3$1)'
    );

    for (const [slug, file] of Object.entries(originalUrls)) {
        const escaped = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const pathPattern = slug ? `${escaped}\\/?` : '';
        content = content.replace(
            new RegExp(`https?:\\/\\/www\\.timeless-photography\\.com\\.au\\/${pathPattern}(?=["'#?])`, 'gi'),
            file
        );
    }

    // WordPress injected these scripts during page rendering. The static fallback
    // below displays the same slide content without requiring the old plugin runtime.
    content = content.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
    content = content.replace(/(<rs-module\b[^>]*style=["'][^"']*)display\s*:\s*none\s*;?/gi, '$1display:block;');

    content = content.replace(
        /<div([^>]*class=["'][^"']*\bparallax\b[^"']*["'][^>]*)data-image=["']([^"']+)["']([^>]*)>/gi,
        (whole, before, image, after) => {
            const localized = localizeUrl(image);
            const attrs = `${before}${after}`;
            if (/style=["']/i.test(attrs)) {
                return `<div${attrs.replace(/style=(["'])/, `style=$1background-image:url('${localized}');background-size:cover;background-position:center;`)}>`;
            }
            return `<div${attrs} style="background-image:url('${localized}');background-size:cover;background-position:center;">`;
        }
    );

    if (title === 'Contact Us') {
        content = content
            .replace(
                /<p>732\/21 Second Street, Manchester,<br\s*\/?>\s*King Street,?Kingston United Kingdom<\/p>\s*<p>\(65\)323-678-567<br\s*\/?>\s*\(65\)323-678-568<br\s*\/?>\s*<a href="mailto:info@photographytheme\.com">info@photographytheme\.com<\/a><\/p>/gi,
                `<p>Brisbane area, QLD, Australia</p><p><a href="tel:${BUSINESS_PHONE_SCHEMA}">${BUSINESS_PHONE_DISPLAY}</a><br /><a href="mailto:${BUSINESS_EMAIL}">${BUSINESS_EMAIL}</a></p>`
            );
        content = content.replace(
            /method=["']post["']\s+action=["']\/wp-admin\/admin-ajax\.php["']/i,
            `method="POST" action="https://formsubmit.co/${BUSINESS_EMAIL}"`
        );
        content = content.replace(
            /(<form\b[^>]*action=["']https:\/\/formsubmit\.co\/timeless\.info01@gmail\.com["'][^>]*>)/i,
            `$1<input type="hidden" name="_subject" value="Timeless Photography - New Contact Form Message"><input type="hidden" name="_captcha" value="false"><input type="hidden" name="_next" value="${SITE_URL}/thankyou"><input type="text" name="_honey" class="form-honeypot" tabindex="-1" autocomplete="off">`
        );
    }

    return content
        .split('\n')
        .map((line) => line.replaceAll('\t', '    ').trimEnd())
        .join('\n')
        .trim();
}

const headerHtml = `
    <header class="site-header">
        <div class="header-top-bar">
            <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener" class="social-icon-link" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <button class="mobile-menu-toggle" id="mobileMenuToggle" type="button" aria-label="Open menu" aria-controls="mainNav" aria-expanded="false">
                <span></span><span></span><span></span>
            </button>
        </div>
        <div class="header-center">
            <div class="logo">
                <a href="/"><img src="Assets/Photography/images/2020/02/LogoBlack.png" alt="Timeless Photography Brisbane"></a>
            </div>
        </div>
        <hr class="header-divider">
        <nav class="main-nav" id="mainNav" aria-label="Main navigation">
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/about">ABOUT US</a></li>
                <li><a href="/gallery">GALLERY</a></li>
                <li class="menu-item menu-item-has-children"><a href="/photography-brisbane">SERVICES</a>
                    <ul class="sub-menu">
                        <li><a href="/newborn-maternity">NEWBORN &amp; MATERNITY</a></li>
                        <li><a href="/family-photography">FAMILY PHOTOGRAPHY</a></li>
                        <li><a href="/baby-photography">BABY PHOTOGRAPHY</a></li>
                        <li><a href="/hand-and-feet-sculptures">HAND AND FEET SCULPTURES</a></li>
                        <li><a href="/kids-cake-smash-photography">KIDS, CAKE SMASH PHOTOGRAPHY</a></li>
                    </ul>
                </li>
                <li><a href="/pricing">PRICING</a></li>
                <li><a href="/contact">CONTACT US</a></li>
                <li><a href="/blog">BLOG</a></li>
            </ul>
        </nav>
    </header>`;

const footerHtml = `
    <footer class="site-footer">
        <div class="footer-inner">
            <a class="footer-instagram" href="${INSTAGRAM_URL}" target="_blank" rel="noopener" aria-label="Instagram">Instagram</a>
            <p class="copyright">&copy; Timeless Photography Brisbane. All rights reserved.</p>
        </div>
    </footer>`;

function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;');
}

function canonicalUrl(urlPath) {
    return urlPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${urlPath}`;
}

function schemaGraph(title, seo, post = null) {
    const url = canonicalUrl(seo.path);
    const graph = [
        {
            '@type': 'ProfessionalService',
            '@id': `${SITE_URL}/#business`,
            name: SITE_NAME,
            url: `${SITE_URL}/`,
            logo: `${SITE_URL}/Assets/Photography/images/2020/02/LogoBlack.png`,
            image: DEFAULT_SOCIAL_IMAGE,
            telephone: BUSINESS_PHONE_SCHEMA,
            email: BUSINESS_EMAIL,
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Brisbane',
                addressRegion: 'QLD',
                addressCountry: 'AU'
            },
            areaServed: {
                '@type': 'City',
                name: 'Brisbane'
            },
            sameAs: [INSTAGRAM_URL]
        },
        {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: `${SITE_URL}/`,
            name: SITE_NAME,
            publisher: { '@id': `${SITE_URL}/#business` },
            inLanguage: 'en-AU'
        },
        {
            '@type': 'WebPage',
            '@id': `${url}#webpage`,
            url,
            name: seo.title,
            description: seo.description,
            isPartOf: { '@id': `${SITE_URL}/#website` },
            about: { '@id': `${SITE_URL}/#business` },
            inLanguage: 'en-AU'
        }
    ];

    if (post) {
        graph.push({
            '@type': 'BlogPosting',
            '@id': `${url}#article`,
            headline: post.post_title,
            description: seo.description,
            datePublished: post.post_date.replace(' ', 'T') + '+10:00',
            dateModified: post.post_modified.replace(' ', 'T') + '+10:00',
            mainEntityOfPage: { '@id': `${url}#webpage` },
            author: { '@id': `${SITE_URL}/#business` },
            publisher: { '@id': `${SITE_URL}/#business` },
            image: seo.image || DEFAULT_SOCIAL_IMAGE,
            inLanguage: 'en-AU'
        });
    }

    return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replaceAll('<', '\\u003c');
}

function pageTemplate(title, content, bodyClass = '', seo = pageSeo[title], post = null) {
    if (!seo) throw new Error(`Missing SEO configuration for ${title}`);
    const url = canonicalUrl(seo.path);
    const socialImage = seo.image || DEFAULT_SOCIAL_IMAGE;
    const robots = seo.robots || 'index, follow, max-image-preview:large';
    const pageType = post ? 'article' : 'website';
    const semanticHeading = /<h1\b/i.test(content) ? '' : `<h1 class="visually-hidden">${escapeHtml(seo.heading || title)}</h1>`;
    return `<!DOCTYPE html>
<html lang="en-AU">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>${escapeHtml(seo.title)}</title>
    <meta name="description" content="${escapeHtml(seo.description)}">
    <meta name="robots" content="${robots}">
    <link rel="canonical" href="${url}">
    <meta property="og:locale" content="en_AU">
    <meta property="og:type" content="${pageType}">
    <meta property="og:site_name" content="${SITE_NAME}">
    <meta property="og:title" content="${escapeHtml(seo.title)}">
    <meta property="og:description" content="${escapeHtml(seo.description)}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${socialImage}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(seo.title)}">
    <meta name="twitter:description" content="${escapeHtml(seo.description)}">
    <meta name="twitter:image" content="${socialImage}">
    <script type="application/ld+json">${schemaGraph(title, seo, post)}</script>
    <link rel="icon" type="image/png" href="Assets/Logos/favicon.png">
    <link rel="stylesheet" href="Assets/Photography/css/reset.css" type="text/css" media="all">
    <link rel="stylesheet" href="Assets/Photography/css/wordpress.css" type="text/css" media="all">
    <link rel="stylesheet" href="Assets/Photography/css/screen.css" type="text/css" media="all">
    <link rel="stylesheet" href="Assets/Photography/css/grid.css" type="text/css" media="all">
    <link rel="stylesheet" href="style.css?v=3.0" type="text/css" media="all">
</head>
<body class="page-template-default page ${bodyClass}">
${headerHtml}
    <main id="wrapper">
        <div id="page_content_wrapper" class="wp-original-content">
            ${semanticHeading}${content}
        </div>
    </main>
${footerHtml}
    <script src="script.js"></script>
</body>
</html>`;
}

function emptyPage(title) {
    return `<section class="original-page-title"><h1>${title}</h1></section>`;
}

function dynamicPage(title) {
    const content = {
        Cart: '<p>Your cart is currently empty.</p><p><a class="button" href="/shop">Return to shop</a></p>',
        Checkout: '<p>Checkout is not available while your cart is empty.</p><p><a class="button" href="/shop">Return to shop</a></p>',
        'My Account': '<p>Account access requires the original WordPress and WooCommerce server.</p>'
    }[title] || '';
    return `<section class="original-page-title"><h1>${title}</h1>${content}</section>`;
}

function stripHtml(value) {
    return value.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&[^;]+;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function blogListing(posts) {
    const items = posts.map((post) => {
        const postPath = `/${post.post_name}`;
        const excerpt = stripHtml(post.post_content).slice(0, 220);
        return `<article class="blog-list-item"><p class="blog-date">${post.post_date.slice(0, 10)}</p><h2><a href="${postPath}">${post.post_title}</a></h2><p>${excerpt}${excerpt.length === 220 ? '&hellip;' : ''}</p><a class="button ghost" href="${postPath}">Read More</a></article>`;
    }).join('\n');
    return `<section class="original-page-title"><h1>Blog</h1></section><div class="blog-list">${items}</div>`;
}

function postPage(post) {
    const content = localizeContent(post.post_content, post.post_title);
    return `<article class="original-post"><header><p class="blog-date">${post.post_date.slice(0, 10)}</p><h1>${post.post_title}</h1></header>${content}</article>`;
}

function postSeo(post) {
    const seoTitles = {
        'how-to-capture-the-special-moments-of-the-child': 'Capturing Special Moments With Your Child | Timeless',
        'how-to-select-the-best-newborn-photography-brisbane-professional': 'How to Choose a Newborn Photographer in Brisbane',
        'newborn-photography-brisbane-get-access-with-the-newborn-baby-memories': 'Newborn Photography Brisbane: Preserve Baby Memories',
        'useful-tips-for-portrait-photography': 'Portrait Photography Tips | Timeless Brisbane'
    };
    const excerpt = stripHtml(post.post_excerpt || post.post_content).slice(0, 155);
    return {
        path: `/${post.post_name}`,
        title: seoTitles[post.post_name] || `${post.post_title} | Timeless`,
        description: excerpt || `Photography advice from ${SITE_NAME}.`
    };
}

function writeSeoFiles(pages, blogPosts) {
    const indexablePages = pages
        .map((page) => ({ page, seo: pageSeo[page.post_title] }))
        .filter(({ seo }) => seo && !seo.robots?.startsWith('noindex'));
    const urls = [
        ...indexablePages.map(({ page, seo }) => ({
            loc: canonicalUrl(seo.path),
            lastmod: page.post_modified.slice(0, 10)
        })),
        ...blogPosts.map((post) => ({
            loc: canonicalUrl(`/${post.post_name}`),
            lastmod: post.post_modified.slice(0, 10)
        }))
    ];
    const sitemapEntries = urls.map(({ loc, lastmod }) => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`).join('\n');
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;
    fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap, 'utf8');

    const robots = `User-agent: *\nAllow: /\nDisallow: /cart\nDisallow: /checkout\nDisallow: /my-account\nSitemap: ${SITE_URL}/sitemap.xml\n`;
    fs.writeFileSync(path.join(ROOT, 'robots.txt'), robots, 'utf8');

    const redirects = [
        '/home / 301',
        '/about-us /about 301',
        '/gallery-timeless-photography /gallery 301',
        '/photography-brisbane/baby-photography-brisbane /baby-photography 301',
        '/photography-brisbane/newborn-photography-brisbane /newborn-maternity 301',
        '/photography-brisbane/family-photography-brisbane /family-photography 301',
        '/photography-brisbane/hand-and-feet-sculptures /hand-and-feet-sculptures 301',
        '/photography-brisbane/kidscake-smash-photography-brisbane /kids-cake-smash-photography 301',
        '/baby-photography-brisbane /baby-photography 301',
        '/newborn-photography-brisbane /newborn-maternity 301',
        '/family-photography-brisbane /family-photography 301',
        '/kidscake-smash-photography-brisbane /kids-cake-smash-photography 301',
        '/blog-timeless-photography /blog 301',
        '/sitemap_index.xml /sitemap.xml 301',
        '/wp-sitemap.xml /sitemap.xml 301',
        '/page-sitemap.xml /sitemap.xml 301'
    ];
    fs.writeFileSync(path.join(ROOT, '_redirects'), `${redirects.join('\n')}\n`, 'utf8');
}

function writeUtilityPages() {
    const notFoundSeo = {
        path: '/404',
        title: 'Page Not Found | Timeless Photography Brisbane',
        description: 'The requested page could not be found.',
        robots: 'noindex, follow'
    };
    const thankYouSeo = {
        path: '/thankyou',
        title: 'Thank You | Timeless Photography Brisbane',
        description: 'Thank you for contacting Timeless Photography Brisbane.',
        robots: 'noindex, follow'
    };
    const notFoundContent = '<section class="original-page-title"><h1>Page Not Found</h1><p>The page you requested could not be found.</p><p><a class="button" href="/">Return Home</a></p></section>';
    const thankYouContent = '<section class="original-page-title"><h1>Thank You</h1><p>Your message has been sent. We will be in touch soon.</p><p><a class="button" href="/">Return Home</a></p></section>';
    fs.writeFileSync(path.join(ROOT, '404.html'), pageTemplate('Page Not Found', notFoundContent, 'error404', notFoundSeo), 'utf8');
    fs.writeFileSync(path.join(ROOT, 'thankyou.html'), pageTemplate('Thank You', thankYouContent, 'page-thankyou', thankYouSeo), 'utf8');
}

function build() {
    const sql = fs.readFileSync(SQL_FILE, 'utf8');
    const posts = parseInsert(sql, 'wpdt_posts');
    const pages = posts.filter((post) => post.post_type === 'page' && post.post_status === 'publish');
    const blogPosts = posts
        .filter((post) => post.post_type === 'post' && post.post_status === 'publish')
        .sort((a, b) => b.post_date.localeCompare(a.post_date));

    for (const page of pages) {
        const filename = pageFiles[page.post_title];
        if (!filename) continue;

        let content;
        if (page.post_title === 'Blog') {
            content = blogListing(blogPosts);
        } else if (['Cart', 'Checkout', 'My Account'].includes(page.post_title)) {
            content = dynamicPage(page.post_title);
        } else if (!page.post_content.trim()) {
            content = emptyPage(page.post_title);
        } else {
            content = localizeContent(page.post_content, page.post_title);
        }

        const bodyClass = `page-${page.post_name}`;
        fs.writeFileSync(path.join(ROOT, filename), pageTemplate(page.post_title, content, bodyClass, pageSeo[page.post_title]), 'utf8');
        console.log(`Built ${filename} from WordPress page ${page.ID} (${page.post_title})`);
    }

    for (const post of blogPosts) {
        const filename = `${post.post_name}.html`;
        fs.writeFileSync(path.join(ROOT, filename), pageTemplate(post.post_title, postPage(post), 'single-post', postSeo(post), post), 'utf8');
        console.log(`Built ${filename} from WordPress post ${post.ID}`);
    }

    writeSeoFiles(pages, blogPosts);
    writeUtilityPages();

    console.log(`Restored ${pages.length} published pages and ${blogPosts.length} published posts.`);
}

build();
