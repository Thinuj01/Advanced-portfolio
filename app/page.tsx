import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col w-full font-sans bg-linear-to-r from-gray-400 to-gray-50 dark:from-black dark:to-red-900">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}
