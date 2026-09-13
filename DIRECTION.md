# Benedetta Martini — creative direction & build

**Live preview:** <https://loom-sandboxprojects.tail3ef5d5.ts.net:14310>
(visible to anyone on the tailnet; not on the public internet)

---

## 1. The problem you actually have

You said you like Lucy Laucht's site but you're not sure you have the volume.
You're right, and it's worth being precise about why.

Her site is one enormous masonry grid of 150+ frames. That layout has a single
argument: *look how much of this there is.* It works because the quantity **is**
the credential — twenty campaigns for Belmond and J.Crew, stacked up. Run the
same layout with 26 photographs and it doesn't read as "curated", it reads as
"the grid didn't fill up".

So copying it would be the one move guaranteed to make your work look smaller
than it is.

## 2. The idea

**Make the site a folio, not a gallery.**

A folio is a bound collection of plates. Its argument is the opposite of the
grid's: *every one of these was chosen, in this order, at this size.* A folio
of eighteen photographs is a complete object. A grid of eighteen photographs is
an empty grid. Same pictures, opposite impression.

Everything on the site follows from that one decision:

- **The running head.** Fixed at the top, like the running head at the top of
  every leaf of a book: your name, which series you're currently inside, and
  `PLATE 07 / 18` — counting up as you scroll. It's the detail that does the
  most work. It turns scrolling into *reading a finite thing*, and it makes
  eighteen feel deliberate rather than short.
  ("Plate" is also, conveniently, the right pun for a food photographer —
  a printing plate and a dinner plate.)

- **No grid.** Every photograph declares its own width, its own column, and its
  own amount of surrounding cream. Some sit alone across ten columns, some pair
  up with a small frame staggered down beside them, three of the Bali market
  shots step across the page like a contact strip. That variation is the design.
  It's what a magazine art director does and what a template can't.

- **Credit lines, not captions.** Every plate carries
  `04 — VILLAGE, FOUR O'CLOCK · Val d'Orcia, Tuscany · February 2023`.
  A photography site with no words reads like a stock library. A place and a
  month reads like a life.

- **An Index of Plates at the back**, with leader dots, exactly as in a printed
  photography book. Costs nothing, and it's the single strongest signal that
  the thing was edited.

- **Paper, not screen.** The background is a warm cream (`#F2ECE1`) with a 3%
  film grain laid over it, and the ink is a warm near-black. Nothing is `#fff`
  or `#000`, because paper and ink are neither. One accent: a burnt terracotta
  for links and the thin reading rule that fills as you scroll.

- **Type.** Bodoni Moda for the voice (a Didone — Bodoni was from Parma, so it
  is literally the Italian answer), EB Garamond for the words, IBM Plex Mono in
  letterspaced caps for all the apparatus. Three faces, each with exactly one
  job.

- **Restraint in motion.** Plates fade up 14px over 900ms; captions follow a
  beat later. Nothing slides, zooms, or parallaxes. `prefers-reduced-motion` is
  honoured.

## 3. How it solves the volume problem permanently

Three ways, in order of how much work they are for you:

1. **Seven series instead of one pile.** Your 26 frames became Val d'Orcia,
   Sanremo, Joseph's, Mercato, Ripponlea, Melbourne and Still Life. Same
   pictures, seven bodies of work, and a contents page that reads like a book's.
2. **The front page is an *edit* of eighteen**, not everything you own. The
   other eight live on the series pages. An edit implies a reserve.
3. **Adding work is one line in one file.** No layout to rebuild. When you shoot
   something in November you add six lines and it's live.

## 4. The stack, and why (you're new to this)

| | |
|---|---|
| **Built with** | [Astro](https://astro.build) — writes plain HTML files |
| **Hosting** | Cloudflare Pages or Netlify — **free**, permanently |
| **Domain** | you already own `benedetta-martini.com`; just repoint it |
| **Running cost** | ~£10/year (the domain) vs ~£190/year on Squarespace |
| **CMS** | none yet — deliberately. See below. |

**Why not Squarespace/Cargo/Format:** you asked for originality. Template
platforms cap it by construction — the running head, the twelve-column pacing
and the index of plates are all things their editors can't express. You'd be
paying £16/month to be prevented from having them.

**Why static files:** there's no database, no login, no plugins and no version
to keep updated. A folder of HTML and images cannot go down, cannot be hacked,
and loads instantly from a hundred cities. This is what every photographer's
site should be and almost none are.

**Why no CMS yet:** you'd be learning two new things at once. Right now you add
a photograph by dropping a file in a folder and adding one line to
`src/data/work.ts` — I've commented that file so it reads like instructions. If
after a month that still feels like too much, we bolt on TinaCMS or Sanity and
you get a normal browser admin screen. Adding it later costs a day; adding it
now would cost you the month of confusion.

## 5. What's fake in the preview, and needs you

I built this with the images from your live site, which is the fastest way to
show you something real. But:

- **Every title and date is my invention.** I wrote them by *looking* at the
  photographs, so the places are right — but "Village, four o'clock" and
  "February 2023" are guesses. These captions are half the design, and they
  should be in your voice. They're all in one file, `src/data/work.ts`.
- **The Info page bio is placeholder.** I wrote something in a voice I think
  suits the work. It's the page that turns an art director into an email, so
  it's the one you should rewrite first.
- **The series standfirsts are invented too** — the two or three sentences at
  the top of each series page.
- Your email is still the hotmail address from the old site's footer. Worth a
  `benedetta@benedetta-martini.com` on the new domain.

## 6. One creative-director note about the photographs

**Every image on your current site has been cropped to 2:3 portrait.** All 26 of
them, to the pixel. That's Squarespace's gallery template imposing a uniform
ratio, and it's costing you two things:

- **Rhythm.** A folio wants landscape frames to breathe against the portraits.
  Right now the sequence can only vary by *width*, never by shape. Re-export
  your originals at their native crops and the pacing gets a whole extra
  dimension for free.
- **The wide ones.** Some of these were almost certainly shot and composed
  landscape — the Sanremo terrace, the cypress road — and have been squeezed.

When you pull your originals out of Lightroom, export the full frames. It's the
single highest-value thing you can do for the site and it isn't a design job.

Second note: the edit is currently **heavy on place and light on food** —
roughly 16 landscape/architecture frames to 10 dishes. For a food photographer
selling menu commissions, I'd want that closer to even, with a dish in the
first three plates. You'll have the work; it just isn't on the old site.

## 7. What I'd do next, in order

1. You open the preview and tell me what's wrong with it.
2. You send real captions and a real bio.
3. You export original-crop files, including landscapes.
4. I put it on Cloudflare Pages at a temporary address so you can send it to
   people.
5. We repoint `benedetta-martini.com` and cancel Squarespace.

Steps 4 and 5 are about an hour of my time and none of yours.
