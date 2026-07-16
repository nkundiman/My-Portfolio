import { ReactNode } from "react";

interface Props {
  title: string;
  value: number;
  color: "green" | "blue" | "purple" | "orange";
  icon: ReactNode;
}

export default function StatsCard({
  title,
  value,
  color,
  icon,
}: Props) {
  const colors = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">
            {value}
          </h2>

        </div>

        <div
          className={`${colors[color]} text-white p-4 rounded-xl shadow-md`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}