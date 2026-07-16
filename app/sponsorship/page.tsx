import { getProjects } from "@/lib/projects";
import ProjectCard from "@/components/sponsorship/ProjectCard";
import type { Project } from "@/app/type/project";

export default async function SponsorshipPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <p className="text-green-600 font-semibold uppercase tracking-[0.3em]">
            Sponsorship
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Support African agricultural innovation
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-8">
            Explore active projects that are driving climate innovation, digital agriculture, and rural empowerment.
            Choose a project to learn more and help it reach its funding goal.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="rounded-3xl bg-white dark:bg-gray-900 shadow-lg p-12 text-center">
            <p className="text-xl text-gray-700 dark:text-gray-300">
              There are no active sponsorship projects right now. Check back soon for new opportunities.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
