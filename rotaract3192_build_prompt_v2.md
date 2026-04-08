# Build Prompt — Rotaract District 3192 Web Portal
**Use this prompt with your AI coding assistant (Claude Code, Cursor, Copilot, etc.)**
**Version:** 2.0 | **Stack:** Node.js · Cloudflare (Pages + Workers + D1 + R2)

---

## ⚠️ READ THIS FIRST — TWO-PHASE BUILD

This project is built in **two phases**. You must complete Phase 1 fully before touching any backend code.

**Phase 1 — Frontend Only**
Build the complete frontend: all pages, all UI components, all user flows — using hardcoded mock data. No real API calls. No database. No auth logic. Just the UI.

**→ When Phase 1 is complete, stop and ask:**
> *"The frontend is complete. All pages are built and working with mock data. Are you ready for me to integrate the backend (Cloudflare Workers + D1 + R2)?"*

Wait for confirmation before proceeding to Phase 2.

**Phase 2 — Backend Integration**
Replace all mock data with real Cloudflare Workers API calls, wire up D1 (SQLite) as the database, connect R2 for file storage, and implement auth.

---

## Project Overview

A unified web portal for **Rotaract District 3192** — a nonprofit youth organisation.
Serves four audiences: members, club executives, the district team, and the public.

**Domain:** `rotaract3192.org`
**Go-live target:** June 2026
**Design approach:** Mobile-first, PWA-ready, accessibility-conscious

---

## Hosting Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Frontend | Cloudflare Pages | Static hosting, global CDN, free tier |
| Backend API | Cloudflare Workers | Serverless Node.js-compatible runtime |
| Database | Cloudflare D1 | Serverless SQLite, bound to Workers |
| File Storage | Cloudflare R2 | S3-compatible object storage, no egress fees |
| Routing | Cloudflare Pages routing + Workers routes | Path-based, no separate gateway |

**Why this stack:** Zero cold-start latency, globally distributed, generous free tier, and R2 has no egress fees — ideal for a nonprofit with budget constraints.

> **Note on Node.js:** Cloudflare Workers supports Node.js APIs via the `nodejs_compat` compatibility flag. Use Hono.js as the backend framework — it's lightweight, Workers-native, and has a familiar Express-like API.

---

## URL Structure

```
rotaract3192.org/
├── /*                    → Cloudflare Pages (frontend)
├── /clubs/{slug}/*       → Cloudflare Pages (dynamic club pages)
├── /api/*                → Cloudflare Worker (Core API)
├── /events/*             → Cloudflare Pages (events frontend) + Worker API
└── /webhook/whatsapp     → Cloudflare Worker (WhatsApp service)
```

---

---

# PHASE 1 — FRONTEND ONLY

> Build all pages with hardcoded mock data. All API calls should be stubbed with a `mockFetch()` helper that returns realistic fake data. Do not write any Worker, D1, or R2 code in this phase.

---

## Tech Stack for Phase 1

- **Framework:** Plain HTML + vanilla JS, or a lightweight framework like Astro (preferred for SSG/SSR mix) — no heavy SPA framework
- **Styling:** Tailwind CSS
- **Mock data:** Create a `/src/mock/` folder with JSON files for clubs, events, members, leaderboard, etc.
- **Routing:** Cloudflare Pages file-based routing (`/functions` directory pattern, or just static HTML files per route)

---

## Pages to Build

### District Site

#### `/` — Home
- Hero section: district name, tagline, CTA buttons ("Explore Clubs", "Upcoming Events")
- Upcoming events strip (3–4 cards): event name, date, host club, ticket type badge
- District feed highlights (2–3 posts): image/text previews
- Stats bar: number of clubs, members, events this year
- CTA to join / find your club

#### `/about`
- District 3192 overview: mission, vision, values
- Current district leadership (Governor, team) with photos and roles
- History / founding story section
- Rotaract International link and context

#### `/news`
- Feed of district posts (image, video embed, text)
- Filter by type (announcement, achievement, photo)
- Infinite scroll or "Load more" pagination

#### `/hall-of-fame`
- Top members leaderboard (photo, name, club, points)
- Filter by year / club
- Recognition badges (Most Active, Best Leader, etc.)

#### `/newsletter`
- Grid of newsletter issues (thumbnail, title, club, date)
- "Download PDF" button per issue (links to R2 URL — use placeholder in Phase 1)

