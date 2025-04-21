# Arttu.net – Portfolio Website

Welcome to the source code for my personal website: **[arttu.net](https://arttu.net)**  
This site serves as my online portfolio, showcasing my work, skills, and a bit of who I am outside of code.

---

## 🎨 Design

The design is intentionally minimal and a bit nostalgic — styled with raw CSS (no frameworks), using a palette and layout inspired by early 2000s personal sites but modernized with semantic HTML and responsive design.

### Key design principles

- **Readable, accessible, fast**
- **Responsive layout** with a centered column (`max-width: 800px`)
- **Personal touches** like a marquee banner, emoji navigation hints, and fun facts
- Custom styling without Tailwind or component frameworks — all styles are handcrafted

---

## 🌍 Live Site

The site is hosted on **GitHub Pages** and available here:

👉 **[https://arttu.net](https://arttu.net)**

DNS is managed via [Porkbun](https://porkbun.com), and the site is deployed from the `master` branch of this repo using GitHub's automatic Pages integration.

---

## 🚀 Running the Project Locally

This project is built with [Astro](https://astro.build/).

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Install dependencies

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Visit `http://localhost:4321` in your browser to view the site locally.

---

## 🛠️ Build for Production

```bash
npm run build
```

The built site will be output to the `dist/` folder.

To preview the built version locally:

```bash
npm run preview
```

---

## 📦 Deploying to GitHub Pages

This project uses the official `@astrojs/github` adapter for GitHub Pages.

If needed, you can deploy manually using the following:

```bash
npm run build
npx gh-pages -d dist
```

Or let GitHub Actions do it automatically when pushing to `main`.

Make sure the `astro.config.mjs` file has:

```js
import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  adapter: github(),
  base: '/',
});
```

---

## 📁 Project Structure

```
├── public/             # Static assets (images, favicon, etc.)
├── src/
│   ├── components/     # Astro components (Header, Footer, etc.)
│   ├── layouts/        # Shared layout wrappers
│   ├── pages/          # Individual routes (/index.astro, /about.astro, etc.)
│   ├── media/          # Static imports like project screenshots or profile images
├── astro.config.mjs    # Astro project config
├── package.json        # Project metadata and scripts
└── README.md           # This file
```

---

## 📬 Contact

- Email: [artnikkila@gmail.com](mailto:artnikkila@gmail.com)
- GitHub: [github.com/succabs](https://github.com/succabs)
