import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

// Custom Animated Avatar Character Component
const AvatarCharacter = ({ isPulling }: { isPulling: boolean }) => {
  return (
    <motion.div
      animate={
        isPulling
          ? { rotate: [-10, -20, -10] }
          : { rotate: 0 }
      }
      transition={{ duration: 0.5, repeat: isPulling ? Infinity : 0, ease: "easeInOut" }}
      className="relative w-20 h-32 origin-bottom flex justify-center"
    >
      {/* Head Group */}
      <motion.div
        animate={
          isPulling
            ? { rotate: [5, 10, 5], y: [0, 2, 0] }
            : { rotate: [0, -10, 0, 10, 0], y: [0, 3, 0] }
        }
        transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-0 w-11 h-12 z-20"
      >
        {/* Hair Back */}
        <div className="absolute -top-1 -left-1 w-13 h-14 bg-slate-800 rounded-full" />

        {/* Face */}
        <div className="absolute top-1 left-1 w-9 h-10 bg-orange-200 rounded-[20px] rounded-bl-xl overflow-hidden shadow-inner flex flex-col items-center pt-3">
          {/* Eyes */}
          <div className="flex gap-2">
            <motion.div
              animate={!isPulling ? { scaleY: [1, 0.1, 1], transition: { delay: 2, repeat: Infinity, repeatDelay: 3 } } : {}}
              className="w-1.5 h-2.5 bg-slate-900 rounded-full"
            />
            <motion.div
              animate={!isPulling ? { scaleY: [1, 0.1, 1], transition: { delay: 2, repeat: Infinity, repeatDelay: 3 } } : {}}
              className="w-1.5 h-2.5 bg-slate-900 rounded-full"
            />
          </div>

          {/* Mouth */}
          {isPulling ? (
            <div className="mt-2 w-3 h-1.5 border-b-2 border-slate-900 rounded-full" />
          ) : (
            <div className="mt-1 w-3 h-2 bg-slate-900 rounded-b-full" />
          )}
        </div>

        {/* Hair Front */}
        <div className="absolute top-0 left-0 w-11 h-4 bg-slate-800 rounded-t-full drop-shadow-md" />
        <div className="absolute top-3 left-0 w-4 h-5 bg-slate-800 rounded-br-full" />

        {/* Adds a little sweat drop when done */}
        {!isPulling && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: [0, 10], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            className="absolute right-0 top-3 w-1.5 h-2.5 bg-blue-400 rounded-full rounded-t-none"
          />
        )}
      </motion.div>

      {/* Torso/Body */}
      <motion.div
        className="absolute top-10 w-9 h-14 bg-blue-600 rounded-2xl rounded-b-md shadow-md z-10 overflow-hidden"
      >
        {/* Shirt design element */}
        <div className="w-full h-2 bg-blue-400 opacity-30 mt-3" />
        <div className="w-full h-1 bg-blue-400 opacity-30 mt-1" />
      </motion.div>

      {/* Back Arm (Left) */}
      <motion.div
        animate={
          isPulling
            ? { rotate: [15, 30, 15] }
            : { rotate: -130, y: 5, x: -10 }
        }
        transition={isPulling ? { duration: 0.5, repeat: Infinity, ease: "easeInOut" } : { duration: 0.6, type: "spring" }}
        className="absolute top-11 w-12 h-3.5 bg-orange-200 rounded-full origin-[4px_50%] z-0"
      >
        <div className="absolute top-0 left-0 w-5 h-3.5 bg-blue-700 rounded-l-full" /> {/* Short sleeve */}
      </motion.div>

      {/* Front Arm (Right) */}
      <motion.div
        animate={
          isPulling
            ? { rotate: [30, 45, 30] }
            : { rotate: 80, y: 15, x: 5 }
        }
        transition={isPulling ? { duration: 0.5, repeat: Infinity, ease: "easeInOut" } : { duration: 0.6, type: "spring" }}
        className="absolute top-11 left-[34px] w-12 h-4 bg-orange-200 rounded-full origin-[4px_50%] z-30 drop-shadow-md"
      >
        <div className="absolute top-0 left-0 w-5 h-4 bg-blue-500 rounded-l-full" /> {/* Short sleeve */}
        {/* Hand pulling rope */}
        {isPulling && <div className="absolute -right-1 top-0 w-5 h-5 bg-orange-300 rounded-full" />}
      </motion.div>

      {/* Back Leg (Left) */}
      <motion.div
        animate={
          isPulling
            ? { rotate: [30, 45, 30] }
            : { rotate: 15, x: -5 }
        }
        transition={isPulling ? { duration: 0.5, repeat: Infinity, ease: "easeInOut" } : { duration: 0.4 }}
        className="absolute top-[85px] left-3 w-4 h-14 bg-slate-800 rounded-full origin-top z-0"
      >
        {/* Shoe */}
        <div className="absolute bottom-0 right-[-4px] w-6 h-3 bg-white rounded-md rounded-tl-xl border-b-2 border-slate-300" />
      </motion.div>

      {/* Front Leg (Right) */}
      <motion.div
        animate={
          isPulling
            ? { rotate: [-20, -5, -20] }
            : { rotate: -15, x: 5 }
        }
        transition={isPulling ? { duration: 0.5, repeat: Infinity, ease: "easeInOut" } : { duration: 0.4 }}
        className="absolute top-[85px] left-8 w-4 h-14 bg-slate-700 rounded-full origin-top z-20 drop-shadow-md"
      >
        {/* Shoe */}
        <div className="absolute bottom-0 right-[-4px] w-6 h-3 bg-white rounded-md rounded-tl-xl border-b-2 border-slate-300" />
      </motion.div>
    </motion.div>
  );
};


