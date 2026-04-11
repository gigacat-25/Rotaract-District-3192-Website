import ClubCard from "@/components/ClubCard";
import clubsData from "@/mock/clubs.json";

export default function ClubsDirectoryPage() {
  const activeClubs = clubsData.filter((c: any) => c.status === "active");

  return (
    <main
      className="lg:ml-64 min-h-screen pt-24 pb-12 px-4 md:px-12"
      style={{ background: "var(--color-abyss)" }}
    >
      {/* Header */}
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div>
          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3"
            style={{ color: "var(--color-crest)", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Clubs Directory
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Connect with {activeClubs.length} clubs across the district. Monitor
            performance, engagement, and growth in real-time.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div
            className="p-1 rounded-2xl flex"
            style={{ background: "rgba(10, 53, 96, 0.5)", border: "1px solid var(--border-subtle)" }}
          >
            <button
              className="px-4 py-2 rounded-xl text-sm font-bold"
              style={{ background: "var(--color-current)", color: "var(--color-crest)" }}
            >
              Grid View
            </button>
            <button
              className="px-4 py-2 text-sm font-medium transition-colors"
              style={{ color: "var(--text-secondary)" }}
            >
              List View
            </button>
          </div>
        </div>
      </header>

      {/* Search & Filter Bar */}
      <section className="mb-10 flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[300px] relative">
          <span
            className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2"
            style={{ color: "var(--color-reef)" }}
          >
            search
          </span>
          <input
            className="w-full pl-12 pr-6 py-4 rounded-2xl"
            placeholder="Search by club name, president, or university..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <select className="appearance-none pl-6 pr-12 py-4 rounded-2xl text-sm font-semibold cursor-pointer">
              <option>All Regions</option>
              <option>Colombo Metro</option>
              <option>Central Highlands</option>
              <option>Southern Coastal</option>
              <option>Northern Peninsula</option>
            </select>
            <span
              className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "var(--color-foam)" }}
            >
              expand_more
            </span>
          </div>
          <div className="relative">
            <select className="appearance-none pl-6 pr-12 py-4 rounded-2xl text-sm font-semibold cursor-pointer">
              <option>Performance: High to Low</option>
              <option>Performance: Low to High</option>
              <option>Members: Most to Least</option>
              <option>Engagement: Active First</option>
            </select>
            <span
              className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "var(--color-foam)" }}
            >
              filter_list
            </span>
          </div>
        </div>
      </section>

      {/* Clubs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
            icon={idx % 3 === 0 ? "stars" : idx % 3 === 1 ? "school" : "waves"}
          />
        ))}

        {/* Charter CTA Card */}
        <div
          className="relative rounded-[2rem] p-8 flex flex-col items-center justify-center text-center overflow-hidden min-h-[400px]"
          style={{
            background: "linear-gradient(135deg, rgba(14,107,168,0.3) 0%, rgba(5,30,56,0.95) 100%)",
            border: "1px solid rgba(0, 180, 216, 0.3)",
          }}
        >
          <div className="absolute inset-0 opacity-5">
            <img
              alt="Team collaborating"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <span
              className="material-symbols-outlined text-5xl mb-4"
              style={{ color: "var(--color-gold)", fontVariationSettings: "'FILL' 1" }}
            >
              add_circle
            </span>
            <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--color-crest)" }}>
              Charter a New Club?
            </h3>
            <p className="text-sm leading-relaxed mb-6 px-4" style={{ color: "var(--text-secondary)" }}>
              Start a new chapter in your community or university and lead the change.
            </p>
            <button className="btn-primary">Start Application</button>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-16 flex items-center justify-center gap-4">
        <button
          className="w-12 h-12 flex items-center justify-center transition-colors"
          style={{ color: "var(--text-muted)" }}
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <div className="flex items-center gap-2">
          <span
            className="w-8 h-8 flex items-center justify-center rounded-lg font-bold text-sm"
            style={{ background: "var(--color-current)", color: "var(--color-crest)" }}
          >
            1
          </span>
          {[2, 3].map((n) => (
            <span
              key={n}
              className="w-8 h-8 flex items-center justify-center rounded-lg cursor-pointer transition-colors text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              {n}
            </span>
          ))}
          <span style={{ color: "var(--text-muted)" }} className="px-2">
            ...
          </span>
          <span
            className="w-8 h-8 flex items-center justify-center rounded-lg cursor-pointer text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            12
          </span>
        </div>
        <button
          className="w-12 h-12 flex items-center justify-center transition-transform hover:scale-110"
          style={{ color: "var(--color-reef)" }}
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </main>
  );
}
