import SectionTitle from "./SectionTitle";
import { Globe, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AGRIC AI",
    category: "AI Platform",
    description:
      "AI-powered platform helping African farmers diagnose crop diseases, detect pests, provide farming recommendations, and improve productivity using Computer Vision.",
    tech: "Next.js • Python • TensorFlow • Firebase",
    website: "https://agric-ai.com",
    status: "Live",
  },
  {
    title: "AGRINEXUS",
    category: "Research Platform",
    description:
      "Digital ecosystem integrating AI, precision agriculture, weather intelligence, GIS, and farm management tools for sustainable agriculture across Africa.",
    tech: "React • Next.js • AI • GIS",
    website: "https://nexus-agririse.vercel.app",
    status: "Research",
  },
  {
    title: "PESTSMART EDGE",
    category: "Computer Vision Research",
    description:
      "Deep learning system for early detection of crop pests and diseases using smartphone images.",
    tech: "Python • OpenCV • TensorFlow",
    website: "",
    status: "Research",
  },
  {
    title: "Thrive Rwanda Tractor Platform",
    category: "Agritech",
    description:
      "Digital platform connecting tractor owners with smallholder farmers to improve access to mechanization services.",
    tech: "React • Firebase",
    website: "",
    status: "Research",
  },
  {
    title: "Coffee Disease Detection",
    category: "Computer Vision",
    description:
      "AI model for identifying coffee diseases and pests from leaf images with high accuracy.",
    tech: "TensorFlow • Python",
    website: "",
    status: "Research",
  },
  {
    title: "AGRILYTHOS Africa",
    category: "Climate Innovation",
    description:
      "Driving sustainable development through renewable energy, AI, and climate-smart agriculture solutions across Africa.",
    tech: "AI • Renewable Energy",
    website: "https://www.agrilythosafrica.com",
    status: "Live",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Featured Projects"
          subtitle="Innovation & Research"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl bg-white dark:bg-gray-800 shadow-lg p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <span className="inline-block rounded-full bg-green-100 dark:bg-green-900 px-3 py-1 text-sm font-semibold text-green-700 dark:text-green-300">
                {project.status}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mt-2 font-medium text-green-600 dark:text-green-400">
                {project.category}
              </p>

              <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              <div className="mt-6">

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Technologies
                </p>

                <p className="mt-2 font-semibold text-gray-900 dark:text-white">
                  {project.tech}
                </p>

              </div>

              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition"
                >
                  <Globe size={18} />
                  Visit Project
                  <ArrowUpRight size={18} />
                </a>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}