#### `/resources`
- Categorised list of shared documents (guidelines, forms, templates)
- Download button per resource

#### `/brand-centre`
- District logos (colour variants) with download buttons
- Official colour palette swatches (hex codes)
- Typography guide
- Brand usage do's and don'ts

#### `/clubs`
- Club directory grid with search bar and filter (by city/region)
- Each club card: logo, name, city, member count, "View Club" button
- Map view toggle (placeholder in Phase 1)

#### `/jobs`
- Job and internship listings
- Filter by type (job / internship), company
- Each listing: title, company, type badge, brief description, "Apply" button (opens `apply_url`)
- Auto-expired listings show a "Closed" badge

---

### Club Landing Pages

#### `/clubs/{slug}`
- Club hero: banner image, club logo overlay, club name, city
- Themed accent colour (use CSS custom property `--club-color` set from mock data)
- About section: founded date, charter date, about text
- Upcoming events (2–3 cards linking to `/events/{slug}`)
- Public member count
- Social links row (Instagram, LinkedIn, WhatsApp group)
- Contact button

#### `/clubs/{slug}/events`
- All events by this club
- Filter by status: upcoming / past
- Same event card design as the main events page

---

### Events Portal

#### `/events`
- Browse all upcoming events (grid/list toggle)
- Filter: by club, type (professional/social/service), date range, ticket type (free/paid)
- Event card: banner, title, date, venue, host club logo, ticket badge, "Register" button

#### `/events/{slug}`
- Full event detail: banner, title, description, date/time, venue with map embed (placeholder)
- Ticket tiers section (Free / Paid / Early Bird) with pricing and availability
- "Register Now" CTA (opens registration modal)
- Host club mini-card
- Share buttons

#### `/events/{slug}/register`
- Registration form: name (pre-filled if logged in), email, phone, ticket tier selector
- Order summary panel
- "Pay Now" button (Razorpay — stubbed in Phase 1, shows a mock success screen)
- Free events: "Confirm Registration" button directly

#### `/events/{slug}/checkin` *(organiser view)*
- QR scanner UI (camera feed placeholder in Phase 1)
- Manual check-in search bar
- Attendee count: checked in / total registered
- Recent check-ins list (name, time)

---

### Member Portal (authenticated pages)

These pages should render with mock logged-in user data. Auth gate UI (redirect to login) should be shown if user is not "logged in" — use a mock `isLoggedIn` boolean in Phase 1.

#### `/login`
- Email input → "Send OTP" button
- OTP input screen (second step)
- Clean, minimal layout

#### `/dashboard`
- Welcome banner with member name and club
- Quick stats: points this month, events attended, courses completed
- Upcoming events (registered ones)
- Recent feed posts from their club
- Shortcuts: My Profile, LMS, MOM recorder

#### `/profile`
- Editable profile: name, email, phone, WhatsApp number, DOB, profile photo upload
- Membership status badge
- Points total and recent points history table
- Achievements / badges earned

#### `/lms`
- Course catalogue grid: thumbnail, title, category, progress bar (if started), RI cert badge
- Filter by category, completion status

#### `/lms/{courseId}`
- Course detail: title, description, lessons list
- Video player placeholder per lesson
- Progress tracker
- "Claim Certificate" button (active when all lessons complete)

#### `/mom`
- MOM list for the user's club (secretary/president view)
- Each MOM card: meeting date, title, status (transcribed / pending)
- "New MOM" button

#### `/mom/new`
- Audio upload or record-in-browser UI (placeholder for Phase 1)
- Meeting date picker, title field
- Transcription status indicator (shows "Processing…" mock state)

#### `/mom/{id}`
- MOM detail: meeting date, title, transcript text
- Action items list (type: decision / action / note, assigned to, due date)

#### `/mentorship`
- Mentor discovery: list of available mentors (photo, name, expertise tags)
- My sessions: upcoming and past mentorship slots
- "Book a slot" modal (calendar picker placeholder)

#### `/leaderboard`
- District-wide points leaderboard table
- Toggle: District / My Club
- Filter by year / month

---

### Admin Panel (district team only)

Show an "Access Denied" screen for non-admin roles in Phase 1. Use mock `role = 'district_admin'` to preview.

