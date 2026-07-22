# Timeless current status

Last updated: 2026-07-23

## Source of truth

- `build_site.js` restores the static site from the archived WordPress SQL and now also owns manually prepared editorial posts through `EDITORIAL_POSTS`.
- Generated root HTML, `sitemap.xml`, `robots.txt` and `_redirects` should be refreshed with `node build_site.js` after source changes.

## Current editorial release

- Added the Timeless-specific Quuu article `/preserve-family-photos-phone-backup`.
- H1: `Your Phone Has 20,000 Photos. Your Children May Inherit None of Them.`
- The topic covers family photo selection, independent backups, context, privacy and print rather than focusing narrowly on newborn photography.
- Dedicated assets live in `Assets/Images/Editorial/` and article-only styles live in `family-photo-archive.css`.
- The blog listing, BlogPosting schema and sitemap are generated from the editorial post definition.
- Quuu submission copy and QA status live in `QUUU-PROMOTE-FAMILY-PHOTO-ARCHIVE.md`.

## Release state

- Local implementation complete.
- Local checks passed: generated output is idempotent, the new article and blog listing pass `html-validate`, and browser checks found no console errors, failed images or horizontal overflow on desktop and mobile.
- Local Lighthouse: Performance 81, Accessibility 100, Best Practices 100, SEO 100, CLS 0.
- Production deployment verified on 2026-07-23 after commit `cd4c68f` reached `main`.
- The live article, blog listing, sitemap, stylesheet, WebP hero and JPEG social image all return HTTP 200.
- Live desktop and mobile browser checks passed with the expected canonical, Open Graph image, BlogPosting schema, no console errors, no failed resources and no horizontal overflow.
- Quuu Promote submission is still pending; use `QUUU-PROMOTE-FAMILY-PHOTO-ARCHIVE.md` for the prepared submission copy.

## Blog design refresh

- The blog index now uses a large featured story, image-led story cards and a responsive two-column archive.
- All five posts share a consistent journal masthead, category/date/read-time metadata, cover treatment, readable article width and related-story navigation.
- Existing post URLs, source content, canonical URLs and BlogPosting schema remain intact.
- Blog-only CSS lives in `blog.css`; post presentation metadata and generated markup remain owned by `build_site.js`.
- Local HTML validation passed for the index and all five posts. Desktop and mobile browser checks found no console errors, failed requests or horizontal overflow.
- Blog index Lighthouse: Performance 73, Accessibility 100, Best Practices 100, SEO 100, CLS 0.
