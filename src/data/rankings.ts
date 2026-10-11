export type RankingRecord = {
  rank: number;
  playerName: string;
  allianceTag?: string;
  value: string;
  detail?: string;
  currentProfile?: boolean;
};

export type RankingCategory = {
  slug: string;
  title: string;
  navLabel: string;
  summary: string;
  metricLabel: string;
  format: "number" | "integer";
  detailLabel?: string;
  records: RankingRecord[];
};

export const rankingSnapshotDate = "2026-10-11";
export const rankingSnapshotLabel = "11 October 2026";
export const rankingSnapshotSource = "User-provided in-game ranking screenshots";

export const rankingCategories: RankingCategory[] = [
  {
    slug: "personal-power", title: "Personal Power", navLabel: "Personal Power",
    summary: "Player power shown in the supplied State 2566 snapshot.", metricLabel: "Power", format: "number",
    records: [
      { rank: 1, playerName: "산토리", value: "1243761186" },
      { rank: 2, playerName: "_START", allianceTag: "BaT", value: "946770438" },
      { rank: 3, playerName: "KickAzz", allianceTag: "RED", value: "939738063" },
      { rank: 4, playerName: "SOLO", allianceTag: "BaT", value: "916334441" },
      { rank: 5, playerName: "zero", allianceTag: "RED", value: "911805502" },
      { rank: 6, playerName: "SquirrelTCo", allianceTag: "IMF", value: "869946622" },
      { rank: 7, playerName: "맑은바위", allianceTag: "FAM", value: "867527579" },
      { rank: 8, playerName: "Moon", allianceTag: "FAM", value: "844631111" },
      { rank: 9, playerName: "Frosty", allianceTag: "RED", value: "752564346" },
      { rank: 125, playerName: "Your profile", allianceTag: "BaT", value: "402565885", currentProfile: true },
    ],
  },
  {
    slug: "furnace-level", title: "Furnace Level", navLabel: "Furnace Level",
    summary: "Highest furnace level shown in the supplied ranking snapshot.", metricLabel: "Level", format: "integer",
    records: [
      { rank: 1, playerName: "Goldfish", allianceTag: "BaT", value: "10" },
      { rank: 2, playerName: "SeeFu", allianceTag: "BaT", value: "10" },
      { rank: 3, playerName: "SOLO", allianceTag: "BaT", value: "10" },
      { rank: 4, playerName: "산토리", value: "10" },
      { rank: 5, playerName: "OJXo \"hssnd\"", allianceTag: "BaT", value: "10" },
      { rank: 6, playerName: "KickAzz", allianceTag: "RED", value: "10" },
      { rank: 7, playerName: "BlkLion", allianceTag: "BaT", value: "10" },
      { rank: 8, playerName: "Smidy", allianceTag: "RED", value: "10" },
      { rank: 9, playerName: "Longinus", allianceTag: "BaT", value: "10" },
      { rank: 165, playerName: "Your profile", allianceTag: "BaT", value: "8", currentProfile: true },
    ],
  },
  {
    slug: "kill-count", title: "Kill Count", navLabel: "Kill Count",
    summary: "Kill totals shown in the supplied State 2566 snapshot.", metricLabel: "Kills", format: "number",
    records: [
      { rank: 1, playerName: "KickAzz", allianceTag: "RED", value: "381772837" },
      { rank: 2, playerName: "Smidy", allianceTag: "RED", value: "334609148" },
      { rank: 3, playerName: "blankhead", allianceTag: "RED", value: "230261166" },
      { rank: 4, playerName: "zero", allianceTag: "RED", value: "195279631" },
      { rank: 5, playerName: "_START", allianceTag: "BaT", value: "176575290" },
      { rank: 6, playerName: "SOLO", allianceTag: "BaT", value: "174489484" },
      { rank: 7, playerName: "Kidon", value: "170173545" },
      { rank: 8, playerName: "azula", allianceTag: "BaT", value: "159758779" },
      { rank: 9, playerName: "Big Juicy", allianceTag: "RED", value: "153826152" },
      { rank: 42, playerName: "Your profile", allianceTag: "BaT", value: "44415083", currentProfile: true },
    ],
  },
  {
    slug: "exploration-stage", title: "Exploration Stage", navLabel: "Exploration Stage",
    summary: "Highest exploration stage shown in the supplied ranking snapshot.", metricLabel: "Stage", format: "integer",
    records: [
      { rank: 1, playerName: "산토리", value: "628" },
      { rank: 2, playerName: "zero", allianceTag: "RED", value: "609" },
      { rank: 3, playerName: "SOLO", allianceTag: "BaT", value: "609" },
      { rank: 4, playerName: "Goldfish", allianceTag: "BaT", value: "601" },
      { rank: 5, playerName: "SeeFu", allianceTag: "BaT", value: "598" },
      { rank: 6, playerName: "Wendel", allianceTag: "BaT", value: "596" },
      { rank: 7, playerName: "_START", allianceTag: "BaT", value: "589" },
      { rank: 8, playerName: "KickAzz", allianceTag: "RED", value: "586" },
      { rank: 9, playerName: "SquirrelTCo", allianceTag: "IMF", value: "584" },
      { rank: 120, playerName: "Your profile", allianceTag: "BaT", value: "483", currentProfile: true },
    ],
  },
  {
    slug: "hero-power", title: "Hero Power", navLabel: "Hero Power",
    summary: "Power for the selected hero shown on the supplied ranking screen.", metricLabel: "Hero power", format: "number", detailLabel: "Selected hero",
    records: [
      { rank: 1, playerName: "Smidy", allianceTag: "RED", value: "21010744", detail: "Gatot" },
      { rank: 2, playerName: "KickAzz", allianceTag: "RED", value: "21010744", detail: "Gatot" },
      { rank: 3, playerName: "zero", allianceTag: "RED", value: "21010744", detail: "Hendrik" },
      { rank: 4, playerName: "산토리", value: "20293534", detail: "Edith" },
      { rank: 5, playerName: "Big Juicy", allianceTag: "RED", value: "19904892", detail: "Gatot" },
      { rank: 6, playerName: "_START", allianceTag: "BaT", value: "19745734", detail: "Gatot" },
      { rank: 7, playerName: "Goldfish", allianceTag: "BaT", value: "19356591", detail: "Gatot" },
      { rank: 8, playerName: "BuyMyAccount", allianceTag: "BaT", value: "19077855", detail: "Gatot" },
      { rank: 9, playerName: "SOLO", allianceTag: "BaT", value: "19046824", detail: "Gatot" },
      { rank: 120, playerName: "Your profile", allianceTag: "BaT", value: "5936494", detail: "Gatot", currentProfile: true },
    ],
  },
  {
    slug: "total-pet-power", title: "Total Pet Power", navLabel: "Total Pet Power",
    summary: "Total pet power shown in the supplied State 2566 snapshot.", metricLabel: "Pet power", format: "number",
    records: [
      { rank: 1, playerName: "산토리", value: "46953960" },
      { rank: 2, playerName: "zero", allianceTag: "RED", value: "39499920" },
      { rank: 3, playerName: "SOLO", allianceTag: "BaT", value: "38937960" },
      { rank: 4, playerName: "Smidy", allianceTag: "RED", value: "36296280" },
      { rank: 5, playerName: "_START", allianceTag: "BaT", value: "33776280" },
      { rank: 6, playerName: "KickAzz", allianceTag: "RED", value: "32458560" },
      { rank: 7, playerName: "Wendel", allianceTag: "BaT", value: "31652760" },
      { rank: 8, playerName: "Griffith", allianceTag: "RED", value: "31267320" },
      { rank: 9, playerName: "Goldfish", allianceTag: "BaT", value: "30762360" },
      { rank: 283, playerName: "Your profile", allianceTag: "BaT", value: "17041440", currentProfile: true },
    ],
  },
  {
    slug: "heros-total-power", title: "Hero's Total Power", navLabel: "Hero's Total Power",
    summary: "Aggregate hero power shown in the supplied State 2566 snapshot.", metricLabel: "Total hero power", format: "number",
    records: [
      { rank: 1, playerName: "산토리", value: "153938937" },
      { rank: 2, playerName: "zero", allianceTag: "RED", value: "131908068" },
      { rank: 3, playerName: "KickAzz", allianceTag: "RED", value: "122771700" },
      { rank: 4, playerName: "SOLO", allianceTag: "BaT", value: "113481176" },
      { rank: 5, playerName: "SquirrelTCo", allianceTag: "IMF", value: "109899181" },
      { rank: 6, playerName: "_START", allianceTag: "BaT", value: "109739079" },
      { rank: 7, playerName: "Smidy", allianceTag: "RED", value: "104451927" },
      { rank: 8, playerName: "Goldfish", allianceTag: "BaT", value: "104215557" },
      { rank: 9, playerName: "SeeFu", allianceTag: "BaT", value: "101521948" },
      { rank: 197, playerName: "Your profile", allianceTag: "BaT", value: "39759046", currentProfile: true },
    ],
  },
  {
    slug: "total-expert-power", title: "Total Expert Power", navLabel: "Total Expert Power",
    summary: "Expert power shown in the supplied State 2566 snapshot.", metricLabel: "Expert power", format: "number",
    records: [
      { rank: 1, playerName: "Wendel", allianceTag: "BaT", value: "57192400" },
      { rank: 2, playerName: "SOLO", allianceTag: "BaT", value: "53334200" },
      { rank: 3, playerName: "맑은바위", allianceTag: "FAM", value: "52104800" },
      { rank: 4, playerName: "KickAzz", allianceTag: "RED", value: "51180200" },
      { rank: 5, playerName: "산토리", value: "48350000" },
      { rank: 6, playerName: "Smidy", allianceTag: "RED", value: "46535500" },
      { rank: 7, playerName: "Moon", allianceTag: "FAM", value: "40506000" },
      { rank: 8, playerName: "GreySquirrel", allianceTag: "YUK", value: "40222100" },
      { rank: 9, playerName: "DR ROI", allianceTag: "RED", value: "39648200" },
      { rank: 222, playerName: "Your profile", allianceTag: "BaT", value: "16444660", currentProfile: true },
    ],
  },
  {
    slug: "labyrinth", title: "The Labyrinth", navLabel: "The Labyrinth",
    summary: "Total stages shown in the supplied State 2566 snapshot.", metricLabel: "Total stages", format: "integer",
    records: [
      { rank: 1, playerName: "산토리", value: "1919" },
      { rank: 2, playerName: "zero", allianceTag: "RED", value: "1886" },
      { rank: 3, playerName: "SOLO", allianceTag: "BaT", value: "1873" },
      { rank: 4, playerName: "KickAzz", allianceTag: "RED", value: "1858" },
      { rank: 5, playerName: "Smidy", allianceTag: "RED", value: "1822" },
      { rank: 6, playerName: "SquirrelTCo", allianceTag: "IMF", value: "1813" },
      { rank: 7, playerName: "_START", allianceTag: "BaT", value: "1808" },
      { rank: 8, playerName: "Goldfish", allianceTag: "BaT", value: "1806" },
      { rank: 9, playerName: "Wendel", allianceTag: "BaT", value: "1761" },
      { rank: 190, playerName: "Your profile", allianceTag: "BaT", value: "1100", currentProfile: true },
    ],
  },
  {
    slug: "island-prosperity", title: "Island Prosperity", navLabel: "Island Prosperity",
    summary: "Prosperity and happiness are separate values in the supplied ranking snapshot.", metricLabel: "Prosperity", format: "number", detailLabel: "Happiness",
    records: [
      { rank: 1, playerName: "산토리", value: "296200", detail: "813" },
      { rank: 2, playerName: "SquirrelTCo", allianceTag: "IMF", value: "253700", detail: "1083" },
      { rank: 3, playerName: "Goldfish", allianceTag: "BaT", value: "230200", detail: "1303" },
      { rank: 4, playerName: "Wendel", allianceTag: "BaT", value: "227300", detail: "916" },
      { rank: 5, playerName: "zero", allianceTag: "RED", value: "223600", detail: "908" },
      { rank: 6, playerName: "KickAzz", allianceTag: "RED", value: "218900", detail: "937" },
      { rank: 7, playerName: "Beurnz", allianceTag: "BaT", value: "215700", detail: "986" },
      { rank: 8, playerName: "SOLO", allianceTag: "BaT", value: "215200", detail: "1014" },
      { rank: 9, playerName: "Kidon", value: "214200", detail: "1770" },
      { rank: 521, playerName: "Your profile", allianceTag: "BaT", value: "58100", detail: "401", currentProfile: true },
    ],
  },
];

export const getRankingCategory = (slug: string) => rankingCategories.find((category) => category.slug === slug);

export function validateRankingCategories(categories: RankingCategory[]) {
  const issues: string[] = [];
  for (const category of categories) {
    const ranks = new Set<number>();
    for (const record of category.records) {
      if (!Number.isInteger(record.rank) || record.rank < 1) issues.push(`${category.slug}: invalid rank ${record.rank}`);
      if (ranks.has(record.rank)) issues.push(`${category.slug}: duplicate rank ${record.rank}`);
      ranks.add(record.rank);
      if (!record.playerName.trim()) issues.push(`${category.slug}: missing player name at rank ${record.rank}`);
      if (!/^\d+$/.test(record.value)) issues.push(`${category.slug}: invalid metric at rank ${record.rank}`);
      if (category.detailLabel && !record.detail) issues.push(`${category.slug}: missing ${category.detailLabel} at rank ${record.rank}`);
    }
  }
  return issues;
}
