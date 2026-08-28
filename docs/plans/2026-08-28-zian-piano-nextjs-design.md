# Zian Piano Next.js migration

## Goal

Convert the supplied single-file portfolio into a maintainable Next.js application while preserving its content, editorial styling, responsive layout, section navigation, external links, and hero-language toggle.

## Architecture

- Next.js App Router with TypeScript.
- A server-rendered root page delegates the interactive portfolio to one client component.
- Static content is represented as typed in-file data and rendered through reusable section markup.
- Global CSS consolidates the source file's layered style blocks into a single responsive stylesheet.
- No backend or environment variables are required.

## Asset boundary

The source referenced `assets/hero.jpg`, which was absent from the original transfer. The owner later supplied three photographs in `pics/`; the square piano portrait now anchors the hero, while the stage and applause photographs form a performance-story gallery below the professional highlights.

## Visual polish

- Direction: warm recital programme meets Copenhagen editorial design.
- Keep the existing bilingual content and section order.
- Use the owner's supplied portrait and performance imagery as the visual anchor, with warm paper, walnut and ink tones.
- Strengthen hierarchy through tighter section rhythm, clear calls to action, framed video previews and a dark contact closing section.
- Preserve fast static rendering, graceful thumbnail fallbacks and reduced-motion support.

## Verification

- ESLint and a production Next.js build.
- Browser snapshots at desktop and mobile sizes.
- Interaction check for the language toggle and checks for unexpected browser errors.
- Vercel preview deployment after local verification.
