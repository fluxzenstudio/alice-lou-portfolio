// src/components/About.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Image from 'next/image'; // Ensure this import is present

export default function About() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const topicHeading = (isFirst: boolean) => ({
    marginTop: isFirst ? "0px" : "56px",
    marginBottom: "24px",
    fontWeight: 600,
  });

  const bodyText = {
    marginBottom: "28px",
    lineHeight: "1.8",
  };

  return (
    <div className="bg-white">
      {/* PAGE TITLE: "My Story" */}
      <section className="pt-20 px-6 md:px-12 lg:px-20">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-stone-900"
          >
            My Story
          </motion.h1>
        </motion.div>
      </section>

      {/* CONTINUOUS THREE-COLUMN STORY: photos | text | videos */}
      <section className="pt-12 pb-24 px-6 md:px-12 lg:px-20">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'flex-start' }}>

            {/* LEFT COLUMN: Photos (sticky) */}
            <motion.div variants={itemVariants} style={{ width: '26%', position: 'sticky', top: '96px' }}>
                
              {/* Optimized Family Photo (JPG) */}
              <div style={{ width: '100%', marginBottom: '36px' }}>
                <Image
                  src="/alice-family.jpg" // <--- UPDATED TO .jpg
                  alt="Alice Lou with her family"
                  width={400} 
                  height={500}
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '8px', 
                    display: 'block' 
                  }}
                  priority
                />
              </div>
              <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', textTransform: 'none', fontStyle: 'italic' }}>
                My family: my whole world
              </p>

              {/* Optimized Friends Photo */}
              <div style={{ position: 'relative', width: '100%', height: 'auto', borderRadius: '8px', overflow: 'hidden', marginTop: '36px' }}>
                <Image
                  src="/alice-friends.jpg"
                  alt="Alice Lou with her closest friends"
                  width={400}
                  height={500}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>
              <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', textTransform: 'none', fontStyle: 'italic' }}>
                With my closest friends
              </p>

              {/* Optimized Travel Photo */}
              <div style={{ position: 'relative', width: '100%', height: 'auto', borderRadius: '8px', overflow: 'hidden', marginTop: '36px' }}>
                <Image
                  src="/alice-travel.jpg"
                  alt="Alice Lou and her siblings at the Sydney Harbour Bridge in Australia"
                  width={400}
                  height={500}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>
              <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', textTransform: 'none', fontStyle: 'italic' }}>
                With my siblings in Australia
              </p>
            </motion.div>

            {/* CENTER COLUMN: All text with own-line bold headings */}
            <motion.div variants={itemVariants} style={{ width: '46%' }}>
              <h3 className="font-serif text-2xl tracking-tight text-stone-900" style={topicHeading(true)}>
                Roots in Hangzhou
              </h3>
              <p className="text-lg text-stone-600" style={bodyText}>
                While my story began in Los Angeles, California, in 2013, my heart and my home have long
                been rooted in Hangzhou, China. I grew up in a wonderfully diverse household: my father
                Werner is South African, my mother Rania is Chinese, my older sister Lisa was born in
                Hong Kong, and my younger brother Mike is American. With so many different cultural
                backgrounds under one roof, we needed a place that could embrace all of us and Hangzhou
                became exactly that.
              </p>
              <p className="text-lg text-stone-600" style={bodyText}>
                Hangzhou is a city of striking contrasts that deeply influences how I see the world.
                It is famous for the serene, poetic beauty of West Lake, where weeping willows dip into
                the lake and ancient pagodas rise in the distance. Yet, just minutes away from the
                tranquil tea plantations of Longjing, Hangzhou is also a bustling hub of modern technology
                and innovation. Growing up here has taught me to appreciate the delicate balance between
                preserving history and embracing the future. I love spending weekends hiking the lush
                green hills surrounding the city or walking along the tree-lined streets that make this
                city feel like a giant garden.
              </p>
              <p className="text-lg text-stone-600" style={bodyText}>
                For my family, Hangzhou is the unifier. It is where my parents built a life together,
                where my siblings and I have formed our closest friendships, and where our diverse heritage
                blends into the local culture. The warmth of the local community and the
                deep-rooted traditions of the region have given me a strong sense of identity and belonging.
              </p>
              <p className="text-lg text-stone-600" style={bodyText}>
                Beyond its natural beauty, Hangzhou is an incredible gateway to the wider world. Thanks to
                its world-class high-speed rail network and international airport, it serves as the perfect
                base for exploration. From here, my family and I have traveled across China, ventured through
                the rest of Asia, and journeyed even further beyond. These travels have instilled in me a
                deep curiosity about different cultures and a profound appreciation for the vastness of the
                world I am just beginning to explore.
              </p>

              <h3 className="font-serif text-2xl tracking-tight text-stone-900" style={topicHeading(false)}>
                Friends Who Feel Like Family
              </h3>
              <p className="text-lg text-stone-600" style={bodyText}>
                Some of my closest friends are the same children I shared crayons with in kindergarten.
                Because I have attended Hangzhou International School since PreK, my friendships have had
                years to grow, from classroom peers to lifelong friends.
              </p>
              <p className="text-lg text-stone-600" style={bodyText}>
                My friends come from all over the world, and our differences are what make our time together
                so rich: we share food, languages, festivals, and perspectives. Whether we are studying for
                a test, hiking the hills around West Lake, or laughing over snacks after school, I have
                learned that true friendship is built on showing up for each other, again and again.
              </p>

              <h3 className="font-serif text-2xl tracking-tight text-stone-900" style={topicHeading(false)}>
                The World Is My Classroom
              </h3>
              <p className="text-lg text-stone-600" style={bodyText}>
                Travel is how my family learns about the world together. From our home base in Hangzhou,
                with its high-speed trains and international airport, we have journeyed across China,
                through Asia, and to far beyond.
              </p>
              <p className="text-lg text-stone-600" style={bodyText}>
                I've been fortunate enough to travel widely. From Australia and Switzerland to Italy,
                Malaysia, Hawaii, California, and the Philippines. Each place has taught me something no
                classroom could: how to navigate unfamiliar streets, taste foods I'd never heard of, dance
                to music in languages I don't speak, and find my way through conversations in broken phrases
                and hand gestures.
              </p>
              <p className="text-lg text-stone-600" style={bodyText}>
                But the biggest lesson came not from the places themselves, but from the
                people I met along the way. Spending time with friends from Korea, Germany, Brazil, Japan, 
                and everywhere in between, I discovered something that surprised me: even though we look different 
                on the outside and grow up in different cultures, we're often the same on the inside. We all care 
                about love and friendship, we all worry about fitting in, we all laugh at the same silly jokes. 
                Our differences are small but our similarities are huge. That realization has shaped how I see 
                the world and how I want to contribute to it.
              </p>

              <h3 className="font-serif text-2xl tracking-tight text-stone-900" style={topicHeading(false)}>
                Always in Motion
              </h3>
              <p className="text-lg text-stone-600" style={bodyText}>
                When I am not studying, I am usually outside and moving. One of my favorite rituals is
                cycling along the Qiantang River with my younger brother Mike — wind in our faces and the
                city skyline glinting in the distance.
              </p>
              <p className="text-lg text-stone-600" style={bodyText}>
                Table tennis training and music practice fill my weeks with rhythm and discipline, but some
                of my happiest moments are the simple ones: a bike ride by the river, a family walk around
                West Lake, or a pickup game with friends. Staying active keeps my mind clear and my spirit light.
              </p>
            </motion.div>

            {/* RIGHT COLUMN: Videos (sticky) */}
            <motion.div variants={itemVariants} style={{ width: '24%', position: 'sticky', top: '96px' }}>
              
              {/* Replaced YouTube Iframe with Local Video */}
              <video
                src="/hangzhou-video.mp4"
                controls
                playsInline
                preload="metadata"
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '8px', 
                  display: 'block',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.10)'
                }}
              />
              <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', textTransform: 'none', fontStyle: 'italic' }}>
                My hometown: Hangzhou, China
            </p>

              <video
                src="/alice-bicycle.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block', marginTop: '36px' }}
              />
              <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', textTransform: 'none', fontStyle: 'italic' }}>
                Cycling with my brother, Mike, along the Qiantang River
              </p>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* SWITZERLAND SKI CAMP SECTION */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-stone-50">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 variants={itemVariants} className="font-serif text-4xl font-normal tracking-tight text-stone-900 mb-12">
            First Time on Snow: Les Elfes Ski Camp, Switzerland
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '48px', alignItems: 'flex-start' }}>
            
            {/* LEFT: Photo (sticky, smaller) */}
            <motion.div variants={itemVariants} style={{ width: '24%', maxWidth: '320px', position: 'sticky', top: '96px' }}>
               <div style={{ position: 'relative', width: '100%', height: 'auto', borderRadius: '8px', overflow: 'hidden' }}>
                 <Image
                   src="/alice-switzerland-les-elfes-skiing.jpg"
                   alt="Alice skiing at Les Elfes Ski Camp in Switzerland"
                   width={320}
                   height={400}
                   style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                 />
               </div>
              <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', textTransform: 'none', fontStyle: 'italic' }}>
                December 2025 · Les Elfes Ski Camp, Switzerland
              </p>
            </motion.div>

            {/* RIGHT: Story + Certificate Link */}
            <motion.div variants={itemVariants} style={{ width: '68%' }}>
              
              <p className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8', marginTop: '0px' }}>
                In December 2025, I did something I had never done before. I boarded a plane all by myself,
                flew over 9,000 kilometers to Switzerland, and spent two weeks at Les Elfes Ski Camp. All of this
                without my parents, without any adult I already knew, and without ever having stood on
                a pair of skis. I have always had a fear of heights, and the idea of strapping long boards
                to my feet and sliding down a mountain felt completely terrifying. But I wanted to prove
                to myself that I could face challenges and overcome it.
              </p>

              <p className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>
                The first few days were humbling. I fell more times than I can count, my legs ached in
                places I didn't know existed, and every time I looked down the slope my stomach took a
                turn. But I kept showing up. I listened carefully to my coach, watched the
                more advanced skiers, and practiced until the movements started to feel less like survival
                and more like flying. Amazingly, the end of the week, I had progressed from a total beginner to
                a Level 2.5 skier. More importantly, I had learned that fear doesn't disappear; you
                just get better at managing it.
              </p>

              <p className="text-lg text-stone-600" style={{ marginBottom: '32px', lineHeight: '1.8' }}>
                Beyond the skiing, the camp gave me something I'll carry for the rest of my life: the
                confidence that I can drop myself into a completely unfamiliar place, a different country,
                a different language, a different group of people and still find my way. I met
                students from all over the world, shared meals in a language that wasn't always my own,
                and learned that asking for help is just as important as being brave. As a bonus I learnt that 
                skiing is actually a whole lot of fun and I can't wait to get back on a snowy mountain again.
              </p>

              <button
                className="cert-link"
                onClick={() => setLightboxImage('/alice-ski-certificate.jpg')}
              >
                <ArrowRight className="cert-arrow" size={18} strokeWidth={2} />
                View my Les Elfes ski certificate
              </button>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* FUTURE GOALS SECTION */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Heading moved OUTSIDE the flex row so it doesn't push the columns down */}
          <motion.h2 
            variants={itemVariants} 
            className="font-serif text-4xl font-normal tracking-tight text-stone-900 mb-8"
            style={{ marginTop: '30px' }}
          >
            Looking Ahead
          </motion.h2>

          {/* Two-column layout starts here */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: '48px', alignItems: 'flex-start' }}>
            
            {/* LEFT: Story (fills remaining space) */}
            <motion.div variants={itemVariants} style={{ flex: 1 }}>
              
              <p className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8', marginTop: '0px' }}>
                Though I was born in Los Angeles, California, and hold American citizenship, I spent
                almost my entire life growing up outside the United States. Living in China, traveling the
                world, and attending an international school have given me a global perspective that I am
                deeply grateful for. But as I look toward the future, I feel a strong pull to return to my
                American roots, to live, study, and eventually contribute to the country that is, on paper
                and in my heart, my home.
              </p>

              <p className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>
                My dream is to become a lawyer or work in public service. Growing up between cultures has
                shown me how much the world needs people who can bridge divides and who understand different
                perspectives, speak more than one language, and care deeply about justice and fairness. I
                want to use my voice and my education to advocate for people who don't always have someone
                in their corner, whether that means working in civil rights, immigration law, or community
                advocacy.
              </p>

              <p className="text-lg text-stone-600" style={{ marginBottom: '0px', lineHeight: '1.8' }}>
                Attending a U.S. boarding school for Grade 9 is the first step on this journey. I am looking
                for a school that will challenge me academically, push me to grow as a person, and surround
                me with curious, kind, and driven peers. From there, I hope to attend a top university in
                the United States where I can study law, political science, or public policy and build the
                foundation I need to make a real difference. I know the road is long, but I also know that
                every big journey starts with one brave step. This is mine.
              </p>
            </motion.div>

            {/* RIGHT: Photo (sticky, smaller size) */}
            <motion.div variants={itemVariants} style={{ width: '16%', position: 'sticky', top: '96px' }}>
              <div style={{ position: 'relative', width: '100%', height: 'auto', borderRadius: '8px', overflow: 'hidden' }}>
                <Image
                  src="/alice-looking-future.png"
                  alt="Alice looking toward the future"
                  width={200}
                  height={300}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>
              <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', textTransform: 'none', fontStyle: 'italic' }}>
                Looking forward to what's next
              </p>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* CLOSING BAND */}
      <section className="py-24 px-6 bg-white" style={{ textAlign: 'center', paddingTop: '200px', paddingBottom: '96px' }}>
        <p className="font-serif italic text-2xl md:text-3xl text-stone-700">
          "Today is the first day of the rest of my life."
        </p>
      </section>

      {/* LIGHTBOX */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
          onClick={() => setLightboxImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(12, 10, 9, 0.85)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px',
            cursor: 'zoom-out',
          }}
        >
          {/* Optimized Lightbox Image */}
          <div 
            style={{ position: 'relative', maxWidth: '90%', maxHeight: '85vh', width: '100%', height: '100%', cursor: 'default' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="Certificate"
              fill
              sizes="(max-width: 768px) 90vw, 80vw"
              style={{ objectFit: 'contain', borderRadius: '8px', boxShadow: '0 24px 80px rgba(0, 0, 0, 0.5)' }}
            />
          </div>
          
          <button
            className="lightbox-close"
            onClick={() => setLightboxImage(null)}
            aria-label="Close preview"
            style={{
              position: 'absolute',
              top: '24px',
              right: '32px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
              zIndex: 101,
            }}
          >
            <X size={20} strokeWidth={2} />
          </button>
          <p style={{ position: 'absolute', bottom: '20px', left: 0, right: 0, textAlign: 'center', color: 'rgba(255, 255, 255, 0.6)', fontSize: '13px', letterSpacing: '0.08em', margin: 0 }}>
            Click anywhere or press Esc to close
          </p>
        </motion.div>
      )}
    </div>
  );
}