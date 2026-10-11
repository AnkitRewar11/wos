import Link from "next/link";
import Image from "next/image";
import { Calendar, Events, Group, Information, Trophy, WarningAlt } from "@carbon/icons-react";
import { PortalShell } from "@/components/portal-shell";
import { topAlliances } from "@/data/alliances";
import { rankingCategories, rankingSnapshotLabel } from "@/data/rankings";
import { dashboardEventTypes } from "@/data/events";
import { announcements, victories } from "@/data/community";

export default function Home() {
  return <PortalShell activeSlug="overview">
    <main className="content">
      <section className="welcome-hero" aria-labelledby="home-title">
        <div className="welcome-copy"><span className="eyebrow">Unofficial community portal</span><h1 id="home-title" className="page-title">State 2566</h1><p className="subtitle">Your community hub for alliance information, battle schedules, state announcements, and shared achievements.</p><Link className="hero-link" href="/alliances">Explore the state portal <span aria-hidden="true">→</span></Link></div>
      </section>
      <section aria-labelledby="alliance-snapshot-heading">
        <div className="section-heading-row"><h2 id="alliance-snapshot-heading" className="section-heading">Top alliances</h2><Link className="hero-link" href="/alliances">View top five <span aria-hidden="true">→</span></Link></div>
        <div className="alliance-summary-grid">{topAlliances.slice(0, 3).map((alliance) => <article className="panel alliance-summary-card" key={alliance.rank}><Image className="alliance-summary-flag" src={alliance.flag ?? "/images/whiteout-game-icon.png"} alt={`${alliance.tag} alliance flag`} width={56} height={72} /><span className="eyebrow">Rank {alliance.rank}</span><strong>[{alliance.tag}]</strong><span>{alliance.leader}</span><b>{BigInt(alliance.power).toLocaleString("en-US")}</b><small>Alliance power</small></article>)}</div>
      </section>
      <section aria-labelledby="rankings-heading"><div className="section-heading-row"><h2 id="rankings-heading" className="section-heading">State rankings</h2><span className="snapshot-date">Snapshot · {rankingSnapshotLabel}</span></div><div className="ranking-quick-links">{rankingCategories.map((category) => <Link className="ranking-quick-link" href={`/rankings/${category.slug}`} key={category.slug}><Trophy size={16} aria-hidden="true" />{category.navLabel}<span aria-hidden="true">→</span></Link>)}</div></section>
      <section aria-labelledby="resources-heading" className="resource-section"><div className="resource-heading"><div><span className="eyebrow">From the game</span><h2 id="resources-heading" className="section-heading">Survival resources</h2></div><p>Core materials featured in Whiteout Survival</p></div><div className="resource-strip">
        <ResourceItem name="Meat" src="/images/resource-meat.webp" />
        <ResourceItem name="Wood" src="/images/resource-wood.webp" />
        <ResourceItem name="Coal" src="/images/resource-coal.webp" />
        <ResourceItem name="Iron" src="/images/resource-iron.webp" />
      </div></section>
      <section aria-labelledby="status-heading"><h2 id="status-heading" className="section-heading">State briefing</h2>
        <div className="callout"><Information size={20} /><div><strong>Welcome to the State 2566 portal</strong><p>Explore the sections below for community information. Schedules and state details will be published here when confirmed.</p></div></div>
      </section>
      <section aria-labelledby="upcoming-heading"><h2 id="upcoming-heading" className="section-heading">Upcoming events</h2><div className="event-snapshot-grid">{dashboardEventTypes.map((event) => <Link className="panel event-snapshot-card" href={event.href} key={event.title}><span className="panel-label">{event.title}</span><strong>Not announced yet</strong><span className="card-action">View details <span aria-hidden="true">→</span></span></Link>)}</div></section>
      <section aria-labelledby="victories-heading"><div className="section-heading-row"><h2 id="victories-heading" className="section-heading">Recent victories</h2><Link className="hero-link" href="/victories">Victory Hall <span aria-hidden="true">→</span></Link></div>{victories.length ? victories.slice(0, 3).map((victory) => <article className="panel panel-full" key={victory.id}><strong>{victory.title}</strong><p>{victory.body}</p></article>) : <div className="panel panel-full empty"><strong>No victories published yet</strong>Verified achievements will appear here when supplied.</div>}</section>
      <section aria-labelledby="overview-heading"><h2 id="overview-heading" className="section-heading">Explore the portal</h2>
        <div className="grid">
          <SummaryCard href="/alliances" title="Top 5 Alliances" icon={<Group size={18} />} description="See the five alliance power positions shown in the snapshot." />
          <SummaryCard href="/rankings" title="Player Rankings" icon={<Trophy size={18} />} description="Open ten separate player leaderboard categories." />
          <SummaryCard href="/victories" title="Victory Hall" icon={<Trophy size={18} />} description="Read verified achievements and results." />
          <SummaryCard href="/events" title="Events Calendar" icon={<Calendar size={18} />} description="Check configured events and view announced dates." />
          <SummaryCard href="/foundry" title="Foundry & Canyon" icon={<Events size={18} />} description="View separate battle schedules and details." />
          <SummaryCard href="/svs" title="SvS Status" icon={<WarningAlt size={18} />} description="Check preparation, battle, and past results." />
          <SummaryCard href="/announcements" title="Announcements" icon={<Information size={18} />} description="Catch up on community updates." />
        </div>
      </section>
      <section aria-labelledby="updates-heading"><div className="section-heading-row"><h2 id="updates-heading" className="section-heading">Latest announcements</h2><Link className="hero-link" href="/announcements">All announcements <span aria-hidden="true">→</span></Link></div>{announcements.length ? announcements.slice(0, 3).map((item) => <article className="panel panel-full" key={item.id}><strong>{item.title}</strong><p>{item.body}</p></article>) : <article className="panel panel-full"><div className="empty"><strong>No announcements yet</strong>Community notices will appear here when available.</div></article>}</section>
    </main>
  </PortalShell>;
}

function SummaryCard({ href, title, icon, description }: { href: string; title: string; icon: React.ReactNode; description: string }) {
  return <Link className="panel summary-card" href={href}><span className="panel-label">{icon} {title}</span><p>{description}</p><span className="card-action">Explore section <span aria-hidden="true">→</span></span></Link>;
}

function ResourceItem({ name, src }: { name: string; src: string }) {
  return <div className="resource-item"><span className="resource-image"><Image src={src} alt="" width={64} height={64} /></span><span>{name}</span></div>;
}
