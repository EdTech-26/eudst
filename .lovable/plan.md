## Goal
Replace the three rows of filter pills (Subject, Type, Delivery) on the Course Catalogue page with a compact, single-row dropdown filter bar.

## Changes

**File: `src/pages/Catalogue.tsx`**

Replace the sticky filter section (the three pill rows) with a single horizontal row containing three Select dropdowns plus a "Reset" link when any filter is active.

Layout:
```text
[ Subject ▾ ]  [ Type ▾ ]  [ Delivery ▾ ]      Reset filters
```

- Use the existing shadcn `Select` component (`@/components/ui/select`) — already in the codebase.
- Each dropdown uses a small label above or inline placeholder ("Subject", "Type", "Delivery").
- Default value `"All"` shows as the placeholder/label so the trigger reads e.g. "Subject: All".
- Triggers fixed width (~180px) on desktop, full width stacked on mobile (`grid grid-cols-1 sm:grid-cols-3` with a max-width container).
- Keep the sticky positioning and backdrop blur, but reduce vertical padding (`py-3` instead of `py-5`) since it is now a single row.
- Show the result count ("Showing X courses") inline on the right of the filter bar on desktop, instead of above the grid, to further reduce vertical space. Keep it above the grid on mobile.
- A subtle "Reset" ghost button appears only when any filter ≠ "All".

No changes to filtering logic, course data, or i18n keys (existing `catalogue.subjectLabel`, `catalogue.typeLabel`, `catalogue.deliveryLabel`, `catalogue.all`, type/delivery keys are reused).

## Out of scope
- No changes to course cards, course data, or other pages.
- No new translation keys needed (reusing existing ones).