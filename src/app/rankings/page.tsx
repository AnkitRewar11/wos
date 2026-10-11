import Link from "next/link";
import { PortalShell } from "@/components/portal-shell";
import { rankingCategories, rankingSnapshotLabel } from "@/data/rankings";
import { Trophy } from "@carbon/icons-react";
import { PageBanner } from "@/components/page-banner";

export default function RankingsIndexPage() {
  return <PortalShell activeSlug="rankings"><main className="content">
    <PageBanner icon={<Trophy size={28} />} eyebrow={`State 2566 · ${rankingSnapshotLabel}`} title="State Rankings" description="Browse each in-game ranking separately. Each board includes the positions visible in its own screenshot." />
    <div className="ranking-category-grid">
      {rankingCategories.map((category) => <Link className="panel ranking-category-card" href={`/rankings/${category.slug}`} key={category.slug}>
        <span className="panel-label">{category.navLabel}</span>
        <strong>{category.records.length} supplied positions</strong>
        <span className="card-action">Open leaderboard <span aria-hidden="true">→</span></span>
      </Link>)}
    </div>
    <p className="snapshot-note"><strong>Partial screenshot data</strong><span>Unseen positions are omitted. The bottom blue row in each screenshot is shown as “Your profile”.</span></p>
  </main></PortalShell>;
}
