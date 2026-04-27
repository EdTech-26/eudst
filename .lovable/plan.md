## Goal
Add a coherent layer of motion across the home page so it feels more premium and alive — without overdoing it. All animations will be subtle, purposeful, and respect `prefers-reduced-motion`.

## What's already animated today
- **Hero**: headline, body, CTA, and stats fade-up on load (framer-motion).
- **Audiences**: the two cards fade-up on scroll.
- **Courses**: each `CourseCard` fades-up on scroll with a small stagger.
- **HowItWorks**: the 4 step cards fade-up on scroll with a stagger.
- **FAQ / CTABanner**: no motion at all.

## Proposed enhancements

### 1. Hero (`src/components/site/Hero.tsx`)
- **Stats counter animation**: animate the numbers `6` and `60+` counting up from 0 when they enter view (framer-motion's `useMotionValue` + `animate`).
- **Stats stagger**: each stat fades + slides up individually instead of the whole row at once.
- **Hero image subtle Ken Burns**: very slow `scale(1) → scale(1.06)` over 12s on the banner image to give it life.
- **CTA button**: gentle arrow nudge on hover (`group-hover:translate-x-1`).

### 2. Audiences (`src/components/site/Audiences.tsx`)
- **Eyebrow + title**: fade-up on scroll (currently static).
- **Bullets**: stagger each bullet item in (currently they all appear with the card).
- **Image card**: subtle parallax — image scales slightly on scroll-in.

### 3. Courses (`src/components/site/Courses.tsx`)
- **Section header & "View all" button**: fade-up on scroll.
- **Course cards**: keep existing stagger but add a soft hover lift refinement (already partly there) — add an animated underline on the title on hover.

### 4. HowItWorks (`src/components/site/HowItWorks.tsx`)
- **Connector line**: animate the horizontal line drawing left-to-right (`scaleX 0 → 1`) as the section enters view.
- **Step icons**: small pop/scale-in (`scale 0.6 → 1` with spring) staggered after each card appears.
- **Step number (01, 02…)**: fade in slightly later than the card for a layered reveal.
- **Highlight box (right)**: slide in from the right.
- **Outcomes row**: stagger the 3 check items.

### 5. FAQ (`src/components/site/FAQ.tsx`)
- **Eyebrow / title**: fade-up on scroll.
- **Accordion items**: stagger fade-up as they enter view.
- (Accordion open/close animation already exists via Radix.)

### 6. CTABanner (`src/components/site/CTABanner.tsx`)
- **Whole card**: fade + scale-in on scroll (`opacity 0, scale 0.96 → 1`).
- **Logo, headline, body, button**: small staggered reveal inside the banner.
- **Button**: subtle pulse/glow on hover.

### 7. Global polish
- Add a `useReducedMotion()` check in any new heavy animation (Ken Burns, counters) to disable for accessibility.
- No new dependencies — `framer-motion` is already installed.

## Files to edit
- `src/components/site/Hero.tsx`
- `src/components/site/Audiences.tsx`
- `src/components/site/Courses.tsx`
- `src/components/site/HowItWorks.tsx`
- `src/components/site/FAQ.tsx`
- `src/components/site/CTABanner.tsx`

## Out of scope
- No layout, copy, or color changes.
- No changes to the Navbar, Footer, or any non-home-page route.
- No new images or assets.

## Optional extras (let me know if you want any)
- A faint floating-shapes / gradient-blob background behind Hero or CTA.
- Magnetic-cursor effect on primary CTAs.
- Marquee of college names somewhere on the page.