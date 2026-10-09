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

  // Shared text constants to guarantee 100% match between mobile and desktop
  const greeting = "Hello, I am";
  const name = "Alice Lou";
  
  const introParagraph = "I am an eighth grader who loves figuring things out. I was born in Los Angeles but grew up in Hangzhou, China, where I attend an international school. When I am not in class, you can usually find me practicing my table tennis serves, working on a tricky math problem, or playing the piano. I try my best to be kind, work hard, and ask a lot of questions. Next year, I will be starting at a U.S. boarding school for ninth grade, and I am so excited to join a new community where I can keep learning and growing.";
  
  const transitionParagraph = "There is a lot more to me than just this quick intro! Click on any of the links below to explore the different parts of my life and see who I really am.";

  const exploreLinks = [
    { href: "/about", label: "About" },
    { href: "/academics", label: "Academics" },
    { href: "/athletics", label: "Athletics" },
    { href: "/music", label: "Music" },
    { href: "/community", label: "Community" },
    { href: "/contact", label: "Contact" },
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
              {greeting}
            </p>

            <h1
              className="font-serif text-6xl md:text-7xl font-normal tracking-tight text-stone-900 mb-8"
              style={{ lineHeight: "1", marginTop: "0px" }}
            >
              {name}
            </h1>

            <p className="text-lg text-stone-600 max-w-lg leading-relaxed mb-6">
              {introParagraph}
            </p>

            <p className="text-lg text-stone-600 max-w-lg leading-relaxed mb-8">
              {transitionParagraph}
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
            {greeting}
          </p>

          <h1
            className="font-serif text-5xl font-normal tracking-tight text-stone-900 mb-6"
            style={{ lineHeight: "1", marginTop: "0px" }}
          >
            {name}
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
            {introParagraph}
          </p>

          <p className="text-lg text-stone-600 max-w-lg leading-relaxed mb-8">
            {transitionParagraph}
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