#### `/admin`
- Dashboard: key metrics (total members, events this month, pending approvals count)
- Quick links to all admin sections

#### `/admin/clubs`
- Club list with status (active / inactive)
- "Add Club" form: name, city, charter date, theme colour picker, logo upload
- Edit / Deactivate actions

#### `/admin/members`
- Member table with search and role filter
- Edit role, membership status
- View points history

#### `/admin/events`
- All events across all clubs
- Approve / reject events submitted by clubs
- View registrations per event

#### `/admin/feeds`
- Feed post approval queue
- Preview post, approve or reject with optional rejection note

#### `/admin/campaigns`
- Crowdfunding campaign approval queue
- Campaign detail preview, approve / reject

#### `/admin/announcements`
- Compose and send WhatsApp broadcast (form: message template selector, recipient scope)
- Broadcast history log

#### `/admin/audit`
- Admin action log table: admin name, action, target, timestamp
- Filter by admin, action type, date range

---

## Design System (apply consistently across all pages)

- **Primary colour:** Rotaract gold/blue — use `#003F8A` (Rotaract blue) and `#F5A623` (gold) as defaults
- **Club accent:** Each club page injects `--club-color` via inline CSS from mock data
- **Font:** Inter (Google Fonts) — weights 400, 500, 600, 700
- **Border radius:** 8px cards, 4px inputs, pill badges
- **Shadows:** Subtle `box-shadow: 0 1px 4px rgba(0,0,0,0.08)` on cards
- **Spacing:** 8px base unit grid
- **Responsive breakpoints:** 375px (mobile), 768px (tablet), 1280px (desktop)
- **Navigation:** Sticky top nav with mobile hamburger menu
- **Toast notifications:** Use for form success/error feedback
- **Loading states:** Skeleton loaders on all data-fetching sections

---

## Mock Data Files to Create

Create `/src/mock/` with the following JSON files:

- `clubs.json` — 5–8 sample clubs with all fields (name, slug, city, logo_url, theme_color, member_count, etc.)
- `events.json` — 6–10 sample events (mix of free/paid, upcoming/past)
- `members.json` — 10–15 sample members with points, roles
- `leaderboard.json` — Top 10 ranked members
- `courses.json` — 4–6 sample LMS courses with lessons
- `moms.json` — 3–4 sample MOMs with transcript text and action items
- `jobs.json` — 4–6 job/internship listings
- `feeds.json` — 6–8 sample district feed posts
- `newsletters.json` — 4 sample newsletter issues

All mock data should be realistic (use actual Rotary terminology, Indian names, real city names from Tamil Nadu/Karnataka etc.).

---

## Phase 1 Completion Checklist

Before stopping, verify all of the following:

- [ ] All routes listed above render without errors
- [ ] All pages are responsive on mobile (375px) and desktop (1280px)
- [ ] Navigation works between all pages
- [ ] Mock data renders correctly in all list/table/card views
- [ ] Forms show validation errors on bad input
- [ ] Mock auth gate works (protected pages redirect to `/login`)
- [ ] Loading skeleton states are implemented on data sections
- [ ] PWA manifest and basic service worker are in place
- [ ] No real API calls, no Worker code, no D1/R2 code exists yet

**→ Once all boxes are checked, output this message exactly:**
> *"✅ Phase 1 complete. The full frontend is built across all pages with mock data. All routes work, mobile-responsive, and the design system is consistent. Are you ready to proceed to Phase 2 — backend integration with Cloudflare Workers, D1, and R2?"*

---

---

# PHASE 2 — BACKEND INTEGRATION

> Only begin this phase after the user explicitly confirms they are ready.

---

## Backend Stack

- **Runtime:** Cloudflare Workers (Node.js compatibility mode — add `nodejs_compat` flag in `wrangler.toml`)
- **Framework:** Hono.js (Workers-native, Express-like routing)
- **Database:** Cloudflare D1 (SQLite, bound as `DB` in `wrangler.toml`)
- **Storage:** Cloudflare R2 (bound as `BUCKET` in `wrangler.toml`)
- **Auth:** JWT (using `jose` library — Web Crypto API compatible) + OTP via ZeptoMail
- **Scheduled jobs:** Cloudflare Workers Cron Triggers (defined in `wrangler.toml`)

---

