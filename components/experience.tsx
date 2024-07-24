'use client';
import { experiencesData } from '@/lib/data';
// import { useSectionInView } from "@/lib/hooks";
// import SectionHeading from "./SectionHeading";

// import { useTheme } from "@/context/ThemeContext";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PageHeader from './page-header';
import { useTheme } from 'next-themes';

export default function Experience() {
  //   const targetRef = useRef(null);
  //   const { scrollYProgress } = useScroll({
  //     target: targetRef,
  //     offset: ['0 1', '1.33 1'],
  //   });
  const { theme } = useTheme();
  //   const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  //   const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const lineColor = theme === 'dark' ? '#fff' : '#000';

  return (
    <motion.div
    //   ref={targetRef}
    //   style={{
    //     scale: scaleProgess,
    //     opacity: opacityProgess,
    //   }}
    >
      <PageHeader>My experience</PageHeader>
      <VerticalTimeline lineColor={lineColor}>
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            visible={true}
            icon={experience.icon}
            className="vertical-timeline-element--work"
            contentStyle={{
              color: theme === 'dark' ? '#fff' : '#000',
              backgroundColor:
                theme === 'dark' ? 'rgb(3,7,18)' : 'rgb(229,231,235)',
              boxShadow:
                theme === 'dark'
                  ? '0 4px 6px rgba(0, 0, 0, 0.2)' // Darker shadow for dark mode
                  : '0 4px 6px rgba(0, 0, 0, 0.1)', // Lighter shadow for light mode
            }}
            contentArrowStyle={{
              borderRight: `7px solid  ${
                theme === 'dark' ? 'rgb(3,7,18)' : 'rgb(229,231,235)'
              }`,
            }}
            date={experience.date}
            iconStyle={{
              background: theme === 'dark' ? 'rgb(3,7,18)' : 'rgb(229,231,235)',
              color: theme === 'dark' ? '#fff' : '#000',
            }}
            dateClassName="text-primary"
            textClassName="text-primary"
          >
            <div className="flex flex-col space-y-1">
              <h3 className="text-lg font-semibold">{experience.title}</h3>
              <h5 className="text-sm">{experience.subtitle}</h5>

              <p className="tracking-tighter leading-none">
                {experience.description}
              </p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.div>
  );
}
