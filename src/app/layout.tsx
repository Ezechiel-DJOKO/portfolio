// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "DJOKO Tanguy | Portfolio",
  description: "Portfolio de DJOKO Tanguy Mawougnon Ezékiel - Étudiant en Administration des Réseaux Informatiques & Cybersécurité",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-navy text-main selection:bg-accent selection:text-navy`}>
        {children}
      </body>
    </html>
  );
}