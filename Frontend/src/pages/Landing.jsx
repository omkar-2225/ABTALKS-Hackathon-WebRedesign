import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import QuoteDivider from "../components/QuoteDivider/QuoteDivider";
import Stats from "../components/Stats/Stats";
import ChallengeTracks from "../components/ChallengeTracks/ChallengeTracks";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import ChallengePreview from "../components/CHallengePreview/ChallengePreview";
import JourneyCommunity from "../components/Journey/JourneyCommunity";
import FinalCTA from "../components/CTA/FinalCTA";
import Footer from "../components/Footer/Footer";

export default function Landing() {
  return (
    <main className="relative min-h-screen bg-[#09090B] overflow-hidden">

      {/* Glow */}

      <div className="glow top-[-200px] right-[-150px]" />

      <div className="glow bottom-[-250px] left-[-150px]" />

      <Navbar />

      <section id="about" className="scroll">
        <Hero />
      </section>
      <QuoteDivider />
      <Stats />

      <section id="tracks" className="scroll">
        <ChallengeTracks />
      </section>

      <HowItWorks />
      <ChallengePreview />

      <section id="community" className="scroll">
        <JourneyCommunity />
      </section>

      <FinalCTA />

      <section id="faq" className="scroll">
        <Footer />
      </section>
    </main>
  );
}