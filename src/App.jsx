import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import WhyHireMe from "./components/WhyHireMe";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import GithubStats from "./components/GithubStats";
import Timeline from "./components/Timeline";
import CTA from "./components/CTA";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <main>
        <Hero />

        <Stats />

        <About />

        <Skills />

        <WhyHireMe />

        <Projects />

        <Certifications />

        <Education />

        <Achievements />

        <GithubStats />

        <Timeline />

        <CTA />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;