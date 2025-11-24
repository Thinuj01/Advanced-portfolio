import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-zinc-50 font-sans dark:bg-black">
        <Hero />
        <About />
        <Projects />
    </div>
  );
}
