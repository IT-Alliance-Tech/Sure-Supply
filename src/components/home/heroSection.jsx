import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import hero1 from "../../../public/Banner1.png";
import hero2 from "../../../public/Banner2.png";
import hero3 from "../../../public/Banner3.png";
import hero4 from "../../../public/Banner4.png";
import hero5 from "../../../public/Banner5.png";

export default function HeroSection() {
  const images = [hero1, hero2, hero3, hero4, hero5];
  const words = ["Simple", "Reliable", "Future Ready"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3s

    return () => clearInterval(interval);
  }, [images.length]);

  const wordVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section className="relative w-full h-[700px] flex items-center justify-start overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="sync">
        {images.map((img, index) =>
          index === currentIndex ? (
            <motion.div
              key={index}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          ) : null
        )}
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-10 lg:px-24 py-20 max-w-2xl">
        <h1 className="text-white text-5xl lg:text-6xl font-bold leading-snug">
          Manufacturing
          <br />
          Made{" "}
          <span className="text-[#F05023] inline-block w-[200px] whitespace-nowrap">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                variants={wordVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
              >
                {words[currentIndex % words.length]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <motion.button
          className="mt-8 bg-[#F05023] text-white px-8 py-4 rounded-lg font-semibold transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
        >
          Get Quote Now
        </motion.button>
      </div>
    </section>
  );
}
