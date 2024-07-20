import { IconType } from 'react-icons';
import { FaAws } from 'react-icons/fa';
import {
  SiFramer,
  SiGo,
  SiJavascript,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from 'react-icons/si';

export const TAGS_MAP: {
  [key: string]: {
    icon: IconType;
    color: string;
  };
} = {
  React: { icon: SiReact, color: '#61dafb' },
  'Next.JS': { icon: SiNextdotjs, color: '#000000' },
  TypeScript: { icon: SiTypescript, color: '#3178c6' },
  JavaScript: { icon: SiJavascript, color: '#f7df1e' },
  Go: { icon: SiGo, color: '#00add8' },
  Tailwind: { icon: SiTailwindcss, color: '#38b2ac' },
  Zod: { icon: SiZod, color: '#ff5a5f' },
  'Framer Motion': { icon: SiFramer, color: '#e91e63' },
  Prisma: { icon: SiPrisma, color: '#2d3748' },
  AWS: { icon: FaAws, color: '#ff9900' },
};
