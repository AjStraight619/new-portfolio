import { SiGithub, SiLinkedin } from 'react-icons/si';
import { ProjectData } from './types';

export const navLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About Me',
    route: '/about-me',
  },
  {
    label: 'Experience',
    route: '/experience',
  },

  {
    label: 'Projects',
    route: '/projects',
  },

  {
    label: 'Contact',
    route: '/contact',
  },
] as const;

export const navExternalLinks = [
  { icon: SiGithub, route: 'https://github.com/AjStraight619' },
  {
    icon: SiLinkedin,
    route: 'https://www.linkedin.com/in/alex-straight-997464272/',
  },
];

const GITHUB_BASE_URL = 'https://github.com/AjStraight619';

export const OWNER = 'AjStraight619';

export const projectsData: ProjectData[] = [
  {
    title: 'Pictionary',
    status: 'Still in development',
    repo: 'pictionary',
    description:
      'Multiplayer game inspired by Skribbl.io. Using Go for WebSocket communication with the client.',
    tags: [
      'TypeScript',
      'Next.JS',
      'Go',
      'Tailwind',
      'Prisma',
      'Framer Motion',
      'Zod',
    ],
    imageUrl: '/pictionary.png',
    href: 'https://pictionary-tan.vercel.app/',
  },
  {
    title: 'Pathfinding Visualizer',
    status: 'Completed',
    repo: 'algo-visualizer',
    description: 'Visualize pathfinding algorithms.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    imageUrl: '/pathfinding.png',
    href: 'https://algo-visualizer-nine.vercel.app/',
  },
  //   {
  //     title: 'Link Tree Clone',
  //     status: 'Still in development',
  //     repo: 'linktree-clone',
  //     description: 'Link Tree Clone is a clone of the popular Link Tree website.',
  //     tags: [
  //       'TypeScript',
  //       'Next.js',
  //       'Postgres',
  //       'Tailwind',
  //       'Prisma',
  //       'Framer Motion',
  //     ],
  //     imageUrl: '/link-tree-clone.png',
  //     href: 'https://ltree-clone.vercel.app/',
  //   },
];
