import { Social } from './types';

export const AUGUSTUS_SCAN = {
  lowPoly: 'assets/models/augustus-low-poly.glb',
  // highRes: 'assets/models/augustus-high-res.glb',
  highRes: 'assets/models/augustus-low-poly.glb', // high-res model is bigger than GitHub's limit
};

export const SOCIAL_LOGOS = {
  youtube: 'assets/models/youtube.glb',
  spotify: 'assets/models/spotify.glb',
};

// Converted with https://gero3.github.io/facetype.js/
export const FONT_PATH = 'assets/fonts/kanit/regular.json';

export const SOCIALS: ReadonlyArray<Social> = [
  {
    name: 'spotify',
    color: '#1db954',
    description: {
      text: 'Host on\n"Adventures\nin Angular"\n\n#1 Angular\nPodcast\nWorld-wide',
      position: [-20, 3, 0],
    },
    object: {
      path: SOCIAL_LOGOS.spotify,
      position: [-9, 5, 0],
      scale: [2.5, 2.5, 2.5],
    },
  },
  {
    name: 'youtube',
    color: '#ff0000',
    description: {
      text: '\n              +350.000\n                    Views\n\n                   About\nAngular & Web\n    Development',
      position: [8, 3, 0],
    },
    object: {
      path: SOCIAL_LOGOS.youtube,
      position: [8, 5, 0],
      scale: [4, 4, 4],
    },
  },
];
