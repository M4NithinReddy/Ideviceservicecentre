import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench, Shield, Zap, Award,
  Smartphone, Laptop, Watch, Tablet,
  Monitor, Battery, Camera, Droplets, Cpu, HardDrive,
  Keyboard, Speaker, Plug,
  MemoryStick, Fan,
  Fingerprint, CircleDot, RectangleHorizontal, BatteryFull,
  Pencil, MonitorDot,
  ArrowLeft, ArrowRight, ChevronRight, X, ScanFace,
} from "lucide-react";
import { useState, useEffect } from "react";

/* ─────────────────────────────────────────────── */
/*  Types                                          */
/* ─────────────────────────────────────────────── */
type ServiceItem = {
  name: string;
  icon: any;
  color: string;
  details: string[];
};

type DeviceConfig = {
  services: ServiceItem[];
  replacements: ServiceItem[];
  innerRingColor: string;
  outerRingColor: string;
  glowColor: string;
  tagline: string;
  description: string;
  CenterIcon: any;
  gradient: string;
};

/* ─────────────────────────────────────────────── */
/*  Device Data                                    */
/* ─────────────────────────────────────────────── */
const deviceData: Record<string, DeviceConfig> = {
  iPhone: {
    CenterIcon: Smartphone,
    gradient: "from-purple-400 via-blue-400 to-cyan-400",
    glowColor: "rgba(168,85,247,0.15)",
    innerRingColor: "rgba(168,85,247,0.18)",
    outerRingColor: "rgba(59,130,246,0.12)",
    tagline: "Precision iPhone Repairs",
    description: "From cracked screens to micro-soldering logic board repairs — we handle every iPhone issue with precision.",
    services: [
      { name: "Logic Board", icon: Cpu, color: "#f59e0b", details: ["Micro-Soldering", "Chip Replacement", "Short Circuit Repair", "Power IC Repair", "NAND Repair"] },
      { name: "Water Damage", icon: Droplets, color: "#06b6d4", details: ["Ultrasonic Cleaning", "Corrosion Removal", "Component Recovery", "Data Preservation"] },
      { name: "Face ID", icon: ScanFace, color: "#ec4899", details: ["TrueDepth Camera Repair", "IR Sensor Fix", "Dot Projector Repair", "Face ID Calibration"] },
      { name: "Short Circuit", icon: Zap, color: "#ef4444", details: ["Circuit Tracing", "Burnt Component Swap", "MOSFET Repair", "Power Rail Fix"] },
    ],
    replacements: [
      { name: "Display", icon: Monitor, color: "#3b82f6", details: ["OLED Screen Replacement", "LCD Screen Replacement", "Touch Digitizer Fix", "True Tone Calibration"] },
      { name: "Battery", icon: Battery, color: "#22c55e", details: ["Battery Replacement", "Battery Health Restore", "Charging Circuit Fix", "Wireless Charging Fix"] },
      { name: "Camera", icon: Camera, color: "#a855f7", details: ["Rear Camera Replacement", "Front Camera Fix", "Camera Lens Repair", "OIS Module Repair", "Flash Repair"] },
      { name: "Audio", icon: Speaker, color: "#8b5cf6", details: ["Ear Speaker Replacement", "Loud Speaker Fix", "Microphone Repair", "Audio IC Repair"] },
      { name: "Charging", icon: Plug, color: "#14b8a6", details: ["Charging Port Swap", "Lightning Flex Cable", "Wireless Coil Repair", "Fast Charge Restore"] },
      { name: "Housing", icon: Wrench, color: "#f97316", details: ["Back Glass Replacement", "Frame Repair", "Button Replacement", "SIM Tray Fix"] },
    ],
  },
  MacBook: {
    CenterIcon: Laptop,
    gradient: "from-emerald-400 via-teal-400 to-cyan-400",
    glowColor: "rgba(16,185,129,0.15)",
    innerRingColor: "rgba(16,185,129,0.18)",
    outerRingColor: "rgba(6,182,212,0.12)",
    tagline: "Expert MacBook Repairs",
    description: "GPU reballing, keyboard butterfly repairs, SSD upgrades — every MacBook issue resolved with professional precision.",
    services: [
      { name: "Logic Board", icon: Cpu, color: "#f59e0b", details: ["Micro-Soldering", "GPU Reballing", "Chip Replacement", "Power IC Repair", "Capacitor Swap"] },
      { name: "Water Damage", icon: Droplets, color: "#06b6d4", details: ["Ultrasonic Cleaning", "Corrosion Removal", "Component Recovery", "Data Preservation"] },
      { name: "Short Circuit", icon: Zap, color: "#ef4444", details: ["Circuit Tracing", "Burnt Component Swap", "MOSFET Repair", "Power Rail Fix"] },
    ],
    replacements: [
      { name: "Display", icon: Monitor, color: "#3b82f6", details: ["Retina LCD Swap", "Display Assembly", "Backlight Repair", "Hinge Replacement", "Anti-Glare Fix"] },
      { name: "Battery", icon: Battery, color: "#22c55e", details: ["Battery Replacement", "Cycle Count Reset", "Swollen Battery Removal", "Trackpad Pressure Fix"] },
      { name: "Keyboard", icon: Keyboard, color: "#a855f7", details: ["Individual Key Fix", "Full Keyboard Swap", "Butterfly Mechanism Repair", "Backlight Fix"] },
      { name: "Storage", icon: HardDrive, color: "#ec4899", details: ["SSD Upgrade", "Data Migration", "NVMe Installation", "APFS Recovery"] },
      { name: "RAM", icon: MemoryStick, color: "#f97316", details: ["RAM Upgrade", "Memory Module Swap", "Slot Repair", "Capacity Expansion"] },
      { name: "Cooling", icon: Fan, color: "#14b8a6", details: ["Fan Replacement", "Thermal Paste Reapply", "Heat Sink Cleaning", "Thermal Pad Swap"] },
    ],
  },
  iPad: {
    CenterIcon: Tablet,
    gradient: "from-violet-400 via-purple-400 to-fuchsia-400",
    glowColor: "rgba(139,92,246,0.15)",
    innerRingColor: "rgba(139,92,246,0.18)",
    outerRingColor: "rgba(217,70,239,0.12)",
    tagline: "Professional iPad Repairs",
    description: "Screen replacements, Apple Pencil pairing, and board-level logic repairs for every iPad model.",
    services: [
      { name: "Logic Board", icon: Cpu, color: "#f59e0b", details: ["Micro-Soldering", "Chip Replacement", "Power IC Repair", "NAND Repair", "U2 IC Fix"] },
      { name: "Water Damage", icon: Droplets, color: "#06b6d4", details: ["Ultrasonic Cleaning", "Corrosion Removal", "Component Recovery", "Data Preservation"] },
      { name: "Short Circuit", icon: Zap, color: "#ef4444", details: ["Circuit Tracing", "Burnt Component Swap", "MOSFET Repair", "Tristar IC Replacement"] },
    ],
    replacements: [
      { name: "Display", icon: Monitor, color: "#3b82f6", details: ["LCD Panel Swap", "Digitizer Replacement", "True Tone Calibration", "Laminated Assembly Repair"] },
      { name: "Battery", icon: Battery, color: "#22c55e", details: ["Battery Replacement", "Battery Health Restore", "Swollen Battery Removal", "Charging Port Fix"] },
      { name: "Camera", icon: Camera, color: "#a855f7", details: ["Rear Camera Fix", "Front Camera Fix", "LiDAR Module", "Flash Repair"] },
      { name: "Speaker", icon: Speaker, color: "#ec4899", details: ["Speaker Replacement", "Microphone Fix", "Audio IC Repair", "Stereo Calibration"] },
      { name: "Apple Pencil", icon: Pencil, color: "#f97316", details: ["Tip Replacement", "Charging Coil Fix", "Pairing Repair", "Pressure Sensor Fix"] },
      { name: "Housing", icon: Wrench, color: "#14b8a6", details: ["Back Cover Swap", "Frame Repair", "Button Replacement", "SIM Tray Fix"] },
    ],
  },
  Watch: {
    CenterIcon: Watch,
    gradient: "from-rose-400 via-orange-400 to-amber-400",
    glowColor: "rgba(244,63,94,0.15)",
    innerRingColor: "rgba(244,63,94,0.18)",
    outerRingColor: "rgba(251,191,36,0.12)",
    tagline: "Apple Watch Specialists",
    description: "Display replacements, Digital Crown repairs, water damage restoration — all Apple Watch models covered.",
    services: [
      { name: "Water Damage", icon: Droplets, color: "#06b6d4", details: ["Ultrasonic Cleaning", "Seal Restoration", "Corrosion Removal", "Sensor Recovery"] },
      { name: "Diagnostics", icon: Wrench, color: "#f59e0b", details: ["Full System Check", "Sensor Calibration", "Heart Rate Fix", "GPS Module Repair"] },
    ],
    replacements: [
      { name: "Touch", icon: Fingerprint, color: "#3b82f6", details: ["Digitizer Replacement", "Force Touch Sensor", "Haptic Feedback Fix", "Touch Calibration"] },
      { name: "Display", icon: Monitor, color: "#a855f7", details: ["OLED Panel Swap", "Glass Replacement", "Display Connector Fix", "Brightness Restore"] },
      { name: "Battery", icon: BatteryFull, color: "#22c55e", details: ["Battery Replacement", "Battery Health Restore", "Swollen Battery Removal", "Charge Circuit Fix"] },
      { name: "Crown", icon: CircleDot, color: "#ec4899", details: ["Digital Crown Swap", "Crown Mechanism Fix", "Rotation Calibration", "Haptic Engine Repair"] },
      { name: "Back Body", icon: RectangleHorizontal, color: "#f97316", details: ["Back Crystal Swap", "Sensor Cover Fix", "Housing Restoration", "Seal Replacement"] },
    ],
  },
  iMac: {
    CenterIcon: MonitorDot,
    gradient: "from-sky-400 via-indigo-400 to-violet-400",
    glowColor: "rgba(14,165,233,0.15)",
    innerRingColor: "rgba(14,165,233,0.18)",
    outerRingColor: "rgba(99,102,241,0.12)",
    tagline: "iMac Repair Experts",
    description: "Retina display swaps, PSU repairs, RAM & SSD upgrades, and full logic board micro-soldering.",
    services: [
      { name: "Logic Board", icon: Cpu, color: "#f59e0b", details: ["Micro-Soldering", "GPU Reballing", "Chip-Level Repair", "Power Rail Fix", "Capacitor Swap"] },
      { name: "SMC Reset", icon: Zap, color: "#ef4444", details: ["SMC Chip Repair", "Thermal Shutdown Fix", "Fan Control Restore", "Power Sequence Repair"] },
      { name: "Water Damage", icon: Droplets, color: "#06b6d4", details: ["Board Cleaning", "Corrosion Removal", "Component Recovery", "Data Preservation"] },
    ],
    replacements: [
      { name: "Display", icon: Monitor, color: "#3b82f6", details: ["Retina Panel Swap", "LCD Replacement", "Backlight Repair", "Anti-Glare Fix", "Display Adhesive"] },
      { name: "Power Supply", icon: Zap, color: "#22c55e", details: ["PSU Replacement", "Capacitor Repair", "Voltage Regulator Fix", "Power Board Swap"] },
      { name: "Storage", icon: HardDrive, color: "#a855f7", details: ["SSD Upgrade", "HDD to SSD Conversion", "Fusion Drive Repair", "Data Migration"] },
      { name: "RAM", icon: MemoryStick, color: "#ec4899", details: ["RAM Upgrade", "Module Replacement", "Slot Repair", "Capacity Expansion"] },
      { name: "Cooling", icon: Fan, color: "#f97316", details: ["Fan Replacement", "Thermal Paste Reapply", "Heat Sink Cleaning", "Airflow Restoration"] },
    ],
  },
};

