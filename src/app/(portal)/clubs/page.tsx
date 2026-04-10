import ClubCard from "@/components/ClubCard";
import clubsData from "@/mock/clubs.json";

export default function ClubsDirectoryPage() {
  const activeClubs = clubsData.filter((c: any) => c.status === 'active');

  return (
    <main className="lg:ml-64 pt-24 pb-12 px-4 md:px-12 bg-surface min-h-screen">
      {/* Header Section */}
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-3">Clubs Directory</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">Connect with {activeClubs.length} clubs across the district. Monitor performance, engagement, and growth in real-time.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-surface-container-high/50 p-1 rounded-2xl flex">
            <button className="px-4 py-2 bg-white shadow-sm rounded-xl text-sm font-bold text-primary">Grid View</button>
            <button className="px-4 py-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">List View</button>
          </div>
        </div>
      </header>

      {/* Search & Filter Bar */}
      <section className="mb-10 flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[300px] relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">search</span>
          <input className="w-full pl-12 pr-6 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary-container/20 text-on-surface placeholder:text-slate-400 focus:outline-none" placeholder="Search by club name, president, or university..." type="text"/>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <select className="appearance-none pl-6 pr-12 py-4 bg-surface-container-low border-none rounded-2xl text-sm font-semibold text-on-surface-variant focus:ring-2 focus:ring-primary-container/20 cursor-pointer focus:outline-none">
              <option>All Regions</option>
              <option>Colombo Metro</option>
              <option>Central Highlands</option>
              <option>Southern Coastal</option>
              <option>Northern Peninsula</option>
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
          </div>
          <div className="relative">
            <select className="appearance-none pl-6 pr-12 py-4 bg-surface-container-low border-none rounded-2xl text-sm font-semibold text-on-surface-variant focus:ring-2 focus:ring-primary-container/20 cursor-pointer focus:outline-none">
              <option>Performance: High to Low</option>
              <option>Performance: Low to High</option>
              <option>Members: Most to Least</option>
              <option>Engagement: Active First</option>
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">filter_list</span>
          </div>
        </div>
      </section>

      {/* Clubs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {activeClubs.map((club: any, idx: number) => (
          <ClubCard 
            key={idx}
            name={club.name}
            city={club.city}
            members={Number(club.member_count)}
            engagement={Number(Math.floor(Math.random() * 20) + 80)}
            badge={idx % 4 === 0 ? "Top Performing" : "Active Chapter"}
            type={idx % 2 === 0 ? "primary" : "secondary"}
            slug={club.slug}
            icon={idx % 3 === 0 ? "stars" : (idx % 3 === 1 ? "school" : "waves")}
          />
        ))}

        {/* Charter a New Club CTA */}
        <div className="relative bg-gradient-to-br from-primary-container to-secondary-container rounded-[2rem] p-8 flex flex-col items-center justify-center text-center overflow-hidden min-h-[400px]">
          <div className="absolute inset-0 opacity-10">
            <img alt="Team collaborating" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"/>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <span className="material-symbols-outlined text-white text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
            <h3 className="text-2xl font-bold text-white mb-3">Charter a New Club?</h3>
            <p className="text-on-primary-container text-sm leading-relaxed mb-6 px-4">Start a new chapter in your community or university and lead the change.</p>
            <button className="px-8 py-3 bg-white text-primary font-bold rounded-2xl shadow-xl hover:bg-surface-container-low transition-colors">Start Application</button>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-16 flex items-center justify-center gap-4">
        <button className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-container text-white font-bold">1</span>
          <span className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:bg-surface-container-low transition-colors cursor-pointer">2</span>
          <span className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:bg-surface-container-low transition-colors cursor-pointer">3</span>
          <span className="text-slate-300 px-2">...</span>
          <span className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:bg-surface-container-low transition-colors cursor-pointer">12</span>
        </div>
        <button className="w-12 h-12 flex items-center justify-center text-primary hover:scale-110 transition-transform">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </main>
  );
}
