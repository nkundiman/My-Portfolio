import { Globe, ArrowUpRight, Building2 } from "lucide-react";

export default function Companies() {
  const companies = [
    {
      name: "AGRIC AI",
      role: "Founder & CEO",
      website: "https://agric-ai.com/",
      description:
        "AGRIC AI develops Artificial Intelligence solutions that help farmers improve productivity through crop disease detection, digital agriculture, computer vision, precision farming, and intelligent decision support systems.",
      services: [
        "Artificial Intelligence",
        "Computer Vision",
        "Precision Agriculture",
        "Digital Agriculture",
        "Machine Learning",
      ],
    },
    {
      name: "AGRILYTHOS Africa",
      role: "Founder",
      website: "https://www.agrilythosafrica.com/",
      description:
        "AGRILYTHOS Africa promotes climate-smart agriculture, renewable energy, agribusiness development, AI-powered solutions, and sustainable technologies across Africa.",
      services: [
        "Climate Innovation",
        "Renewable Energy",
        "Agribusiness",
        "AI Solutions",
        "Sustainable Agriculture",
      ],
    },
  ];

  return (
    <section
      id="companies"
      className="py-28 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-widest text-green-600 font-semibold">
            Companies
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900 dark:text-white">
            Organizations I Founded
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300">
            Through entrepreneurship and innovation, I have founded companies
            dedicated to transforming African agriculture using Artificial
            Intelligence, Climate Innovation, Renewable Energy, and Digital
            Technologies.
          </p>

        </div>

        {/* Company Cards */}
        <div className="grid gap-10 lg:grid-cols-2">

          {companies.map((company) => (

            <div
              key={company.name}
              className="rounded-3xl bg-white dark:bg-gray-900 border border-transparent dark:border-gray-800 p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="mb-8 flex items-center gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <Building2
                    className="text-green-600 dark:text-green-400"
                    size={32}
                  />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {company.name}
                  </h3>

                  <p className="font-semibold text-green-600 dark:text-green-400">
                    {company.role}
                  </p>
                </div>

              </div>

              <p className="mb-8 leading-8 text-gray-600 dark:text-gray-300">
                {company.description}
              </p>

              <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Core Focus Areas
              </h4>

              <div className="mb-8 flex flex-wrap gap-3">

                {company.services.map((service) => (

                  <span
                    key={service}
                    className="rounded-full bg-green-100 dark:bg-green-900/30 px-4 py-2 text-sm font-medium text-green-700 dark:text-green-300"
                  >
                    {service}
                  </span>

                ))}

              </div>

              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-green-600 transition hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
              >
                <Globe size={20} />
                Visit Website
                <ArrowUpRight size={18} />
              </a>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}