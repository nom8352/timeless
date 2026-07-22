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
const SWEETLIFE_URLS = {
    newborn: 'https://sweetlifephotography.com.au/',
    handFeet: 'https://sweetlifephotography.com.au/baby-hand-feet-sculptures-north-lakes/',
    cakeSmash: 'https://sweetlifephotography.com.au/cake-smash-first-birthday-photography-brisbane/'
};

const EDITORIAL_POSTS = [
    {
        ID: 'editorial-family-photo-archive',
        post_type: 'post',
        post_status: 'publish',
        post_name: 'preserve-family-photos-phone-backup',
        post_title: 'Your Phone Has 20,000 Photos. Your Children May Inherit None of Them.',
        post_date: '2026-07-23 08:00:00',
        post_modified: '2026-07-23 08:00:00',
        post_excerpt: 'Your phone may hold thousands of family photos, but that is not an archive. Use this practical plan to select, back up, label, share and print them.',
        editorial: true,
        post_content: `
<figure class="archive-hero">
    <img src="/Assets/Images/Editorial/family-photo-archive-hero.webp" srcset="/Assets/Images/Editorial/family-photo-archive-hero-960.webp 960w, /Assets/Images/Editorial/family-photo-archive-hero.webp 1728w" sizes="(max-width: 760px) calc(100vw - 32px), 1100px" width="1728" height="910" fetchpriority="high" alt="Surprised mother holding a blank phone and a printed family photograph while her daughter looks through a photo album">
    <figcaption>A full camera roll feels permanent until the phone, account or person who understands it is no longer available.</figcaption>
</figure>

<div class="archive-intro">
    <p class="archive-lede">A camera roll is a collection. A family archive is a collection that someone else can find, open, understand and care about.</p>
    <p>Most families now make more photographs than any previous generation. We record birthdays, school mornings, pets, holidays, grandparents and ordinary afternoons without thinking twice. Yet many of those images live inside one phone, one account or one stream so crowded that nobody can find the picture that matters.</p>
    <p>The risk is not only a broken device. Passwords disappear. Storage plans lapse. File formats and platforms change. Thousands of near-duplicates bury the few photographs that explain who your family was. A child can inherit every file and still inherit no usable story.</p>
    <aside class="archive-callout" aria-label="Article summary"><strong>The short answer</strong><span>Choose the photographs that carry the story, keep verified copies in separate places, add names and context, share them deliberately and make a small number visible in print.</span></aside>
</div>

<section id="archive-not-camera-roll">
    <p class="archive-kicker">The uncomfortable distinction</p>
    <h2>More photos do not automatically create more memory</h2>
    <p>Imagine handing someone an unsorted box containing 20,000 prints. Half are duplicates. Many are screenshots. Some are blurry. Nobody is named and the dates are unreliable. The important photographs are in there, but the work needed to understand them is so large that the box may stay closed.</p>
    <p>A phone library can become the digital version of that box. Search tools help, but they do not know why one ordinary kitchen photograph matters more than twenty perfect sunset pictures. They cannot explain a family nickname, identify a house or say that this was the last photograph with a grandparent.</p>
    <div class="archive-reality-grid" role="group" aria-label="Difference between a camera roll and a family archive">
        <div><span>Camera roll</span><strong>Everything captured</strong><p>Fast, automatic and useful for daily life, but crowded with duplicates, screenshots and forgotten context.</p></div>
        <div><span>Family archive</span><strong>What carries the story</strong><p>Selected, copied, labelled and understandable to someone who was not there when the image was made.</p></div>
    </div>
</section>

<section id="find-everything">
    <p class="archive-kicker">Step 1</p>
    <h2>Find every place the photographs are hiding</h2>
    <p>Start with an inventory, not a clean-up. List every phone, tablet, computer, memory card, external drive, cloud account and private message thread that may contain family photographs. Include an old device even if it has not been switched on for years.</p>
    <p>Do not reorganise while searching. The first goal is to understand the number of locations and which ones are vulnerable. Mark any device that is damaged, any account that only one person can access and any storage service that is no longer being paid for.</p>
    <p>The US National Archives' guide to <a href="https://www.archives.gov/files/preservation/formats/pdf/preserving-your-digital-memories.pdf" target="_blank" rel="noopener noreferrer">preserving personal digital photographs</a> recommends identifying all locations first, including cameras, computers, removable media and photographs stored on the web.</p>
</section>

<section id="choose-keepers">
    <p class="archive-kicker">Step 2</p>
    <h2>Choose a family 100, not a perfect 100</h2>
    <p>Trying to organise every image is the point where most photo projects stop. Make the first decision smaller: choose up to 100 photographs that tell the story of one year.</p>
    <p>Do not select only the technically best images. Include people, places, relationships and ordinary details. A useful annual set might contain:</p>
    <ul class="archive-list">
        <li>everyone who was central to family life that year;</li>
        <li>the home, neighbourhood, school or places you returned to;</li>
        <li>one image from each important event rather than every version;</li>
        <li>ordinary routines that would otherwise be forgotten;</li>
        <li>at least a few photographs that include the person usually behind the camera.</li>
    </ul>
    <p>If 100 feels impossible, choose 12: one photograph for each month. A small completed archive is more valuable than a perfect system that never begins.</p>
</section>

<section id="keep-originals">
    <p class="archive-kicker">Step 3</p>
    <h2>Keep the best available original</h2>
    <p>A photograph downloaded from social media or copied from a message may be smaller than the file made by the camera. Keep the highest-quality original you can find, especially for the photographs chosen for your annual set.</p>
    <p>Do not repeatedly edit and overwrite the only copy. Keep the original file, then create edited or cropped versions beside it. Use simple folders that another person can understand, such as <strong>2026 / Family 100 / Originals</strong> and <strong>2026 / Family 100 / Edited</strong>.</p>
    <p>Professional photographs should also stay with the download and usage information supplied by the photographer. If you are unsure which file is intended for printing, ask before resizing or sending screenshots to a printer.</p>
</section>

<section id="verify-copies">
    <p class="archive-kicker">Step 4</p>
    <h2>Make copies that cannot fail together</h2>
    <p>Sync is convenient, but it is not the same as an independent backup. If a deletion, account problem or corrupted library is synchronised everywhere, the problem can travel with it.</p>
    <p>A practical starting rule is 3-2-1: keep three copies, on two kinds of storage, with one copy in another location. For a family archive, that could mean the working library on a computer, a separate external drive and an encrypted cloud copy or drive stored with a trusted relative.</p>
    <p>The Library of Congress discusses this <a href="https://blogs.loc.gov/thesignal/2013/07/what-people-are-asking-about-personal-digital-archiving-part-2/" target="_blank" rel="noopener noreferrer">3-2-1 approach to personal digital archiving</a> and stresses that storage devices eventually become obsolete. A backup is only real when you can open it.</p>
    <div class="archive-flow" role="group" aria-label="Three copy family photo backup plan">
        <div><span>01</span><strong>Working copy</strong><p>The library you organise and use.</p></div>
        <div><span>02</span><strong>Local backup</strong><p>A separate drive, disconnected after backup.</p></div>
        <div><span>03</span><strong>Off-site copy</strong><p>Encrypted cloud storage or another secure location.</p></div>
    </div>
    <p>Set one annual date to open a sample from every copy. Replace failing drives and move important files when a service or format is becoming difficult to use.</p>
</section>

<section id="add-context">
    <p class="archive-kicker">Step 5</p>
    <h2>Add the information a stranger would need</h2>
    <p>Future family members may recognise a face but not know the name, relationship or place. A little context turns an attractive photograph into a record.</p>
    <p>For your selected photographs, record full names, approximate date, place and one sentence about why the moment mattered. This can live in photo metadata, a spreadsheet, a text file inside the folder or captions in a printed album. The method matters less than keeping the description with the photographs.</p>
    <blockquote class="archive-quote">"Christmas at Grandma's" is better than nothing. "Christmas lunch at Mei's home in Brisbane, 2026, the year all four cousins met" is a story someone else can use.</blockquote>
</section>

<section id="share-carefully">
    <p class="archive-kicker">Step 6</p>
    <h2>Share the archive without making every image public</h2>
    <p>Social media is useful for conversation, but it should not be the only home of a family photograph. Platforms compress images, accounts can become inaccessible and a public audience is not the same as a family archive.</p>
    <p>Choose who needs access and how it should be shared. A private family folder, an encrypted drive or a printed album can give relatives access without publishing every image.</p>
    <p>When children are identifiable, privacy becomes part of preservation. The Australian eSafety Commissioner advises families to consider consent, locations, uniforms, routines and who can see a child's image. Review its current <a href="https://www.esafety.gov.au/parents/issues-and-advice/privacy-child" target="_blank" rel="noopener noreferrer">child privacy and photo-sharing guidance</a>, and involve children in decisions as they become old enough to express a preference.</p>
</section>

<section id="make-visible">
    <p class="archive-kicker">Step 7</p>
    <h2>Make the photographs visible before they become history</h2>
    <p>Preservation is not only about preventing loss. It is about making a memory available while the people in it can still enjoy and explain it.</p>
    <p>Print the annual 100 as a simple book, or choose a smaller set for a box and one photograph for the wall. Handle important prints by the edges, keep them away from damp and direct sunlight, and use suitable albums or enclosures. The National Archives of Australia notes that photographic records need active care and that <a href="https://www.naa.gov.au/about-us/preserving-collection" target="_blank" rel="noopener noreferrer">digitisation can preserve images and improve access</a>.</p>
    <p>Look for the people missing from your archive. In many families, one parent makes nearly every photograph and appears in very few. Ask another person to take the picture, use a timer or plan a periodic <a href="/family-photography">family photography session</a> where nobody has to remain behind the camera. The aim is not a year made entirely of professional portraits. It is a record in which every important person exists.</p>
</section>

<section id="thirty-minute-rescue">
    <p class="archive-kicker">Start today</p>
    <h2>The 30-minute family photo rescue</h2>
    <div class="archive-checklist">
        <label><input type="checkbox"> Write down every place that holds family photographs.</label>
        <label><input type="checkbox"> Create one folder named with the current year and "Family 100".</label>
        <label><input type="checkbox"> Add the first 12 photographs without trying to perfect the set.</label>
        <label><input type="checkbox"> Copy that folder to one separate device or secure account.</label>
        <label><input type="checkbox"> Add names, date and place to the three photographs that matter most.</label>
        <label><input type="checkbox"> Choose one photograph to print this week.</label>
    </div>
    <p>Repeat the process for older years only after the current year works. A simple habit that continues is more protective than a complicated archive built once.</p>
</section>

<section id="final-rule">
    <p class="archive-kicker">The final rule</p>
    <h2>Leave decisions, not just files</h2>
    <p>Your children do not need every accidental burst, receipt screenshot and near-identical pose. They need the photographs that show who was there, how people related to each other and what everyday life felt like.</p>
    <p>Choose the story. Keep copies that cannot fail together. Add the names. Respect privacy. Put a few memories where the family can see them now.</p>
    <p>If you need ideas for making stronger everyday pictures, read <a href="/how-to-capture-the-special-moments-of-the-child">how to capture special moments with your child</a>. To see how a complete family portrait can include the people normally behind the phone, browse the <a href="/gallery">Timeless Photography gallery</a>.</p>
    <div class="archive-cta"><span>Brisbane families</span><h3>Make one photograph everyone is in</h3><p>Timeless creates relaxed family portraits designed to become part of the archive, not another forgotten camera-roll file.</p><a class="button" href="/contact">Plan a family session</a></div>
</section>

<section class="archive-sources" aria-labelledby="archive-sources-title">
    <p class="archive-kicker">Official references</p>
    <h2 id="archive-sources-title">Sources and further reading</h2>
    <ul>
        <li><a href="https://www.archives.gov/files/preservation/formats/pdf/preserving-your-digital-memories.pdf" target="_blank" rel="noopener noreferrer">Preserving Your Digital Memories - US National Archives</a></li>
        <li><a href="https://blogs.loc.gov/thesignal/2013/07/what-people-are-asking-about-personal-digital-archiving-part-2/" target="_blank" rel="noopener noreferrer">Personal Digital Archiving Questions - Library of Congress</a></li>
        <li><a href="https://www.esafety.gov.au/parents/issues-and-advice/privacy-child" target="_blank" rel="noopener noreferrer">Privacy and Your Child - eSafety Commissioner</a></li>
        <li><a href="https://www.naa.gov.au/about-us/preserving-collection" target="_blank" rel="noopener noreferrer">Preserving the Collection - National Archives of Australia</a></li>
    </ul>
</section>`
    }
];

