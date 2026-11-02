# CLAUDE.md — Ground Up

Next.js 15 (App Router) + React 19 + TypeScript. Homepage prototype for a fictional Williamsburg coffee shop (Product & UX class project).

## Commands
- `npm run dev` — local dev server
- `npm test` — Vitest unit tests (`lib/*.test.ts`)
- `npm run typecheck` — must pass before committing
- `npm run build` — must pass before pushing

## Rules
- Content and business facts live in `lib/data.ts`. Don't hard-code them in components.
- Keep the cart and mailing list **demo-only**: no payment, no network requests, no storage of personal data.
- Placeholder content (menu, prices, beans, event dates) must stay labeled as such where the brief requires.
- Styles live in `app/globals.css` using the CSS variables at the top. Keep contrast at 4.5:1 or better.
- Preserve accessibility: real `<button>`/`<a>`, labels, visible focus, `aria-pressed` on tabs, focus trap + Escape on the cart drawer, `prefers-reduced-motion`.
- Use the supplied logo files in `public/images/` unaltered (only the color variants exist).

## Git
- Work on feature branches; small commits; run typecheck + tests before each commit.
