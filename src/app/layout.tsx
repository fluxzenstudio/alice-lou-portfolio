// src/app/layout.tsx
import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google"; // Import Google Fonts
import "./globals.css";
import Navbar from "@/components/Navbar";

// Configure the serif font for headings/elegant text
const serif = Lora({ 
  subsets: ["latin"], 
  display: "swap", // Prevents layout shift
  variable: "--font-serif", // Creates a CSS variable
});

// Configure a clean sans-serif for body text
const sans = Inter({ 
  subsets: ["latin"], 
  display: "swap", 
  variable: "--font-sans", 
});

// Add the Metadata type here
export const metadata: Metadata = {
  title: 'Alice Lou — Portfolio 2026',
  description: 'The personal portfolio of Alice Lou, a Grade 8 student from Hangzhou International School, applying to US boarding schools for Grade 9.',
  openGraph: {
    title: 'Alice Lou — Portfolio 2026',
    description: 'Curious, driven, and community-focused. Explore my journey as a scholar, athlete, and musician.',
    url: 'https://alicelou.me',
    siteName: 'Alice Lou Portfolio',
    images: [
      {
        url: 'https://alicelou.me/alice-portrait.jpg',
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
      {/* Update the body className to include the font variables */}
      <body className={`${serif.variable} ${sans.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}