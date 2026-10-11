export type AllianceSnapshot = {
  rank: number;
  tag: string;
  leader: string;
  power: string;
  flag?: string;
};

export const allianceSnapshotDate = "11 October 2026";
export const allianceSnapshotSource = "User-provided in-game Alliance Power screenshot";

export function selectTopFiveAlliances(records: AllianceSnapshot[]) {
  return [...records].filter((alliance) => alliance.rank >= 1 && alliance.rank <= 5).sort((a, b) => a.rank - b.rank).slice(0, 5);
}

export const topAlliances: AllianceSnapshot[] = selectTopFiveAlliances([
  { rank: 1, tag: "RED", leader: "Dawn", power: "35142038681", flag: "/images/alliance-red-flag.jpg" },
  { rank: 2, tag: "BaT", leader: "Batata", power: "28965873749", flag: "/images/alliance-bat-flag.jpg" },
  { rank: 3, tag: "FAM", leader: "ShiningMoon", power: "21916838913", flag: "/images/alliance-fam-flag.jpg" },
  { rank: 4, tag: "AWM", leader: "AWMSniperKing", power: "10650497215", flag: "" },
  { rank: 5, tag: "TOP", leader: "TOP", power: "3114010937", flag: "" },
]);
