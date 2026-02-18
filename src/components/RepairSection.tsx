import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface RepairSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  replacements: string[];
  services?: string[];
  layout?: "default" | "wide" | "compact";
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05 },
  }),
};

const RepairSection = ({
  id,
  title,
  subtitle,
  image,
  imageAlt,
  replacements,
  services,
  layout = "default",
}: RepairSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} className="py-32 md:py-48 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="section-heading mb-6">{title}</h2>
          {subtitle && <p className="section-subheading">{subtitle}</p>}
        </motion.div>

        {/* Image if provided */}
        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-20"
          >
            <img
              src={image}
              alt={imageAlt || title}
              className={`float-animation ${
                layout === "compact" ? "w-48 md:w-64" : "w-64 md:w-96"
              }`}
            />
          </motion.div>
        )}

        {/* Replacements */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8 text-center"
          >
            Replacements
          </motion.h3>
          <div
            className={`grid gap-4 ${
              layout === "wide"
                ? "grid-cols-2 md:grid-cols-4"
                : layout === "compact"
                ? "grid-cols-2 md:grid-cols-3"
                : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            }`}
          >
            {replacements.map((item, i) => (
              <motion.div
                key={item}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeInUp}
                className="glass-card-hover p-6 text-center"
              >
                <span className="text-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services */}
        {services && services.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8 text-center"
            >
              Services
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((item, i) => (
                <motion.div
                  key={item}
                  custom={i + replacements.length}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeInUp}
                  className="glass-card-hover p-6 text-center"
                >
                  <span className="gradient-text font-semibold">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RepairSection;
