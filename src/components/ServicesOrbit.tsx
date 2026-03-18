import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Wrench, ChevronRight, X, ArrowRight } from "lucide-react";
import { useOrbitResponsive } from "@/hooks/useOrbitResponsive";

/* ── Inner orbit: Core Expertise ── */
const coreServices = [
    { name: "Logic Board", img: "/icons/logic-board.svg", color: "#f59e0b", details: ["Micro-Soldering", "Chip-Level Repair", "BGA Reballing", "Power IC Replacement", "NAND Programming"] },
    { name: "Water Damage", img: "/icons/water-damage.svg", color: "#06b6d4", details: ["Ultrasonic Cleaning", "Corrosion Removal", "Board Recovery", "Data Preservation", "Component Swap"] },
    { name: "Data Recovery", img: "/icons/data-recovery.svg", color: "#8b5cf6", details: ["Secure Extraction", "NAND Recovery", "iCloud Bypass", "Encrypted Drive Access", "Deleted File Restore"] },
    { name: "Diagnostics", img: "/icons/diagnostics.svg", color: "#ef4444", details: ["Full System Scan", "Thermal Profiling", "Battery Analytics", "Component Isolation", "Short Circuit Trace"] },
];

/* ── Outer orbit: Repair Specialties ── */
const specialties = [
    { name: "Screen Fix", img: "/icons/screen-fix.svg", color: "#3b82f6", details: ["OLED Panel Swap", "LCD Replacement", "Touch Digitizer", "True Tone Calibration", "3D Touch Repair"] },
    { name: "Battery", img: "/icons/battery.svg", color: "#22c55e", details: ["Cell Replacement", "Health Restore", "Swollen Battery Fix", "Charge Circuit Repair", "Wireless Charging"] },
    { name: "Camera", img: "/icons/camera.svg", color: "#a855f7", details: ["Rear Lens Repair", "Front Camera Fix", "OIS Module Service", "Flash Replacement", "Sensor Calibration"] },
    { name: "Face ID", img: "/icons/face-id.svg", color: "#ec4899", details: ["TrueDepth Camera", "IR Sensor Fix", "Dot Projector Repair", "Proximity Sensor", "Face ID Calibration"] },
    { name: "Housing", img: "/icons/housing.svg", color: "#f97316", details: ["Back Glass Swap", "Frame Repair", "Button Replacement", "SIM Tray Fix", "Port Cleaning"] },
    { name: "Warranty", img: "/icons/warranty.svg", color: "#14b8a6", details: ["90-Day Guarantee", "Quality Parts", "Certified Repair", "Free Re-Check", "Priority Support"] },
];

const getCirclePos = (i: number, total: number, r: number) => {
    const angle = ((360 / total) * i - 90) * (Math.PI / 180);
    return { x: Math.cos(angle) * r, y: Math.sin(angle) * r };
};

const R_INNER_B = 120;
const R_OUTER_B = 200;
const NODE_S_B = 50;
const NODE_R_B = 54;

type ActiveItem = { ring: "core" | "specialty"; index: number } | null;

/* Small image icon component */
const NodeImg = ({ src, size, active, color }: { src: string; size: number; active: boolean; color: string }) => (
    <div
        className="relative flex-shrink-0 rounded-full overflow-hidden"
        style={{
            width: size,
            height: size,
            boxShadow: active ? `0 0 12px ${color}60` : "none",
            transition: "box-shadow 0.3s ease",
        }}
    >
        <img
            src={src}
            alt=""
            draggable={false}
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: active ? "none" : "brightness(0.75) saturate(0.8)",
                transition: "filter 0.3s ease",
                borderRadius: "50%",
            }}
        />
        {active && (
            <div
                className="absolute inset-0 rounded-full"
                style={{ background: `radial-gradient(circle at 50% 50%, ${color}22 0%, transparent 70%)` }}
            />
        )}
    </div>
);

