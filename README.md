# nextjs-boilerplate

A Next.js (App Router) starter with MDX content, Tailwind CSS v4, and dark/light theming.

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run lint     # ESLint + Prettier check
npm run format   # Auto-format with Prettier
npm test         # Run Jest tests
```

## Docker

```bash
docker build -t nextjs-boilerplate .
docker run -p 3000:3000 nextjs-boilerplate
```

## Stack

- **Next.js** (App Router)
- **MDX** via `next-mdx-remote` + `gray-matter` for blog posts and static pages
- **Tailwind CSS v4** via PostCSS
- **next-themes** for dark/light mode
- **Jest** for testing

## Content

Blog posts and static pages live as MDX files in `/content/`. Blog posts are served at `/texts/[slug]`.
