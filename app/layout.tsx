import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suphachai | Frontend Developer",
  description: "Portfolio of Suphachai Pattanathiradej, a Frontend Developer seeking internship opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}