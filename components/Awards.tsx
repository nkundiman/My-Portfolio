import {
  Award,
  Medal,
  Trophy,
  Star,
} from "lucide-react";

export default function Awards() {
  const awards = [
    {
      year: "2025",
      title: "Mandela Washington Fellowship",
      organization: "U.S. Department of State",
      icon: Award,
      description:
        "Selected among Africa's outstanding young leaders to participate in the prestigious Mandela Washington Fellowship, focusing on leadership, innovation, and entrepreneurship.",
    },
    {
      year: "2025",
      title: "Executive Committee Member",
      organization: "YALI Rwanda Chapter",
      icon: Trophy,
      description:
        "Appointed to the Executive Committee to support innovation, entrepreneurship, startups, NGOs, and the YALI alumni community across Rwanda.",
    },
    {
      year: "2025",
      title: "Founder & CEO",
      organization: "AGRIC AI",
      icon: Star,
      description:
        "Founded AGRIC AI to develop Artificial Intelligence solutions that improve agricultural productivity and empower African farmers.",
    },
    {
      year: "2025",
      title: "Founder",
      organization: "AGRILYTHOS Africa",
      icon: Medal,
      description:
        "Founded AGRILYTHOS Africa to promote climate-smart agriculture, renewable energy, digital agriculture, and sustainable agribusiness.",
    },
    {
      year: "2024",
      title: "AI Innovation Research",
      organization: "University of Rwanda",
      icon: Award,
      description:
        "Recognized for conducting research in Artificial Intelligence, Computer Vision, and Precision Agriculture.",
    },
    {
      year: "2024",
      title: "Research & Innovation Projects",
      organization: "AGRINEXUS & PestSmart Edge",
      icon: Trophy,
      description:
        "Led the development of AI-powered research projects focused on smart farming, crop disease detection, and digital agriculture.",
    },
  ];

  return (
    <section
      id="awards"
      className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-green-600 uppercase tracking-widest font-semibold">
            Recognition
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900 dark:text-white">
            Awards & Leadership Recognition
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-8">
            My journey has been shaped by leadership, research,
            entrepreneurship, and innovation dedicated to advancing
            Artificial Intelligence and sustainable agriculture across Africa.
          </p>

        </div>

        {/* Award Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {awards.map((award, index) => {
            const Icon = award.icon;

            return (
              <div
                key={index}
                className="rounded-3xl bg-white dark:bg-gray-900 border border-transparent dark:border-gray-800 p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <Icon
                    className="text-green-600 dark:text-green-400"
                    size={28}
                  />
                </div>

                <span className="font-semibold text-green-600 dark:text-green-400">
                  {award.year}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
                  {award.title}
                </h3>

                <p className="mt-2 font-medium text-green-700 dark:text-green-400">
                  {award.organization}
                </p>

                <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                  {award.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}