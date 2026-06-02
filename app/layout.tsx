// Root layout wrapper for the entire portfolio app.

import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import MouseSpotlight from "@/components/ui/MouseSpotlight";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supachai Pattanateeradej — Frontend Developer",
  description:
    "Computer Science student and Frontend Developer intern candidate. Builds fast, accessible, and clean web applications with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Supachai Pattanateeradej — Frontend Developer",
    description:
      "CS student passionate about building fast, accessible web apps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <MouseSpotlight />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}