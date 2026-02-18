import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench, Shield, Zap, Award,
  Smartphone, Laptop, Watch, Tablet, Headphones, Glasses,
  Monitor, Battery, Camera, Droplets, Cpu, Database,
  Wifi, Keyboard, HardDrive, CircuitBoard,
  Mic, Speaker, BatteryCharging, Ear,
  Eye, ScanFace, Box,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";

/* ── Sub-services per category ── */
const categoryServices: Record<string, { name: string; icon: any }[]> = {
  iPhone: [
    { name: "Screen", icon: Monitor },
    { name: "Battery", icon: Battery },
    { name: "Camera", icon: Camera },
    { name: "Water Fix", icon: Droplets },
    { name: "Face ID", icon: ScanFace },
    { name: "Logic Board", icon: Cpu },
  ],
  MacBook: [
    { name: "Screen", icon: Monitor },
    { name: "Battery", icon: Battery },
    { name: "Keyboard", icon: Keyboard },
    { name: "Logic Board", icon: CircuitBoard },
    { name: "SSD/Data", icon: HardDrive },
    { name: "Wi-Fi", icon: Wifi },
  ],
  iPad: [
    { name: "Screen", icon: Monitor },
    { name: "Battery", icon: Battery },
    { name: "Charging", icon: BatteryCharging },
    { name: "Camera", icon: Camera },
    { name: "Logic Board", icon: Cpu },
  ],
  Watch: [
    { name: "Screen", icon: Monitor },
    { name: "Battery", icon: Battery },
    { name: "Crown", icon: Wrench },
    { name: "Water Seal", icon: Droplets },
    { name: "Sensor", icon: Zap },
  ],
  AirPods: [
    { name: "Speaker", icon: Speaker },
    { name: "Battery", icon: Battery },
    { name: "Mic", icon: Mic },
    { name: "Case", icon: Box },
    { name: "Ear Tip", icon: Ear },
  ],
  Vision: [
    { name: "Display", icon: Monitor },
    { name: "Battery", icon: Battery },
    { name: "Lens", icon: Eye },
    { name: "Sensors", icon: ScanFace },
    { name: "Data", icon: Database },
  ],
};

/* ── Category config ── */
const categories = [
  { name: "iPhone", icon: Smartphone, color: "#3b82f6", glowColor: "rgba(59,130,246,0.5)" },
  { name: "MacBook", icon: Laptop, color: "#a855f7", glowColor: "rgba(168,85,247,0.5)" },
  { name: "iPad", icon: Tablet, color: "#22d3ee", glowColor: "rgba(34,211,238,0.5)" },
  { name: "Watch", icon: Watch, color: "#ec4899", glowColor: "rgba(236,72,153,0.5)" },
  { name: "AirPods", icon: Headphones, color: "#4ade80", glowColor: "rgba(74,222,128,0.5)" },
  { name: "Vision", icon: Glasses, color: "#818cf8", glowColor: "rgba(129,140,248,0.5)" },
];

const ORBIT_RADIUS = 200;       // Main orbit radius for categories
const SUB_ORBIT_RADIUS = 140;   // Sub-services orbit radius
const ORBIT_DURATION = 40;      // Seconds for a full revolution (main orbit)
const SUB_ORBIT_DURATION = 20;  // Seconds for sub-service revolution
const PLANET_SIZE = 60;         // Category planet size
const SUB_PLANET_SIZE = 46;     // Sub-service planet size

