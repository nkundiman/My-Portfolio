import Image from "next/image";
import {
  BookOpen,
  Brain,
  Leaf,
  Globe,
  Sparkles,
} from "lucide-react";

const chapters = [
  "Chapter 1 - Africa in the AI Era",
  "Chapter 2 - Artificial Intelligence in Agriculture",
  "Chapter 3 - Climate Change & Food Security",
  "Chapter 4 - Renewable Energy for Africa",
  "Chapter 5 - Computer Vision for Smart Farming",
  "Chapter 6 - Precision Agriculture & GIS",
  "Chapter 7 - Entrepreneurship & Innovation",
  "Chapter 8 - The Future of Africa's Economy",
];

export default function Book() {
  return (
    <section
      id="book"
      className="bg-gray-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HERO ================= */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="relative">

            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-green-700 via-green-500 to-emerald-300 p-6 shadow-2xl">

              <Image
                src="/book-cover.png"
                alt="Book Cover"
                width={450}
                height={650}
                className="rounded-2xl"
              />

            </div>

          </div>

          {/* Right */}

          <div>

            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
              Coming Soon
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
              The Future of Africa's Economy
            </h1>

            <h2 className="text-4xl font-bold text-green-500 mt-2">
              Through Artificial Intelligence
            </h2>

            <p className="text-gray-300 mt-8 leading-8 text-lg">

              Discover how Artificial Intelligence, Climate Innovation,
              Digital Agriculture, Renewable Energy, Robotics,
              GIS, and Data Science will transform Africa's economy,
              improve food security, create millions of jobs,
              and empower future generations.

            </p>

            <div className="space-y-5 mt-10">

              <div className="flex gap-4 items-center">

                <Brain className="text-green-500" />

                <p>Artificial Intelligence in Agriculture</p>

              </div>

              <div className="flex gap-4 items-center">

                <Leaf className="text-green-500" />

                <p>Climate Smart Agriculture</p>

              </div>

              <div className="flex gap-4 items-center">

                <Globe className="text-green-500" />

                <p>Africa's Economic Transformation</p>

              </div>

              <div className="flex gap-4 items-center">

                <Sparkles className="text-green-500" />

                <p>Innovation & Entrepreneurship</p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= BOOK OVERVIEW ================= */}

        <div className="mt-32">

          <div className="text-center">

            <span className="text-green-500 font-semibold">
              Book Overview
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Inside the Book
            </h2>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
              This book presents practical knowledge, research,
              and real African case studies showing how Artificial
              Intelligence can drive sustainable development.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-16 bg-gray-900 rounded-3xl p-10">

            <div>

              <h3 className="text-3xl font-bold">
                What You'll Learn
              </h3>

              <ul className="space-y-4 mt-8 text-gray-300">

                <li>✔ Artificial Intelligence</li>

                <li>✔ Digital Agriculture</li>

                <li>✔ Climate Change Solutions</li>

                <li>✔ Renewable Energy</li>

                <li>✔ Computer Vision</li>

                <li>✔ Precision Agriculture</li>

                <li>✔ Entrepreneurship</li>

                <li>✔ Future Jobs in Africa</li>

              </ul>

            </div>

            <div>

              <h3 className="text-3xl font-bold">
                Book Details
              </h3>

              <div className="space-y-6 mt-8">

                <p>
                  <strong>Author:</strong> Nkundimana Augustin
                </p>

                <p>
                  <strong>Category:</strong> AI & Agriculture
                </p>

                <p>
                  <strong>Pages:</strong> 250+
                </p>

                <p>
                  <strong>Status:</strong> Writing
                </p>

                <p>
                  <strong>Release:</strong> Coming Soon
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= CHAPTERS ================= */}

        <div className="mt-32">

          <div className="text-center">

            <span className="text-green-500">
              Book Chapters
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Explore the Chapters
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {chapters.map((chapter) => (

              <div
                key={chapter}
                className="bg-gray-900 rounded-2xl p-8 hover:bg-green-700 transition duration-300"
              >

                <BookOpen
                  className="text-green-500 mb-6"
                  size={40}
                />

                <h3 className="font-bold text-lg">
                  {chapter}
                </h3>

              </div>

            ))}

          </div>

        </div>

        {/* ================= AUTHOR MESSAGE ================= */}

        <div className="mt-32">

          <div className="rounded-3xl bg-gradient-to-r from-green-700 to-emerald-500 p-16 text-center">

            <h2 className="text-5xl font-bold">
              Message From the Author
            </h2>

            <p className="max-w-4xl mx-auto text-xl leading-10 mt-10">

              "Africa possesses enormous agricultural potential.
              By combining Artificial Intelligence, Climate
              Innovation, Renewable Energy, and modern farming,
              we can feed the world while creating millions of jobs
              for young people."

            </p>

            <div className="mt-12">

              <h3 className="text-2xl font-bold">
                — Nkundimana Augustin
              </h3>

              <p className="text-green-100 mt-2">
                Agricultural Engineer • AI Researcher • Entrepreneur
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}