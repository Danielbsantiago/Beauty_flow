import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import AudienceSection from "./components/AudienceSection";
import ReactivationSection from "./components/ReactivationSection";
import CustomSetupSection from "./components/CustomSetupSection";
import ProofSection from "./components/ProofSection";
import AboutFounderSection from "./components/AboutFounderSection";
import FAQSection from "./components/FAQSection";
import PricingSection from "./components/PricingSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import MobileStickyBar from "./components/MobileStickyBar";

function App() {
  return (
    <div className="overflow-x-hidden bg-canvas">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <AudienceSection />
        <ReactivationSection />
        <CustomSetupSection />
        <ProofSection />
        <AboutFounderSection />
        <FAQSection />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}

export default App;
