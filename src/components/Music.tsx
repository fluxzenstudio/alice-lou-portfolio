// src/components/Music.tsx
"use client";

import { motion } from "framer-motion";
import Image from 'next/image'; // Kept for consistency, though not currently used in JSX

export default function Music() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="bg-white">
      {/* PAGE HEADER */}
      <section className="pt-24 pb-14 px-6 md:px-12 lg:px-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-stone-900 mb-6">
            Music
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-stone-600 max-w-2xl leading-relaxed">
            A lifelong love of melody, rhythm, and the quiet magic of making music with friends.
          </motion.p>
        </motion.div>
      </section>

      {/* STORY + VIDEO */}
      <section className="pb-24 px-6 md:px-12 lg:px-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <motion.div variants={itemVariants} style={{ width: '66%', margin: '0 auto' }}>
            <h2 className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '0px' }}>
              My Musical Journey
            </h2>

            <p 
              className="text-lg text-stone-600" 
              style={{ marginBottom: '28px', lineHeight: '1.8' }}
            >
              Music has been a constant companion in my life, a place where I can breathe, think,
              and feel all at once. I started piano lessons when I was five years old, and even though
              I'm far from being a maestro, I love the feeling of finally mastering a song after weeks
              of practice. There's something deeply satisfying about sitting down at the keys and
              watching muscle memory take over, turning something that once felt impossible into
              something that feels like home.
            </p>

            <p 
              className="text-lg text-stone-600" 
              style={{ marginBottom: '28px', lineHeight: '1.8' }}
            >
              At school, I'm an active member of the band club, where I usually play drums or mallet
              percussion. There's nothing quite like the energy of playing together with a group of
              friends, listening to each other, finding the groove, and creating something bigger than
              any one of us could make alone. Music has taught me how to listen deeply, how to stay
              focused under pressure, and how to trust the people around me.
            </p>

            <p 
              className="text-lg text-stone-600" 
              style={{ marginBottom: '32px', lineHeight: '1.8' }}
            >
              But more than anything, music is how I destress. When I'm overwhelmed with schoolwork
              or just need to clear my head, I sit down at the piano or pick up a pair of drumsticks
              and let the rhythm carry me away. Performing is especially special, there's a kind of
              joy that only comes from sharing something you've worked hard on with an audience. Even
              if my hands are shaking a little, that moment of connection makes every practice session
              worth it.
            </p>

            {/* Video Feature */}
            <div style={{ marginTop: '8px' }}>
              <video
                src="/international-day-piano-performance.mp4"
                controls
                playsInline
                preload="metadata" // Optimizes initial load time
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '8px', 
                  display: 'block',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.10)'
                }}
              />
              <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', textTransform: 'none', fontStyle: 'italic' }}>
                Performing 爱爱爱 (Love, Love, Love) with my friend Angela at International Day 2026
              </p>
            </div>

          </motion.div>
        </motion.div>
      </section>

      {/* CLOSING QUOTE - Moved OUTSIDE the previous section/div for valid HTML */}
      <section className="px-6 bg-white" style={{ textAlign: 'center', paddingTop: '100px', paddingBottom: '96px' }}>
        <p className="font-serif italic text-2xl md:text-3xl text-stone-700">
          "I don't play music to be perfect. I play music to be free."
        </p>
      </section>
    </main>
  );
}