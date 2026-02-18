import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center py-20 px-6 bg-background overflow-hidden">
            <div className="max-w-6xl w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        See Our Precision in Action
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Watch how our certified technicians perform micro-level repairs with premium tools and genuine parts.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative group cursor-pointer"
                >
                    {/* Video placeholder with gradient overlay */}
                    <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl">
                        {/* Placeholder image/gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />

                        {/* Grid pattern overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:bg-white transition-all duration-300"
                            >
                                <Play className="w-8 h-8 md:w-10 md:h-10 text-slate-900 ml-1" fill="currentColor" />
                            </motion.div>
                        </div>

                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent" />
                    </div>

                    {/* Caption */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-center mt-6 text-sm text-muted-foreground"
                    >
                        Click to watch our repair process • 2 min overview
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoSection;
