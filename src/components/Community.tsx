// src/components/Community.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Community() {
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

  const centeredPhoto = {
    display: 'flex',
    justifyContent: 'center',
    margin: '32px 0',
  };

  return (
    <main className="bg-white">

      {/* PAGE HEADER — shared */}
      <section className="pt-24 pb-14 px-6 md:px-12 lg:px-20 bg-white">
        <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-stone-900 mb-6">
            Community
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-stone-600 max-w-2xl" style={{ lineHeight: '1.8' }}>
            Service is not just something I do, it's how I connect with the world around me.
            Whether it is showing up for a community in need or caring for those who cannot speak
            for themselves, I believe that small, consistent actions create the most meaningful change.
            This page shares my journey of learning that compassion is a verb, one that requires patience,
            humility, and a willingness to get your hands dirty.
          </motion.p>
        </motion.div>
      </section>

      {isDesktop ? (
        <>
          {/* ============================================ */}
          {/* DESKTOP LAYOUT                               */}
          {/* Order: raising awareness → donation → present*/}
          {/* ============================================ */}

          <section className="pb-24 px-6 md:px-12 lg:px-20 bg-white">
            <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.div variants={itemVariants} style={{ width: '66%', margin: '0 auto' }}>

                <h2 className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '0px', textAlign: 'left' }}>
                  Volunteering at the Local Dog Shelter
                </h2>

                <p style={paraStyle}>
                  My involvement began in Grade 5 already with a simple realization: many people want to help but don't know where
                  to start. So, I took on the role of bridge-builder. I started by raising awareness among my
                  classmates and neighbors about the plight of stray dogs in Hangzhou, sharing stories and facts
                  to combat apathy. But talk is cheap if there are no resources, so I organized donation drives
                  for funds, food, blankets, and medical supplies. It wasn't always easy convincing people to part with
                  their spare change or old towels, but seeing the pile grow was incredibly motivating.
                </p>

                <p style={paraStyle}>
                  Collecting donations is only half the battle; getting them to the dogs is the other. Every month,
                  I load up bags of kibble and boxes of treats and deliver them personally to the shelter. These
                  trips are my favorite because they allow me to spend time with the animals directly. I walk the
                  shy ones to build confidence, play fetch with the energetic puppies, and simply sit quietly with
                  the older dogs who just crave companionship. Watching a timid dog wag its tail for the first time
                  after weeks of gentle interaction reminds me why this work matters.
                </p>

                {/* 3-column grid: raising awareness → donation → present */}
                <div style={{ display: 'flex', gap: '16px', margin: '40px 0', flexDirection: 'row', alignItems: 'flex-start' }}>

                  {/* 1. Raising Awareness */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', width: '100%' }}>
                      <Image src="/alice-raising-awareness.jpg" alt="Alice raising awareness about stray dogs in Hangzhou" fill sizes="(max-width: 768px) 90vw, 20vw" style={{ objectFit: 'cover' }} />
                    </div>
                    <p style={{ fontSize: '12px', letterSpacing: '0.02em', color: '#57534e', marginTop: '10px', fontStyle: 'italic', textAlign: 'center' }}>
                      Spreading the word, one conversation at a time.
                    </p>
                  </div>

                  {/* 2. Donation Delivery */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', width: '100%' }}>
                      <Image src="/alice-shelter-donation.jpg" alt="Alice delivering donations to the shelter with her dad" fill sizes="(max-width: 768px) 90vw, 20vw" style={{ objectFit: 'cover' }} />
                    </div>
                    <p style={{ fontSize: '12px', letterSpacing: '0.02em', color: '#57534e', marginTop: '10px', fontStyle: 'italic', textAlign: 'center' }}>
                      Heavy lifting, light heart. Delivering donations with Dad.
                    </p>
                  </div>

                  {/* 3. Being Present */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', width: '100%' }}>
                      <Image src="/alice-dog-shelter.jpg" alt="Alice giving attention to shelter dogs" fill sizes="(max-width: 768px) 90vw, 20vw" style={{ objectFit: 'cover' }} />
                    </div>
                    <p style={{ fontSize: '12px', letterSpacing: '0.02em', color: '#57534e', marginTop: '10px', fontStyle: 'italic', textAlign: 'center' }}>
                      Sometimes the best gift is just being present.
                    </p>
                  </div>
                </div>

                <p style={paraStyle}>
                  This holistic approach, combining advocacy, logistics, and direct care, has taught me that
                  sustainability comes from engagement. It's not enough to drop off food and leave; you must
                  connect with the beneficiaries to understand their needs. When a dog who wouldn't look at you
                  on your first visit comes running to the gate when you arrive, tail wagging, you realize:
                  you are making a difference. One donation, one walk, one moment of kindness at a time.
                </p>

                <h2 className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '40px', textAlign: 'left' }}>
                  Serving the Community into the Future
                </h2>

                <p style={{ ...paraStyle, marginBottom: '0px' }}>
                  Volunteering at the animal shelter taught me the value of building relationships, hard work, consistency, and caring for
                  those who cannot care for themselves. As I prepare for a future in law and public service, however,
                  I feel a stronger calling to apply that same sense of duty toward helping people in my community.
                  At boarding school, I am eager to get involved in initiatives that support self-reliance and local
                  stability, such as tutoring students who are falling behind or assisting with food drives for families
                  facing hard times. I believe that true public service is about rolling up your sleeves and doing the
                  practical work needed to strengthen our neighborhoods, and I want to focus my energy on making a
                  tangible, positive difference in the lives of my fellow citizens.
                </p>

              </motion.div>
            </motion.div>
          </section>
        </>
      ) : (
        <>
          {/* ============================================ */}
          {/* MOBILE LAYOUT                                */}
          {/* Order: raising awareness → donation → shelter*/}
          {/* ============================================ */}

          <section className="pb-16 px-6 bg-white">
            <motion.div className="max-w-3xl mx-auto text-left" variants={containerVariants} initial="hidden" animate="visible">

              <motion.h2 variants={itemVariants} className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '0px', textAlign: 'left' }}>
                Volunteering at the Local Dog Shelter
              </motion.h2>

              {/* Position 1 (after heading): Raising Awareness */}
              <motion.div variants={itemVariants} style={centeredPhoto}>
                <div style={{ maxWidth: '400px', width: '100%' }}>
                  <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', width: '100%' }}>
                    <Image src="/alice-raising-awareness.jpg" alt="Alice raising awareness about stray dogs in Hangzhou" fill sizes="(max-width: 768px) 90vw, 50vw" style={{ objectFit: 'cover' }} />
                  </div>
                  <p style={{ fontSize: '12px', letterSpacing: '0.02em', color: '#57534e', marginTop: '10px', fontStyle: 'italic', textAlign: 'center' }}>
                    Spreading the word, one conversation at a time.
                  </p>
                </div>
              </motion.div>

              {/* Paragraph 1 */}
              <motion.p variants={itemVariants} style={paraStyle}>
                My involvement began in Grade 5 already, with a simple realization: many people want to help but don't know where
                to start. So, I took on the role of bridge-builder. I started by raising awareness among my
                classmates and neighbors about the plight of stray dogs in Hangzhou, sharing stories and facts
                to combat apathy. But talk is cheap if there are no resources, so I organized donation drives
                for funds, food, blankets, and medical supplies. It wasn't always easy convincing people to part with
                their spare change or old towels, but seeing the pile grow was incredibly motivating.
              </motion.p>

              {/* Position 2 (after para 1): Donation Delivery */}
              <motion.div variants={itemVariants} style={centeredPhoto}>
                <div style={{ maxWidth: '400px', width: '100%' }}>
                  <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', width: '100%' }}>
                    <Image src="/alice-shelter-donation.jpg" alt="Alice delivering donations to the shelter with her dad" fill sizes="(max-width: 768px) 90vw, 50vw" style={{ objectFit: 'cover' }} />
                  </div>
                  <p style={{ fontSize: '12px', letterSpacing: '0.02em', color: '#57534e', marginTop: '10px', fontStyle: 'italic', textAlign: 'center' }}>
                    Heavy lifting, light heart. Delivering donations with Dad.
                  </p>
                </div>
              </motion.div>

              {/* Paragraph 2 */}
              <motion.p variants={itemVariants} style={paraStyle}>
                Collecting donations is only half the battle; getting them to the dogs is the other. Every month,
                I load up bags of kibble and boxes of treats and deliver them personally to the shelter. These
                trips are my favorite because they allow me to spend time with the animals directly. I walk the
                shy ones to build confidence, play fetch with the energetic puppies, and simply sit quietly with
                the older dogs who just crave companionship. Watching a timid dog wag its tail for the first time
                after weeks of gentle interaction reminds me why this work matters.
              </motion.p>

              {/* Position 3 (after para 2): Being Present (alice-shelter) */}
              <motion.div variants={itemVariants} style={centeredPhoto}>
                <div style={{ maxWidth: '400px', width: '100%' }}>
                  <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', width: '100%' }}>
                    <Image src="/alice-dog-shelter.jpg" alt="Alice giving attention to shelter dogs" fill sizes="(max-width: 768px) 90vw, 50vw" style={{ objectFit: 'cover' }} />
                  </div>
                  <p style={{ fontSize: '12px', letterSpacing: '0.02em', color: '#57534e', marginTop: '10px', fontStyle: 'italic', textAlign: 'center' }}>
                    Sometimes the best gift is just being present.
                  </p>
                </div>
              </motion.div>

              {/* Paragraph 3 */}
              <motion.p variants={itemVariants} style={paraStyle}>
                This holistic approach, combining advocacy, logistics, and direct care, has taught me that
                sustainability comes from engagement. It's not enough to drop off food and leave; you must
                connect with the beneficiaries to understand their needs. When a dog who wouldn't look at you
                on your first visit comes running to the gate when you arrive, tail wagging, you realize:
                you are making a difference. One donation, one walk, one moment of kindness at a time.
              </motion.p>

              <motion.h2 variants={itemVariants} className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '40px', textAlign: 'left' }}>
                Serving the Community into the Future
              </motion.h2>

              <motion.p variants={itemVariants} style={{ ...paraStyle, marginBottom: '0px' }}>
                Volunteering at the animal shelter taught me the value of building relationships, hard work, consistency, and caring for
                those who cannot care for themselves. As I prepare for a future in law and public service, however,
                I feel a stronger calling to apply that same sense of duty toward helping people in my community.
                At boarding school, I am eager to get involved in initiatives that support self-reliance and local
                stability, such as tutoring students who are falling behind or assisting with food drives for families
                facing hard times. I believe that true public service is about rolling up your sleeves and doing the
                practical work needed to strengthen our neighborhoods, and I want to focus my energy on making a
                tangible, positive difference in the lives of my fellow citizens.
              </motion.p>

            </motion.div>
          </section>
        </>
      )}

      {/* CLOSING QUOTE — shared */}
      <section className="px-6 bg-white" style={{ textAlign: 'center', paddingTop: '50px', paddingBottom: '96px' }}>
        <p className="font-serif italic text-2xl md:text-3xl text-stone-700">
          "The best therapy has four paws."
        </p>
      </section>

    </main>
  );
}