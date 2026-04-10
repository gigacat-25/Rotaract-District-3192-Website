import membersData from "@/mock/members.json";

export default function ProfilePage() {
  const user = membersData[0];

  return (
    <main className="lg:ml-64 p-6 md:p-12 min-h-screen relative overflow-visible bg-surface">
      {/* Abstract Background Ornaments */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary-container/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[120px] -z-10"></div>

      {/* Profile Hero Section */}
      <section className="mb-12">
        <div className="bg-surface-container-lowest/70 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_10px_40px_rgba(2,47,86,0.06)] border border-white/20 flex flex-col md:flex-row items-center gap-10">
          <div className="relative">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-container to-secondary-container flex items-center justify-center overflow-hidden p-1 shadow-lg">
              <div className="w-full h-full rounded-full bg-surface-container-lowest flex items-center justify-center overflow-hidden">
                <img src={user.profile_pic_url} alt={user.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute bottom-2 right-2 w-10 h-10 bg-primary-container text-white rounded-full flex items-center justify-center border-4 border-surface-container-lowest">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col gap-1">
              <span className="text-primary font-bold uppercase tracking-widest text-xs">Rotaractor Profile</span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface">{user.name}</h1>
              <p className="text-xl text-on-surface-variant font-medium">President & Strategic Planner</p>
            </div>
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <div className="px-4 py-2 bg-surface-container-low rounded-xl flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">apartment</span>
                <span className="text-sm font-semibold">Rotaract Club of Chennai</span>
              </div>
              <div className="px-4 py-2 bg-surface-container-low rounded-xl flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span className="text-sm font-semibold">Greater Metro Region</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button className="px-8 py-3 bg-gradient-to-br from-primary-container to-secondary-container text-white rounded-xl font-bold shadow-xl hover:-translate-y-1 transition-all">
              Edit Profile
            </button>
            <button className="px-8 py-3 bg-white border border-outline/10 text-on-surface rounded-xl font-bold hover:bg-surface-container-low transition-all">
              Share Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Bento Grid Activity Summary */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Large Stats Card */}
          <div className="md:col-span-2 bg-surface-container-low/50 rounded-[2rem] p-8 flex flex-col justify-between border border-white/20">
            <div>
              <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Community Impact</h3>
              <div className="text-5xl font-black text-on-surface mb-2">1,240<span className="text-primary-container">+</span></div>
              <p className="text-on-surface-variant leading-relaxed">Volunteering hours recorded across 14 distinct community projects in this ROTA year.</p>
            </div>
            <div className="mt-8 flex gap-4 items-center">
              <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-primary-container rounded-full"></div>
              </div>
              <span className="text-xs font-bold text-primary whitespace-nowrap">85% Goal</span>
            </div>
          </div>
          {/* Small Stats Cards */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-outline/5 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 bg-secondary-container/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>event_available</span>
            </div>
            <div className="text-3xl font-black">42</div>
            <div className="text-on-surface-variant text-sm font-medium">Events Attended</div>
          </div>
          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-outline/5 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 bg-primary-container/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            </div>
            <div className="text-3xl font-black">08</div>
            <div className="text-on-surface-variant text-sm font-medium">Awards Earned</div>
          </div>
        </div>
      </section>

      {/* Events & Achievements Split */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Participated Events */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-on-surface">Recent Participation</h2>
              <p className="text-on-surface-variant">The latest milestones in your Rotaract journey.</p>
            </div>
            <a href="#" className="text-primary font-bold text-sm hover:underline">View Timeline</a>
          </div>
          <div className="space-y-6">
            <div className="flex gap-6 p-6 bg-white rounded-2xl border border-outline/5 shadow-sm hover:shadow-md transition-all group">
              <div className="w-24 h-24 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover group-hover:scale-110 transition-all" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 bg-surface-container-high text-primary-container text-[10px] font-black uppercase rounded-lg">Summit</span>
                  <span className="text-xs text-on-surface-variant font-medium">Oct 12, 2023</span>
                </div>
                <h4 className="text-lg font-bold mt-2">Annual Leadership Conclave</h4>
                <p className="text-on-surface-variant text-sm line-clamp-1">Strategic workshop on member engagement and growth.</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-secondary-container">stars</span>
                  <span className="text-xs font-bold">Certificate Issued</span>
                </div>
              </div>
            </div>
            <div className="flex gap-6 p-6 bg-white rounded-2xl border border-outline/5 shadow-sm hover:shadow-md transition-all group">
              <div className="w-24 h-24 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover group-hover:scale-110 transition-all" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 bg-surface-container-high text-primary-container text-[10px] font-black uppercase rounded-lg">Community</span>
                  <span className="text-xs text-on-surface-variant font-medium">Sep 28, 2023</span>
                </div>
                <h4 className="text-lg font-bold mt-2">Clean Ocean Initiative</h4>
                <p className="text-on-surface-variant text-sm line-clamp-1">Environmental conservation project involving 200+ volunteers.</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-secondary-container">stars</span>
                  <span className="text-xs font-bold">12 Service Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Sidebar */}
        <div className="bg-surface-container-low/30 border border-white/20 rounded-[2.5rem] p-8">
          <h2 className="text-2xl font-bold text-on-surface mb-8">Achievements</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
              </div>
              <div>
                <div className="text-sm font-bold">Distinguished Leader</div>
                <div className="text-xs text-on-surface-variant">Top 5% performers in region</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
              </div>
              <div>
                <div className="text-sm font-bold">Philanthropy Master</div>
                <div className="text-xs text-on-surface-variant">1000+ service hours milestone</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              </div>
              <div>
                <div className="text-sm font-bold">Team Anchor</div>
                <div className="text-xs text-on-surface-variant">Recognized mentor for 10 members</div>
              </div>
            </div>
          </div>
          <div className="mt-12 p-6 bg-gradient-to-br from-primary-container to-secondary-container rounded-2xl text-white relative overflow-hidden shadow-lg">
            <div className="relative z-10">
              <h4 className="font-bold text-lg mb-2">Unlocked: Elite Status</h4>
              <p className="text-white/80 text-xs mb-4">You have achieved the highest tier of engagement this quarter.</p>
              <button className="w-full py-2 bg-white/20 backdrop-blur-md rounded-lg text-xs font-bold hover:bg-white/30 transition-colors">Claim Rewards</button>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
