# Wali Aslam — Portfolio

A production-ready portfolio site for Wali Aslam (Web Development · App
Development · Digital Marketing), built with Next.js 14 (App Router),
TypeScript, Tailwind CSS, Framer Motion, and MongoDB Atlas. Includes a
secured admin dashboard for managing projects, blog posts, testimonials,
and contact messages without touching code.

## Before you launch — read this first

A few things are placeholders on purpose, so nothing fake ships to a real
visitor. Find and replace these before going live:

1. **Portrait photo** — the hero currently shows a labeled placeholder
   panel. Drop Wali's real photo into `public/images/portrait.jpg`, then
   swap the placeholder `<div>` in `components/Hero.tsx` for a `next/image`
   pointing at it. The panel is already sized and styled for it.
2. **`lib/content.ts`** — every stat (`X+` placeholders), the email, phone,
   location, and social links are marked `// TODO`. Edit them directly.
3. **First projects / testimonials / blog posts** — nothing is invented.
   The database starts empty (aside from one draft placeholder project from
   the seed script, so you can see the layout). Add real ones from
   `/admin`.

## Stack

- **Framework:** Next.js 14 (App Router, Server Components)
- **Styling:** Tailwind CSS, Framer Motion for animation
- **Database:** MongoDB Atlas via Mongoose
- **Auth:** JWT session cookie (`jose`), password hashing (`bcryptjs`),
  HTTP-only cookies, middleware-protected `/admin` routes
- **Validation:** Zod on every API route
- **Images:** admin panel accepts hosted image URLs (Cloudinary, S3, etc.)
  — see "Image hosting" below for wiring up direct uploads

## 1. Install

```bash
npm install
```

## 2. Configure environment variables

```bash
cp .env.example .env.local
```

Fill in `.env.local`:

- `MONGODB_URI` — from MongoDB Atlas (Database → Connect → Drivers). Free
  tier is enough to start. Make sure to add your IP (or `0.0.0.0/0` for
  serverless deploys) to the Atlas Network Access list.
- `AUTH_SECRET` — any long random string, e.g. `openssl rand -base64 48`.
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` — used once, by the seed script, to
  create your first admin login.
- `NEXT_PUBLIC_SITE_URL` — your real domain once deployed (used for SEO
  metadata and the sitemap).

## 3. Seed your first admin account

```bash
npm run seed
```

This creates your admin login and one placeholder project (left as a
draft, so it won't show publicly until you edit or replace it).

## 4. Run locally

```bash
npm run dev
```

Visit `http://localhost:3000` for the public site and
`http://localhost:3000/admin/login` to sign in.

## 5. Managing content

Everything in `/admin` is real, database-backed CRUD:

- **Projects** — case studies with a title, category, services, tech,
  challenge/solution/results, gallery, live/GitHub links, draft/published
  status, and a featured flag for the homepage spotlight slot.
- **Messages** — every contact-form submission lands here. Mark
  read/unread/archived, or delete.
- **Testimonials** — add client quotes; toggle which ones show on the
  homepage.
- **Blog** — full posts with SEO title/description overrides, tags, and
  draft/published status.

Nothing publishes to the live site until you explicitly set it to
"Published" — drafts are visible only in `/admin`.

## Image hosting

To keep the initial setup simple, the admin forms take image **URLs**
directly — paste a link from Cloudinary's dashboard uploader, an S3
bucket, or any other host, and it's stored as-is (MongoDB never stores
image binaries).

To wire up in-app uploads later:

1. Add `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
   to `.env.local` (a free Cloudinary account is enough).
2. Add an unsigned or signed upload API route (`app/api/admin/upload/route.ts`)
   that forwards a file to Cloudinary's upload endpoint and returns the URL.
3. Replace the URL `<input>` fields in `components/admin/ProjectForm.tsx`
   and `PostForm.tsx` with a file picker that calls that route.

## Deployment (Vercel, recommended)

1. Push this project to a GitHub repo.
2. Import it in Vercel.
3. Add the same environment variables from `.env.local` in the Vercel
   project settings (Production + Preview).
4. Deploy. Run `npm run seed` once against your production `MONGODB_URI`
   (locally, with `.env.local` temporarily pointed at prod, or via a
   one-off script) to create your admin login.
5. Set `NEXT_PUBLIC_SITE_URL` to your real domain and redeploy so
   metadata, Open Graph tags, and the sitemap are correct.

Any other Node-compatible host (Render, Railway, a VPS with `next start`)
works the same way — this project has no Vercel-specific code.

## Project structure

```
app/
  page.tsx                 Home page (composes all sections)
  project/[slug]/page.tsx  Case study pages
  blog/                    Blog index + post pages
  admin/                   Dashboard UI (protected by middleware.ts)
  api/                     Public + admin API routes
components/                Public site sections
components/admin/          Dashboard UI pieces (sidebar, forms, tables)
lib/
  content.ts                Editable site copy (headline, stats, services…)
  data.ts                    Server-side DB reads for public pages
  models/                    Mongoose schemas
  auth.ts / adminGuard.ts    Session + route protection
  validations.ts              Zod schemas for every API route
scripts/seed.ts             Creates the first admin login
middleware.ts                Protects /admin/* pages
```

## Design system

- **Colors:** near-black warm background (`bg`), a single brass/gold
  accent (`brass`) — deliberately not a generic blue/violet dev-portfolio
  palette.
- **Type:** Fraunces (serif, display) + Inter (body/UI) + IBM Plex Mono
  (labels, numbers, eyebrows) — loaded via Google Fonts `<link>` tags in
  `app/layout.tsx` so no build-time font fetch is required.
- All tokens live in `tailwind.config.ts` — change the palette or fonts
  there and it propagates everywhere.

## SEO

- Per-page metadata (`generateMetadata`) on the home page, every project,
  and every blog post.
- `Person` and `WebSite` JSON-LD in the root layout; `CreativeWork`
  JSON-LD on project pages; `Article` JSON-LD on blog posts.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt` automatically from published content.
