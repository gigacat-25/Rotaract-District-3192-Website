import EventCard from "@/components/EventCard";
import BentoCard from "@/components/BentoCard";
import ScrollReveal from "@/components/ScrollReveal";
import { EtherealShadow } from "@/components/ui/etheral-shadow";

import eventsData from "@/mock/events.json";
import clubsData from "@/mock/clubs.json";

export default function HomePage() {
  const upcomingEvents = eventsData
    .filter((e: any) => e.status === "published")
    .slice(0, 3);

  const stats = {
    clubsCount: clubsData.filter((c: any) => c.status === "active").length,
    membersCount: 4500,
    eventsYear: 184,
  };

  return (
    <main>
      {/* ── HERO SECTION ──────────────────────────────────── */}
      <section className="relative w-full min-h-screen overflow-hidden" style={{ background: "#020b18" }}>

        {/* Bottom layer — deep abyss shadow */}
        <div className="absolute inset-0 z-0">
          <EtherealShadow
            color="rgba(0, 40, 100, 1)"
            animation={{ scale: 60, speed: 40 }}
            noise={{ opacity: 0.3, scale: 1.6 }}
            sizing="fill"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Top layer — active reef current, mix-blend for depth */}
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ mixBlendMode: "screen", opacity: 0.6 }}>
          <EtherealShadow
            color="rgba(0, 180, 216, 1)"
            animation={{ scale: 100, speed: 85 }}
            noise={{ opacity: 0.5, scale: 1.2 }}
            sizing="fill"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Ocean depth tint overlay */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,80,160,0.35) 0%, transparent 70%),
              radial-gradient(ellipse 60% 80% at 20% 80%, rgba(0,140,210,0.2) 0%, transparent 60%),
              radial-gradient(ellipse 50% 50% at 80% 20%, rgba(0,60,120,0.25) 0%, transparent 60%),
              linear-gradient(to bottom, rgba(2,11,24,0.55) 0%, rgba(2,11,24,0.15) 50%, rgba(2,11,24,0.8) 100%)
            `
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pb-28">

          {/* Badge */}
          <span
            className="inline-block mb-6 text-[11px] tracking-[0.18em] uppercase px-5 py-1.5 rounded-full backdrop-blur-sm"
            style={{
              border: "1px solid rgba(0,180,216,0.45)",
              background: "rgba(0,180,216,0.1)",
              color: "#90e0ef",
            }}
          >
            Rotaract District 3192 · Exuberant
          </span>

          {/* Headline */}
          <h1
            className="font-extrabold leading-[1.08] mb-5 max-w-3xl"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              background: "linear-gradient(135deg, #caf0f8 0%, #00b4d8 45%, #90e0ef 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Harnessing the Power<br />of Youth Leadership
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
            style={{ color: "#90e0ef", opacity: 0.85 }}
          >
            A unified portal for members, clubs, and the district —
            built for connection, service, and impact.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            <a
              href="/clubs"
              className="font-bold px-8 py-3 rounded-lg text-[#020b18] text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #f0a500, #c97d00)",
                boxShadow: "0 4px 20px rgba(240,165,0,0.35)",
              }}
            >
              Explore Clubs
            </a>
            <a
              href="/events"
              className="font-semibold px-8 py-3 rounded-lg text-[#00b4d8] text-sm border border-[rgba(0,180,216,0.55)] hover:bg-[rgba(0,180,216,0.1)] transition-all duration-200"
            >
              Upcoming Events
            </a>
          </div>

          {/* Glass search bar */}
          <div
            className="max-w-2xl w-full mx-auto p-3 rounded-2xl"
            style={{
              background: "rgba(10, 53, 96, 0.45)",
              border: "1px solid rgba(14, 107, 168, 0.4)",
              backdropFilter: "blur(14px)",
            }}
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <span
                  className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-xl"
                  style={{ color: "var(--color-reef)" }}
                >
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search clubs or events..."
                  className="w-full pl-12 pr-4 py-3 text-sm"
                  style={{ background: "transparent", border: "none", boxShadow: "none" }}
                />
              </div>
              <button
                className="btn-primary whitespace-nowrap"
                style={{ padding: "0.65rem 1.5rem", borderRadius: "10px" }}
              >
                Find My Club
              </button>
            </div>
          </div>
        </div>

        {/* Stats bar pinned to bottom of hero */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 flex justify-center flex-wrap gap-10 px-6 py-5 border-t border-[rgba(14,107,168,0.25)]"
          style={{ background: "rgba(2,11,24,0.65)", backdropFilter: "blur(16px)" }}
        >
          {[
            { num: stats.clubsCount.toString(), label: "Active Clubs" },
            { num: "4,500+",                    label: "Members" },
            { num: "1,200+",                    label: "Projects this year" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold" style={{ color: "var(--color-reef)" }}>{s.num}</div>
              <div className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "var(--text-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INNOVATION BENTO ──────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "var(--color-abyss)" }}>
        <ScrollReveal className="max-w-7xl mx-auto" animation="slide-up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <span
                className="text-xs font-black uppercase tracking-widest mb-4 block"
                style={{ color: "var(--color-reef)" }}
              >
                Our Core Pillars
              </span>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter" style={{ color: "var(--color-crest)" }}>
                Innovation in <br /> Digital Service
              </h2>
            </div>
            <p
              className="font-medium md:max-w-xs mt-6 md:mt-0"
              style={{ color: "var(--text-secondary)" }}
            >
              Pioneering the next generation of youth leadership through
              tech-driven community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BentoCard
              title="Institutional Growth"
              description="Scalable tools designed to help every club reach their maximum potential through digital efficiency."
              icon="query_stats"
              type="primary"
            />
            <BentoCard
              title="Strategic Impact"
              description="Measuring our district's success with data-driven insights and transparent reporting systems."
              icon="vitals"
              type="secondary"
              translateY={true}
            />
            <BentoCard
              title="Unified Governance"
              description="Seamless communication and coordination across 142+ clubs through one central authority."
              icon="hub"
              type="tertiary"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* ── DISTRICT IMPACT STATS ─────────────────────────── */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{ background: "var(--color-deep)" }}
      >
        <div
          className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, rgba(0, 180, 216, 0.05), transparent)",
          }}
        />
        <ScrollReveal
          className="max-w-7xl mx-auto relative z-10"
          delay={0.2}
          animation="fade"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: "Total Membership", value: "4,500+", color: "var(--color-reef)" },
              { label: "Active Chapters", value: stats.clubsCount, color: "var(--color-gold)" },
              { label: "Annual Projects", value: "1,200+", color: "var(--color-foam)" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left group cursor-default">
                <p
                  className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 transition-colors duration-500"
                  style={{ color: stat.color }}
                >
                  {stat.label}
                </p>
                <div
                  className="text-7xl md:text-8xl font-black tracking-tighter mb-4 group-hover:scale-105 transition-transform origin-left duration-500"
                  style={{ color: stat.color, fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {stat.value}
                </div>
                <p className="font-medium leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {i === 0 && "Dedicated young professionals across the district unified for service excellence."}
                  {i === 1 && "Vibrant clubs operating in universities and communities across South India."}
                  {i === 2 && "Sustainable impact projects addressing critical community needs and global issues."}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── UPCOMING EVENTS ───────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "var(--color-abyss)" }}>
        <ScrollReveal className="max-w-7xl mx-auto" animation="slide-left">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <h2
              className="text-5xl font-black tracking-tighter"
              style={{ color: "var(--color-crest)" }}
            >
              Upcoming Events
            </h2>
            <a
              href="/events"
              className="btn-secondary flex items-center gap-2"
              style={{ borderRadius: "10px" }}
            >
              View Calendar
              <span className="material-symbols-outlined">calendar_month</span>
            </a>
          </div>

          <div
            className="flex gap-6 overflow-x-auto pb-12 snap-x no-scrollbar"
            style={{
              WebkitMaskImage: "linear-gradient(to right, black 90%, transparent 100%)",
              maskImage: "linear-gradient(to right, black 90%, transparent 100%)",
            }}
          >
            {upcomingEvents.map((event: any, idx: number) => (
              <EventCard
                key={idx}
                title={event.title}
                date={new Date(event.start_at).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                })}
                description={event.description}
                image={event.banner_url}
                slug={event.slug}
                badge={event.is_free ? "Free Entry" : "Ticketed Event"}
                statusBadge={event.status.toUpperCase()}
              />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── JOIN SECTION ──────────────────────────────────── */}
      <section className="py-32 px-6" style={{ background: "var(--color-abyss)" }}>
        <ScrollReveal
          className="max-w-7xl mx-auto rounded-[3rem] p-12 md:p-24 relative overflow-hidden"
          animation="slide-up"
          style={{
            background: "linear-gradient(135deg, rgba(10,53,96,0.9) 0%, rgba(5,30,56,0.95) 100%)",
            border: "1px solid rgba(14, 107, 168, 0.4)",
            boxShadow: "0 0 80px rgba(0, 180, 216, 0.08)",
          }}
        >
          <div
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 100%, rgba(0,180,216,0.08), transparent 60%)",
            }}
          />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <span
              className="px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-8 inline-block"
              style={{
                background: "rgba(240, 165, 0, 0.1)",
                border: "1px solid rgba(240, 165, 0, 0.3)",
                color: "var(--color-gold)",
              }}
            >
              Charter Your Legacy
            </span>
            <h2
              className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none"
              style={{ color: "var(--color-crest)" }}
            >
              Ready to lead <br /> the next wave?
            </h2>
            <p className="text-lg font-medium mb-12" style={{ color: "var(--text-secondary)" }}>
              Join a global movement of young leaders making an impact. Start your
              journey with Rotaract District 3192 today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/clubs" className="btn-primary" style={{ padding: "0.9rem 2.5rem", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Find a Club
              </a>
              <a href="/contact" className="btn-secondary" style={{ padding: "0.9rem 2.5rem", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Contact PR Team
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
