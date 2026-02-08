import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { CTASection } from "../components/CTASection";
import { Testimonials } from "../components/Testimonials";

const Home = () => {
  return (
    <div className="relative">
      {/* Full-width Hero Section */}
      <Hero />

      {/* Training Programs Section */}
      <Services />

      {/* Bottom Sections */}
      <About />

      <Projects />

      <CTASection />
    </div>
  );
};

export default Home;