/* ─────────────────────────────────────────────── */
/*  Category Orbit Config                          */
/* ─────────────────────────────────────────────── */
const categories = [
  { name: "iPhone", icon: Smartphone, color: "#3b82f6", glowColor: "rgba(59,130,246,0.5)" },
  { name: "MacBook", icon: Laptop, color: "#10b981", glowColor: "rgba(16,185,129,0.5)" },
  { name: "iPad", icon: Tablet, color: "#a855f7", glowColor: "rgba(168,85,247,0.5)" },
  { name: "Watch", icon: Watch, color: "#f43f5e", glowColor: "rgba(244,63,94,0.5)" },
  { name: "iMac", icon: MonitorDot, color: "#0ea5e9", glowColor: "rgba(14,165,233,0.5)" },
];

const ORBIT_RADIUS = 200;
const ORBIT_DURATION = 40;
const PLANET_SIZE = 64;

/* ─────────────────────────────────────────────── */
/*  Dual-Ring helpers                              */
/* ─────────────────────────────────────────────── */
const getCirclePos = (i: number, total: number, r: number) => {
  const angle = ((360 / total) * i - 90) * (Math.PI / 180);
  return { x: Math.cos(angle) * r, y: Math.sin(angle) * r };
};

const R_INNER = 120;
const R_OUTER = 195;
const NODE_S = 50;
const NODE_R = 54;

