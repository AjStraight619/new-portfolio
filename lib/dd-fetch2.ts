import { OWNER } from './data';
import { cache } from 'react';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;

const fetchWithAuth = async (url: string): Promise<any> => {
  const response = await fetch(url, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
    },
  });

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  return response.json();
};

interface Commit {
  commit: {
    author: {
      date: string;
    };
  };
}

interface LanguagesData {
  [language: string]: number;
}

export const dynamicDataFetcher = async (repo: string) => {
  const per_page = 100;
  let page = 1;
  let commits: Commit[] = [];
  let response: Commit[];

  do {
    const url = `https://api.github.com/repos/${OWNER}/${repo}/commits?per_page=${per_page}&page=${page}`;
    response = (await fetchWithAuth(url)) as Commit[];
    commits = commits.concat(response);
    page += 1;
  } while (response.length === per_page);

  const lastCommitDate =
    commits.length > 0 ? commits[0].commit.author.date : null;

  // Fetch languages
  const languagesUrl = `https://api.github.com/repos/${OWNER}/${repo}/languages`;
  const languagesData = (await fetchWithAuth(languagesUrl)) as LanguagesData;

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
