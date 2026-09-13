// ===========================================================================
//  This file is machinery, not content.
//
//  Benedetta edits the site at  /admin  — the words, the client list and the
//  order of the photographs all live in src/content/*.json, which the admin
//  screen writes to. This file only reads those files and tidies them up for
//  the rest of the site.
//
//  The one thing worth knowing: the admin screen stores a full path like
//  "/src/assets/plates/foo.jpg", while the image pipeline wants the bare
//  filename. `fileName` below is the translation between the two.
// ===========================================================================

import settings from '../content/settings.json';
import portfolio from '../content/portfolio.json';
import sketchbook from '../content/sketchbook.json';

const fileName = (path: string) => path.split('/').filter(Boolean).pop() ?? path;

/** One photograph as the rest of the site wants it. */
export interface Photo {
  file: string;
  /** What is in the picture. Read by Google Images and by screen readers;
      never shown on the page, because the design has no captions. */
  alt: string;
}

const toPhoto = (entry: { image: string; alt?: string }): Photo => ({
  file: fileName(entry.image),
  alt: entry.alt?.trim() ?? '',
});

export const SITE = {
  name: 'Benedetta Martini',
  ...settings,
  instagramUrl: `https://instagram.com/${settings.instagram}`,
};

export const PORTFOLIO = portfolio.photos.map(toPhoto);
export const SKETCHBOOK = sketchbook.photos.map(toPhoto);

export const NAV = [
  { label: 'Portfolio', href: '/' },
  { label: 'Sketchbook', href: '/sketchbook' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
