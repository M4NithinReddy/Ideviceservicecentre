import { motion } from "framer-motion";
import { useState } from "react";

const CTASection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", device: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder
    alert("Thank you! We'll contact you shortly.");
    setFormData({ name: "", email: "", device: "", message: "" });
  };

  return (
    <section id="cta" className="py-32 md:py-48 px-6 relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
        {/* Animated particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1], y: [0, -20, 0] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            className="absolute rounded-full bg-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-6">
            Your Device Deserves Precision.
          </h2>
          <p className="section-subheading">Book your diagnosis today.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
          className="glass-card p-8 md:p-12 space-y-6 relative overflow-hidden"
        >
          {/* Subtle shine effect on card */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-muted/50 border border-border/50 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-muted/50 border border-border/50 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Device Model"
            value={formData.device}
            onChange={(e) => setFormData({ ...formData, device: e.target.value })}
            className="w-full bg-muted/50 border border-border/50 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all relative z-10"
          />
          <textarea
            placeholder="Describe the issue..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full bg-muted/50 border border-border/50 rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none relative z-10"
          />
          <button
            type="submit"
            className="hero-btn-primary w-full text-lg !py-5 relative z-10"
          >
            Book Diagnosis
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default CTASection;
