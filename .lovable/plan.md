## Goal

Give faculty their own sign-in experience, separate from learners, with a faculty role stored securely in the database and a dedicated post-login destination.

## What changes for users

- The faculty page CTA "Sign in" now opens a dedicated faculty sign-in page at `/faculty/auth` instead of the learner auth page.
- The faculty sign-in page has its own branded look, faculty-focused copy, and a single sign-in / register form for staff.
- After signing in, faculty land on a new `/faculty/dashboard` page (placeholder with quick links and a welcome state). Learners continue to land on `/my-learning`.
- Learners who try `/faculty/dashboard` are redirected to the faculty sign-in. Faculty who land on `/my-learning` still work normally (faculty can also be learners).
- The learner auth page is unchanged for course learners.

## Faculty sign-in page (`/faculty/auth`)

- Distinct visual treatment: faculty hero imagery, "For UDST faculty" badge, copy focused on teaching tools and course support.
- Email + password sign in and create account, plus Google sign in.
- Email is restricted to the `@udst.edu.qa` domain on both sign up and sign in (clear inline error if a non-UDST email is used).
- On successful sign up, the account is automatically granted the `faculty` role.
- A small link "Looking for course sign in?" routes back to `/auth` for learners who landed here by mistake.

## Faculty dashboard (`/faculty/dashboard`)

- New route, gated: only accessible to signed-in users with the `faculty` role. Others are redirected to `/faculty/auth` (or `/` if signed in as a learner with a friendly message).
- Initial content is a clean welcome panel with the faculty member's name, plus placeholder cards for: my courses, learner support resources, and contact for course production. This is a foundation we can build out later.

## Backend changes

A migration adds role infrastructure following the secure pattern (roles in their own table, never on `profiles`):

- New enum `app_role` with values `faculty`, `learner`, `admin`.
- New table `public.user_roles` (`id`, `user_id`, `role`, unique on `(user_id, role)`), RLS enabled.
- Security-definer function `public.has_role(_user_id uuid, _role app_role)` to check roles without recursive RLS.
- RLS policies on `user_roles`:
  - Users can view their own roles.
  - Inserts are only allowed via the signup trigger / server logic (no client self-assignment of `faculty`).
- The existing `handle_new_user` trigger is extended to also insert a `learner` role for every new account, and a `faculty` role when the signup email ends in `@udst.edu.qa` and originated from the faculty sign-up page (signalled via `raw_user_meta_data.signup_source = 'faculty'`).

## Frontend changes

- `src/lib/auth.ts`: add a `useUserRoles()` hook that reads the current user's roles from `user_roles`, plus an `isFaculty` helper. Add an optional `signupSource` parameter to `signUp` so the faculty page can tag the signup.
- `src/pages/FacultyAuth.tsx`: new page, faculty-styled, UDST email validation, calls `signUp` with `signupSource: 'faculty'`. Redirects to `/faculty/dashboard` on success.
- `src/pages/FacultyDashboard.tsx`: new gated page using `useAuth` + `useUserRoles`.
- `src/pages/Faculty.tsx`: change the primary CTA from `/auth?mode=signin` to `/faculty/auth`. If the user is already signed in as faculty, the CTA becomes "Go to faculty dashboard" → `/faculty/dashboard`.
- `src/components/site/Navbar.tsx`: in the user dropdown, show a "Faculty dashboard" item when `isFaculty` is true.
- `src/App.tsx`: register `/faculty/auth` and `/faculty/dashboard` routes.
- `src/i18n` (or wherever `faculty.*` and `auth.*` strings live): add new strings for faculty auth page, UDST-email error, and dashboard. British English, sentence case, no em dashes.

## Out of scope

- Admin tools for managing faculty accounts (can be added later).
- Faculty course management features beyond the placeholder dashboard.
- Migrating existing test accounts to the faculty role (can be done manually if needed).
