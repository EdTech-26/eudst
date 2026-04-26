## Overview

This plan implements all meeting-note items: shrinking the logo, refocusing the landing page on the learner journey, moving faculty content to its own page, removing references to D2L/Brightspace/HyFlex, adding applied/immersive/microcredential language, and creating a full Course Catalogue page with an Organisations section.

---

## 1. Logo — reduce size by 40%

**File:** `src/components/site/Logo.tsx`

- Change image height from `h-20 md:h-24` (80–96px) → `h-12 md:h-14` (≈48–56px), a ~40% reduction.
- Adjust default `width`/`height` props proportionally (220×52 → 132×31).

---

## 2. Routing — add new pages

**File:** `src/App.tsx`

Register two new routes above the catch-all:
- `/courses` → new `Catalogue` page
- `/faculty` → new `Faculty` page

**File:** `src/components/site/Navbar.tsx`

- Convert internal `#` anchors to React Router `<Link>` items where appropriate.
- New top menu: **For Learners** (`/#learners`), **Courses** (`/courses`), **Faculty** (`/faculty`), **How it works** (`/#how`), **FAQ** (`/#faq`).
- Remove "For Faculty" anchor link (faculty now has its own page).
- "Sign in" / "Get started" buttons stay (no behaviour change requested).

---

## 3. Landing page — remove faculty focus

**File:** `src/pages/Index.tsx`

- Remove `<FacultyService />` from the page composition.
- Keep: `Hero`, `Audiences` (learner-only version, see §4), `Courses`, `HowItWorks`, `FAQ`, `CTABanner`.

**File:** `src/components/site/Audiences.tsx`

- Remove the entire **Faculty** card (the dark `motion.div` with `id="faculty"`).
- Convert layout from 2-column grid to a single, centred learner card (or a learner card + a complementary "Applied & immersive learning" highlight card — see §6).
- Update section heading from "Whether you're learning or teaching, eUDST is your starting point." → something learner-focused, e.g. **"Built for learners who want skills that move careers forward."**
- "Browse catalogue" button now links to `/courses`.

**File:** `src/components/site/Hero.tsx`

- Remove the secondary "Faculty portal" CTA button. Keep "Browse courses" → links to `/courses`.
- Tweak hero copy slightly to lean on applied/immersive language (see §6).

---

## 4. New page: `/faculty` (Faculty page)

**New file:** `src/pages/Faculty.tsx`

Structure:
- Reuses `Navbar` and `Footer`.
- Hero-style intro: **"Design the next generation of digital courses."** — moves the existing faculty messaging from `Audiences.tsx` to this page.
- A "What faculty get" section adapted from the current `FacultyService` component (rewritten — see §5 for D2L/HyFlex removal).
- CTAs: **Faculty sign in** and **New course request**.
- Optional FAQ-style strip or contact block at the bottom.

The existing `FacultyService.tsx` will be revised (not deleted) and rendered inside this new page only.

---

## 5. Remove all D2L, Brightspace and HyFlex mentions

Sweep across the codebase. Concrete edits:

| File | Change |
|---|---|
| `src/pages/Index.tsx` | Update `<title>` and meta description: drop "HyFlex" and "D2L Brightspace"; reword to applied/immersive online learning. |
| `src/components/site/HowItWorks.tsx` | Heading "From browsing to Brightspace in four steps." → **"From discovery to applied learning in four steps."** Step 4 description "Launch directly into D2L Brightspace…" → **"Jump into your immersive online learning environment and start your course."** |
| `src/components/site/FAQ.tsx` | Rewrite Q "How does the portal connect to D2L Brightspace?" → e.g. **"How do I access my course after enrolling?"** with a non-branded answer. Rewrite Q on delivery modes — replace "HyFlex Learning" with **Online**, **Blended**, and **Applied/Immersive** options. Reword any other Brightspace mentions. |
| `src/components/site/FacultyService.tsx` | Replace the "HyFlex" mode card with a non-branded equivalent (e.g. **Applied & Immersive** — project-based, hands-on online experiences). Drop "delivered entirely through Brightspace" wording. Remove the "from course mapping to launch on D2L Brightspace" line. |
| `src/components/site/Footer.tsx` | "Powered by D2L Brightspace · Doha, Qatar" → **"Doha, Qatar"** only. Remove "Delivery modes" link or rename. |
| `src/components/site/Courses.tsx` | The course list contains a `type: "Academic · HyFlex"` entry — change to **"Academic · Applied"** or **"Academic · Immersive"**. Section heading "Online & professional courses, delivered through Brightspace." → **"Online, applied and professional courses."** |
| `src/components/site/CTABanner.tsx` | No D2L mentions, but update copy to reinforce applied/immersive language. |

