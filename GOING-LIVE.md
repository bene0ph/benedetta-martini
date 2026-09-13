# Putting the site online

Four jobs. None of them cost anything. Do them in this order.

---

## 1. The contact form — 5 minutes

The form is built but not connected, and the page says so honestly rather than
pretending to send. To connect it:

1. Go to **formspree.io** and sign up with the email address you want the
   messages to arrive at.
2. Create a new form. It gives you a code that looks like `xdkoqwlr`.
3. Open `src/data/site.ts`, find the line `formspreeId: '',` and put the code
   between the quote marks:

   ```
   formspreeId: 'xdkoqwlr',
   ```

Free for 50 messages a month, with spam filtering. The form then delivers
straight to your inbox and the sender never leaves your site.

---

## 2. An email address on your own domain — 10 minutes

Optional, but this is the moment for it. `benedetta@benedetta-martini.com`
reads better than a hotmail address on a site selling campaign work.

Cloudflare does this free: **Email Routing** forwards anything sent to your
domain into the inbox you already use. You don't have to change how you read
email — only what people see.

Once it's set up, change the `email:` line in `src/data/site.ts`.

---

## 3. Hosting — 20 minutes

The site is plain files, so hosting is free and there is nothing to maintain.

1. Put this folder on **GitHub** (a free account; I can do this part).
2. Go to **Cloudflare Pages** → *Create a project* → *Connect to Git* → pick
   this repository.
3. When it asks for build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Press deploy.

You get a temporary address like `benedetta-martini.pages.dev` straight away.
Send that to people and look at it on your phone before touching your domain.

---

## 4. Your domain — 15 minutes, and the only irreversible-feeling bit

`benedetta-martini.com` currently points at Squarespace. To point it here:

1. In Cloudflare Pages → your project → *Custom domains* → add
   `benedetta-martini.com` and `www.benedetta-martini.com`.
2. Cloudflare tells you exactly which two settings to change at your domain
   registrar. Change them.
3. Wait. Somewhere between ten minutes and a few hours, the address starts
   showing the new site.

**Don't cancel Squarespace until step 2 has worked.** Once the new site is
live on your domain and you've clicked around it on a phone and a laptop,
cancel the subscription. That's roughly £190 a year back.

---

## If something looks wrong

Nothing here can be permanently broken. The site is files in a folder, every
change is recorded, and any of it can be put back the way it was. Ask.
