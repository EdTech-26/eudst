## Goal

Make the italic display text on the Faculty hero (the selected span "for more engaging teaching.") render in Lato medium italic.

## Findings

- The `.font-secondary-title` utility in `src/index.css` is already defined as Lato, weight 500 (medium), italic — exactly what is requested.
- The selected span in `src/pages/Faculty.tsx` (line 57) currently uses:
  ```
  className="font-secondary-title font-normal italic"
  ```
  The `font-normal` Tailwind class (weight 400) overrides the medium (500) weight set by the utility, so the text is rendering Lato regular italic instead of medium italic.
- The same pattern exists on the Hero (`src/components/site/Hero.tsx` line 68). Out of scope for this request — only the selected Faculty element will be changed.

## Change

In `src/pages/Faculty.tsx`, line 57, remove the conflicting `font-normal` class so the medium weight from `.font-secondary-title` applies:

Before:
```tsx
<span className="font-secondary-title font-normal italic">
```

After:
```tsx
<span className="font-secondary-title italic">
```

The `italic` class is kept defensively (the utility already sets `font-style: italic`, but it makes intent explicit and is harmless).

## Out of scope

- Hero italic span (same pattern, but not the selected element).
- Arabic override behaviour (unchanged — `html[lang="ar"]` rules in `index.css` already neutralise italic for Arabic).