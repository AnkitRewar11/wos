import { PortalShell } from "@/components/portal-shell";
import { CalendarView } from "@/components/events/calendar-view";
import { Calendar } from "@carbon/icons-react";
import { PageBanner } from "@/components/page-banner";

export default function EventsPage() {
  return <PortalShell activeSlug="events"><main className="content">
    <PageBanner icon={<Calendar size={28} />} eyebrow="State 2566 · Event command" title="Events Calendar" description="Month, week and agenda views are ready for state schedules. No event dates were included in the supplied screenshots." />
    <CalendarView />
  </main></PortalShell>;
}
