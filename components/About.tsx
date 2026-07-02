import Image from "next/image";
import {
  Brain,
  Leaf,
 Globe,
  Building2,
  Award,
  ArrowRight,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#16a34a_1px,transparent_1px)] [background-size:35px_35px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-20">

          <span className="inline-flex px-5 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-semibold">
            My Story & Mission
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold mt-8 text-gray-900 dark:text-white">
            About Augustin
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Agricultural Engineer, Artificial Intelligence Researcher,
            Entrepreneur, and Climate Innovation Leader committed to building
            intelligent technologies that improve agriculture, food security,
            and environmental sustainability across Africa.
          </p>

        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-500 via-emerald-500 to-blue-500 p-1 shadow-2xl">

              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8">

                <Image
                  src="/profile.jpg"
                  alt="Nkundimana Augustin"
                  width={500}
                  height={600}
                  className="rounded-3xl object-cover w-full"
                />

                {/* Statistics */}

                <div className="grid grid-cols-3 gap-4 mt-8">

                  <div className="text-center bg-gray-100 dark:bg-gray-800 rounded-2xl p-4">
                    <h3 className="text-3xl font-bold text-green-600">
                      10+
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      AI Projects
                    </p>
                  </div>

                  <div className="text-center bg-gray-100 dark:bg-gray-800 rounded-2xl p-4">
                    <h3 className="text-3xl font-bold text-green-600">
                      2
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Companies
                    </p>
                  </div>

                  <div className="text-center bg-gray-100 dark:bg-gray-800 rounded-2xl p-4">
                    <h3 className="text-3xl font-bold text-green-600">
                      2025
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Mandela Fellow
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <span className="inline-flex px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600">
              My Journey
            </span>

            <h3 className="text-4xl font-bold mt-6 text-gray-900 dark:text-white">
              The Journey of Innovation
            </h3>

            <p className="mt-8 leading-8 text-lg text-gray-600 dark:text-gray-300">
              My journey began with a passion for Agricultural Engineering and
              the desire to solve real-world farming challenges using
              Artificial Intelligence. I believe technology has the power to
              transform agriculture and improve millions of lives.
            </p>

            <p className="mt-6 leading-8 text-lg text-gray-600 dark:text-gray-300">
              As the Founder of <strong className="text-green-600">AGRIC AI</strong>
              {" "}and{" "}
              <strong className="text-green-600">AGRILYTHOS Africa</strong>,
              I develop intelligent solutions for crop disease detection,
              precision agriculture, climate-smart farming, renewable energy,
              and digital agriculture.
            </p>

            <p className="mt-6 leading-8 text-lg text-gray-600 dark:text-gray-300">
              My mission is to empower African farmers through Artificial
              Intelligence, Machine Learning, Computer Vision, GIS,
              environmental sustainability, and innovative research.
            </p>

            {/* Tags */}

            <div className="flex flex-wrap gap-3 mt-10">

              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Computer Vision",
                "Precision Agriculture",
                "Climate Innovation",
                "Food Security",
                "Renewable Energy",
                "Digital Agriculture",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </div>

        {/* Leadership */}

        <div className="mt-28">

          <div className="text-center mb-16">

            <span className="text-green-600 uppercase tracking-widest font-semibold">
              Leadership Journey
            </span>

            <h2 className="text-5xl font-bold mt-4 text-gray-900 dark:text-white">
              Building AI for African Agriculture
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              {
                title: "AGRIC AI",
                role: "Founder & CEO",
                icon: Brain,
                text:
                  "Developing AI solutions for crop disease detection, precision agriculture, and intelligent farming.",
              },
              {
                title: "AGRILYTHOS Africa",
                role: "Founder",
                icon: Leaf,
                text:
                  "Promoting climate-smart agriculture, renewable energy, and sustainable innovation.",
              },
              {
                title: "YALI Rwanda",
                role: "Executive Committee",
                icon: Globe,
                text:
                  "Supporting entrepreneurship, startups, innovation, and leadership development.",
              },
              {
                title: "Mandela Washington Fellowship",
                role: "Leadership Fellow",
                icon: Award,
                text:
                  "Selected among Africa's emerging young leaders by the U.S. Department of State.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl bg-white dark:bg-gray-900 shadow-xl p-8 hover:-translate-y-2 transition"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                    <Icon className="text-green-600" size={30} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-green-600 font-semibold mt-2">
                    {item.role}
                  </p>

                  <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                    {item.text}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

        {/* Vision */}

        <div className="mt-28">

          <div className="rounded-3xl bg-gradient-to-r from-green-600 via-emerald-500 to-blue-500 p-14 text-center text-white">

            <Building2 size={50} className="mx-auto mb-6" />

            <h2 className="text-5xl font-bold">
              My Vision
            </h2>

            <p className="max-w-4xl mx-auto mt-8 text-xl leading-10">
              "To become one of Africa's leading Artificial Intelligence
              researchers developing intelligent technologies that transform
              agriculture, strengthen food security, protect the environment,
              and empower millions of farmers through innovation."
            </p>

            <button className="mt-10 inline-flex items-center gap-3 bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              View My Research
              <ArrowRight size={20} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}