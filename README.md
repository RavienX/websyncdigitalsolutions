# Pixora — Company Website

Multi-page React (Vite) website for Pixora — web & mobile development, social
media marketing, and graphic design.

## Pages

- `/` — Home
- `/services` — Services (detailed, per service)
- `/portfolio` — Portfolio (filterable project grid)
- `/about` — About the studio and team
- `/contact` — Contact form

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to any static host (Vercel,
Netlify, Firebase Hosting, GitHub Pages, cPanel, etc.). Since this uses
client-side routing (react-router-dom), configure your host to rewrite all
paths to index.html (a "SPA fallback" or "404 to index.html" rule) so that
direct links like /services work on refresh.

## Editing content

- Company services live in `src/data/services.js` — 3 general services (Web
  Development, Mobile Development, Social Media Marketing), each with a
  `branches` array of specialized sub-services (e.g. Graphic Design is a
  branch under Social Media Marketing). Edit titles, descriptions, icons, and
  branches here; Home, Services, and Footer all pull from this one file.
- Portfolio projects are listed directly in `src/pages/Portfolio.jsx` under
  the PROJECTS array.
- Team members are in `src/pages/About.jsx` under the TEAM array.
- Contact details (email, phone, address) appear in both
  `src/components/Footer.jsx` and `src/pages/Contact.jsx`.
- Colors and fonts are centralized as CSS variables in
  `src/styles/tokens.css` — change a value there and it updates site-wide.

## Stack

- React 19 + Vite
- react-router-dom (multi-page routing)
- lucide-react (icons, no emoji used anywhere)
- Plain CSS with variables, no framework — fully responsive from ~360px
  mobile up to desktop.
