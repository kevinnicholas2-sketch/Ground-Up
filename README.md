# Ground Up — homepage prototype

A Next.js build of the **Ground Up** homepage ("Kraft & Ember" design): a fictional neighborhood coffee shop at 177 Broadway, Williamsburg, Brooklyn. Made for a Product & UX class project.

> Ground Up is a fictional business. Menu items, prices and bean products are placeholders. The cart and mailing-list form are demos: nothing is charged, ordered, sent or stored.

## Run it

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

| Command | What it does |
|---|---|
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm test` | Unit tests (Vitest) for the cart and email logic |
| `npm run typecheck` | TypeScript check |

## How it's organized

```
app/
  layout.tsx        Page shell, metadata, Google Fonts (Bricolage Grotesque + Instrument Sans)
  page.tsx          Puts the sections together in order
  globals.css       All styles: color tokens, layout, buttons, responsive rules, reduced motion
  icon.svg          Favicon (the cup from the supplied logo)
components/
  Header.tsx        Logo, nav, cart button, mobile menu (Escape closes)
  Hero.tsx, Stamp.tsx
  InfoStrip.tsx     Address, hours, phone, directions
  MenuSection.tsx   Category tabs + menu board
  OurCoffee.tsx
  ShopBeans.tsx     Products + "Add to cart"
  Events.tsx
  VisitUs.tsx
  Signup.tsx        Mailing list with validation (demo only)
  Footer.tsx
  CartProvider.tsx  Cart state shared by header, shop and drawer
  CartDrawer.tsx    Demo cart: quantities, remove, subtotal, focus trap, Escape to close
  Icons.tsx
lib/
  data.ts           Shop facts, menu, products, events — edit content here
  cart.ts           Pure cart functions (tested)
  email.ts          Email validation and messages (tested)
  format.ts
public/images/      Supplied logo (espresso + cream versions) and photos
```

## Editing content

- **Address, hours, phone, email:** `lib/data.ts` → `SHOP`
- **Menu:** `lib/data.ts` → `MENU`
- **Beans for sale:** `lib/data.ts` → `PRODUCTS`
- **Events:** `lib/data.ts` → `EVENTS`
- **Colors:** CSS variables at the top of `app/globals.css`

## Accessibility notes

Semantic headings and landmarks, labeled form field, visible focus rings, 44px+ touch targets, alt text on every photo, menu tabs use `aria-pressed` plus a check mark (not color alone), the cart drawer traps focus and returns it to the button that opened it, and all motion is disabled under `prefers-reduced-motion`.
