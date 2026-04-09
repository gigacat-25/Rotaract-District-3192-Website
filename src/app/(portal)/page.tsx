import EventCard from "@/components/EventCard";
import BentoCard from "@/components/BentoCard";

import eventsData from "@/mock/events.json";
import clubsData from "@/mock/clubs.json";

export default function HomePage() {
  const upcomingEvents = eventsData
    .filter((e: any) => e.status === 'published')
    .slice(0, 3);

  const stats = {
    clubsCount: clubsData.filter((c: any) => c.status === 'active').length,
    membersCount: 4500,
    eventsYear: 184
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700"></div>
        
        {/* Abstract Circles */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-400/20 rounded-full blur-[100px] animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
            <span className="text-xs font-bold text-white uppercase tracking-widest">Architectural Excellence</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none mb-8">
            ROTARACT <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-100">PORTAL</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            The unified digital authority for Rotaract District 3192. Seamless coordination, institutional growth, and global impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="/clubs" className="px-8 py-4 bg-white text-violet-700 font-bold rounded-2xl shadow-2xl hover:scale-105 transition-transform">
              Explore Clubs
            </a>
            <a href="/about" className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all">
              Learn More
            </a>
          </div>

          {/* Glass Search Bar */}
          <div className="mt-20 max-w-3xl mx-auto p-4 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/10 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/50">search</span>
                <input type="text" placeholder="Search clubs or events..." className="w-full pl-12 pr-4 py-3 bg-white/10 border-none rounded-xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/20 focus:outline-none" />
              </div>
              <button className="px-8 py-3 bg-white text-violet-700 font-bold rounded-xl whitespace-nowrap hover:bg-slate-100 transition-colors">
                Find My Club
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* INNOVATION IN ACTION (BENTO GRID) */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <span className="text-xs font-black text-primary uppercase tracking-widest mb-4 block">Our Core Pillars</span>
              <h2 className="text-5xl md:text-6xl font-black text-on-surface tracking-tighter">Innovation in <br/>Digital Service</h2>
            </div>
            <p className="text-on-surface-variant font-medium md:max-w-xs mt-6 md:mt-0">
              Pioneering the next generation of youth leadership through tech-driven community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* DISTRICT IMPACT (STATS) */}
      <section className="py-32 px-6 bg-surface-container-low relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center md:text-left">
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">Total Membership</p>
              <div className="text-7xl md:text-8xl font-black text-on-surface tracking-tighter mb-4">4,500+</div>
              <p className="text-on-surface-variant font-medium leading-relaxed">Dedicated young professionals across the district unified for service excellence.</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-4">Active Chapters</p>
              <div className="text-7xl md:text-8xl font-black text-secondary tracking-tighter mb-4">{stats.clubsCount}</div>
              <p className="text-on-surface-variant font-medium leading-relaxed">Vibrant clubs operating in universities and communities across South India.</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-[10px] font-black text-tertiary uppercase tracking-[0.3em] mb-4">Annual Projects</p>
              <div className="text-7xl md:text-8xl font-black text-tertiary tracking-tighter mb-4">1,200+</div>
              <p className="text-on-surface-variant font-medium leading-relaxed">Sustainable impact projects addressing critical community needs and global issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <h2 className="text-5xl font-black text-on-surface tracking-tighter">Upcoming Events</h2>
            <a href="/events" className="px-6 py-3 bg-surface-container-high text-primary font-bold rounded-xl hover:bg-surface-container-highest transition-colors flex items-center gap-2">
              View Calendar <span className="material-symbols-outlined">calendar_month</span>
            </a>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-12 snap-x no-scrollbar">
            {upcomingEvents.map((event: any, idx: number) => (
              <EventCard 
                key={idx}
                title={event.title}
                date={new Date(event.start_at).toLocaleDateString('en-US', { day: '2-digit', month: 'short' })}
                description={event.description}
                image={event.banner_url}
                slug={event.slug}
                badge={event.is_free ? 'Free Entry' : 'Ticketed Event'}
                statusBadge={event.status.toUpperCase()}
              />
            ))}
          </div>
        </div>
      </section>

      {/* JOIN SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-slate-950 p-12 md:p-24 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em] mb-8 inline-block">Charter Your Legacy</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">Ready to lead <br/> the next wave?</h2>
            <p className="text-lg text-slate-400 font-medium mb-12">Join a global movement of young leaders making an impact. Start your journey with Rotaract District 3192 today.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/clubs" className="px-10 py-5 bg-white text-slate-950 font-black rounded-2xl hover:scale-105 transition-transform uppercase tracking-widest text-xs">Find a Club</a>
              <a href="/contact" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all uppercase tracking-widest text-xs">Contact PR Team</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
