# benedetta-martini.com

A static photography folio. Astro + three self-hosted typefaces + about 600
lines of CSS. No database, no plugins, no monthly fee.

## Editing the site

Almost everything lives in **`src/data/work.ts`**.

- **Add a photograph** — drop the file into `src/assets/plates/`, then add a
  line to `PLATES` (front page) or `ARCHIVE` (series pages only).
- **Re-pace the folio** — move lines around, or change `col` / `span` / `air`.
  `col` is which of the twelve columns a plate starts in, `span` is how many it
  covers, `air` is how much cream sits above it. Two plates whose columns do
  not overlap fall onto the same row by themselves; that is how the offset
  pairs are made.
- **Add a series** — add an entry to `SERIES`. The page at `/work/<slug>` and
  the row on the contents page both appear on their own.
- **Change your bio** — `src/pages/info.astro`.

## Running it

```bash
npm install     # once
npm run dev     # http://localhost:4321, reloads as you save
npm run build   # writes the whole site into dist/
```

`npm run build` resizes and re-encodes every photograph to WebP at three
widths. You upload full-size files; visitors are sent the smallest one that
will do.

## Deploying

`dist/` is the entire website — plain files. Drag it onto Cloudflare Pages or
Netlify, or connect this repository and let it build on every push.
