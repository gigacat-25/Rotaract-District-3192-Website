"use client";

export const runtime = 'edge';
export const dynamic = 'force-dynamic';


import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ClubEventsPage({ params }: { params: { slug: string } }) {
  // Unwrapping params for client component
  const unwrappedParams = React.use(params as any) as { slug: string };
  const slug = unwrappedParams.slug;
  const clubName = "RC Bangalore West";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".event-card", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".event-grid",
          start: "top 80%",
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full min-h-screen font-body text-on-surface selection:bg-primary-container selection:text-primary pb-24">
      <main className="pt-12 px-6 max-w-7xl mx-auto space-y-12">
        {/* Page Header */}
        <motion.header 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 border-b border-outline-variant/10 pb-12"
        >
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-label text-xs uppercase tracking-[0.4em] text-primary font-bold block"
            >
              {clubName}
            </motion.span>
            <h1 className="font-headline font-black tracking-tighter text-5xl md:text-7xl text-on-surface leading-tight">
              Events & <br /><span className="text-tertiary italic">Initiatives.</span>
            </h1>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="h-24 w-24 rounded-3xl -container-highest overflow-hidden shadow-2xl ring-4 ring-white shrink-0"
          >
            <Image
              alt="Club Logo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh8XtstJJFAJZgquBFivgocShivlpxDwoxmhpD0qVwt43RbHz1XsQGiIahsqjItuOsPD5KA5AARlGhYKrMQZ1RFkgyEUnYAF1eWFOa6puzu63OWuBY__ezMpB6FSYKHEN7HtUAzWLTqN0jGBxlvKvkmIY76u1JihxZj1wU8PG5PYqdICfEaq2Hn9X25uU2pQdkDYFCWheeP6VlDcQF64cvpPiR-cmCh07L7YeVqXnS7ZO4sarMZBIx2wDS39GdNv9-4HIGISNAGSly"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.header>

        {/* Dynamic Controls */}
        <section className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="-container-low rounded-2xl p-1 flex items-center gap-1 border border-outline-variant/20 shadow-sm w-full md:w-auto">
            <input
              className="bg-transparent border-none focus:ring-0 px-6 py-3 font-medium placeholder:text-on-surface-variant/40 outline-none min-w-[280px]"
              placeholder="Search initiatives..."
              type="text"
            />
            <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all">
              <span className="material-symbols-outlined text-sm">search</span>
              Find
            </button>
          </div>

          <nav className="-container-low p-1.5 rounded-2xl border border-outline-variant/10 flex gap-1">
            {["Upcoming", "Past", "Signature"].map((tab, idx) => (
              <button 
                key={tab}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${idx === 0 ? 'bg-white shadow-md text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </section>

        {/* Bento Grid - Dynamic Entrance */}
        <div className="event-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Featured Card */}
          <motion.div 
            className="event-card md:col-span-2 group relative overflow-hidden rounded-[3rem] -container-low aspect-[21/9] shadow-2xl border border-outline-variant/10"
          >
            <Image
              alt="Charter Day"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNbBNpZAq59D8DB3SR9UlY6MbhpdcuaAMMXp4KAqBSsEq8dBWFedmL_BpxXJR0DsA5mZiPbSxNrfN7NNUyiIYIhgSYC6yfGgfBuBIle-5zGQfb-BUJ7WP-z3HyYst4_F6-5Xod7iKgZAeAesuJ1qDagnlmVsa6ZzwaS1C4dZCYqo8XCYmcbYdyXG8TtvlrivbSP2c_Ug2D70u0AW62IVlf80qBzU2ikWJ4cKSHW4Gb6yJ3YW8O8a-pZfq1hbOLn2-YI4qWZof91MTx"
              width={1200}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 w-full z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-4">
                <span className="bg-tertiary text-on-tertiary text-[10px] font-black uppercase tracking-widest px-5 py-2 rounded-full">Next Milestone</span>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">Charter Day <br />Celebrations.</h2>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary font-black px-12 py-5 rounded-2xl shadow-2xl hover:bg-tertiary hover:text-on-tertiary transition-colors"
              >
                JOIN THE EVENT
              </motion.button>
            </div>
          </motion.div>

          {/* Signature Card */}
          <motion.div className="event-card group relative overflow-hidden rounded-[2.5rem] -container-low aspect-[4/5] shadow-xl border border-outline-variant/10">
            <Image
              alt="Project Vidya"
              className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTMWggl4PQb1cKuXUhBO4JBxciYSgf7EBNJRUxPPF1RMYcSVJSIHsme--0Ipkg0yJk7E6VpOqF_HJ05puw1bM4nT7R_TvMveF-SuixVbqMwPsV36-gaonMaJz4S5qeKhU8HB0hJPaVO8ck-L3qzxCaBK9oDnEekU1Zm2tqoHXNvdERXUNSDzCsvW3CFeIQIh9BKBqMNUSoLvF0podFL1f6nLI6OuvFCK8DHk1pcpPblrkK_Iars84haOXWJLgKuUuOAEA7b9xv0rQV"
              width={600}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full z-10 space-y-4">
              <span className="text-primary font-black text-[10px] uppercase tracking-widest">SIGNATURE INITIATIVE</span>
              <h3 className="text-3xl font-black text-on-surface leading-tight">Project <br />Vidya.</h3>
              <p className="text-on-surface-variant text-sm font-medium line-clamp-2">Elevating education through structural and digital support.</p>
              <button className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                EXPLORE <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </motion.div>

          {/* Smaller Cards Loop... */}
          {[
            { title: "Blood Drive", label: "PAST PROJECT", color: "text-tertiary" },
            { title: "Youth Lab", label: "UPCOMING", color: "text-primary" },
            { title: "Green City", label: "MONTHLY", color: "text-secondary" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              className="event-card -container-low p-10 rounded-[2rem] border border-outline-variant/10 hover:shadow-2xl transition-all"
            >
              <span className={`${item.color} text-[10px] font-black tracking-widest mb-4 block`}>{item.label}</span>
              <h3 className="text-3xl font-black mb-4 font-display">{item.title}.</h3>
              <p className="text-on-surface-variant text-sm font-medium mb-8">Empowering local communities through consistent and impactful service projects.</p>
              <button className="w-full py-4 border-2 border-outline-variant/30 rounded-2xl font-bold hover:-container-high transition-colors">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
