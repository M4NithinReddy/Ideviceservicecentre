import { motion } from "framer-motion";
import { Shield, Award, Cpu, Wrench } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "6 Month Warranty", desc: "Full coverage on all repairs" },
  { icon: Award, label: "Certified Technicians", desc: "Expert-level Apple specialists" },
  { icon: Cpu, label: "Genuine Quality Parts", desc: "Premium components only" },
  { icon: Wrench, label: "Micro Soldering Lab", desc: "Advanced board-level repair" },
];

const TrustSection = () => {
  return (
    <section id="trust" className="py-32 md:py-48 px-6 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="section-heading mb-6">Why Trust Us</h2>
          <p className="section-subheading">
            Precision engineering meets uncompromising quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card-hover p-8 text-center flex flex-col items-center group"
            >
              <div className="trust-icon-glow mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