const POST_PRESENTATION = {
    'preserve-family-photos-phone-backup': {
        title: 'Your Phone Has 20,000 Photos. Your Children May Inherit None of Them.',
        category: 'Family stories',
        readTime: '8 min read',
        deck: 'A practical rescue plan for turning an overflowing camera roll into a family archive people can actually find, understand and keep.',
        image: '/Assets/Images/Editorial/family-photo-archive-hero-960.webp',
        imageAlt: 'Mother holding a phone and a printed family photograph while her daughter looks through an album',
        width: 960,
        height: 506,
        focalClass: 'focal-center'
    },
    'how-to-select-the-best-newborn-photography-brisbane-professional': {
        title: 'How to Select the Best Newborn Photographer in Brisbane',
        category: 'Newborn guide',
        readTime: '4 min read',
        deck: 'The practical questions that help families compare newborn photographers with more confidence than price alone.',
        image: '/Assets/Photography/images/2020/02/new-born-baby-sleeping.jpg',
        imageAlt: 'Sleeping newborn wearing a delicate crown during a Brisbane studio portrait session',
        width: 1920,
        height: 1280,
        focalClass: 'focal-newborn'
    },
    'newborn-photography-brisbane-get-access-with-the-newborn-baby-memories': {
        title: 'Newborn Photography: Keeping the Memories That Change Fast',
        category: 'Newborn stories',
        readTime: '4 min read',
        deck: 'Why the earliest family photographs become more valuable as the small details of newborn life begin to change.',
        image: '/Assets/Photography/images/2020/02/sibilings-baby.jpg',
        imageAlt: 'Older sister leaning close to her sleeping newborn sibling in a bright studio portrait',
        width: 1920,
        height: 1280,
        focalClass: 'focal-center'
    },
    'how-to-capture-the-special-moments-of-the-child': {
        title: 'How to Capture the Special Moments of Childhood',
        category: 'Family photography',
        readTime: '3 min read',
        deck: 'Simple ways to notice expression, connection and the fleeting details that make a family photograph feel personal.',
        image: '/Assets/Photography/images/2018/08/family-outdoor-happy-happiness-160994.jpeg',
        imageAlt: 'Family lying together on grass and making playful expressions for the camera',
        width: 1125,
        height: 750,
        focalClass: 'focal-family',
        removeFirstBodyImage: true
    },
    'useful-tips-for-portrait-photography': {
        title: 'Useful Tips for More Expressive Portrait Photography',
        category: 'Photography guide',
        readTime: '4 min read',
        deck: 'A straightforward introduction to light, focus and visual choices that make portraits feel more intentional.',
        image: '/Assets/Photography/images/2018/05/pexels-photo-759960.jpeg',
        imageAlt: 'Photographer holding a camera lens toward a sunlit landscape',
        width: 1280,
        height: 853,
        focalClass: 'focal-center',
        removeFirstBodyImage: true
    }
};

