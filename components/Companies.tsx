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
        "AGRILYTHOS Africa is an innovation company promoting climate-smart agriculture, renewable energy, agribusiness development, AI-powered solutions, and sustainable technologies across Africa.",

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
      className="py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-widest text-green-600 font-semibold">
            Companies
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Organizations I Founded
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
            Through entrepreneurship and innovation, I have founded companies
            dedicated to transforming African agriculture using Artificial
            Intelligence, Climate Innovation, Renewable Energy, and Digital
            Technologies.
          </p>

        </div>

        {/* Company Cards */}

        <div className="grid lg:grid-cols-2 gap-10">

          {companies.map((company, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-10"
            >

              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">

                  <Building2
                    className="text-green-600"
                    size={32}
                  />

                </div>

                <div>

                  <h3 className="text-3xl font-bold">
                    {company.name}
                  </h3>

                  <p className="text-green-600 font-semibold">
                    {company.role}
                  </p>

                </div>

              </div>

              <p className="text-gray-600 leading-8 mb-8">
                {company.description}
              </p>

              {/* Services */}

              <h4 className="font-semibold text-lg mb-4">
                Core Focus Areas
              </h4>

              <div className="flex flex-wrap gap-3 mb-8">

                {company.services.map((service, i) => (

                  <span
                    key={i}
                    className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {service}
                  </span>

                ))}

              </div>

              {/* Website */}

              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700"
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