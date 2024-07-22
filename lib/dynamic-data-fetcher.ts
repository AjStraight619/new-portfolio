import { Octokit } from 'octokit';
import { OWNER } from './data';
import { cache } from 'react';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN!,
  request: {},
});

export const dynamicDataFetcher = async (repo: string) => {
  const per_page = 100;
  let page = 1;
  let commits: any[] = [];
  let response;

  do {
    response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
      owner: OWNER,
      repo,
      per_page,
      page,
    });

    commits = commits.concat(response.data);
    page += 1;
  } while (response.data.length === per_page);

  const lastCommitDate =
    commits.length > 0 ? commits[0].commit.author.date : null;

  // Fetch languages
  const { data: languagesData } = await octokit.request(
    'GET /repos/{owner}/{repo}/languages',
    {
      owner: OWNER,
      repo,
    },
  );

  // Calculate percentages
  const totalBytes = Object.values(languagesData).reduce(
    (acc: number, bytes: number) => acc + bytes,
    0,
  );
  const languages = Object.fromEntries(
    Object.entries(languagesData).map(([language, bytes]) => [
      language,
      (bytes / totalBytes) * 100,
    ]),
  );

  return {
    commits: commits.length,
    lastCommitDate,
    languages,
  };
};
