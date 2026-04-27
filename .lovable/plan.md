## Goal

Expand the How it works section so it puts genuine emphasis on **applied, immersive, flexible learning** — not just the four enrolment steps. Bring in the new content the user provided about asynchronous learning, the eUDST story, and immersive learning experiences, while keeping the section focused, scannable, and conversion-oriented.

## Approach

Rather than rewrite the four steps (Discover → Create account → Enrol → Start learning), we keep them as the practical "how to begin" anchor and **wrap them with new applied-learning content** that comes before and after.

New section structure on the home page (`HowItWorks.tsx`):

```text
[Eyebrow]  How it works

[Headline]   Asynchronous online learning, built around you.
[Intro]      Short, sharper lead-in focused on applied, skill-based learning,
             micro-credentials and not-for-credit professional development.

[Two-column "What makes eUDST different" block]
  Left:  "Our approach"
         Short paragraph drawn from the Our Story copy — gateway for online
         learning at UDST, for-credit and non-credit pathways, designed by
         faculty with online learning and XR specialists, delivered through
         flexible HyFlex models (face-to-face, online synchronous, online
         asynchronous) — rewritten in plain learner-facing language, no
         exposure of internal terms like "HyFlex" or "LMS".
  Right: Three small feature chips/cards:
           • Applied & skill-based
           • Immersive & technology-enhanced
           • Flexible & self-paced

[Immersive learning highlight band]
  Eyebrow:  Immersive learning
  Title:    Realistic practice that bridges theory and the real world.
  Body:     Reworked from the immersive experiences paragraph — realistic
            simulations, interactive environments, technology-enhanced
            practice, supported by faculty and industry partners, building
            skill, critical thinking and professional readiness.
  Visual:   Subtle icon row (e.g. Layers, Sparkles, Cpu, Users) with short
            labels: Simulations · Interactive environments · Industry-aligned
            practice · Faculty-led design.

[Existing "Your next course starts in four simple steps" sub-heading]
  Keep the four-step grid exactly as it is today (Discover, Create account,
  Enrol, Start learning) — this remains the conversion path.

[Outcomes strip]
  Keep the existing 3-bullet outcomes block at the bottom.
```

The "Why learn through eUDST" highlight card currently to the right of the intro will be **removed** in favour of the richer applied-learning blocks above. Its message ("simpler path to enrolment, start sooner") is preserved through the four-step intro line.

## Copy (English, learner-facing, British English, no jargon)

- **Eyebrow:** How it works
- **Headline:** Asynchronous online learning, built around you.
- **Intro:** The eUDST online catalogue offers micro-credentials and not-for-credit professional courses designed for focused, skill-based learning aligned with academic and industry standards. Whether you are building credentials for career growth or developing new skills for your own learning journey, you get hands-on, applied learning online, at your pace.

- **Approach block title:** Applied learning, designed with UDST faculty.
- **Approach block body:** eUDST is the gateway to online learning at the University of Doha for Science & Technology. Our courses are accessible, engaging and flexible, with both for-credit options that may count toward an approved UDST programme (subject to academic regulations and advisor approval) and non-credit options for professional development or personal enrichment. Every course is shaped by experienced faculty alongside online learning and immersive technology specialists, and delivered in flexible formats so you can join in person, live online, or fully at your own pace.
- **Feature chips:** Applied & skill-based · Immersive & technology-enhanced · Flexible & self-paced

- **Immersive eyebrow:** Immersive learning
- **Immersive title:** Realistic practice that bridges theory and real-world application.
- **Immersive body:** eUDST brings immersive learning experiences into your courses to deepen applied, experiential learning that meets academic and industry standards. Engage with realistic simulations, interactive environments and technology-enhanced practice, supported by faculty and industry partners, so you build the skills, critical thinking and professional readiness that real careers demand.
- **Immersive icon labels:** Simulations · Interactive environments · Industry-aligned practice · Faculty-led design

- **Steps sub-heading:** Your next course starts in four simple steps.
- **Steps:** unchanged.
- **Outcomes:** unchanged.

Arabic translations will mirror the English structure with equivalent learner-facing copy and remain right-aligned.

## Files to change

- `src/components/site/HowItWorks.tsx` — add the new approach block, immersive highlight band, and a sub-heading above the four-step grid; remove the existing right-hand "Why learn through eUDST" card; keep all current motion patterns (staggered fade/rise, scaling icons, animated connector line) and apply the same patterns to the new blocks for visual consistency.
- `src/i18n/locales/en.json` — under `howItWorks`: update `title`, `intro`; add `approach.title`, `approach.body`, `approach.chips` (array), `immersive.eyebrow`, `immersive.title`, `immersive.body`, `immersive.items` (array), `stepsHeading`. Remove `highlightLabel`, `highlightTitle`, `highlightBody`.
- `src/i18n/locales/ar.json` — same key changes, Arabic copy.

## Visual & motion notes

- Maintain the section's existing rhythm: generous vertical spacing between each block (`mt-16` to `mt-20`).
- Approach block uses the existing card style (`rounded-xl border bg-card p-6 shadow-soft`) on a 2-column grid (`lg:grid-cols-[1.4fr_0.8fr]`).
- Immersive band uses a soft tinted surface (`bg-primary/5` or `bg-secondary/60`) to differentiate it from the cards above, with a 4-icon row using `lucide-react` icons already in the project (e.g. `Layers`, `MonitorPlay`, `Briefcase`, `GraduationCap`).
- All new elements use the same `framer-motion` `whileInView` patterns already in the file for consistency.
- Mobile: blocks stack to single column; icon row wraps to a 2x2 grid.

## Out of scope

- No changes to the four enrolment steps themselves.
- No new images or photography in this pass.
- No navigation or routing changes.