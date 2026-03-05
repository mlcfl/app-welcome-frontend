# Welcome — Frontend

Frontend part of the Welcome application. Welcome is a simple landing page that introduces the MLC project. It requires no authentication or any other preconditions — it is publicly accessible.

The site is statically generated (SSG) using Nuxt. No server-side rendering at runtime — just pre-built HTML/CSS/JS served as static files.

## Setup

```bash
pnpm install
```

## Development

Start the dev server (uses `.env.development`):

```bash
pnpm dev
```

## Build

Static generation for production (uses `.env.production`):

```bash
pnpm generate
```

Output goes to `.output/public/`.

SSR build (if needed):

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Lint

```bash
pnpm lint
# or auto-fix
pnpm lint:fix
```

## License

[CC BY-NC-ND 4.0](LICENSE)
