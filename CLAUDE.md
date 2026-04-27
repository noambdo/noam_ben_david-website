# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install dependencies (first time)
npm run dev        # dev server → http://localhost:5173
npm run build      # TypeScript check + Vite production build → dist/
npm run preview    # serve the production build locally
```

There are no tests at this time. TypeScript is the primary type-safety layer (`tsc -b` runs as part of `build`).

## Architecture

**Stack:** Vite + React 18 + TypeScript + React Router v6. No CSS framework — all styling via plain CSS modules co-located with each component. No state-management library; form state uses a custom `useLocalStorage` hook.

**Direction:** The entire site is RTL Hebrew. `index.html` sets `dir="rtl"` on `<html>`. All layout uses logical CSS properties (`inset-inline-start/end`) instead of `left/right` where directionality matters.

### Content / data layer

Everything editable lives in `src/data/`:

| File | Controls |
|---|---|
| `images.ts` | **All** image URLs/imports site-wide. Local assets are imported here; placeholders are Unsplash URLs. Swap here to update everywhere. |
| `contact.ts` | Phone, email, address, WhatsApp, Waze, Google Maps links, social URLs. Referenced by Header, Footer, ContactForm, and the Contact page. |
| `treatments.ts` | Array of 14 treatment objects (`slug`, `title`, `category`, `shortDescription`, `fullDescription[]`, `heroImage`, `relatedTreatmentSlugs[]`). Also exports `treatmentColumns` (the three mega-menu columns). The single `TreatmentDetail` page template consumes this — no per-treatment page files needed. |
| `products.ts` | 40 product objects. The Products page paginates them 20/page. |
| `testimonials.ts` | Written reviews + before/after carousel categories (4 categories, each with an image array). |
| `brands.ts` | Brand logos for the infinite carousel on the Home page. |

### Routing (`src/App.tsx`)

```
/                   → Home
/about              → About
/treatments         → Treatments index (3-column grid by category)
/treatments/:slug   → TreatmentDetail  (dynamic, data-driven)
/testimonials       → Testimonials + before/after carousels
/products           → Products grid + Pagination
/questionnaire      → 5-step PersonalQuestionnaireForm
/contact            → ContactForm + clinic info + embedded map
```

### Component design conventions

- Each component lives in `src/components/<Name>/<Name>.tsx` with a paired `<Name>.css`.
- CSS variables for all design tokens are in `src/styles/variables.css`; global resets/helpers in `src/styles/global.css`.
- Scroll-reveal: add `className="reveal"` to any element — `useReveal` (in `App.tsx`) attaches an `IntersectionObserver` on every route change and adds `is-visible` when the element enters the viewport.
- The `Hero` component accepts a `thin` boolean prop for sub-page headers vs. the full-height home hero.
- `ImageTextSection` accepts a `reverse` prop to alternate image-left / image-right layout.
- `AnimatedContactSection` combines the reusable `ContactForm` with a parallax background layer. Use it at the bottom of treatment pages and the home page.

### Form persistence

All forms use `useLocalStorage<T>(key, initial)` from `src/hooks/useLocalStorage.ts`. On submit they currently `console.log` the payload and show a success UI. To wire a real backend, replace the `console.log` line in `ContactForm.tsx → onSubmit` and `PersonalQuestionnaireForm.tsx → submit` with a `fetch(...)` call.

localStorage keys in use: `noam-home-contact`, `noam-treatments-contact`, `noam-{slug}-contact`, `noam-contact-page`, `noam-questionnaire`, `noam-a11y`.

### Local assets

Brand assets live in `src/assets/` and are imported at the top of `src/data/images.ts`. All other images are external Unsplash URLs referenced in the same file. PNG type declarations are in `src/vite-env.d.ts`.

### Global floating UI

`FloatingWhatsAppButton` and `AccessibilityButton` are rendered unconditionally in `App.tsx`, outside the `<Routes>` tree, so they persist on every page. The accessibility button toggles CSS classes (`a11y-large`, `a11y-contrast`, `a11y-links`) on `document.documentElement` and persists settings to `localStorage`.
