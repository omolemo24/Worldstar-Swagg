# Worldstar Swagg — WEDE5020 Part 3

## Project overview
Worldstar Swagg is a streetwear brand concept website presenting apparel mock-ups, brand artwork, project updates and visitor contact options.

## Website structure
- `index.html` — homepage
- `about-us.html` — brand story and illustrative Johannesburg map
- `products.html` — product concepts, search, sorting and FAQ accordion
- `gallery.html` — image gallery with lightbox
- `news.html` — project updates
- `contact.html` — general message form with validation and AJAX email submission
- `enquiry.html` — product, collaboration, sponsorship and volunteer enquiry form
- `css/style.css` — shared responsive styles
- `js/site.js` — navigation, dynamic product filtering, accordion, lightbox, form logic and map
- `images/` — original supplied mock-ups and video
- `robots.txt` and `sitemap.xml` — search crawler files

## Part 3 functionality
- Mobile navigation uses JavaScript and updates `aria-expanded`.
- Products can be searched and sorted without reloading the page.
- FAQ answers expand/collapse using an accordion.
- Gallery images open in a larger HTML dialog lightbox.
- Leaflet and OpenStreetMap provide an interactive Johannesburg city-centre example map. It is labelled as illustrative only because no actual store address was supplied.
- The enquiry form uses HTML5 constraints and JavaScript validation, then displays an asynchronous response based on the selected request. It does not claim real stock, pricing or services because this is a student concept without a backend.
- The contact form requests name, email, optional phone, message type and message. It validates the input and uses `fetch()` to send to FormSubmit AJAX at the email address already shown in the original Part 2 project. First-time FormSubmit activation may be required.

## SEO
Each page has a unique title and meta description, semantic headings, descriptive alt text, internal links, robots metadata and a canonical URL placeholder. `robots.txt` allows crawling and points to `sitemap.xml`, which lists all seven pages. Keywords such as Worldstar Swagg, streetwear, clothing concepts, T-shirt mock-ups and graphic designs are used naturally. The layout is responsive. Off-page SEO actions such as genuine backlinks and social promotion must be done after deployment; they are not claimed as completed.

## IMPORTANT deployment setup
Replace every `YOUR-GITHUB-USERNAME` placeholder in canonical links, `robots.txt` and `sitemap.xml` with the final published domain. If using Netlify, use the actual Netlify URL.

## Testing
1. Open `index.html` in a browser or use VS Code Live Server.
2. Test mobile navigation on all pages.
3. Search and sort the product concepts; open and close each FAQ.
4. Open each gallery image in the lightbox and close it.
5. Submit invalid and valid enquiry form values and check the response.
6. Test the contact form online; FormSubmit may require recipient activation and internet access.
7. Check the About Us map while online.
8. Test desktop, tablet and mobile widths.

## Changelog
### Part 3 — 2 November 2026
- Added `enquiry.html` with visitor name, email, enquiry category, optional design/subject and quantity, and a detailed message field. Added HTML5 required, email, character-length and numeric-range validation. JavaScript processes the form asynchronously and returns a response appropriate to product, collaboration, sponsorship or volunteering requests.
- Added product search and alphabetical sorting to `products.html`; results update dynamically without a page refresh.
- Added an FAQ accordion with JavaScript-controlled expanded state.
- Added an accessible image lightbox to the gallery using the HTML dialog element.
- Reworked `contact.html` into a general-message form with name, email, optional phone, message type and message fields. Added HTML5 and JavaScript validation and asynchronous `fetch()` submission to FormSubmit's AJAX endpoint, including success/error feedback.
- Expanded `js/site.js` to control navigation, filtering, sorting, accordion behavior, gallery lightbox, form validation/submission and map initialization.
- Added a Leaflet/OpenStreetMap interactive map to About Us. It is clearly marked as a city-centre example and not a physical shop location.
- Added unique SEO titles and descriptions, robots directives, theme colour and canonical URL placeholders to the existing pages and enquiry page.
- Created `robots.txt` and `sitemap.xml` for the seven HTML pages.
- Added responsive CSS for the new controls, FAQ, lightbox, forms and map.
- Updated navigation to include the enquiry page and retained the existing Worldstar Swagg design, content, mock-ups and video.

### Part 2 — 24 October 2026
- Created a shared external stylesheet and linked the website pages.
- Added About Us, Products & Services, Gallery, News & Updates and Contact Us pages.
- Added responsive Grid/Flexbox layouts, tablet/mobile breakpoints, mobile navigation, keyboard focus states, image alt text and reduced-motion support.

### Part 2 lecturer feedback corrections — COMPLETE AFTER REVIEW
The lecturer's actual feedback was not included in the project archive. Paste each feedback item here and record the real correction and testing evidence. Do not invent feedback or claim an unverified correction.
- **Feedback:** [Paste exact lecturer feedback]
  - **Correction:** [Describe the actual website edit]
  - **Testing/evidence:** [Explain how it was checked]

## References
- FormSubmit (n.d.) *FormSubmit — Easy form endpoints*. Available at: https://formsubmit.co/ (Accessed: 2 November 2026).
- Leaflet (n.d.) *Leaflet — An open-source JavaScript library for mobile-friendly interactive maps*. Available at: https://leafletjs.com/ (Accessed: 2 November 2026).
- MDN Web Docs (n.d.) *Constraint validation*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation (Accessed: 2 November 2026).
- MDN Web Docs (n.d.) *Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API (Accessed: 2 November 2026).
- MDN Web Docs (n.d.) *HTML dialog element*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog (Accessed: 2 November 2026).
- OpenStreetMap contributors (n.d.) *Copyright and licence*. Available at: https://www.openstreetmap.org/copyright (Accessed: 2 November 2026).
- Sitemaps.org (n.d.) *Sitemaps XML format*. Available at: https://www.sitemaps.org/protocol.html (Accessed: 2 November 2026).
- Google Search Central (n.d.) *Introduction to robots.txt*. Available at: https://developers.google.com/search/docs/crawling-indexing/robots/intro (Accessed: 2 November 2026).

## GitHub and deployment
1. Open the project folder in VS Code. Replace `YOUR-GITHUB-USERNAME` with the final GitHub Pages or Netlify URL.
2. Test all functionality and activate FormSubmit for the recipient email if prompted.
3. Add genuine desktop/tablet/mobile screenshots in `screenshots/`.
4. Run `git add .`, `git commit -m "Complete Part 3 JavaScript SEO and forms"` and `git push`.
5. Enable GitHub Pages from the `main` branch and root folder, or import the repository into Netlify.
6. Open the live site and test again. Submit both the repository link and published website URL to the LMS.

## Final checklist
- [ ] Replace URL placeholders with the actual published domain.
- [ ] Add actual Part 2 lecturer feedback and document corrections.
- [ ] Test FormSubmit activation and contact email delivery.
- [ ] Test enquiry, search, sort, accordion, lightbox and map.
- [ ] Add genuine desktop, tablet and mobile screenshots.
- [ ] Push the repository and publish the website.
- [ ] Submit repository and live-site links.
