import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import IPhoneRepairSection from "@/components/IPhoneRepairSection";
import CTASection from "@/components/CTASection";

const IPhoneRepair = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="iPhone Repair Hyderabad | Best iPhone Service Centre Hyderabad"
        description="Certified iPhone repair service in Hyderabad. Expert screen replacement, battery swap, and motherboard repairs for all iPhone models. Visit our Punjagutta or Kompally centers today."
        canonical="https://ideviceservicecentre.vercel.app/iphone-repair-hyderabad"
        keywords={[
          "iPhone Repair Hyderabad",
          "iPhone Screen Replacement Hyderabad",
          "iPhone Battery Replacement Hyderabad",
          "Best iPhone Service Centre Hyderabad",
          "Apple iPhone Repair Punjagutta",
          "iPhone Logic Board Repair Hyderabad"
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "iPhone Repair Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "i Device Apple Service Centre"
            },
            "areaServed": "Hyderabad",
            "description": "Professional iPhone repair services including display, battery, and logic board repairs."
          }
        ]}
      />
      <Navbar />
      
      <main className="pt-20">
        <IPhoneRepairSection />
        <div className="glow-divider" />
        <CTASection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default IPhoneRepair;
