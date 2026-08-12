import Hero from "../../components/Hero/Hero";
import Intro from "../../components/Intro/Intro";
import Capabilities from "../../components/Capabilities/Capabilities";
import Projects from "../../components/Projects/Projects";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Marquee from "../../components/Marquee/Marquee";
import Github from "../../components/Github/Github";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

import "./Home.css";

const Home = () => {
  return (
    <main className="home">

      {/* HERO */}
      <Hero />

      {/* INTRODUCTION */}
      <Intro />

      {/* CAPABILITIES */}
      <Capabilities />

      {/* SELECTED WORK PREVIEW */}
      <Projects />

      {/* ABOUT */}
      <About />

      {/* SERVICES */}
      <Services />

      {/* MARQUEE */}
      <Marquee />

      {/* GITHUB */}
      <Github />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />

    </main>
  );
};

export default Home;