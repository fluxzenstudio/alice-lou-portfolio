// src/components/Athletics.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Image from 'next/image';

export default function Athletics() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const championships = {
    hisac: [
      { label: "HISAC 2021/22 U14 Girls' 1st Place", image: "/hisac-2021-table-tennis-tournament-u14-1st-place.jpg" },
      { label: "HISAC 2022/23 U14 Girls' 2nd Place", image: "/hisac-2023-table-tennis-tournament-u14-2nd-place.jpg" },
      { label: "HISAC 2023/24 U14 Girls' Doubles Champion", image: "/hisac-table-tennis-u14-girls-doubles-champion.jpg" },
      { label: "HISAC 2024/25 U19 Girls' Champion", image: "/hisac-2024-table-tennis-tournament-u19-champion.jpg" },
      { label: "HISAC 2025/26 Girls' Singles Champion", image: "/hisac-table-tennis-girls-singles-2026-champion.jpg" },
      { label: "HISAC 2025/26 Girls' Doubles Champion", image: "/hisac-table-tennis-girls-doubles-champion-2026.jpg" },
    ],
    sisac: [
      { label: "SISAC 2024/25 Division 2 Girls' Singles Champion", image: "/sisac-champion-table-tennis-division2-girls-singles-2025.jpg" },
      { label: "SISAC 2025/26 Girls' Singles Champion", image: "/sisac-champion-table-tennis-girls-singles-2026.jpg" },
    ],
    acamis: [
      { label: "ACAMIS 2022/23 Girls' Team 3rd Place", image: "/acamis-table-tennis-girls-team-3rd-place-2023.webp" },
      { label: "ACAMIS 2022/23 Girls' Singles 2nd Place", image: "/acamis-table-tennis-girls-singles-2023-2nd-place.webp" },
    ],
  };

  const mvpAwards = [
    { label: "Varsity Table Tennis MVP 2023/24", image: "/varsity-table-tennis-mvp-2024.jpg" },
    { label: "Varsity Table Tennis MVP 2024/25", image: "/varsity-table-tennis-mvp-2025.jpg" },
    { label: "Varsity Table Tennis MVP 2025/26", image: "/varsity-table-tennis-mvp-2026.jpg" },
  ];

  const centeredMedia = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "28px",
    marginTop: "8px",
  };

  return (
    <main className="bg-white">

      {/* PAGE HEADER — shared */}
      <section className="pt-24 pb-14 px-6 md:px-12 lg:px-20 bg-white">
        <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-stone-900 mb-6">
            Table Tennis
          </motion.h1>
          <p className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>
            Table tennis is not just a sport in China, it is a cultural heartbeat. Known as the "national ball game,"
            it permeates daily life from schoolyards to community centers demanding precision, speed, and mental agility.
            Growing up immersed in this environment (with a grandpa who is a veteran Chinese champion player) meant
            that picking up a paddle was less of a choice and more of a rite of passage. For me, the table became my first
            classroom for discipline and focus, teaching me early on that success comes not from brute strength,
            but from strategy, resilience, and the courage to stay calm when every point matters.
          </p>
        </motion.div>
      </section>

      {isDesktop ? (
        <>
          {/* ============================================ */}
          {/* DESKTOP LAYOUT — EXACT ORIGINAL CODE         */}
          {/* ============================================ */}

          {/* THREE-COLUMN STORY */}
          <section className="pb-24 px-6 md:px-12 lg:px-20 bg-white">
            <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <div style={{ display: 'flex', flexDirection: 'row', gap: '48px', alignItems: 'flex-start' }}>

                <motion.div variants={itemVariants} style={{ width: '17%', position: 'sticky', top: '96px' }}>
                  <div style={{ width: '100%', marginBottom: '14px' }}>
                    <Image src="/alice-tabletennis-young.jpg" alt="Alice playing table tennis at a young age" width={300} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} priority />
                  </div>
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>Where it all began</p>
                </motion.div>

                <motion.div variants={itemVariants} style={{ width: '50%' }}>
                  <h2 className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '0px' }}>Where It All Began</h2>
                  <p className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>I first picked up a paddle at the age of five, following in the footsteps of my grandfather, a table tennis champion in China. What started as a family tradition quickly became my own passion. Even as a young child, my coaches noticed a natural talent: a quick eye for the ball, fast reflexes, and a competitive spirit that made every practice something to look forward to.</p>
                  <p className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>That early spark has carried me through years of dedicated training and into tournaments across the region, where I have won several championships and medals. Every match has taught me something new, how to stay calm under pressure, how to read an opponent's strategy, and how to come back stronger after losing a difficult set.</p>
                  <p className="text-lg text-stone-600" style={{ marginBottom: '0px', lineHeight: '1.8' }}>But table tennis has given me far more than trophies. It has taught me discipline, showing up to practice even when I am tired, and a focus that follows me straight into my schoolwork. The resilience, strategy, and mental toughness I built at the table have become the tools I use to succeed in everything else in my life. On and off the court, I have learned that champions are not born, they are built one game at a time.</p>
                </motion.div>

                <motion.div variants={itemVariants} style={{ width: '30%', position: 'sticky', top: '96px' }}>
                  <video src="/alice-table-tennis-video.MP4" controls playsInline style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block', boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }} />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>Alice in action</p>
                </motion.div>

              </div>
            </motion.div>
          </section>

          {/* CHAMPIONSHIPS */}
          <section className="py-20 px-6 md:px-12 lg:px-20 bg-stone-50">
            <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h2 variants={itemVariants} className="font-serif text-4xl font-normal tracking-tight text-stone-900 mb-12">Championships, Medals and Trophies</motion.h2>

              <motion.div variants={itemVariants} className="mb-16">
                <h3 className="font-serif text-2xl font-normal tracking-tight text-stone-900 mb-4">HISAC</h3>
                <p className="text-lg text-stone-600 max-w-3xl" style={{ marginBottom: '28px', lineHeight: '1.8' }}>The Hangzhou International Schools Athletic Conference brings together top student-athletes from international schools across Hangzhou. Competing locally has been the foundation of my development, testing my skills against familiar rivals and pushing me to elevate my game year after year.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '500px' }}>
                  {championships.hisac.map((item, index) => (
                    <button key={index} className="cert-link" onClick={() => setLightboxImage(item.image)}>
                      <ArrowRight className="cert-arrow" size={18} strokeWidth={2} />{item.label}
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-16">
                <h3 className="font-serif text-2xl font-normal tracking-tight text-stone-900 mb-4">SISAC</h3>
                <p className="text-lg text-stone-600 max-w-3xl" style={{ marginBottom: '28px', lineHeight: '1.8' }}>The South China International Schools Athletic Conference expands the competition to a regional level. Traveling to compete against schools across southern China has been an incredible opportunity to experience different playing styles and prove my consistency on a broader stage.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '500px' }}>
                  {championships.sisac.map((item, index) => (
                    <button key={index} className="cert-link" onClick={() => setLightboxImage(item.image)}>
                      <ArrowRight className="cert-arrow" size={18} strokeWidth={2} />{item.label}
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="font-serif text-2xl font-normal tracking-tight text-stone-900 mb-4">ACAMIS</h3>
                <p className="text-lg text-stone-600 max-w-3xl" style={{ marginBottom: '28px', lineHeight: '1.8' }}>The Association of Chinese and Mongolian International Schools tournament is the pinnacle of international school sports in the region. Competing at ACAMIS means facing the best table tennis players from across China and Mongolia, making every point earned here a testament to resilience and high-level preparation. Unfortunately ACAMIS management decided after 2023 that under 15 years old will no longer be able to participate in the ACAMIS, thus I didn't have the opportunity to compete again after 2023 for this reason.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '500px' }}>
                  {championships.acamis.map((item, index) => (
                    <button key={index} className="cert-link" onClick={() => setLightboxImage(item.image)}>
                      <ArrowRight className="cert-arrow" size={18} strokeWidth={2} />{item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* MVP */}
          <section className="py-20 px-6 md:px-12 lg:px-20 bg-white pb-16">
            <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h2 variants={itemVariants} className="font-serif text-4xl font-normal tracking-tight text-stone-900 mb-12">Most Valuable Player</motion.h2>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '48px', alignItems: 'flex-start' }}>
                <motion.div variants={itemVariants} style={{ width: '58%' }}>
                  <p className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8', marginTop: '0px' }}>Being selected as Most Valuable Player for the HIS Varsity Table Tennis Team is one of my proudest achievements. This honor recognizes not just individual performance, but leadership, consistency, and the ability to elevate the entire team. Earning MVP for three consecutive years (2024, 2025, and 2026) reflects my commitment to excellence and the trust my coaches and teammates have placed in me as a leader on and off the court.</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '500px' }}>
                    {mvpAwards.map((item, index) => (
                      <button key={index} className="cert-link" onClick={() => setLightboxImage(item.image)}>
                        <ArrowRight className="cert-arrow" size={18} strokeWidth={2} />{item.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} style={{ width: '34%', position: 'sticky', top: '96px' }}>
                  <div style={{ width: '100%', marginBottom: '14px' }}>
                    <Image src="/alice-mvp.jpg" alt="Alice with her MVP award" width={400} height={500} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} />
                  </div>
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>Three-time Varsity MVP</p>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </>
      ) : (
        <>
          {/* ============================================ */}
          {/* MOBILE LAYOUT — per your 3 requirements      */}
          {/* ============================================ */}

          {/* WHERE IT ALL BEGAN — restructured */}
          <section className="pb-16 px-6 bg-white">
            <motion.div className="max-w-3xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h2 variants={itemVariants} className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '0px' }}>
                Where It All Began
              </motion.h2>

              {/* Req #1: First para in 2 columns — text left, young photo right */}
              <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-start', marginBottom: '28px' }}>
                <p className="text-lg text-stone-600" style={{ lineHeight: '1.8', margin: 0, flex: 1 }}>
                  I first picked up a paddle at the age of five, following in the footsteps of my
                  grandfather, a table tennis champion in China. What started as a family tradition
                  quickly became my own passion. Even as a young child, my coaches noticed a natural
                  talent: a quick eye for the ball, fast reflexes, and a competitive spirit that made
                  every practice something to look forward to.
                </p>
                <div style={{ width: '38%', flexShrink: 0 }}>
                  <Image
                    src="/alice-tabletennis-young.jpg"
                    alt="Alice playing table tennis at a young age"
                    width={300}
                    height={400}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }}
                  />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>
                    Where it all began
                  </p>
                </div>
              </motion.div>

              {/* Paragraph 2 — full width */}
              <motion.p variants={itemVariants} className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>
                That early spark has carried me through years of dedicated training and into tournaments
                across the region, where I have won several championships and medals. Every match has
                taught me something new, how to stay calm under pressure, how to read an opponent's
                strategy, and how to come back stronger after losing a difficult set.
              </motion.p>

              {/* Req #2: Video centered below paragraph 2 */}
              <motion.div variants={itemVariants} style={centeredMedia}>
                <div style={{ maxWidth: '400px', width: '100%' }}>
                  <video
                    src="/alice-table-tennis-video.MP4"
                    controls
                    playsInline
                    style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block', boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }}
                  />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>
                    Alice in action
                  </p>
                </div>
              </motion.div>

              {/* Paragraph 3 — full width */}
              <motion.p variants={itemVariants} className="text-lg text-stone-600" style={{ marginBottom: '0px', lineHeight: '1.8' }}>
                But table tennis has given me far more than trophies. It has taught me discipline,
                showing up to practice even when I am tired, and a focus that follows me straight into
                my schoolwork. The resilience, strategy, and mental toughness I built at the table have
                become the tools I use to succeed in everything else in my life. On and off the court,
                I have learned that champions are not born, they are built one game at a time.
              </motion.p>
            </motion.div>
          </section>

          {/* CHAMPIONSHIPS — single column, full-width links */}
          <section className="py-16 px-6 bg-stone-50">
            <motion.div className="max-w-3xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h2 variants={itemVariants} className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-10">
                Championships, Medals and Trophies
              </motion.h2>

              <motion.div variants={itemVariants} className="mb-12">
                <h3 className="font-serif text-2xl font-normal tracking-tight text-stone-900 mb-4">HISAC</h3>
                <p className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>
                  The Hangzhou International Schools Athletic Conference brings together top student-athletes
                  from international schools across Hangzhou. Competing locally has been the foundation of my
                  development, testing my skills against familiar rivals and pushing me to elevate my game year after year.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
                  {championships.hisac.map((item, index) => (
                    <button key={index} className="cert-link" style={{ width: '100%' }} onClick={() => setLightboxImage(item.image)}>
                      <ArrowRight className="cert-arrow" size={18} strokeWidth={2} />{item.label}
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <h3 className="font-serif text-2xl font-normal tracking-tight text-stone-900 mb-4">SISAC</h3>
                <p className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>
                  The South China International Schools Athletic Conference expands the competition to a
                  regional level. Traveling to compete against schools across southern China has been an
                  incredible opportunity to experience different playing styles and prove my consistency on a broader stage.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
                  {championships.sisac.map((item, index) => (
                    <button key={index} className="cert-link" style={{ width: '100%' }} onClick={() => setLightboxImage(item.image)}>
                      <ArrowRight className="cert-arrow" size={18} strokeWidth={2} />{item.label}
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="font-serif text-2xl font-normal tracking-tight text-stone-900 mb-4">ACAMIS</h3>
                <p className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>
                  The Association of Chinese and Mongolian International Schools tournament is the pinnacle
                  of international school sports in the region. Competing at ACAMIS means facing the best
                  table tennis players from across China and Mongolia, making every point earned here a
                  testament to resilience and high-level preparation. Unfortunately ACAMIS management
                  decided after 2023 that under 15 years old will no longer be able to participate in the
                  ACAMIS, thus I didn't have the opportunity to compete again after 2023 for this reason.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
                  {championships.acamis.map((item, index) => (
                    <button key={index} className="cert-link" style={{ width: '100%' }} onClick={() => setLightboxImage(item.image)}>
                      <ArrowRight className="cert-arrow" size={18} strokeWidth={2} />{item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* MVP — single column, photo below first para, full-width links */}
          <section className="py-16 px-6 bg-white pb-16">
            <motion.div className="max-w-3xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h2 variants={itemVariants} className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8">
                Most Valuable Player
              </motion.h2>

              {/* Paragraph 1 — full width */}
              <motion.p variants={itemVariants} className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>
                Being selected as Most Valuable Player for the HIS Varsity Table Tennis Team is one of
                my proudest achievements. This honor recognizes not just individual performance, but
                leadership, consistency, and the ability to elevate the entire team. Earning MVP for
                three consecutive years (2024, 2025, and 2026) reflects my commitment to excellence and
                the trust my coaches and teammates have placed in me as a leader on and off the court.
              </motion.p>

              {/* Req #3a: MVP photo centered below paragraph 1 */}
              <motion.div variants={itemVariants} style={centeredMedia}>
                <div style={{ maxWidth: '400px', width: '100%' }}>
                  <Image
                    src="/alice-mvp.jpg"
                    alt="Alice with her MVP award"
                    width={400}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }}
                  />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>
                    Three-time Varsity MVP
                  </p>
                </div>
              </motion.div>

              {/* Req #3b: Links full width with same spacing */}
              <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
                {mvpAwards.map((item, index) => (
                  <button key={index} className="cert-link" style={{ width: '100%' }} onClick={() => setLightboxImage(item.image)}>
                    <ArrowRight className="cert-arrow" size={18} strokeWidth={2} />{item.label}
                  </button>
                ))}
              </motion.div>
            </motion.div>
          </section>
        </>
      )}

      {/* CLOSING QUOTE — shared */}
      <section className="px-6 bg-white" style={{ textAlign: 'center', paddingTop: '200px', paddingBottom: '96px' }}>
        <p className="font-serif italic text-2xl md:text-3xl text-stone-700">
          "The more I practice, the luckier I get."
        </p>
      </section>

      {/* LIGHTBOX — shared */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          role="dialog"
          aria-modal="true"
          aria-label="Championship certificate preview"
          onClick={() => setLightboxImage(null)}
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(12,10,9,0.85)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)',
            zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px', cursor: 'zoom-out',
          }}
        >
          <img
            src={lightboxImage}
            alt="Championship certificate or photo"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '90%', maxHeight: '85vh', borderRadius: '8px', boxShadow: '0 24px 80px rgba(0,0,0,0.5)', cursor: 'default', display: 'block' }}
          />
          <button
            className="lightbox-close"
            onClick={() => setLightboxImage(null)}
            aria-label="Close preview"
            style={{ position: 'absolute', top: '24px', right: '32px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', cursor: 'pointer' }}
          >
            <X size={20} strokeWidth={2} />
          </button>
          <p style={{ position: 'absolute', bottom: '20px', left: 0, right: 0, textAlign: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '13px', letterSpacing: '0.08em', margin: 0 }}>
            Click anywhere or press Esc to close
          </p>
        </motion.div>
      )}
    </main>
  );
}