const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPulling, setIsPulling] = useState(true);

  useEffect(() => {
    // Stop pulling after 2.5 seconds when it reaches the center
    const pullTimer = setTimeout(() => {
      setIsPulling(false);
    }, 2500);

    // Fade out totally after 4 seconds to give users a moment to see the interaction end
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, 4000);

    return () => {
      clearTimeout(pullTimer);
      clearTimeout(exitTimer);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#020617] overflow-hidden flex items-center justify-center"
        >
          {/* Subtle Background pattern */}
          <div className="absolute inset-0 z-0 opacity-[0.02]"
            style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}
          />

          {/* Wrapper for the Scene */}
          <div className="relative z-10 w-full flex justify-center pb-20">

            {/* Moving container to slide from right to left */}
            <motion.div
              initial={{ x: "60vw" }}
              animate={{ x: "-40px" }} // Slightly offset so logo is centered
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="relative flex items-center h-[128px]" // Height matches new avatar size
            >

              {/* Avatar pushing/pulling limits */}
              <div className="z-30 mt-2">
                <AvatarCharacter isPulling={isPulling} />
              </div>

              {/* The Rope */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isPulling ? 1 : 0 }}
                transition={{ duration: 0.1 }}
                className="absolute h-1 bg-amber-700/80 rounded-full z-10"
                style={{
                  width: "70px",
                  bottom: "65px", // Anchors near avatar's pulling hand
                  left: "60px",
                  transformOrigin: "left",
                  rotate: "-12deg",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.3)"
                }}
              />

              {/* The Heavy Logo */}
              <motion.div
                animate={isPulling ? { y: [0, -3, 0], rotate: [0, -2, 0] } : { y: 0, rotate: 0 }}
                transition={isPulling ? { duration: 0.3, repeat: Infinity, ease: "linear" } : { duration: 0.2 }}
                className="z-20 ml-[70px] flex items-center"
              >
                {/* Logo Box - Styled exactly like the reference image */}
                <motion.div
                  animate={!isPulling ? { scale: 1.05, boxShadow: "0 0 40px rgba(255,255,255,0.15)", rotateY: [0, 15, 0] } : {}}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-[24px] sm:rounded-[28px] p-1 flex items-center justify-center relative shadow-2xl z-20 flex-shrink-0"
                >
                  {/* Dark inner container */}
                  <div className="w-full h-full bg-[#2a3038] rounded-[20px] sm:rounded-[24px] p-3 flex items-center justify-center relative overflow-hidden">
                    {/* Glowing success outline pass */}
                    {!isPulling && (
                      <motion.div
                        initial={{ x: "-150%" }}
                        animate={{ x: "150%" }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-y-0 w-1/2 bg-white/20 skew-x-[-20deg] z-0 pointer-events-none"
                      />
                    )}
                    <img src={logo} alt="iDevice Logo" className="w-full h-full object-contain relative z-10 drop-shadow-md" />
                  </div>
                </motion.div>

                {/* Revealed Text "i Device" next to the logo per reference image */}
                <AnimatePresence>
                  {!isPulling && (
                    <motion.div
                      initial={{ opacity: 0, x: -30, filter: "blur(10px)", scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)", scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.4 }}
                      className="ml-4 sm:ml-6 flex items-center whitespace-nowrap"
                    >
                      <span className="text-4xl sm:text-[42px] leading-none font-extrabold text-[#f3f4f6] tracking-tight font-sans">
                        i Device
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>

            </motion.div>
          </div>

          {/* Subtle Message at the bottom */}
          <div className="absolute bottom-1/3 left-0 right-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={!isPulling ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-slate-400 font-medium tracking-[0.2em] text-xs uppercase bg-black/50 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              Loading Complete
            </motion.div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
