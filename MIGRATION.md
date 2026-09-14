# San Marino: Vercel migration

The current Next.js 16.1.1 framework, package lock and static export configuration are preserved.

## Routes
- `/`: new restaurant website
- `/feiern`: catering, celebrations and Kegelbahn
- `/impressum`: existing legal page, preserved
- `/images/Speisekarte.pdf`: existing menu PDF, preserved

Restaurant content is in `src/content/home.ts` and `src/content/celebrations.ts`.
Styles, scripts, self-hosted fonts and imagery are in `public/restaurant`.
Interactive behaviour is initialized by `RestaurantInteractions` with cleanup on unmount.
All local links and images use root-relative paths and work on both routes.
No dependencies or build settings need changing.

## Apply the supplied patch
Run from a clean checkout of Armnski/san-marino:

```sh
git switch -c modern-indian-website
git apply --check /path/to/san-marino-migration.patch
git apply /path/to/san-marino-migration.patch
npm ci
npm run build
git add .
git commit -m "Integrate modern San Marino website"
git push -u origin modern-indian-website
```

Open a pull request to main. If Vercel's Git integration is active, inspect its preview deployment before merging. Keep the existing Next.js preset; do not switch to Other. The production deployment happens through the existing Vercel integration when the approved change reaches its production branch.

## Validation
Production build and TypeScript compilation completed successfully. Homepage, celebrations and Impressum exported. Menu PDF retained byte-for-byte. Exported HTML references and opening-hour boundary cases checked. Browser visual verification and Vercel preview were not performed in this environment. No remote branch, PR or deployment was created because the connected GitHub identity has read-only access.

SEO and cookie preferences have also been added. Read SEO-LAUNCH.md before publishing. Production indexing is enabled automatically only for Vercel production builds; standalone production exports require SITE_INDEXABLE=true.
