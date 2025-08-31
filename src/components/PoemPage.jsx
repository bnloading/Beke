import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GiVineFlower } from "react-icons/gi";
import MusicPlayer from "./MusicPlayer";
import AnimatedFlower from "./AnimatedFlower";

const NatureImage = ({ src, className }) => (
  <motion.img
    src={src}
    alt=""
    className={`absolute w-16 h-16 object-contain opacity-30 select-none pointer-events-none ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 0.3, scale: 1 }}
    transition={{ duration: 0.5 }}
    loading="eager"
    onError={(e) => {
      console.error("Image failed to load:", e.target.src);
      e.target.style.display = "none";
    }}
  />
);

const PoemPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
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
    "Қызым асыл гүлім арайлым,",
    "Шаңырағымның кіргізіп тұр шырайын.",
    "Сол құлыным бой жетіп бір қалыпты,",
    "Ақ батамен ұзатайық ағайын!",
  ];

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = new Audio("../../public/music/1.mp3");
    isPlaying ? audio.play() : audio.pause();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying]);

  const natureImages = [
    {
      src: "../assets/nature.png",
      className: "bottom-24 left-4 rotate-45 w-64 h-64",
    },
    { src: "../assets/nature.png", className: "bottom-16 right-4 -rotate-12" },
    { src: "../assets/nature.png", className: "bottom-32 left-1/4 rotate-90" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-[100dvh] bg-white overflow-hidden px-4"
    >
      <MusicPlayer />

      {/* Corner Flowers */}
      <AnimatedFlower className="absolute top-4 left-4" />
      <AnimatedFlower className="absolute top-4 right-4 rotate-45" />
      <AnimatedFlower className="absolute bottom-4 left-4 -rotate-45" />
      <AnimatedFlower className="absolute bottom-4 right-4 rotate-90" />

      {/* Nature Images */}
      {natureImages.map((image, index) => (
        <NatureImage key={index} src={image.src} className={image.className} />
      ))}

      {/* Text Content */}
      <div className="flex items-center justify-center min-h-[100dvh]">
        <motion.div
          key={animationKey}
          className="max-w-2xl w-full space-y-4 text-center py-16 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {lines.map((line, index) => (
            <motion.p
              key={index}
              custom={index}
              variants={textVariants}
              className="text-[22px] leading-relaxed text-gray-800 font-kzamour tracking-wider px-8"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PoemPage;
