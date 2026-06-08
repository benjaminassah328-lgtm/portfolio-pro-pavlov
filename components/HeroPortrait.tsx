import { profile } from "@/lib/data";

/**
 * Hero portrait slot. To use a real photo: drop the file in `public/`
 * (e.g. public/benjamin.jpg) and set PHOTO_SRC below — the placeholder
 * disappears automatically.
 */
const PHOTO_SRC = "/pavlov.jpeg"; // ← ex: "/benjamin.jpg"

function PersonIcon() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
    </svg>
  );
}

export function HeroPortrait() {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="relative mx-auto w-full max-w-xs sm:max-w-sm aspect-[4/5]">
      {/* Rotating aurora glow behind the frame */}
      <div className="portrait-ring" />

      {/* Glass frame */}
      <div className="glass-card relative h-full w-full overflow-hidden rounded-[2rem] p-0">
        {PHOTO_SRC ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={PHOTO_SRC}
            alt={`Portrait de ${profile.name}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-4"
            style={{
              background:
                "radial-gradient(120% 120% at 30% 20%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 60%)",
            }}
          >
            <span
              className="flex flex-col items-center gap-3"
              style={{ color: "var(--muted)" }}
            >
              <PersonIcon />
              <span className="text-4xl font-bold tracking-tight text-foreground">
                {initials}
              </span>
            </span>
            <span
              className="glass-pill rounded-full px-3 py-1 text-xs font-medium"
              style={{ color: "var(--muted)" }}
            >
              Votre photo ici
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
