'use client';
import { ProjectData } from '@/lib/types';
import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Project from './project';
import SectionDivider from './section-divider';
import SectionHeading from './section-header';
import { Section } from 'lucide-react';

type ProjectsProps = {
  totalCommits: number;
  projects: ProjectData[];
};

const Projects = ({ totalCommits, projects }: ProjectsProps) => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  useEffect(() => {
    if (imagesLoaded === projects.length) {
      setAllImagesLoaded(true);
    }
  }, [imagesLoaded, projects.length]);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <section className="pt-12">
        <SectionHeading>Web Projects</SectionHeading>
        <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects.map((proj, idx) => (
            <motion.li key={idx}>
              <Project
                totalCommits={totalCommits}
                project={proj}
                onImageLoad={handleImageLoad}
                allImagesLoaded={allImagesLoaded}
              />
            </motion.li>
          ))}
        </motion.ul>
      </section>
      <section className="pt-12">
        <SectionHeading>Other</SectionHeading>
      </section>
    </div>
  );
};

export default Projects;
