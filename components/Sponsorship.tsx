"use client";

import {
  Search,
  Leaf,
  Brain,
  Trees,
  Tractor,
  Handshake,
} from "lucide-react";

const projects = [
  {
    title: "AGRIC AI (AI Crop Disease Detection)",
    category: "Artificial Intelligence",
    location: "Kigali, Rwanda",
    goal: "$50000",
    raised: "$2,500",
    Website: "https://agric-ai.com/",
    icon: <Brain className="text-green-500" size={40} />,
  },
  {
    title: "AGRILYTHOS AFRICA (Climate technology)",
    category: "Climate",
    location: "Rwanda",
    goal: "$120,000",
    raised: "$500",
    website: "https://www.agrilythosafrica.com/",
    icon: <Leaf className="text-green-500" size={40} />,
  },
  {
    title: "AI in Tree Restoration Program",
    category: "Environment",
    location: "Nyungwe Forest",
    goal: "$100,0000",
    raised: "$500",
    icon: <Trees className="text-green-500" size={40} />,
  },
  {
    title: "Nexus Agririse (Digital Farmer Platform)",
    category: "Innovation",
    location: "Rwanda",
    goal: "$300,0000",
    raised: "$0",
    website: "https://nexus-agririse.vercel.app/",
    icon: <Tractor className="text-green-500" size={40} />,
  },
];

export default function Sponsorship() {
  return (
    <section
      id="sponsorship"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}

        <div className="bg-gray-900 rounded-3xl p-16 text-center">

          <h1 className="text-5xl font-bold">
            Support Africa's Agricultural Innovation
          </h1>

          <p className="text-gray-300 mt-8 text-xl max-w-3xl mx-auto">
            Join us in transforming African agriculture through Artificial
            Intelligence, Climate Innovation, Environmental Protection,
            Digital Agriculture, and Youth Empowerment.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-14">

            <div>
              <h2 className="text-4xl font-bold text-green-500">
                10,000+
              </h2>

              <p className="text-gray-400 mt-2">
                Farmers Targeted
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-500">
                100+
              </h2>

              <p className="text-gray-400 mt-2">
                AI Projects
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-500">
                50+
              </h2>

              <p className="text-gray-400 mt-2">
                Strategic Partners
              </p>
            </div>

          </div>

        </div>

        {/* SEARCH */}

        <div className="bg-gray-900 rounded-3xl p-8 mt-16">

          <h2 className="text-3xl font-bold">
            Support an Innovation Project
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <input
              placeholder="Search Project..."
              className="bg-black border border-gray-700 rounded-xl p-4"
            />

            <select className="bg-black border border-gray-700 rounded-xl p-4">
              <option>All Categories</option>
              <option>Artificial Intelligence</option>
              <option>Agriculture</option>
              <option>Climate</option>
              <option>Environment</option>
            </select>

            <button className="bg-green-600 hover:bg-green-700 rounded-xl flex justify-center items-center gap-3 font-semibold">
              <Search size={20} />
              Search
            </button>

          </div>

        </div>

        {/* PROJECTS */}

        <div className="mt-20">

          <h2 className="text-4xl font-bold mb-10">
            Projects Looking for Sponsors
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {projects.map((project) => (

              <div
                key={project.title}
                className="bg-gray-900 rounded-3xl p-8 hover:scale-105 transition"
              >

                {project.icon}

                <h3 className="text-2xl font-bold mt-6">
                  {project.title}
                </h3>

                <p className="text-green-400 mt-2">
                  {project.category}
                </p>

                <p className="text-gray-400 mt-2">
                  {project.location}
                </p>

                <div className="mt-8">

                  <div className="flex justify-between">

                    <span>Goal</span>

                    <strong>{project.goal}</strong>

                  </div>

                  <div className="flex justify-between mt-2">

                    <span>Raised</span>

                    <strong>{project.raised}</strong>

                  </div>

                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 rounded-xl py-3 mt-8 font-semibold">
                  Support Project
                </button>

              </div>

            ))}

          </div>

        </div>

        {/* WHY PARTNER */}

        <div className="mt-24 bg-gradient-to-r from-green-700 to-emerald-500 rounded-3xl p-16 text-center">

          <Handshake
            className="mx-auto mb-8"
            size={60}
          />

          <h2 className="text-5xl font-bold">
            Why Partner With AGRIC AI?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12 text-left text-lg">

            <div>✔ Promote AI in Agriculture</div>

            <div>✔ Improve Food Security</div>

            <div>✔ Fight Climate Change</div>

            <div>✔ Support Environmental Protection</div>

            <div>✔ Empower African Youth</div>

            <div>✔ Build Africa's Digital Economy</div>

          </div>

          <button className="mt-14 bg-black px-10 py-4 rounded-xl text-lg hover:bg-gray-900">
            Become a Sponsor
          </button>

        </div>

      </div>
    </section>
  );
}