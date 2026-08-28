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

The source references `assets/hero.jpg`, but the supplied folder contains no such asset. The migrated page displays an explicit styled portrait placeholder rather than publishing an unrelated person's photo. The README documents the one-file replacement path for the real portrait.

## Verification

- ESLint and a production Next.js build.
- Browser snapshots at desktop and mobile sizes.
- Interaction check for the language toggle and checks for unexpected browser errors.
- Vercel preview deployment after local verification.
