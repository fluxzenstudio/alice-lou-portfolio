// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

// app/layout.tsx or app/page.tsx
export const metadata = {
  title: 'Alice Lou — Portfolio 2026',
  description: 'The personal portfolio of Alice Lou, a Grade 8 student from Hangzhou International School, applying to US boarding schools for Grade 9.',
  openGraph: {
    title: 'Alice Lou — Portfolio 2026',
    description: 'Curious, driven, and community-focused. Explore my journey as a scholar, athlete, and musician.',
    url: 'https://alicelou.me',
    siteName: 'Alice Lou Portfolio',
    images: [
      {
        url: 'https://alicelou.me/alice-portrait.jpg', // Ensure this is an optimized, compressed image
        width: 1200,
        height: 630,
        alt: 'Alice Lou Portrait',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alice Lou — Portfolio 2026',
    description: 'The personal portfolio of Alice Lou, Grade 8 student.',
    images: ['https://alicelou.me/alice-portrait.jpg'],
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