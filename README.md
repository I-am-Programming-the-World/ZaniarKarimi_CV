# Responsive Personal CV Website for Zaniar Karimi

[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-blueviolet)](https://pages.github.com/)
[![MIT License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)

## Description

**Responsive Personal CV Website** is a modern, single-page application designed to showcase the professional curriculum vitae of Zaniar Karimi. Built with HTML, CSS, and JavaScript, it's optimized for deployment on GitHub Pages. The website features a clean, elegant design with smooth animations and a fully responsive layout, ensuring a seamless viewing experience across various devices (desktops, tablets, and mobiles).

This project serves as Zaniar Karimi's personal portfolio and CV, highlighting academic achievements, professional experience, skills, projects, and contact information in an accessible and visually appealing format.

---

## Features

### Design & User Experience

-   **Fully Responsive:** Adapts gracefully to different screen sizes.
-   **Modern UI/UX:** Clean, intuitive, and visually engaging design with a professional aesthetic.
-   **Smooth Scrolling:** Implemented for navigation links for a better user experience.
-   **Animated Sections:** Subtle animations on section load using the Intersection Observer API to enhance visual appeal.
-   **Mobile Navigation:** Includes a "burger" menu for easy navigation on smaller screens with animated link reveals.

### Content Sections

-   **Hero Section:** Introduction with name, titles, a brief bio, and a CV download button.
-   **Experience:** Timeline view of professional journey and roles.
-   **Education:** Card-based layout showcasing academic qualifications.
-   **Skills:** Categorized display of technical and soft skills.
-   **Projects:** Highlights key projects and research contributions.
-   **Courses & Certifications:** Lists relevant certifications and completed courses.
-   **Awards & Recognitions:** Showcases notable achievements.
-   **Interests:** Tag cloud for areas of professional interest.
-   **References:** Contact information and details for academic/professional references.
-   **Contact:** Multiple ways to connect, including email (with de-obfuscation) and social/professional links.

### Technical & Accessibility

-   **Semantic HTML5:** Well-structured and meaningful markup for better SEO and accessibility.
-   **Modern CSS3:** Utilizes CSS variables for easy theming and maintenance, flexbox, and grid for layout.
-   **Vanilla JavaScript:** Efficient JavaScript for interactivity without relying on heavy frameworks.
-   **Email De-obfuscation:** Protects email addresses from spam bots by encoding them in HTML and decoding them with JavaScript.
-   **Accessibility Focused:** ARIA attributes for navigation, focus management for interactive elements, and good color contrast.
-   **SEO Friendly:** Includes meta tags for description, keywords, author, and a JSON-LD script for structured data (Person schema).
-   **Content Security Policy (CSP):** Basic CSP implemented via meta tag to enhance security.
-   **Permissions Policy:** Configured to restrict potentially sensitive browser features.

---

## Requirements

-   A modern web browser that supports HTML5, CSS3, and JavaScript (ES6+).
    -   Examples: Google Chrome, Mozilla Firefox, Safari, Microsoft Edge.

---

## Setup & Usage

This project is designed to be deployed as a static website, perfectly suited for GitHub Pages.
The main files are `index.html`, `style.css`, and `script.js`. The CV document `CV_ZaniarKarimi.pdf` is also included for the download functionality.

### Local Development

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/i-am-Programming-the-World/ZaniarKarimi_CV.git](https://github.com/i-am-Programming-the-World/ZaniarKarimi_CV.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd ZaniarKarimi_CV
    ```
3.  **Open `index.html` in your web browser:**
    You can typically do this by double-clicking the `index.html` file or right-clicking and selecting "Open with..." your preferred browser. For an enhanced development experience with features like live reloading, consider using a local development server (e.g., the "Live Server" extension in Visual Studio Code).

### Deployment (GitHub Pages)

1.  Ensure your repository is pushed to GitHub.
2.  Navigate to your repository's **Settings** tab on GitHub.
3.  In the left sidebar, click on **Pages**.
4.  Under the **Build and deployment** section, for **Source**, select **Deploy from a branch**.
5.  Choose the branch you want to deploy from (typically `main` or `master`) and select the `/ (root)` folder.
6.  Click **Save**. Your site will be deployed to `https://i-am-Programming-the-World.github.io/ZaniarKarimi_CV/`.

> **IMPORTANT NOTE:** After deployment, update the `YOUR_CANONICAL_URL_HERE` placeholder within the `<link rel="canonical" href="...">` tag and the `url` field in the JSON-LD `<script>` block in `index.html` to your actual live GitHub Pages URL (e.g., `https://i-am-Programming-the-World.github.io/ZaniarKarimi_CV/`).

---

## Contributing

While this is a personal portfolio website, suggestions for improvements or bug reports are welcome! Please feel free to open an issue on GitHub to discuss any ideas or report problems.

## Author

-   **Zaniar Karimi**
    -   GitHub: [@i-am-Programming-the-World](https://github.com/i-am-Programming-the-World)
    -   LinkedIn: [linkedin.com/in/z-karimi](https://linkedin.com/in/z-karimi)
    -   Website (This CV Page): [https://i-am-Programming-the-World.github.io/ZaniarKarimi_CV/](https://i-am-Programming-the-World.github.io/ZaniarKarimi_CV/)

---

## License

This project is licensed under the MIT License.

---

**MIT License**

Copyright (c) 2025 Zaniar Karimi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---