## `wrangler.toml` Configuration

```toml
name = "rotaract3192-api"
main = "src/worker.ts"
compatibility_date = "2024-09-23"
compatibility_flags = ["nodejs_compat"]

[[d1_databases]]
binding = "DB"
database_name = "rotaract3192"
database_id = "<your-d1-database-id>"

[[r2_buckets]]
binding = "BUCKET"
bucket_name = "rotaract3192"

[triggers]
crons = [
  "0 2 * * *",    # Daily 8am IST (2am UTC) — birthdays
  "30 3 * * 1",   # Monday 9am IST — weekly digest
  "0 18 1 * *",   # 1st of month 12am IST — monthly reports
]

[vars]
FRONTEND_URL = "https://rotaract3192.org"
```

---

## D1 Database Schema

Run these migrations via `wrangler d1 execute rotaract3192 --file=./migrations/001_init.sql`.

```sql
-- Core identity
CREATE TABLE districts (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  number TEXT NOT NULL,
  logo_url TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE clubs (
  id TEXT PRIMARY KEY,
  district_id TEXT REFERENCES districts(id),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'active',
  logo_url TEXT,
  cover_url TEXT,
  theme_color TEXT DEFAULT '#003F8A',
  founded_date TEXT,
  charter_date TEXT,
  about TEXT,
  instagram_url TEXT,
  linkedin_url TEXT,
  whatsapp_group_url TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE users (
  id TEXT PRIMARY KEY,
  club_id TEXT REFERENCES clubs(id),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  dob TEXT,
  whatsapp_number TEXT,
  profile_pic_url TEXT,
  membership_status TEXT DEFAULT 'active',
  joined_at TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE user_roles (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  role TEXT NOT NULL CHECK(role IN ('member','club_secretary','club_president','district_team','district_admin')),
  scope TEXT NOT NULL CHECK(scope IN ('club','district')),
  club_id TEXT REFERENCES clubs(id)
);

-- Auth
CREATE TABLE otp_tokens (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  otp TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  used INTEGER DEFAULT 0
);

CREATE TABLE refresh_tokens (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  token TEXT UNIQUE NOT NULL,
  expires_at TEXT NOT NULL,
  revoked INTEGER DEFAULT 0
);

-- Events
CREATE TABLE events (
  id TEXT PRIMARY KEY,
  club_id TEXT REFERENCES clubs(id),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  type TEXT,
  description TEXT,
  venue TEXT,
  maps_url TEXT,
  start_at TEXT NOT NULL,
  end_at TEXT,
  capacity INTEGER,
  status TEXT DEFAULT 'draft',
  banner_url TEXT,
  created_by TEXT REFERENCES users(id),
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE ticket_tiers (
  id TEXT PRIMARY KEY,
  event_id TEXT REFERENCES events(id),
  name TEXT NOT NULL,
  price INTEGER DEFAULT 0,
  capacity INTEGER,
  available_from TEXT,
  available_until TEXT
);

CREATE TABLE registrations (
  id TEXT PRIMARY KEY,
  event_id TEXT REFERENCES events(id),
  user_id TEXT REFERENCES users(id),
  ticket_tier_id TEXT REFERENCES ticket_tiers(id),
  payment_status TEXT DEFAULT 'pending',
  qr_code TEXT,
  checked_in_at TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE attendance (
  id TEXT PRIMARY KEY,
  event_id TEXT REFERENCES events(id),
  user_id TEXT REFERENCES users(id),
  checked_in_at TEXT DEFAULT (datetime('now')),
  checked_in_by TEXT REFERENCES users(id),
  method TEXT CHECK(method IN ('qr','manual'))
);

CREATE TABLE payments (
  id TEXT PRIMARY KEY,
  registration_id TEXT REFERENCES registrations(id),
  amount INTEGER NOT NULL,
  currency TEXT DEFAULT 'INR',
  razorpay_order_id TEXT,
  razorpay_payment_id TEXT,
  status TEXT DEFAULT 'pending',
  receipt_url TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Engagement
CREATE TABLE points (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  club_id TEXT REFERENCES clubs(id),
  event_id TEXT REFERENCES events(id),
  action TEXT NOT NULL,
  points_awarded INTEGER NOT NULL,
  awarded_by TEXT REFERENCES users(id),
  created_at TEXT DEFAULT (datetime('now'))
);

-- MOM
CREATE TABLE moms (
  id TEXT PRIMARY KEY,
  club_id TEXT REFERENCES clubs(id),
  meeting_date TEXT NOT NULL,
  title TEXT NOT NULL,
  transcript_text TEXT,
  audio_url TEXT,
  created_by TEXT REFERENCES users(id),
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE mom_items (
  id TEXT PRIMARY KEY,
  mom_id TEXT REFERENCES moms(id),
  type TEXT CHECK(type IN ('decision','action','note')),
  content TEXT NOT NULL,
  assigned_to TEXT REFERENCES users(id),
  due_date TEXT
);

-- LMS
CREATE TABLE courses (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT,
  thumbnail_url TEXT,
  is_ri_cert INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE lessons (
  id TEXT PRIMARY KEY,
  course_id TEXT REFERENCES courses(id),
  title TEXT NOT NULL,
  video_url TEXT,
  order_index INTEGER NOT NULL
);

CREATE TABLE completions (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  lesson_id TEXT REFERENCES lessons(id),
  course_id TEXT REFERENCES courses(id),
  completed_at TEXT DEFAULT (datetime('now')),
  certificate_url TEXT
);

-- Content
CREATE TABLE feeds (
  id TEXT PRIMARY KEY,
  club_id TEXT REFERENCES clubs(id),
  posted_by TEXT REFERENCES users(id),
  content_type TEXT,
  caption TEXT,
  media_url TEXT,
  status TEXT DEFAULT 'pending' CHECK(status IN ('pending','approved','rejected')),
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE mentorships (
  id TEXT PRIMARY KEY,
  mentor_id TEXT REFERENCES users(id),
  mentee_id TEXT REFERENCES users(id),
  slot_start TEXT,
  slot_end TEXT,
  meet_link TEXT,
  status TEXT DEFAULT 'pending',
  notes TEXT
);

CREATE TABLE jobs (
  id TEXT PRIMARY KEY,
  posted_by_user_id TEXT REFERENCES users(id),
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  type TEXT CHECK(type IN ('job','internship')),
  description TEXT,
  apply_url TEXT,
  expires_at TEXT
);

-- Publishing
CREATE TABLE newsletters (
  id TEXT PRIMARY KEY,
  club_id TEXT REFERENCES clubs(id),
  title TEXT NOT NULL,
  file_url TEXT,
  published_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE campaigns (
  id TEXT PRIMARY KEY,
  club_id TEXT REFERENCES clubs(id),
  title TEXT NOT NULL,
  goal_amount INTEGER NOT NULL,
  raised_amount INTEGER DEFAULT 0,
  description TEXT,
  status TEXT DEFAULT 'pending',
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE donations (
  id TEXT PRIMARY KEY,
  campaign_id TEXT REFERENCES campaigns(id),
  user_id TEXT REFERENCES users(id),
  amount INTEGER NOT NULL,
  razorpay_payment_id TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE merchandise (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT CHECK(type IN ('rotaract','business')),
  price INTEGER,
  image_url TEXT,
  external_url TEXT,
  owner_user_id TEXT REFERENCES users(id)
);

-- Audit
CREATE TABLE admin_audit_log (
  id TEXT PRIMARY KEY,
  admin_user_id TEXT REFERENCES users(id),
  action TEXT NOT NULL,
  entity_type TEXT,
  entity_id TEXT,
  detail TEXT, -- JSON string (D1 has no native JSONB)
  created_at TEXT DEFAULT (datetime('now'))
);
```

