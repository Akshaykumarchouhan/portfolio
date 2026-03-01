# Akshay Kumar Chouhan — Portfolio

A responsive, professional portfolio website showcasing my projects, skills, achievements, and contact information. Built with vanilla HTML, CSS, and JavaScript—no frameworks—for fast loading and easy customization.

---

## Live Demo

🔗 **Live site:** [Add your GitHub Pages or hosted URL here]  
Example: `https://akshaykumarchouhan.github.io/portfolio/`

---

## Features

- **Hero** — Introduction, profile photo, CV download, and social links (LinkedIn, GitHub, Facebook)
- **About Me** — Education (B.Tech CSE, VFSTR), experience, and a short bio
- **Technical Skills** — Languages, frontend, backend, tools (React, Node.js, MongoDB, AWS, RAG/LLM, Quantum Tech)
- **Projects** — Featured work with descriptions and links (Wishes App, IBM Quantum Dashboard, Doctor Appointment System, Market Scout Agent, Your Genie Chatbot, IBM Quantum Job Tracker)
- **Achievements & Certifications** — Hackathons (AQVH 2025, Vignan), TCS CodeVita, LeetCode, CodeChef, NPTEL, Cambridge English
- **Contact** — Email, LinkedIn, GitHub, Facebook

### UX & Accessibility

- **Dark / Light mode** — Toggle with system preference detection and `localStorage` persistence
- **Sticky navigation** — Frosted-glass nav bar with active section highlight on scroll
- **Scroll animations** — Sections fade in on scroll; respects `prefers-reduced-motion`
- **Back-to-top button** — Appears after scrolling; smooth scroll to top
- **Skip link** — “Skip to main content” for keyboard and screen reader users
- **Focus-visible styles** — Clear focus outlines for keyboard navigation
- **Responsive layout** — Mobile-first; hamburger menu on smaller screens

---

## Tech Stack

| Category      | Used |
|---------------|------|
| **Markup**   | HTML5 |
| **Styling**  | CSS3 (custom properties, Flexbox, Grid) |
| **Script**   | Vanilla JavaScript (ES5-friendly) |
| **Fonts**    | [Google Fonts](https://fonts.google.com/) — Outfit (headings), Poppins (body) |

No build step or dependencies—open `index.html` or use a local server.

---

## Project Structure

```
portfolio/
├── index.html          # Single-page structure and content
├── style.css           # Main styles, theme variables, layout
├── mediaqueries.css    # Responsive breakpoints
├── script.js           # Theme toggle, scroll reveal, active nav, back-to-top
├── README.md           # This file
└── assets/
    ├── profile-new.jpg # Profile / hero image
    ├── about-pic.png
    ├── arrow.png
    ├── checkmark.png
    ├── education.png
    ├── email.png
    ├── experience.png
    ├── facebook.png
    ├── github.png
    ├── linkedin.png
    ├── project-1.png
    ├── project-2.png
    └── project-3.png
```

---

## Run Locally

### Option 1: Open the file

- Double-click **`index.html`** in the project folder, or  
- Drag `index.html` into your browser.

### Option 2: Local server (recommended)

**Using Python:**

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node (npx):**

```bash
npx serve
# or
npx http-server -p 8080
```

Then open **http://localhost:8000** (or the port shown) in your browser.

---

## Deploy on GitHub Pages

1. Push this repo to your GitHub account.
2. Go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Select branch **main** (or your default branch) and folder **/ (root)**.
5. Save. Your site will be at `https://<username>.github.io/portfolio/`.

---

## Customization

- **Profile & CV:** Update `index.html` (name, tagline, CV link, social URLs) and replace `assets/profile-new.jpg` and add `assets/resume.pdf` if you use a local CV.
- **Theme colors:** Edit CSS custom properties in `:root` and `body.dark` in **style.css** (`--accent-start`, `--accent-end`, etc.).
- **Sections:** Add or remove sections in `index.html` and mirror links in the nav and footer.

---

## Author

**Akshay Kumar Chouhan**

- B.Tech CSE · Vignan's Foundation for Science, Technology & Research (VFSTR), Guntur  
- LinkedIn: [akshay-kumar-chouhan-862708286](https://www.linkedin.com/in/akshay-kumar-chouhan-862708286/)  
- GitHub: [Akshaykumarchouhan](https://github.com/Akshaykumarchouhan)  
- Email: 221FA04119@vignan.ac.in  

---

## License

This project is open source. Feel free to use it as a template for your own portfolio. If you do, a credit or link back is appreciated but not required.
