import { describe, expect, it } from "vitest";
import { selectTopFiveAlliances, topAlliances } from "@/data/alliances";
import { rankingCategories, validateRankingCategories } from "@/data/rankings";
import { compareMetric, formatMetric, paginateRankings, searchRankings, sortRankings } from "@/lib/ranking-utils";

describe("static screenshot rankings", () => {
  it("contains exactly the five supplied top alliance positions", () => {
    expect(topAlliances.map(({ rank }) => rank)).toEqual([1, 2, 3, 4, 5]);
    expect(topAlliances).toHaveLength(5);
    expect(selectTopFiveAlliances([...topAlliances, { rank: 6, tag: "OTHER", leader: "", power: "1" }])).toHaveLength(5);
  });

  it("keeps each supplied leaderboard category separate and valid", () => {
    expect(rankingCategories).toHaveLength(10);
    expect(rankingCategories.map(({ slug }) => slug)).toContain("hero-power");
    expect(rankingCategories.map(({ slug }) => slug)).toContain("heros-total-power");
    expect(validateRankingCategories(rankingCategories)).toEqual([]);
  });

  it("preserves large integer precision for comparison and display", () => {
    expect(compareMetric("9007199254740993", "9007199254740992")).toBe(1);
    expect(formatMetric("35142038681", "number")).toBe("35,142,038,681");
  });

  it("searches names and alliance tags without changing the source rows", () => {
    const category = rankingCategories.find(({ slug }) => slug === "personal-power");
    expect(category).toBeDefined();
    expect(searchRankings(category!.records, "imf").map(({ rank }) => rank)).toEqual([6]);
    expect(searchRankings(category!.records, "START").map(({ rank }) => rank)).toEqual([2]);
    expect(category!.records).toHaveLength(10);
  });

  it("sorts metrics exactly and keeps game ranks for display", () => {
    const rows = [
      { rank: 1, playerName: "A", value: "9007199254740992" },
      { rank: 4, playerName: "B", value: "9007199254740993" },
    ];
    expect(sortRankings(rows, "metric-desc").map(({ rank }) => rank)).toEqual([4, 1]);
    expect(sortRankings(rows, "rank").map(({ rank }) => rank)).toEqual([1, 4]);
  });

  it("paginates only supplied records and keeps rank gaps intact", () => {
    const rows = rankingCategories[0].records.filter(({ rank }) => rank > 3);
    expect(paginateRankings(rows, 1, 2).map(({ rank }) => rank)).toEqual([4, 5]);
    expect(paginateRankings(rows, 2, 2).map(({ rank }) => rank)).toEqual([6, 7]);
    expect(rows.some(({ rank }) => rank === 10)).toBe(false);
  });

  it("keeps Island Prosperity and happiness as different values", () => {
    const category = rankingCategories.find(({ slug }) => slug === "island-prosperity");
    expect(category?.metricLabel).toBe("Prosperity");
    expect(category?.detailLabel).toBe("Happiness");
    expect(category?.records[0]).toMatchObject({ value: "296200", detail: "813" });
  });
});
