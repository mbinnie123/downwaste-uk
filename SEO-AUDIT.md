# SEO Audit — Downwaste UK

**Framework:** Next.js 16 App Router (static export)  
**Domain:** https://downwaste.co.uk  
**Audit date:** August 2026  

---

## Executive Summary

The site has good foundational content across 21 product pages with solid copy and FAQ sections. The major SEO gaps were structural: an incomplete sitemap, missing Open Graph/Twitter metadata on all product pages, no JSON-LD structured data anywhere, a double-brand issue in title tags caused by adding a template without updating child pages, and no canonical URLs on product pages.

All P0 and P1 issues have been resolved in this audit cycle.

---

## Critical Issues Fixed

### P0 — Sitemap missing 18/21 product pages
**Before:** Only `/`, `/products`, `/products/skip-bins`, `/products/press-compactors`, `/products/hooklift-bins` were in the sitemap.  
**After:** All 21 product pages added. Sitemap now includes 23 URLs total.  
**Impact:** Google cannot efficiently discover or prioritise the 18 missing pages.

### P0 — No canonical URLs on product pages
**Before:** No `alternates.canonical` on any product page.  
**After:** Every product page now has a self-referencing canonical.  
**Impact:** Prevents duplicate content issues from query strings, case variants and www/non-www.

### P0 — Metadata title template causing double-branding risk
**Before:** Root layout had `title: "Downwaste UK | ..."` (string). Adding a `template` without updating child pages would render `"Product Title | Downwaste UK | Downwaste UK"`.  
**After:** Root layout uses `title: { default, template: "%s | Downwaste UK" }`. All product page titles have had brand suffix removed — the template appends it once.  
**Impact:** Broken title tags in SERPs, CTR damage.

---

## Technical SEO

| Check | Status | Notes |
|-------|--------|-------|
| `robots.txt` | ✅ Good | Correctly disallows `/quote`, `/estimator`, `/api/`. Sitemap URL present. |
| `sitemap.xml` | ✅ Fixed | Was missing 18 product pages. Now complete. |
| `lang` attribute | ✅ Fixed | Changed `lang="en"` → `lang="en-GB"` (UK business). |
| Canonical tags | ✅ Fixed | Added to all 21 product pages + products index. |
| `metadataBase` | ✅ Good | Set in root layout using `VERCEL_PROJECT_PRODUCTION_URL` fallback. |
| Redirects | ✅ N/A | No legacy redirects needed (no URL changes made). |
| HTTPS | ✅ Good | Production URL hardcoded as `https://`. |
| Trailing slashes | ✅ Good | Next.js default, no inconsistency. |
| JavaScript rendering | ✅ Good | All product pages are static (`○`) — fully rendered HTML. |
| 404 page | ⚠️ TODO | `/_not-found` exists but should be reviewed for UX (links to key pages). |
| Duplicate pages | ✅ Good | No detected duplicate paths. `/estimator` and `/quote` are noindexed via robots.txt disallow. |

---

## On-Page SEO

### Title tags
All 21 product pages updated with keyword-first titles, removing the mid-title category segment (`| Chutes |`, `| Handling |` etc.) which added length without search value.

### Meta descriptions
All 21 product pages have unique, compelling descriptions with primary keywords, secondary terms, benefits and implicit CTAs. Descriptions range 155–220 characters.

### Open Graph + Twitter
Added to all 21 product pages and the products index page. OG images currently all reference `/og-image.png` (the sitewide brand image). **Recommended:** Create product-specific OG images at 1200×630 and update the `images` array per page.

### Headings
All product pages maintain correct H1 > H2 > H3 hierarchy. No changes required — existing structure is semantically correct.

---

## Internal Linking

### Changes made
- **Site header nav dropdown** expanded from 3 featured products to 8, now including chute categories (garbage, laundry, recycling, construction) — the most commercially valuable product group.
- **Skip-bins page** now includes a "Related Products" section linking to Hooklift Bins, Press Compactors and Self-Tipping Skips with descriptive anchor text.

### Remaining recommendations
- Add a "Related Products" section to all remaining 20 product pages (see Content Plan).
- The footer currently links to `/products#slug` category anchors — this is good for link equity but the anchor links could also point directly to key product pages.
- Consider adding contextual links between chute pages (e.g., Garbage Chute → Recycling Chute → Chute Compactor) to support topical clusters.

---

