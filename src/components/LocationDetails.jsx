import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { MdLocationOn } from "react-icons/md";
import AnimatedFlower from "./AnimatedFlower";
import AnimatedText from "./AnimatedText";

const LocationDetails = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-10%" });
  const [animationKey, setAnimationKey] = useState(0);

  // Reset animation when component becomes visible again
  useEffect(() => {
    if (isInView) {
      setAnimationKey((prev) => prev + 1);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="relative min-h-[100dvh] bg-white overflow-hidden px-4"
      ref={containerRef}
    >
      {/* Corner Flowers */}

      <AnimatedFlower className="absolute top-4 left-4" />
      <AnimatedFlower className="absolute top-4 right-4 rotate-45" />
      <AnimatedFlower className="absolute bottom-4 left-4 -rotate-45" />
      <AnimatedFlower className="absolute bottom-4 right-4 rotate-90" />
      {/* Content */}
      <div className="flex items-center justify-center min-h-[100dvh]">
        <motion.div
          key={animationKey}
          className="max-w-2xl w-full space-y-8 text-center py-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="mt-12 space-y-4 font-montserrat"
          >
            <AnimatedText className="text-2xl text-gray-700 font-semibold">
              МЕКЕН-ЖАЙЫМЫЗ:
            </AnimatedText>
            <AnimatedText className="text-xl text-gray-800">
              Өлгий қаласы , Баяннуур сумыны
              <br />
              Өз шаңырағында
            </AnimatedText>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 space-y-2 font-montserrat"
          >
            <AnimatedText className="text-lg text-gray-700 font-semibold">
              ТОЙ УАҚЫТЫ:
            </AnimatedText>
            <AnimatedText className="text-2xl text-gray-800 font-bold">
              06.09.2025
            </AnimatedText>
            <AnimatedText className="text-xl text-gray-800">
              10:00 САҒАТТА
            </AnimatedText>
          </motion.div>

          {/* <motion.div variants={itemVariants} className="mt-8 font-montserrat">
            <AnimatedText className="text-lg text-gray-700 italic">
              Жетуге бағдарды болу үшін
            </AnimatedText>
            <AnimatedText className="text-lg text-gray-700 italic">
              төмендегі 2GIS сілтемесін
            </AnimatedText>
            <AnimatedText className="text-lg text-gray-700 italic">
              қолданыңыз:
            </AnimatedText>
          </motion.div> */}

          {/* 2GIS Button */}
          {/* <motion.a
            variants={itemVariants}
            href="https://2giskz.app/almaty/geo/70000001042970165"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600/20 text-green-800 px-6 py-3 rounded-full hover:bg-green-600/30 transition-all font-montserrat mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MdLocationOn className="text-2xl" />
            <span>2GIS - Алтын Уя</span>
          </motion.a> */}
        </motion.div>
      </div>
    </div>
  );
};

export default LocationDetails;
