import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-sm text-muted">
          Construit avec Next.js &amp; HeroUI
        </p>
      </div>
    </footer>
  );
}
