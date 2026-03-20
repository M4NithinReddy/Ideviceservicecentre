import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="i Device Apple Service Centre | Best iPhone & MacBook Repair Hyderabad"
        description="Premium Apple device service center in Hyderabad. Expert repairs for iPhone, MacBook, iPad, Apple Watch, and iMac with genuine parts and 6-month warranty. Located in Punjagutta and Kompally."
        schema={[
            {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "i Device Apple Service Centre",
                "url": "https://ideviceservicecentre.vercel.app/"
            }
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Scrolling Content */}
      <div className="relative z-10 bg-[#020617]">

        <VideoSection />

        <div className="glow-divider" id="trust" />

        <TrustSection />

        <div className="glow-divider" id="cta" />

        <CTASection />
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
