import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Social from "./components/Social";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollAnimation from "./components/ScrollAnimationWrapper";

export default function App() {
  return (
    <div>
      <Navbar />

      

<main>
  <ScrollAnimation>
    <Hero />
  </ScrollAnimation>

  <ScrollAnimation>
    <About />
  </ScrollAnimation>

  <ScrollAnimation>
    <Social />
  </ScrollAnimation>

  <ScrollAnimation>
    <Skills />
  </ScrollAnimation>

  <ScrollAnimation>
    <Resume />
  </ScrollAnimation>

  <ScrollAnimation>
    <Projects />
  </ScrollAnimation>

  <ScrollAnimation>
    <Contact />
  </ScrollAnimation>
</main>


      <Footer />

      {/* زر الطلوع للفوق */}
      <ScrollToTopButton />
    </div>
  );
}