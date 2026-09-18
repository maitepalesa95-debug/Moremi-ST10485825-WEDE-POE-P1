# Moremi-ST10485825-WEDE-POE-P1


## Pages
- `index.html` — Home
- `services.html` — Our Services
- `about.html` — About Us
- `gallery.html` — Before & After Gallery
- `enquiry.html` — Get a Quote (validated form)
- `contact.html` — Contact Us (validated form)

## Structure
```
css/style.css     external stylesheet (typography, layout, colour, media queries)
js/validate.js    client-side form validation
images/           site images
```

## Changelog

### Part 2 — Feedback from Part 1 implemented
- Fixed broken markup in `index.html`: replaced `<hl>` with `<h1>`, closed the empty `<img>` tag, removed a stray unmatched `</div>`, corrected `<Main>` to lowercase `<main>`.
- Standardised all filenames and navigation links to lowercase (`services.html`, `about.html`, `gallery.html`, `contact.html`) so links resolve correctly across every page.
- Renamed `Get a Quote.html` to `enquiry.html` per the brief, and gave it a distinct purpose (service enquiry / quote request) separate from the general `contact.html` message form.
- Created the previously missing `css/style.css` external stylesheet and linked it from every page.
- added a readme file 

### Part 2 — New work
- Added typography scale (headings, body, line-height, letter-spacing) using `Archivo` for headings and `Inter` for body text.
- Built layout using Flexbox (header, forms) and CSS Grid (card layouts, gallery, two-column sections), mobile-first.
- Added decorative styling: colour palette (ink navy / copper / cream), rounded corners, borders, hero background blocks.
- Added pseudo-class styling for links and buttons: `:link`, `:visited`, `:hover`, `:active`, plus `:focus` states for form fields.
- Added responsive breakpoints at 600px (tablet) and 1024px (desktop): navigation switches from stacked to horizontal, card/gallery grids go from 1 → 2 → 3 columns.
- Added HTML5 + JavaScript form validation (`js/validate.js`) to `enquiry.html` and `contact.html`, with inline error messages and a success message on valid submission.

## Outstanding items
- Only 2 real photos existed in the Part 1 upload; `images/about-history.jpg` and `images/gallery-1.jpg` are placeholders copied across so links don't break. Replace all remaining `images/*` references (icons, team photos, gallery 2–6, map) with real assets before final submission.

## Screenshots
_Add screenshots here showing desktop, tablet, and mobile views of the site (see Week 7 slides — Section 3.4 Test and Iterate)._

- Desktop (≥1024px): `screenshots/desktop.png`
- Tablet (~768px): `screenshots/tablet.png`
- Mobile (~375px): `screenshots/mobile.png`

## References
- W3Schools. n.d. *CSS RWD Intro*. Available at: https://www.w3schools.com/css/css_rwd_intro.asp
- W3Schools. n.d. *Bootstrap*. Available at: http://www.w3schools.com/bootstrap/default.asp
- Wroblewski, L. 2010. *Mobile First*.
- Rosebank International WEDE5020 Week 5, 6 & 7 lecture slides (CSS fundamentals, decoration/typography, responsive design).
