# נועם בן דוד · Skin Therapist

Premium RTL Hebrew website for Noam Ben David's skincare clinic.

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Structure

```
src/
  components/    Reusable UI building blocks (Header, Footer, ContactForm, etc.)
  pages/         Top-level routed views (Home, About, Treatments, ...)
  data/          All editable content arrays + central image/contact constants
  hooks/         useLocalStorage (form persistence), useReveal (scroll fade-in)
  styles/        variables.css (palette + tokens) and global.css (resets, helpers)
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About Noam |
| `/treatments` | Treatments index |
| `/treatments/:slug` | Single treatment detail |
| `/testimonials` | Success stories + before/after carousels |
| `/products` | Paginated product catalog (4×5 grid) |
| `/questionnaire` | 5-step personal-matching form |
| `/contact` | Contact form + clinic info + map |

## Reusable components

`Header`, `Footer`, `Hero`, `SectionTitle`, `ImageTextSection`, `ContactForm`,
`AnimatedContactSection`, `TreatmentCard`, `TreatmentLinks`,
`BrandLogosCarousel`, `TestimonialsCarousel`, `ProductCard`, `Pagination`,
`PersonalQuestionnaireForm`, `FloatingWhatsAppButton`, `AccessibilityButton`.

## Replacing content

| What | File |
|------|------|
| Treatments (titles, copy, hero, related) | `src/data/treatments.ts` |
| Products (4×5 grid + pagination) | `src/data/products.ts` |
| Testimonials & before/after categories | `src/data/testimonials.ts` |
| Brand logos (carousel) | `src/data/brands.ts` |
| Hero / portrait / clinic / questionnaire / contact images | `src/data/images.ts` |
| Phone, email, address, social, Waze/Maps links, WhatsApp | `src/data/contact.ts` |

Just swap the placeholder URLs with real assets — every consumer reads from these data files.

## Forms & persistence

All form state is persisted via `useLocalStorage` (`src/hooks/useLocalStorage.ts`).
Storage keys:

- Contact form on Home: `noam-home-contact`
- Contact form on Treatments index: `noam-treatments-contact`
- Contact form on each treatment page: `noam-{slug}-contact`
- Contact form on Contact page: `noam-contact-page`
- Multi-step questionnaire: `noam-questionnaire`
- Accessibility settings: `noam-a11y`

On submit each form currently:
1. Prevents default
2. Logs the payload via `console.log`
3. Shows a success message

To wire to a real backend later, replace the `console.log` line in:
- `src/components/ContactForm/ContactForm.tsx` (`onSubmit`)
- `src/components/PersonalQuestionnaireForm/PersonalQuestionnaireForm.tsx` (`submit`)

with a `fetch('/api/...')` or your CRM webhook. The `data` payload is already shaped and ready.

## Design tokens

Palette and spacing live in `src/styles/variables.css`. Adjust the `--color-*` variables to retune the entire site.

## Accessibility

- Floating accessibility panel (font size, contrast, link underlines)
- Floating WhatsApp button (`tel: 050-5541001`)
- Semantic landmarks, alt text, aria-labels on icon-only controls
- RTL throughout, focus-visible borders on inputs
