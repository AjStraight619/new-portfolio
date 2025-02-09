import PageHeader from '@/components/page-header';
import { ProjectsFetcher } from '@/components/projects-fetcher';
import React, { Suspense } from 'react';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col  items-center p-24">
      <PageHeader>Projects</PageHeader>

      <ProjectsFetcher />
    </div>
  );
};

export default ProjectsPage;
