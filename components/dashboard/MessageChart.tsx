"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface Message {
  id: string;
  created_at: string;
}

interface Props {
  data: Message[];
}

export default function MessageChart({ data }: Props) {
  // Count messages per day
  const chartData = data.reduce(
    (acc: { date: string; messages: number }[], message) => {
      const date = new Date(message.created_at).toLocaleDateString();

      const existing = acc.find((item) => item.date === date);

      if (existing) {
        existing.messages += 1;
      } else {
        acc.push({
          date,
          messages: 1,
        });
      }

      return acc;
    },
    []
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Message Activity
        </h2>

        <p className="text-gray-500 dark:text-gray-400">
          Number of messages received each day
        </p>

      </div>

      <div className="h-96">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis allowDecimals={false} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="messages"
              stroke="#16a34a"
              strokeWidth={3}
              dot={{ r: 5 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}