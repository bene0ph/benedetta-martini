# benedetta-martini.com

A photography portfolio. Astro, no database, no subscription, hosted free.
Benedetta edits it herself at **/admin** — see `HANDOVER.md` for that side.

This file is for whoever maintains the code.

---

## Shape of it

| Path | What it is |
|---|---|
| `src/content/*.json` | **The content.** Written by the admin screen; safe to hand-edit. |
| `src/assets/plates/` | The photographs. Uploaded by the admin screen. |
| `src/data/site.ts` | Reads the JSON, turns stored paths back into filenames. |
| `src/components/Grid.astro` | The four-column grid and the single-image viewer. |
| `src/layouts/Shell.astro` | Sidebar, wordmark, menu. |
| `src/styles/global.css` | The entire design. |
| `public/admin/` | Sveltia CMS: `index.html` + `config.yml`. |

Four pages: `/`, `/sketchbook`, `/about`, `/contact`.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
```

## Two things worth knowing before you change anything

**Image paths cross a boundary.** The CMS stores `/src/assets/plates/foo.jpg`;
the Astro image pipeline wants `foo.jpg`. `fileName()` in `src/data/site.ts` is
the only place that translation happens. If you move `media_folder` in
`config.yml`, nothing else needs to change.

**The grid's shape lives on the button, not the image.** `aspect-ratio` on an
`<img>` loses to the `height` attribute Astro emits, which silently un-crops
the whole grid. `.grid button` carries the 2:3 and the image fills it.

## Images

The grid ships 380/760px WebP. The single-image viewer gets its own 1200px
WebP via `getImage()` — without that it would hand out the untouched camera
files at ~1.5 MB each. Built site is ~8.6 MB; first screen ~293 KB.

## The CMS is in beta

Sveltia CMS is pre-1.0. It is actively developed and used in production, but
if it ever breaks, it is config-compatible with Decap CMS — swap the one
`<script>` in `public/admin/index.html` for
`https://unpkg.com/decap-cms@^3/dist/decap-cms.js` and `config.yml` is
unchanged. That fallback is the reason for choosing it.

## Deploying

Cloudflare Pages, framework preset Astro, build `npm run build`, output `dist`.
Every push to `main` — including saves from the admin screen — redeploys.
