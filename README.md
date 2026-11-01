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

PART 3


A responsive, multi-page website for **K-Plumbing**, a Pretoria-based plumbing company offering leak repairs, blocked drains, geyser installation, bathroom and kitchen renovations, and 24/7 emergency call-outs.


---

 1. Purpose of the Website

K-Plumbing is a plumbing service covering Pretoria and surrounding areas. The website lets homeowners and small businesses:

- see what services the company offers,
- trust the business through its history, team and accreditations,
- view examples of completed work,
- request a free quote, and
- contact the Pretoria or Centurion branch quickly, including in an emergency.

Target audience: homeowners and small businesses in Pretoria who need repairs, installations or emergency call-outs.
Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero section, service highlights, testimonial slider and call-to-action |
| Services | `services.html` | Service list with a live search feature |
| About | `about.html` | History, mission, vision, team and accreditations |
| Gallery | `gallery.html` | Photo gallery with a lightbox viewer |
| Get a Quote | `quote.html` | Enquiry form with validation |
| Contact | `contact.html` | Branch details, interactive map and contact form |

 Features

 Interactive elements and dynamic content
- Mobile menu button on every page that opens and closes the navigation.
- Testimonial slider on the home page (previous/next buttons) that changes the quote without reloading.
- Live service search on the Services page that filters services as the visitor types and shows a result count.
- Gallery lightbox that enlarges photos, with next/previous/close controls and keyboard support.
- Branch map buttons on the Contact page that switch the embedded Google Map between Pretoria and Centurion.

Enquiry (quote) form
- Controls: text fields, email, phone, dropdown, radio buttons, text area and a checkbox.
- JavaScript validation with clear error messages next to each field, and errors that clear as the user corrects them.
- On success, a confirmation message is shown and the visitor's email app opens with the enquiry pre-filled (`mailto:`).

 Contact form
- Controls: name, email, optional phone, reason dropdown, message and a "send me a copy" checkbox.
- Validation and error messages for every field, and an on-screen confirmation message.
- Email is composed through the visitor's email app (`mailto:`).

 Accessibility
- Every form control has a visible `<label>`, and error messages use `role="alert"`.
- All images have descriptive alt text.
- Navigation marks the current page with `aria-current="page"`.

 SEO

- Every page has a unique, descriptive `<title>`.
- Every page has its own meta description and meta keywords relevant to that page.
- Image files have descriptive, hyphenated names (for example `leak-repair-pipe-wrench.jpg`) and descriptive alt text.
- Pages use semantic HTML (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`) and one `<h1>` each.


- HTML5
- CSS3 (custom properties, flexbox and grid, responsive media queries)
- JavaScript (vanilla, no libraries)
- Google Fonts (Archivo and Inter)
- Google Maps embed
- Git and GitHub for version control; GitHub Pages for hosting
- Visual Studio Code

 Project Structure

MY PROJECT ST10485825/
├── index.html
├── services.html
├── about.html
├── gallery.html
├── quote.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── image/
│   ├── leak-repair-pipe-wrench.jpg
│   ├── blocked-storm-drain-unblocking.jpg
│   ├── geyser-installation-inspection.webp
│   ├── bathroom-basin-pipework-renovation.webp
│   ├── emergency-callout-copper-pipes.webp
│   └── underground-pipe-installation-trench.webp
├── README.md
└── CHANGELOG.md
```


 Known Limitations

- Forms open the visitor's email app rather than sending directly, because the site has no backend. A form service such as Formspree could be added later.
- Some contact details (the Centurion phone number and branch email addresses) are placeholders.
 Changelog

CHANGELOG
Feedback from Part 2 
- Feedback: Part 2 did not have responsive media query code.
- Change made:I added responsive media queries in Part 3 so the layout and navigation adapt to phone, tablet and desktop screens.

 Added
- Responsive media queries so the site adapts to different screen sizes (missing in Part 2).
- Interactive mobile menu button on every page (previously only on the gallery page).
- Testimonial slider on the home page with previous/next buttons.
- Live search on the Services page that filters services as the user types and announces the result count.
- Gallery lightbox with next, previous and close controls and keyboard support.
- Interactive map buttons on the Contact page to switch between the Pretoria and Centurion branches.
- Enquiry form on the quote page with text, email, phone, dropdown, radio, text area and checkbox controls.
- Contact form with name, email, optional phone, reason dropdown, message and "send me a copy" checkbox.
- JavaScript validation with clear error messages and a success message on both forms.
Changed
- Renamed pages to lowercase with no spaces for hosting: `Get a Quote.html` to `quote.html`, `About.html` to `about.html`, `Contact.html` to `contact.html`, `Gallery.html` to `gallery.html`, `Services.html` to `services.html`.
- Renamed `js/JavaScript` to `js/main.js`.
- Renamed images to descriptive, SEO-friendly names (for example `B2-img2-1024x683.jpg` to `leak-repair-pipe-wrench.jpg`, `OIP (1).webp` to `geyser-installation-inspection.webp`).
- Gave every page a unique title, meta description and meta keywords (About, Services and Contact previously reused the wrong text).
- Rewrote image alt text so it describes what is in each photo.
- Updated the Pretoria branch phone number on the Contact page to match the footer (012 942 9537).
- Pointed all "Get a Quote" buttons to `quote.html` (they linked to a page that did not exist).

Fixed
- Broken file paths: backslashes, the `MY PROJECT ST10485825\` prefix and `CSS\` instead of `css/`, which stopped the stylesheet, script and images loading when hosted.
- Invalid HTML: `<hl>` heading typo, `<K-Plumbing>` logo tag, unclosed cards div, `<Main>` capitalisation, misspelled `testimonal` class, unclosed gallery tags and a missing `>` on `</html`.
- Stray `<option>` elements sitting outside the quote form.
- Contact form missing the IDs the JavaScript needs, so validation never ran.
- Navigation unavailable on small screens for pages without the menu button.
- Gallery now shows all six images in separate figures.
 Removed
- The unused `Get a Quote` and mixed-case page names.




 References


Google. 2026. *Google Fonts: Archivo and Inter*. Available at: https://fonts.google.com [Accessed 29 October 2026].

Google. 2026. *Google Maps*. Available at: https://www.google.com/maps [Accessed 29 October 2026].

K-Plumbing. 2026. *Emergency Plumber Pretoria and Johannesburg*. Available at: https://k-plumbing.co.za [Accessed 29 October 2026].

Pexels. 2026. *Free Stock Photos*. Available at: https://www.pexels.com [Accessed 29 October 2026].

Unsplash. 2026. *Free Images*. Available at: https://unsplash.com [Accessed 29 October 2026].

W3Schools. 2026. *HTML, CSS and JavaScript Tutorials*. Available at: https://www.w3schools.com [Accessed 29 October 2026].


