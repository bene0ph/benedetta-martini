# Putting the site online

Five jobs. Everything here is free except the domain you already own.
Steps 1–3 get the site live; steps 4–5 make it yours to edit and to write to.

---

## 1. GitHub — 10 minutes

This is where the site lives. It's also what the admin screen signs in to.

1. Make a free account at **github.com**.
2. Tell me the username and I'll put the project there, or follow their
   "create a repository" prompt and upload this folder.
3. In `public/admin/config.yml`, change the line `repo: OWNER/REPO` to your
   actual username and repository name.

## 2. Hosting — 20 minutes

1. Free account at **Cloudflare**, then *Workers & Pages* → *Create* → *Pages*
   → *Connect to Git*, and pick the repository from step 1.
2. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy.

You immediately get an address like `benedetta-martini.pages.dev`. Send it to
people. Look at it on your phone. Nothing is pointing at your real domain yet.

From here on, every saved change redeploys the site by itself.

## 3. The contact form — 5 minutes

1. Sign up at **formspree.io** with the inbox you want messages to land in.
2. Create a form; it gives you a code like `xdkoqwlr`.
3. Put that code into the admin screen under **Words & details → Contact form
   code**, and save.

Free for 50 messages a month, with spam filtering. Until it's filled in, the
Contact page says plainly that the form isn't connected — it never pretends to
send.

## 4. Signing in to the editor

There are two ways. Start with the quick one; the second is nicer to live with.

### Quick: access token (today, no setup)

On the `/admin` screen, choose **Sign In Using Access Token**. It links you
straight to the GitHub page for generating one, with the right permissions
already ticked. Paste it in. Your browser remembers it.

Good enough to start editing the same day. The drawback is that you handle a
long secret string, and it expires when you tell GitHub it should.

### Proper: sign in with GitHub (I set this up)

A free Cloudflare Worker handles the sign-in so you just click a button and
never see a token. It needs a GitHub OAuth app and about twenty minutes of my
time, once. After that the `base_url:` line in `config.yml` gets uncommented
and points at it.

Do step 4a to get going, and let me do 4b whenever.

## 5. Your domain — 15 minutes

**Do this last, and only once you've clicked around the `.pages.dev` version.**

1. Cloudflare Pages → your project → *Custom domains* → add
   `benedetta-martini.com` and `www.benedetta-martini.com`.
2. Cloudflare tells you exactly which settings to change at whoever you bought
   the domain from. Change them.
3. Between ten minutes and a few hours later, your address shows the new site.

**Only then cancel Squarespace.** Check it on a phone and a laptop first.
That's roughly £190 a year back.

### While you're there: an email address on your own domain

Cloudflare's **Email Routing** is free and forwards `benedetta@benedetta-martini.com`
into the inbox you already read. You change nothing about how you read email —
only what people see. Then update the address in the admin screen.

---

## The order, in one line

GitHub → Cloudflare Pages → look at it → Formspree → token sign-in → domain →
cancel Squarespace.
