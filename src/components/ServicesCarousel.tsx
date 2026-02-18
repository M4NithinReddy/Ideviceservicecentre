import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceCard {
    title: string;
    description: string;
    icon: string;
    features: string[];
}

const services: ServiceCard[] = [
    {
        title: "Logic Board Repair",
        description: "Micro-level component repair and replacement",
        icon: "🔧",
        features: ["IC Replacement", "Trace Repair", "Power Issues", "No Boot Fix"],
    },
    {
        title: "Water Damage Repair",
        description: "Complete liquid damage restoration",
        icon: "💧",
        features: ["Ultrasonic Cleaning", "Corrosion Removal", "Component Testing", "Data Recovery"],
    },
    {
        title: "Screen Replacement",
        description: "Premium OLED and LCD displays",
        icon: "📱",
        features: ["Original Quality", "Touch Calibration", "True Tone", "Warranty Included"],
    },
    {
        title: "Battery Service",
        description: "Genuine capacity battery replacement",
        icon: "🔋",
        features: ["Health Check", "Fast Charging", "Genuine Parts", "Same Day Service"],
    },
    {
        title: "Camera Repair",
        description: "Front and rear camera restoration",
        icon: "📷",
        features: ["Focus Issues", "Lens Replacement", "Flash Repair", "Quality Testing"],
    },
    {
        title: "Data Recovery",
        description: "Professional data extraction services",
        icon: "💾",
        features: ["Dead Devices", "Encrypted Data", "Photo Recovery", "Secure Transfer"],
    },
];

const ServicesCarousel = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 px-6 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Our Premium Services
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive repair solutions for all Apple devices with certified technicians and genuine parts.
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Scroll Buttons */}
                    <button
                        onClick={scrollLeft}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-full bg-background border border-border shadow-lg hover:bg-muted transition-all duration-200"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                        onClick={scrollRight}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-full bg-background border border-border shadow-lg hover:bg-muted transition-all duration-200"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Scrollable Container */}
                    <div
                        ref={containerRef}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="flex-shrink-0 w-80 snap-start"
                            >
                                <div className="glass-card-hover p-8 h-full">
                                    {/* Icon */}
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                        <span className="text-4xl">{service.icon}</span>
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-xl font-bold text-foreground mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-6">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-2">
                                        {service.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-center gap-2 text-sm text-muted-foreground"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile scroll hint */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center mt-8 text-sm text-muted-foreground md:hidden"
                >
                    Swipe to see more services →
                </motion.p>
            </div>
        </section>
    );
};

export default ServicesCarousel;
