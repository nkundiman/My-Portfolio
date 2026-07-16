import {
  MessageSquare,
  CalendarDays,
  CalendarRange,
  BarChart3,
} from "lucide-react";

import StatsCard from "./StatsCard";

interface Props {
  total: number;
  today: number;
  thisWeek: number;
  thisMonth: number;
}

export default function DashboardCards({
  total,
  today,
  thisWeek,
  thisMonth,
}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

      <StatsCard
        title="Total Messages"
        value={total}
        color="green"
        icon={<MessageSquare size={28} />}
      />

      <StatsCard
        title="Today"
        value={today}
        color="blue"
        icon={<CalendarDays size={28} />}
      />

      <StatsCard
        title="This Week"
        value={thisWeek}
        color="purple"
        icon={<CalendarRange size={28} />}
      />

      <StatsCard
        title="This Month"
        value={thisMonth}
        color="orange"
        icon={<BarChart3 size={28} />}
      />

    </div>
  );
}