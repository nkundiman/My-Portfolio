import { Brain, Leaf, ExternalLink } from "lucide-react";

export default function Research() {
  const researchProjects = [
    {
      title: "AGRINEXUS",
      type: "AI Research Platform",
      organization: "Independent Research",
      status: "Active",
      description:
        "AGRINEXUS is an AI-powered agricultural intelligence platform designed to support farmers through precision agriculture, digital farm management, weather intelligence, GIS mapping, and data-driven decision-making.",
      technologies: [
        "Next.js",
        "React",
        "Python",
        "Artificial Intelligence",
        "GIS",
      ],
      impact:
        "Improves farm productivity through intelligent decision support systems and digital agriculture.",
      website: "https://nexus-agririse.vercel.app/",
    },
    {
      title: "PestSmart Edge",
      type: "Computer Vision Research",
      organization: "Agricultural AI Research",
      status: "Ongoing",
      description:
        "PestSmart Edge uses Deep Learning and Computer Vision to identify crop pests and diseases from smartphone images, enabling early detection and reducing crop losses.",
      technologies: [
        "YOLO",
        "TensorFlow",
        "OpenCV",
        "Python",
        "Deep Learning",
      ],
      impact:
        "Supports food security by enabling farmers to detect crop diseases quickly and accurately.",
      website: "#",
    },
  ];

  return (
    <section
      id="research"
      className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-green-600 dark:text-green-400 font-semibold uppercase tracking-wider">
            Artificial Intelligence Research
          </span>

          <h2 className="mt-4 text-5xl font-bold text-gray-900 dark:text-white">
            Research Projects
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300">
            My research focuses on Artificial Intelligence, Computer Vision,
            Precision Agriculture, Digital Farming, and Climate-Smart
            Technologies that empower African farmers.
          </p>

        </div>

        <div className="space-y-10">

          {researchProjects.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white dark:bg-gray-800 p-10 shadow-lg transition duration-300 hover:shadow-2xl"
            >

              <div className="flex flex-col justify-between md:flex-row">

                <div>

                  <span className="rounded-full bg-green-100 dark:bg-green-900 px-4 py-2 text-sm font-semibold text-green-700 dark:text-green-300">
                    {project.status}
                  </span>

                  <h3 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 font-medium text-green-600 dark:text-green-400">
                    {project.type}
                  </p>

                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {project.organization}
                  </p>

                </div>

                <Brain
                  size={60}
                  className="mt-8 text-green-600 dark:text-green-400 md:mt-0"
                />

              </div>

              <p className="mt-8 leading-8 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-8">

                <h4 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                  Technologies
                </h4>

                <div className="flex flex-wrap gap-3">

                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-green-100 dark:bg-green-900 px-4 py-2 text-sm text-green-700 dark:text-green-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

              {/* Impact */}
              <div className="mt-8 flex items-start gap-3">

                <Leaf
                  size={22}
                  className="mt-1 text-green-600 dark:text-green-400"
                />

                <div>

                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Impact
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300">
                    {project.impact}
                  </p>

                </div>

              </div>

              {/* Website */}
              {project.website !== "#" && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-green-600 dark:text-green-400 transition hover:text-green-700 dark:hover:text-green-300"
                >
                  Visit Project
                  <ExternalLink size={18} />
                </a>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}