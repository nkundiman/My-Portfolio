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
      className="py-28 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-widest text-green-600 font-semibold">
            Leadership
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900 dark:text-white">
            Leadership & Entrepreneurship
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-8">
            I believe leadership is about creating opportunities,
            empowering communities, and using technology to solve
            real-world challenges in agriculture and sustainable
            development.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {leadership.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl bg-gray-50 dark:bg-gray-800 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">

                  <Icon
                    size={30}
                    className="text-green-600 dark:text-green-400"
                  />

                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 font-semibold text-green-600 dark:text-green-400">
                  {item.organization}
                </p>

                <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
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