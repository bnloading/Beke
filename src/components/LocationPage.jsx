import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { GiVineFlower } from "react-icons/gi";
import AnimatedFlower from "./AnimatedFlower";
const LocationPage = () => {
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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
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
      ref={containerRef}
      className="relative min-h-[100dvh] bg-white overflow-hidden px-4"
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
          className="max-w-xl w-full space-y-4 text-center py-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={textVariants}
            className="space-y-3 font-montserrat"
          >
            <div className="text-4xl text-gray-700 font-semibold font-Just mb-4">
              ТОЙ ИЕЛЕРІ
            </div>
            <div className="text-2xl text-gray-800">
              <div className="mt-1">
                Ата-апасы : Жеңісхан,Күлімхан
                <br />
                Әке-шешесі : Ерболат,Айнұр
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LocationPage;
