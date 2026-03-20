import { MapPin, Phone, Mail } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

// Keeping the links structurally but we'll focus on the address layout
const footerLinks = {
  Services: [
    { label: "iPhone Repair", device: "iPhone", path: "/iphone-repair-hyderabad" },
    { label: "MacBook Repair", device: "MacBook", path: "/macbook-repair-hyderabad" },
    { label: "iPad Repair", device: "iPad", path: "/ipad-repair-hyderabad" },
    { label: "Apple Watch Repair", device: "Watch", path: "/apple-watch-repair-hyderabad" },
    { label: "iMac Repair", device: "iMac", path: "/imac-repair-hyderabad" },
  ],
  Support: [
    { label: "Warranty", href: "/#trust" },
    { label: "Status", href: "/#cta" },
  ],
};

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

  const handleServiceClick = (name: string, path: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
        window.dispatchEvent(new CustomEvent("idevice:selectDevice", { detail: name }));
        const hero = document.getElementById("hero");
        if (hero) hero.scrollIntoView({ behavior: "smooth" });
    } else {
        navigate(path);
    }
  };

  return (
    <footer className="border-t border-border/30 pt-16 pb-10 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand & Contact */}
          <div className="space-y-6">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-4">
                <div className="h-12 sm:h-16 w-auto transition-all">
                  <img src="/idevicelogo.jpeg" alt="iDevice Logo" className="h-full w-auto object-contain" />
                </div>
              </Link>
              <p className="text-sm text-slate-400">
                Premium Apple device repairs in Hyderabad. Best service for iPhone, MacBook, iPad and more.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="tel:8978089781" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                  <Phone className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Support</span>
                  <span className="text-sm font-medium">89780 89781</span>
                </div>
              </a>
              <a href="mailto:idevicehyd@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                  <Mail className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Email</span>
                  <span className="text-sm font-medium break-all">idevicehyd@gmail.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Head Office */}
          <div>
            <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-6 uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-blue-500" /> Head Office
            </h4>
            <address className="not-italic text-sm text-slate-400 space-y-2 leading-relaxed">
              <p className="font-semibold text-slate-200"># 6-3-347/12/A/12,</p>
              <p>Dwarakapuri Colony,</p>
              <p>Beside Manchukonda House,</p>
              <p>Punjagutta, Hyderabad,</p>
              <p>Telangana – 500082</p>
            </address>
            <div className="mt-4 pt-4 border-t border-white/5 space-y-1">
              <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Contact</p>
              <p className="text-sm text-slate-300">Office: <span className="text-white">96764 92221</span></p>
            </div>
          </div>

          {/* Branch Office */}
          <div>
            <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-6 uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-purple-500" /> Branch Office
            </h4>
            <address className="not-italic text-sm text-slate-400 space-y-2 leading-relaxed">
              <p className="font-semibold text-slate-200">Bajaj Electronic, Cellar Floor,</p>
              <p>Merix Square Building,</p>
              <p>Suchitra, Kompally,</p>
              <p>Hyderabad,</p>
              <p>Telangana – 500055</p>
            </address>
            <div className="mt-4 pt-4 border-t border-white/5 space-y-1">
              <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Contact</p>
              <p className="text-sm text-slate-300">Phone: <span className="text-white">96764 92221</span></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={(e) => handleServiceClick(link.device, link.path, e)} 
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group cursor-pointer text-left"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-slate-600">
            © 2026 i Device Apple Service Centre. All rights reserved. Professional Apple repairs in Hyderabad.
          </p>
          <div className="flex gap-6">
            {["Twitter", "Instagram", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-slate-500 hover:text-white transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