---

## 6. Add Applied / Immersive Learning / Microcredentials language

Sprinkle this vocabulary across the marketing surfaces:

- **Hero subtitle/paragraph**: mention "applied, immersive online learning and microcredentials".
- **Audiences (learner card)**: bullet list updated to highlight: "Applied, project-based learning", "Stackable microcredentials", "Immersive online experiences designed around real goals".
- **Courses section**: add a small filter/label set including **Microcredential** as a course type. Add 1–2 sample microcredential entries in the course data array.
- **HowItWorks**: rename "Discover" subtitle to reference applied & professional pathways; keep step icons.
- **FAQ**: add a new entry "What are microcredentials?" with a short explanation.

---

## 7. New page: `/courses` (Course Catalogue)

**New file:** `src/pages/Catalogue.tsx`

Structure:
1. **Navbar** + page intro: "Explore the eUDST course catalogue" with applied/immersive/microcredential framing.
2. **Filter bar** (visual only, non-functional unless requested): College, Type (Academic / Professional / Microcredential), Delivery (Online / Blended / Applied).
3. **Course grid**: reuses the card style from `Courses.tsx`, but renders a longer list (e.g. 8–12 sample courses including microcredentials). Extract the card into a small shared `CourseCard` component to avoid duplication, used by both the landing-page preview and the catalogue.
4. **Organisations section** (new, per meeting notes):
   - Heading: **"For Organisations"**
   - Body: "If you're an organisation and don't see a course you need, request a customised course built around your team's goals — applied, immersive, and outcomes-focused."
   - CTA button: **"Request a custom course"** (links to a `mailto:` or anchor placeholder for now; a real form can be added later).
   - Visual: gradient panel reusing `bg-gradient-primary` styling from `CTABanner` for consistency.
5. **Footer**.

The landing page `Courses` section keeps its "View all courses" button — now linking to `/courses`.

---

## 8. Files created / modified summary

**Created**
- `src/pages/Faculty.tsx`
- `src/pages/Catalogue.tsx`
- `src/components/site/CourseCard.tsx` (shared card extracted from `Courses.tsx`)
- `src/components/site/Organisations.tsx` (organisations section, used inside Catalogue)

**Modified**
- `src/App.tsx` — register `/courses` and `/faculty` routes
- `src/pages/Index.tsx` — drop `FacultyService`, update meta, remove Brightspace mentions
- `src/components/site/Logo.tsx` — 40% smaller
- `src/components/site/Navbar.tsx` — new menu structure with router links
- `src/components/site/Hero.tsx` — remove faculty CTA, tighten copy, link to `/courses`
- `src/components/site/Audiences.tsx` — remove faculty card; learner-only layout; new bullets/copy
- `src/components/site/Courses.tsx` — refactor card into `CourseCard`, replace HyFlex labels, add microcredential entries, "View all courses" → `/courses`
- `src/components/site/HowItWorks.tsx` — remove Brightspace wording
- `src/components/site/FacultyService.tsx` — remove D2L/HyFlex; rendered only on `/faculty`
- `src/components/site/FAQ.tsx` — rewrite Brightspace/HyFlex FAQs, add microcredential FAQ
- `src/components/site/Footer.tsx` — remove "Powered by D2L Brightspace"; refresh Faculty links to point to `/faculty`
- `src/components/site/CTABanner.tsx` — refreshed copy emphasising applied/immersive learning

---

## Out of scope (call out)

- The **Sign in / Get started** flows (auth) are not implemented — buttons stay as visual placeholders. Happy to wire these to Lovable Cloud auth in a follow-up.
- The **"Request a custom course"** form on the Organisations section is a CTA placeholder. A real submission form (with email delivery / DB storage) would be a follow-up using Lovable Cloud.
- Filters on the catalogue page are visual unless you'd like them functional.