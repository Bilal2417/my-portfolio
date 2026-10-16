# MERN Developer Portfolio

A green, animated one-page portfolio built with **Next.js 14 (App Router)**, **Material UI v6** and **Framer Motion**.

## Features

- Sections: Hero, Stats, Skills, Portfolio carousel, Reviews carousel, Contact form, Footer
- Animations: scroll-reveal, count-up stats, floating confetti dots, hover lifts, scroll progress bar, animated nav underlines
- Fully responsive (mobile drawer menu)
- All content lives in one file: `src/data.js`

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

## Customise

| What | Where |
| --- | --- |
| Name, email, phone, socials, intro | `src/data.js` → `profile` |
| Projects, reviews, skills, stats | `src/data.js` |
| Colours / fonts | `src/theme.js` (primary green is `#10b05a`) |
| Profile photo | replace `public/profile.svg` (or use a `.png` and update `src/components/Hero.js`) |
| CV download | add `public/cv.pdf` |

The testimonials, stats and project cards are placeholders — replace them with your real work.

The contact form opens the visitor's mail app (`mailto:`). To send mail from the server instead, add a Next.js route handler or a service such as Formspree / EmailJS.

## Deploy

Push to GitHub and import the repo into [Vercel](https://vercel.com) — no config needed.
