import React from "react";
import { motion } from "framer-motion";
import { GiFlowerEmblem } from "react-icons/gi";

const AnimatedFlower = ({ className }) => {
  const flowerVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 10, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      className={`text-[#B4AAA3] opacity-50 ${className}`}
      variants={flowerVariants}
      animate="animate"
    >
      <GiFlowerEmblem className="w-24 h-24" />
    </motion.div>
  );
};

export default AnimatedFlower;
