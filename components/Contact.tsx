"use client";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.77V2h-3.43v13.67a2.89 2.89 0 1 1-2.89-2.89c.3 0 .6.05.87.13V9.42a6.32 6.32 0 1 0 5.45 6.25V8.41a8.16 8.16 0 0 0 4.77 1.53V6.69z" />
    </svg>
  );
}
const links = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: <MailIcon />,
    value: profile.email,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: <LinkedinIcon />,
    value: "linkedin.com/in/benjaminassah",
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: <GithubIcon />,
    value: "benjaminassah328-lgtm",
  },
  {
    label: "TikTok",
    href: profile.TikTok,
    icon: <TikTokIcon />,
    value: "https://www.tiktok.com/@pavlov.dev?_r=1&_t=ZS-994iofI1lzO",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
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
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-lg text-muted mb-10 max-w-xl">
            Je suis ouvert à toutes les opportunités — stage, alternance, premier emploi. N'hésite pas à me contacter.
          </p>

          <div className="flex flex-col gap-4">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card flex items-center gap-4 p-4 rounded-2xl group"
              >
                <span
                  className="transition-colors duration-200 group-hover:text-[var(--accent)]"
                  style={{ color: "var(--muted)" }}
                >
                  {link.icon}
                </span>
                <div>
                  <p className="text-xs text-muted mb-0.5">{link.label}</p>
                  <p className="text-sm font-medium text-foreground">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
