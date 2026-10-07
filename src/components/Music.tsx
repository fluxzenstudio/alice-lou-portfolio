// src/components/Music.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Music() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const paraStyle = {
    marginBottom: '28px',
    lineHeight: '1.8',
    fontSize: '18px',
    color: '#57534e'
  };

  return (
    <main className="bg-white">

      {/* PAGE HEADER — shared */}
      <section className="pt-24 pb-14 px-6 md:px-12 lg:px-20 bg-white">
        <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-stone-900 mb-6">
            Music
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-stone-600 max-w-2xl" style={{ lineHeight: '1.8' }}>
            A lifelong love of melody, rhythm, and the quiet magic of making music with friends.
          </motion.p>
        </motion.div>
      </section>

      {isDesktop ? (
        <>
          {/* ============================================ */}
          {/* DESKTOP LAYOUT — EXACT ORIGINAL CODE         */}
          {/* ============================================ */}

          <section className="pb-24 px-6 md:px-12 lg:px-20 bg-white">
            <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.div variants={itemVariants} style={{ width: '66%', margin: '0 auto' }}>
                <h2 className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '0px' }}>
                  My Musical Journey
                </h2>

                <p style={paraStyle}>
                  Music has been a constant companion in my life, a place where I can breathe, think,
                  and feel all at once. I started piano lessons when I was five years old, and even though
                  I'm far from being a maestro, I love the feeling of finally mastering a song after weeks
                  of practice. There's something deeply satisfying about sitting down at the keys and
                  watching muscle memory take over, turning something that once felt impossible into
                  something that feels like home.
                </p>

                <p style={paraStyle}>
                  At school, I'm an active member of the band club, where I usually play drums or mallet
                  percussion. There's nothing quite like the energy of playing together with a group of
                  friends, listening to each other, finding the groove, and creating something bigger than
                  any one of us could make alone. Music has taught me how to listen deeply, how to stay
                  focused under pressure, and how to trust the people around me.
                </p>

                <div style={{ textAlign: 'center', margin: '40px 0' }}>
                  <Image
                    src="/alice-drums.jpg"
                    alt="Alice playing the drums in the school band"
                    width={600}
                    height={400}
                    style={{
                      width: '100%',
                      maxWidth: '500px',
                      height: 'auto',
                      borderRadius: '8px',
                      display: 'inline-block',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.10)'
                    }}
                  />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>
                    Finding bliss in the beat
                  </p>
                </div>

                <p style={paraStyle}>
                  But more than anything, music is how I destress. When I'm overwhelmed with schoolwork
                  or just need to clear my head, I sit down at the piano or pick up a pair of drumsticks
                  and let the rhythm carry me away. Performing is especially special, there's a kind of
                  joy that only comes from sharing something you've worked hard on with an audience. Even
                  if my hands are shaking a little, that moment of connection makes every practice session
                  worth it.
                </p>

                <div style={{ marginTop: '8px' }}>
                  <video
                    src="/international-day-piano-performance.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      display: 'block',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.10)'
                    }}
                  />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>
                    Performing 爱爱爱 (Love, Love, Love) with my friend Angela at International Day 2026
                  </p>
                </div>

              </motion.div>
            </motion.div>
          </section>
        </>
      ) : (
        <>
          {/* ============================================ */}
          {/* MOBILE LAYOUT — full width text and media    */}
          {/* ============================================ */}

          <section className="pb-16 px-6 bg-white">
            <motion.div className="max-w-3xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">

              <motion.h2 variants={itemVariants} className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '0px' }}>
                My Musical Journey
              </motion.h2>

              {/* Paragraph 1 — full width */}
              <motion.p variants={itemVariants} style={paraStyle}>
                Music has been a constant companion in my life, a place where I can breathe, think,
                and feel all at once. I started piano lessons when I was five years old, and even though
                I'm far from being a maestro, I love the feeling of finally mastering a song after weeks
                of practice. There's something deeply satisfying about sitting down at the keys and
                watching muscle memory take over, turning something that once felt impossible into
                something that feels like home.
              </motion.p>

              {/* Paragraph 2 — full width */}
              <motion.p variants={itemVariants} style={paraStyle}>
                At school, I'm an active member of the band club, where I usually play drums or mallet
                percussion. There's nothing quite like the energy of playing together with a group of
                friends, listening to each other, finding the groove, and creating something bigger than
                any one of us could make alone. Music has taught me how to listen deeply, how to stay
                focused under pressure, and how to trust the people around me.
              </motion.p>

              {/* Drums image — full width (no max-width constraint) */}
              <motion.div variants={itemVariants} style={{ textAlign: 'center', margin: '40px 0' }}>
                <Image
                  src="/alice-drums.jpg"
                  alt="Alice playing the drums in the school band"
                  width={600}
                  height={400}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    display: 'block',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.10)'
                  }}
                />
                <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>
                  Finding bliss in the beat
                </p>
              </motion.div>

              {/* Paragraph 3 — full width */}
              <motion.p variants={itemVariants} style={paraStyle}>
                But more than anything, music is how I destress. When I'm overwhelmed with schoolwork
                or just need to clear my head, I sit down at the piano or pick up a pair of drumsticks
                and let the rhythm carry me away. Performing is especially special, there's a kind of
                joy that only comes from sharing something you've worked hard on with an audience. Even
                if my hands are shaking a little, that moment of connection makes every practice session
                worth it.
              </motion.p>

              {/* Video — full width (already was, but ensured) */}
              <motion.div variants={itemVariants} style={{ marginTop: '8px' }}>
                <video
                  src="/international-day-piano-performance.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    display: 'block',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.10)'
                  }}
                />
                <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>
                  Performing 爱爱爱 (Love, Love, Love) with my friend Angela at International Day 2026
                </p>
              </motion.div>

            </motion.div>
          </section>
        </>
      )}

      {/* CLOSING QUOTE — shared */}
      <section className="px-6 bg-white" style={{ textAlign: 'center', paddingTop: '100px', paddingBottom: '96px' }}>
        <p className="font-serif italic text-2xl md:text-3xl text-stone-700">
          "I don't play music to be perfect. I play music to be free."
        </p>
      </section>

    </main>
  );
}