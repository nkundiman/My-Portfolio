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
      className="bg-gray-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-green-600 uppercase tracking-widest font-semibold">
            Recognition
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Awards & Leadership Recognition
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            My journey has been shaped by leadership, research,
            entrepreneurship, and innovation dedicated to advancing
            Artificial Intelligence and sustainable agriculture across Africa.
          </p>
        </div>

        {/* Award Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8"
              >
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Icon className="text-green-600" size={28} />
                </div>

                <span className="text-green-600 font-semibold">
                  {award.year}
                </span>

                <h3 className="text-2xl font-bold mt-3">
                  {award.title}
                </h3>

                <p className="text-green-700 font-medium mt-2">
                  {award.organization}
                </p>

                <p className="text-gray-600 mt-5 leading-7">
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