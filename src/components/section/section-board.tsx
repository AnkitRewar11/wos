import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, InlineNotification, Tag } from "@carbon/react";
import { ArrowRight, Calendar, Events, Flag, Group, Information, Notification, Rule, Trophy, WarningAlt } from "@carbon/icons-react";
import type { PortalSection } from "@/lib/portal-content";
import { announcements, stateRules, victories } from "@/data/community";

const pageDetails: Record<string, { label: string; status: string; cards: { icon: "calendar" | "group" | "flag" | "trophy" | "rule" | "notice"; title: string; body: string }[] }> = {
  svs: { label: "State vs State", status: "Schedule not announced", cards: [
    { icon: "calendar", title: "Preparation phase", body: "Confirmed start and end times will appear here when State 2566 publishes its schedule." },
    { icon: "flag", title: "Battle phase", body: "The battle window and any state-specific notes have not been supplied yet." },
    { icon: "group", title: "Opponent & coordination", body: "Opponent details and verified coordination notes will be listed once announced." },
  ] },
  foundry: { label: "Alliance warfare", status: "Next battle not announced", cards: [
    { icon: "calendar", title: "Next Foundry session", body: "The date, time, and timezone will be shown once the schedule is confirmed." },
    { icon: "group", title: "Participating alliances", body: "Confirmed participants and any supplied attendance details will appear here." },
    { icon: "trophy", title: "Battle record", body: "Results will be added after a verified report is supplied." },
  ] },
  canyon: { label: "Alliance warfare", status: "Next battle not announced", cards: [
    { icon: "calendar", title: "Next Canyon session", body: "Confirmed session times and timezone will be shown here." },
    { icon: "group", title: "Battle sessions", body: "Session assignments and participating alliances have not been supplied yet." },
    { icon: "trophy", title: "Battle record", body: "Verified Canyon results will appear here when available." },
  ] },
  "cannon-fight": { label: "State event", status: "Schedule not announced", cards: [
    { icon: "calendar", title: "Event window", body: "Confirmed event date, time, and timezone will appear here." },
    { icon: "group", title: "Participation", body: "Participation information will be listed after the state shares it." },
    { icon: "notice", title: "Battle notes", body: "Preparation notes and verified historical records will appear here when supplied." },
  ] },
};

const iconByName = {
  calendar: Calendar,
  group: Group,
  flag: Flag,
  trophy: Trophy,
  rule: Rule,
  notice: Notification,
} as const;

export function SectionBoard({ section }: { section: PortalSection }) {
  const detail = pageDetails[section.slug];
  const items = section.slug === "announcements" ? announcements : section.slug === "victories" ? victories : [];
  const count = section.slug === "announcements" ? announcements.length : section.slug === "victories" ? victories.length : undefined;
  const statusLabel = detail?.status ?? (section.slug === "rules" ? (stateRules.length ? "Verified rulebook" : "Awaiting verified rules") : count === 0 ? "No posts published" : "Community noticeboard");

  return <main className="content community-page">
    <Breadcrumb className="page-breadcrumb" noTrailingSlash>
      <BreadcrumbItem><Link href="/">State 2566</Link></BreadcrumbItem>
      <BreadcrumbItem aria-current="page">{section.title}</BreadcrumbItem>
    </Breadcrumb>
    <section className="community-hero">
      <div className="community-hero-icon" aria-hidden="true">{heroIcon(section.slug)}</div>
      <div><span className="eyebrow">{detail?.label ?? "State 2566 community"}</span><h1 className="page-title">{section.title}</h1><p className="subtitle">{section.summary}</p></div>
      <Tag type="blue" size="md">{statusLabel}</Tag>
    </section>

    {detail ? <>
      <div className="section-heading-row board-section-heading"><h2 className="section-heading">Command briefing</h2><span className="snapshot-date">State 2566 · Static information</span></div>
      <section className="section-briefing-grid" aria-label={`${section.title} briefing`}>
        {detail.cards.map((card) => {
          const Icon = iconByName[card.icon];
          return <article className="panel briefing-card" key={card.title}><span className="briefing-icon" aria-hidden="true"><Icon size={22} /></span><span className="eyebrow">{card.title}</span><p>{card.body}</p><span className="briefing-status"><span className="status-dot" />Awaiting confirmed information</span></article>;
        })}
      </section>
      {section.slug === "svs" ? <section className="phase-track" aria-label="SvS phases"><div><span>01</span><strong>Preparation</strong><small>Not announced</small></div><ArrowRight size={20} aria-hidden="true" /><div><span>02</span><strong>Battle</strong><small>Not announced</small></div><ArrowRight size={20} aria-hidden="true" /><div><span>03</span><strong>Results</strong><small>No verified record</small></div></section> : null}
      <InlineNotification className="community-notice" lowContrast kind="info" title="Waiting for State 2566 information" subtitle="This page is ready for local schedule, participant, and result data. Nothing has been filled with another state's information." hideCloseButton />
    </> : section.slug === "rules" ? <>
      <section className="rulebook-panel panel panel-full"><span className="briefing-icon" aria-hidden="true"><Rule size={24} /></span><div><span className="eyebrow">Community rulebook</span><h2 className="section-heading">{stateRules.length ? `${stateRules.length} published rules` : "State rules have not been supplied"}</h2><p className="subtitle">Only rules confirmed by State 2566 leadership will be published here. This page will group the approved text into clear, readable sections.</p></div><Tag type={stateRules.length ? "green" : "warm-gray"}>{stateRules.length ? "Verified rules" : "Awaiting verified rules"}</Tag></section>
      <InlineNotification className="community-notice" lowContrast kind="info" title="No rule text published" subtitle={section.emptyMessage} hideCloseButton />
    </> : <>
      <div className="community-stats" aria-label={`${section.title} summary`}>
        <article className="panel community-stat"><span className="eyebrow">Published records</span><strong>{count}</strong><small>{section.slug === "victories" ? "Verified achievements" : "Community notices"}</small></article>
        <article className="panel community-stat"><span className="eyebrow">Latest update</span><strong>{items.length ? items[0].date : "—"}</strong><small>From the supplied state data</small></article>
        <article className="panel community-stat"><span className="eyebrow">Board status</span><strong>{items.length ? "Active" : "Ready"}</strong><small>{items.length ? "Showing published records" : "Waiting for a verified post"}</small></article>
      </div>
      {items.length ? <section className="community-post-list" aria-label={section.title}>{items.map((item) => <article className="panel community-post" key={item.id}><div><span className="eyebrow">{item.date}</span><h2>{item.title}</h2></div><p>{item.body}</p></article>)}</section> : <section className="community-empty panel panel-full"><div className="community-empty-icon" aria-hidden="true">{section.slug === "victories" ? <Trophy size={30} /> : <Notification size={30} />}</div><span className="eyebrow">{section.slug === "victories" ? "Hall of honor" : "State dispatches"}</span><h2>{section.emptyTitle}</h2><p>{section.emptyMessage}</p><div className="empty-source-line"><Information size={16} aria-hidden="true" /><span>Records are published from the portal&apos;s local State 2566 data.</span></div></section>}
    </>}
  </main>;
}

function heroIcon(slug: string) {
  if (slug === "victories") return <Trophy size={30} />;
  if (slug === "svs") return <Flag size={30} />;
  if (slug === "foundry") return <Group size={30} />;
  if (slug === "canyon") return <Events size={30} />;
  if (slug === "cannon-fight") return <WarningAlt size={30} />;
  if (slug === "rules") return <Rule size={30} />;
  return <Notification size={30} />;
}
