import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Scrolling Content */}
      <div className="relative z-10 bg-[#020617]">

        <VideoSection />

        <div className="glow-divider" />

        <TrustSection />

        <div className="glow-divider" />

        <CTASection />
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
