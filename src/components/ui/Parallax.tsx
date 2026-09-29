import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // Distance in pixels to shift across viewport scroll
  className?: string;
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  speed = 50,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y, willChange: "transform" }}>
        {children}
      </motion.div>
    </div>
  );
};

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = "",
  speed = 40,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed}px`, `${speed}px`]);

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        style={{ y, willChange: "transform" }}
        className={`w-full h-[125%] -mt-[12%] object-cover ${className}`}
      />
    </div>
  );
};

export default Parallax;
