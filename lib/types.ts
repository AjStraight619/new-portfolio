export type ProjectData = {
  title: string;
  status: string;
  repo: string;
  description: string;
  tags: string[];
  imageUrl: string;
  href: string;
  commits?: number;
  lastCommitDate?: string;
  languages?: { [key: string]: number };
};
