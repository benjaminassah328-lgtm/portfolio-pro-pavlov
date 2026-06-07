"use client";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * Fixed, full-page decorative background: three slowly drifting colored blobs
 * (blue / indigo / cyan) under a faint film grain. Each blob also parallaxes at
 * its own rate as the page scrolls. Blobs animate via transform/opacity only;
 * the CSS float keyframes freeze under prefers-reduced-motion, and the
 * scroll parallax is disabled there too. Sits at z-index:-1 behind content.
 */
export function AuroraBackground() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  const range = [0, 1600];
  const y1 = useTransform(scrollY, range, [0, reduce ? 0 : 240]);
  const y2 = useTransform(scrollY, range, [0, reduce ? 0 : -180]);
  const y3 = useTransform(scrollY, range, [0, reduce ? 0 : 140]);

  return (
    <div className="aurora-bg" aria-hidden="true">
      <motion.div className="aurora-layer" style={{ y: y1 }}>
        <div className="aurora-blob aurora-blob--1" />
      </motion.div>
      <motion.div className="aurora-layer" style={{ y: y2 }}>
        <div className="aurora-blob aurora-blob--2" />
      </motion.div>
      <motion.div className="aurora-layer" style={{ y: y3 }}>
        <div className="aurora-blob aurora-blob--3" />
      </motion.div>
      <div className="aurora-grain" />
    </div>
  );
}