---

## R2 Bucket Structure

```
rotaract3192 (R2 bucket)
├── uploads/
│   ├── profiles/          (profile pictures — 5 MB cap)
│   ├── clubs/             (logos, banners — 5 MB cap)
│   ├── events/            (banners, gallery — 5 MB cap)
│   └── feeds/             (feed images, posters — 5 MB cap)
├── documents/
│   ├── moms/              (MOM audio recordings — 20 MB cap)
│   ├── resources/         (shared docs — 20 MB cap)
│   ├── newsletters/       (PDFs — 20 MB cap)
│   ├── receipts/          (auto-generated payment receipts)
│   └── certificates/      (auto-generated LMS certificates)
├── lms/
│   └── videos/            (prefer YouTube/Vimeo embeds)
└── reports/               (auto-generated monthly reports)
```

**Access rules:**
- Public objects (logos, banners, feed images): serve via `r2.dev` public URL or Cloudflare custom domain
- Private objects (receipts, MOMs, certificates): generate presigned URLs with 1-hour expiry using R2's `createPresignedUrl()`
- All uploads go through the Worker API — frontend never writes to R2 directly
- Enforce file type and size in the Worker before writing to R2

---

## Worker API Routes

Implement all of the following in Hono.js. Group routes by module.

```
POST   /api/auth/otp/send
POST   /api/auth/otp/verify
POST   /api/auth/refresh
POST   /api/auth/logout

GET    /api/clubs
POST   /api/clubs                    (admin)
GET    /api/clubs/:slug
PUT    /api/clubs/:id                (admin)

GET    /api/members/me
PUT    /api/members/me
GET    /api/members/:id              (admin)
GET    /api/members/me/points

GET    /api/feeds
POST   /api/feeds                    (member)
PUT    /api/feeds/:id/approve        (admin)
PUT    /api/feeds/:id/reject         (admin)

GET    /api/lms/courses
GET    /api/lms/courses/:id
POST   /api/lms/courses/:id/lessons/:lessonId/complete
GET    /api/lms/my-completions

GET    /api/mom
POST   /api/mom
GET    /api/mom/:id
POST   /api/mom/:id/transcribe       (triggers STT)

GET    /api/leaderboard
GET    /api/leaderboard/club/:clubId

GET    /api/mentorship/mentors
POST   /api/mentorship/book
GET    /api/mentorship/my-sessions

GET    /api/jobs
POST   /api/jobs                     (admin/member)

GET    /api/events
POST   /api/events                   (club execs)
GET    /api/events/:slug
POST   /api/events/:id/register
POST   /api/payments/webhook         (Razorpay webhook)
POST   /api/events/:id/checkin       (QR scan)

GET    /api/campaigns
POST   /api/campaigns                (club)
PUT    /api/campaigns/:id/approve    (admin)
POST   /api/campaigns/:id/donate

GET    /api/newsletters
POST   /api/newsletters              (admin)

GET    /api/reports                  (admin)

POST   /api/admin/broadcast          (WhatsApp broadcast trigger)
GET    /api/admin/audit-log          (admin)

GET    /api/upload/presign           (returns presigned R2 upload URL)

POST   /webhook/whatsapp
GET    /webhook/whatsapp             (Meta verification challenge)
```

