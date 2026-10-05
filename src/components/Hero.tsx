// src/components/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const exploreLinks = [
    { href: "/about", label: "Global Citizen" },
    { href: "/academics", label: "Scholar" },
    { href: "/athletics", label: "Athlete" },
    { href: "/music", label: "Musician" },
    { href: "/community", label: "Member of the Community" },
    { href: "/contact", label: "Communicator" },
  ];

  /* DESKTOP & TABLET LANDSCAPE */
  if (isDesktop) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 pt-10 pb-24 bg-stone-50">
        <div className="max-w-7xl w-full mx-auto flex flex-row gap-16 items-center justify-center">
          <div className="flex-shrink-0">
            <div className="relative rounded-sm overflow-hidden shadow-2xl shadow-stone-300/50">
              <Image
                src="/alice-portrait.jpg"
                alt="Portrait of Alice Lou, Grade 8 Student"
                width={800}
                height={1000}
                priority
                style={{
                  height: "78vh",
                  width: "auto",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>

          <div className="text-left">
            <p
              className="font-serif italic text-2xl text-stone-500 mb-2"
              style={{ lineHeight: "1.2", marginTop: "0px" }}
            >
              Hello, I am
            </p>

            <h1
              className="font-serif text-6xl md:text-7xl font-normal tracking-tight text-stone-900 mb-8"
              style={{ lineHeight: "1", marginTop: "0px" }}
            >
              Alice Lou
            </h1>

            <p className="text-lg text-stone-600 max-w-lg leading-relaxed mb-6">
              I'm a curious and driven eighth grader who loves learning in all
              its forms. Whether that means diving deep into a challenging
              problem, competing at the table tennis table, or losing myself in
              a piece of music. I believe in community, kindness, and staying
              endlessly curious about the world around me. As I get ready for
              the next chapter of my journey at a U.S. boarding school, I can't
              wait to bring my energy, my questions, and my love of learning to
              a brand-new community.
            </p>

            <p className="text-lg text-stone-600 max-w-lg leading-relaxed mb-8">
              There's so much more to discover about who I am. I invite you to
              explore the different sides of my journey below as:
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                maxWidth: "420px",
              }}
            >
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="cert-link"
                  style={{
                    padding: "12px 16px",
                    fontSize: "15px",
                    textDecoration: "none",
                  }}
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

    /* MOBILE & TABLET PORTRAIT */
  return (
    <section className="min-h-screen flex items-center justify-start px-6 pt-10 bg-stone-50">
      <div className="max-w-2xl w-full mx-auto flex flex-col">

        {/* Top section: centered */}
        <div className="flex flex-col items-center text-center">
          <p
            className="font-serif italic text-2xl text-stone-500 mb-2"
            style={{ lineHeight: "1.2", marginTop: "20px" }}
          >
            Hello, I am
          </p>

          <h1
            className="font-serif text-5xl font-normal tracking-tight text-stone-900 mb-6"
            style={{ lineHeight: "1", marginTop: "0px" }}
          >
            Alice Lou
          </h1>

          <div className="mb-8">
            <div className="relative rounded-sm overflow-hidden shadow-2xl shadow-stone-300/50 w-[220px]">
              <Image
                src="/alice-portrait.jpg"
                alt="Portrait of Alice Lou, Grade 8 Student"
                width={440}
                height={550}
                priority
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </div>

        {/* Bottom section: left-aligned */}
        <div className="text-left">
          <p className="text-lg text-stone-600 max-w-lg leading-relaxed mb-6">
            I'm a curious and driven eighth grader who loves learning in all
            its forms. Whether that means diving deep into a challenging
            problem, competing at the table tennis table, or losing myself in a
            piece of music. I believe in community, kindness, and staying
            endlessly curious about the world around me. As I get ready for the
            next chapter of my journey at a U.S. boarding school, I can't wait
            to bring my energy, my questions, and my love of learning to a
            brand-new community.
          </p>

          <p className="text-lg text-stone-600 max-w-lg leading-relaxed mb-8">
            There's so much more to discover about who I am. I invite you to
            explore the different sides of my journey below as:
          </p>

          {/* Links */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxWidth: "320px",
              alignItems: "flex-start",
              marginBottom: "30px",
            }}
          >
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="cert-link"
                style={{
                  padding: "12px 16px",
                  fontSize: "15px",
                  textDecoration: "none",
                }}
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