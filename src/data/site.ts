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

/** What each page tells a search engine it is. Distinct per page: four pages
    sharing one description is four pages Google reads as one. */
export const SEO: Record<string, { title: string; description: string; h1: string }> = {
  '/': {
    title: 'Benedetta Martini — Photographer, Melbourne',
    description:
      'Lifestyle, hotel and hospitality photography by Benedetta Martini, based in ' +
      'Melbourne. Selected work for Condé Nast Traveller UK, Toast and Lancemore Hotels.',
    h1: 'Benedetta Martini — photography portfolio',
  },
  '/sketchbook': {
    title: 'Sketchbook — Benedetta Martini, Photographer, Melbourne',
    description:
      'Personal and travel photographs by Benedetta Martini, a lifestyle photographer ' +
      'based in Melbourne, working across Australia and Italy.',
    h1: 'Sketchbook — personal work',
  },
  '/about': {
    title: 'About — Benedetta Martini, Photographer, Melbourne',
    description:
      'Benedetta Martini is a photographer based in Melbourne, shooting lifestyle ' +
      'campaigns. Clients include Condé Nast Traveller UK, Toast and Lancemore Hotels.',
    h1: 'About Benedetta Martini',
  },
  '/contact': {
    title: 'Contact — Benedetta Martini, Photographer, Melbourne',
    description:
      'Commission Benedetta Martini for lifestyle, hotel and hospitality photography. ' +
      'Based in Melbourne, working across Australia and Italy.',
    h1: 'Contact Benedetta Martini',
  },
};

export const NAV = [
  { label: 'Portfolio', href: '/' },
  { label: 'Sketchbook', href: '/sketchbook' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
