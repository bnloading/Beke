import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedFlower from "./AnimatedFlower";

const InvitationPage = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-10%" });
  const [animationKey, setAnimationKey] = useState(0);

  // Reset animation when component becomes visible again
  useEffect(() => {
    if (isInView) {
      setAnimationKey((prev) => prev + 1);
    }
  }, [isInView]);

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

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

  const lines = [
    "Құрметті ағайын-туыс, бауырлар, құда-жекжат, нағашы-жиен, бөлелер, құрбы-құрдас, дос-жарандар, әріптестер, сіздерді",
    <span key="special">
      <span className="font-KzToy text-4xl">Гүлжауһардың</span>
    </span>,
    "ұзату тойына арналған дастарханымыздың қадірлі қонағы болуға шақырамыз!",
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-[100dvh] bg-white overflow-hidden px-4"
    >
      {/* Animated Flowers */}
      <AnimatedFlower className="absolute top-4 left-4" />
      <AnimatedFlower className="absolute top-4 right-4 rotate-45" />
      <AnimatedFlower className="absolute bottom-4 left-4 -rotate-45" />
      <AnimatedFlower className="absolute bottom-4 right-4 rotate-90" />

      {/* Center decorative flowers */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <AnimatedFlower className="opacity-10 scale-150" />
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[100dvh]">
        <motion.div
          key={animationKey}
          className="max-w-6xl w-full space-y-6 text-center py-16 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {lines.map((line, index) => (
            <motion.p
              key={index}
              custom={index}
              variants={textVariants}
              className="text-2xl leading-relaxed text-gray-800 font-kzamour tracking-wider px-8"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InvitationPage;
