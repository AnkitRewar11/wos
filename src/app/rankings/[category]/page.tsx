import { notFound } from "next/navigation";
import { PortalShell } from "@/components/portal-shell";
import { Leaderboard } from "@/components/rankings/leaderboard";
import { getRankingCategory, rankingCategories, rankingSnapshotLabel } from "@/data/rankings";
import { Trophy } from "@carbon/icons-react";
import { PageBanner } from "@/components/page-banner";

export const dynamicParams = false;

export function generateStaticParams() {
  return rankingCategories.map(({ slug }) => ({ category: slug }));
}

export default async function RankingPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getRankingCategory(slug);
  if (!category) notFound();

  return <PortalShell activeSlug="rankings"><main className="content">
    <PageBanner icon={<Trophy size={28} />} eyebrow={`State Rankings · ${rankingSnapshotLabel}`} title={category.title} description={category.summary} />
    <Leaderboard category={category} />
  </main></PortalShell>;
}
