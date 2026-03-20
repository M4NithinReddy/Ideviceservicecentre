import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import MacBookRepairSection from "@/components/MacBookRepairSection";
import CTASection from "@/components/CTASection";

const MacBookRepair = () => {
    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="MacBook Repair Hyderabad | Professional MacBook Pro & Air Service"
                description="Expert MacBook repair in Hyderabad. Screen replacement, battery swap, logic board micro-soldering, and keyboard repairs for MacBook Air and Pro. Visit our Punjagutta or Kompally center."
                canonical="https://ideviceservicecentre.vercel.app/macbook-repair-hyderabad"
                keywords={[
                    "MacBook Repair Hyderabad",
                    "MacBook Pro Repair Hyderabad",
                    "MacBook Air Service Hyderabad",
                    "MacBook Logic Board Repair Hyderabad",
                    "MacBook Screen Replacement Hyderabad",
                ]}
            />
            <Navbar />

            <main className="pt-20">
                <MacBookRepairSection />
                <div className="glow-divider" />
                <CTASection />
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default MacBookRepair;
