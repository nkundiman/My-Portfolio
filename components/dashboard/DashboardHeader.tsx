"use client";

import { useRouter } from "next/navigation";
import { clearAdminSession } from "@/lib/auth";

export default function DashboardHeader() {
  const router = useRouter();

  function handleLogout() {
    clearAdminSession();
    router.replace("/login");
  }

  return (
    <div className="mb-10 flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>

        <p className="text-gray-500 dark:text-gray-400">
          Manage your portfolio messages and sponsorship projects.
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="rounded-lg bg-red-600 px-5 py-3 text-white transition hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}