"use client";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { profile } from "@/lib/data";
import { Magnetic } from "@/components/Magnetic";
import { HeroPortrait } from "@/components/HeroPortrait";
import { revealUp, portraitReveal, staggerContainer } from "@/lib/motion";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-16">
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        {/* Left — text column */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div
            variants={revealUp}
            className="mb-6 flex justify-center lg:justify-start"
          >
            <span
              className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
              />
              {profile.title}
            </span>
          </motion.div>

          <motion.h1
            variants={revealUp}
            className="text-gradient text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={revealUp}
            className="text-lg text-muted mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={revealUp}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Magnetic>
              <Button variant="primary" size="lg" onPress={scrollToProjects}>
                Voir mes projets
              </Button>
            </Magnetic>

            <Magnetic>
              <a
                href={profile.cvPath}
                download
                className="inline-flex items-center justify-center h-11 px-4 rounded-3xl border text-sm font-medium transition-colors duration-100 hover:bg-[var(--default)]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              >
                Télécharger CV
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right — portrait */}
        <motion.div
          variants={portraitReveal}
          initial="hidden"
          animate="visible"
          className="order-1 lg:order-2"
        >
          <HeroPortrait />
        </motion.div>
      </div>
    </section>
  );
}
