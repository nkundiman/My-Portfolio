"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isAdminAuthenticated() && pathname !== "/login") {
      router.replace("/login");
    }
  }, [pathname, router]);

  return <div className="min-h-screen bg-gray-100">{children}</div>;
}