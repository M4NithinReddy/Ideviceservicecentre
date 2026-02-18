import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import IPhoneRepairSection from "@/components/IPhoneRepairSection";
import MacBookRepairSection from "@/components/MacBookRepairSection";
import IPadRepairSection from "@/components/IPadRepairSection";
import AppleWatchRepairSection from "@/components/AppleWatchRepairSection";
import IMacRepairSection from "@/components/IMacRepairSection";
import ServicesOrbit from "@/components/ServicesOrbit";
import DualSection from "@/components/DualSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Sticky Hero Section (Parallax Base) */}
      <div className="relative z-0">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <Hero />
        </div>
      </div>

      {/* Scrolling Content (Parallax Cover) */}
      <div className="relative z-10 bg-[#020617] mt-[-100vh]" style={{ marginTop: "0" }}>

        <VideoSection />

        <div className="glow-divider" />

        <IPhoneRepairSection />

        <div className="glow-divider" />

        <MacBookRepairSection />

        <div className="glow-divider" />

        <IPadRepairSection />

        <div className="glow-divider" />

        <AppleWatchRepairSection />

        <div className="glow-divider" />

        <IMacRepairSection />

        <div className="glow-divider" />

        <DualSection />

        <div className="glow-divider" />

        <ServicesOrbit />

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
