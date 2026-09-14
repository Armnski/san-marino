# San Marino Bonn: SEO launch checklist

## Implemented and checked
- Unique German titles, descriptions, canonical URLs and Open Graph metadata for /, /feiern and /impressum.
- Canonical origin defaults to https://sanmarino-bonn.com, the domain supplied by the owner. Set SITE_URL if another primary domain is chosen.
- Restaurant and WebSite JSON-LD: real address, phone, email, two daily opening periods, menu, cuisine, original restaurant photographs and verified ordering profiles. No invented review scores.
- Visible Bonn-Oberkassel location copy and useful visitor questions on the homepage.
- sitemap.xml and robots.txt. Vercel production builds are indexable; preview builds use noindex and an empty sitemap. Non-Vercel production builds need SITE_INDEXABLE=true. Do not upload a preview export as production.
- Optional GOOGLE_SITE_VERIFICATION build variable for a genuine Google Search Console verification token; none invented.
- Necessary vs comfort preference consent. No analytics/advertising scripts. Comfort preferences sm_heat and sm_motion are only remembered with consent, and removed when revoked. sm_consent stores the decision for 180 days.
- Production build, metadata output and consent behaviour checked. These checks are not Google's Rich Results Test or a claim that Google has indexed the new site.

## Before production
1. Obtain write access to Armnski/san-marino, push the prepared branch, review the Vercel preview and merge through the existing deployment flow.
2. Add sanmarino-bonn.com to the existing Vercel project's Domains configuration. Use the exact DNS records shown by Vercel for this project. Replace the existing HTML frameset forwarding with direct domain hosting. Check HTTPS and all routes, menu PDF and images on the actual domain.
3. Confirm ownership of www.sanmarinobonn.com / sanmarinobonn.com. Search results still associate it with the same restaurant and Italian cuisine. If both sites are owned and the new domain is the chosen replacement, map useful old paths and set permanent redirects after launch. Do not redirect or modify a domain without confirmed control.
4. Claim/verify or update the existing Google Business Profile. Use the real business name, correct primary category, current cuisine, address, phone, menu URL, opening hours and primary website. Avoid creating a duplicate listing. Add genuine current venue and food photos. Request honest customer reviews without incentives or filtering.
5. Verify the canonical domain in Search Console, submit https://sanmarino-bonn.com/sitemap.xml, inspect the homepage and /feiern, and request indexing. Check redirects, canonical selection and indexing after Google recrawls.
6. Update inaccurate directory listings under the owner's accounts. Search examples on 2026-09-14: Tripadvisor and bonn.wiki describe Italian cuisine and reference the other domain. Confirm whether Italian food is still offered before changing cuisine claims.
7. Measure impressions, clicks, queries and indexing in Search Console. This does not require adding visitor analytics cookies. Google ranking depends on relevance, distance and prominence for local results and cannot be guaranteed.

## Sources checked 2026-09-14
- https://developers.google.com/search/docs/appearance/structured-data/local-business
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://support.google.com/business/answer/7091?hl=de
- https://sanmarino-bonn.com (HTML frameset to san-marino-tau.vercel.app)
- https://www.sanmarinobonn.com/en/ueber-uns
- https://bonn.wiki/wiki/San_Marino

## Still requires owner input/access
- GitHub write permission (current connection reports push:false).
- Domain provider/control and whether both similar domains belong to the owner.
- Access to the existing Google Business Profile and Search Console property.
- Final operator-approved privacy documentation before public launch; no full legal privacy notice was fabricated.
