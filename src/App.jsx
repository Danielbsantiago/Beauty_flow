import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import FeaturesSection from "./components/FeaturesSection";
import DemoSection from "./components/DemoSection";
import BenefitsSection from "./components/BenefitsSection";
import BeforeAfterSection from "./components/BeforeAfterSection";
import AudienceSection from "./components/AudienceSection";
import ResultsSection from "./components/ResultsSection";
import WaitlistSection from "./components/WaitlistSection";
import ScheduleDemoSection from "./components/ScheduleDemoSection";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import MobileStickyBar from "./components/MobileStickyBar";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <DemoSection />
        <BenefitsSection />
        <BeforeAfterSection />
        <AudienceSection />
        <ResultsSection />
        <WaitlistSection />
        <ScheduleDemoSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}

export default App;