const pageReferrals = {
    Home: {
        eyebrow: 'Local studio reference',
        heading: 'Explore another specialist Brisbane studio',
        copy: 'Families comparing styles can also view Sweetlife Photography for dedicated newborn portrait sessions.',
        links: [
            { label: 'newborn photography brisbane', href: SWEETLIFE_URLS.newborn }
        ]
    },
    'Newborn Photography Brisbane': {
        eyebrow: 'Newborn studio reference',
        heading: 'Comparing newborn portrait styles?',
        copy: 'Explore Sweetlife Photography for another specialist newborn studio experience in Brisbane\'s northern suburbs.',
        links: [
            { label: 'newborn photoshoot brisbane', href: SWEETLIFE_URLS.newborn }
        ]
    }
};

const contextualCitationsByPage = {
    'Newborn Photography Brisbane': [
        {
            after: 'In other words, we create an amazing and skillful portfolio.',
            html: '<p class="editorial-citation"><strong>Session safety:</strong> Photo poses should never override established infant sleep guidance. Review <a href="https://www.pregnancybirthbaby.org.au/babies/sleep-and-settling/safe-sleep-for-babies" target="_blank" rel="noopener noreferrer">safe sleep guidance from Pregnancy, Birth and Baby</a> and the <a href="https://rednose.org.au/safe-sleep-and-safer-pregnancy/overview/" target="_blank" rel="noopener noreferrer">Red Nose Safe Sleep hub</a> when planning a newborn session.</p>'
        },
        {
            after: 'So the photographers who have the patience at the time of the shoot are real photographers.',
            html: '<p class="editorial-citation"><strong>Props and privacy:</strong> Any sleep product or prop should align with <a href="https://www.productsafety.gov.au/consumers/keep-baby-safe/settle-baby-to-sleep-safely/products-that-are-safe-for-baby-to-sleep-in-guide" target="_blank" rel="noopener noreferrer">ACCC guidance on products that are safe for baby to sleep in</a>. Before sharing a child\'s images online, families can also review the <a href="https://www.esafety.gov.au/parents/issues-and-advice/privacy-child" target="_blank" rel="noopener noreferrer">eSafety Commissioner\'s child privacy guidance</a>.</p>'
        }
    ],
    'Baby Photography Brisbane': [
        {
            after: 'You should talk to your photographer and fix another best day for the photo shoot and enjoy the new member that has come to your family.',
            html: '<p class="editorial-citation"><strong>Planning around your baby:</strong> Feeding, sleeping and health needs can change quickly after birth. Pregnancy, Birth and Baby explains <a href="https://www.pregnancybirthbaby.org.au/labour-and-birth/after-birth/your-baby-in-the-first-few-days" target="_blank" rel="noopener noreferrer">what families can expect in a baby\'s first few days</a>.</p>'
        },
        {
            after: 'Normally the photographers prefer to set up the room with the most natural light.',
            html: '<p class="editorial-citation"><strong>Comfort and light:</strong> Choose layers that keep your baby comfortable, using the <a href="https://www.pregnancybirthbaby.org.au/babies/daily-care/dressing-a-newborn" target="_blank" rel="noopener noreferrer">Pregnancy, Birth and Baby guide to dressing a newborn</a>. For outdoor sessions or direct sunlight, follow <a href="https://www.cancer.org.au/about-us/policy-and-advocacy/prevention/uv-radiation/related-resources/sun-protection-babies" target="_blank" rel="noopener noreferrer">Cancer Council Australia\'s sun protection advice for babies</a>.</p>'
        }
    ],
    'Family Photography Brisbane': [
        {
            after: 'And also they will definitely cooperate for the picture and that will make the great family portrait.',
            html: '<p class="editorial-citation"><strong>Sharing family images:</strong> Before posting identifiable photos of children, review the <a href="https://www.esafety.gov.au/key-topics/online-tools-and-features/photo-and-video-sharing" target="_blank" rel="noopener noreferrer">eSafety Commissioner\'s photo and video sharing guidance</a> and agree on family privacy preferences.</p>'
        },
        {
            after: 'So hire the best and professional photographer and also if you shoot then remember this point for the great pictures or else hire us as we have the best and professional photographer.',
            html: '<p class="editorial-citation"><strong>Image rights:</strong> Photography usage depends on the agreement between the photographer and client. The <a href="https://www.copyright.com.au/about-copyright/ownership/" target="_blank" rel="noopener noreferrer">Copyright Agency explains copyright ownership in Australia</a>.</p>'
        }
    ],
    'Photography Brisbane': [
        {
            after: 'This is the way that you can have photography from expert photographers.',
            html: '<p class="editorial-citation"><strong>Professional practice:</strong> Families researching photographers can also consult the <a href="https://www.a-p-s.org.au/" target="_blank" rel="noopener noreferrer">Australian Photographic Society\'s photography resources</a> for broader Australian industry information.</p>'
        }
    ]
};

