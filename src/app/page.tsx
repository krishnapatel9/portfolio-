import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Stack from "@/components/sections/Stack";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative">
      <div id="top"></div>
      <Navbar />
      <main className="max-w-[840px] mx-auto px-6 pt-[72px]">
        <Hero />
        <Experience />
        <Projects />
        <Stack />
        <About />
        <Contact />
      </main>
      <div className="max-w-[840px] mx-auto px-6">
        <Footer />
      </div>
    </div>
  );
}
