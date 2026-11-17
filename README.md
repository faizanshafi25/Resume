# Faizan Shafi — Portfolio

A responsive, single-page portfolio built with plain **HTML, CSS and JavaScript**. No frameworks and no build step: open `index.html` and it works.

![Portfolio preview](assets/preview.png)

**Live site:** https://faizanshafi25.github.io/Resume/

## About the site

This is the personal site of Faizan Shafi, a BCA student at Amar Singh College, Srinagar, who is learning web development. It presents who he is, what he has worked on, and where he is heading.

| Section | What it shows |
| --- | --- |
| Hero | Name, a typing "currently" line and a `faizan.json` code card with the key facts |
| About | Short bio |
| Experience | Software testing, business development and client support at Ematrix Software Solutions (EmvoraERP), with a full write-up and a breakdown of duties |
| Education & skills | BCA details and grouped skills with honest levels (Completed, Learning, Foundational, Basic) |
| Roadmap | Four-step career path from front-end foundations to forward deployed engineering |
| Contact | Email and GitHub links |

## Features

- **Experience-first design:** the Experience section is a large card on a timeline, with company details, a 7-line summary and four duty blocks
- **Web-resume look:** dark graphite with amber and teal accents, a code-window hero card, a typing line and a faint engineering grid; every text colour passes WCAG AA contrast
- **Copy-email button** and a scroll progress bar
- **Fully responsive** layout, tested from phone width up to desktop
- **Accessible by default:** skip link, semantic landmarks, visible keyboard focus, labelled mobile menu (`aria-expanded`, closes with Esc) and `prefers-reduced-motion` support
- **Active-section highlight** in the navigation while scrolling
- **Gentle reveal-on-scroll** using `IntersectionObserver` (disabled for reduced-motion users)
- **Standard cursor** and no loading screen, so nothing gets in the way of the content

## Tech stack

| Area | Details |
| --- | --- |
| Markup | Semantic HTML5 |
| Styling | CSS custom properties, Grid, Flexbox, CSS Grid, keyframe animation |
| Behaviour | Vanilla JavaScript (ES6+) |
| Fonts | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts, with system-font fallbacks |

## Project structure

```
myResume/
├── index.html      # Page content and structure
├── style.css       # Design tokens, layout, themes, responsive rules
├── script.js       # Mobile menu, scroll progress, active nav link, typing line, copy email, reveal
├── assets/
│   └── preview.png # Screenshot used in this README
└── README.md
```

## Run locally

```bash
git clone https://github.com/faizanshafi25/MyResume.git
cd MyResume

# Option 1: just open index.html in your browser
# Option 2: serve it locally
python -m http.server 8000      # then visit http://localhost:8000
```

## Customise

**Colours.** All colours are tokens at the top of `style.css`.

```css
:root {
    --bg: #0c1017;     /* page background */
    --amber: #ffb547;  /* main accent */
    --teal: #4fd1c5;   /* secondary accent */
}
```

**Add an experience entry.** Copy the `<article class="job reveal">` block in `index.html` and change the company details, summary and duties.

**Roadmap.** Copy a `<li class="step reveal">`. Add `is-current` to highlight the active step.

## Deployment

Because the site is static, any static host works.

**GitHub Pages:** open the repository on GitHub, go to *Settings → Pages*, choose *Deploy from a branch*, select `main` and `/ (root)`, then save. The site will be served at `https://faizanshafi25.github.io/MyResume/`.

**Netlify or Vercel:** import the repository. No build command is needed, and the publish directory is the project root.

## Browser support

Current versions of Chrome, Edge, Firefox and Safari.

## Contact

- GitHub: [@faizanshafi25](https://github.com/faizanshafi25)
- Email: darfaixaan21@gmil.com

## License

All rights reserved © 2026 Faizan Shafi. If you want others to reuse the code, add a licence file such as MIT.
