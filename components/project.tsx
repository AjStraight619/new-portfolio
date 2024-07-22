import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { ProjectData } from '@/lib/types';
import Image from 'next/image';
import ProjectsChart from './projects-chart';
import { TAGS_MAP } from '@/lib/constants';
import { Badge } from './ui/badge';

type ProjectProps = {
  project: ProjectData;
  totalCommits: number;
};

const Project = ({ project, totalCommits }: ProjectProps) => {
  console.log('Project image url: ', project.imageUrl);
  const tags = project.tags.map((tag, idx) => {
    const TagIcon = TAGS_MAP[tag]?.icon;
    const color = TAGS_MAP[tag]?.color;

    if (TagIcon) {
      return (
        <Badge
          key={idx}
          style={{
            borderColor: `${color}`,
          }}
          className="inline-flex items-center mr-2"
        >
          <TagIcon style={{ color, fontSize: '20px', marginRight: '8px' }} />
          <span>{tag}</span>
        </Badge>
      );
    }

    return <Badge key={idx}>{tag}</Badge>;
  });

  if (!project?.languages) return null;

  return (
    <Card className="relative w-full max-w-3xl">
      <div className="absolute top-4 right-4 flex flex-col items-center gap-2">
        <p className="text-muted-foreground">
          Updated At: {project.lastCommitDate}
        </p>
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>
          {project.status} - Commits: {project.commits}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row gap-2">
        <Image
          src={project.imageUrl}
          alt="Project I worked on"
          width={600}
          height={400}
          quality={100}
          blurDataURL="data..."
          placeholder="blur"
        />
        {project?.languages && <ProjectsChart languages={project.languages} />}
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap items-center gap-3">
          {/* <span className="text-muted-foreground mr-2">Tech Stack:</span> */}
          {tags}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Project;
