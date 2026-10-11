"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  DataTable,
  Pagination,
  Search,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
} from "@carbon/react";
import type { RankingCategory } from "@/data/rankings";
import { rankingSnapshotLabel, rankingSnapshotSource } from "@/data/rankings";
import { formatMetric, paginateRankings, searchRankings, sortRankings, type RankingSort } from "@/lib/ranking-utils";

type Props = { category: RankingCategory };

export function Leaderboard({ category }: Props) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<RankingSort>("rank");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const ranked = useMemo(() => sortRankings(searchRankings(category.records, query), sort), [category.records, query, sort]);
  const usePodium = sort === "rank" && !query.trim();
  const podium = usePodium ? ranked.filter((record) => record.rank <= 3).sort((a, b) => a.rank - b.rank) : [];
  const remaining = usePodium ? ranked.filter((record) => record.rank > 3) : ranked;
  const pageCount = Math.max(1, Math.ceil(remaining.length / pageSize));
  const safePage = Math.min(page, pageCount);
  const pageRows = paginateRankings(remaining, safePage, pageSize);
  const headers = [
    { key: "rank", header: "Rank" },
    { key: "player", header: "Player" },
    { key: "alliance", header: "Alliance" },
    { key: "metric", header: category.metricLabel },
    ...(category.detailLabel ? [{ key: "detail", header: category.detailLabel }] : []),
  ];
  const tableRows = pageRows.map((record) => ({
    id: String(record.rank),
    rank: `#${record.rank}${record.currentProfile ? " · You" : ""}`,
    player: record.playerName,
    alliance: record.allianceTag ? `[${record.allianceTag}]` : "—",
    metric: formatMetric(record.value, category.format),
    ...(category.detailLabel ? { detail: record.detail ? (category.detailLabel === "Happiness" ? formatMetric(record.detail, "number") : record.detail) : "—" } : {}),
  }));

  return <div className="leaderboard-page">
    <div className="ranking-toolbar panel">
      <div className="ranking-search"><Search id="ranking-search" labelText="Search player or alliance" placeholder="Search name or alliance tag" value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} /></div>
      <Select id="ranking-sort" labelText="Sort by" value={sort} onChange={(event) => { setSort(event.target.value as RankingSort); setPage(1); }}>
        <SelectItem value="rank" text="Game rank" />
        <SelectItem value="metric-desc" text={`${category.metricLabel} · highest first`} />
        <SelectItem value="metric-asc" text={`${category.metricLabel} · lowest first`} />
        <SelectItem value="name" text="Player name · A to Z" />
      </Select>
    </div>

    {podium.length ? <section className="podium" aria-label="Top three players">
      {podium.length ? podium.map((record) => <article className={`podium-card podium-${record.rank}`} key={record.rank}>
        <div className="podium-rank"><span>{record.rank}</span><small>{record.rank === 1 ? "TOP RANK" : "RANK"}</small></div>
        <div className="podium-player">{record.playerName}</div>
        <div className="podium-alliance">{record.allianceTag ? `[${record.allianceTag}]` : "Alliance not shown"}</div>
        <strong>{formatMetric(record.value, category.format)}</strong>
        <span className="podium-metric">{category.metricLabel}{record.detail && category.detailLabel !== "Happiness" ? ` · ${record.detail}` : ""}</span>
        {category.detailLabel === "Happiness" && record.detail ? <span className="podium-metric">Happiness · {formatMetric(record.detail, "number")}</span> : null}
      </article>) : null}
      {!ranked.length ? <p className="empty ranking-empty">No records match “{query}”. Try a player name or alliance tag.</p> : null}
    </section> : null}

    <section className="ranking-results" aria-label={`${category.title} ranking records`}>
      <div className="ranking-results-heading"><h2 className="section-heading">Other supplied positions</h2><span>{remaining.length} records</span></div>
      {pageRows.length ? <>
        <div className="ranking-table-desktop">
          <DataTable rows={tableRows} headers={headers}>
            {({ rows, headers: tableHeaders, getHeaderProps, getRowProps, getTableProps }) => <TableContainer>
              <Table {...getTableProps()} aria-label={`${category.title} records`}>
                <TableHead><TableRow>{tableHeaders.map((header) => <TableHeader {...getHeaderProps({ header })} key={header.key}>{header.header}</TableHeader>)}</TableRow></TableHead>
                <TableBody>{rows.map((row) => <TableRow {...getRowProps({ row })} key={row.id} className={pageRows.find((record) => String(record.rank) === row.id)?.currentProfile ? "current-player-row" : undefined}>
                  {row.cells.map((cell) => <TableCell key={cell.id}>{cell.value}</TableCell>)}
                </TableRow>)}</TableBody>
              </Table>
            </TableContainer>}
          </DataTable>
        </div>
        <div className="ranking-cards-mobile">{pageRows.map((record) => <article className={`ranking-mobile-card${record.currentProfile ? " current-player-row" : ""}`} key={record.rank}>
          <span className="rank-badge">#{record.rank}{record.currentProfile ? " · You" : ""}</span>
          <div><strong>{record.playerName}</strong><small>{record.allianceTag ? `[${record.allianceTag}]` : "Alliance not shown"}</small></div>
          <strong className="mobile-metric">{formatMetric(record.value, category.format)}<small>{category.metricLabel}</small></strong>
          {record.detail ? <span className="mobile-detail">{category.detailLabel ?? "Details"}: {category.detailLabel === "Happiness" ? formatMetric(record.detail, "number") : record.detail}</span> : null}
        </article>)}</div>
        <Pagination totalItems={remaining.length} page={safePage} pageSize={pageSize} pageSizes={[5, 10, 20]} onChange={({ page: nextPage, pageSize: nextSize }) => { setPage(nextPage); setPageSize(nextSize); }} />
      </> : <div className="empty-panel panel"><div className="empty"><strong>No additional records for this search</strong>Try clearing the search or changing the sort.</div></div>}
    </section>

    <aside className="snapshot-note"><strong>Screenshot source files dated · {rankingSnapshotLabel}</strong><span>{rankingSnapshotSource}. Only positions visible in that screenshot are listed; gaps are not filled.</span></aside>
    <Link className="back-link" href="/rankings">← All state rankings</Link>
  </div>;
}
