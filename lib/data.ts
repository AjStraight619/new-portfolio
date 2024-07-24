import { SiGithub, SiLinkedin } from 'react-icons/si';
import { ProjectData } from './types';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import React from 'react';

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

export const OWNER = 'AjStraight619';

export const skills = [];

export const projectsData: ProjectData[] = [
  {
    title: 'Pictionary',
    status: 'Still in development',
    repo: 'pictionary',
    description:
      'Multiplayer game inspired by Skribbl.io. Using Go for WebSocket communication with the client.',
    tags: ['Next.JS', 'Go', 'Tailwind', 'Prisma', 'Framer Motion', 'Zod'],
    imageUrl: '/pictionary.png',
    href: 'https://pictionary-tan.vercel.app/',
  },
  {
    title: 'Pathfinding Visualizer',
    status: 'Completed',
    repo: 'algo-visualizer',
    description: 'Visualize pathfinding algorithms.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
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

export const goProjects = [{}];

export const experiencesData = [
  {
    title: 'Computer Science Tutor',
    subtitle: 'Southwestern College',
    location: 'Chula Vista, CA',
    description:
      'I worked as a computer science tutor at Southwestern College. I helped students with their programming assignments and projects. I also held workshops on various programming topics.',
    icon: React.createElement(CgWorkAlt),
    date: '2021 - 2022',
  },
  {
    title: 'Full-Stack Developer',
    subtitle: 'Freelancer',
    location: 'San Diego, CA',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Go, Tailwind, and Prisma. ",
    icon: React.createElement(FaReact),
    date: '2022 - present',
  },
  {
    title: 'Research Assistant',
    subtitle: 'San Diego State University',
    location: 'San Diego, CA',
    description:
      'I worked as a research assistant at San Deigo State University. I worked on a project that involved optimizing data rates for a NOMA (Non-Orthogonal Multiple Access) system. I used Python and MATLAB for this project.',
    icon: React.createElement(CgWorkAlt),
    date: '2023',
  },

  {
    title: 'Attending San Diego State University',
    subtitle: 'Computer Science, Major GPA: 4.0',
    location: 'San Diego, CA',
    description:
      'I am currently attending San Diego State University, majoring in Computer Science. I am expected to graduate in 2025. I am currently looking for a summer internship.',
    icon: React.createElement(LuGraduationCap),
    date: '2023 - present',
  },

  {
    title: 'Internship at AcademicAssist',
    subtitle: 'Frontend Developer',
    location: 'San Diego, CA',
    description:
      'I am currently working as a frontend developer intern at AcademicAssist. I am reworking their landing page, and adding new features to their web app. I am using React, TypeScript, and Tailwind for this project.',
    icon: React.createElement(CgWorkAlt),
    date: '2023 - present',
  },

  {
    title: 'Paid Internship at San Diego State University',
    subtitle: 'Frontend Developer',
    location: 'San Diego, CA',
    description:
      'Currently building a website for the Computer Science department at San Deigo State University. Implemented authentication with auth.js.',
    icon: React.createElement(CgWorkAlt),
    date: '2023 - present',
  },
] as const;
