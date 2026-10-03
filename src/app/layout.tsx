// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Alice Lou — Portfolio 2026",
  description:
    "The personal portfolio of Alice Lou, a Grade 8 student from Hangzhou International School, applying to US boarding schools for Grade 9.",
  icons: {
    icon: "/alice-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}