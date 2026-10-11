import type { ReactNode } from "react";

export function PageBanner({ icon, eyebrow, title, description, badge }: { icon: ReactNode; eyebrow: string; title: string; description: string; badge?: ReactNode }) {
  return <section className="page-banner">
    <span className="page-banner-icon" aria-hidden="true">{icon}</span>
    <div><span className="eyebrow">{eyebrow}</span><h1 className="page-title">{title}</h1><p className="subtitle">{description}</p></div>
    {badge ? <div className="page-banner-badge">{badge}</div> : null}
  </section>;
}
