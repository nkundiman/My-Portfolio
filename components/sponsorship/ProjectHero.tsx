import { Project } from "@/app/type/project";

export default function ProjectHero({
  project,
}: {
  project: Project;
}) {
  return (
    <section className="relative h-[450px]">

      <img
        src={project.image_url}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6">

        <div>

          <span className="bg-green-600 text-white px-4 py-2 rounded-full">
            {project.category}
          </span>

          <h1 className="text-5xl font-bold text-white mt-6">
            {project.title}
          </h1>

          <p className="text-xl text-gray-200 mt-5 max-w-3xl">
            {project.short_description}
          </p>

        </div>

      </div>

    </section>
  );
}