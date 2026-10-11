import { notFound } from "next/navigation";
import { PortalShell } from "@/components/portal-shell";
import { SectionBoard } from "@/components/section/section-board";
import { getSection, sections } from "@/lib/portal-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return sections.map(({ slug }) => ({ section: slug }));
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section: slug } = await params;
  const section = getSection(slug);
  if (!section) notFound();

  return <PortalShell activeSlug={section.slug}><SectionBoard section={section} /></PortalShell>;
}
