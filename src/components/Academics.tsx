// src/components/Academics.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Image from 'next/image';

export default function Academics() {
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
  const approachToLearningParagraphs = [
    "For me, learning isn't about memorizing answers. It is about asking better questions. Whether I am analyzing a poem, testing a hypothesis in science, or debating a historical event, I always want to know the why behind everything. My teachers know me as the student who stays after class to dig deeper, not just to chase a good grade, but because I genuinely want to understand.",
    "I have been at Hangzhou International School since PreK, so I have basically grown up in the IB system. Now that I am in Grade 8 (MYP3), I really enjoy how my classes connect to the real world through big projects and research. Over the last ten years, I have learned how to manage my time, work with classmates from all over the world, and take charge of my own learning.",
    "All that curiosity and hard work has shown up in my results, like consistently making the Honor Roll. But honestly, what I am most proud of isn't the certificates. It is the confidence I have built to tackle something totally unfamiliar and figure it out. As I get ready for the academic challenge of a US boarding school, I am excited to bring that same energy to new classrooms, new teachers, and new communities."
  ];

  const honorRollParagraphs = [
    "Growing up, my older sister Lisa was my role model. She always reached the top of her class and earned the Principal's Honor Roll, and I really wanted to follow in her footsteps. But when I started Grade 6, the jump from primary to middle school was harder than I expected. I struggled to adapt in my first semester and missed the Honor Roll. Instead of giving up, I focused on managing my time better and started talking to my teachers more. That effort paid off. I made the regular Honor Roll in Semester 2 of Grade 6, and then earned the Principal's Honor Roll in both semesters of Grade 7. Lisa showed me what was possible, but I am really proud that I found my own way to reach it.",
    "At HIS, Honor Roll awards are given every semester based on our grades in all subjects. To make the regular Honor Roll, you need a high average, usually mostly 6s and 7s on the IB scale of 1 to 7. The Principal's Honor Roll is the highest award, reserved for students who get near-perfect grades in every single class. You also have to be in good standing with no behavior or academic honesty issues to get either one."
  ];

  const awardsIntroText = "Long before I made the Honor Roll, I was already earning HIS Dragon Awards. These are special awards our school gives to Lower School students who show great effort, character, and community spirit. Winning these when I was younger showed me that the hard work I put into my studies now is just a continuation of who I have always been. To me, they are not just pieces of paper; they are proof that my commitment to doing my best has been there from the very beginning.";

  const nweaIntroText = "NWEA MAP Growth is a computer test we take at school to see how much we have learned and grown over time. It is adaptive, which means the questions get harder or easier depending on how I answer. This helps measure what I actually know, not just what my grade level is supposed to know. The results show up as percentiles, which compare my performance to a group of students my age around the world. For example, scoring in the 95th percentile in Reading means I did as well as or better than 95% of students in that group.";

  const testimonials = [
    {
      quote: "Alice is a happy and well-rounded student. She has grown this year as a leader when working within groups and has a kind way of delegating jobs to peers and deciding what she can contribute to a group. Sometimes, she struggles to have reasons for her ideas and finds that her group will not always respond in the way she wants, or tries to push tasks onto her that she is not strong at or engaged in. She needs to continue to work towards speaking up with a voice that can stand up for what she is good at. She is happy to communicate and share ideas with other open-minded students. Alice has shown improvements in her focus during learning times but still needs occasional reminders for self-management of choosing spots where she knows she can do her best learning. She has gained confidence in many areas of her learning and knows when to ask for support if she is feeling unreasonable worries about her friendships.",
      teacher: "Mr Patrick Wells", role: "Grade 5 Homeroom Teacher", year: "2023/24", photo: "/patrick-wells.jpg", initials: "PW",
    },
    {
      quote: "Alice had a tremendous year and showed a lot of growth, especially in her writing. She is always willing to share her thinking with her peers in class discussions. On a recent summative assessment, she successfully demonstrated critical thinking skills in selecting strong examples of textual evidence to support her essay's thesis.",
      teacher: "Mr Richard Hobson", role: "Grade 6 English Teacher", year: "2024/25", photo: "/richard-hobson.jpg", initials: "RH",
    },
    {
      quote: "Alice performed excellently in Mathematics, always focused and demonstrating a strong work ethic. To improve further, Alice should practice applying her knowledge to unfamiliar problems through worded questions. She exhibited excellent research skills, accurately identifying and collecting credible information, as demonstrated in her Excel project on why packaging boxes are larger than necessary.",
      teacher: "Mr Daniel Kirk", role: "Grade 6 Math Teacher", year: "2024/25", photo: "/daniel-kirk.jpg", initials: "DK",
    },
    {
      quote: "Alice exhibits a deep and perceptive understanding of how writers and creators use techniques to communicate point of view. Her analytical writing provides well-considered examples and thoughtful detail about audience effects, comparing texts to a very high level, not just content focused. Her essays are very clearly organised, with a coherent thesis maintained throughout, extended PEEL paragraphs, effective signposting and comparative language, and correct MLA formatting. Alice's writing flows smoothly with wide vocabulary and accurate grammar.",
      teacher: "Mr Dylan Tidbury", role: "Grade 7 English Teacher", year: "2025/26", photo: "/dylan-tidbury.jpg", initials: "DT",
    },
    {
      quote: "Alice has continued to be a high achieving Science student throughout the second semester. She consistently works hard and contributes thoughtfully to class activities and discussions. Her Unit 4 Reaction Time lab report (Criteria B and C) once again demonstrated strong written, organization, and critical thinking skills, this time through a clear experimental design and a detailed analysis of variables affecting human reaction time, followed by a thoughtful evaluation of her method and results. Alice's inquiry and research skills remain highly commendable.",
      teacher: "Ms Lindsay Vaughn", role: "Grade 7 Science Teacher", year: "2025/26", photo: "/lindsey-vaughn.jpg", initials: "LV",
    },
    {
      quote: "Alice has shown significant improvement in her Mathematics studies throughout the year. She has made strides in her effort, critical thinking skills, and organizational abilities. Throughout the second semester, she consistently demonstrated a high level of proficiency in comprehending the course material, as evidenced by her outstanding performance in both formative and summative assessments. While she is encouraged to participate more actively in classroom discussions and activities, she is well-positioned for success in Grade 8.",
      teacher: "Mr Gregory Venter", role: "Grade 7 Math Teacher", year: "2025/26", photo: "/gregory-venter.jpg", initials: "GV",
    },
  ];

  const certificates = [
    { label: "Honor Roll · Grade 6, Semester 2 (2024-25)", image: "/alice-honor-g6-2.jpg" },
    { label: "Principal's Honor Roll · Grade 7, Semester 1 (2025-26)", image: "/alice-honor-g7-1.jpg" },
    { label: "Principal's Honor Roll · Grade 7, Semester 2 (2025-26)", image: "/alice-honor-g7-2.jpg" },
  ];

  const dragonAwards = [
    { date: "June 2018", text: "Alice is a caring student, who shows empathy, compassion and respect towards the needs and feelings of others. These attributes have secured Alice many positive peer relationships and she is a well-liked and respected member of our class.", image: "/alice-june2018.jpg" },
    { date: "February 2019", text: "Alice is an inquirer and an excellent communicator. She speaks with confidence, expressing her curiosity and understanding with others.", image: "/alice-feb2019.jpg" },
    { date: "May 2021", text: "Alice is a great example of a knowledgeable student. She has a clear understanding of many topics. She is happy to share this knowledge with her peers. Also, she is always willing to develop her understanding further, asking questions and researching new information. Alice can then relate her knowledge to the new ideas we learn in class.", image: "/alice-may2021.jpg" },
    { date: "April 2022", text: "Alice is receiving a Dragon Award for always being kind and caring. Alice is a principled student, and she is eager to learn and assist others. I am proud to have Alice in my class.", image: "/alice-apr2022.jpg" },
    { date: "October 2022", text: "Alice was selected by her peers for this Dragon Award for being caring. From the beginning of the school year, she has supported numerous classmates at her table with spelling, writing, and math. Additionally, she has volunteered to create posters to aid our class with learning tools. When performing her bookclub artistic artist job, she is diligent with the process and the finished product. Thanks, Alice, for your compassion that has helped our 4C community be successful!", image: "/alice-oct2022.jpg" },
    { date: "April 2023", text: "Throughout your work in our Explorers unit, you have been very open-minded in your explorations of different perspectives. This is a natural skill of yours and you are continuing to develop your open-mindedness.", image: "/alice-apr2023.jpg" },
    { date: "November 2023", text: "Student Council. The Student Council Mission is to include everyone in our community by making HIS feel like a kind, comfortable, and safe place where every student is welcomed and accepted for who they are. We value taking action towards making healthy change in our community.", image: "/alice-nov2023.jpg" },
  ];

  const centeredMedia = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "28px",
    marginTop: "8px",
  };

  return (
    <main className="bg-white">

      {/* PAGE HEADER - shared */}
      <section className="pt-24 pb-14 px-6 md:px-12 lg:px-20 bg-white">
        <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-stone-900 mb-6">
            Academics
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-stone-600 max-w-2xl leading-relaxed" style={{ lineHeight: '1.8' }}>
            A curious mind, a disciplined work ethic, and a genuine love of learning shaped by more than a decade in an International Baccalaureate school.
          </motion.p>
        </motion.div>
      </section>

      {isDesktop ? (
        <>
          {/* DESKTOP LAYOUT */}

          {/* THREE-COLUMN LAYOUT */}
          <section className="pb-24 px-6 md:px-12 lg:px-20 bg-white">
            <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'flex-start' }}>

                <motion.div variants={itemVariants} style={{ width: '20%', position: 'sticky', top: '96px' }}>
                  <div style={{ width: '100%', marginBottom: '14px' }}>
                    <Image src="/alice-book.jpg" alt="Alice reading a book" width={300} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} priority />
                  </div>
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>Lost in a good book</p>
                </motion.div>

                <motion.div variants={itemVariants} style={{ width: '46%' }}>
                  <h2 className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '0px' }}>My Approach to Learning</h2>
                  
                  {approachToLearningParagraphs.map((paragraph, index) => (
                    <motion.p key={index} variants={itemVariants} className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>
                      {paragraph}
                    </motion.p>
                  ))}

                  <div className="bg-stone-50 rounded-lg p-8 mt-10">
                    <h3 className="font-serif text-xl font-normal text-stone-900 mb-6">At a Glance</h3>
                    <ul style={{ paddingLeft: '50px', margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <li className="text-stone-600 text-base" style={{ lineHeight: '1.8', listStyleType: 'disc' }}><strong className="text-stone-900 font-medium">IB Middle Years Programme</strong> · Grade 8 (MYP3)</li>
                      <li className="text-stone-600 text-base" style={{ lineHeight: '1.8', listStyleType: 'disc' }}><strong className="text-stone-900 font-medium">Hangzhou International School</strong> · since PreK</li>
                      <li className="text-stone-600 text-base" style={{ lineHeight: '1.8', listStyleType: 'disc' }}><strong className="text-stone-900 font-medium">Consistent Honor Roll</strong> · multiple years</li>
                      <li className="text-stone-600 text-base" style={{ lineHeight: '1.8', listStyleType: 'disc' }}><strong className="text-stone-900 font-medium">Strengths across subjects</strong> · English, Science, Math</li>
                      <li className="text-stone-600 text-base" style={{ lineHeight: '1.8', listStyleType: 'disc' }}><strong className="text-stone-900 font-medium">Bilingual</strong> · Fluent in English and Mandarin</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} style={{ width: '30%', position: 'sticky', top: '96px' }}>
                  <video src="/his-video.mp4" controls playsInline muted preload="metadata" style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block', boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }} />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>My school: Hangzhou International School</p>
                </motion.div>

              </div>
            </motion.div>
          </section>

          {/* TEACHER TESTIMONIALS */}
          <section className="py-20 px-6 md:px-12 lg:px-20 bg-stone-50">
            <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h2 variants={itemVariants} className="font-serif text-4xl font-normal tracking-tight text-stone-900 mb-12">Teacher Testimonials</motion.h2>
              <div className="testimonial-grid">
                {testimonials.map((t, index) => (
                  <motion.div key={index} variants={itemVariants} style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-start' }}>
                    {t.photo ? (
                      <div style={{ flexShrink: 0, width: '100px' }}>
                        <Image src={t.photo} alt={t.teacher} width={100} height={100} style={{ width: '100%', height: 'auto', borderRadius: '6px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', display: 'block' }} />
                      </div>
                    ) : (
                      <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#e7e5e4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span className="font-serif" style={{ fontSize: '20px', color: '#57534e' }}>{t.initials}</span>
                      </div>
                    )}
                    <div>
                      <p style={{ fontStyle: 'italic', color: '#57534e', lineHeight: '1.7', fontSize: '15px', marginTop: '0px', marginBottom: '16px' }}>"{t.quote}"</p>
                      <p style={{ color: '#1c1917', fontWeight: 600, fontSize: '14px', margin: '0px' }}>{t.teacher}</p>
                      <p style={{ color: '#78716c', fontSize: '12px', marginTop: '4px', marginBottom: '0px' }}>{t.role} · {t.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* HONOR ROLL */}
          <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
            <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h2 variants={itemVariants} className="font-serif text-4xl font-normal tracking-tight text-stone-900 mb-12">Honor Roll</motion.h2>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '48px', alignItems: 'flex-start' }}>
                <motion.div variants={itemVariants} style={{ width: '34%', position: 'sticky', top: '96px' }}>
                  <div style={{ width: '100%', marginBottom: '14px' }}>
                    <Image src="/alice-honor-roll.jpg" alt="Alice Lou with her Honor Roll recognition" width={400} height={500} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} />
                  </div>
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>A proud Honor Roll moment</p>
                </motion.div>
                <motion.div variants={itemVariants} style={{ width: '58%' }}>
                  {honorRollParagraphs.map((paragraph, index) => (
                    <motion.p key={index} variants={itemVariants} className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>
                      {paragraph}
                    </motion.p>
                  ))}
                  
                  <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a8a29e', margin: '0px 0px 16px 0px' }}>View certificates</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {certificates.map((cert, index) => (
                      <button key={index} className="cert-link" onClick={() => setLightboxImage(cert.image)}>
                        <ArrowRight className="cert-arrow" size={18} strokeWidth={2} />{cert.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* AWARDS & RECOGNITION */}
          <section className="py-20 px-6 md:px-12 lg:px-20 bg-stone-50 pb-16">
            <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h2 variants={itemVariants} className="font-serif text-4xl font-normal tracking-tight text-stone-900 mb-8">Awards & Recognition</motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8', marginTop: '0px' }}>
                {awardsIntroText}
              </motion.p>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '48px', alignItems: 'flex-start' }}>
                <motion.div variants={itemVariants} style={{ width: '66%' }}>
                  <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a8a29e', margin: '0px 0px 20px 0px' }}>Click an award date to view its certificate</p>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0px', display: 'flex', flexDirection: 'column', gap: '14px', margin: '0px 0px 28px 0px' }}>
                    {dragonAwards.map((a, index) => (
                      <li key={index}>
                        <button className="cert-link" onClick={() => a.image && setLightboxImage(a.image)}>
                          <ArrowRight className="cert-arrow" size={18} strokeWidth={2} />
                          <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start' }}>
                            <span style={{ fontWeight: 600, color: '#C5A059', fontSize: '16px' }}>{a.date}</span>
                            <span style={{ fontSize: '15px', color: '#57534e', lineHeight: '1.7', textAlign: 'left' }}>{a.text}</span>
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={itemVariants} style={{ width: '28%', position: 'sticky', top: '96px' }}>
                  <div style={{ width: '100%', marginBottom: '14px' }}>
                    <Image src="/alice-lowerschool-award.jpg" alt="Alice with her Lower School award" width={300} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} />
                  </div>
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>A Dragon Award moment from Lower School</p>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* NWEA RESULTS */}
          <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
            <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h2 variants={itemVariants} className="font-serif text-4xl font-normal tracking-tight text-stone-900 mb-8">Spring 2026 NWEA Results</motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8', marginTop: '0px' }}>
                {nweaIntroText}
              </motion.p>
              <motion.ul variants={itemVariants} style={{ listStyleType: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '14px', margin: '0px 0px 36px 0px' }}>
                <li style={{ color: '#a8a29e' }}><span style={{ color: '#57534e', fontSize: '16px' }}><strong style={{ color: '#1c1917', fontWeight: 600 }}>Mathematics</strong> · 77th percentile</span></li>
                <li style={{ color: '#a8a29e' }}><span style={{ color: '#57534e', fontSize: '16px' }}><strong style={{ color: '#1c1917', fontWeight: 600 }}>Language Arts: Reading</strong> · 95th percentile</span></li>
                <li style={{ color: '#a8a29e' }}><span style={{ color: '#57534e', fontSize: '16px' }}><strong style={{ color: '#1c1917', fontWeight: 600 }}>Language Arts: Usage</strong> · 83rd percentile</span></li>
              </motion.ul>
              <motion.div variants={itemVariants}>
                <button className="cert-link" style={{ maxWidth: '460px' }} onClick={() => setLightboxImage('/alice-nwea.pdf')}>
                  <ArrowRight className="cert-arrow" size={18} strokeWidth={2} />View the full NWEA report (2 pages)
                </button>
              </motion.div>
            </motion.div>
          </section>
        </>
      ) : (
        <>
          {/* MOBILE LAYOUT */}

          {/* MY APPROACH TO LEARNING */}
          <section className="pb-16 px-6 bg-white">
            <motion.div className="max-w-3xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h2 variants={itemVariants} className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8" style={{ marginTop: '0px' }}>My Approach to Learning</motion.h2>

              {approachToLearningParagraphs.map((paragraph, index) => (
                <motion.p key={index} variants={itemVariants} className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>
                  {paragraph}
                </motion.p>
              ))}

              <motion.div variants={itemVariants} style={centeredMedia}>
                <div style={{ maxWidth: '400px', width: '100%' }}>
                  <video src="/his-video.mp4" controls playsInline muted preload="metadata" style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block', boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }} />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>My school: Hangzhou International School</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-stone-50 rounded-lg p-8 mt-10">
                <h3 className="font-serif text-xl font-normal text-stone-900 mb-6">At a Glance</h3>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                  <div style={{ maxWidth: '260px', width: '100%' }}>
                    <Image src="/alice-book.jpg" alt="Alice reading a book" width={300} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} />
                    <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>Lost in a good book</p>
                  </div>
                </div>
                <ul style={{ paddingLeft: '50px', margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <li className="text-stone-600 text-base" style={{ lineHeight: '1.8', listStyleType: 'disc' }}><strong className="text-stone-900 font-medium">IB Middle Years Programme</strong> · Grade 8 (MYP3)</li>
                  <li className="text-stone-600 text-base" style={{ lineHeight: '1.8', listStyleType: 'disc' }}><strong className="text-stone-900 font-medium">Hangzhou International School</strong> · since PreK</li>
                  <li className="text-stone-600 text-base" style={{ lineHeight: '1.8', listStyleType: 'disc' }}><strong className="text-stone-900 font-medium">Consistent Honor Roll</strong> · multiple years</li>
                  <li className="text-stone-600 text-base" style={{ lineHeight: '1.8', listStyleType: 'disc' }}><strong className="text-stone-900 font-medium">Strengths across subjects</strong> · English, Science, Math</li>
                  <li className="text-stone-600 text-base" style={{ lineHeight: '1.8', listStyleType: 'disc' }}><strong className="text-stone-900 font-medium">Bilingual</strong> · Fluent in English and Mandarin</li>
                </ul>
              </motion.div>
            </motion.div>
          </section>

          {/* TEACHER TESTIMONIALS */}
          <section className="py-20 px-6 bg-stone-50">
            <motion.div className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h2 variants={itemVariants} className="font-serif text-4xl font-normal tracking-tight text-stone-900 mb-12">Teacher Testimonials</motion.h2>
              <div className="testimonial-grid">
                {testimonials.map((t, index) => (
                  <motion.div key={index} variants={itemVariants} style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-start' }}>
                    {t.photo ? (
                      <div style={{ flexShrink: 0, width: '100px' }}>
                        <Image src={t.photo} alt={t.teacher} width={100} height={100} style={{ width: '100%', height: 'auto', borderRadius: '6px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', display: 'block' }} />
                      </div>
                    ) : (
                      <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#e7e5e4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span className="font-serif" style={{ fontSize: '20px', color: '#57534e' }}>{t.initials}</span>
                      </div>
                    )}
                    <div>
                      <p style={{ fontStyle: 'italic', color: '#57534e', lineHeight: '1.7', fontSize: '15px', marginTop: '0px', marginBottom: '16px' }}>"{t.quote}"</p>
                      <p style={{ color: '#1c1917', fontWeight: 600, fontSize: '14px', margin: '0px' }}>{t.teacher}</p>
                      <p style={{ color: '#78716c', fontSize: '12px', marginTop: '4px', marginBottom: '0px' }}>{t.role} · {t.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* HONOR ROLL */}
          <section className="py-16 px-6 bg-white">
            <motion.div className="max-w-3xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h2 variants={itemVariants} className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8">Honor Roll</motion.h2>

              {honorRollParagraphs.map((paragraph, index) => (
                <motion.p key={index} variants={itemVariants} className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8' }}>
                  {paragraph}
                </motion.p>
              ))}

              <motion.div variants={itemVariants} style={centeredMedia}>
                <div style={{ maxWidth: '400px', width: '100%' }}>
                  <Image src="/alice-honor-roll.jpg" alt="Alice Lou with her Honor Roll recognition" width={400} height={500} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>A proud Honor Roll moment</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a8a29e', margin: '0px 0px 16px 0px' }}>View certificates</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
                  {certificates.map((cert, index) => (
                    <button key={index} className="cert-link" style={{ width: '100%' }} onClick={() => setLightboxImage(cert.image)}>
                      <ArrowRight className="cert-arrow" size={18} strokeWidth={2} />{cert.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* AWARDS & RECOGNITION */}
          <section className="py-16 px-6 bg-stone-50 pb-16">
            <motion.div className="max-w-3xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h2 variants={itemVariants} className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8">Awards & Recognition</motion.h2>

              <motion.p variants={itemVariants} className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8', marginTop: '0px' }}>
                {awardsIntroText}
              </motion.p>

              <motion.div variants={itemVariants} style={centeredMedia}>
                <div style={{ maxWidth: '360px', width: '100%' }}>
                  <Image src="/alice-lowerschool-award.jpg" alt="Alice with her Lower School award" width={300} height={400} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} />
                  <p style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#57534e', marginTop: '14px', fontStyle: 'italic' }}>A Dragon Award moment from Lower School</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a8a29e', margin: '0px 0px 20px 0px' }}>Click an award date to view its certificate</p>
                <ul style={{ listStyleType: 'none', paddingLeft: '0px', display: 'flex', flexDirection: 'column', gap: '14px', margin: '0px 0px 28px 0px', width: '100%' }}>
                  {dragonAwards.map((a, index) => (
                    <li key={index}>
                      <button className="cert-link" style={{ width: '100%' }} onClick={() => a.image && setLightboxImage(a.image)}>
                        <ArrowRight className="cert-arrow" size={18} strokeWidth={2} />
                        <span style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start' }}>
                          <span style={{ fontWeight: 600, color: '#C5A059', fontSize: '16px' }}>{a.date}</span>
                          <span style={{ fontSize: '15px', color: '#57534e', lineHeight: '1.7', textAlign: 'left' }}>{a.text}</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </section>

          {/* NWEA RESULTS */}
          <section className="py-16 px-6 bg-white">
            <motion.div className="max-w-3xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <motion.h2 variants={itemVariants} className="font-serif text-3xl font-normal tracking-tight text-stone-900 mb-8">Spring 2026 NWEA Results</motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-stone-600" style={{ marginBottom: '28px', lineHeight: '1.8', marginTop: '0px' }}>
                {nweaIntroText}
              </motion.p>
              <motion.ul variants={itemVariants} style={{ listStyleType: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '14px', margin: '0px 0px 36px 0px' }}>
                <li style={{ color: '#a8a29e' }}><span style={{ color: '#57534e', fontSize: '16px' }}><strong style={{ color: '#1c1917', fontWeight: 600 }}>Mathematics</strong> · 77th percentile</span></li>
                <li style={{ color: '#a8a29e' }}><span style={{ color: '#57534e', fontSize: '16px' }}><strong style={{ color: '#1c1917', fontWeight: 600 }}>Language Arts: Reading</strong> · 95th percentile</span></li>
                <li style={{ color: '#a8a29e' }}><span style={{ color: '#57534e', fontSize: '16px' }}><strong style={{ color: '#1c1917', fontWeight: 600 }}>Language Arts: Usage</strong> · 83rd percentile</span></li>
              </motion.ul>
              <motion.div variants={itemVariants}>
                <button className="cert-link" style={{ width: '100%' }} onClick={() => setLightboxImage('/alice-nwea.pdf')}>
                  <ArrowRight className="cert-arrow" size={18} strokeWidth={2} />View the full NWEA report (2 pages)
                </button>
              </motion.div>
            </motion.div>
          </section>
        </>
      )}

      {/* CLOSING QUOTE - shared */}
      <section className="px-6 bg-white" style={{ textAlign: 'center', paddingTop: '100px', paddingBottom: '96px' }}>
        <p className="font-serif italic text-2xl md:text-3xl text-stone-700">
          "Discipline is doing the things you don't like doing, like you like doing it."
        </p>
      </section>

      {/* LIGHTBOX - shared */}
      {lightboxImage && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} role="dialog" aria-modal="true" aria-label="Certificate preview" onClick={() => setLightboxImage(null)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(12,10,9,0.85)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px', cursor: 'zoom-out' }}>
          {lightboxImage.endsWith('.pdf') ? (
            <iframe src={lightboxImage} title="NWEA report" style={{ width: '70%', height: '85vh', border: 'none', borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0 24px 80px rgba(0,0,0,0.5)' }} />
          ) : (
            <img src={lightboxImage} alt="Award certificate" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '90%', maxHeight: '85vh', borderRadius: '8px', boxShadow: '0 24px 80px rgba(0,0,0,0.5)', cursor: 'default', display: 'block' }} />
          )}
          <button className="lightbox-close" onClick={() => setLightboxImage(null)} aria-label="Close certificate preview" style={{ position: 'absolute', top: '24px', right: '32px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', cursor: 'pointer' }}>
            <X size={20} strokeWidth={2} />
          </button>
          <p style={{ position: 'absolute', bottom: '20px', left: 0, right: 0, textAlign: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '13px', letterSpacing: '0.08em', margin: 0 }}>Click anywhere or press Esc to close</p>
        </motion.div>
      )}
    </main>
  );
}