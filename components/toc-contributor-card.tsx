import { GitHubContributor } from "@/lib/utils/github";
import Image from "next/image";

const TocContributorCard = ({
  contributors,
}: {
  contributors: GitHubContributor[];
}): React.ReactNode => (
  <div className="flex flex-col gap-2 p-4 rounded-lg border-2 border-fd-border mt-5">
    <div className="text-xs">Contributors of this page</div>
    <div className="grid gap-2">
      {contributors.map((contributor) => (
        <Contributor key={contributor.username} contributor={contributor} />
      ))}
    </div>
  </div>
);

const Contributor = ({ contributor }: { contributor: GitHubContributor }) => (
  <div className="flex items-center gap-2">
    <Image
      src={contributor.avatarUrl}
      height={48}
      width={48}
      alt={`${contributor.username} avatar`}
      className="rounded-full bg-fd-border shrink-0"
    />
    <div className="flex flex-col">
      <a href={contributor.profileUrl} className="text-sm font-medium">
        {contributor.username}
      </a>
      <div className="text-xs text-gray-500 dark:text-gray-400">
        {contributor.commitCount} commit(s)
      </div>
      {/* <div className="text-xs text-gray-500 dark:text-gray-400"> */}
      {/*   {contributor.lastCommit} */}
      {/* </div> */}
    </div>
  </div>
);

export default TocContributorCard;
