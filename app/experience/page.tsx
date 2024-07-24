import Experience from '@/components/experience';
import dynamic from 'next/dynamic';
import React from 'react';

const NoSSRExperience = dynamic(() => import('@/components/experience'), {
  ssr: false,
});

const ExperiencePage = () => {
  return (
    <div className="min-h-screen p-24">
      <NoSSRExperience />
    </div>
  );
};

export default ExperiencePage;
