# New Client Setup Checklist

This is a reusable website template. Follow all these easy steps in order for every new client.

---

## Step 1 — Copy the Template

```bash
cp -r /path/to/this-template /path/to/new-client-folder
cd /path/to/new-client-folder
npm install
```

---

## Step 2 — Fill in `lib/config.ts` ⬅️ Most Important File

Open `lib/config.ts` and replace every placeholder with the client's real information:

| Field | What to put |
|---|---|
| `businessName` | e.g. `"Smith Plumbing Co."` |
| `tagline` | One sentence about what they do |
| `description` | 1–2 sentences for Google search previews |
| `phone` | Display format: `"(412) 555-1234"` |
| `phoneHref` | Link format: `"tel:+14125551234"` |
| `email` | `"contact@smithplumbing.com"` |
| `address` | Street, city, state, zip |
| `siteUrl` | Their domain: `"https://smithplumbing.com"` |
| `social` | Their Facebook/LinkedIn/Twitter URLs (leave blank to hide) |
| `geo` | Look up coordinates at https://www.latlong.net/ |
| `hero` | Customize the homepage heading and bullet points |
| `stats` | Real numbers if available, or leave as estimates |
| `about` | 3 story paragraphs + 4–5 bullet points about the business |
| `footerTagline` | Short tagline shown in the footer |

---

## Step 3 — Fill in `/content/*.json` ⬅️ No Code Required

These are plain text files. Just replace the placeholder text with real content.

### `content/services.json`
- Add one entry per service the client offers
- `"slug"` must be URL-friendly: lowercase, hyphens, no spaces (e.g. `"hvac-repair"`)
- `"icon"` options: `"Monitor"`, `"TrendingUp"`, `"BarChart2"`, `"Shield"`, `"Wrench"`, `"Star"`

### `content/locations.json`
- Add one entry per city/area they want to rank in
- `"slug"` becomes the URL: `"slug": "cranberry-township"` → `/locations/cranberry-township`
- List real neighborhoods and suburbs they serve

### `content/testimonials.json`
- Replace with real client reviews
- Specific, results-focused reviews convert better than generic ones

### `content/faqs.json`
- Replace the placeholder answers with the client's real answers
- Aim for 6–10 questions — this helps with Google's FAQ rich results

---

## Step 4 — Add Images

Place images in `/public/images/`:

| Image | Size | Purpose |
|---|---|---|
| `og-default.jpg` | 1200×630px | Social share preview (Facebook, Twitter, etc.) |
| `testimonial-1.jpg` | 200×200px | Review author photo |
| `testimonial-2.jpg` | 200×200px | Review author photo |
| `testimonial-3.jpg` | 200×200px | Review author photo |
| `blog-*.jpg` | 1200×630px | Blog post cover images |

Place logo files in `/public/logos/`.

---

## Step 5 — Set the Environment Variable

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_SITE_URL=https://clientdomain.com
```

> This sets the canonical URL used in all SEO meta tags and structured data.

---

## Step 6 — Test the Build

```bash
npm run build
```

Fix any errors, then preview the site:

```bash
npm run dev
# Open http://localhost:3000
```

---

## Step 7 — Deploy to Vercel (Free)

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → "Add New Project" → import the repo
3. Add the `NEXT_PUBLIC_SITE_URL` environment variable in Vercel's project settings
4. Click Deploy — done ✅

Vercel will auto-deploy every time you push a change to GitHub.

---

## What Each Folder Does (Add to pitch deck)

```
/app          → Every page of the website (one folder = one URL!) 
/components   → Reusable UI pieces (Navbar, Footer, cards, buttons)
/lib          → Data and logic (config, SEO helpers, data fetching)
/content      → JSON files with all the client's text content
/public       → Static files (images, logos)
/styles       → Global CSS
```

## Files To Edit Per Client

```
✅ lib/config.ts          ← Business name, phone, address, hero text, stats
✅ content/services.json  ← Services offered
✅ content/locations.json ← Areas to rank in
✅ content/testimonials.json ← Client reviews
✅ content/faqs.json      ← FAQ answers
✅ .env.local             ← Live domain URL
✅ public/images/         ← Photos and logos
```

## Don't Touch

```
Read from config
🚫 app/layout.tsx         
🚫 components/layout/*    
🚫 lib/seo.ts              
🚫 lib/schema.ts          

Reads from services.json
🚫 lib/services.ts       

Reads from locations.json
🚫 lib/locations.ts      
```
