import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import QuoteDivider from "../components/QuoteDivider/QuoteDivider";
import Stats from "../components/Stats/Stats";

export default function Landing() {
  return (
    <main className="relative min-h-screen bg-[#09090B] overflow-hidden">

      {/* Glow */}

      <div className="glow top-[-200px] right-[-150px]" />

      <div className="glow bottom-[-250px] left-[-150px]" />

      <Navbar />
      <Hero />
      <QuoteDivider />
      <Stats />
    </main>
  );
}