import {
  Smartphone, Laptop, Watch, Tablet,
  Monitor, Battery, Camera, Droplets, Cpu, HardDrive,
  Keyboard, Speaker, Plug,
  MemoryStick, Fan,
  Fingerprint, CircleDot, RectangleHorizontal, BatteryFull,
  Pencil, MonitorDot, ScanFace, Zap, Wrench
} from "lucide-react";

export type ServiceItem = {
  name: string;
  icon: any;
  color: string;
  details: string[];
};

export type DeviceConfig = {
  id: string;
  name: string;
  CenterIcon: any;
  gradient: string;
  glowColor: string;
  innerRingColor: string;
  outerRingColor: string;
  tagline: string;
  description: string;
  services: ServiceItem[];
  replacements: ServiceItem[];
};

export const deviceData: Record<string, DeviceConfig> = {
  iPhone: {
    id: "iphone",
    name: "iPhone",
    CenterIcon: Smartphone,
    gradient: "from-purple-400 via-blue-400 to-cyan-400",
    glowColor: "rgba(168,85,247,0.15)",
    innerRingColor: "rgba(168,85,247,0.18)",
    outerRingColor: "rgba(59,130,246,0.12)",
    tagline: "Precision iPhone Repairs",
    description: "Expert micro-soldering and part replacement for all iPhone models (11 to 16 Pro Max). Genuine parts and warranty guaranteed.",
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
    id: "macbook",
    name: "MacBook",
    CenterIcon: Laptop,
    gradient: "from-emerald-400 via-teal-400 to-cyan-400",
    glowColor: "rgba(16,185,129,0.15)",
    innerRingColor: "rgba(16,185,129,0.18)",
    outerRingColor: "rgba(6,182,212,0.12)",
    tagline: "Expert MacBook Repairs",
    description: "Professional MacBook repair services including screen replacement, battery swap, and complex logic board fixes for Air and Pro models.",
    services: [
      { name: "Logic Board", icon: Cpu, color: "#f59e0b", details: ["Micro-Soldering", "GPU Reballing", "Chip Replacement", "Power IC Repair", "Capacitor Swap"] },
      { name: { name: "Water Damage", icon: Droplets, color: "#06b6d4" }.name, icon: Droplets, color: "#06b6d4", details: ["Ultrasonic Cleaning", "Corrosion Removal", "Component Recovery", "Data Preservation"] },
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
    id: "ipad",
    name: "iPad",
    CenterIcon: Tablet,
    gradient: "from-violet-400 via-purple-400 to-fuchsia-400",
    glowColor: "rgba(139,92,246,0.15)",
    innerRingColor: "rgba(139,92,246,0.18)",
    outerRingColor: "rgba(217,70,239,0.12)",
    tagline: "Professional iPad Repairs",
    description: "Quality iPad repair services for all generations including Pro, Air, and Mini. Specializing in screen and digitizer replacements.",
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
    id: "watch",
    name: "Apple Watch",
    CenterIcon: Watch,
    gradient: "from-rose-400 via-orange-400 to-amber-400",
    glowColor: "rgba(244,63,94,0.15)",
    innerRingColor: "rgba(244,63,94,0.18)",
    outerRingColor: "rgba(251,191,36,0.12)",
    tagline: "Apple Watch Specialists",
    description: "Expert Apple Watch repair services for Series 1 to Series 10 and Ultra. Screen, battery, and crown repairs by specialists.",
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
    id: "imac",
    name: "iMac",
    CenterIcon: MonitorDot,
    gradient: "from-sky-400 via-indigo-400 to-violet-400",
    glowColor: "rgba(14,165,233,0.15)",
    innerRingColor: "rgba(14,165,233,0.18)",
    outerRingColor: "rgba(99,102,241,0.12)",
    tagline: "iMac Repair Experts",
    description: "All-in-one desktop repair solutions for iMac, including high-end CPU/GPU repairs and SSD upgrades for professional performance.",
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

export const categories = [
  { name: "iPhone", icon: Smartphone, color: "#3b82f6", glowColor: "rgba(59,130,246,0.5)", path: "/iphone-repair-hyderabad" },
  { name: "MacBook", icon: Laptop, color: "#10b981", glowColor: "rgba(16,185,129,0.5)", path: "/macbook-repair-hyderabad" },
  { name: "iPad", icon: Tablet, color: "#a855f7", glowColor: "rgba(168,85,247,0.5)", path: "/ipad-repair-hyderabad" },
  { name: "Watch", icon: Watch, color: "#f43f5e", glowColor: "rgba(244,63,94,0.5)", path: "/apple-watch-repair-hyderabad" },
  { name: "iMac", icon: MonitorDot, color: "#0ea5e9", glowColor: "rgba(14,165,233,0.5)", path: "/imac-repair-hyderabad" },
];
