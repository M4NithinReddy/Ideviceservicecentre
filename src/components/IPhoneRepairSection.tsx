import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
    Smartphone, Monitor, Battery, Camera, Droplets,
    Cpu, Speaker, Wrench, ScanFace, Plug,
    Zap,
    ChevronRight, X, ArrowRight,
} from "lucide-react";
import { useOrbitResponsive } from "@/hooks/useOrbitResponsive";

/* ── Inner orbit: Board-level Services ── */
const iphoneServices = [
    { name: "Logic Board", icon: Cpu, color: "#f59e0b", details: ["Micro-Soldering", "Chip Replacement", "Short Circuit Repair", "Power IC Repair", "NAND Repair"] },
    { name: "Water Damage", icon: Droplets, color: "#06b6d4", details: ["Ultrasonic Cleaning", "Corrosion Removal", "Component Recovery", "Data Preservation"] },
    { name: "Face ID", icon: ScanFace, color: "#ec4899", details: ["TrueDepth Camera Repair", "IR Sensor Fix", "Dot Projector Repair", "Face ID Calibration"] },
    { name: "Short Circuit", icon: Zap, color: "#ef4444", details: ["Circuit Tracing", "Burnt Component Swap", "MOSFET Repair", "Power Rail Fix"] },
];

/* ── Outer orbit: Part Replacements ── */
const iphoneReplacements = [
    { name: "Display", icon: Monitor, color: "#3b82f6", details: ["OLED Screen Replacement", "LCD Screen Replacement", "Touch Digitizer Fix", "3D Touch Repair", "True Tone Calibration"] },
    { name: "Battery", icon: Battery, color: "#22c55e", details: ["Battery Replacement", "Battery Health Restore", "Charging Circuit Fix", "Wireless Charging Fix"] },
    { name: "Camera", icon: Camera, color: "#a855f7", details: ["Rear Camera Replacement", "Front Camera Fix", "Camera Lens Repair", "OIS Module Repair", "Flash Repair"] },
    { name: "Audio", icon: Speaker, color: "#8b5cf6", details: ["Ear Speaker Replacement", "Loud Speaker Fix", "Microphone Repair", "Audio IC Repair"] },
    { name: "Charging", icon: Plug, color: "#14b8a6", details: ["Charging Port Swap", "Lightning Flex Cable", "Wireless Coil Repair", "Fast Charge Restore"] },
    { name: "Housing", icon: Wrench, color: "#f97316", details: ["Back Glass Replacement", "Frame Repair", "Button Replacement", "SIM Tray Fix"] },
];

const getCirclePos = (i: number, total: number, r: number) => {
    const angle = ((360 / total) * i - 90) * (Math.PI / 180);
    return { x: Math.cos(angle) * r, y: Math.sin(angle) * r };
};

/* Base constants */
const R_INNER_B = 130;
const R_OUTER_B = 210;
const NODE_S_B = 50;
const NODE_R_B = 54;

type ActiveItem = { ring: "service" | "replacement"; index: number } | null;

