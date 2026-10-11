import type { RankingCategory, RankingRecord } from "@/data/rankings";

export function compareMetric(left: string, right: string) {
  const a = BigInt(left);
  const b = BigInt(right);
  return a < b ? -1 : a > b ? 1 : 0;
}

export function formatMetric(value: string, format: RankingCategory["format"]) {
  if (format === "integer") return value;
  return BigInt(value).toLocaleString("en-US");
}

export function searchRankings(records: RankingRecord[], query: string) {
  const normalized = query.trim().toLocaleLowerCase();
  if (!normalized) return records;
  return records.filter((record) => `${record.playerName} ${record.allianceTag ?? ""}`.toLocaleLowerCase().includes(normalized));
}

export function paginateRankings<T>(records: T[], page: number, pageSize: number) {
  const start = Math.max(0, page - 1) * Math.max(1, pageSize);
  return records.slice(start, start + Math.max(1, pageSize));
}

export type RankingSort = "rank" | "name" | "metric-desc" | "metric-asc";

export function sortRankings(records: RankingRecord[], sort: RankingSort) {
  return [...records].sort((a, b) => {
    if (sort === "name") return a.playerName.localeCompare(b.playerName) || a.rank - b.rank;
    if (sort === "metric-desc") return compareMetric(b.value, a.value) || a.rank - b.rank;
    if (sort === "metric-asc") return compareMetric(a.value, b.value) || a.rank - b.rank;
    return a.rank - b.rank;
  });
}
