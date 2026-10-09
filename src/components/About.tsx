// src/components/About.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Image from 'next/image';

export default function About() {
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
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Shared text constants to guarantee 100% match between mobile and desktop
  const rootsParagraphs = [
    "I was born in Los Angeles in 2013, but I have lived in Hangzhou, China, for basically my whole life. This is my home.",
    "My family is kind of like a mini United Nations. My dad Werner is from South Africa, my mom Rania is Chinese, my older sister Lisa was born in Hong Kong, and my little brother Mike is American. With all those different backgrounds mixed together, we needed a place where everyone felt like they belonged, and Hangzhou became exactly that place.",
    "I love this city because it is never boring. One weekend, my family and I can be walking around West Lake, watching the willow trees dip into the water and spotting old pagodas in the distance. The next weekend, we might be hiking the green hills behind Longjing village where they grow tea, and I can smell the leaves drying in the sun. But then you turn a corner and suddenly you are in the middle of all these glass skyscrapers and buzzing e-bikes. Old and new, quiet and loud, it is all mixed together, and I think that is really cool.",
    "Hangzhou is where my parents built their life, where my siblings and I grew up, and where I have made my best friends. It is the place that made our wonderfully mixed-up family feel totally normal."
  ];

  const friendsParagraphs = [
    "I have been at Hangzhou International School since PreK. That means some of my closest friends are the exact same kids I shared crayons with when I was four. We have basically grown up together.",
    "My friends are from everywhere, like Korea, Germany, Brazil, and Japan. We swap snacks, teach each other words in different languages, and celebrate each other's holidays. Last week we might be studying for a math test, and this week we could be hiking around West Lake or sharing bubble tea after school.",
    "I think the thing I love most about my friend group is that we do not pretend to be the same. We are different, and that makes everything more interesting. But underneath it all, we worry about the same stuff, laugh at the same silly jokes, and just want to feel like we belong. I have learned that friendship is not about being identical. It is about showing up for each other, again and again."
  ];

  const travelParagraphs = [
    "My family loves to travel, and because Hangzhou has great high-speed trains and a big airport, we take off whenever we get the chance.",
    "So far, I have been lucky enough to visit Australia, Switzerland, Italy, Malaysia, Hawaii, California, and the Philippines. Every trip teaches me something a textbook never could. I learn how to figure out a subway map in a city where I cannot read the signs, how to order food when I do not speak the language, and how to dance to music even when I do not know the words.",
    "But honestly, the best part of traveling is not the places, it is the people. I have made friends in so many different countries, and the thing that always surprises me is how similar we all are. We all want friends. We all get nervous about fitting in. We all think silly jokes are funny. Our differences are small, but our similarities are huge."
  ];

  const motionParagraphs = [
    "When I am not studying or practicing table tennis, I am usually outside doing something active. One of my favorite things is riding my bike along the Qiantang River with my little brother Mike. When the wind hits our faces and the city skyline sparkles in the background, it is the best feeling.",
    "Some of my happiest moments are not the big ones, they are the simple ones. A family walk around West Lake after dinner. A pickup game with friends at the park. The sound of my paddle hitting the ball just right during practice. I like staying busy because it keeps my head clear and makes me happy."
  ];

  const switzerlandParagraphs = [
    "Last December, I did something totally crazy. I got on a plane all by myself and flew all the way to Switzerland for two weeks at a place called Les Elfes Ski Camp. My parents did not come with me, I did not know a single adult there, and I had literally never been on skis before. I am actually really scared of heights, so the idea of strapping long boards to my feet and sliding down a huge mountain was completely terrifying. But I really wanted to prove to myself that I could face hard things and get past them.",
    "The first few days were pretty rough. I fell so many times I lost count. My legs hurt in places I did not even know I had muscles, and every time I looked down the hill my stomach did this weird flip. But I kept going back out there. I listened to my coach, watched the kids who were already really good, and just kept practicing. Eventually, it stopped feeling like I was just trying not to crash and started feeling like I was actually flying. By the end of the first week, I somehow went from a total beginner to a Level 2.5 skier, which was pretty awesome. The biggest thing I learned is that being scared does not just magically go away. You just get better at handling it.",
    "Besides the skiing, the camp gave me a lot of confidence. It showed me that I can go to a totally new country where people speak a different language and still figure things out. I met kids from all over the world. We ate meals together and tried to talk even when we did not speak the same language perfectly. I also learned that asking for help is just as brave as trying to do everything yourself. Oh, and as a bonus, skiing is actually super fun! I really cannot wait to go back to a snowy mountain again."
  ];

  const lookingAheadParagraphs = [
    "Even though I was born in Los Angeles and hold American citizenship, I have spent almost my entire life growing up outside the United States. Living in China, traveling the world, and attending an international school have given me a global perspective that I am deeply grateful for. But as I look toward the future, I feel a strong pull to return to my American roots. I want to live, study, and eventually contribute to the country that is, on paper and in my heart, my home.",
    "I want to study law or work in public service because I have seen how messy things get when people do not understand each other. Living in different countries taught me that most arguments start just because of bad communication. I hope to become a lawyer or mediator one day to help people actually listen to each other. Whether it is settling a family argument or helping neighbors get along, I believe real change happens when we create spaces where different viewpoints can exist peacefully, rather than forcing everyone to agree.",
    "Attending a U.S. boarding school for ninth grade is the first step on this journey. I am looking for a school that will challenge me academically, push me to grow as a person, and surround me with curious, kind, and driven peers. From there, I hope to attend a top university in the United States where I can study law, political science, or public policy and build the foundation I need to make a real difference. I know the road is long, but I also know that every big journey starts with one brave step. This is mine."
  ];

  const topicHeading = (isFirst: boolean) => ({
    marginTop: isFirst ? "0px" : "56px",
    marginBottom: "24px",
    fontWeight: 600,
  });

  const bodyText = {
    marginBottom: "28px",
    lineHeight: "1.8",
  };

  const centeredMedia = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "28px",
    marginTop: "8px",
  };

  return (
    <div className="bg-white">

      {/* PAGE TITLE */}
      <section className="pt-20 px-6 md:px-12 lg:px-20">
        <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-stone-900">
            My Story
          </motion.h1>
        </motion.div>
      </section>

      {isDesktop ? (
        <>
          {/* ========== DESKTOP ========== */}

          {/* THREE-COLUMN STORY */}
          <section className="pt-12 pb-24 px-6 md:px-12 lg:px-20">
            <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'flex-start' }}>

                <motion.div variants={itemVariants} style={{ width: '26%', position: 'sticky', top: '96px' }}>
                  <div style={{ width: '100%', marginBottom: '36px' }}>
                    <Image src="/alice-family.jpg" alt="Alice Lou with her family" width={400} height={500} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} priority />
                  </div>
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>My family: my whole world</p>
                  <div style={{ position: 'relative', width: '100%', borderRadius: '8px', overflow: 'hidden', marginTop: '36px' }}>
                    <Image src="/alice-friends.jpg" alt="Alice Lou with her closest friends" width={400} height={500} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                  </div>
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>With my closest friends</p>
                  <div style={{ position: 'relative', width: '100%', borderRadius: '8px', overflow: 'hidden', marginTop: '36px' }}>
                    <Image src="/alice-travel.jpg" alt="Alice Lou and her siblings at the Sydney Harbour Bridge in Australia" width={400} height={500} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                  </div>
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>With my siblings in Australia</p>
                </motion.div>

                <motion.div variants={itemVariants} style={{ width: '46%' }}>
                  <h3 className="font-serif text-2xl tracking-tight text-stone-900" style={topicHeading(true)}>Roots in Hangzhou</h3>
                  {rootsParagraphs.map((paragraph, index) => (
                    <motion.p key={index} variants={itemVariants} className="text-lg text-stone-600" style={bodyText}>
                      {paragraph}
                    </motion.p>
                  ))}

                  <h3 className="font-serif text-2xl tracking-tight text-stone-900" style={topicHeading(false)}>Friends Who Feel Like Family</h3>
                  {friendsParagraphs.map((paragraph, index) => (
                    <motion.p key={index} variants={itemVariants} className="text-lg text-stone-600" style={bodyText}>
                      {paragraph}
                    </motion.p>
                  ))}

                  <h3 className="font-serif text-2xl tracking-tight text-stone-900" style={topicHeading(false)}>The World Is My Classroom</h3>
                  {travelParagraphs.map((paragraph, index) => (
                    <motion.p key={index} variants={itemVariants} className="text-lg text-stone-600" style={bodyText}>
                      {paragraph}
                    </motion.p>
                  ))}
                  
                  <h3 className="font-serif text-2xl tracking-tight text-stone-900" style={topicHeading(false)}>Always in Motion</h3>
                  {motionParagraphs.map((paragraph, index) => (
                    <motion.p key={index} variants={itemVariants} className="text-lg text-stone-600" style={bodyText}>
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>

                <motion.div variants={itemVariants} style={{ width: '24%', position: 'sticky', top: '96px' }}>
                  <video src="/hangzhou-video.mp4" controls playsInline preload="metadata" style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block', boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }} />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>My hometown: Hangzhou, China</p>
                  <video src="/alice-bicycle.mp4" autoPlay muted loop playsInline style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block', marginTop: '36px' }} />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>Cycling with my brother, Mike, along the Qiantang River</p>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* SWITZERLAND */}
          <section className="py-20 px-6 md:px-12 lg:px-20 bg-stone-50">
            <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h2 variants={itemVariants} className="font-serif text-4xl font-normal tracking-tight text-stone-900 mb-12">First Time on Snow: Les Elfes Ski Camp, Switzerland</motion.h2>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '48px', alignItems: 'flex-start' }}>
                <motion.div variants={itemVariants} style={{ width: '24%', maxWidth: '320px', position: 'sticky', top: '96px' }}>
                  <div style={{ position: 'relative', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                    <Image src="/alice-switzerland-les-elfes-skiing.jpg" alt="Alice skiing at Les Elfes Ski Camp in Switzerland" width={320} height={400} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                  </div>
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>December 2025 · Les Elfes Ski Camp, Switzerland</p>
                </motion.div>
                <motion.div variants={itemVariants} style={{ width: '68%' }}>
                  {switzerlandParagraphs.map((paragraph, index) => (
                    <motion.p key={index} variants={itemVariants} className="text-lg text-stone-600" style={{ marginBottom: index === switzerlandParagraphs.length - 1 ? '32px' : '28px', lineHeight: '1.8', marginTop: index === 0 ? '0px' : '0px' }}>
                      {paragraph}
                    </motion.p>
                  ))}
                  <button className="cert-link" onClick={() => setLightboxImage('/alice-ski-certificate.jpg')}><ArrowRight className="cert-arrow" size={18} strokeWidth={2} />View my Les Elfes ski certificate</button>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* LOOKING AHEAD */}
          <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
            <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h2 variants={itemVariants} className="font-serif text-4xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '30px' }}>Looking Ahead</motion.h2>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '48px', alignItems: 'flex-start' }}>
                <motion.div variants={itemVariants} style={{ flex: 1 }}>
                  {lookingAheadParagraphs.map((paragraph, index) => (
                    <motion.p key={index} variants={itemVariants} className="text-lg text-stone-600" style={{ marginBottom: index === lookingAheadParagraphs.length - 1 ? '0px' : '28px', lineHeight: '1.8', marginTop: index === 0 ? '0px' : '0px' }}>
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>
                <motion.div variants={itemVariants} style={{ width: '16%', position: 'sticky', top: '96px' }}>
                  <div style={{ position: 'relative', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                    <Image src="/alice-looking-future.jpg" alt="Alice looking toward the future" width={200} height={300} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                  </div>
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>Looking forward to what's next</p>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </>
      ) : (
        <>
          {/* ========== MOBILE ========== */}

          {/* MY STORY */}
          <section className="pt-8 pb-16 px-6">
            <motion.div className="max-w-3xl mx-auto text-left" variants={containerVariants} initial="hidden" animate="visible">

              <motion.h3 variants={itemVariants} className="font-serif text-2xl tracking-tight text-stone-900" style={{ marginTop: '0px', marginBottom: '24px', fontWeight: 600 }}>Roots in Hangzhou</motion.h3>

              <motion.div variants={itemVariants} style={centeredMedia}>
                <div style={{ maxWidth: '400px', width: '100%' }}>
                  <Image src="/alice-family.jpg" alt="Alice Lou with her family" width={400} height={500} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} priority />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>My family: my whole world</p>
                </div>
              </motion.div>

              {rootsParagraphs.map((paragraph, index) => (
                <motion.p key={index} variants={itemVariants} className="text-lg text-stone-600" style={bodyText}>
                  {paragraph}
                </motion.p>
              ))}

              <motion.div variants={itemVariants} style={centeredMedia}>
                <div style={{ maxWidth: '400px', width: '100%' }}>
                  <video src="/hangzhou-video.mp4" controls playsInline preload="metadata" style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block', boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }} />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>My hometown: Hangzhou, China</p>
                </div>
              </motion.div>

              <motion.h3 variants={itemVariants} className="font-serif text-2xl tracking-tight text-stone-900" style={topicHeading(false)}>Friends Who Feel Like Family</motion.h3>

              <motion.div variants={itemVariants} style={centeredMedia}>
                <div style={{ maxWidth: '400px', width: '100%' }}>
                  <Image src="/alice-friends.jpg" alt="Alice Lou with her closest friends" width={400} height={500} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block', objectFit: 'cover' }} />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>With my closest friends</p>
                </div>
              </motion.div>

              {friendsParagraphs.map((paragraph, index) => (
                <motion.p key={index} variants={itemVariants} className="text-lg text-stone-600" style={bodyText}>
                  {paragraph}
                </motion.p>
              ))}

              <motion.h3 variants={itemVariants} className="font-serif text-2xl tracking-tight text-stone-900" style={topicHeading(false)}>The World Is My Classroom</motion.h3>

              <motion.div variants={itemVariants} style={centeredMedia}>
                <div style={{ maxWidth: '400px', width: '100%' }}>
                  <Image src="/alice-travel.jpg" alt="Alice Lou and her siblings at the Sydney Harbour Bridge in Australia" width={400} height={500} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block', objectFit: 'cover' }} />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>With my siblings in Australia</p>
                </div>
              </motion.div>

              {travelParagraphs.map((paragraph, index) => (
                <motion.p key={index} variants={itemVariants} className="text-lg text-stone-600" style={bodyText}>
                  {paragraph}
                </motion.p>
              ))}

              <motion.h3 variants={itemVariants} className="font-serif text-2xl tracking-tight text-stone-900" style={topicHeading(false)}>Always in Motion</motion.h3>

              <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <p className="text-lg text-stone-600" style={bodyText}>{motionParagraphs[0]}</p>
                  <p className="text-lg text-stone-600" style={{ ...bodyText, marginBottom: 0 }}>{motionParagraphs[1]}</p>
                </div>
                <div style={{ width: '42%', flexShrink: 0 }}>
                  <video src="/alice-bicycle.mp4" autoPlay muted loop playsInline style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>Cycling with my brother, Mike, along the Qiantang River</p>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* SWITZERLAND */}
          <section className="py-16 px-6 bg-stone-50">
            <motion.div className="max-w-3xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h2 variants={itemVariants} className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-10">First Time on Snow: Les Elfes Ski Camp, Switzerland</motion.h2>

              <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-start', marginBottom: '28px' }}>
                <div style={{ width: '38%', flexShrink: 0 }}>
                  <Image src="/alice-switzerland-les-elfes-skiing.jpg" alt="Alice skiing at Les Elfes Ski Camp in Switzerland" width={320} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block', objectFit: 'cover' }} />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>December 2025 · Les Elfes Ski Camp, Switzerland</p>
                </div>
                <p className="text-lg text-stone-600" style={{ lineHeight: '1.8', margin: 0, flex: 1 }}>{switzerlandParagraphs[0]}</p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>{switzerlandParagraphs[1]}</p>
                <p className="text-lg text-stone-600" style={{ marginBottom: '32px', lineHeight: '1.8' }}>{switzerlandParagraphs[2]}</p>
                <button className="cert-link" onClick={() => setLightboxImage('/alice-ski-certificate.jpg')}><ArrowRight className="cert-arrow" size={18} strokeWidth={2} />View my Les Elfes ski certificate</button>
              </motion.div>
            </motion.div>
          </section>

          {/* LOOKING AHEAD */}
          <section className="py-16 px-6 bg-white">
            <motion.div className="max-w-3xl mx-auto text-left" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h2 variants={itemVariants} className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-10">Looking Ahead</motion.h2>

              <motion.p variants={itemVariants} className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>{lookingAheadParagraphs[0]}</motion.p>

              <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
                <div style={{ maxWidth: '320px', width: '100%' }}>
                  <Image src="/alice-looking-future.jpg" alt="Alice looking toward the future" width={200} height={300} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block', objectFit: 'cover' }} />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>Looking forward to what's next</p>
                </div>
              </motion.div>

              <motion.p variants={itemVariants} className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>{lookingAheadParagraphs[1]}</motion.p>

              <motion.p variants={itemVariants} className="text-lg text-stone-600" style={{ marginBottom: '0px', lineHeight: '1.8' }}>{lookingAheadParagraphs[2]}</motion.p>
            </motion.div>
          </section>
        </>
      )}

      {/* CLOSING BAND */}
      <section className="py-24 px-6 bg-white" style={{ textAlign: 'center', paddingTop: '200px', paddingBottom: '96px' }}>
        <p className="font-serif italic text-2xl md:text-3xl text-stone-700">"Today is the first day of the rest of my life."</p>
      </section>

      {/* LIGHTBOX */}
      {lightboxImage && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} role="dialog" aria-modal="true" aria-label="Certificate preview" onClick={() => setLightboxImage(null)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(12,10,9,0.85)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px', cursor: 'zoom-out' }}>
          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '85vh', width: '100%', height: '100%', cursor: 'default' }} onClick={(e) => e.stopPropagation()}>
            <Image src={lightboxImage} alt="Certificate" fill sizes="(max-width: 768px) 90vw, 80vw" style={{ objectFit: 'contain', borderRadius: '8px', boxShadow: '0 24px 80px rgba(0,0,0,0.5)' }} />
          </div>
          <button className="lightbox-close" onClick={() => setLightboxImage(null)} aria-label="Close preview" style={{ position: 'absolute', top: '24px', right: '32px' }}>
             <X size={24} color="white" />
          </button>
        </motion.div>
      )}
    </div>
  );
}