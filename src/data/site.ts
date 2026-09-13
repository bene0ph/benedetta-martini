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

export const SITE = {
  name: 'Benedetta Martini',
  ...settings,
  instagramUrl: `https://instagram.com/${settings.instagram}`,
};

export const PORTFOLIO = portfolio.photos.map(fileName);
export const SKETCHBOOK = sketchbook.photos.map(fileName);

export const NAV = [
  { label: 'Portfolio', href: '/' },
  { label: 'Sketchbook', href: '/sketchbook' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
