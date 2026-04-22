"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import eventsData from "@/mock/events.json";
import clubsData from "@/mock/clubs.json";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const stats = {
    clubsCount: clubsData.filter((c: any) => c.status === "active").length,
    membersCount: 4500,
    eventsYear: 184,
  };

  const containerRef = useRef(null);
  const statsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    // Stat counting animation
    const ctx = gsap.context(() => {
      const statsElements = document.querySelectorAll(".stat-number");
      statsElements.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") || "0");
        gsap.to(el, {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="pt-20 overflow-hidden ">
      {/* Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative px-6 py-24 flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto min-h-[80vh] items-center"
      >
        <div className="z-10 flex flex-col gap-8 flex-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-tertiary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">District 3192</span>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-on-surface font-display">
              LEAD THE <br />
              <span className="text-primary italic">MOVEMENT.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-on-surface-variant font-medium leading-tight max-w-[90%]"
          >
            Empowering the next generation of global citizens through action, leadership, and unwavering service.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 group transition-all hover:bg-primary/90 shadow-xl shadow-primary/20">
              Start Your Journey
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
          </motion.div>
        </div>
        
        {/* Dynamic Image Collage */}
        <div className="relative flex-1 w-full h-[500px] md:h-[600px]">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="absolute top-0 right-0 w-4/5 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl z-0"
          >
            <img 
              alt="Community action" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
            className="absolute -bottom-10 left-0 w-3/5 aspect-video rounded-3xl overflow-hidden shadow-3xl z-10 border-8 border-surface"
          >
            <img 
              alt="Leadership" 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800"
            />
          </motion.div>
          
          {/* Floating Element */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 -left-10 -container-high p-6 rounded-2xl shadow-xl z-20 backdrop-blur-md border border-outline-variant/30 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-tertiary/20 rounded-full flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">volunteer_activism</span>
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface">Live Impact</p>
                <p className="text-xs text-on-surface-variant">Active across 45+ cities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Impact Metric Bar - Dynamic Counting */}
      <section ref={statsRef} className="px-6 py-12 relative z-20 max-w-7xl mx-auto">
        <div className="-container-highest rounded-3xl p-12 flex justify-around items-center gap-8 shadow-inner border border-outline-variant/20 flex-wrap">
          <div className="flex flex-col items-center group">
            <span className="text-6xl font-black text-primary font-display stat-number" data-target={stats.clubsCount}>0</span>
            <span className="text-xs font-bold tracking-[0.4em] text-on-surface-variant uppercase mt-2 group-hover:text-primary transition-colors">Clubs Active</span>
          </div>
          <div className="w-px h-20 bg-outline-variant/30 hidden md:block"></div>
          <div className="flex flex-col items-center group">
            <span className="text-6xl font-black text-tertiary font-display stat-number" data-target={stats.membersCount}>0</span>
            <span className="text-xs font-bold tracking-[0.4em] text-on-surface-variant uppercase mt-2 group-hover:text-tertiary transition-colors">Volunteers</span>
          </div>
          <div className="w-px h-20 bg-outline-variant/30 hidden md:block"></div>
          <div className="flex flex-col items-center group">
            <span className="text-6xl font-black text-on-surface font-display stat-number" data-target={stats.eventsYear}>0</span>
            <span className="text-xs font-bold tracking-[0.4em] text-on-surface-variant uppercase mt-2 group-hover:text-primary transition-colors">Impact Projects</span>
          </div>
        </div>
      </section>

      {/* Core Pillars - Dynamic Grid */}
      <section className="px-6 py-32 flex flex-col gap-16 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 text-center items-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Blueprint</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter font-display max-w-3xl">Strategic Pillars of Change.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "Literacy First", 
              desc: "Deploying innovative learning solutions to marginalized communities.", 
              icon: "menu_book", 
              color: "bg-primary",
              delay: 0.1 
            },
            { 
              title: "Eco Resilience", 
              desc: "Building a sustainable future through radical environmental action.", 
              icon: "forest", 
              color: "bg-tertiary",
              delay: 0.2
            },
            { 
              title: "Leader Lab", 
              desc: "Nurturing professional excellence through mentorship and workshops.", 
              icon: "workspace_premium", 
              color: "bg-secondary",
              delay: 0.3
            }
          ].map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: pillar.delay }}
              viewport={{ once: true }}
              className="group bg-surface-container-low p-10 rounded-[2.5rem] flex flex-col gap-8 transition-all hover:-container-high hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className={`w-20 h-20 rounded-3xl ${pillar.color}/10 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                <span className={`material-symbols-outlined ${pillar.color.replace('bg-', 'text-')} text-4xl`}>{pillar.icon}</span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold font-display">{pillar.title}</h3>
                <p className="text-lg text-on-surface-variant leading-relaxed">{pillar.desc}</p>
              </div>
              <motion.button 
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 text-primary font-bold mt-auto group/btn"
              >
                Deep Dive <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-primary text-on-primary rounded-[3rem] p-16 overflow-hidden relative"
        >
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center justify-between">
            <div className="flex flex-col gap-6 max-w-xl">
              <h2 className="text-5xl md:text-7xl font-black leading-[1.1] font-display">THE FUTURE <br /> NEEDS YOU.</h2>
              <p className="text-xl text-on-primary/70">Join 4,500+ young leaders making a real difference in the world. No borders, just impact.</p>
            </div>
            <div className="flex flex-col w-full lg:w-auto min-w-[350px] gap-4">
              <input 
                className="bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-white placeholder:text-white/40 focus:bg-white/20 outline-none transition-all" 
                placeholder="Enter your email" 
                type="email"
              />
              <button className="bg-tertiary text-on-tertiary py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all">
                Get Connected
              </button>
            </div>
          </div>
          
          {/* Abstract Decorations */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-tertiary/20 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full"></div>
        </motion.div>
      </section>
    </main>
  );
}
