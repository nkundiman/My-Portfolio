import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Research from "../components/Research";
import Companies from "../components/Companies";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Leadership from "../components/Leadership";
import Awards from "../components/Awards";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />

      <Hero />

      <About />

      <Research />

      <Companies />

      <Projects />

      <Experience />

      <Leadership />

      <Awards />

      <Skills />

      <Contact />
    </main>
  );
}