import leaderboardData from "@/mock/leaderboard.json";

export default function HallOfFamePage() {
  const leaderboard = [...leaderboardData].sort((a: any, b: any) => a.rank - b.rank);

  const top1 = leaderboard[0];
  const top2 = leaderboard[1];
  const top3 = leaderboard[2];

  return (
    <main className="lg:ml-64 min-h-screen relative overflow-visible pb-24 bg-surface">
      {/* Background Accents */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[140px] -z-10"></div>
      <div className="fixed bottom-0 left-64 w-[500px] h-[500px] bg-secondary-container/5 rounded-full blur-[120px] -z-10"></div>

      <header className="p-8 md:p-12 text-center space-y-6">
        <div className="flex flex-col items-center gap-4">
          <span className="text-primary font-bold uppercase tracking-widest text-xs px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">The Pantheon</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-on-surface">Hall of Fame</h1>
          <p className="text-xl text-on-surface-variant font-medium max-w-2xl leading-relaxed">Celebrating the most dedicated and impactful leaders within District 3192.</p>
        </div>
      </header>

      {/* Podium Section */}
      <section className="px-8 md:px-12 mb-24">
        <div className="flex flex-col md:flex-row items-end justify-center gap-8 md:gap-12 pt-12">
          {/* 2nd Place */}
          <div className="order-2 md:order-1 flex flex-col items-center w-full md:w-auto">
            <div className="relative group mb-8">
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-surface shadow-lg rounded-xl flex items-center justify-center text-on-surface-variant font-bold border border-outline/5 transition-transform group-hover:scale-110 z-20">2</div>
              <img src={top2.profile_pic_url} alt={top2.name} className="w-32 h-32 rounded-[2rem] object-cover border-4 border-white shadow-xl rotate-[-3deg] group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <div className="text-center space-y-2 mb-8">
              <h3 className="text-xl font-black text-on-surface uppercase tracking-tight">{top2.name}</h3>
              <span className="bg-surface-container-high text-primary font-bold text-[10px] px-3 py-1 rounded-lg uppercase">{top2.points} PTS</span>
            </div>
            <div className="w-40 h-32 bg-surface-container-low/50 backdrop-blur-md rounded-t-[2.5rem] border-t border-white/40 shadow-sm"></div>
          </div>

          {/* 1st Place */}
          <div className="order-1 md:order-2 flex flex-col items-center w-full md:w-auto">
            <div className="relative group mb-8">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary shadow-xl rounded-2xl flex items-center justify-center text-white border-2 border-white/20 animate-bounce z-20">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              </div>
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-150 animate-pulse"></div>
              <img src={top1.profile_pic_url} alt={top1.name} className="w-48 h-48 rounded-[3rem] object-cover border-8 border-white shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="text-center space-y-2 mb-10">
              <h3 className="text-3xl font-black text-on-surface uppercase tracking-tight">{top1.name}</h3>
              <span className="bg-primary text-white font-bold text-xs px-6 py-2 rounded-xl shadow-lg shadow-primary/30 uppercase tracking-widest">{top1.points} POINTS</span>
            </div>
            <div className="w-56 h-48 bg-surface-container-lowest/80 backdrop-blur-xl rounded-t-[3rem] border-t border-white shadow-2xl relative z-0">
               <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-t-[3rem]"></div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="order-3 flex flex-col items-center w-full md:w-auto">
            <div className="relative group mb-8">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-surface shadow-lg rounded-xl flex items-center justify-center text-on-surface-variant font-bold border border-outline/5 transition-transform group-hover:scale-110 z-20">3</div>
              <img src={top3.profile_pic_url} alt={top3.name} className="w-28 h-28 rounded-[1.8rem] object-cover border-4 border-white shadow-xl rotate-[3deg] group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <div className="text-center space-y-2 mb-8">
              <h3 className="text-lg font-black text-on-surface uppercase tracking-tight">{top3.name}</h3>
              <span className="bg-surface-container-high text-primary font-bold text-[10px] px-3 py-1 rounded-lg uppercase">{top3.points} PTS</span>
            </div>
            <div className="w-36 h-24 bg-surface-container-low/50 backdrop-blur-md rounded-t-[2.2rem] border-t border-white/40 shadow-sm"></div>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section className="px-8 md:px-12">
        <div className="max-w-5xl mx-auto bg-surface-container-lowest/70 backdrop-blur-xl rounded-[2.5rem] border border-white/40 shadow-xl overflow-hidden">
          <div className="p-8 border-b border-outline/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-on-surface uppercase tracking-tight">Global Sequence</h2>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">Reporting Period: 2024-25</p>
            </div>
            <div className="flex items-center gap-3 p-1.5 bg-surface-container-low rounded-2xl border border-white/10">
              <button className="bg-white text-primary font-bold text-xs uppercase tracking-widest px-8 py-2.5 rounded-xl shadow-sm transition-all">District</button>
              <button className="text-on-surface-variant hover:text-primary font-bold text-xs uppercase tracking-widest px-8 py-2.5 transition-all">My Club</button>
            </div>
          </div>

          <div className="divide-y divide-outline/5">
            {leaderboard.map((member, index) => (
              <div key={index} className="p-8 hover:bg-white transition-all flex items-center gap-8 group">
                <div className="w-12 text-center">
                  <span className={`text-2xl font-black ${index < 3 ? 'text-primary' : 'text-outline/40'} group-hover:text-primary transition-colors`}>
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>
                
                <div className="flex items-center flex-1 gap-6">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-sm shrink-0">
                    <img src={member.profile_pic_url} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-black text-on-surface uppercase tracking-tight leading-none">{member.name}</h4>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">{member.club_name}</p>
                  </div>
                </div>

                <div className="hidden md:flex items-center gap-2">
                  {member.badges.slice(0, 2).map((badge: string, bIdx: number) => (
                    <span key={bIdx} className="bg-surface-container-low text-primary-container font-bold text-[9px] px-3 py-1.5 rounded-lg border border-white/20 uppercase tracking-widest shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="text-right shrink-0 min-w-[80px]">
                  <div className="text-2xl font-black text-on-surface leading-none">{member.points}</div>
                  <div className="text-[9px] font-bold text-outline uppercase tracking-widest mt-1">Pts</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
