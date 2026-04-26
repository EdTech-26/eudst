## Demo learner journey for "Applied Data Analytics for Business" (DACS2101)

A fully UI-only experience with **no backend**. A lightweight `localStorage` layer simulates accounts and enrollments, so the entire flow works end-to-end and resets simply by clearing site data. Every other course card stays as-is (non-clickable preview) so the demo course stands out as the live one.

### The flow

`/courses` → click DACS2101 card → **Course detail page** → click *Enroll now* → **Sign up / Sign in** (fake) → **Checkout** (fake) → **My Learning** dashboard

---

### 1. Fake auth + enrollment store (localStorage)

**New file: `src/lib/demoAuth.ts`**
- Tiny module wrapping `localStorage` with a React hook (`useDemoAuth`) that returns `{ user, signUp, signIn, signOut }`.
- `user` shape: `{ name, email, createdAt }` — no real password validation, just stored.
- A second helper `useEnrollments()` returns `{ enrollments, enroll(courseCode), isEnrolled(courseCode) }` — also localStorage-backed.
- A small custom event (`demo-auth-changed`) is dispatched on writes so the navbar reactively shows the signed-in state.

This keeps everything synchronous, simple, and avoids pulling in any auth library.

### 2. Extend course data with rich detail fields

**Edit `src/components/site/courseData.ts`**
- Add optional fields to the `Course` type: `price`, `startDate`, `outcomes[]`, `syllabus[]` (week → topic), `instructor` ({ name, title, bio, initials }), `longDesc`.
- Populate the full detail set **only** for `DACS2101` (the live demo course). Other courses keep their existing minimal data.
- Add a `hasDetailPage` flag (true for DACS2101 only) so the catalogue knows which card is clickable.

### 3. Course detail page

**New file: `src/pages/CourseDetail.tsx`** — route `/courses/:code`
- Lookup course by `:code` from `sampleCourses`. If not found *or* `hasDetailPage` is false → friendly "Course detail coming soon" state with a link back to `/courses`.
- Layout (matches existing site styling — `font-display`, `bg-secondary`, `Card`, soft shadows):
  - **Hero band**: college badge, course code, title, short description, instructor name + duration + start date inline.
  - **Two-column body** (stacks on mobile):
    - Left: *About this course* (longDesc), *What you'll learn* (outcomes checklist), *Syllabus* (week-by-week accordion using existing `Accordion` component), *Your instructor* (Avatar with initials, name, title, bio).
    - Right: **sticky pricing card** with price, duration, start date, delivery type, and a primary `Enroll now` button. If already enrolled → button becomes `Go to My Learning` linking to `/my-learning`.

### 4. Make the DACS2101 catalogue card clickable

**Edit `src/components/site/CourseCard.tsx`**
- If `c.hasDetailPage`, wrap the card in a `<Link to={"/courses/" + c.code}>` and add a subtle "View course →" hint in the footer area on hover.
- Other cards remain visually identical and non-clickable, preserving the catalogue look.

### 5. Enroll flow → auth gate → checkout

**New file: `src/pages/Enroll.tsx`** — route `/enroll/:code`
- This page is the orchestrator:
  - If no `user` in localStorage → show a **Sign up / Sign in** card (tabs). Fields: name (signup only), email, password. No real validation beyond non-empty + email format via `zod`. On submit → `signUp`/`signIn` → continue to checkout step.
  - If signed in but not enrolled → show **Checkout** card: order summary (course title, price), fake payment fields (card number, expiry, CVC — all just visual, with helper text "This is a demo — no real payment is processed"), and a `Pay & enroll` button.
  - On `Pay & enroll`: simulate ~1s delay (spinner), call `enroll(code)`, then redirect to `/my-learning` with a sonner toast: "You're enrolled in Applied Data Analytics for Business".
  - If already enrolled → redirect straight to `/my-learning`.

### 6. My Learning dashboard

**New file: `src/pages/MyLearning.tsx`** — route `/my-learning`
- Auth-gated: if no user, redirect to `/courses`.
- Header: "Welcome back, {name}" + sign-out button.
- Grid of enrolled course cards (reuses `CourseCard`-style layout) each with a `Continue learning` button. Clicking it opens a friendly modal: "Your learning environment will open here in the live product." (keeps the demo self-contained — no broken external links).
- Empty state: "You haven't enrolled in any courses yet" + button back to `/courses`.

### 7. Navbar updates

**Edit `src/components/site/Navbar.tsx`**
- Subscribe to `useDemoAuth`.
- When signed out: existing CTAs unchanged.
- When signed in: replace the *Sign in* / *Get started* buttons with an avatar/initials chip linking to `/my-learning` and a small `Sign out` action (dropdown menu using existing `DropdownMenu` component).

### 8. Routing

**Edit `src/App.tsx`** — add three routes (above the catch-all):
- `/courses/:code` → `CourseDetail`
- `/enroll/:code` → `Enroll`
- `/my-learning` → `MyLearning`

### 9. Subtle catalogue affordance

**Edit `src/pages/Catalogue.tsx`**
- Above the grid, add a small one-line note: *"Try the full demo: click **Applied Data Analytics for Business** to explore a sample course end-to-end."* Styled as a soft accent banner so it doesn't dominate the page but tells a reviewer where to click.

---

### What this gives you
- A complete, demoable journey from landing → catalogue → course → signup → payment → dashboard.
- Zero backend, zero secrets, no Pro plan needed. Resets cleanly for each new viewer.
- Fully extensible later: swapping `demoAuth.ts` for real Lovable Cloud auth + a `enrollments` table is a focused change without touching page layouts.
- Other courses remain visually consistent in the catalogue — the demo course is the clear "try me" path.

### Out of scope (happy to add later)
- Real authentication / database persistence
- Real Stripe (test mode) checkout
- Course progress tracking, lesson player, or actual content delivery
- Email confirmations or receipts