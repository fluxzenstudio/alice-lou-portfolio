// src/components/Contact.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from 'next/image';

export default function Contact() {
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

  // --- ANTI-SPAM OBFUSCATION LOGIC ---
  const emailUser = "hello";
  const emailDomain = "alicelou.me";
  const safeEmail = `${emailUser}@${emailDomain}`;
  // ------------------------------------

  return (
    <main className="bg-white">

      {/* PAGE HEADER — shared */}
      <section className="pt-24 pb-14 px-6 md:px-12 lg:px-20 bg-white">
        <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-stone-900 mb-6">
            Let's Connect
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-stone-600 max-w-2xl" style={{ lineHeight: '1.8' }}>
            A conversation is where every good relationship begins and I'd love to start one with you.
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
              <div style={{ display: 'flex', flexDirection: 'row', gap: '48px', alignItems: 'flex-start' }}>

                <motion.div variants={itemVariants} style={{ width: '66%' }}>
                  <h2 className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '0px' }}>
                    A Communicator at Heart
                  </h2>

                  <p className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>
                    I have always believed that good communication is the foundation of every meaningful
                    relationship. Whether it's a friendship that has lasted since kindergarten, a
                    conversation with a teammate after a tough match, or the very first hello to someone
                    I have just met. I try to listen more than I speak, to ask questions that show genuine
                    curiosity, and to make the people around me feel seen and heard.
                  </p>

                  <p className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>
                    Starting new relationships is something I genuinely enjoy. There is something exciting
                    about meeting someone with different experiences and perspectives. It always teaches me
                    something new about the world and about myself. And I believe that the relationships worth
                    having are the ones you invest in: showing up, staying in touch, and being honest even
                    when it's easier not to be.
                  </p>

                  <p className="text-lg text-stone-600" style={{ marginBottom: '32px', lineHeight: '1.8' }}>
                    As I prepare for the next chapter at a U.S. boarding school, I am looking for a
                    community of curious, kind, and driven students who share these values. I also welcome
                    admissions teams, counselors, and educators who would like to learn more about me. If
                    any of that sounds like you, please do reach out. I read every message and reply to
                    them all.
                  </p>

                  <div>
                    <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a8a29e', margin: '0px 0px 12px 0px' }}>
                      Get in touch directly
                    </p>
                    <a
                      href={`mailto:${safeEmail}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '18px',
                        fontWeight: 500,
                        color: '#C5A059',
                        textDecoration: 'none',
                        transition: 'color 0.25s ease',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = '#9E7C36')}
                      onMouseOut={(e) => (e.currentTarget.style.color = '#C5A059')}
                    >
                      <Mail size={20} strokeWidth={2} />
                      hello@alicelou.me
                    </a>
                    <p style={{ fontSize: '13px', color: '#78716c', marginTop: '8px', fontStyle: 'italic' }}>
                      I personally read and reply to every message. Please allow 2-3 business days for a response.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} style={{ width: '36%', maxWidth: '440px', position: 'sticky', top: '96px' }}>
                  <div style={{ width: '100%', marginBottom: '14px' }}>
                    <Image src="/alice-communicator.jpg" alt="Alice Lou — a communicator at heart" width={400} height={500} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} priority />
                  </div>
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>
                    Always happy to make new friends
                  </p>
                </motion.div>

              </div>
            </motion.div>
          </section>
        </>
      ) : (
        <>
          {/* ============================================ */}
          {/* MOBILE LAYOUT — image right of para 1        */}
          {/* ============================================ */}

          <section className="pb-16 px-6 bg-white">
            <motion.div className="max-w-3xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">

              <motion.h2 variants={itemVariants} className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '0px' }}>
                A Communicator at Heart
              </motion.h2>

              {/* Paragraph 1 + Image in 2 columns */}
              <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-start', marginBottom: '28px' }}>
                <p className="text-lg text-stone-600" style={{ lineHeight: '1.8', margin: 0, flex: 1 }}>
                  I have always believed that good communication is the foundation of every meaningful
                  relationship. Whether it's a friendship that has lasted since kindergarten, a
                  conversation with a teammate after a tough match, or the very first hello to someone
                  I have just met. I try to listen more than I speak, to ask questions that show genuine
                  curiosity, and to make the people around me feel seen and heard.
                </p>
                <div style={{ width: '38%', flexShrink: 0 }}>
                  <Image src="/alice-communicator.jpg" alt="Alice Lou — a communicator at heart" width={400} height={500} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} priority />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>
                    Always happy to make new friends
                  </p>
                </div>
              </motion.div>

              {/* Paragraph 2 — full width */}
              <motion.p variants={itemVariants} className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>
                Starting new relationships is something I genuinely enjoy. There is something exciting
                about meeting someone with different experiences and perspectives. It always teaches me
                something new about the world and about myself. And I believe that the relationships worth
                having are the ones you invest in: showing up, staying in touch, and being honest even
                when it's easier not to be.
              </motion.p>

              {/* Paragraph 3 — full width */}
              <motion.p variants={itemVariants} className="text-lg text-stone-600" style={{ marginBottom: '32px', lineHeight: '1.8' }}>
                As I prepare for the next chapter at a U.S. boarding school, I am looking for a
                community of curious, kind, and driven students who share these values. I also welcome
                admissions teams, counselors, and educators who would like to learn more about me. If
                any of that sounds like you, please do reach out. I read every message and reply to
                them all.
              </motion.p>

              {/* Email link — full width */}
              <motion.div variants={itemVariants}>
                <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a8a29e', margin: '0px 0px 12px 0px' }}>
                  Get in touch directly
                </p>
                <a
                  href={`mailto:${safeEmail}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: '#C5A059',
                    textDecoration: 'none',
                    transition: 'color 0.25s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#9E7C36')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#C5A059')}
                >
                  <Mail size={20} strokeWidth={2} />
                  hello@alicelou.me
                </a>
                <p style={{ fontSize: '13px', color: '#78716c', marginTop: '8px', fontStyle: 'italic' }}>
                  I personally read and reply to every message. Please allow 2-3 business days for a response.
                </p>
              </motion.div>

            </motion.div>
          </section>
        </>
      )}

      {/* CLOSING QUOTE — shared */}
      <section className="px-6 bg-white" style={{ textAlign: 'center', paddingTop: '50px', paddingBottom: '96px' }}>
        <p className="font-serif italic text-2xl md:text-3xl text-stone-700">
          "I'm fluent in English, Mandarin, and emoji ;P"
        </p>
      </section>

    </main>
  );
}