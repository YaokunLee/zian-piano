# Zian Piano

Next.js version of the Zian Piano portfolio and lesson website.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Portrait image

The received HTML referenced `assets/hero.jpg`, but that file was not included. The current page therefore uses a styled placeholder. When the original portrait becomes available, place it at `public/hero.jpg` and replace the portrait placeholder in `components/piano-portfolio.tsx` with a Next.js `Image` using `src="/hero.jpg"`.
