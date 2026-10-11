import { PortalShell } from "@/components/portal-shell";
import { AllianceTable } from "@/components/alliance/alliance-table";
import { allianceSnapshotDate, allianceSnapshotSource, topAlliances } from "@/data/alliances";
import { formatMetric } from "@/lib/ranking-utils";
import { Group } from "@carbon/icons-react";
import { PageBanner } from "@/components/page-banner";
import Image from "next/image";

export default function AlliancePage() {
  return <PortalShell activeSlug="alliances"><main className="content">
    <PageBanner icon={<Group size={28} />} eyebrow={`Top alliance power · ${allianceSnapshotDate}`} title="Top 5 Alliances" description="Alliance power order from the supplied State 2566 screenshot. This directory is limited to the five visible top positions." />
    <section className="alliance-podium" aria-label="Top three alliances">
      {topAlliances.filter((alliance) => alliance.rank <= 3).map((alliance) => <article className={`alliance-card alliance-${alliance.rank}`} key={alliance.rank}>
        <span className="alliance-rank">{alliance.rank === 1 ? "#1 · ♛" : `#${alliance.rank}`}</span>
        <Image className="alliance-flag alliance-flag-podium" src={alliance.flag ?? "/images/whiteout-game-icon.png"} alt={`${alliance.tag} alliance flag`} width={88} height={104} />
        <span className="alliance-tag">[{alliance.tag}]</span>
        <strong>{alliance.leader}</strong>
        <span className="alliance-leader-label">Leader shown</span>
        <b>{formatMetric(alliance.power, "number")}</b>
        <small>Alliance power</small>
      </article>)}
    </section>
    <section className="alliance-table-section" aria-label="Alliance positions four and five">
      <h2 className="section-heading">Ranks 4–5</h2>
      <AllianceTable alliances={topAlliances.filter((alliance) => alliance.rank >= 4)} />
    </section>
    <p className="snapshot-note"><strong>{allianceSnapshotSource} · {allianceSnapshotDate}</strong><span>Only the five highest positions are displayed. Alliance power is kept as a decimal string for exact formatting.</span></p>
  </main></PortalShell>;
}
