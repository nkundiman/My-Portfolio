import Image from "next/image";
import { Brain, Leaf, Briefcase, Award } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-green-600 font-semibold uppercase tracking-wider">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Passionate About AI & Sustainable Agriculture
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Image */}
          <div className="flex justify-center">
            <Image
              src="/profile.jpg"
              alt="Nkundimana Augustin"
              width={420}
              height={420}
              className="rounded-3xl shadow-2xl object-cover"
            />
          </div>

          {/* Right Side */}
          <div>

            <h3 className="text-3xl font-bold mb-6">
              Who I Am
            </h3>

            <p className="text-gray-600 leading-8 mb-6">
              I am <strong>Nkundimana Augustin</strong>, an Agricultural Engineer,
              AI Researcher, and Entrepreneur dedicated to transforming agriculture
              across Africa through Artificial Intelligence, Machine Learning,
              Digital Agriculture, and Climate-Smart Innovation.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              I founded <strong>AGRIC AI</strong> and
              <strong> AGRILYTHOS Africa</strong> to develop technologies that
              improve food security, increase agricultural productivity, and
              empower farmers with intelligent digital solutions.
            </p>

            {/* Mission */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-green-600">
                Mission
              </h4>

              <p className="text-gray-600 mt-2">
                To empower African farmers through Artificial Intelligence,
                Digital Agriculture, Renewable Energy, and innovative research.
              </p>
            </div>

            {/* Vision */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-green-600">
                Vision
              </h4>

              <p className="text-gray-600 mt-2">
                To become one of Africa's leading AI researchers developing
                intelligent technologies that improve food security and
                sustainable agriculture.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6">

              <div className="flex items-center gap-3">
                <Brain className="text-green-600" size={28} />
                <span>AI Researcher</span>
              </div>

              <div className="flex items-center gap-3">
                <Leaf className="text-green-600" size={28} />
                <span>Agricultural Engineer</span>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase className="text-green-600" size={28} />
                <span>Founder & CEO</span>
              </div>

              <div className="flex items-center gap-3">
                <Award className="text-green-600" size={28} />
                <span>Mandela Washington Fellow</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}