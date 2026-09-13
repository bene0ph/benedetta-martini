// ---------------------------------------------------------------------------
// The whole site is edited from this one file.
//
// To add a photograph: drop the file into src/assets/plates/ and add a line to
// PLATES (front page) or ARCHIVE (series pages only). To re-pace the folio,
// move the lines around and adjust `measure`, `align` and `air`. That is all.
//
// NOTE (Benedetta): titles and dates below were written by looking at the
// photographs, not from your records. The places are right; the months are
// guesses. Correct them — the captions are half the design.
// ---------------------------------------------------------------------------


export interface Plate {
  /** filename inside src/assets/plates */
  file: string;
  /** what the photograph is of */
  title: string;
  /** where it was taken */
  place: string;
  /** when */
  date: string;
  /** which series it belongs to (a slug from SERIES) */
  series: string;
  /** which of the twelve columns it starts in (1–12) */
  col: number;
  /** how many columns it spans */
  span: number;
  /** cream above it, in baselines. Two plates whose columns do not collide
      share a row, so differing `air` is what staggers a pair. */
  air?: number;
  /** where the photograph sits in its columns if it is height-capped */
  justify?: 'start' | 'centre' | 'end';
}

export interface Series {
  slug: string;
  title: string;
  place: string;
  date: string;
  /** the standfirst — two or three sentences, set in Garamond */
  text: string;
  kind: string;
}

export const SERIES: Series[] = [
  {
    slug: 'val-d-orcia',
    title: "Val d'Orcia",
    place: 'Tuscany, Italy',
    date: 'February 2023',
    kind: 'Personal',
    text:
      'Tuscany out of season, which is the only time you can see it. Bare ' +
      'poplars, shuttered houses, a lemon tree someone is still bothering to ' +
      'keep alive behind a gate. Nothing here was picked; everything here was ' +
      'about to be.',
  },
  {
    slug: 'sanremo',
    title: 'Sanremo',
    place: 'Liguria, Italy',
    date: 'August 2022',
    kind: 'Personal',
    text:
      'The Riviera dei Fiori in the last week of summer. A beach club that has ' +
      'changed its umbrellas but nothing else since the sixties, and the Liberty ' +
      'villas above it, still tiled, still standing, mostly empty.',
  },
  {
    slug: 'josephs-winter',
    title: "Joseph's — Winter Menu",
    place: 'Melbourne',
    date: 'July 2022',
    kind: 'Commissioned',
    text:
      'A full winter menu photographed in one day, in the dining room, on the ' +
      'light that was already there. The brief was a menu card and a website. ' +
      'The aim was that the food should look like dinner and not like a product.',
  },
  {
    slug: 'mercato',
    title: 'Mercato',
    place: 'Ubud, Bali',
    date: 'February 2023',
    kind: 'Personal',
    text:
      'The market at Ubud opens before it is properly light. These were made in ' +
      'the first hour, while the produce is still stacked the way the growers ' +
      'stacked it and the offerings are still being folded by hand.',
  },
  {
    slug: 'ripponlea',
    title: 'Ripponlea',
    place: 'Melbourne',
    date: 'June 2023',
    kind: 'Commissioned',
    text:
      'A Melbourne winter in a nineteenth-century garden: the fountain running ' +
      'for nobody, the festoon lights on at four in the afternoon.',
  },
  {
    slug: 'melbourne',
    title: 'Melbourne',
    place: 'Victoria, Australia',
    date: '2022 — 2023',
    kind: 'Commissioned & personal',
    text:
      'The rooms and the streets that lead to them. Wine bars, hoardings, ' +
      'arcades — the city I photograph between jobs and, often enough, for them.',
  },
  {
    slug: 'still-life',
    title: 'Still Life',
    place: 'Studio, Melbourne',
    date: '2022 — 2024',
    kind: 'Ongoing',
    text:
      'Single objects, one window, no styling to speak of. The running ' +
      'experiment everything else gets tested against.',
  },
];

