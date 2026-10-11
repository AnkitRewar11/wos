"use client";

import { DataTable, Table, TableBody, TableCell, TableContainer, TableHead, TableHeader, TableRow } from "@carbon/react";
import Image from "next/image";
import type { AllianceSnapshot } from "@/data/alliances";
import { formatMetric } from "@/lib/ranking-utils";

const headers = [{ key: "rank", header: "Rank" }, { key: "flag", header: "Flag" }, { key: "alliance", header: "Alliance" }, { key: "leader", header: "Leader shown" }, { key: "power", header: "Alliance power" }];

export function AllianceTable({ alliances }: { alliances: AllianceSnapshot[] }) {
  const rows = alliances.map((alliance) => ({ id: String(alliance.rank), rank: `#${alliance.rank}`, flag: alliance.flag ? <Image className="alliance-flag alliance-flag-row" src={alliance.flag} alt={`${alliance.tag} alliance flag`} width={40} height={48} /> : "—", alliance: `[${alliance.tag}]`, leader: alliance.leader, power: formatMetric(alliance.power, "number") }));
  return <>
    <div className="alliance-table-desktop"><DataTable rows={rows} headers={headers}>
      {({ rows: tableRows, headers: tableHeaders, getHeaderProps, getRowProps, getTableProps }) => <TableContainer>
        <Table {...getTableProps()} aria-label="Top five alliance power ranking">
          <TableHead><TableRow>{tableHeaders.map((header) => <TableHeader {...getHeaderProps({ header })} key={header.key}>{header.header}</TableHeader>)}</TableRow></TableHead>
          <TableBody>{tableRows.map((row) => <TableRow {...getRowProps({ row })} key={row.id}>{row.cells.map((cell) => <TableCell key={cell.id}>{cell.value}</TableCell>)}</TableRow>)}</TableBody>
        </Table>
      </TableContainer>}
    </DataTable></div>
    <div className="alliance-cards-mobile">{alliances.map((alliance) => <article className="alliance-mobile-card" key={alliance.rank}>
      <span className="rank-badge">#{alliance.rank}</span>{alliance.flag ? <Image className="alliance-flag alliance-flag-mobile" src={alliance.flag} alt={`${alliance.tag} alliance flag`} width={40} height={48} /> : <span className="alliance-flag-placeholder" aria-hidden="true" />}<div><strong>[{alliance.tag}]</strong><small>{alliance.leader}</small></div>
      <strong className="mobile-metric">{formatMetric(alliance.power, "number")}<small>Alliance power</small></strong>
    </article>)}</div>
  </>;
}
