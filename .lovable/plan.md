## Goal

Add an English ↔ Arabic language toggle to eUDST. Use `react-i18next` to manage UI strings, mirror the layout to RTL when Arabic is active, and use Lovable AI to draft the Arabic translations. Course data (titles, syllabi, instructor bios) stays in English for now.

## Approach

### 1. i18n foundation
Install and configure `react-i18next` + `i18next`:
- `src/i18n/index.ts` — initialise i18next, hook up `LanguageDetector` (localStorage), set fallback to `en`.
- `src/i18n/locales/en.json` — extracted English strings, organised by namespace (e.g. `nav`, `hero`, `audiences`, `courses`, `faq`, `cta`, `footer`, `catalogue`, `common`).
- `src/i18n/locales/ar.json` — Arabic equivalents, drafted by Lovable AI then committed.
- Initialise i18n in `src/main.tsx` so it's ready before React renders.

### 2. AI-generated Arabic draft
Run a one-off script (Lovable AI gateway, `google/gemini-3-flash-preview`) that takes `en.json` and produces `ar.json`. Prompt the model to:
- Preserve the exact JSON structure and keys.
- Translate values into natural Modern Standard Arabic appropriate for a higher-education brand.
- Keep brand names (eUDST, UDST, college codes like CCIT/CB/CET) in Latin characters.
- Preserve placeholders like `{{count}}` if any get added later.

This produces a draft you can review with a native speaker before going live.

### 3. RTL handling (toggle + key pages scope)
- Add a small `useDirection` effect in `src/i18n/index.ts` (or in `App.tsx`) that sets `document.documentElement.dir = 'rtl' | 'ltr'` and `lang = 'ar' | 'en'` whenever the language changes.
- Audit and convert directional Tailwind utilities to **logical** equivalents on these key surfaces only:
  - `Navbar.tsx`
  - `Hero.tsx`
  - `Audiences.tsx`
  - `Courses.tsx` + `CourseCard.tsx`
  - `FAQ.tsx`
  - `CTABanner.tsx`
  - `Footer.tsx`
  - `Catalogue.tsx`
  - Conversions: `ml-*` → `ms-*`, `mr-*` → `me-*`, `pl-*` → `ps-*`, `pr-*` → `pe-*`, `text-left` → `text-start`, `text-right` → `text-end`, `left-*`/`right-*` → `start-*`/`end-*` where used. Icons inside buttons (e.g. `ArrowRight`) get a `rtl:rotate-180` so they point the correct way.
- Other pages (CourseDetail, Faculty, MyLearning, Enroll) will inherit `dir="rtl"` from `<html>` and read mostly correctly, but may have minor mirroring quirks — flagged as acceptable per your choice.

### 4. Arabic-friendly font
Add **Noto Sans Arabic** to the Google Fonts import in `src/index.css`, and apply it via a CSS rule that targets `html[lang="ar"] body { font-family: 'Noto Sans Arabic', 'Lato', sans-serif; }`. Latin glyphs continue to use Lato through the fallback.

### 5. Language toggle UI (Navbar only)
Add a small `LanguageToggle` component placed in the Navbar's right-hand cluster (visible on both desktop and mobile menu):
- Pill-style button: `EN | ع` with the active side highlighted.
- Clicking calls `i18n.changeLanguage('en' | 'ar')`; choice persists via i18next-browser-languagedetector (localStorage key `i18nextLng`).
- Position: between the nav links and the auth buttons on desktop; at the top of the mobile menu sheet.

### 6. String extraction
Refactor each in-scope component to read strings via the `useTranslation()` hook instead of hardcoded literals. Example:
- `nav.courses`, `nav.faculty`, `nav.howItWorks`, `nav.faq`, `nav.signIn`, `nav.getStarted`, `nav.myLearning`, `nav.signOut`
- `hero.title.line1`, `hero.title.line2`, `hero.body`, `hero.cta`
- `hero.stats.colleges`, `hero.stats.coursesReady`, `hero.stats.immersive`
- `audiences.eyebrow`, `audiences.title`, `audiences.cardBadge`, `audiences.cardTitle`, `audiences.cardBody`, `audiences.bullets.*`, `audiences.browse`, `audiences.createAccount`
- `courses.eyebrow`, `courses.title`, `courses.viewAll`
- `faq.eyebrow`, `faq.title`, `faq.items[i].q/a`
- `cta.body`, `cta.button`
- `footer.*`
- `catalogue.title`, `catalogue.body`, `catalogue.collegeLabel`, `catalogue.typeLabel`, `catalogue.demoBanner`, `catalogue.empty.*`, `catalogue.showing`, `catalogue.types.*`
- `common.learnMore`, `common.enroll`, etc.

Course data (titles/descriptions/syllabi/instructor bios in `courseData.ts`) is **not** translated — per your choice, the catalogue cards will continue to display the English course content even when the rest of the UI is in Arabic.

## Files

**New**
- `src/i18n/index.ts` — i18next config + direction sync
- `src/i18n/locales/en.json` — English strings
- `src/i18n/locales/ar.json` — AI-generated Arabic strings
- `src/components/site/LanguageToggle.tsx` — EN/ع toggle pill

**Modified**
- `src/main.tsx` — import i18n bootstrap
- `src/index.css` — add Noto Sans Arabic, RTL font rule
- `src/components/site/Navbar.tsx` — add toggle, translate labels, RTL classes
- `src/components/site/Hero.tsx` — translate strings, RTL classes, mirror arrow icon
- `src/components/site/Audiences.tsx` — translate, RTL classes
- `src/components/site/Courses.tsx` — translate, RTL classes
- `src/components/site/CourseCard.tsx` — translate button label, RTL classes
- `src/components/site/FAQ.tsx` — translate, RTL classes
- `src/components/site/CTABanner.tsx` — translate, RTL classes
- `src/components/site/Footer.tsx` — translate, RTL classes
- `src/pages/Catalogue.tsx` — translate header/filters/banner, RTL classes

**Dependencies added**
- `i18next`
- `react-i18next`
- `i18next-browser-languagedetector`

## Out of scope
- Translating course data in `courseData.ts` (UI labels only, per your choice).
- Full RTL polish on CourseDetail / Faculty / MyLearning / Enroll pages — they will still toggle direction but may have minor visual quirks.
- Native-speaker review of the Arabic draft (recommended before publishing).
