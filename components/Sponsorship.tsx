"use client";

import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";

export default function Sponsorship() {
  return (
    <section
      id="sponsorship"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}

        <div className="bg-gray-900 rounded-3xl p-16 text-center">

          <h1 className="text-5xl font-bold">
            Support Africa's Agricultural Innovation
          </h1>

          <p className="text-gray-300 mt-8 text-xl max-w-4xl mx-auto leading-9">
            Join us in transforming African agriculture through Artificial
            Intelligence, Climate Innovation, Environmental Protection,
            Digital Agriculture, and Youth Empowerment.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div>
              <h2 className="text-5xl font-bold text-green-500">
                10,000+
              </h2>

              <p className="text-gray-400 mt-3">
                Farmers Targeted
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-green-500">
                100+
              </h2>

              <p className="text-gray-400 mt-3">
                AI Projects Planned
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-green-500">
                50+
              </h2>

              <p className="text-gray-400 mt-3">
                Strategic Partners
              </p>
            </div>

          </div>

        </div>

        {/* Sponsor CTA */}

        <div className="mt-20 bg-gradient-to-r from-green-700 to-emerald-500 rounded-3xl p-16 text-center">

          <Handshake
            className="mx-auto mb-8"
            size={70}
          />

          <h2 className="text-5xl font-bold">
            Invest in the Future of African Agriculture
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-xl leading-8">
            Discover our Artificial Intelligence, Climate Technology,
            Environmental Restoration, and Digital Agriculture projects.
            Donate, sponsor, or invest in the initiative that aligns with
            your mission.
          </p>

          <div className="flex justify-center mt-12">

            <Link
              href="/sponsorship"
              className="bg-black hover:bg-gray-900 px-10 py-5 rounded-xl font-semibold text-lg flex items-center gap-3 transition"
            >
              Explore All Projects
              <ArrowRight size={22} />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}