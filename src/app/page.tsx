import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProblemStatement } from "@/components/ProblemStatement";
import { HowItWorks } from "@/components/HowItWorks";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { FeatureGrid } from "@/components/FeatureGrid";
import { TechSection } from "@/components/TechSection";
import { MetricsSection } from "@/components/MetricsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <ProblemStatement />
        <HowItWorks />
        <FeatureShowcase />
        <FeatureGrid />
        <TechSection />
        <MetricsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
