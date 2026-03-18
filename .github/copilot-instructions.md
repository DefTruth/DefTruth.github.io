# Copilot Instructions

## Project Overview

This is a personal GitHub Pages site for [DefTruth](https://github.com/DefTruth) — an AI Infra Engineer and open-source developer. The site is a clean, dark-themed portfolio built with **vanilla HTML, CSS, and JavaScript**. There are no build tools, package managers, or frameworks — changes deploy directly via GitHub Pages.

**Live site:** https://deftruth.github.io

## Repository Structure

```
.
├── index.html              # Single-page app entry point
├── assets/
│   ├── css/style.css       # All styles (dark theme, layout, animations)
│   └── js/main.js          # Site data (PROJECTS, PUBLICATIONS) + rendering logic
└── README.md
```

## Tech Stack

- **HTML5** — semantic markup in `index.html`
- **CSS3** — single stylesheet at `assets/css/style.css`; no preprocessors
- **Vanilla JS (ES5)** — `assets/js/main.js` uses `var`, not `let`/`const`, and plain `function` declarations for broad browser compatibility

## Key Conventions

### JavaScript style
- Use `var` (not `let` or `const`) throughout `main.js` to match the existing ES5 style.
- Use `function` declarations and `forEach` loops; avoid arrow functions or ES6+ syntax.
- The top half of `main.js` is **site data** (marked "edit this section"); the bottom half is **rendering logic** (marked "no need to edit below this line"). Keep this separation.

### Adding a new project
Edit the `PROJECTS` array in `assets/js/main.js`. Each entry requires:

```js
{
  name: "Display Name",
  repo: "owner/repo",          // GitHub repo for the stars badge
  url:  "https://github.com/owner/repo",
  desc: "Short description shown on the card.",
  tags: ["Tag1", "Tag2"],      // small pill labels
  cat:  "dit|cuda|toolkit|research",  // filter category
  date: "YYYY/MM"
}
```

Valid `cat` values: `dit`, `cuda`, `toolkit`, `research`.

### Adding a new publication
Edit the `PUBLICATIONS` array in `assets/js/main.js`:

```js
{
  title: "Full paper title",
  venue: "Journal or Conference Name",
  date:  "YYYY/MM",
  type:  "SCI"   // or other publication type label
}
```

### Adding a new filter category
Edit the `FILTER_CATS` array in `assets/js/main.js` and use the new `value` as the `cat` field in any matching projects.

### CSS style
- The design uses a **dark GitHub-inspired theme**; keep new styles consistent with the existing color palette (CSS custom properties defined at the top of `style.css`).
- Prefer adding styles to `style.css` rather than inline styles in `index.html`.

## How to Preview Changes

Because there are no build tools, open `index.html` directly in a browser:

```bash
# macOS / Linux
open index.html
# or serve with Python for full HTTP semantics
python3 -m http.server 8080
```

Then visit `http://localhost:8080` to verify the rendered site.

## Deployment

Commits pushed to the `main` branch are automatically deployed by GitHub Pages. No build step is required.

## What to Avoid

- Do **not** introduce npm, bundlers (Webpack, Vite, etc.), or CSS preprocessors — the site intentionally has zero dependencies.
- Do **not** use ES6+ syntax (`let`, `const`, arrow functions, template literals, `import`/`export`) in `main.js` without first updating the entire file to ES6+ consistently.
- Do **not** add inline `<script>` blocks to `index.html`; keep all JavaScript in `assets/js/main.js`.
- Do **not** add inline `<style>` blocks to `index.html`; keep all CSS in `assets/css/style.css`.
