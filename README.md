# Worldstar Swagg — WEDE5020 Part 2

## Project overview
This project updates the original Worldstar Swagg homepage into a multi-page HTML website and applies an external CSS stylesheet for desktop, tablet and mobile layouts. The website presents the brand concept, clothing mock-ups, gallery, news and contact information.

## Website files
- `index.html` — homepage and brand introduction
- `about-us.html` — brand story
- `products.html` — apparel and design mock-ups
- `gallery.html` — visual gallery
- `news.html` — project updates
- `contact.html` — contact page with a demonstration form
- `css/style.css` — shared external CSS stylesheet for all pages
- `js/site.js` — mobile navigation/form behaviour
- `images/` — images and video supplied in the original project

## How to view the website
Keep the folders together and open `index.html` in a modern browser. The contact form is for demonstration only; it does not send or store messages.

## CSS and responsive design
- A small CSS reset and shared custom properties create consistent styles.
- Typography uses `clamp()` and spacing uses relative units such as `rem`.
- Flexbox is used for the header, navigation and footer.
- CSS Grid is used for feature cards, product cards, gallery and page layouts.
- Hover, active and keyboard-focus states are included.
- A tablet breakpoint is set at `900px`; the mobile breakpoint is set at `640px`.
- The mobile navigation collapses behind a menu button.
- Images and video resize to fit their containers.
- Semantic landmarks, image alternative text, a skip link and reduced-motion support improve accessibility.

## Screenshot evidence — must be added by the student
Use browser developer tools / responsive device mode and take genuine screenshots of your website. Save them in a folder named `screenshots/`:
- `screenshots/desktop.png` — recommended viewport 1440 × 900
- `screenshots/tablet.png` — recommended viewport 768 × 1024
- `screenshots/mobile.png` — recommended viewport 390 × 844

Do not submit mock-ups as responsive testing evidence. Capture screenshots of the running website at each viewport, and add them to the repository.

## Changelog

### Part 2 — 24 October 2026
- Created `css/style.css` as an external stylesheet and linked all website pages to it.
- Corrected the original HTML document structure by adding the viewport meta tag, a meaningful page title, language declaration, description metadata and a stylesheet link.
- Replaced the invalid inline background declaration in the original homepage with reusable CSS rules.
- Added a consistent black, white and neon-lime brand palette inspired by the Worldstar Swagg identity.
- Added shared header navigation and footer across the pages.
- Added About Us, Products & Services, Gallery, News & Updates and Contact Us pages to match the navigation in the original homepage.
- Updated the homepage video source to match the filename included in the supplied project archive.
- Added responsive CSS Grid and Flexbox layouts for content sections, product cards and gallery items.
- Added tablet and mobile media queries; mobile navigation can be expanded with the Menu button.
- Added hover, active and keyboard-focus states, image alternative text, a skip link and reduced-motion support.
- Added README instructions for responsive screenshots, testing and GitHub submission.

### Part 1 lecturer feedback — complete this section
The original project archive did not include the lecturer's Part 1 feedback or marks. Add each feedback item below and record the actual correction you make:
- **Feedback item 1:** [Paste lecturer's feedback]
  - **Change made:** [Describe the actual correction]
  - **Testing:** [Explain how you checked it]
- **Feedback item 2:** [Paste lecturer's feedback]
  - **Change made:** [Describe the actual correction]
  - **Testing:** [Explain how you checked it]

Do not leave these placeholders in the final submission if your lecturer provided feedback.

## References
- Mozilla Developer Network (MDN) (n.d.) *CSS media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries (Accessed: 24 October 2026).
- Mozilla Developer Network (MDN) (n.d.) *CSS Grid Layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed: 24 October 2026).
- Mozilla Developer Network (MDN) (n.d.) *CSS Flexible Box Layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout (Accessed: 24 October 2026).
- Mozilla Developer Network (MDN) (n.d.) *Responsive images*. Available at: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images (Accessed: 24 October 2026).

## GitHub submission steps
1. Open the project folder in your code editor.
2. Test every page and navigation link; check the mobile menu and contact form message.
3. Add desktop, tablet and mobile screenshots to `screenshots/`.
4. Open a terminal in the project folder and run:

   ```bash
   git add .
   git commit -m "Complete Part 2 responsive CSS styling"
   git push
   ```

5. Confirm the files appear in your remote GitHub repository.
6. Copy the repository URL and submit it to the Learning Management System.

## Before submitting
- [ ] Check the lecturer's Part 1 feedback and document the actual corrections.
- [ ] Confirm that the supplied images and video load correctly.
- [ ] Test the pages at desktop, tablet and mobile widths.
- [ ] Add the three genuine screenshots.
- [ ] Confirm all pages use `css/style.css`.
- [ ] Check spelling, page links and image alt text.
- [ ] Push the finished project to GitHub and submit the repository link.
