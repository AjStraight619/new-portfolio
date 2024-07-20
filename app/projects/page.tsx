import PageHeader from '@/components/page-header';
import { ProjectsFetcher } from '@/components/projects-fetcher';
import React, { Suspense } from 'react';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-24">
      <PageHeader>Projects</PageHeader>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsFetcher />
      </Suspense>
    </div>
  );
};

export default ProjectsPage;
