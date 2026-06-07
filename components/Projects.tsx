"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Chip } from "@heroui/react";
import { projects } from "@/lib/data";
import { TiltCard } from "@/components/TiltCard";
import { revealUp, staggerContainer, viewportOnce } from "@/lib/motion";

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projets" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
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
            Projets
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Ce que j'ai construit
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={revealUp} className="h-full">
              <TiltCard className="h-full">
                <Card className="glass-card h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-foreground">{project.title}</CardTitle>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full shrink-0"
                      style={{
                        backgroundColor: "var(--accent-soft)",
                        color: "var(--accent-soft-foreground)",
                      }}
                    >
                      {project.type}
                    </span>
                  </div>
                  <CardDescription className="mt-2 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Chip key={tech} size="sm">
                        {tech}
                      </Chip>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--accent)" }}
                  >
                    <GithubIcon />
                    Voir sur GitHub
                  </a>
                </CardFooter>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
