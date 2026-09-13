// ===========================================================================
//  EVERYTHING YOU'LL EVER NEED TO CHANGE IS IN THIS FILE.
//
//  You don't need to understand the rest of the project. This one file holds
//  your name, your words, your client list, your email — and the two lists
//  that decide which photographs appear on which page.
//
//  Anything between /* and */ , or after // , is a note to you. The computer
//  ignores those lines, so you can't break anything by reading them.
// ===========================================================================

export const SITE = {
  name: 'Benedetta Martini',

  // The one sentence on the About page.
  bio: 'Benedetta Martini is a photographer based in Melbourne, shooting lifestyle campaigns.',

  // Shown on the About page, in the order you write them.
  clients: [
    'Condé Nast Traveller UK',
    'Toast',
    'Lancemore Hotels, Crossley St',
    'Lancemore Hotels, Milawa',
    'Joseph’s Restaurant at Werribee Mansion',
  ],

  email: 'bmartini@hotmail.co.uk',
  instagram: '_benedettamartini',
  instagramUrl: 'https://instagram.com/_benedettamartini',
  city: 'Melbourne, Australia',

  /* ---------------------------------------------------------------------
     THE CONTACT FORM
     Replace the XXXXXXXX below with the code Formspree gives you when you
     sign up (it looks like "xdkoqwlr"). Until you do, the form shows a
     friendly note instead of pretending to send.
     --------------------------------------------------------------------- */
  formspreeId: '',
};

/* =========================================================================
   THE PHOTOGRAPHS

   To add one:
     1. Put the file in the folder  src/assets/plates
     2. Add its filename to one of the lists below, in quote marks,
        with a comma after it.

   The order of the list is the order on the page. Move a line up to move
   the photograph up. Delete a line to take it off the site (the file stays
   in the folder — nothing is thrown away).
   ========================================================================= */

export const PORTFOLIO = [
  'Josephs_Winter_Menu_22_Entree_Flatlay_Full_greener.jpg',
  'Market-9-of-11.jpg',
  'tuscany-1-of-1-4.jpg',
  'Albert-1-of-1-2.jpg',
  'Josephs_Winter_Menu_22_Meat_Grating_Web.jpg',
  'Market-11-of-11.jpg',
  'Paradiso_FINAL.jpg',
  'Josephs_Winter_Menu_22_Sashimi_Flatlay_Full-1-of-1.jpg',
  'RipponleaJune-1-of-1-3.jpg',
  'Market-6-of-11.jpg',
  '394A1223-copy.jpg',
  'tuscany-1-of-1-2.jpg',
  'Josephs_Winter_Menu_22_Marshmellow_Web.jpg',
  '3000-1-of-1-copy.jpg',
  'RipponleaJune-1-of-1-8.jpg',
  'tuscany-1-of-1.jpg',
  'Josephs_Winter_Menu_22_Entree_Lifestyle_Web.jpg',
  'PopUp-1-of-1.jpg',
  '394A1340-copy.jpg',
  'Josephs_Winter_Menu_22_Entree_Web.jpg',
];

export const SKETCHBOOK = [
  'tuscany-1-of-1-9.jpg',
  'grapes-1-of-1.jpg',
  'tuscany-1-of-1-3.jpg',
  'stilllifewhite-1-of-1.jpg',
  'smolkombucha-1-of-1.jpg',
  'tuscany-1-of-1-6.jpg',
];

// The menu, left to right down the sidebar.
export const NAV = [
  { label: 'Portfolio', href: '/' },
  { label: 'Sketchbook', href: '/sketchbook' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
