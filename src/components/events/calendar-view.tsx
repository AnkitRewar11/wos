"use client";

import { useMemo, useState } from "react";
import { Dropdown, Tab, TabList, TabPanel, TabPanels, Tabs } from "@carbon/react";
import { communityEvents, eventCategories, type EventCategory } from "@/data/events";

const views = ["Month", "Week", "Agenda"] as const;

export function CalendarView() {
  const [view, setView] = useState<(typeof views)[number]>("Month");
  const [category, setCategory] = useState<EventCategory | "All categories">("All categories");
  const categoryItems = ["All categories", ...eventCategories];
  const filtered = useMemo(() => communityEvents.filter((event) => category === "All categories" || event.category === category), [category]);

  return <div className="calendar-view">
    <div className="calendar-toolbar panel">
      <Dropdown id="event-category" titleText="Event category" label="All categories" items={categoryItems} selectedItem={category} onChange={({ selectedItem }) => setCategory(selectedItem as EventCategory | "All categories")} />
      <span className="calendar-timezone">Times will include the timezone supplied with each event.</span>
    </div>
    <Tabs selectedIndex={views.indexOf(view)} onChange={({ selectedIndex }) => setView(views[selectedIndex] ?? "Month")}>
      <TabList aria-label="Calendar display" contained>
        {views.map((item) => <Tab key={item}>{item}</Tab>)}
      </TabList>
      <TabPanels>
        {views.map((item) => <TabPanel key={item}>
          <div className={`calendar-empty calendar-${item.toLowerCase()}`}>
            <span className="eyebrow">{item} view · {category}</span>
            {filtered.length ? <div className="event-list">{filtered.map((event) => <article className="panel" key={event.id}><strong>{event.title}</strong><span>{event.category}</span><time dateTime={event.startsAt}>{new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short", timeZone: event.timezone }).format(new Date(event.startsAt))} ({event.timezone})</time></article>)}</div> : <div className="empty-panel panel"><div className="empty"><strong>No events announced yet</strong>{category === "All categories" ? "Confirmed schedules will appear here when supplied." : `No ${category} schedule has been supplied yet.`}</div></div>}
          </div>
        </TabPanel>)}
      </TabPanels>
    </Tabs>
  </div>;
}
