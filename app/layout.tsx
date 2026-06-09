import type { Metadata } from "next";
import { Geist, Geist_Mono,Orbitron,Lora,Raleway, } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { AuroraBackground } from "@/components/AuroraBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Benjamin Assah — Développeur Web",
  description:
    "Portfolio de Benjamin Assah, développeur web généraliste fraîchement diplômé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} ${raleway.variable} ${orbitron.variable}`} 
    >
      <body className="text-foreground antialiased">
        <Providers>
          <AuroraBackground />
          {children}
        </Providers>
      </body>
    </html>
  );
}
