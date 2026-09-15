# SEO setup — what's done and what's still on you

## 1. Replace the placeholder domain

Every page's `<head>`, plus `robots.txt` and `sitemap.xml`, uses
`https://www.indikahousebk.com` as a placeholder. Once you buy a real
domain, find-and-replace that exact string across:

- `index.html`, `menu.html`, `contact.html`
- `robots.txt`
- `sitemap.xml`

Nothing else needs to change.

## 2. What's already built into the site (on-page SEO)

- Per-page `<title>` and meta description written around the terms people
  actually search ("Indika House", "Indian restaurant Brooklyn", etc.),
  instead of generic copy.
- Open Graph + Twitter Card tags so links shared on social/iMessage/Slack
  show a proper title, description, and image instead of a bare URL.
- `Restaurant` structured data (JSON-LD) on the homepage with your address,
  phone, hours, cuisine, and social/ordering links — this is what lets
  Google show rich info (hours, links) directly in search results, not
  just a blue link.
- `robots.txt` + `sitemap.xml` so search engines know the site exists and
  can crawl every page.
- Descriptive `alt` text on the interior photo and logo (helps image
  search and accessibility, both of which factor into ranking).
- A real `<h1>` with your name and location, not just a decorative image.

## 3. What actually moves the needle for "Indika House" / "Indian food
near me" searches — none of this lives in the code, so I can't do it
from here:

1. **Google Business Profile** (business.google.com) — by far the biggest
   lever for local search and Maps. If you haven't claimed/verified it
   yet, that matters more than anything on the website itself. Make sure
   the name, address, phone, and hours there match this site exactly.
2. **Get the site live and indexed.** Right now this is a GitHub repo,
   not a published website — search engines can't find it until it's
   hosted somewhere (GitHub Pages, Squarespace, a host + your new domain,
   etc.) and you submit the sitemap in Google Search Console
   (search.google.com/search-console).
3. **NAP consistency** (Name, Address, Phone) — I noticed your Grubhub
   listing shows the ZIP as 11222, while this site uses 11206 (from what
   you told me). Mismatched address info across Google/Grubhub/DoorDash/
   Yelp/the website actively hurts local ranking — worth double-checking
   which one is correct and fixing it everywhere.
4. **Reviews.** Review count and rating (Google, Yelp) are a major local
   ranking factor. Encouraging happy customers to leave a Google review
   helps more than most on-site changes.
5. **Backlinks/citations** — being listed consistently on Yelp, TripAdvisor,
   local food blogs, etc., with the same NAP info, reinforces trust with
   Google.

Once the domain and hosting are sorted, let me know and I'll swap the
placeholder URLs and can also help submit the sitemap.
