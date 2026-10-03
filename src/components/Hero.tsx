// src/components/Hero.tsx
"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const exploreLinks = [
    { href: "/about", label: "Authentic Self" },
    { href: "/academics", label: "Scholar" },
    { href: "/athletics", label: "Athlete" },
    { href: "/music", label: "Musician" },
    { href: "/community", label: "Member of the Community" },
    { href: "/contact", label: "Communicator" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-10 bg-stone-50">
      <div className="max-w-7xl w-full mx-auto flex flex-row gap-16 items-center justify-center">
        
        {/* LEFT: Portrait Image */}
        <div className="flex-shrink-0">
          <div className="relative rounded-sm overflow-hidden shadow-2xl shadow-stone-300/50">
            <Image
              src="/alice-portrait.jpg"
              alt="Portrait of Alice Lou, Grade 8 Student" // Improved Alt Text
              width={800}
              height={1000}
              priority // Critical for LCP
              style={{
                height: '78vh',
                width: 'auto',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* RIGHT: Text Content */}
        <div className="text-left">
          {/* Greeting */}
          <p className="font-serif italic text-2xl text-stone-500 mb-2" style={{ lineHeight: '1.2', marginTop: '0px' }}>
            Hello, I am
          </p>

          {/* Name */}
          <h1 className="font-serif text-6xl md:text-7xl font-normal tracking-tight text-stone-900 mb-8" style={{ lineHeight: '1', marginTop: '0px' }}>
            Alice Lou
          </h1>

          {/* Intro paragraph */}
          <p className="text-lg text-stone-600 max-w-lg leading-relaxed mb-6">
            I'm a curious and driven eighth grader who loves learning in all its forms. Whether 
            that means diving deep into a challenging problem, competing at the table tennis table, 
            or losing myself in a piece of music. I believe in community, kindness, and staying 
            endlessly curious about the world around me. As I get ready for the next chapter of my journey at a 
            U.S. boarding school, I can't wait to bring my energy, my questions, and my love of 
            learning to a brand-new community.
          </p>

          {/* Inviting paragraph */}
          <p className="text-lg text-stone-600 max-w-lg leading-relaxed mb-8">
            There's so much more to discover about who I am. I invite you to explore the different 
            sides of my journey below as:
          </p>

          {/* Explore links — arrow buttons, no underline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '420px' }}>
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="cert-link"
                style={{ padding: '12px 16px', fontSize: '15px', textDecoration: 'none' }}
              >
                <ArrowRight className="cert-arrow" size={18} strokeWidth={2} />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}