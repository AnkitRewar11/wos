export type EventCategory = "SvS" | "Foundry Battle" | "Canyon Battle" | "Cannon Fight" | "Bear Hunt" | "Fortress / Stronghold" | "Alliance" | "State meeting" | "Other";

export type CommunityEvent = {
  id: string;
  title: string;
  category: EventCategory;
  startsAt: string;
  endsAt?: string;
  timezone: string;
  description?: string;
};

// No dates were provided in the source material, so the calendar intentionally starts empty.
export const communityEvents: CommunityEvent[] = [];
export const eventCategories: EventCategory[] = ["SvS", "Foundry Battle", "Canyon Battle", "Cannon Fight", "Bear Hunt", "Fortress / Stronghold", "Alliance", "State meeting", "Other"];
export const dashboardEventTypes = [
  { title: "SvS", href: "/svs" },
  { title: "Foundry Battle", href: "/foundry" },
  { title: "Canyon Battle", href: "/canyon" },
  { title: "Cannon Fight", href: "/cannon-fight" },
] as const;
