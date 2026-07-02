import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Book from "../components/Book";
import Sponsorship from "../components/Sponsorship";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Awards from "../components/Awards";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      <Navbar />

      <Hero />

      <About />

      <Book />

      <Sponsorship />

      <Projects />

      <Experience />

      <Awards />

      <Skills />

      <Contact />
    </main>
  );
}