type ActiveItem = { ring: "service" | "replacement"; index: number } | null;

/* ─────────────────────────────────────────────── */
/*  Shared fade transition (no positional shifts)  */
/* ─────────────────────────────────────────────── */
const FADE_IN = { opacity: 1 };
const FADE_OUT = { opacity: 0 };
const FADE_TRANSITION = { duration: 0.38, ease: "easeInOut" as const };

/* ─────────────────────────────────────────────── */
/*  Hero Component                                 */
/* ─────────────────────────────────────────────── */
const Hero = () => {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<ActiveItem>(null);
  const [isOrbitPaused, setIsOrbitPaused] = useState(false);

  /* Listen for device selection fired from the Navbar Services dropdown */
  useEffect(() => {
    const handler = (e: Event) => {
      const name = (e as CustomEvent<string>).detail;
      setSelectedDevice(name);
      setActiveItem(null);
    };
    window.addEventListener("idevice:selectDevice", handler);
    return () => window.removeEventListener("idevice:selectDevice", handler);
  }, []);

  const devCfg = selectedDevice ? deviceData[selectedDevice] : null;
  const BOX = R_OUTER * 2 + NODE_R + 24;
  const cx = BOX / 2;
  const cy = BOX / 2;

  const activeSvc = activeItem
    ? activeItem.ring === "service"
      ? devCfg?.services[activeItem.index]
      : devCfg?.replacements[activeItem.index]
    : null;

  const handleDeviceClick = (name: string) => { setSelectedDevice(name); setActiveItem(null); };
  const handleBack = () => { setSelectedDevice(null); setActiveItem(null); };
  const handleNodeClick = (ring: "service" | "replacement", index: number) => {
    setActiveItem(activeItem?.ring === ring && activeItem?.index === index ? null : { ring, index });
  };

  /* GPU-composited style — applied to every transitioning container */
  const gpuStyle: React.CSSProperties = {
    willChange: "opacity",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#000000]"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />

      {/* Ambient orbs — absolute, never affect layout */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"
        style={{ willChange: "transform, opacity" }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"
        style={{ willChange: "transform, opacity" }}
      />

      {/*
        ┌─────────────────────────────────────────────────────────────┐
        │  FIXED-HEIGHT CONTAINER                                      │
        │  Both states are position:absolute inside here.             │
        │  Container NEVER changes height → zero layout shift.        │
        └─────────────────────────────────────────────────────────────┘
      */}
      <div className="relative z-10 w-full min-h-screen">

        {/* ─── Single AnimatePresence — only ONE child renders at a time ─── */}
        <AnimatePresence mode="wait" initial={false}>

          {/* ═══════════════════════════════════════════ */}
          {/* STATE 0 — Initial hero overview             */}
          {/* ═══════════════════════════════════════════ */}
          {!selectedDevice && (
            <motion.div
              key="overview"
              initial={FADE_OUT}
              animate={FADE_IN}
              exit={FADE_OUT}
              transition={FADE_TRANSITION}
              style={{ ...gpuStyle, position: "absolute", inset: 0 }}
              className="flex items-center"
            >
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">

                {/* ── Left: Hero text ── */}
                <div className="text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                  >
                    <Shield className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-slate-200 font-medium tracking-wide">Certified Apple Repair Specialists</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-[1.1] tracking-tight"
                  >
                    Expert Repair.
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                      Apple Precision.
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed font-normal"
                  >
                    Professional micro-level repairs for iPhone, MacBook, iPad, Watch & iMac. Click a device to explore all services.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex flex-wrap gap-8 mb-12"
                  >
                    {[
                      { icon: Wrench, label: "10k+", sub: "Repairs" },
                      { icon: Zap, label: "Fast", sub: "Same Day" },
                      { icon: Award, label: "Pro", sub: "Certified" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-lg">{item.label}</div>
                          <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{item.sub}</div>
                        </div>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <a href="#cta"
                      className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                    >
                      Book Diagnosis
                    </a>
                    <a href="#iphone"
                      className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center backdrop-blur-sm"
                    >
                      View Services
                    </a>
                  </motion.div>
                </div>

                {/* ── Right: Category orbit ── */}
                <div className="relative hidden lg:flex items-center justify-center h-[520px] w-full">
                  {/* Central sun */}
                  <div className="absolute z-20 flex items-center justify-center">
                    <div className="absolute w-32 h-32 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 shadow-[0_0_60px_15px_rgba(59,130,246,0.35)]">
                      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
                    </div>
                  </div>

                  {/* Orbit ring */}
                  <div
                    className="absolute rounded-full border border-white/[0.07]"
                    style={{ width: ORBIT_RADIUS * 2, height: ORBIT_RADIUS * 2 }}
                  />

                  {/* Orbiting category planets */}
                  {categories.map((cat, i) => {
                    const angle = (i * 360) / categories.length;
                    const delay = -(angle / 360) * ORBIT_DURATION;
                    return (
                      <div
                        key={cat.name}
                        className="absolute"
                        style={{
                          width: ORBIT_RADIUS * 2,
                          height: ORBIT_RADIUS * 2,
                          animation: `orbit ${ORBIT_DURATION}s linear infinite`,
                          animationDelay: `${delay}s`,
                          animationPlayState: isOrbitPaused ? "paused" : "running",
                          pointerEvents: "none",
                        }}
                      >
                        <div
                          className="absolute top-0 left-1/2"
                          style={{ transform: "translate(-50%, -50%)" }}
                        >
                          <div style={{
                            animation: `counter-orbit ${ORBIT_DURATION}s linear infinite`,
                            animationDelay: `${delay}s`,
                            animationPlayState: isOrbitPaused ? "paused" : "running",
                          }}>
                            <motion.button
                              whileHover={{ scale: 1.2, boxShadow: `0 0 35px ${cat.glowColor}` }}
                              whileTap={{ scale: 0.95 }}
                              onMouseEnter={() => setIsOrbitPaused(true)}
                              onMouseLeave={() => setIsOrbitPaused(false)}
                              onClick={() => handleDeviceClick(cat.name)}
                              className="rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center cursor-pointer group transition-all duration-300"
                              style={{ width: PLANET_SIZE, height: PLANET_SIZE, pointerEvents: "auto" }}
                            >
                              <cat.icon
                                className="group-hover:text-white transition-colors mb-0.5"
                                style={{ color: cat.color, width: 22, height: 22 }}
                                strokeWidth={1.5}
                              />
                              <span className="text-[9px] font-bold text-white/80 tracking-wide group-hover:text-white transition-colors">
                                {cat.name}
                              </span>
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-4 text-xs text-slate-600 tracking-widest uppercase"
                  >
                    Click any device to explore
                  </motion.p>
                </div>

                {/* Mobile: Device buttons grid */}
                <div className="lg:hidden grid grid-cols-3 gap-3 mt-4">
                  {categories.map((cat) => (
                    <motion.button
                      key={cat.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDeviceClick(cat.name)}
                      className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm cursor-pointer"
                    >
                      <cat.icon style={{ color: cat.color, width: 24, height: 24 }} strokeWidth={1.5} />
                      <span className="text-xs text-white/70 font-medium">{cat.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ═══════════════════════════════════════════ */}
          {/* STATE 1 + 2 — Device selected              */}
          {/* ═══════════════════════════════════════════ */}
          {selectedDevice && devCfg && (
            <motion.div
              key={`device-${selectedDevice}`}
              initial={FADE_OUT}
              animate={FADE_IN}
              exit={FADE_OUT}
              transition={FADE_TRANSITION}
              style={{ ...gpuStyle, position: "absolute", inset: 0, overflowY: "auto" }}
              className="flex flex-col"
            >
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-6 flex flex-col min-h-screen">

                {/* ── Top bar: Back + Device chips ── */}
                <div className="flex items-center justify-between pb-3 flex-shrink-0">
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all text-sm backdrop-blur-md"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    All Devices
                  </button>

                  <div className="hidden sm:flex items-center gap-2 flex-wrap justify-end">
                    {categories.map((cat) => (
                      <button
                        key={cat.name}
                        onClick={() => handleDeviceClick(cat.name)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border"
                        style={{
                          backgroundColor: selectedDevice === cat.name ? `${cat.color}20` : "rgba(255,255,255,0.04)",
                          borderColor: selectedDevice === cat.name ? `${cat.color}50` : "rgba(255,255,255,0.08)",
                          color: selectedDevice === cat.name ? cat.color : "rgba(255,255,255,0.5)",
                        }}
                      >
                        <cat.icon style={{ width: 12, height: 12 }} strokeWidth={2} />
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── Main content ── */}
                <div className="flex-1 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">

                  {/* Left: device info or service detail */}
                  <motion.div
                    className="lg:w-[340px] xl:w-[380px] flex-shrink-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.12, ease: "easeOut" }}
                    style={gpuStyle}
                  >
                    <AnimatePresence mode="wait">
                      {/* No service selected: device overview */}
                      {!activeSvc && (
                        <motion.div
                          key="device-overview"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          style={gpuStyle}
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div
                              className="w-12 h-12 rounded-2xl flex items-center justify-center"
                              style={{ background: devCfg.glowColor, border: `1px solid ${devCfg.innerRingColor}` }}
                            >
                              <devCfg.CenterIcon className="w-6 h-6 text-white" strokeWidth={1.5} />
                            </div>
                            <div>
                              <h2 className={`text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${devCfg.gradient}`}>
                                {selectedDevice}
                              </h2>
                              <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">Repairs & Services</span>
                            </div>
                          </div>

                          <p className="text-slate-400 text-sm leading-relaxed mb-6">{devCfg.description}</p>

                          <div className="space-y-2 mb-6">
                            <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Board-Level Services</span>
                              <span className="text-white font-bold text-sm">{devCfg.services.length}</span>
                            </div>
                            <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Part Replacements</span>
                              <span className="text-white font-bold text-sm">{devCfg.replacements.length}</span>
                            </div>
                          </div>

                          <p className="text-xs text-slate-600 mb-4 text-center tracking-widest uppercase">
                            Tap any node in the orbit →
                          </p>

                          <a
                            href="#cta"
                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:brightness-125 hover:scale-[1.02] active:scale-[0.98]"
                            style={{ background: devCfg.glowColor, border: `1px solid ${devCfg.innerRingColor}` }}
                          >
                            Book {selectedDevice} Repair <ArrowRight className="w-4 h-4" />
                          </a>
                        </motion.div>
                      )}

                      {/* Service selected: detail panel */}
                      {activeSvc && (
                        <motion.div
                          key={`detail-${activeSvc.name}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          style={gpuStyle}
                          className="rounded-3xl bg-slate-900/70 backdrop-blur-2xl border border-white/[0.08] p-5 shadow-2xl relative"
                        >
                          <button
                            onClick={() => setActiveItem(null)}
                            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                          >
                            <X className="w-3.5 h-3.5 text-slate-400" />
                          </button>

                          <span
                            className="text-[9px] uppercase tracking-[0.2em] font-semibold mb-3 block"
                            style={{ color: activeItem?.ring === "service" ? "#c084fc" : "#60a5fa" }}
                          >
                            {activeItem?.ring === "service" ? "⚡ Board-Level Service" : "🔧 Part Replacement"}
                          </span>

                          <div className="flex items-center gap-3 mb-4">
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center"
                              style={{ backgroundColor: `${activeSvc.color}15`, border: `1px solid ${activeSvc.color}25` }}
                            >
                              <activeSvc.icon style={{ color: activeSvc.color, width: 18, height: 18 }} strokeWidth={1.5} />
                            </div>
                            <div>
                              <h4 className="text-white font-bold text-base">{activeSvc.name}</h4>
                              <span className="text-[10px] text-slate-500 uppercase tracking-[0.15em] font-medium">{activeSvc.details.length} Options</span>
                            </div>
                          </div>

                          <div className="space-y-1 mb-4">
                            {activeSvc.details.map((detail, j) => (
                              <motion.div
                                key={detail}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.04 + j * 0.04 }}
                                style={gpuStyle}
                                className="flex items-center gap-2 py-2 px-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-200 group/item"
                              >
                                <ChevronRight className="w-3.5 h-3.5" style={{ color: activeSvc.color }} />
                                <span className="text-xs text-slate-300 font-medium group-hover/item:text-white transition-colors">{detail}</span>
                              </motion.div>
                            ))}
                          </div>

                          <a
                            href="#cta"
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold text-white transition-all duration-300 hover:brightness-125 hover:scale-[1.02] active:scale-[0.98]"
                            style={{ backgroundColor: `${activeSvc.color}20`, border: `1px solid ${activeSvc.color}30` }}
                          >
                            Book {activeSvc.name} Repair <ArrowRight className="w-4 h-4" />
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Right: Dual-ring orbit */}
                  <div className="flex-1 flex items-center justify-center">
                    <motion.div
                      className="relative flex-shrink-0"
                      style={{ width: BOX, height: BOX, willChange: "transform" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.08 }}
                    >
                      {/* Outer ring */}
                      <div
                        className="absolute rounded-full"
                        style={{ width: R_OUTER * 2, height: R_OUTER * 2, left: cx - R_OUTER, top: cy - R_OUTER, border: `1px solid ${devCfg.outerRingColor}` }}
                      />
                      <div
                        className="absolute rounded-full border border-dashed border-white/[0.03]"
                        style={{ width: R_OUTER * 2 + 26, height: R_OUTER * 2 + 26, left: cx - R_OUTER - 13, top: cy - R_OUTER - 13 }}
                      />

                      {/* Inner ring */}
                      <div
                        className="absolute rounded-full"
                        style={{ width: R_INNER * 2, height: R_INNER * 2, left: cx - R_INNER, top: cy - R_INNER, border: `1px solid ${devCfg.innerRingColor}` }}
                      />

                      {/* Rotating glow */}
                      <motion.div
                        className="absolute rounded-full pointer-events-none"
                        style={{
                          width: R_OUTER * 2, height: R_OUTER * 2,
                          left: cx - R_OUTER, top: cy - R_OUTER,
                          background: `conic-gradient(from 0deg, transparent 0%, ${devCfg.glowColor} 18%, transparent 35%, ${devCfg.outerRingColor} 60%, transparent 80%)`,
                          willChange: "transform",
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                      />

                      {/* Center device icon */}
                      <div
                        className="absolute z-10 flex flex-col items-center justify-center"
                        style={{ left: cx - 36, top: cy - 36, width: 72, height: 72 }}
                      >
                        <motion.div
                          className="absolute rounded-full blur-3xl"
                          style={{ width: 100, height: 100, backgroundColor: devCfg.glowColor, willChange: "transform, opacity" }}
                          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div
                          className="relative w-16 h-16 rounded-full flex flex-col items-center justify-center border-2"
                          style={{
                            background: "linear-gradient(135deg, #1e293b, #0f172a)",
                            borderColor: devCfg.innerRingColor,
                            boxShadow: `0 0 40px ${devCfg.glowColor}`,
                          }}
                        >
                          <devCfg.CenterIcon className="text-white" style={{ width: 22, height: 22 }} strokeWidth={1.5} />
                          <span className="text-[7px] font-bold text-white/60 tracking-wider mt-0.5">{selectedDevice}</span>
                        </div>
                      </div>

                      {/* Inner orbit: Services */}
                      {devCfg.services.map((svc, i) => {
                        const { x, y } = getCirclePos(i, devCfg.services.length, R_INNER);
                        const isActive = activeItem?.ring === "service" && activeItem?.index === i;
                        return (
                          <motion.button
                            key={`svc-${svc.name}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                            onClick={() => handleNodeClick("service", i)}
                            className={`absolute z-20 rounded-full backdrop-blur-xl flex flex-col items-center justify-center cursor-pointer border transition-colors duration-200 ${isActive ? "bg-slate-800" : "bg-slate-900/80 border-white/10 hover:border-white/20 hover:bg-slate-800/80"}`}
                            style={{
                              width: NODE_S, height: NODE_S,
                              left: cx + x - NODE_S / 2, top: cy + y - NODE_S / 2,
                              borderColor: isActive ? svc.color : undefined,
                              boxShadow: isActive ? `0 0 20px ${svc.color}40` : "0 0 10px rgba(0,0,0,0.3)",
                              willChange: "opacity",
                            }}
                            whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                            whileTap={{ scale: 0.92 }}
                          >
                            {isActive && (
                              <motion.div
                                className="absolute inset-0 rounded-full border"
                                style={{ borderColor: `${svc.color}40` }}
                                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            )}
                            <svc.icon style={{ color: isActive ? svc.color : "#94a3b8", width: 15, height: 15 }} strokeWidth={1.5} />
                            <span style={{ fontSize: "6px", color: isActive ? svc.color : "#cbd5e1" }}
                              className="font-bold tracking-wide leading-none mt-0.5 text-center px-0.5">{svc.name}</span>
                          </motion.button>
                        );
                      })}

                      {/* Outer orbit: Replacements */}
                      {devCfg.replacements.map((rep, i) => {
                        const { x, y } = getCirclePos(i, devCfg.replacements.length, R_OUTER);
                        const isActive = activeItem?.ring === "replacement" && activeItem?.index === i;
                        return (
                          <motion.button
                            key={`rep-${rep.name}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.28 + i * 0.05 }}
                            onClick={() => handleNodeClick("replacement", i)}
                            className={`absolute z-20 rounded-full backdrop-blur-xl flex flex-col items-center justify-center cursor-pointer border transition-colors duration-200 ${isActive ? "bg-slate-800" : "bg-slate-900/80 border-white/10 hover:border-white/20 hover:bg-slate-800/80"}`}
                            style={{
                              width: NODE_R, height: NODE_R,
                              left: cx + x - NODE_R / 2, top: cy + y - NODE_R / 2,
                              borderColor: isActive ? rep.color : undefined,
                              boxShadow: isActive ? `0 0 20px ${rep.color}40` : "0 0 10px rgba(0,0,0,0.3)",
                              willChange: "opacity",
                            }}
                            whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                            whileTap={{ scale: 0.92 }}
                          >
                            {isActive && (
                              <motion.div
                                className="absolute inset-0 rounded-full border"
                                style={{ borderColor: `${rep.color}40` }}
                                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            )}
                            <rep.icon style={{ color: isActive ? rep.color : "#94a3b8", width: 16, height: 16 }} strokeWidth={1.5} />
                            <span style={{ fontSize: "6.5px", color: isActive ? rep.color : "#cbd5e1" }}
                              className="font-bold tracking-wide leading-none mt-0.5 text-center px-0.5">{rep.name}</span>
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
