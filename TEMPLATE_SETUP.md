# New Client Setup Checklist

This is a reusable website template. Follow these steps for every new client.

---

## Step 1 — Copy the Template

```bash
cp -r /path/to/this-template /path/to/new-client-folder
cd /path/to/new-client-folder
npm install
```

---

## Step 2 — Fill in `lib/config.ts` 

Open `lib/config.ts` and replace every placeholder with the client's real information:

| Field | What to put |
|---|---|
| `businessName` | e.g. `"Example Co."` |
| `tagline` | One sentence about what they do |
| `description` | 1–2 sentences for page descriptions |
| `phone` | Display format: `"(412) 555-1234"` |
| `phoneHref` | Link format: `"tel:+14125551234"` |
| `email` | `"contact@example.com"` |
| `address` | Street, city, state, zip |
| `siteUrl` | Their domain: `"https://example.com"` |
| `social` | Their Facebook/LinkedIn/Twitter URLs (leave blank to hide) |
| `hero` | Customize the homepage heading and bullet points |
| `stats` | Real numbers if available, or leave as estimates |
| `about` | 3 story paragraphs + bullet points about the business |
| `footerTagline` | Short tagline shown in the footer |
| `navLinks` | Navigation menu items |
| `ctaButton` | Main call-to-action button text and link |

---

## Step 3 — Fill in `/content/services.json`

This is a plain JSON file. Just replace the placeholder text with real content.

- Add one entry per service the client offers
- `"slug"` must be URL-friendly: lowercase, hyphens, no spaces (e.g. `"hvac-repair"`)
- `"icon"` options: `"Monitor"`, `"TrendingUp"`, `"BarChart2"`, `"Shield"`

---

## Step 4 — Add Images

Place images in `/public/images/`:

| Image | Size | Purpose |
|---|---|---|
| `logo.png` | Any | Company logo |
| `hero-bg.jpg` | 1920×1080px | Optional hero background |

Place logo files in `/public/logos/`.

---

## Step 5 — Set the Environment Variable (Optional)

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_SITE_URL=https://clientdomain.com
```

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
4. Click Deploy — done 

Vercel will auto-deploy every time you push a change to GitHub.

---

## What Each Folder Does

```
/app          → Every page of the website (one folder = one URL!) 
/components   → Reusable UI pieces (Navbar, Footer, cards, buttons)
/lib          → Data and logic (config, data fetching)
/content      → JSON files with all the client's text content
/public       → Static files (images, logos)
/styles       → Global CSS
```

## Files To Edit Per Client

```
✅ lib/config.ts          ← Business name, phone, address, hero text, stats
✅ content/services.json  ← Services offered
✅ .env.local             ← Live domain URL (optional)
✅ public/images/         ← Photos and logos
```

## Don't Touch (Unless Customizing)

```
🚫 app/layout.tsx         ← Reads from config
🚫 components/layout/*    ← Reads from config
🚫 lib/services.ts        ← Reads from services.json
```
