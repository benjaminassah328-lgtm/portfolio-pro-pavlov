import type { Variants } from "framer-motion";

/**
 * Shared motion language for the whole site — one set of easings, durations
 * and reusable variants so every animation feels like it belongs together.
 */

export const ease = {
  /** Smooth deceleration (easeOutQuint-ish) — the default for reveals. */
  out: [0.22, 1, 0.36, 1] as const,
  /** Symmetric in/out — for loops and continuous motion. */
  inOut: [0.65, 0, 0.35, 1] as const,
};

export const duration = {
  fast: 0.4,
  base: 0.6,
  slow: 0.9,
} as const;

/** Standard "rise & fade in" for any element entering the viewport. */
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.out },
  },
};

/** Container that staggers its children's reveals. */
export const staggerContainer = (
  stagger = 0.1,
  delayChildren = 0,
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Portrait entrance — scales up and sharpens from a soft blur. */
export const portraitReveal: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: duration.slow, ease: ease.out, delay: 0.15 },
  },
};

/** Shared whileInView viewport config — reveal once, slightly early. */
export const viewportOnce = { once: true, margin: "-80px" } as const;
