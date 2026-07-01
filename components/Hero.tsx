import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-white via-green-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-black flex items-center transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <p className="text-green-600 font-semibold text-lg">
              Hello, I'm
            </p>

            <h1 className="text-6xl font-extrabold mt-4 leading-tight text-gray-900 dark:text-white">
              NKUNDIMANA
              <br />
              AUGUSTIN
            </h1>

            <h2 className="text-2xl mt-6 text-gray-600 dark:text-gray-300">
              Agricultural Engineer • AI Researcher • Founder of AGRIC AI
            </h2>

            <p className="text-lg mt-8 leading-8 max-w-xl text-gray-600 dark:text-gray-400">
              Building intelligent technologies that empower African farmers
              through Artificial Intelligence, Digital Agriculture,
              Renewable Energy, Climate Innovation, and Precision Agriculture.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="#projects"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl flex items-center gap-3 transition"
              >
                View My Projects
                <FaArrowRight />
              </a>

              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 dark:border-gray-700 hover:border-green-600 hover:text-green-600 dark:text-white px-8 py-4 rounded-xl transition"
              >
                Download CV
              </a>

            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-3xl mt-12 text-gray-800 dark:text-white">

              <a
                href="https://github.com/NkundimanaAugustin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/nkundimana-augustin/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:augunkundimana@gmail.com"
                className="hover:text-green-600 transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-green-500 blur-3xl opacity-20 scale-110"></div>

              <Image
                src="/profile.jpg"
                alt="Nkundimana Augustin"
                width={450}
                height={450}
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