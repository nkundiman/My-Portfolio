import { Mail, MapPin, Globe, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-white to-green-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-widest text-green-600 font-semibold">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Build the Future Together
          </h2>

          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            I am always open to research collaborations, Artificial Intelligence
            projects, agritech innovation, startup partnerships,
            consulting, speaking engagements, and investment opportunities.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-green-600" size={24} />
                <span className="text-lg">
                  augunkundimana@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-green-600" size={24} />
                <span className="text-lg">
                  Kigali, Rwanda
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Globe className="text-green-600" size={24} />
                <a
                  href="https://agric-ai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:underline"
                >
                  agric-ai.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Globe className="text-green-600" size={24} />
                <a
                  href="https://www.agrilythosafrica.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:underline"
                >
                  agrilythosafrica.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Globe className="text-green-600" size={24} />
                <a
                  href="https://nexus-agririse.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:underline"
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
                className="bg-green-100 p-4 rounded-full hover:bg-green-200 transition"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/nkundimana-augustin/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-100 p-4 rounded-full hover:bg-green-200 transition"
              >
                <FaLinkedin size={24} />
              </a>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h3 className="text-3xl font-bold mb-8">
              Send Me a Message
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl flex items-center gap-3 transition"
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