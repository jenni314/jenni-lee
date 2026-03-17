import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--ds-bg)]">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}
