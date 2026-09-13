# benedetta-martini.com

Your website. This folder *is* the site — there's no account to log into and
no subscription. Everything you'd ever want to change lives in one file.

---

## The only file you need: `src/data/site.ts`

Open it in any text editor. It holds your name, your sentence, your client
list, your email, and the two lists that decide which photographs go on which
page. It's full of notes explaining each part. You can't break the site by
reading it, and anything you do break can be undone.

### To add a photograph

1. Put the file into the folder `src/assets/plates`
2. Open `src/data/site.ts`
3. Add the filename to either the `PORTFOLIO` list or the `SKETCHBOOK` list,
   in quote marks, with a comma on the end:

   ```
   'my-new-photo.jpg',
   ```

That's the whole job. The site resizes it, crops it to the same shape as the
others, and makes the small versions phones need. You never have to think
about file sizes.

### To change the order

Move the lines up and down. The list order is the page order.

### To remove a photograph

Delete its line from the list. The file stays in the folder — nothing is
thrown away, and you can put the line back any time.

### To change your words

- The About sentence, the client list, your email: all in `src/data/site.ts`
- The menu labels: also in `src/data/site.ts`, at the bottom

---

## Seeing your changes

```
npm run dev
```

Then open **http://localhost:4321** in a browser. Leave it running — every
time you save the file, the page updates by itself. Press `Ctrl+C` in the
terminal to stop it.

The first time only, run `npm install` before `npm run dev`.

---

## Publishing changes

If the site is connected to Cloudflare Pages (see `GOING-LIVE.md`), publishing
is: save your changes, then

```
git add .
git commit -m "added new photos"
git push
```

About a minute later the live site updates. If that means nothing to you yet,
`GOING-LIVE.md` walks through it, or ask and I'll do it.

---

## What's in here, briefly

| Folder | What it is |
|---|---|
| `src/data/site.ts` | **Your file.** Words, lists, email. |
| `src/assets/plates` | The photographs. |
| `src/pages` | The four pages. |
| `src/styles/global.css` | The design — colours, type, spacing. |
| `src/components`, `src/layouts` | The machinery. You never need to open these. |
| `dist` | The built site. Made automatically; don't edit. |

---

## The design, in one paragraph

Warm pale grey (`#E8E5DF`), never white. Two typefaces: Schibsted Grotesk in
bold for your name, Archivo for everything else, nothing bigger than 22px.
Four columns of photographs, all cropped to the same 2:3 shape, tight gutters.
No captions, no colour, no movement. Clicking a photograph opens it large with
the sidebar still showing.
