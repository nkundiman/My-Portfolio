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
      className="min-h-screen bg-gradient-to-br from-white via-green-50 to-gray-100 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <p className="text-green-600 font-semibold text-lg">
              Hello, I'm
            </p>

            <h1 className="text-6xl font-extrabold mt-4 leading-tight">
              NKUNDIMANA
              <br />
              AUGUSTIN
            </h1>

            <h2 className="text-2xl text-gray-600 mt-6">
              Agricultural Engineer • AI Researcher • Founder of AGRIC AI
            </h2>

            <p className="text-gray-600 text-lg mt-8 leading-8 max-w-xl">
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
                className="border-2 border-gray-300 hover:border-green-600 hover:text-green-600 px-8 py-4 rounded-xl transition"
              >
                Download CV
              </a>

            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-3xl mt-12">

              <a
                href="https://github.com/NkundimanaAugustin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-green-600 transition" />
              </a>

              <a
                href="https://www.linkedin.com/in/nkundimana-augustin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-green-600 transition" />
              </a>

              <a href="mailto:augunkundimana@gmail.com">
                <FaEnvelope className="hover:text-green-600 transition" />
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
                className="relative rounded-full object-cover border-8 border-white shadow-2xl"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}