'use client';
import React from 'react';
import { Badge } from './ui/badge';
import { TAGS_MAP } from '@/lib/constants';
import { motion } from 'framer-motion';

const skills = [
  'TypeScript',
  'Go',
  'React',
  'Next.JS',
  'Zod',
  'Framer Motion',
  'Prisma',
];

const container = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const Skills = () => {
  return (
    <section className="pt-12 container">
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        {skills.map((skill, idx) => {
          const TagIcon = TAGS_MAP[skill]?.icon;
          const color = TAGS_MAP[skill]?.color;
          return (
            <motion.li variants={item} key={idx}>
              <Badge
                style={{
                  borderColor: `${color}`,
                }}
                className="inline-flex items-center mr-2"
              >
                <TagIcon
                  style={{ color, fontSize: '20px', marginRight: '8px' }}
                />
                <span>{skill}</span>
              </Badge>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default Skills;
