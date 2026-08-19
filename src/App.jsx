import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainFlowSection from "./components/PainFlowSection";
import PainCardsSection from "./components/PainCardsSection";
import SolutionSection from "./components/SolutionSection";
import ReactivationSection from "./components/ReactivationSection";
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
        <PainFlowSection />
        <PainCardsSection />
        <SolutionSection />
        <ReactivationSection />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}

export default App;
