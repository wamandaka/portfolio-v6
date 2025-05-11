"use client";

import { motion, useSpring, useScroll } from "motion/react";

export default function ScrollLinked() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          zIndex: 9999,
          backgroundColor: "#F4631E",
        }}
      />
    </>
  );
}

/**
 * ==============   Utils   ================
 */
