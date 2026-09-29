import React from "react";
import { motion } from "framer-motion";

interface ParallaxTickerProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // duration in seconds for one full loop
}

export const ParallaxTicker: React.FC<ParallaxTickerProps> = ({
  children,
  className = "",
  speed = 30,
}) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap flex select-none pointer-events-none ${className}`}>
      <motion.div
        className="flex shrink-0 items-center gap-8 pr-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  );
};

export default ParallaxTicker;
