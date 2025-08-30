/* eslint-disable import/prefer-default-export */

// ScoutBar functionality temporarily removed due to runtime errors
// import {
//   createScoutAction,
//   createScoutSection,
//   createScoutPage,
// } from 'scoutbar';
import ARTICLE_DATA from '../AppData/articles';
import LENS_DATA from '../AppData/lens';
import PROJECTS_DATA from '../AppData/projects';

// ScoutBar actions function temporarily disabled
export const actions = (theme: () => void) => {
  // Return empty array to prevent ScoutBar errors
  return [];
  
  // Original ScoutBar code commented out:
  /*
  return [
    createScoutAction({
      label: 'Home',
      href: '/',
      keyboardShortcut: ['h'],
    }),

    createScoutAction({
      label: 'Resume',
      href: '/resume',
      keyboardShortcut: ['r'],
    }),
    createScoutAction({
      label: 'Contact Me',
      href: '/contact',
      keyboardShortcut: ['c'],
    }),

    createScoutSection({
      label: 'About Ugender Dharavath',

      children: [
        createScoutAction({
          label: 'About Ugender Dharavath',
          href: '/about',
          keyboardShortcut: ['a'],
        }),
        createScoutAction({
          label: 'Playlist',
          href: '/about#playlist',
        }),
        createScoutAction({
          label: "Ugender's Lens",
          href: '/about#lens',
        }),
      ],
    }),

    createScoutSection({
      label: 'Portfolio Sections',

      children: [
        createScoutPage({
          label: 'Projects',
          children: PROJECTS_DATA.map((project) =>
            createScoutAction({
              label: project.title,
              href: project.link,
              description: project.description,
              icon: project.imageUrl,
            })
          ),
        }),
        createScoutPage({
          label: 'Lens',
          children: LENS_DATA.map((project) =>
            createScoutAction({
              label: project.title,
              href: project.link,
              description: project.description,
              icon: project.imageUrl,
            })
          ),
        }),
        createScoutPage({
          label: 'Articles',
          children: ARTICLE_DATA.map((project) =>
            createScoutAction({
              label: project.title,
              href: project.link,
              description: project.description,
              icon: project.imageUrl,
            })
          ),
        }),
      ],
    }),

    createScoutSection({
      label: 'Preference',

      children: [
        createScoutAction({
          label: 'Change Theme',
          action: () => theme(),
          keyboardShortcut: ['meta', 'l'],
        }),
      ],
    }),
  ];
  */
};