// THE FOLIO — the front page. An edit, not an archive: eighteen frames paced
// by hand so that a modest body of work reads as a considered object.
export const PLATES: Plate[] = [
  { file: 'Paradiso_FINAL.jpg', title: 'The terrace, empty', place: 'Bagni Paradiso, Sanremo', date: 'August 2022', series: 'sanremo', col: 3, span: 8, air: 0, justify: 'centre' },

  { file: 'tuscany-1-of-1-4.jpg', title: 'Poplars, end of winter', place: "Val d'Orcia, Tuscany", date: 'February 2023', series: 'val-d-orcia', col: 1, span: 6, air: 2 },
  { file: 'grapes-1-of-1.jpg', title: 'Grapes, unwashed', place: 'Studio, Melbourne', date: 'September 2023', series: 'still-life', col: 9, span: 3, air: 5 },

  { file: 'tuscany-1-of-1-9.jpg', title: 'Village, four o’clock', place: "Val d'Orcia, Tuscany", date: 'February 2023', series: 'val-d-orcia', col: 2, span: 10, air: 2, justify: 'centre' },

  { file: 'Market-9-of-11.jpg', title: 'Weighing out', place: 'Ubud, Bali', date: 'February 2023', series: 'mercato', col: 1, span: 4, air: 2 },
  { file: 'Market-6-of-11.jpg', title: 'Offerings, stacked', place: 'Ubud, Bali', date: 'February 2023', series: 'mercato', col: 5, span: 4, air: 4 },
  { file: 'Market-11-of-11.jpg', title: 'Papaya', place: 'Ubud, Bali', date: 'February 2023', series: 'mercato', col: 9, span: 4, air: 1 },

  { file: 'Josephs_Winter_Menu_22_Meat_Grating_Web.jpg', title: 'Grating, mid-service', place: "Joseph's, Melbourne", date: 'July 2022', series: 'josephs-winter', col: 1, span: 3, air: 5 },
  { file: 'Josephs_Winter_Menu_22_Entree_Flatlay_Full_greener.jpg', title: 'Entrée, from above', place: "Joseph's, Melbourne", date: 'July 2022', series: 'josephs-winter', col: 6, span: 6, air: 2 },

  { file: 'stilllifewhite-1-of-1.jpg', title: 'Grapes, hazelnuts, one pear', place: 'Studio, Melbourne', date: 'March 2023', series: 'still-life', col: 5, span: 4, air: 2, justify: 'centre' },

  { file: 'tuscany-1-of-1-2.jpg', title: 'The garden, looking south', place: "Val d'Orcia, Tuscany", date: 'February 2023', series: 'val-d-orcia', col: 1, span: 10, air: 2 },

  { file: 'RipponleaJune-1-of-1-3.jpg', title: 'Fountain and festoon', place: 'Ripponlea Estate, Melbourne', date: 'June 2023', series: 'ripponlea', col: 1, span: 6, air: 2 },
  { file: 'RipponleaJune-1-of-1-8.jpg', title: 'Arches, and a bench', place: 'Ripponlea Estate, Melbourne', date: 'June 2023', series: 'ripponlea', col: 8, span: 4, air: 4 },

  { file: '394A1223-copy.jpg', title: 'Villa, in tile', place: 'Sanremo, Liguria', date: 'August 2022', series: 'sanremo', col: 3, span: 8, air: 2, justify: 'centre' },

  { file: 'Josephs_Winter_Menu_22_Sashimi_Flatlay_Full-1-of-1.jpg', title: 'Sashimi, on saffron', place: "Joseph's, Melbourne", date: 'July 2022', series: 'josephs-winter', col: 2, span: 4, air: 2 },
  { file: 'Josephs_Winter_Menu_22_Marshmellow_Web.jpg', title: 'Smoke off the board', place: "Joseph's, Melbourne", date: 'July 2022', series: 'josephs-winter', col: 8, span: 4, air: 4 },

  { file: 'smolkombucha-1-of-1.jpg', title: 'Kombucha, one o’clock sun', place: 'Studio, Melbourne', date: 'April 2023', series: 'still-life', col: 5, span: 3, air: 2, justify: 'centre' },

  { file: 'tuscany-1-of-1.jpg', title: 'Lemons behind the gate', place: "Val d'Orcia, Tuscany", date: 'February 2023', series: 'val-d-orcia', col: 3, span: 8, air: 2, justify: 'centre' },
];

// Everything else, filed by series. Shown on the series pages, not the folio.
export const ARCHIVE: Plate[] = [
  { file: 'tuscany-1-of-1-3.jpg', title: 'Pines and the stone house', place: "Val d'Orcia, Tuscany", date: 'February 2023', series: 'val-d-orcia', col: 1, span: 6, air: 2 },
  { file: 'tuscany-1-of-1-6.jpg', title: 'Cypress road', place: "Val d'Orcia, Tuscany", date: 'February 2023', series: 'val-d-orcia', col: 8, span: 4, air: 4 },
  { file: '394A1340-copy.jpg', title: 'Seafront, in white', place: 'Sanremo, Liguria', date: 'August 2022', series: 'sanremo', col: 3, span: 8, air: 2, justify: 'centre' },
  { file: 'Josephs_Winter_Menu_22_Entree_Lifestyle_Web.jpg', title: 'Pouring, at the pass', place: "Joseph's, Melbourne", date: 'July 2022', series: 'josephs-winter', col: 1, span: 6, air: 2 },
  { file: 'Josephs_Winter_Menu_22_Entree_Web.jpg', title: 'Entrée, plated', place: "Joseph's, Melbourne", date: 'July 2022', series: 'josephs-winter', col: 8, span: 4, air: 4 },
  { file: '3000-1-of-1-copy.jpg', title: 'Arcade', place: 'Melbourne', date: 'October 2022', series: 'melbourne', col: 3, span: 8, air: 2, justify: 'centre' },
  { file: 'Albert-1-of-1-2.jpg', title: 'Bread and oil', place: 'Albert’s Wine Bar, Melbourne', date: 'November 2022', series: 'melbourne', col: 1, span: 5, air: 2 },
  { file: 'PopUp-1-of-1.jpg', title: 'Sojourn, before opening', place: 'Melbourne', date: 'October 2022', series: 'melbourne', col: 7, span: 5, air: 4 },
];

export const ALL_PLATES = [...PLATES, ...ARCHIVE];

export const STUDIO = {
  name: 'Benedetta Martini',
  discipline: 'Food & Place',
  city: 'Melbourne',
  email: 'bmartini@hotmail.co.uk',
  instagram: '_benedettamartini',
  instagramUrl: 'https://instagram.com/_benedettamartini',
  statement:
    'I photograph food where it comes from and where it is eaten — which is ' +
    'usually the same short distance, and almost never a studio.',
};
