import { Project } from "@/app/type/project";

export default function ProjectStats({
  project,
}: {
  project: Project;
}) {

  const percentage = Math.min(
    (project.raised / project.goal) * 100,
    100
  );

  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl shadow p-8">

      <h2 className="text-3xl font-bold mb-8">
        Funding Progress
      </h2>

      <div className="w-full bg-gray-300 rounded-full h-5">

        <div
          className="bg-green-600 h-5 rounded-full"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div>
          <h3 className="text-gray-500">Goal</h3>

          <p className="text-2xl font-bold">
            ${project.goal.toLocaleString()}
          </p>
        </div>

        <div>
          <h3 className="text-gray-500">Raised</h3>

          <p className="text-2xl font-bold text-green-600">
            ${project.raised.toLocaleString()}
          </p>
        </div>

        <div>
          <h3 className="text-gray-500">Progress</h3>

          <p className="text-2xl font-bold">
            {percentage.toFixed(1)}%
          </p>
        </div>

      </div>

    </section>
  );
}