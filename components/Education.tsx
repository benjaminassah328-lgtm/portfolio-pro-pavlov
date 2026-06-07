"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@heroui/react";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="formation" className="py-24 px-6">
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
            Formation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Parcours scolaire
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
            >
              <Card className="glass-card">
                <CardHeader className="flex flex-row items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-foreground">{item.degree}</CardTitle>
                    <CardDescription className="mt-1">{item.school}</CardDescription>
                  </div>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full shrink-0"
                    style={{
                      backgroundColor: "var(--accent-soft)",
                      color: "var(--accent-soft-foreground)",
                    }}
                  >
                    {item.year}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
