export type CommunityPost = { id: string; title: string; body: string; date: string };

// Populate only when verified community records are supplied.
export const announcements: CommunityPost[] = [];
export const victories: CommunityPost[] = [];
export const stateRules: { id: string; heading: string; body: string }[] = [];