const contextualReferralsByPage = {
    'Hand and Feet Sculptures': [
        {
            after: 'It is important when undergoing this opportunity; you take time in recognizing exactly how this process is implemented and what is all needed of you and child.',
            html: `<p class="editorial-partner-link">Families comparing framed keepsake options can also view Sweetlife Photography's <a href="${SWEETLIFE_URLS.handFeet}">baby hand and feet sculptures in North Lakes</a>.</p>`
        }
    ],
    'Kids,Cake Smash Photography Brisbane': [
        {
            after: 'In addition to this, the session is greeted when the kid is happily playing with the cake.',
            html: `<p class="editorial-partner-link">For another local studio option focused on first birthdays, see Sweetlife Photography's <a href="${SWEETLIFE_URLS.cakeSmash}">cake smash and first birthday photography in Brisbane</a>.</p>`
        }
    ]
};

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
        description: 'Read practical newborn, baby, family and portrait photography tips from Timeless Photography Brisbane.',
        accessibleViewport: true,
        minimalCss: true,
        preloadImage: '/Assets/Images/Editorial/family-photo-archive-hero-960.webp',
        stylesheets: ['/blog.css?v=1.0']
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

    content = content.replace(/https?:\/\/themes\.themegoods2\.com\/newton\/contact-1\/?/gi, '/contact');

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

