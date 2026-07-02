import { Award, Trophy } from "lucide-react";

export default function Awards() {
  const awards = [
    {
      year: "2025",
      title: "Mandela Washington Fellowship",
      organization: "U.S. Department of State",
      icon: Award,
      description:
        "Selected among Africa's outstanding young leaders to participate in the prestigious Mandela Washington Fellowship. The fellowship recognizes exceptional leadership, innovation, entrepreneurship, and commitment to sustainable development across Africa.",
    },

    {
      year: "2025",
      title: "Efficiency for Access Accelerator Grant",
      organization:
        "Efficiency for Access • Energy Catalyst • Engineers Without Borders UK",
      icon: Trophy,
      description:
        "AGRILYTHOS was selected for the Efficiency for Access Design Challenge Accelerator Programme and received grant funding of up to £10,000 to advance its smart solar-powered automated agricultural sprayer, supporting sustainable agriculture and clean energy innovation in Africa.",
    },
  ];

  return (
    <section
      id="awards"
      className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-green-600 uppercase tracking-widest font-semibold">
            Awards & Recognition
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900 dark:text-white">
            International Recognition
          </h2>

          <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-8">
            My work in Artificial Intelligence, Agricultural Engineering,
            Climate Innovation, and Entrepreneurship has been recognized
            through prestigious international leadership and innovation
            programs.
          </p>
        </div>

        <div className="space-y-10">

          {awards.map((award, index) => {
            const Icon = award.icon;

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 hover:shadow-2xl transition duration-300"
              >
                <div className="flex items-start gap-6">

                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Icon
                      size={30}
                      className="text-green-600 dark:text-green-400"
                    />
                  </div>

                  <div>

                    <span className="text-green-600 font-bold">
                      {award.year}
                    </span>

                    <h3 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
                      {award.title}
                    </h3>

                    <p className="text-green-700 dark:text-green-400 font-semibold mt-2">
                      {award.organization}
                    </p>

                    <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">
                      {award.description}
                    </p>

                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}