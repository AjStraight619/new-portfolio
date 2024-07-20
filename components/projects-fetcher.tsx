import { projectsData } from '@/lib/data';
import React from 'react';
import Projects from './projects';
import { dynamicDataFetcher } from '@/lib/dynamic-data-fetcher';

export const ProjectsFetcher = async () => {
  let totalCommits: number = 0;
  for (const project of projectsData) {
    const repo = project.repo;
    const { commits, lastCommitDate, languages } = await dynamicDataFetcher(
      repo,
    );

    totalCommits += commits;
    project.commits = commits;
    project.lastCommitDate = lastCommitDate
      ? new Date(lastCommitDate).toLocaleDateString()
      : undefined;
    project.languages = languages;
  }

  console.log('Projects: ', projectsData);
  console.log('Total commits: ', totalCommits);

  return <Projects projects={projectsData} totalCommits={totalCommits} />;
};
