import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Smartphone, Laptop, Tablet, Watch, MonitorDot } from "lucide-react";

const devices = [
  { name: "iPhone", icon: Smartphone, color: "#3b82f6" },
  { name: "MacBook", icon: Laptop, color: "#10b981" },
  { name: "iPad", icon: Tablet, color: "#a855f7" },
  { name: "Watch", icon: Watch, color: "#f43f5e" },
  { name: "iMac", icon: MonitorDot, color: "#0ea5e9" },
];

const staticLinks = [
  { label: "Why Us", href: "#trust" },
  { label: "Contact", href: "#cta" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* ── Scroll behaviour ── */
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastScrollY && y > 100);
      setScrolled(y > 50);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* ── Close dropdown on outside click ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ── Body scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* ── Select a device: fire event + scroll to hero ── */
  const selectDevice = (name: string) => {
    window.dispatchEvent(new CustomEvent("idevice:selectDevice", { detail: name }));
    setServicesOpen(false);
    setMobileOpen(false);
    // Scroll hero into view
    const hero = document.getElementById("hero");
    if (hero) hero.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden && !mobileOpen ? -100 : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileOpen
          ? "bg-background/95 backdrop-blur-xl border-b border-border/30"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          i Device
        </a>

        {/* ── Desktop nav ── */}
        <div className="hidden md:flex items-center gap-1">

          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition-all duration-200"
            >
              Services
              <motion.span
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.span>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-2 w-48 rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-2xl shadow-2xl overflow-hidden"
                >
                  {devices.map((dev, i) => (
                    <motion.button
                      key={dev.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => selectDevice(dev.name)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all duration-150"
                    >
                      <dev.icon
                        style={{ color: dev.color, width: 15, height: 15 }}
                        strokeWidth={1.8}
                      />
                      {dev.name}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Static links */}
          {staticLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}

          <a href="#cta" className="hero-btn-primary ml-2 !text-sm !px-6 !py-2.5">
            Book Diagnosis
          </a>
        </div>

        {/* ── Mobile menu button ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 ${mobileOpen ? "bg-primary text-primary-foreground" : "hover:bg-muted/50 text-foreground"
            }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Mobile nav ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-xl overflow-auto"
          >
            <div className="px-6 py-8 flex flex-col gap-1">

              {/* Services heading + device list */}
              <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold px-2 py-3">
                Services
              </div>
              {devices.map((dev, i) => (
                <motion.button
                  key={dev.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => selectDevice(dev.name)}
                  className="flex items-center gap-3 text-xl font-light text-foreground py-3.5 border-b border-border/30 hover:text-primary transition-colors text-left"
                >
                  <dev.icon style={{ color: dev.color, width: 20, height: 20 }} strokeWidth={1.5} />
                  {dev.name}
                </motion.button>
              ))}

              {/* Static links */}
              <div className="mt-4">
                {staticLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (devices.length + i) * 0.05 + 0.05 }}
                    className="block text-xl font-light text-foreground py-3.5 border-b border-border/30 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (devices.length + staticLinks.length) * 0.05 + 0.1 }}
                className="hero-btn-primary text-center mt-6 !text-base !py-4"
              >
                Book Diagnosis
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
