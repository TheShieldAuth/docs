import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { getGithubLastEdit } from "fumadocs-core/server";
import { Metadata } from "next";
import TocContributorCard from "@/components/toc-contributor-card";
import { getFileContributors } from "@/lib/utils/github";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  const time = await getGithubLastEdit({
    owner: "shield-auth",
    repo: "docs",
    path: `content/${page.file.path}`,
  });

  const contributors = await getFileContributors(
    "shield-auth",
    "docs",
    `content/${page.file.path}`,
  );

  return (
    <DocsPage
      toc={page.data.toc}
      tableOfContent={{
        style: "clerk",
        single: false,
        footer: <TocContributorCard contributors={contributors} />,
      }}
      tableOfContentPopover={{
        style: "clerk",
        footer: <TocContributorCard contributors={contributors} />,
      }}
      full={page.data.full}
      lastUpdate={time ? new Date(time) : undefined}
      editOnGithub={{
        owner: "shield-auth",
        repo: "docs",
        sha: "trunk",
        // file path, make sure it's valid
        path: `content/${page.file.path}`,
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      images: [
        {
          url: "/img/shield-social-card.png",
          width: 1200,
          height: 630,
          alt: "Shield",
        },
      ],
      siteName: "Shield Docs",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      site: "@shield_auth",
      title: page.data.title,
      description: page.data.description,
      creator: "@MKSingh_Dev",
      images: [
        {
          url: "/img/shield-social-card.png",
          width: 1200,
          height: 630,
          alt: "Shield",
        },
      ],
    },
  };
}
