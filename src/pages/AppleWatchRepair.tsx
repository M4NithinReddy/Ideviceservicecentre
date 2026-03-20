import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import AppleWatchRepairSection from "@/components/AppleWatchRepairSection";
import CTASection from "@/components/CTASection";

const AppleWatchRepair = () => {
    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="Apple Watch Repair Hyderabad | Professional Smartwatch Service"
                description="Expert Apple Watch repair in Hyderabad for all models (Series 1 to Series 10, Ultra). Screen replacement, battery fixes, and digital crown repairs. Genuine parts and warranty."
                canonical="https://ideviceservicecentre.vercel.app/apple-watch-repair-hyderabad"
                keywords={[
                    "Apple Watch Repair Hyderabad",
                    "Apple Watch Screen Replacement Hyderabad",
                    "Apple Watch Battery Replacement Hyderabad",
                    "iWatch Repair Centre Hyderabad",
                    "Best Apple Watch Service Hyderabad",
                ]}
            />
            <Navbar />

            <main className="pt-20">
                <AppleWatchRepairSection />
                <div className="glow-divider" />
                <CTASection />
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default AppleWatchRepair;
