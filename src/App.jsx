import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import ReactivationSection from "./components/ReactivationSection";
import CustomSetupSection from "./components/CustomSetupSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
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
        <ReactivationSection />
        <CustomSetupSection />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}

export default App;
