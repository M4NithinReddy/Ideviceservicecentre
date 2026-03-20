import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import IMacRepairSection from "@/components/IMacRepairSection";
import CTASection from "@/components/CTASection";

const IMacRepair = () => {
    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="iMac Repair Hyderabad | Desktop & All-in-One Apple Service"
                description="Expert iMac repair service in Hyderabad. Display replacement, power supply unit fixes, SSD upgrades, and RAM upgrades. Professional hardware solutions and warranty."
                canonical="https://ideviceservicecentre.vercel.app/imac-repair-hyderabad"
                keywords={[
                    "iMac Repair Hyderabad",
                    "iMac Screen Replacement Hyderabad",
                    "iMac SSD Upgrade Hyderabad",
                    "iMac Power Supply Repair Hyderabad",
                    "Best iMac Service Centre Hyderabad",
                ]}
            />
            <Navbar />

            <main className="pt-20">
                <IMacRepairSection />
                <div className="glow-divider" />
                <CTASection />
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default IMacRepair;