const Hero = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const selectedCat = categories.find(c => c.name === selected);
  const subServices = selected ? categoryServices[selected] || [] : [];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000]"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      {/* Gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* ── Left: Content ── */}
        <div className="text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-slate-200 font-medium tracking-wide">Certified Apple Repair Specialists</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-[1.1] tracking-tight"
          >
            Expert Repair.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
              Apple Precision.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed font-normal"
          >
            Professional micro-level repairs for iPhone, MacBook, iPad, and Watch. Premium parts. Trusted precision.
          </motion.p>

          {/* Trust Indicators */}
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

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#cta"
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              Book Diagnosis
            </a>
            <a
              href="#iphone"
              className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-center backdrop-blur-sm"
            >
              View Services
            </a>
          </motion.div>
        </div>

        {/* ── Right: Solar-System Orbit ── */}
        <div className="relative hidden lg:flex items-center justify-center h-[600px] w-full">

          <AnimatePresence mode="wait">
            {/* ════════════════════════════════════════════════ */}
            {/* STATE 1: Overview — all categories orbiting     */}
            {/* ════════════════════════════════════════════════ */}
            {!selected && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Central Sun */}
                <div className="absolute z-20 flex items-center justify-center">
                  <div className="absolute w-36 h-36 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 shadow-[0_0_60px_15px_rgba(59,130,246,0.35)]">
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
                  </div>
                </div>

                {/* Orbit track ring */}
                <div
                  className="absolute rounded-full border border-white/[0.07]"
                  style={{ width: ORBIT_RADIUS * 2, height: ORBIT_RADIUS * 2 }}
                />

                {/* Orbiting categories */}
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
                        pointerEvents: "none",
                      }}
                    >
                      <div
                        className="absolute top-0 left-1/2"
                        style={{ transform: "translate(-50%, -50%)" }}
                      >
                        <div
                          style={{
                            animation: `counter-orbit ${ORBIT_DURATION}s linear infinite`,
                            animationDelay: `${delay}s`,
                          }}
                        >
                          <motion.button
                            whileHover={{
                              scale: 1.2,
                              boxShadow: `0 0 35px ${cat.glowColor}`,
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelected(cat.name)}
                            className="rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_25px_rgba(0,0,0,0.5)] cursor-pointer group transition-all duration-300"
                            style={{ width: PLANET_SIZE, height: PLANET_SIZE, pointerEvents: "auto" }}
                          >
                            <cat.icon
                              className="group-hover:text-white transition-colors mb-0.5"
                              style={{ color: cat.color, width: 22, height: 22 }}
                              strokeWidth={1.5}
                            />
                            <span className="text-[8px] font-bold text-white/80 tracking-wide group-hover:text-white transition-colors">
                              {cat.name}
                            </span>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {/* ════════════════════════════════════════════════ */}
            {/* STATE 2: Detail — selected category in center   */}
            {/* ════════════════════════════════════════════════ */}
            {selected && selectedCat && (
              <motion.div
                key={`detail-${selected}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Back button */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setSelected(null)}
                  className="absolute top-4 left-4 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm backdrop-blur-md"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Devices
                </motion.button>

                {/* Selected planet in center — highlighted */}
                <div className="absolute z-20 flex flex-col items-center justify-center">
                  {/* Glow behind */}
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-40 h-40 rounded-full blur-3xl"
                    style={{ backgroundColor: selectedCat.glowColor }}
                  />
                  {/* The planet itself */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 flex flex-col items-center justify-center shadow-2xl z-10"
                    style={{
                      width: 90,
                      height: 90,
                      borderColor: selectedCat.color,
                      boxShadow: `0 0 50px ${selectedCat.glowColor}`,
                    }}
                  >
                    <selectedCat.icon
                      style={{ color: selectedCat.color, width: 30, height: 30 }}
                      strokeWidth={1.5}
                    />
                    <span className="text-xs font-bold text-white mt-1 tracking-wide">
                      {selectedCat.name}
                    </span>
                  </motion.div>
                </div>

                {/* Sub-services orbit track */}
                <div
                  className="absolute rounded-full border border-white/[0.07]"
                  style={{ width: SUB_ORBIT_RADIUS * 2, height: SUB_ORBIT_RADIUS * 2 }}
                />

                {/* Orbiting sub-services */}
                {subServices.map((svc, i) => {
                  const angle = (i * 360) / subServices.length;
                  const delay = -(angle / 360) * SUB_ORBIT_DURATION;
                  return (
                    <motion.div
                      key={svc.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15 + i * 0.08, duration: 0.4, ease: "easeOut" }}
                      className="absolute"
                      style={{
                        width: SUB_ORBIT_RADIUS * 2,
                        height: SUB_ORBIT_RADIUS * 2,
                        animation: `orbit ${SUB_ORBIT_DURATION}s linear infinite`,
                        animationDelay: `${delay}s`,
                      }}
                    >
                      <div
                        className="absolute top-0 left-1/2"
                        style={{ transform: "translate(-50%, -50%)" }}
                      >
                        <div
                          style={{
                            animation: `counter-orbit ${SUB_ORBIT_DURATION}s linear infinite`,
                            animationDelay: `${delay}s`,
                          }}
                        >
                          <motion.div
                            whileHover={{
                              scale: 1.2,
                              boxShadow: `0 0 25px ${selectedCat.glowColor}`,
                              borderColor: selectedCat.color,
                            }}
                            className="rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center shadow-lg cursor-default group transition-all duration-200"
                            style={{ width: SUB_PLANET_SIZE, height: SUB_PLANET_SIZE }}
                          >
                            <svc.icon
                              className="transition-colors mb-0.5"
                              style={{ color: selectedCat.color, width: 16, height: 16 }}
                              strokeWidth={1.5}
                            />
                            <span className="text-[7px] font-semibold text-white/70 tracking-wide group-hover:text-white transition-colors">
                              {svc.name}
                            </span>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Outer decorative ring */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute rounded-full border border-white/[0.04]"
                  style={{ width: SUB_ORBIT_RADIUS * 2 + 80, height: SUB_ORBIT_RADIUS * 2 + 80 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;
