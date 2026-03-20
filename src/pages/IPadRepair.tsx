import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import IPadRepairSection from "@/components/IPadRepairSection";
import CTASection from "@/components/CTASection";

const IPadRepair = () => {
    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="iPad Repair Hyderabad | Professional iPad Pro, Air & Mini Service"
                description="Specialized iPad repair in Hyderabad. Screen replacement, battery fixes, and logic board repairs for iPad Pro, Air, and Mini. Genuine parts and warranty included."
                canonical="https://ideviceservicecentre.vercel.app/ipad-repair-hyderabad"
                keywords={[
                    "iPad Repair Hyderabad",
                    "iPad Screen Replacement Hyderabad",
                    "iPad Pro Service Hyderabad",
                    "iPad Mini Repair Hyderabad",
                    "Best iPad Repair Centre Hyderabad",
                ]}
            />
            <Navbar />

            <main className="pt-20">
                <IPadRepairSection />
                <div className="glow-divider" />
                <CTASection />
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default IPadRepair;
