# nextjs-boilerplate

A Next.js (App Router) starter with MDX content, Tailwind CSS v4, and dark/light theming.

## Commands

```bash
pnpm dev         # Start dev server with Turbopack
pnpm build       # Production build
pnpm lint        # ESLint + Prettier check
pnpm format      # Auto-format with Prettier
pnpm test        # Run Jest tests
```

## Docker

```bash
docker build -t nextjs-boilerplate .
docker run -p 3000:3000 nextjs-boilerplate
```

## Stack

- **Next.js** (App Router)
- **content-collections** for build-time MDX compilation with Zod-validated frontmatter
- **Tailwind CSS v4** via PostCSS
- **next-themes** for dark/light mode
- **Jest** for testing

## Content

Blog posts and static pages live as MDX files in `/content/` (`texts/` and `pages/`). Schemas are defined in `content-collections.ts`; MDX is compiled at build time and rendered as React Server Components. Blog posts are served at `/texts/[slug]`.
