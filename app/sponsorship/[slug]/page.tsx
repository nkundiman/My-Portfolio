import { notFound } from "next/navigation";
import { getProject } from "@/lib/projects";

import ProjectHero from "@/components/sponsorship/ProjectHero";
import ProjectStats from "@/components/sponsorship/ProjectStats";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-gray-100 dark:bg-gray-950 min-h-screen">
      <ProjectHero project={project} />

      <section className="max-w-6xl mx-auto py-12 px-6">
        <ProjectStats project={project} />

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-10 mt-10">
          <h2 className="text-3xl font-bold mb-6">
            About this Project
          </h2>

          <p className="leading-8 text-lg">
            {project.description}
          </p>
        </div>
      </section>
    </main>
  );
}