function injectAfterParagraphs(content, title, items, blockType) {
    for (const item of items) {
        const markerIndex = content.indexOf(item.after);
        if (markerIndex === -1) throw new Error(`Could not place ${blockType} on ${title}: ${item.after}`);
        const paragraphEnd = content.indexOf('</p>', markerIndex);
        if (paragraphEnd === -1) throw new Error(`Could not find ${blockType} paragraph end on ${title}: ${item.after}`);
        const insertionPoint = paragraphEnd + 4;
        content = `${content.slice(0, insertionPoint)}\n${item.html}${content.slice(insertionPoint)}`;
    }
    return content;
}

function injectContextualCitations(content, title) {
    return injectAfterParagraphs(content, title, contextualCitationsByPage[title] || [], 'contextual citation');
}

function injectContextualReferrals(content, title) {
    return injectAfterParagraphs(content, title, contextualReferralsByPage[title] || [], 'contextual referral');
}

function appendEditorialSections(content, title) {
    const referral = pageReferrals[title];
    const referralHtml = referral ? `
<section class="editorial-link-section editorial-referral" aria-labelledby="editorial-referral-${title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}">
    <p class="editorial-eyebrow">${referral.eyebrow}</p>
    <h2 id="editorial-referral-${title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}">${referral.heading}</h2>
    <p>${referral.copy}</p>
    <div class="editorial-referral-links">${referral.links.map((link) => `<a href="${link.href}">${link.label}</a>`).join('')}</div>
</section>` : '';
    return `${content}${referralHtml}`;
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
            headline: postPresentation(post).title,
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
    const socialTitle = seo.ogTitle || seo.title;
    const socialDescription = seo.ogDescription || seo.description;
    const viewport = seo.accessibleViewport ? 'width=device-width, initial-scale=1' : 'width=device-width, initial-scale=1, maximum-scale=1';
    const semanticHeading = /<h1\b/i.test(content) ? '' : `<h1 class="visually-hidden">${escapeHtml(seo.heading || title)}</h1>`;
    return `<!DOCTYPE html>
<html lang="en-AU">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="${viewport}">
    <title>${escapeHtml(seo.title)}</title>
    <meta name="description" content="${escapeHtml(seo.description)}">
    <meta name="robots" content="${robots}">
    <link rel="canonical" href="${url}">
    <meta property="og:locale" content="en_AU">
    <meta property="og:type" content="${pageType}">
    <meta property="og:site_name" content="${SITE_NAME}">
    <meta property="og:title" content="${escapeHtml(socialTitle)}">
    <meta property="og:description" content="${escapeHtml(socialDescription)}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${socialImage}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(socialTitle)}">
    <meta name="twitter:description" content="${escapeHtml(socialDescription)}">
    <meta name="twitter:image" content="${socialImage}">
    <script type="application/ld+json">${schemaGraph(title, seo, post)}</script>
${seo.preloadImage ? `    <link rel="preload" href="${seo.preloadImage}" as="image" type="image/webp">\n` : ''}    <link rel="icon" type="image/png" href="Assets/Logos/favicon.png">
${seo.minimalCss ? '' : `    <link rel="stylesheet" href="Assets/Photography/css/reset.css" type="text/css" media="all">\n    <link rel="stylesheet" href="Assets/Photography/css/wordpress.css" type="text/css" media="all">\n    <link rel="stylesheet" href="Assets/Photography/css/screen.css" type="text/css" media="all">\n    <link rel="stylesheet" href="Assets/Photography/css/grid.css" type="text/css" media="all">\n`}    <link rel="stylesheet" href="style.css?v=3.0" type="text/css" media="all">
${(seo.stylesheets || (seo.stylesheet ? [seo.stylesheet] : [])).map((stylesheet) => `    <link rel="stylesheet" href="${stylesheet}" type="text/css" media="all">\n`).join('')}</head>
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

function postPresentation(post) {
    const fallback = stripHtml(post.post_excerpt || post.post_content).slice(0, 180);
    return POST_PRESENTATION[post.post_name] || {
        title: post.post_title,
        category: 'Photography journal',
        readTime: '4 min read',
        deck: fallback,
        image: '/Assets/Images/Portfolio/Family/portfolio-family-01-brisbane-photography.jpg',
        imageAlt: 'Timeless Photography family portrait',
        width: 1024,
        height: 1280,
        focalClass: 'focal-center'
    };
}

function formatPostDate(dateValue) {
    const [year, month, day] = dateValue.slice(0, 10).split('-').map(Number);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${day} ${monthNames[month - 1]} ${year}`;
}

