// types.ts
export interface GitHubContributor {
  username: string;
  avatarUrl: string;
  profileUrl: string;
  commitCount: number;
  firstCommit: string;
  lastCommit: string;
}

interface GitHubCommit {
  sha: string;
  commit: {
    author: {
      name: string;
      date: string;
    };
  };
  author: {
    login: string;
    avatar_url: string;
    html_url: string;
  } | null;
}

// utils/github.ts
export async function getFileContributors(
  owner: string,
  repo: string,
  filePath: string,
  githubToken?: string,
): Promise<GitHubContributor[]> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    ...(githubToken && { Authorization: `token ${githubToken}` }),
  };

  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?path=${encodeURIComponent(filePath)}`,
      { headers },
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const commits: GitHubCommit[] = await response.json();
    const contributorsMap = new Map<string, GitHubContributor>();

    commits.forEach((commit) => {
      const author = commit.author || {
        login: commit.commit.author.name,
        avatar_url: "",
        html_url: "",
      };

      const username = author.login;

      if (!contributorsMap.has(username)) {
        contributorsMap.set(username, {
          username,
          avatarUrl: author.avatar_url,
          profileUrl: author.html_url,
          commitCount: 0,
          firstCommit: commit.commit.author.date,
          lastCommit: commit.commit.author.date,
        });
      }

      const contributor = contributorsMap.get(username)!;
      contributor.commitCount += 1;

      // Update first and last commit dates
      if (
        new Date(commit.commit.author.date) < new Date(contributor.firstCommit)
      ) {
        contributor.firstCommit = commit.commit.author.date;
      }
      if (
        new Date(commit.commit.author.date) > new Date(contributor.lastCommit)
      ) {
        contributor.lastCommit = commit.commit.author.date;
      }
    });

    return Array.from(contributorsMap.values()).sort(
      (a, b) => b.commitCount - a.commitCount,
    );
  } catch (error) {
    console.error("Error fetching file contributors:", error);
    throw error;
  }
}

// Example usage in a Next.js API route (app/api/contributors/route.ts):
// import { NextResponse } from "next/server";
//
// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const owner = searchParams.get("owner");
//   const repo = searchParams.get("repo");
//   const filePath = searchParams.get("filePath");
//
//   if (!owner || !repo || !filePath) {
//     return NextResponse.json(
//       { error: "Missing required parameters" },
//       { status: 400 },
//     );
//   }
//
//   try {
//     const contributors = await getFileContributors(owner, repo, filePath);
//     return NextResponse.json(contributors);
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to fetch contributors" },
//       { status: 500 },
//     );
//   }
// }