---

## Auth Implementation

```
OTP Login Flow:
1. POST /api/auth/otp/send { email }
   → Generate 6-digit OTP
   → Store in D1 otp_tokens (expires in 10 min)
   → Send via ZeptoMail REST API

2. POST /api/auth/otp/verify { email, otp }
   → Validate OTP from D1
   → Mark OTP as used
   → Return signed JWT (15 min) + refresh token (7 days)
   → Store refresh token in D1 refresh_tokens

3. POST /api/auth/refresh { refreshToken }
   → Validate refresh token from D1
   → Return new JWT

4. POST /api/auth/logout { refreshToken }
   → Set revoked = 1 in D1 refresh_tokens
```

JWT implementation: use `jose` library (Web Crypto compatible — works in Workers without Node.js crypto). Store `JWT_SECRET` as a Worker secret (`wrangler secret put JWT_SECRET`).

Auth middleware for Hono:
```typescript
const authMiddleware = async (c, next) => {
  const token = c.req.header('Authorization')?.replace('Bearer ', '')
  if (!token) return c.json({ error: 'Unauthorized' }, 401)
  try {
    const payload = await jwtVerify(token, secret)
    c.set('user', payload)
    await next()
  } catch {
    return c.json({ error: 'Invalid token' }, 401)
  }
}
```

---

## Cloudflare Cron Triggers (Scheduled Jobs)

Define in `wrangler.toml` and implement a `scheduled` export handler:

```typescript
export default {
  async scheduled(event, env, ctx) {
    switch (event.cron) {
      case '0 2 * * *':   // Daily 8am IST
        await runBirthdayJob(env)
        break
      case '30 3 * * 1':  // Monday 9am IST
        await runWeeklyDigest(env)
        break
      case '0 18 1 * *':  // 1st of month
        await runMonthlyReport(env)
        break
    }
  }
}
```