function postMeta(post) {
    const presentation = postPresentation(post);
    return `<div class="article-meta"><span>${presentation.category}</span><time datetime="${post.post_date.slice(0, 10)}">${formatPostDate(post.post_date)}</time><span>${presentation.readTime}</span></div>`;
}

function postCard(post) {
    const presentation = postPresentation(post);
    const postPath = `/${post.post_name}`;
    return `<article class="journal-card">
        <a class="journal-card-media" href="${postPath}" aria-label="Read ${escapeHtml(presentation.title)}"><img class="${presentation.focalClass}" src="${presentation.image}" width="${presentation.width}" height="${presentation.height}" loading="lazy" decoding="async" alt="${escapeHtml(presentation.imageAlt)}"></a>
        <div class="journal-card-body">${postMeta(post)}<h2><a href="${postPath}">${escapeHtml(presentation.title)}</a></h2><p>${escapeHtml(presentation.deck)}</p><a class="journal-read-link" href="${postPath}">Read story <span aria-hidden="true">&rarr;</span></a></div>
    </article>`;
}

function blogListing(posts) {
    const [featured, ...remaining] = posts;
    const presentation = postPresentation(featured);
    const postPath = `/${featured.post_name}`;
    const cards = remaining.map(postCard).join('\n');
    return `<div class="blog-index">
        <header class="blog-index-intro"><p class="journal-eyebrow">The Timeless journal</p><h1>Stories worth keeping.</h1><p>Photography, family life and the small details that become the story.</p></header>
        <article class="journal-feature">
            <a class="journal-feature-media" href="${postPath}" aria-label="Read ${escapeHtml(presentation.title)}"><img class="${presentation.focalClass}" src="${presentation.image}" width="${presentation.width}" height="${presentation.height}" fetchpriority="high" alt="${escapeHtml(presentation.imageAlt)}"></a>
            <div class="journal-feature-content">${postMeta(featured)}<h2><a href="${postPath}">${escapeHtml(presentation.title)}</a></h2><p>${escapeHtml(presentation.deck)}</p><a class="journal-read-link" href="${postPath}">Read featured story <span aria-hidden="true">&rarr;</span></a></div>
        </article>
        <section class="journal-latest" aria-labelledby="journal-latest-title"><div class="journal-section-heading"><p class="journal-eyebrow">From the archive</p><h2 id="journal-latest-title">More from Timeless</h2></div><div class="journal-grid">${cards}</div></section>
    </div>`;
}

