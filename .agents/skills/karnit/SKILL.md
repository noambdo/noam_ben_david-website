# Karnit Melamed Front-End Design Skill

## Overall Style

* Clean, minimal, luxury aesthetic
* Heavy use of white space
* Each section focuses on a single message (title + text + visual)
* High-end beauty/fashion imagery (often soft tones or black & white)
* Responsive layout using 2-column (image + text), collapsing to single column on mobile

---

## Typography

* **Headings (Hebrew):** Large (2–2.5rem), light weight, elegant serif or refined sans-serif
* **Headings (English):** Uppercase, slightly increased letter-spacing
* **Body text:** Clean sans-serif (e.g. Heebo / Montserrat), ~1–1.125rem
* **Color:** Dark gray (#333), not pure black
* **Alignment:** Right-aligned (Hebrew), vertically centered
* **Subtitles:** Lighter gray (#777), sometimes with thin divider lines

---

## Colors

* Background: #FFFFFF
* Text: #000 / #333
* Secondary text: #777
* Accent: Black buttons with white text
* Soft backgrounds: light beige / blush (#F5EEE9)
* Subtle dividers and thin lines
* Very light shadows for depth

---

## Layout & Components

### Header

* Right: Logo
* Center: Navigation
* Left: icons + phone
* Includes smooth dropdown menus
* Primary CTA: **“Shop Online”** (black pill button)

---

### Hero Section

* Full-width image (often black & white)
* Overlay text + short description
* Optional CTA button

---

### Product / Category Cards

* Horizontal carousel
* Rounded corners
* Image centered
* Title (uppercase English) + small Hebrew subtitle

---

### Image + Text Sections

* Alternating 2-column layout
* Image left / text right → then reversed
* Large spacing, very breathable layout

---

### Process / Steps Section

* Horizontal cards (usually 4)
* Thin borders
* Step number + title + short text

---

### Forms

* Clean rectangular inputs with thin borders
* Minimal labels
* Dark CTA button
* Checkbox inline text
* Positioned over/next to image

---

### Footer

* 3 columns: services / contact / branding
* Small gray text
* Social icons minimal
* Clean spacing

---

## Animations & Motion

### Scroll Animations

* Fade-in + slight upward movement
* Duration: ~0.5–0.8s
* Soft easing (ease-in-out)

---

### Parallax Effect (Important)

* Images move slightly during scroll
* Example: portrait image shifts horizontally while form stays fixed
* Movement is subtle → adds depth without distraction

---

### Carousels

* Smooth horizontal slide
* Arrow navigation
* Transition: 0.4–0.6s
* Slight opacity change

---

### Dropdown Menus

* Fade + slide
* Smooth and lightweight

---

### Hover Effects

* Links: subtle underline or darker shade
* Buttons: slight color/opacity change or soft shadow

---

## UI Details

* Rounded buttons (pill shape)
* Thin borders everywhere
* No aggressive colors
* Minimal icons
* Floating WhatsApp button (bottom-right)

---

## Implementation Guidelines

* Use Flexbox / Grid
* Use CSS variables for colors
* Use modern fonts supporting Hebrew + English
* Keep animations lightweight (opacity + transform only)
* Maintain high spacing consistency
* Prioritize readability and calm UI