import React from "react";
import { motion } from "framer-motion";

const ComponentSeparator = () => {
  return (
    <div className="relative w-full py-8 bg-white">
      <div className="flex items-center justify-center gap-4">
        <motion.div
          className="h-[1px] w-32 bg-[#B4AAA3]"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ duration: 1 }}
        />
        <motion.span
          className="text-[#B4AAA3] text-2xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          ❈
        </motion.span>
        <motion.div
          className="h-[1px] w-32 bg-[#B4AAA3]"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default ComponentSeparator;
