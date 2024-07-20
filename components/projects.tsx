'use client';
import { ProjectData } from '@/lib/types';
import React from 'react';
import { motion } from 'framer-motion';
import Project from './project';

type ProjectsProps = {
  totalCommits: number;
  projects: ProjectData[];
};

const Projects = ({ totalCommits, projects }: ProjectsProps) => {
  return (
    <section className="w-full flex justify-center items-center">
      <motion.ul className="flex flex-col items-center justify-center gap-4 w-full max-w-4xl">
        {projects.map((proj, idx) => (
          <motion.li key={idx}>
            <Project totalCommits={totalCommits} project={proj} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Projects;
