import Image from "next/image";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import {
  Brain,
  Leaf,
  Tractor,
  Award,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-gray-950 dark:via-black dark:to-gray-900 transition-colors duration-500"
    >
      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-300/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div>

            <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900 px-5 py-2 text-green-700 dark:text-green-300 font-semibold">
              🌍 AI • Agriculture • Climate Innovation
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Transforming African Agriculture
              <span className="text-green-600">
                {" "}Through Artificial Intelligence
              </span>
            </h1>

            <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 leading-9 max-w-2xl">
              Agricultural Engineer, Artificial Intelligence Researcher,
              Entrepreneur, and Mandela Washington Fellow building intelligent
              technologies that improve food security, precision agriculture,
              climate resilience, and environmental sustainability across Africa.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="#projects"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl flex items-center gap-3 transition"
              >
                Explore My Work
                <FaArrowRight />
              </a>

              <a
                href="#contact"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl transition"
              >
                Contact Me
              </a>

            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-10 text-3xl text-gray-700 dark:text-gray-300">

              <a
                href="https://github.com/NkundimanaAugustin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-green-600 transition" />
              </a>

              <a
                href="https://linkedin.com/in/nkundimana-augustin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-green-600 transition" />
              </a>

              <a href="mailto:augunkundimana@gmail.com">
                <FaEnvelope className="hover:text-green-600 transition" />
              </a>

            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

              <div>
                <h2 className="text-4xl font-bold text-green-600">10+</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Research Projects
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-green-600">2</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Companies Founded
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-green-600">2025</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Mandela Fellow
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-green-600">$11000</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Innovation Awards
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center">

            {/* Floating Card */}
            <div className="absolute -top-6 left-0 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-5 border dark:border-gray-700">
              <Brain className="text-green-600 mb-2" size={34} />
              <p className="font-bold dark:text-white">
                Artificial Intelligence
              </p>
              <span className="text-sm text-gray-500">
                Computer Vision
              </span>
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-10 -left-10 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-5 border dark:border-gray-700">
              <Leaf className="text-green-600 mb-2" size={34} />
              <p className="font-bold dark:text-white">
                Climate Innovation
              </p>
              <span className="text-sm text-gray-500">
                Sustainability
              </span>
            </div>

            {/* Floating Card */}
            <div className="absolute top-24 -right-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-5 border dark:border-gray-700">
              <Tractor className="text-green-600 mb-2" size={34} />
              <p className="font-bold dark:text-white">
                Smart Farming
              </p>
              <span className="text-sm text-gray-500">
                Precision Agriculture
              </span>
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-0 right-0 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-5 border dark:border-gray-700">
              <Award className="text-green-600 mb-2" size={34} />
              <p className="font-bold dark:text-white">
                Mandela Fellow
              </p>
              <span className="text-sm text-gray-500">
                Leadership
              </span>
            </div>

            {/* Profile Image */}
            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-green-500 blur-3xl opacity-30 scale-110"></div>

              <Image
                src="/profile.jpg"
                alt="Nkundimana Augustin"
                width={520}
                height={520}
                priority
                className="relative rounded-full object-cover border-8 border-white dark:border-gray-800 shadow-2xl"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}