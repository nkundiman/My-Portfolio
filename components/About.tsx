import Image from "next/image";
import { Brain, Leaf, Briefcase, Award } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-green-600 font-semibold uppercase tracking-wider">
            About Me
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900 dark:text-white">
            Passionate About AI & Sustainable Agriculture
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="flex justify-center">
            <Image
              src="/profile.jpg"
              alt="Nkundimana Augustin"
              width={420}
              height={420}
              className="rounded-3xl object-cover shadow-2xl border-4 border-white dark:border-gray-800"
            />
          </div>

          {/* Right Side */}
          <div>

            <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              Who I Am
            </h3>

            <p className="mb-6 leading-8 text-gray-600 dark:text-gray-300">
              I am <strong className="text-gray-900 dark:text-white">Nkundimana Augustin</strong>,
              an Agricultural Engineer, AI Researcher, and Entrepreneur dedicated
              to transforming agriculture across Africa through Artificial
              Intelligence, Machine Learning, Digital Agriculture, and
              Climate-Smart Innovation.
            </p>

            <p className="mb-8 leading-8 text-gray-600 dark:text-gray-300">
              I founded{" "}
              <strong className="text-green-600">AGRIC AI</strong> and{" "}
              <strong className="text-green-600">AGRILYTHOS Africa</strong> to
              develop technologies that improve food security, increase
              agricultural productivity, and empower farmers with intelligent
              digital solutions.
            </p>

            {/* Mission */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-green-600">
                Mission
              </h4>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                To empower African farmers through Artificial Intelligence,
                Digital Agriculture, Renewable Energy, and innovative research.
              </p>
            </div>

            {/* Vision */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-green-600">
                Vision
              </h4>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                To become one of Africa's leading AI researchers developing
                intelligent technologies that improve food security and
                sustainable agriculture.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6">

              <div className="flex items-center gap-3 rounded-xl bg-gray-50 dark:bg-gray-900 p-4 shadow-sm">
                <Brain className="text-green-600" size={28} />
                <span className="font-medium text-gray-900 dark:text-white">
                  AI Researcher
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-gray-50 dark:bg-gray-900 p-4 shadow-sm">
                <Leaf className="text-green-600" size={28} />
                <span className="font-medium text-gray-900 dark:text-white">
                  Agricultural Engineer
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-gray-50 dark:bg-gray-900 p-4 shadow-sm">
                <Briefcase className="text-green-600" size={28} />
                <span className="font-medium text-gray-900 dark:text-white">
                  Founder & CEO
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-gray-50 dark:bg-gray-900 p-4 shadow-sm">
                <Award className="text-green-600" size={28} />
                <span className="font-medium text-gray-900 dark:text-white">
                  Mandela Washington Fellow
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}