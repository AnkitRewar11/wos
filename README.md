# Whiteout Survival · State 2566 Portal

An unofficial, static community portal for Whiteout Survival State 2566. It uses Next.js App Router, React, TypeScript and IBM Carbon React components. All authoritative content is stored in version-controlled local data files; there is no backend, database, API, account system or admin panel.

## Requirements

- Node.js 20 or newer
- npm

## Local development

```sh
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```sh
npm run lint
npm run typecheck
npm run test
npm run build
npx playwright install chromium
npm run test:e2e
```

The production build exports static files to `out/`. Next.js is configured for static export, trailing-slash routes and unoptimized local images so the output works without an image service.

## Static deployment

Deploy the contents of `out/` as the site root. Netlify and Cloudflare Pages can publish this directory directly. For GitHub Pages, publish `out/` as the Pages artifact; if the repository is hosted under a project subpath, set the matching Next.js `basePath` and `assetPrefix` before building.

## Content updates

- `src/data/alliances.ts` stores the five alliance-power positions supplied for the snapshot.
- `src/data/rankings.ts` stores each player leaderboard independently, including category-specific metrics and the bottom “Your profile” row.
- `src/data/events.ts` is the static event schedule. It is empty until confirmed dates and timezones are supplied.
- `src/lib/portal-content.ts` stores the announcements, rules, and event-section empty states.

Ranking values are decimal strings and are compared with `BigInt` to preserve precision. The supplied screenshots show ranks 1–9 plus the current profile at a separate rank. Unseen ranks are not filled in. The snapshot date comes from the attached image filenames: **11 October 2026**.

## Pages

- `/` — state dashboard and quick links
- `/alliances/` — top five alliance power positions
- `/rankings/` — ranking category index
- `/rankings/<category>/` — ten individual leaderboards
- `/events/` — month, week and agenda views; currently no confirmed dates supplied
- `/svs/`, `/foundry/`, `/canyon/`, `/cannon-fight/`, `/victories/`, `/announcements/`, `/rules/` — static information and honest empty states where source details are not available

The site is an unofficial fan project and is not affiliated with or endorsed by the game publisher. Game names, logos and related content belong to their respective owners. Asset sources are credited in the site footer.
