import {
  Briefcase,
  Users,
  Rocket,
  Leaf,
} from "lucide-react";

export default function Leadership() {
  const leadership = [
    {
      title: "Founder & CEO",
      organization: "AGRIC AI",
      icon: Rocket,
      description:
        "Leading the development of Artificial Intelligence solutions that empower African farmers through crop disease detection, digital agriculture, precision farming, and intelligent decision-support systems.",
    },

    {
      title: "Founder",
      organization: "AGRILYTHOS Africa",
      icon: Leaf,
      description:
        "Leading climate-smart agriculture initiatives by integrating renewable energy, sustainable agribusiness, Artificial Intelligence, and innovation across Africa.",
    },

    {
      title: "Executive Committee Member",
      organization: "YALI Rwanda Chapter",
      icon: Users,
      description:
        "Supporting leadership development, entrepreneurship, innovation, startups, NGOs, and social enterprises while strengthening the YALI alumni community in Rwanda.",
    },

    {
      title: "AI Research Lead",
      organization: "AGRINEXUS Research",
      icon: Briefcase,
      description:
        "Leading research on Artificial Intelligence, Computer Vision, precision agriculture, and intelligent decision-support systems for sustainable farming.",
    },
  ];

  return (
    <section
      id="leadership"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-widest text-green-600 font-semibold">
            Leadership
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Leadership & Entrepreneurship
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-6">
            I believe leadership is about creating opportunities,
            empowering communities, and using technology to solve
            real-world challenges in agriculture and sustainable
            development.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {leadership.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
              >

                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">

                  <Icon
                    className="text-green-600"
                    size={30}
                  />

                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-green-600 font-semibold mt-2">
                  {item.organization}
                </p>

                <p className="text-gray-600 mt-5 leading-7">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}