| Cron | Job | Action |
|------|-----|--------|
| `0 2 * * *` | Birthday detection | Query D1 for today's DOBs → trigger WhatsApp broadcast |
| `30 3 * * 1` | Weekly digest | Compile approved feeds → send via ZeptoMail |
| `0 18 1 * *` | Monthly reports | Generate stats → write PDF to R2 `/reports/` |
| Dynamic (event-based) | Event reminders | Use Cloudflare Queues or store reminder timestamps in D1, check on daily cron |
| Dynamic | Dues reminders | Same pattern — check due dates on daily cron |

> **Note:** Cloudflare Workers Cron does not support sub-minute scheduling. For event-specific reminders (24hr/1hr before), query D1 on the daily cron to find events starting within the next 24 hours and dispatch broadcasts accordingly.

---

## Environment Variables / Secrets

Store all secrets via `wrangler secret put <KEY>`. Never commit to GitHub.

```bash
wrangler secret put JWT_SECRET
wrangler secret put JWT_REFRESH_SECRET
wrangler secret put ZEPTO_MAIL_TOKEN
wrangler secret put RAZORPAY_KEY_ID
wrangler secret put RAZORPAY_KEY_SECRET
wrangler secret put RAZORPAY_WEBHOOK_SECRET
wrangler secret put WHATSAPP_TOKEN
wrangler secret put WHATSAPP_PHONE_NUMBER_ID
wrangler secret put WHATSAPP_VERIFY_TOKEN
wrangler secret put GOOGLE_MAPS_API_KEY
wrangler secret put GOOGLE_SERVICE_ACCOUNT_KEY
wrangler secret put GOOGLE_SPEECH_API_KEY
wrangler secret put GA4_MEASUREMENT_ID
wrangler secret put GA4_API_SECRET
```

Non-secret vars go in `wrangler.toml` under `[vars]`.

---

## Security Checklist

- JWT with 15-min expiry + 7-day refresh token stored in D1
- OTP login only — no passwords
- All D1 queries filter by `club_id` to isolate club data
- R2 private objects served only via presigned URLs (1-hour expiry)
- File type + size validated in Worker before R2 write
- Razorpay webhook signature verified before processing
- Meta webhook challenge verified on `GET /webhook/whatsapp`
- Rate limit on `/api/auth/*` using Cloudflare Rate Limiting rules (set in dashboard)
- DPDP Act: collect consent on signup, support anonymise-on-request
- Admin audit log: every admin write action logged to `admin_audit_log` table

---

## Replacing Mock Data with Real API Calls

In Phase 2, replace the `mockFetch()` calls in the frontend with real `fetch('/api/...')` calls. Steps:

1. Delete `/src/mock/` JSON files (or keep for local dev with a `USE_MOCK` flag)
2. Update each page/component to call the real Worker API endpoint
3. Handle loading, error, and empty states (skeletons already built in Phase 1)
4. Add the JWT token to the `Authorization: Bearer <token>` header on all authenticated requests
5. Store JWT + refresh token in `localStorage` (or `httpOnly` cookie — prefer cookie for security)

---

## Deployment

```bash
# Deploy frontend
npx wrangler pages deploy ./dist --project-name rotaract3192

# Deploy Worker (API)
npx wrangler deploy

# Run D1 migrations
npx wrangler d1 execute rotaract3192 --file=./migrations/001_init.sql --remote

# Create R2 bucket
npx wrangler r2 bucket create rotaract3192
```

Branch strategy:
- `main` → production (auto-deploy via Cloudflare Pages GitHub integration)
- `staging` → staging environment (separate Pages project)
- `feature/*` → local dev only, PR into `staging`

---

## Non-Functional Targets

| Metric | Target |
|--------|--------|
| Daily active users | 200–300 |
| Peak concurrent (events) | 500–1,000 |
| Response time | < 100ms at edge (Workers global deployment) |
| Acceptable downtime | Cloudflare SLA 99.99% — no planned downtime needed |
| Storage growth | ~20–25 GB/year — well within R2 limits |
| Backup | D1 automated time-travel (30 days) + weekly export to R2 |

---

*Architecture owner: District Tech Chair, Rotaract District 3192. Handover required at every Rotary year-end.*
