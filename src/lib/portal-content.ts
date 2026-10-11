export type PortalSection = {
  slug: string;
  title: string;
  navLabel: string;
  summary: string;
  emptyTitle: string;
  emptyMessage: string;
};

export const sections: PortalSection[] = [
  { slug: "victories", title: "Victory Hall", navLabel: "Victory Hall", summary: "A record of community achievements and notable results.", emptyTitle: "No achievements published", emptyMessage: "Verified results will be added here when source information is available." },
  { slug: "svs", title: "State vs State", navLabel: "SvS", summary: "Preparation, battle status, and historical State vs State results.", emptyTitle: "SvS information not announced", emptyMessage: "No schedule or result is currently published for this section." },
  { slug: "foundry", title: "Foundry Battle", navLabel: "Foundry Battle", summary: "Foundry Battle schedules, participation details, and results.", emptyTitle: "Foundry schedule not announced", emptyMessage: "Battle times and participants will appear here after they are confirmed." },
  { slug: "canyon", title: "Canyon Battle", navLabel: "Canyon Battle", summary: "Canyon Battle schedules, participation details, and results.", emptyTitle: "Canyon schedule not announced", emptyMessage: "Battle times and participants will appear here after they are confirmed." },
  { slug: "cannon-fight", title: "Cannon Fight", navLabel: "Cannon Fight", summary: "Coordination information and schedule for Cannon Fight.", emptyTitle: "Cannon Fight schedule not announced", emptyMessage: "Fight times and participation details will appear here when confirmed." },
  { slug: "rules", title: "State Rules", navLabel: "State Rules", summary: "Community policies and coordination guidelines.", emptyTitle: "No state rules published", emptyMessage: "Rules will be listed here once State 2566 policies are provided." },
  { slug: "announcements", title: "Announcements", navLabel: "Announcements", summary: "Updates and notices for the State 2566 community.", emptyTitle: "No announcements", emptyMessage: "Community updates will appear here when they are provided." },
];

export const getSection = (slug: string) => sections.find((section) => section.slug === slug);
