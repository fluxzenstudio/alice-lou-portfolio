// src/components/Community.tsx
"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

export default function Community() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Shared style for consistent typography across all body paragraphs
  const paraStyle = { 
    marginBottom: '28px', 
    lineHeight: '1.8', 
    fontSize: '18px', 
    color: '#57534e' // stone-600
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
          <motion.h1 
            variants={itemVariants} 
            className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-stone-900 mb-6"
          >
            Community
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className="text-lg text-stone-600 max-w-2xl"
            style={{ lineHeight: '1.8' }}
          >
            Service is not just something I do, it's how I connect with the world around me. 
            Whether it is showing up for a community in need or caring for those who cannot speak 
            for themselves, I believe that small, consistent actions create the most meaningful change. 
            This page shares my journey of learning that compassion is a verb, one that requires patience, 
            humility, and a willingness to get your hands dirty.
          </motion.p>
        </motion.div>
      </section>

      {/* STORY SECTION */}
      <section className="pb-24 px-6 md:px-12 lg:px-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <motion.div variants={itemVariants} style={{ width: '66%', margin: '0 auto' }}>
            
            {/* LEFT ALIGNED HEADING */}
            <h2 className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '0px', textAlign: 'left' }}>
              Volunteering at the Local Dog Shelter
            </h2>

            {/* UPDATED PARAGRAPH 1: Awareness & Donations */}
            <p style={paraStyle}>
              My involvement began with a simple realization: many people want to help but don't know where 
              to start. So, I took on the role of bridge-builder. I started by raising awareness among my 
              classmates and neighbors about the plight of stray dogs in Hangzhou, sharing stories and facts 
              to combat apathy. But talk is cheap if there are no resources, so I organized donation drives 
              for funds, food, blankets, and medical supplies. It wasn't always easy convincing people to part with 
              their spare change or old towels, but seeing the pile grow was incredibly motivating.
            </p>

            {/* UPDATED PARAGRAPH 2: Delivery & Interaction */}
            <p style={paraStyle}>
              Collecting donations is only half the battle; getting them to the dogs is the other. Every month, 
              I load up bags of kibble and boxes of treats and deliver them personally to the shelter. These 
              trips are my favorite because they allow me to spend time with the animals directly. I walk the 
              shy ones to build confidence, play fetch with the energetic puppies, and simply sit quietly with 
              the older dogs who just crave companionship. Watching a timid dog wag its tail for the first time 
              after weeks of gentle interaction reminds me why this work matters.
            </p>

            {/* NEW: 3-COLUMN PHOTO GRID WITH CAPTIONS */}
            <div style={{ display: 'flex', gap: '16px', margin: '40px 0', flexDirection: 'row', alignItems: 'flex-start' }}>
              
              {/* Left Photo: Delivering Donations */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', width: '100%' }}>
                  <Image
                    src="/alice-shelter-donation.jpg"
                    alt="Alice delivering donations to the shelter with her dad"
                    fill
                    sizes="(max-width: 768px) 90vw, 20vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <p style={{ fontSize: '12px', letterSpacing: '0.02em', color: '#57534e', marginTop: '10px', fontStyle: 'italic', textAlign: 'center' }}>
                  Heavy lifting, light heart. Delivering donations with Dad.
                </p>
              </div>

              {/* Center Photo: Bonding with Dog */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', width: '100%' }}>
                  <Image
                    src="/alice-dog.jpg"
                    alt="Alice bonding with a rescue dog at the shelter"
                    fill
                    sizes="(max-width: 768px) 90vw, 20vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <p style={{ fontSize: '12px', letterSpacing: '0.02em', color: '#57534e', marginTop: '10px', fontStyle: 'italic', textAlign: 'center' }}>
                  Trust isn't given, it's earned—one belly rub at a time.
                </p>
              </div>

              {/* Right Photo: Giving Attention */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', width: '100%' }}>
                  <Image
                    src="/alice-dog-shelter.jpg"
                    alt="Alice giving attention to shelter dogs"
                    fill
                    sizes="(max-width: 768px) 90vw, 20vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <p style={{ fontSize: '12px', letterSpacing: '0.02em', color: '#57534e', marginTop: '10px', fontStyle: 'italic', textAlign: 'center' }}>
                  Sometimes the best gift is just being present.
                </p>
              </div>

            </div>

            {/* UPDATED PARAGRAPH 3: The Lesson Learned */}
            <p style={paraStyle}>
              This holistic approach—combining advocacy, logistics, and direct care—has taught me that 
              sustainability comes from engagement. It’s not enough to drop off food and leave; you must 
              connect with the beneficiaries to understand their needs. When a dog who wouldn't look at you 
              on your first visit comes running to the gate when you arrive, tail wagging, you realize: 
              you are making a difference. One donation, one walk, one moment of kindness at a time.
            </p>

            {/* SECTION: Future Goals */}
            <h2 className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '40px', textAlign: 'left' }}>
              Serving the Community into the Future
            </h2>

            <p style={{ ...paraStyle, marginBottom: '0px' }}>
              Volunteering at the animal shelter taught me the value of hard work, consistency, and caring for 
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

      {/* CLOSING QUOTE */}
      <section className="px-6 bg-white" style={{ textAlign: 'center', paddingTop: '50px', paddingBottom: '96px' }}>
        <p className="font-serif italic text-2xl md:text-3xl text-stone-700">
          "The best therapy has four paws."
        </p>
      </section>
    </main>
  );
}