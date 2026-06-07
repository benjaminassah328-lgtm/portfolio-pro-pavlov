"use client";
import { motion } from "framer-motion";
import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            À propos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Qui suis-je ?
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            {about.text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