function postPage(post, posts) {
    const presentation = postPresentation(post);
    let content = post.editorial
        ? post.post_content
        : localizeContent(post.post_content, post.post_title).replace(/(<img\b[^>]*?)\s*\/>/gi, '$1>');
    if (presentation.removeFirstBodyImage) content = content.replace(/<img\b[^>]*>/i, '');
    const className = post.editorial ? 'original-post editorial-post archive-guide' : 'original-post';
    const cover = post.editorial ? '' : `<figure class="article-cover"><img class="${presentation.focalClass}" src="${presentation.image}" width="${presentation.width}" height="${presentation.height}" fetchpriority="high" alt="${escapeHtml(presentation.imageAlt)}"></figure>`;
    const articleContent = post.editorial ? content : `<div class="article-body">${content}</div>`;
    const related = posts.filter((candidate) => candidate.post_name !== post.post_name).slice(0, 3).map(postCard).join('\n');
    return `<article class="${className}"><header class="article-masthead"><a class="article-back" href="/blog">Timeless journal</a>${postMeta(post)}<h1>${escapeHtml(presentation.title)}</h1><p class="article-deck">${escapeHtml(presentation.deck)}</p></header>${cover}${articleContent}</article><aside class="article-related" aria-labelledby="article-related-title"><div class="journal-section-heading"><p class="journal-eyebrow">Keep reading</p><h2 id="article-related-title">More stories</h2></div><div class="journal-grid">${related}</div></aside>`;
}