const IPhoneRepairSection = () => {
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
        ? active.ring === "service"
            ? iphoneServices[active.index]
            : iphoneReplacements[active.index]
        : null;

    const isOpen = active !== null;
    const cx = BOX / 2;
    const cy = BOX / 2;

    const handleClick = (ring: "service" | "replacement", index: number) => {
        if (active && active.ring === ring && active.index === index) {
            setActive(null);
        } else {
            setActive({ ring, index });
        }
    };

    const iconS = Math.max(10, 14 * scale);
    const iconR = Math.max(11, 15 * scale);
    const labelS = Math.max(4.5, 5.5 * scale);
    const labelR = Math.max(5, 6 * scale);

    return (
        <section id="iphone" ref={ref} className="relative min-h-screen flex flex-col overflow-hidden">
            {/* ── Background ── */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.1 }}
            >
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-purple-500/[0.03] rounded-full blur-[120px]"
                    animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-blue-500/[0.03] rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.12, 1], y: [0, -15, 0] }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>

            {/* ── Header ── */}
            <div className="relative z-10 text-center pt-8 pb-1 md:pt-12 md:pb-2 flex-shrink-0 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-1 md:mb-2"
                        style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}>
                        iPhone{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Repairs
                        </span>
                    </h2>
                </motion.div>
                <motion.p
                    className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto font-light"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                    Inner ring — board-level services · Outer ring — part replacements. Tap any to explore.
                </motion.p>
            </div>

            {/* ── Interactive area ── */}
            <div className={`relative z-10 flex-1 flex ${isMobile ? "flex-col items-center justify-center py-4 gap-4" : "items-center justify-center"} min-h-0 px-4`}>

                {/* Orbit group */}
                <motion.div
                    className="relative flex-shrink-0"
                    style={{ width: BOX, height: BOX }}
                    animate={{ x: !isMobile && isOpen ? -140 : 0 }}
                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                >
                    {/* ── Outer orbit ring ── */}
                    <motion.div
                        className="absolute rounded-full"
                        style={{ width: R_OUTER * 2, height: R_OUTER * 2, left: cx - R_OUTER, top: cy - R_OUTER, border: "1px solid rgba(59,130,246,0.12)" }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <motion.div
                        className="absolute rounded-full border border-dashed border-white/[0.03]"
                        style={{ width: R_OUTER * 2 + 26 * scale, height: R_OUTER * 2 + 26 * scale, left: cx - R_OUTER - 13 * scale, top: cy - R_OUTER - 13 * scale }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />

                    {/* ── Inner orbit ring ── */}
                    <motion.div
                        className="absolute rounded-full"
                        style={{ width: R_INNER * 2, height: R_INNER * 2, left: cx - R_INNER, top: cy - R_INNER, border: "1px solid rgba(168,85,247,0.18)" }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    />

                    {/* ── Curved text ── */}
                    <motion.svg
                        className="absolute pointer-events-none"
                        style={{ left: cx - R_OUTER - 15 * scale, top: cy - R_OUTER - 15 * scale, width: (R_OUTER + 15 * scale) * 2, height: (R_OUTER + 15 * scale) * 2 }}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <defs>
                            <path id="iphone-inner-path"
                                d={`M ${R_OUTER + 15 * scale}, ${R_OUTER + 15 * scale - R_INNER} A ${R_INNER},${R_INNER} 0 1,1 ${R_OUTER + 15 * scale - 0.01}, ${R_OUTER + 15 * scale - R_INNER}`}
                            />
                            <path id="iphone-outer-path"
                                d={`M ${R_OUTER + 15 * scale}, ${15 * scale} A ${R_OUTER},${R_OUTER} 0 1,1 ${R_OUTER + 15 * scale - 0.01}, ${15 * scale}`}
                            />
                        </defs>
                        <text>
                            <textPath href="#iphone-inner-path" startOffset="5%"
                                style={{ fill: "rgba(168,85,247,0.5)", fontSize: `${Math.max(6, 9 * scale)}px`, fontWeight: 700, letterSpacing: "0.35em", fontFamily: "'Inter', sans-serif" }}>
                                S · E · R · V · I · C · E · S
                            </textPath>
                        </text>
                        <text>
                            <textPath href="#iphone-outer-path" startOffset="2%"
                                style={{ fill: "rgba(59,130,246,0.45)", fontSize: `${Math.max(6, 9 * scale)}px`, fontWeight: 700, letterSpacing: "0.3em", fontFamily: "'Inter', sans-serif" }}>
                                R · E · P · L · A · C · E · M · E · N · T · S
                            </textPath>
                        </text>
                    </motion.svg>

                    {/* ── Rotating conic glow ── */}
                    <motion.div
                        className="absolute rounded-full pointer-events-none"
                        style={{
                            width: R_OUTER * 2, height: R_OUTER * 2,
                            left: cx - R_OUTER, top: cy - R_OUTER,
                            background: "conic-gradient(from 0deg, transparent 0%, rgba(168,85,247,0.06) 18%, transparent 35%, rgba(59,130,246,0.05) 60%, transparent 80%, rgba(6,182,212,0.04) 92%, transparent 100%)",
                        }}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1, rotate: 360 } : {}}
                        transition={{ opacity: { duration: 0.5, delay: 0.3 }, rotate: { duration: 22, repeat: Infinity, ease: "linear", delay: 0.3 } }}
                    />

                    {/* ── iPhone at center ── */}
                    <div className="absolute z-10" style={{ left: cx - 22 * scale, top: cy - 40 * scale }}>
                        <motion.div
                            initial={{ opacity: 0, y: 35, scale: 0.8, filter: "blur(6px)" }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative flex flex-col items-center"
                        >
                            <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[35px]"
                                style={{ width: 96 * scale, height: 96 * scale, backgroundColor: "rgba(168,85,247,0.1)" }}
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            />
                            <motion.div
                                animate={isInView ? { y: [0, -5, 0] } : {}}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                                className="relative"
                            >
                                <div style={{ width: 44 * scale, height: 80 * scale, borderRadius: 10 * scale }}
                                    className="bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-white/[0.12] shadow-[0_0_30px_rgba(168,85,247,0.1)] overflow-hidden relative">
                                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -skew-x-12"
                                        initial={{ x: "-100%" }}
                                        animate={isInView ? { x: "200%" } : {}}
                                        transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
                                    />
                                    <div style={{ inset: 3 * scale, borderRadius: 7 * scale }}
                                        className="absolute bg-gradient-to-b from-slate-950 to-slate-900 border border-white/5 flex flex-col items-center justify-center">
                                        {/* Notch */}
                                        <div style={{ width: 18 * scale, height: 4 * scale, borderRadius: 2 * scale, top: 2 * scale }}
                                            className="absolute bg-slate-800" />
                                        <Smartphone style={{ width: 14 * scale, height: 14 * scale }} className="text-purple-400/40" strokeWidth={1} />
                                        <span style={{ fontSize: Math.max(4, 6 * scale), fontFamily: "'Inter', sans-serif" }}
                                            className="font-semibold text-white/40 tracking-[0.1em] uppercase mt-0.5">iPhone</span>
                                        <AnimatePresence>
                                            {activeSvc && (
                                                <motion.div key={activeSvc.name}
                                                    initial={{ opacity: 0, y: 3 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -3 }}
                                                    className="mt-0.5 text-center">
                                                    <span style={{ fontSize: Math.max(3, 4 * scale), color: activeSvc.color }} className="font-bold">{activeSvc.name}</span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* ── Inner orbit: Services ── */}
                    {iphoneServices.map((svc, i) => {
                        const { x, y } = getCirclePos(i, iphoneServices.length, R_INNER);
                        const isActive = active?.ring === "service" && active.index === i;
                        return (
                            <motion.button
                                key={`svc-${svc.name}`}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.06, type: "spring", bounce: 0.25 }}
                                onClick={() => handleClick("service", i)}
                                className={`absolute z-20 rounded-full backdrop-blur-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border ${isActive ? "bg-slate-800" : "bg-slate-900/80 border-white/10 hover:border-white/20 hover:bg-slate-800/80"}`}
                                style={{
                                    width: NODE_S, height: NODE_S,
                                    left: cx + x - NODE_S / 2, top: cy + y - NODE_S / 2,
                                    borderColor: isActive ? svc.color : undefined,
                                    boxShadow: isActive ? `0 0 20px ${svc.color}30` : "0 0 10px rgba(0,0,0,0.3)",
                                }}
                                whileHover={{ scale: 1.15, boxShadow: `0 0 20px ${svc.color}20`, transition: { duration: 0.2 } }}
                                whileTap={{ scale: 0.92 }}
                            >
                                {isActive && (
                                    <motion.div className="absolute inset-0 rounded-full border"
                                        style={{ borderColor: `${svc.color}35` }}
                                        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }} />
                                )}
                                <svc.icon style={{ color: isActive ? svc.color : "#94a3b8", width: iconS, height: iconS }} strokeWidth={1.5} />
                                <span style={{ fontSize: labelS, color: isActive ? svc.color : "#cbd5e1", fontFamily: "'Inter', sans-serif" }}
                                    className="font-bold tracking-wide leading-none mt-0.5">{svc.name}</span>
                            </motion.button>
                        );
                    })}

                    {/* ── Outer orbit: Replacements ── */}
                    {iphoneReplacements.map((rep, i) => {
                        const { x, y } = getCirclePos(i, iphoneReplacements.length, R_OUTER);
                        const isActive = active?.ring === "replacement" && active.index === i;
                        return (
                            <motion.button
                                key={`rep-${rep.name}`}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.45 + i * 0.05, type: "spring", bounce: 0.25 }}
                                onClick={() => handleClick("replacement", i)}
                                className={`absolute z-20 rounded-full backdrop-blur-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border ${isActive ? "bg-slate-800" : "bg-slate-900/80 border-white/10 hover:border-white/20 hover:bg-slate-800/80"}`}
                                style={{
                                    width: NODE_R, height: NODE_R,
                                    left: cx + x - NODE_R / 2, top: cy + y - NODE_R / 2,
                                    borderColor: isActive ? rep.color : undefined,
                                    boxShadow: isActive ? `0 0 20px ${rep.color}30` : "0 0 10px rgba(0,0,0,0.3)",
                                }}
                                whileHover={{ scale: 1.15, boxShadow: `0 0 20px ${rep.color}20`, transition: { duration: 0.2 } }}
                                whileTap={{ scale: 0.92 }}
                            >
                                {isActive && (
                                    <motion.div className="absolute inset-0 rounded-full border"
                                        style={{ borderColor: `${rep.color}35` }}
                                        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }} />
                                )}
                                <rep.icon style={{ color: isActive ? rep.color : "#94a3b8", width: iconR, height: iconR }} strokeWidth={1.5} />
                                <span style={{ fontSize: labelR, color: isActive ? rep.color : "#cbd5e1", fontFamily: "'Inter', sans-serif" }}
                                    className="font-bold tracking-wide leading-none mt-0.5">{rep.name}</span>
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* ── Detail panel ── */}
                <AnimatePresence>
                    {activeSvc && (
                        <motion.div
                            key={`panel-${activeSvc.name}`}
                            initial={isMobile ? { opacity: 0, y: 40, filter: "blur(8px)" } : { opacity: 0, x: 80, filter: "blur(8px)" }}
                            animate={isMobile ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 1, x: 0, filter: "blur(0px)" }}
                            exit={isMobile ? { opacity: 0, y: 40, filter: "blur(8px)" } : { opacity: 0, x: 80, filter: "blur(8px)" }}
                            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                            className={isMobile ? "w-full max-w-sm mx-auto flex-shrink-0" : "absolute z-30"}
                            style={!isMobile ? { right: "calc(50% - 400px)" } : undefined}
                        >
                            <div className="w-full rounded-3xl bg-slate-900/70 backdrop-blur-2xl border border-white/[0.08] p-5 sm:p-6 shadow-2xl relative"
                                style={{ borderColor: `${activeSvc.color}20` }}>
                                <button onClick={() => setActive(null)}
                                    className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                    <X className="w-3.5 h-3.5 text-slate-400" />
                                </button>

                                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                    className="text-[9px] uppercase tracking-[0.2em] font-semibold mb-3 block"
                                    style={{ color: active!.ring === "service" ? "#c084fc" : "#60a5fa" }}>
                                    {active!.ring === "service" ? "⚡ Board-Level Service" : "🔧 Part Replacement"}
                                </motion.span>

                                <div className="flex items-center gap-3 mb-4">
                                    <motion.div className="w-10 h-10 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${activeSvc.color}15`, border: `1px solid ${activeSvc.color}25` }}
                                        initial={{ rotate: -90, scale: 0 }}
                                        animate={{ rotate: 0, scale: 1 }}
                                        transition={{ duration: 0.35, type: "spring", bounce: 0.35 }}>
                                        <activeSvc.icon style={{ color: activeSvc.color, width: 18, height: 18 }} strokeWidth={1.5} />
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05, duration: 0.3 }}>
                                        <h4 className="text-white font-bold text-sm sm:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>{activeSvc.name}</h4>
                                        <span className="text-[10px] text-slate-500 uppercase tracking-[0.15em] font-medium">{activeSvc.details.length} Options</span>
                                    </motion.div>
                                </div>

                                <div className="space-y-1">
                                    {activeSvc.details.map((detail, j) => (
                                        <motion.div key={detail}
                                            initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                            transition={{ delay: 0.08 + j * 0.04, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                            className="flex items-center gap-2 py-2 px-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-200 group/item cursor-default">
                                            <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/item:translate-x-0.5"
                                                style={{ color: activeSvc.color }} />
                                            <span className="text-xs sm:text-sm text-slate-300 font-medium group-hover/item:text-white transition-colors"
                                                style={{ fontFamily: "'Inter', sans-serif" }}>{detail}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.a href="#cta"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.3 }}
                                    className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:brightness-125 hover:scale-[1.02] active:scale-[0.98]"
                                    style={{ backgroundColor: `${activeSvc.color}20`, border: `1px solid ${activeSvc.color}30` }}>
                                    Book {activeSvc.name} Repair
                                    <ArrowRight className="w-4 h-4" />
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default IPhoneRepairSection;
