# Pallavi Pradhanya — Portfolio

A responsive portfolio for an AI & ML student, built with React, TypeScript, and Vite.

## Architecture

- `/` — landing page, interactive skill network, and selected work
- `/about` — profile, BHEL experience, education, skills, and achievements
- `/projects` — detailed project architecture, challenges, outcomes, and stack
- `/contact` — direct contact channels and opportunity areas
- `*` — custom not-found route

The UI is split into typed page, component, data, and model layers. The skill map uses typed React Flow nodes and edges with drag, pan, zoom, minimap, and selected-node inspection.

## Run locally

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
pnpm preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Vercel detects Vite automatically. Use `pnpm build` and output directory `dist` if prompted.

`vercel.json` includes the SPA rewrite required for direct visits to `/about`, `/projects`, and `/contact`.

The resume and profile images in `public/` are included in production builds.
