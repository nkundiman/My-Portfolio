import {
  Briefcase,
  GraduationCap,
  Rocket,
  Leaf,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      year: "2026",
      title: "Founder & CEO",
      company: "AGRIC AI",
      icon: Rocket,
      description:
        "Leading the development of AI-powered solutions including crop disease detection, precision agriculture, digital farming, and intelligent decision-support systems for African farmers.",
    },
    {
      year: "2026",
      title: "Founder",
      company: "AGRILYTHOS Africa",
      icon: Leaf,
      description:
        "Driving climate-smart agriculture, renewable energy innovation, agribusiness development, and AI technologies to accelerate sustainable agriculture across Africa.",
    },
    {
      year: "2025",
      title: "Mandela Washington Fellow",
      company: "U.S. Department of State",
      icon: GraduationCap,
      description:
        "Selected among Africa's emerging young leaders to strengthen leadership, entrepreneurship, and innovation for sustainable development.",
    },
    {
      year: "2025",
      title: "Executive Committee Member",
      company: "YALI Rwanda Chapter",
      icon: Briefcase,
      description:
        "Supporting entrepreneurship, startups, NGOs, and alumni engagement while promoting youth leadership and innovation.",
    },
    {
      year: "2025",
      title: "AI Researcher",
      company: "University of Rwanda",
      icon: GraduationCap,
      description:
        "Conducting research in Artificial Intelligence, Computer Vision, Machine Learning, Precision Agriculture, and Digital Agriculture.",
    },
    {
      year: "2024",
      title: "Research & Innovation",
      company: "AGRINEXUS & PestSmart Edge",
      icon: Rocket,
      description:
        "Designed AI-powered research platforms for crop disease detection, precision farming, and intelligent agricultural decision support.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-widest text-green-600 font-semibold">
            Experience
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Professional Journey
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            My journey combines Artificial Intelligence, Agricultural
            Engineering, entrepreneurship, leadership, and innovation to
            create impactful technologies that transform agriculture in Africa.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative border-l-4 border-green-600 ml-6">

          {experiences.map((exp, index) => {
            const Icon = exp.icon;

            return (
              <div
                key={index}
                className="relative mb-14 ml-10"
              >

                {/* Timeline Icon */}

                <div className="absolute -left-16 top-1 w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">

                  <Icon
                    size={22}
                    className="text-white"
                  />

                </div>

                {/* Content */}

                <span className="text-green-600 font-bold">
                  {exp.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {exp.title}
                </h3>

                <h4 className="text-lg text-green-700 font-semibold mt-1">
                  {exp.company}
                </h4>

                <p className="text-gray-600 mt-4 leading-7">
                  {exp.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}