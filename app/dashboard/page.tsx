import { getProjects } from "@/lib/projects";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ProjectManager from "@/components/dashboard/ProjectManager";

export const dynamic = "force-dynamic";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const editProjectId = typeof params.edit === "string" ? params.edit : null;
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">
        <DashboardHeader />
        <ProjectManager projects={projects} editingProjectId={editProjectId} />
      </div>
    </div>
  );
}
