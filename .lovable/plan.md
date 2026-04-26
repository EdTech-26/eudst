## Goal
Display the language a course is offered in. For now, every course is offered in **English**, but the data model will support adding Arabic (or bilingual) courses later without code changes.

## Changes

### 1. Course data model — `src/components/site/CourseCard.tsx`
- Extend the `Course` type with an optional field:
  - `language?: "en" | "ar" | "en-ar"` — language of instruction.

### 2. Seed data — `src/components/site/courseData.ts`
- Add `language: "en"` to every course in `sampleCourses`.

### 3. Course card — `src/components/site/CourseCard.tsx`
- In the meta footer (alongside `type` and `duration`), add a small label showing the language, e.g. a `Languages` icon from lucide + the localized label ("English" / "العربية" / "English & Arabic").
- Only render when `c.language` is set, so legacy entries don't break.

### 4. Course detail — `src/pages/CourseDetail.tsx`
- In the hero metadata row (next to instructor / duration / start date), add the language with a `Languages` icon.
- In the sticky pricing card's `<dl>`, add a row: **Language → English** (translated).

### 5. i18n strings
- `src/i18n/locales/en.json` and `ar.json` — add a new block:
  ```json
  "course": {
    "language": "Language",
    "languages": {
      "en": "English",
      "ar": "Arabic",
      "en-ar": "English & Arabic"
    }
  }
  ```
- Arabic equivalents: `"اللغة"`, `"الإنجليزية"`, `"العربية"`, `"الإنجليزية والعربية"`.

## Out of scope
- No filter for language in the catalogue (can be added later if you want).
- No translation of course titles/descriptions — UI labels only, as previously agreed.
