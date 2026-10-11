import Link from "next/link";
import Image from "next/image";
import { Calendar, Campsite, Events, Flag, Group, Home, Notification, Rule, Snowflake, Trophy, WarningAlt } from "@carbon/icons-react";
import { sections } from "@/lib/portal-content";
import { ThemeToggle } from "@/components/theme-toggle";

export function PortalShell({ children, activeSlug }: { children: React.ReactNode; activeSlug: string }) {
  return <div className="portal">
    <aside className="sidebar" aria-label="Main navigation">
      <Link className="brand" href="/">
        <Image className="brand-mark" src="/images/whiteout-game-icon.png" alt="" width={44} height={44} priority />
        <span className="brand-copy"><strong>WHITEOUT SURVIVAL</strong><span>STATE 2566 PORTAL</span></span>
      </Link>
      <nav aria-label="Portal sections">
        <Link className="nav-link" aria-current={activeSlug === "overview" ? "page" : undefined} href="/"><span aria-hidden="true"><Home size={18} /></span>Overview</Link>
        <Link className="nav-link" aria-current={activeSlug === "alliances" ? "page" : undefined} href="/alliances"><span aria-hidden="true"><Group size={18} /></span>Top 5 Alliances</Link>
        <Link className="nav-link" aria-current={activeSlug === "rankings" ? "page" : undefined} href="/rankings"><span aria-hidden="true"><Trophy size={18} /></span>State Rankings</Link>
        <Link className="nav-link" aria-current={activeSlug === "events" ? "page" : undefined} href="/events"><span aria-hidden="true"><Calendar size={18} /></span>Events Calendar</Link>
        {sections.map((section) => <Link className="nav-link" aria-current={activeSlug === section.slug ? "page" : undefined} href={`/${section.slug}`} key={section.slug}><span aria-hidden="true">{iconFor(section.slug)}</span>{section.navLabel}</Link>)}
      </nav>
    </aside>
    <div className="main">
      <header className="topbar"><span className="topbar-label">Community information portal</span><div className="topbar-actions"><span className="status-pill"><span className="status-dot" />State 2566</span><ThemeToggle /></div></header>
      {children}
      <footer className="footer">Whiteout Survival State 2566 Community Portal <span className="fan-tag">Unofficial fan site</span><br />Community maintained. Game content and trademarks belong to their respective owners. Game icon: <a href="https://apps.apple.com/in/app/whiteout-survival/id6443575749" target="_blank" rel="noreferrer">official App Store listing</a>; gameplay image: <a href="https://www.talkandroid.com/42620-whiteout-survival-fire-crystals/" target="_blank" rel="noreferrer">TalkAndroid</a>; resource icons: <a href="https://wostoolkit.deepfriedmind.com/fire-crystal-building-upgrade-calculator/" target="_blank" rel="noreferrer">WoS Toolkit</a>.</footer>
    </div>
  </div>;
}

function iconFor(slug: string) {
  const icons = { victories: <Trophy size={18} />, svs: <Flag size={18} />, foundry: <Campsite size={18} />, canyon: <Events size={18} />, "cannon-fight": <WarningAlt size={18} />, rules: <Rule size={18} />, announcements: <Notification size={18} /> };
  return icons[slug as keyof typeof icons] ?? <Snowflake size={18} />;
}
