import { Mail, MapPin, Globe, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-white to-green-50 dark:from-gray-950 dark:to-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-widest text-green-600 dark:text-green-400 font-semibold">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900 dark:text-white">
            Let's Build the Future Together
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300">
            I am always open to research collaborations, Artificial Intelligence
            projects, agritech innovation, startup partnerships,
            consulting, speaking engagements, and investment opportunities.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="rounded-3xl bg-white dark:bg-gray-900 border border-transparent dark:border-gray-800 shadow-lg p-10">

            <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-green-600 dark:text-green-400" size={24} />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  augunkundimana@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-green-600 dark:text-green-400" size={24} />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  Kigali, Rwanda
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Globe className="text-green-600 dark:text-green-400" size={24} />
                <a
                  href="https://agric-ai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 dark:text-green-400 hover:underline"
                >
                  agric-ai.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Globe className="text-green-600 dark:text-green-400" size={24} />
                <a
                  href="https://www.agrilythosafrica.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 dark:text-green-400 hover:underline"
                >
                  agrilythosafrica.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Globe className="text-green-600 dark:text-green-400" size={24} />
                <a
                  href="https://nexus-agririse.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 dark:text-green-400 hover:underline"
                >
                  AGRINEXUS Research Platform
                </a>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-10">

              <a
                href="https://github.com/NkundimanaAugustin"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-100 dark:bg-green-900/30 p-4 hover:bg-green-200 dark:hover:bg-green-800 transition"
              >
                <FaGithub
                  size={24}
                  className="text-gray-900 dark:text-white"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/nkundimana-augustin/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-100 dark:bg-green-900/30 p-4 hover:bg-green-200 dark:hover:bg-green-800 transition"
              >
                <FaLinkedin
                  size={24}
                  className="text-gray-900 dark:text-white"
                />
              </a>

            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white dark:bg-gray-900 border border-transparent dark:border-gray-800 shadow-lg p-10">

            <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Send Me a Message
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <button
                type="submit"
                className="flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 text-white transition hover:bg-green-700"
              >
                <Send size={20} />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}