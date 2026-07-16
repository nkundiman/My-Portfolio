import Link from "next/link";

export default function ProjectCard({
  project,
}: {
  project: any;
}) {
  const percentage =
    (project.raised / project.goal) * 100;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">

      <img
        src={project.image_url}
        alt={project.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold">
          {project.title}
        </h2>

        <p className="mt-3 text-gray-600">
          {project.short_description}
        </p>

        <div className="mt-6">

          <div className="flex justify-between">

            <span>
              ${project.raised.toLocaleString()}
            </span>

            <span>
              ${project.goal.toLocaleString()}
            </span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-3 mt-2">

            <div
              className="bg-green-600 h-3 rounded-full"
              style={{
                width: `${percentage}%`,
              }}
            />

          </div>

        </div>

        <Link
          href={`/sponsorship/${project.slug}`}
          className="block mt-6 text-center bg-green-600 text-white py-3 rounded-lg"
        >
          View Project
        </Link>

      </div>

    </div>
  );
}