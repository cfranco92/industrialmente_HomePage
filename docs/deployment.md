# Deployment

## Recommendation

Use Firebase Hosting classic for production in the existing Firebase project `industrialmente-2`.

Reasoning:

- The live domain is already attached to the current Firebase Hosting site.
- The site is now a fully static Next.js export, so it does not need App Hosting, Cloud Run, or a paid plan.
- Firebase Hosting on the free tier is enough for this setup.

## Current project state

- Firebase project: `industrialmente-2`
- Current Hosting site: `industrialmente-2`
- Current live domains already point to that site.
- The app exports static files to `out/`.

## CI/CD shape

- CI: GitHub Actions via `.github/workflows/ci.yml`
- CD: Firebase Hosting deploy on `master` via `.github/workflows/deploy.yml`

The repository uses a dedicated service account secret:

- `FIREBASE_SERVICE_ACCOUNT_INDUSTRIALMENTE_2`

## Hosting configuration

- Firebase config: `firebase.json`
- Build output: `out/`
- Default project: `.firebaserc`

## One-time setup status

The repo-side automation is already prepared for:

1. Validation on pull requests and pushes.
2. Live deploys to Firebase Hosting from `master`.

Because the site is static, no environment variables are required for production deploys.

## Manual deploy fallback

If you ever need to publish immediately from local:

```bash
npm ci
npm run build
firebase deploy --only hosting --project industrialmente-2
```