const ServicesOrbit = () => {
    const [active, setActive] = useState<ActiveItem>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const { scale, isMobile } = useOrbitResponsive();

    const R_INNER = R_INNER_B * scale;
    const R_OUTER = R_OUTER_B * scale;
    const NODE_S = NODE_S_B * scale;
    const NODE_R = NODE_R_B * scale;
    const BOX = R_OUTER * 2 + NODE_R + 24 * scale;

    const activeSvc = active
        ? active.ring === "core"
            ? coreServices[active.index]
            : specialties[active.index]
        : null;

    const isOpen = active !== null;
    const cx = BOX / 2;
    const cy = BOX / 2;

    const handleClick = (ring: "core" | "specialty", index: number) => {
        if (active && active.ring === ring && active.index === index) setActive(null);
        else setActive({ ring, index });
    };

    const imgS = Math.max(22, 28 * scale);
    const imgR = Math.max(24, 30 * scale);
    const labelS = Math.max(4.5, 5.5 * scale);
    const labelR = Math.max(5, 6 * scale);

    return (
        <section ref={ref} className="relative min-h-screen flex flex-col overflow-hidden">
            {/* Background */}
            <motion.div className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.1 }}>
                <motion.div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[120px]"
                    animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-violet-500/[0.04] rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.12, 1], y: [0, -15, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />
            </motion.div>

            {/* Header */}
            <div className="relative z-10 text-center pt-8 pb-1 md:pt-12 md:pb-2 flex-shrink-0 px-4">
                <motion.div initial={{ opacity: 0, y: 30, filter: "blur(8px)" }} animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-1 md:mb-2" style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}>
                        360°{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">Comprehensive Care</span>
                    </h2>
                </motion.div>
                <motion.p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto font-light" style={{ fontFamily: "'Inter', sans-serif" }}
                    initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
                    Inner ring — core expertise · Outer ring — repair specialties. Tap any to explore.
                </motion.p>
            </div>

            {/* Interactive area */}
            <div className={`relative z-10 flex-1 flex ${isMobile ? "flex-col items-center justify-center py-4 gap-4" : "items-center justify-center"} min-h-0 px-4`}>
                <motion.div className="relative flex-shrink-0" style={{ width: BOX, height: BOX }}
                    animate={{ x: !isMobile && isOpen ? -180 : 0 }} transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}>

                    {/* Outer ring */}
                    <motion.div className="absolute rounded-full" style={{ width: R_OUTER * 2, height: R_OUTER * 2, left: cx - R_OUTER, top: cy - R_OUTER, border: "1px solid rgba(139,92,246,0.12)" }}
                        initial={{ opacity: 0, scale: 0 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }} />
                    <motion.div className="absolute rounded-full border border-dashed border-white/[0.03]"
                        style={{ width: R_OUTER * 2 + 26 * scale, height: R_OUTER * 2 + 26 * scale, left: cx - R_OUTER - 13 * scale, top: cy - R_OUTER - 13 * scale }}
                        initial={{ opacity: 0, scale: 0 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }} />

                    {/* Inner ring */}
                    <motion.div className="absolute rounded-full" style={{ width: R_INNER * 2, height: R_INNER * 2, left: cx - R_INNER, top: cy - R_INNER, border: "1px solid rgba(59,130,246,0.18)" }}
                        initial={{ opacity: 0, scale: 0 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} />

                    {/* Curved text */}
                    <motion.svg className="absolute pointer-events-none"
                        style={{ left: cx - R_OUTER - 15 * scale, top: cy - R_OUTER - 15 * scale, width: (R_OUTER + 15 * scale) * 2, height: (R_OUTER + 15 * scale) * 2 }}
                        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.5 }}>
                        <defs>
                            <path id="svc-inner-path" d={`M ${R_OUTER + 15 * scale}, ${R_OUTER + 15 * scale - R_INNER} A ${R_INNER},${R_INNER} 0 1,1 ${R_OUTER + 15 * scale - 0.01}, ${R_OUTER + 15 * scale - R_INNER}`} />
                            <path id="svc-outer-path" d={`M ${R_OUTER + 15 * scale}, ${15 * scale} A ${R_OUTER},${R_OUTER} 0 1,1 ${R_OUTER + 15 * scale - 0.01}, ${15 * scale}`} />
                        </defs>
                        <text><textPath href="#svc-inner-path" startOffset="3%"
                            style={{ fill: "rgba(59,130,246,0.5)", fontSize: `${Math.max(6, 9 * scale)}px`, fontWeight: 700, letterSpacing: "0.3em", fontFamily: "'Inter', sans-serif" }}>
                            C · O · R · E  ·  E · X · P · E · R · T · I · S · E
                        </textPath></text>
                        <text><textPath href="#svc-outer-path" startOffset="2%"
                            style={{ fill: "rgba(139,92,246,0.45)", fontSize: `${Math.max(6, 9 * scale)}px`, fontWeight: 700, letterSpacing: "0.3em", fontFamily: "'Inter', sans-serif" }}>
                            R · E · P · A · I · R  ·  S · P · E · C · I · A · L · T · I · E · S
                        </textPath></text>
                    </motion.svg>

                    {/* Rotating glow */}
                    <motion.div className="absolute rounded-full pointer-events-none"
                        style={{
                            width: R_OUTER * 2, height: R_OUTER * 2, left: cx - R_OUTER, top: cy - R_OUTER,
                            background: "conic-gradient(from 0deg, transparent 0%, rgba(59,130,246,0.06) 18%, transparent 35%, rgba(139,92,246,0.05) 60%, transparent 80%, rgba(168,85,247,0.04) 92%, transparent 100%)"
                        }}
                        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1, rotate: 360 } : {}}
                        transition={{ opacity: { duration: 0.5, delay: 0.3 }, rotate: { duration: 22, repeat: Infinity, ease: "linear", delay: 0.3 } }} />

                    {/* Central core */}
                    <div className="absolute z-10" style={{ left: cx - 42 * scale, top: cy - 42 * scale }}>
                        <motion.div initial={{ opacity: 0, scale: 0.6, filter: "blur(6px)" }} animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="relative flex flex-col items-center">
                            <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[40px]"
                                style={{ width: 112 * scale, height: 112 * scale, backgroundColor: "rgba(59,130,246,0.1)" }}
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
                            <div style={{ width: 84 * scale, height: 84 * scale }}
                                className="rounded-full bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-white/[0.12] shadow-[0_0_40px_rgba(59,130,246,0.12)] flex flex-col items-center justify-center relative">
                                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full"
                                    style={{ background: "conic-gradient(from 0deg, transparent 70%, rgba(59,130,246,0.15) 85%, transparent 100%)" }} />
                                <Wrench style={{ width: 20 * scale, height: 20 * scale }} className="text-blue-400/50 relative z-10" strokeWidth={1.5} />
                                <span style={{ fontSize: Math.max(4, 6 * scale), fontFamily: "'Inter', sans-serif" }}
                                    className="font-bold text-white/40 tracking-[0.15em] uppercase mt-1 relative z-10">Repair Core</span>
                                <AnimatePresence>
                                    {activeSvc && (
                                        <motion.span key={activeSvc.name} initial={{ opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -3 }}
                                            style={{ fontSize: Math.max(3, 5 * scale), color: activeSvc.color }}
                                            className="font-bold mt-0.5 relative z-10">{activeSvc.name}</motion.span>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>

                    {/* Inner orbit: Core */}
                    {coreServices.map((svc, i) => {
                        const { x, y } = getCirclePos(i, coreServices.length, R_INNER);
                        const isActive = active?.ring === "core" && active.index === i;
                        return (
                            <motion.button key={`core-${svc.name}`} initial={{ opacity: 0, scale: 0 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.06, type: "spring", bounce: 0.25 }}
                                onClick={() => handleClick("core", i)}
                                className={`absolute z-20 rounded-full backdrop-blur-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border ${isActive ? "bg-slate-800" : "bg-slate-900/80 border-white/10 hover:border-white/20 hover:bg-slate-800/80"}`}
                                style={{ width: NODE_S, height: NODE_S, left: cx + x - NODE_S / 2, top: cy + y - NODE_S / 2, borderColor: isActive ? svc.color : undefined, boxShadow: isActive ? `0 0 20px ${svc.color}30` : "0 0 10px rgba(0,0,0,0.3)" }}
                                whileHover={{ scale: 1.15, boxShadow: `0 0 20px ${svc.color}20`, transition: { duration: 0.2 } }} whileTap={{ scale: 0.92 }}>
                                {isActive && <motion.div className="absolute inset-0 rounded-full border" style={{ borderColor: `${svc.color}35` }} animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />}
                                <NodeImg src={svc.img} size={imgS} active={isActive} color={svc.color} />
                                <span style={{ fontSize: labelS, color: isActive ? svc.color : "#cbd5e1", fontFamily: "'Inter', sans-serif" }} className="font-bold tracking-wide leading-none mt-0.5">{svc.name}</span>
                            </motion.button>
                        );
                    })}

                    {/* Outer orbit: Specialties */}
                    {specialties.map((spec, i) => {
                        const { x, y } = getCirclePos(i, specialties.length, R_OUTER);
                        const isActive = active?.ring === "specialty" && active.index === i;
                        return (
                            <motion.button key={`spec-${spec.name}`} initial={{ opacity: 0, scale: 0 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.45 + i * 0.05, type: "spring", bounce: 0.25 }}
                                onClick={() => handleClick("specialty", i)}
                                className={`absolute z-20 rounded-full backdrop-blur-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border ${isActive ? "bg-slate-800" : "bg-slate-900/80 border-white/10 hover:border-white/20 hover:bg-slate-800/80"}`}
                                style={{ width: NODE_R, height: NODE_R, left: cx + x - NODE_R / 2, top: cy + y - NODE_R / 2, borderColor: isActive ? spec.color : undefined, boxShadow: isActive ? `0 0 20px ${spec.color}30` : "0 0 10px rgba(0,0,0,0.3)" }}
                                whileHover={{ scale: 1.15, boxShadow: `0 0 20px ${spec.color}20`, transition: { duration: 0.2 } }} whileTap={{ scale: 0.92 }}>
                                {isActive && <motion.div className="absolute inset-0 rounded-full border" style={{ borderColor: `${spec.color}35` }} animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />}
                                <NodeImg src={spec.img} size={imgR} active={isActive} color={spec.color} />
                                <span style={{ fontSize: labelR, color: isActive ? spec.color : "#cbd5e1", fontFamily: "'Inter', sans-serif" }} className="font-bold tracking-wide leading-none mt-0.5">{spec.name}</span>
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Detail panel */}
                <AnimatePresence>
                    {activeSvc && (
                        <motion.div key={`panel-${activeSvc.name}`}
                            initial={isMobile ? { opacity: 0, y: 40, filter: "blur(8px)" } : { opacity: 0, x: 80, filter: "blur(8px)" }}
                            animate={isMobile ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 1, x: 0, filter: "blur(0px)" }}
                            exit={isMobile ? { opacity: 0, y: 40, filter: "blur(8px)" } : { opacity: 0, x: 80, filter: "blur(8px)" }}
                            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                            className={isMobile ? "w-full max-w-sm mx-auto flex-shrink-0" : "absolute z-30"}
                            style={!isMobile ? { right: "calc(50% - 400px)" } : undefined}>
                            <div className="w-full rounded-3xl bg-slate-900/70 backdrop-blur-2xl border border-white/[0.08] p-5 sm:p-6 shadow-2xl relative" style={{ borderColor: `${activeSvc.color}20` }}>
                                <button onClick={() => setActive(null)} className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                    <X className="w-3.5 h-3.5 text-slate-400" />
                                </button>
                                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[9px] uppercase tracking-[0.2em] font-semibold mb-3 block"
                                    style={{ color: active!.ring === "core" ? "#60a5fa" : "#a78bfa" }}>
                                    {active!.ring === "core" ? "⚡ Core Expertise" : "🔧 Repair Specialty"}
                                </motion.span>
                                <div className="flex items-center gap-3 mb-4">
                                    <motion.div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden"
                                        style={{ backgroundColor: `${activeSvc.color}15`, border: `1px solid ${activeSvc.color}25` }}
                                        initial={{ rotate: -90, scale: 0 }} animate={{ rotate: 0, scale: 1 }} transition={{ duration: 0.35, type: "spring", bounce: 0.35 }}>
                                        <img src={activeSvc.img} alt={activeSvc.name} className="w-8 h-8 object-cover" />
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05, duration: 0.3 }}>
                                        <h4 className="text-white font-bold text-sm sm:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>{activeSvc.name}</h4>
                                        <span className="text-[10px] text-slate-500 uppercase tracking-[0.15em] font-medium">{activeSvc.details.length} Options</span>
                                    </motion.div>
                                </div>
                                <div className="space-y-1">
                                    {activeSvc.details.map((detail, j) => (
                                        <motion.div key={detail} initial={{ opacity: 0, x: 20, filter: "blur(4px)" }} animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                            transition={{ delay: 0.08 + j * 0.04, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                            className="flex items-center gap-2 py-2 px-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-200 group/item cursor-default">
                                            <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/item:translate-x-0.5" style={{ color: activeSvc.color }} />
                                            <span className="text-xs sm:text-sm text-slate-300 font-medium group-hover/item:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>{detail}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                <motion.a href="#cta" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.3 }}
                                    className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:brightness-125 hover:scale-[1.02] active:scale-[0.98]"
                                    style={{ backgroundColor: `${activeSvc.color}20`, border: `1px solid ${activeSvc.color}30` }}>
                                    Book {activeSvc.name} Service <ArrowRight className="w-4 h-4" />
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ServicesOrbit;
