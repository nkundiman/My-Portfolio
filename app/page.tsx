import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Book from "../components/Book";
import Sponsorship from "../components/Sponsorship";
import Experience from "../components/Experience";
import Awards from "../components/Awards";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import TestConnection from "../components/TestConnection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      <Navbar />

      <Hero />

      <About />

      <Book />

      <Sponsorship />

      <Experience />

      <Awards />

      <Skills />

      <Contact />

      {/* Test Supabase Connection */}
      <TestConnection />
    </main>
  );
}