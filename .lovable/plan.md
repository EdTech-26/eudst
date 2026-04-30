## Update hero heading

The hero `<h1>` is composed of two translation keys: `hero.titleLine1` (regular weight) and `hero.titleLine2` (italic, secondary display font). To preserve the existing visual treatment (a styled italic phrase), I'll split the new copy across both keys.

### New text
"Applied Online Learning for Professional Development"

Split:
- `titleLine1`: "Applied online learning"
- `titleLine2`: "for professional development."

(Sentence case per workspace style; the italic span keeps the elegant secondary phrase styling already in use.)

### Files to update

1. `src/i18n/locales/en.json` → `hero.titleLine1` and `hero.titleLine2`
2. `src/i18n/locales/ar.json` → matching Arabic translation:
   - `titleLine1`: "التعلّم الإلكتروني التطبيقي"
   - `titleLine2`: "للتطوير المهني."

No component changes needed — `Hero.tsx` already renders both keys with a space between them.

### Note
The hero body paragraph (`hero.body`) still references "online learning at UDST" and remains accurate, so no further copy edits are required.
