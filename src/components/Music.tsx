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

  // Shared text constants to guarantee 100% match between mobile and desktop
  const headerText = "Finding my rhythm and the joy of making music with friends.";

  const paragraph1 = "Music has always been a big part of my life. It is a place where I can just relax and be myself. I started piano lessons when I was five years old. Even though I am definitely not a professional yet, I love the feeling of finally mastering a song after weeks of practice. There is something really satisfying about sitting down at the keys, letting muscle memory take over, and turning something that once felt impossible into something that feels natural.";

  const paragraph2 = "At school, I am an active member of the band club, where I usually play the drums or mallet percussion. There is nothing quite like the energy of playing together with a group of friends. We listen to each other, find the groove, and create something bigger than any one of us could make alone. Being in the band has taught me how to really listen, how to stay focused under pressure, and how to trust the people around me.";

  const paragraph3 = "But more than anything, music is how I destress. When I am overwhelmed with schoolwork or just need to clear my head, I sit down at the piano or pick up a pair of drumsticks and let the rhythm take over. Performing is especially special. There is a kind of joy that only comes from sharing something you have worked hard on with an audience. Even if my hands are shaking a little bit, that moment of connection makes every single practice session worth it.";

  const caption1 = "Finding Bliss in the Beat";
  const caption2 = "Performing 爱爱爱 (Love, Love, Love) with my friend Angela at International Day 2026";

  const paraStyle = {
    marginBottom: '28px',
    lineHeight: '1.8',
    fontSize: '18px',
    color: '#57534e'
  };

  return (
    <main className="bg-white">

      {/* PAGE HEADER - shared */}
      <section className="pt-24 pb-14 px-6 md:px-12 lg:px-20 bg-white">
        <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-stone-900 mb-6">
            Music
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-stone-600 max-w-2xl" style={{ lineHeight: '1.8' }}>
            {headerText}
          </motion.p>
        </motion.div>
      </section>

      {isDesktop ? (
        <>
          {/* DESKTOP LAYOUT */}

          <section className="pb-24 px-6 md:px-12 lg:px-20 bg-white">
            <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.div variants={itemVariants} style={{ width: '66%', margin: '0 auto' }}>
                <h2 className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '0px' }}>
                  My Musical Journey
                </h2>

                <motion.p variants={itemVariants} style={paraStyle}>
                  {paragraph1}
                </motion.p>

                <motion.p variants={itemVariants} style={paraStyle}>
                  {paragraph2}
                </motion.p>

                <motion.div variants={itemVariants} style={{ textAlign: 'center', margin: '40px 0' }}>
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
                    {caption1}
                  </p>
                </motion.div>

                <motion.p variants={itemVariants} style={paraStyle}>
                  {paragraph3}
                </motion.p>

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
                    {caption2}
                  </p>
                </motion.div>

              </motion.div>
            </motion.div>
          </section>
        </>
      ) : (
        <>
          {/* MOBILE LAYOUT */}

          <section className="pb-16 px-6 bg-white">
            <motion.div className="max-w-3xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">

              <motion.h2 variants={itemVariants} className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '0px' }}>
                My Musical Journey
              </motion.h2>

              <motion.p variants={itemVariants} style={paraStyle}>
                {paragraph1}
              </motion.p>

              <motion.p variants={itemVariants} style={paraStyle}>
                {paragraph2}
              </motion.p>

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
                  {caption1}
                </p>
              </motion.div>

              <motion.p variants={itemVariants} style={paraStyle}>
                {paragraph3}
              </motion.p>

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
                  {caption2}
                </p>
              </motion.div>

            </motion.div>
          </section>
        </>
      )}

      {/* CLOSING QUOTE - shared */}
      <section className="px-6 bg-white" style={{ textAlign: 'center', paddingTop: '100px', paddingBottom: '96px' }}>
        <p className="font-serif italic text-2xl md:text-3xl text-stone-700">
          "I do not play music to be perfect. I play music to be free."
        </p>
      </section>

    </main>
  );
}