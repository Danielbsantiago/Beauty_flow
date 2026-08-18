import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ForgottenClientsSection from "./components/ForgottenClientsSection";
import ProblemSection from "./components/ProblemSection";
import EmptySlotsSection from "./components/EmptySlotsSection";
import PillarsSection from "./components/PillarsSection";
import SolutionSection from "./components/SolutionSection";
import FinancialSimulationSection from "./components/FinancialSimulationSection";
import FeaturesSection from "./components/FeaturesSection";
import DemoSection from "./components/DemoSection";
import BenefitsSection from "./components/BenefitsSection";
import BeforeAfterSection from "./components/BeforeAfterSection";
import AudienceSection from "./components/AudienceSection";
import ResultsSection from "./components/ResultsSection";
import WaitlistSection from "./components/WaitlistSection";
import ScheduleDemoSection from "./components/ScheduleDemoSection";
import PositioningSection from "./components/PositioningSection";
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
        <ForgottenClientsSection />
        <ProblemSection />
        <EmptySlotsSection />
        <PillarsSection />
        <SolutionSection />
        <FinancialSimulationSection />
        <FeaturesSection />
        <DemoSection />
        <BenefitsSection />
        <BeforeAfterSection />
        <AudienceSection />
        <ResultsSection />
        <WaitlistSection />
        <ScheduleDemoSection />
        <PositioningSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}

export default App;
