// src/components/Community.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Image from 'next/image';

export default function Community() {
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

  // Shared text constants to guarantee 100% match between mobile and desktop
  const headerText = "Helping out is not just something I do, it is how I connect with the world around me. Whether I am supporting a community in need or caring for animals who cannot speak for themselves, I believe that small, consistent actions create the most meaningful change. This page shares my journey of learning that compassion takes real work, patience, and a willingness to get your hands dirty.";

  const classmateIntro = "Long before I started volunteering at the animal shelter, I was already learning how to help others right here in my own classroom. I have always believed that a classroom works best when everyone supports each other. Whether it was helping a friend understand a tricky math problem, sharing my notes, or just being someone people could talk to, I tried to be there for my classmates. This commitment to helping others is something I am really proud of, and it is exactly why I was so honored to receive multiple Dragon Awards from my teachers and peers over the years. Those awards reminded me that kindness and teamwork are just as important as getting good grades.";

  const paragraph1 = "My involvement started back in Grade 5 with a simple realization: many people want to help, but they do not know where to start. So, I decided to be the one to connect them. I started by raising awareness among my classmates and neighbors about the stray dogs in Hangzhou, sharing stories and facts to show why it matters. But talking is not enough if there are no resources, so I organized donation drives for funds, food, blankets, and medical supplies. It was not always easy convincing people to give up their spare change or old towels, but seeing the donation pile grow was incredibly motivating.";

  const paragraph2 = "Collecting donations is only half the battle, and getting them to the dogs is the other half. Every month, I load up bags of kibble and boxes of treats and deliver them personally to the shelter. These trips are my absolute favorite because they let me spend time with the animals directly. I walk the shy ones to help them build confidence, play fetch with the energetic puppies, and simply sit quietly with the older dogs who just want some company. Watching a timid dog wag its tail for the first time after weeks of gentle interaction reminds me exactly why this work matters.";

  const paragraph3 = "Doing all of this, from organizing drives to giving direct care, has taught me that you have to really engage to make a difference. It is not enough to just drop off food and leave. You have to connect with the animals to understand what they need. When a dog who would not even look at you on your first visit comes running to the gate when you arrive, tail wagging, you realize you are actually making a difference. It happens one donation, one walk, and one moment of kindness at a time.";

  const paragraph4 = "Volunteering at the animal shelter taught me the value of hard work, consistency, and caring for those who cannot care for themselves. As I prepare for a future in law and public service, I feel a strong calling to apply that same sense of duty toward helping people in my community. At my future boarding school, I am eager to get involved in initiatives that support others, like tutoring students who are falling behind or helping with food drives for families facing hard times. I believe that true public service is about rolling up your sleeves and doing the practical work needed to strengthen our neighborhoods. I want to focus my energy on making a real, positive difference in the lives of the people around me.";

  const caption1 = "Spreading the word, one conversation at a time.";
  const caption2 = "Heavy lifting, light heart. Delivering donations with Dad.";
  const caption3 = "Sometimes the best gift is just being present.";

  // Dragon Awards data reused from Academics
  const dragonAwards = [
    { date: "June 2018", text: "Alice is a caring student, who shows empathy, compassion and respect towards the needs and feelings of others. These attributes have secured Alice many positive peer relationships and she is a well-liked and respected member of our class.", image: "/alice-june2018.jpg" },
    { date: "February 2019", text: "Alice is an inquirer and an excellent communicator. She speaks with confidence, expressing her curiosity and understanding with others.", image: "/alice-feb2019.jpg" },
    { date: "May 2021", text: "Alice is a great example of a knowledgeable student. She has a clear understanding of many topics. She is happy to share this knowledge with her peers. Also, she is always willing to develop her understanding further, asking questions and researching new information. Alice can then relate her knowledge to the new ideas we learn in class.", image: "/alice-may2021.jpg" },
    { date: "April 2022", text: "Alice is receiving a Dragon Award for always being kind and caring. Alice is a principled student, and she is eager to learn and assist others. I am proud to have Alice in my class.", image: "/alice-apr2022.jpg" },
    { date: "October 2022", text: "Alice was selected by her peers for this Dragon Award for being caring. From the beginning of the school year, she has supported numerous classmates at her table with spelling, writing, and math. Additionally, she has volunteered to create posters to aid our class with learning tools. When performing her bookclub artistic artist job, she is diligent with the process and the finished product. Thanks, Alice, for your compassion that has helped our 4C community be successful!", image: "/alice-oct2022.jpg" },
    { date: "April 2023", text: "Throughout your work in our Explorers unit, you have been very open-minded in your explorations of different perspectives. This is a natural skill of yours and you are continuing to develop your open-mindedness.", image: "/alice-apr2023.jpg" },
    { date: "November 2023", text: "Student Council. The Student Council Mission is to include everyone in our community by making HIS feel like a kind, comfortable, and safe place where every student is welcomed and accepted for who they are. We value taking action towards making healthy change in our community.", image: "/alice-nov2023.jpg" },
  ];

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

      {/* PAGE HEADER - shared */}
      <section className="pt-24 pb-14 px-6 md:px-12 lg:px-20 bg-white">
        <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-stone-900 mb-6">
            Community
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

                {/* NEW SECTION: Being a Good Classmate */}
                <h2 className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '0px', textAlign: 'left' }}>
                  Being a Good Classmate
                </h2>

                <motion.p variants={itemVariants} style={paraStyle}>
                  {classmateIntro}
                </motion.p>

                <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '28px' }}>
                  <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a8a29e', margin: '0px 0px 16px 0px' }}>
                    Click an award date to view its certificate
                  </p>
                  {dragonAwards.map((a, index) => (
                    <button key={index} className="cert-link" style={{ width: '100%' }} onClick={() => a.image && setLightboxImage(a.image)}>
                      <ArrowRight className="cert-arrow" size={18} strokeWidth={2} />
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start' }}>
                        <span style={{ fontWeight: 600, color: '#C5A059', fontSize: '16px' }}>{a.date}</span>
                        <span style={{ fontSize: '15px', color: '#57534e', lineHeight: '1.7', textAlign: 'left' }}>{a.text}</span>
                      </span>
                    </button>
                  ))}
                </motion.div>

                {/* EXISTING SECTION: Volunteering at the Local Dog Shelter */}
                <h2 className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '64px', textAlign: 'left' }}>
                  Volunteering at the Local Dog Shelter
                </h2>

                <motion.p variants={itemVariants} style={paraStyle}>
                  {paragraph1}
                </motion.p>

                <motion.p variants={itemVariants} style={paraStyle}>
                  {paragraph2}
                </motion.p>

                {/* 3-column grid */}
                <div style={{ display: 'flex', gap: '16px', margin: '40px 0', flexDirection: 'row', alignItems: 'flex-start' }}>

                  {/* 1. Raising Awareness */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', width: '100%' }}>
                      <Image src="/alice-raising-awareness.jpg" alt="Alice raising awareness about stray dogs in Hangzhou" fill sizes="(max-width: 768px) 90vw, 20vw" style={{ objectFit: 'cover' }} />
                    </div>
                    <p style={{ fontSize: '12px', letterSpacing: '0.02em', color: '#57534e', marginTop: '10px', fontStyle: 'italic', textAlign: 'center' }}>
                      {caption1}
                    </p>
                  </div>

                  {/* 2. Donation Delivery */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', width: '100%' }}>
                      <Image src="/alice-shelter-donation.jpg" alt="Alice delivering donations to the shelter with her dad" fill sizes="(max-width: 768px) 90vw, 20vw" style={{ objectFit: 'cover' }} />
                    </div>
                    <p style={{ fontSize: '12px', letterSpacing: '0.02em', color: '#57534e', marginTop: '10px', fontStyle: 'italic', textAlign: 'center' }}>
                      {caption2}
                    </p>
                  </div>

                  {/* 3. Being Present */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', width: '100%' }}>
                      <Image src="/alice-dog-shelter.jpg" alt="Alice giving attention to shelter dogs" fill sizes="(max-width: 768px) 90vw, 20vw" style={{ objectFit: 'cover' }} />
                    </div>
                    <p style={{ fontSize: '12px', letterSpacing: '0.02em', color: '#57534e', marginTop: '10px', fontStyle: 'italic', textAlign: 'center' }}>
                      {caption3}
                    </p>
                  </div>
                </div>

                <motion.p variants={itemVariants} style={paraStyle}>
                  {paragraph3}
                </motion.p>

                <h2 className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '40px', textAlign: 'left' }}>
                  Serving the Community into the Future
                </h2>

                <motion.p variants={itemVariants} style={{ ...paraStyle, marginBottom: '0px' }}>
                  {paragraph4}
                </motion.p>

              </motion.div>
            </motion.div>
          </section>
        </>
      ) : (
        <>
          {/* MOBILE LAYOUT */}

          <section className="pb-16 px-6 bg-white">
            <motion.div className="max-w-3xl mx-auto text-left" variants={containerVariants} initial="hidden" animate="visible">

              {/* NEW SECTION: Being a Good Classmate */}
              <motion.h2 variants={itemVariants} className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '0px', textAlign: 'left' }}>
                Being a Good Classmate
              </motion.h2>

              <motion.p variants={itemVariants} style={paraStyle}>
                {classmateIntro}
              </motion.p>

              <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '28px' }}>
                <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a8a29e', margin: '0px 0px 16px 0px' }}>
                  Click an award date to view its certificate
                </p>
                {dragonAwards.map((a, index) => (
                  <button key={index} className="cert-link" style={{ width: '100%' }} onClick={() => a.image && setLightboxImage(a.image)}>
                    <ArrowRight className="cert-arrow" size={18} strokeWidth={2} />
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start' }}>
                      <span style={{ fontWeight: 600, color: '#C5A059', fontSize: '16px' }}>{a.date}</span>
                      <span style={{ fontSize: '15px', color: '#57534e', lineHeight: '1.7', textAlign: 'left' }}>{a.text}</span>
                    </span>
                  </button>
                ))}
              </motion.div>

              {/* EXISTING SECTION: Volunteering at the Local Dog Shelter */}
              <motion.h2 variants={itemVariants} className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '64px', textAlign: 'left' }}>
                Volunteering at the Local Dog Shelter
              </motion.h2>

              {/* Position 1: Raising Awareness */}
              <motion.div variants={itemVariants} style={centeredPhoto}>
                <div style={{ maxWidth: '400px', width: '100%' }}>
                  <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', width: '100%' }}>
                    <Image src="/alice-raising-awareness.jpg" alt="Alice raising awareness about stray dogs in Hangzhou" fill sizes="(max-width: 768px) 90vw, 50vw" style={{ objectFit: 'cover' }} />
                  </div>
                  <p style={{ fontSize: '12px', letterSpacing: '0.02em', color: '#57534e', marginTop: '10px', fontStyle: 'italic', textAlign: 'center' }}>
                    {caption1}
                  </p>
                </div>
              </motion.div>

              <motion.p variants={itemVariants} style={paraStyle}>
                {paragraph1}
              </motion.p>

              {/* Position 2: Donation Delivery */}
              <motion.div variants={itemVariants} style={centeredPhoto}>
                <div style={{ maxWidth: '400px', width: '100%' }}>
                  <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', width: '100%' }}>
                    <Image src="/alice-shelter-donation.jpg" alt="Alice delivering donations to the shelter with her dad" fill sizes="(max-width: 768px) 90vw, 50vw" style={{ objectFit: 'cover' }} />
                  </div>
                  <p style={{ fontSize: '12px', letterSpacing: '0.02em', color: '#57534e', marginTop: '10px', fontStyle: 'italic', textAlign: 'center' }}>
                    {caption2}
                  </p>
                </div>
              </motion.div>

              <motion.p variants={itemVariants} style={paraStyle}>
                {paragraph2}
              </motion.p>

              {/* Position 3: Being Present */}
              <motion.div variants={itemVariants} style={centeredPhoto}>
                <div style={{ maxWidth: '400px', width: '100%' }}>
                  <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', width: '100%' }}>
                    <Image src="/alice-dog-shelter.jpg" alt="Alice giving attention to shelter dogs" fill sizes="(max-width: 768px) 90vw, 50vw" style={{ objectFit: 'cover' }} />
                  </div>
                  <p style={{ fontSize: '12px', letterSpacing: '0.02em', color: '#57534e', marginTop: '10px', fontStyle: 'italic', textAlign: 'center' }}>
                    {caption3}
                  </p>
                </div>
              </motion.div>

              <motion.p variants={itemVariants} style={paraStyle}>
                {paragraph3}
              </motion.p>

              <motion.h2 variants={itemVariants} className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '40px', textAlign: 'left' }}>
                Serving the Community into the Future
              </motion.h2>

              <motion.p variants={itemVariants} style={{ ...paraStyle, marginBottom: '0px' }}>
                {paragraph4}
              </motion.p>

            </motion.div>
          </section>
        </>
      )}

      {/* CLOSING QUOTE - shared */}
      <section className="px-6 bg-white" style={{ textAlign: 'center', paddingTop: '50px', paddingBottom: '96px' }}>
        <p className="font-serif italic text-2xl md:text-3xl text-stone-700">
          "The best therapy has four paws."
        </p>
      </section>

      {/* LIGHTBOX - shared */}
      {lightboxImage && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          role="dialog" 
          aria-modal="true" 
          aria-label="Certificate preview" 
          onClick={() => setLightboxImage(null)} 
          style={{ 
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
            backgroundColor: 'rgba(12,10,9,0.85)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', 
            zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px', cursor: 'zoom-out' 
          }}
        >
          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '85vh', width: '100%', height: '100%', cursor: 'default' }} onClick={(e) => e.stopPropagation()}>
            <Image src={lightboxImage} alt="Award certificate" fill sizes="(max-width: 768px) 90vw, 80vw" style={{ objectFit: 'contain', borderRadius: '8px', boxShadow: '0 24px 80px rgba(0,0,0,0.5)' }} />
          </div>
          <button 
            className="lightbox-close" 
            onClick={() => setLightboxImage(null)} 
            aria-label="Close preview" 
            style={{ 
              position: 'absolute', top: '24px', right: '32px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', 
              borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
              color: '#ffffff', cursor: 'pointer', zIndex: 101 
            }}
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