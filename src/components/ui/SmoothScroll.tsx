import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { SmoothScrollContext } from "./SmoothScrollContext";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    let lenis: Lenis | null = null;
    let animId: number = 0;

    try {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        touchMultiplier: 1.2,
      });

      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis?.raf(time);
        animId = requestAnimationFrame(raf);
      };

      animId = requestAnimationFrame(raf);
    } catch (e) {
      console.error("Lenis smooth scroll failed to initialize:", e);
    }

    // Global anchor click interceptor
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");

      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const targetEl = document.getElementById(targetId);

        if (targetEl) {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(targetEl, {
              offset: targetId === "contact" ? 0 : -80,
              duration: 1.2,
            });
          } else {
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      if (animId) {
        cancelAnimationFrame(animId);
      }
      if (lenis) {
        lenis.destroy();
      }
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (target: string | HTMLElement, options?: { offset?: number; duration?: number }) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    } else {
      if (typeof target === "string") {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export default SmoothScrollProvider;