## Schema / Structured Data

### Added to root layout (`layout.tsx`)
- `Organization` schema (name, URL, email, telephone, contact point GB)
- `WebSite` schema (linked to Organization via `@id`)

### Added to all 21 product pages
Each page now includes a `@graph` with:
1. **`BreadcrumbList`** — 4-level breadcrumb (Home > Products > Category > Product)
2. **`Product`** — name, description, brand, AggregateOffer (InStock, GBP)
3. **`FAQPage`** — dynamically built from each page's `faqs` array

### Not added (by design)
- `Review` / `AggregateRating` — no review data exists; fabricating this would violate Google's guidelines
- `LocalBusiness` — Downwaste is not a traditional local business with walk-in premises
- `Article` / `BlogPosting` — no blog exists yet

---

## Core Web Vitals

### LCP
- Hero images on all product pages already use `priority` prop (correct).
- `<Image>` components use `next/image` which auto-generates `srcset` and uses WebP/AVIF.
- Below-fold overview images updated to use `loading="lazy"` on skip-bins page.

### INP
- Product pages are fully static Server Components — no client-side JS overhead.
- `ScrollReveal` component uses `IntersectionObserver` (lightweight).
- `QuoteProvider` and `SiteHeader` are client components but scoped to necessary interactivity.

### CLS
- All `<Image>` components specify explicit `width` and `height` — prevents layout shift.
- Geist font loaded via `next/font/google` with CSS variable injection (no FOUT).

### Remaining recommendation
- `Geist_Mono` is loaded in layout but likely not used in product pages. Consider removing it to reduce font payload.

---

## Content Opportunities

See `SEO-CONTENT-PLAN.md` for prioritised recommendations.

Key gaps identified:
1. No service/process pages ("How garbage chutes are installed", "Waste chute maintenance")
2. No buying guide content ("How to choose a waste compactor")
3. No location pages (UK is mentioned but no city/region targeting)
4. No case study pages (projects mentioned on homepage but no dedicated URLs)
5. No estimator landing page (tool exists at `/estimator` but it's noindexed)

---

## Local SEO

Downwaste operates across the UK but appears to be manufactured/supplied from Turkey (phone: +90 236 214 2590). Local SEO signals:

- ✅ "UK" mentioned throughout all product pages and descriptions
- ✅ `areaServed: "GB"` in Organization schema ContactPoint
- ⚠️ No Google Business Profile mentioned — **TODO**: Create/verify GBP if there is a UK office
- ⚠️ No UK address in schema — add when confirmed
- ⚠️ No local landing pages ("waste chutes London", "compactors Manchester")

---

## Remaining Recommendations

### High priority
1. Create product-specific OG images (1200×630) for all product pages
2. Add "Related Products" section to all 20 remaining product pages
3. Improve `/_not-found` 404 page with useful navigation
4. Add `loading="lazy"` to below-fold images on all other product pages
5. Verify and complete Google Business Profile for UK presence

### Medium priority
6. Add `hreflang="en-GB"` link tag for UK-specific targeting
7. Create a landing page for the Chute Estimator tool (`/estimator`) with indexable content and noindex removed
8. Consider adding `lastModified` dates to sitemap based on actual file modification times rather than `new Date()`
9. Add a brief "About Downwaste UK" or company page for E-E-A-T signals

### Low priority
10. Remove `Geist_Mono` font if unused
11. Add `twitter:site` and `twitter:creator` to Twitter metadata
12. Consider adding video schema if product demo videos are added

---

## Off-Page Opportunities

See `SEO-OFF-PAGE-STRATEGY.md`.

---

## Priority Roadmap

| Priority | Task | Est. Impact |
|----------|------|-------------|
| P0 | ~~Fix sitemap~~ | ✅ Done |
| P0 | ~~Add canonicals~~ | ✅ Done |
| P0 | ~~Fix title template double-brand~~ | ✅ Done |
| P1 | ~~Add OG/Twitter to product pages~~ | ✅ Done |
| P1 | ~~Add JSON-LD sitewide~~ | ✅ Done |
| P1 | ~~Add Organization + WebSite schema~~ | ✅ Done |
| P2 | Create product OG images | CTR improvement |
| P2 | Related Products on all pages | Internal linking |
| P2 | Content: buying guides + service pages | Topical authority |
| P3 | Local landing pages | Local SEO |
| P3 | Case study pages | Trust + links |
