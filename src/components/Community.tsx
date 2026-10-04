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
            
            <h2 className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '0px' }}>
              Volunteering at the Local Dog Shelter
            </h2>

            <p 
              className="text-lg text-stone-600" 
              style={{ marginBottom: '28px', lineHeight: '1.8' }}
            >
              China has a stray dog problem that most people don't see. Millions of dogs roam the streets 
              of cities like Hangzhou, abandoned, lost, or born into lives of hardship. Many of them end 
              up in shelters that are overcrowded and underfunded, struggling to provide basic care. Some 
              face an even darker fate: the illegal meat trade, where rescued dogs are sold and slaughtered 
              despite growing public opposition and animal welfare laws.
            </p>

            <p 
              className="text-lg text-stone-600" 
              style={{ marginBottom: '28px', lineHeight: '1.8' }}
            >
              I started volunteering at a local dog shelter because I couldn't ignore what was happening 
              just outside my door. Every second weekend, I help clean kennels, feed dogs, walk them, and 
              socialize with the ones who are scared or shy. Some of them have been through things no 
              animal should endure, abuse, neglect, or the trauma of being rescued from the meat market. 
              Watching them learn to trust humans again is one of the most rewarding experiences of my life.
            </p>

            <p 
              className="text-lg text-stone-600" 
              style={{ marginBottom: '28px', lineHeight: '1.8' }}
            >
              This work has taught me that compassion isn't just a feeling, it's action. It's showing up 
              even when it's messy, even when it's hard, even when you're not sure you're making a 
              difference. But then a dog who wouldn't look at you on your first visit comes running to 
              the gate when you arrive, tail wagging, and you realize: you are making a difference. One 
              dog at a time.
            </p>

            {/* OPTIMIZED PHOTO GALLERY: 3 Columns matching text width */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '16px', marginBottom: '48px' }}>
              
              {/* Photo 1 */}
              <div style={{ flex: 1, position: 'relative', aspectRatio: '4 / 3', borderRadius: '8px', overflow: 'hidden' }}>
                <Image
                  src="/dog-shelter1.webp"
                  alt="Alice volunteering at the dog shelter"
                  fill
                  sizes="(max-width: 768px) 90vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Photo 2 */}
              <div style={{ flex: 1, position: 'relative', aspectRatio: '4 / 3', borderRadius: '8px', overflow: 'hidden' }}>
                <Image
                  src="/dog-shelter2.webp"
                  alt="Alice interacting with shelter dogs"
                  fill
                  sizes="(max-width: 768px) 90vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Photo 3 */}
              <div style={{ flex: 1, position: 'relative', aspectRatio: '4 / 3', borderRadius: '8px', overflow: 'hidden' }}>
                <Image
                  src="/dog-shelter3.webp"
                  alt="Alice feeding dogs at the shelter"
                  fill
                  sizes="(max-width: 768px) 90vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

            </div>

            {/* NEW SECTION: Future Goals */}
            <h2 className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '0px' }}>
              Serving the Community into the Future
            </h2>

            <p 
              className="text-lg text-stone-600" 
              style={{ marginBottom: '0px', lineHeight: '1.8' }}
            >
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