function postSeo(post) {
    const seoTitles = {
        'how-to-capture-the-special-moments-of-the-child': 'Capturing Special Moments With Your Child | Timeless',
        'how-to-select-the-best-newborn-photography-brisbane-professional': 'How to Choose a Newborn Photographer in Brisbane',
        'newborn-photography-brisbane-get-access-with-the-newborn-baby-memories': 'Newborn Photography Brisbane: Preserve Baby Memories',
        'useful-tips-for-portrait-photography': 'Portrait Photography Tips | Timeless Brisbane',
        'preserve-family-photos-phone-backup': 'How to Preserve Family Photos Before They Disappear | Timeless'
    };
    const excerpt = stripHtml(post.post_excerpt || post.post_content).slice(0, 155);
    const editorialSeo = post.post_name === 'preserve-family-photos-phone-backup' ? {
        description: 'Your phone may hold thousands of family photos, but that is not an archive. Use this practical plan to select, back up, label, share and print them.',
        ogTitle: 'Your Phone Has 20,000 Photos. Your Children May Inherit None of Them.',
        ogDescription: 'A practical family photo rescue plan: choose what matters, keep copies that cannot fail together, add the names and make memories visible.',
        image: `${SITE_URL}/Assets/Images/Editorial/family-photo-archive-og.jpg`,
        preloadImage: '/Assets/Images/Editorial/family-photo-archive-hero-960.webp',
        accessibleViewport: true,
        minimalCss: true,
        stylesheets: ['/family-photo-archive.css?v=2.0', '/blog.css?v=1.0']
    } : {};
    const presentation = postPresentation(post);
    return {
        path: `/${post.post_name}`,
        title: seoTitles[post.post_name] || `${post.post_title} | Timeless`,
        description: presentation.deck || excerpt || `Photography advice from ${SITE_NAME}.`,
        ogTitle: presentation.title,
        ogDescription: presentation.deck,
        image: `${SITE_URL}${presentation.image}`,
        accessibleViewport: true,
        minimalCss: true,
        stylesheets: ['/blog.css?v=1.0'],
        ...editorialSeo
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
        '/home/ / 301',
        '/about-us /about 301',
        '/about-us/ /about 301',
        '/gallery-timeless-photography /gallery 301',
        '/gallery-timeless-photography/ /gallery 301',
        '/photography-brisbane/baby-photography-brisbane /baby-photography 301',
        '/photography-brisbane/baby-photography-brisbane/ /baby-photography 301',
        '/photography-brisbane/newborn-photography-brisbane /newborn-maternity 301',
        '/photography-brisbane/newborn-photography-brisbane/ /newborn-maternity 301',
        '/photography-brisbane/family-photography-brisbane /family-photography 301',
        '/photography-brisbane/family-photography-brisbane/ /family-photography 301',
        '/photography-brisbane/hand-and-feet-sculptures /hand-and-feet-sculptures 301',
        '/photography-brisbane/hand-and-feet-sculptures/ /hand-and-feet-sculptures 301',
        '/photography-brisbane/kidscake-smash-photography-brisbane /kids-cake-smash-photography 301',
        '/photography-brisbane/kidscake-smash-photography-brisbane/ /kids-cake-smash-photography 301',
        '/baby-photography-brisbane /baby-photography 301',
        '/baby-photography-brisbane/ /baby-photography 301',
        '/newborn-photography-brisbane /newborn-maternity 301',
        '/newborn-photography-brisbane/ /newborn-maternity 301',
        '/family-photography-brisbane /family-photography 301',
        '/family-photography-brisbane/ /family-photography 301',
        '/kidscake-smash-photography-brisbane /kids-cake-smash-photography 301',
        '/kidscake-smash-photography-brisbane/ /kids-cake-smash-photography 301',
        '/blog-timeless-photography /blog 301',
        '/blog-timeless-photography/ /blog 301',
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
    const blogPosts = [
        ...posts.filter((post) => post.post_type === 'post' && post.post_status === 'publish'),
        ...EDITORIAL_POSTS
    ]
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

        content = injectContextualCitations(content, page.post_title);
        content = injectContextualReferrals(content, page.post_title);
        content = appendEditorialSections(content, page.post_title);

        const bodyClass = page.post_title === 'Blog' ? 'page-blog' : `page-${page.post_name}`;
        fs.writeFileSync(path.join(ROOT, filename), pageTemplate(page.post_title, content, bodyClass, pageSeo[page.post_title]), 'utf8');
        console.log(`Built ${filename} from WordPress page ${page.ID} (${page.post_title})`);
    }

    for (const post of blogPosts) {
        const filename = `${post.post_name}.html`;
        fs.writeFileSync(path.join(ROOT, filename), pageTemplate(post.post_title, postPage(post, blogPosts), 'single-post', postSeo(post), post), 'utf8');
        console.log(`Built ${filename} from WordPress post ${post.ID}`);
    }

    writeSeoFiles(pages, blogPosts);
    writeUtilityPages();

    console.log(`Restored ${pages.length} published pages and ${blogPosts.length} published posts.`);
}

build();
