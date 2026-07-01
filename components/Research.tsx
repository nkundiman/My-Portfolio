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
    <section id="research" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold uppercase tracking-wider">
            Artificial Intelligence Research
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Research Projects
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-8">
            My research focuses on Artificial Intelligence, Computer Vision,
            Precision Agriculture, Digital Farming, and Climate-Smart
            Technologies that empower African farmers.
          </p>
        </div>

        <div className="space-y-10">
          {researchProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between">

                <div>
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {project.status}
                  </span>

                  <h3 className="text-3xl font-bold mt-5">
                    {project.title}
                  </h3>

                  <p className="text-green-600 font-medium mt-2">
                    {project.type}
                  </p>

                  <p className="text-gray-500 mt-2">
                    {project.organization}
                  </p>
                </div>

                <Brain
                  className="text-green-600 mt-8 md:mt-0"
                  size={60}
                />
              </div>

              <p className="text-gray-600 leading-8 mt-8">
                {project.description}
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-lg mb-4">
                  Technologies
                </h4>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-start gap-3">
                <Leaf className="text-green-600 mt-1" size={22} />

                <div>
                  <h4 className="font-bold">
                    Impact
                  </h4>

                  <p className="text-gray-600">
                    {project.impact}
                  </p>
                </div>
              </div>

              {project.website !== "#" && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 text-green-600 font-semibold hover:text-green-700"
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