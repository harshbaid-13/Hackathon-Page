import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { TrilemmaSection } from "./components/TrilemmaSection";
import { SolutionSection } from "./components/SolutionSection";
import { DPGsSection } from "./components/DPGsSection";
import { HackathonSection } from "./components/HackathonSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <HackathonSection />
      <AboutSection />
      <TrilemmaSection />
      <SolutionSection />
      <DPGsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
